import { awscdk, JsonPatch } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  projenrcTs: true,
  name: '@xaaskit-cdk/aws-lambda-dotnet',  
  description: 'AWS CDK construct library for .NET Lambda functions.',
  majorVersion: 0,
  author: 'XaasKit',
  authorAddress: 'https://xaaskit.io',
  repositoryUrl: 'https://github.com/xaaskit/cdk-aws-lambda-dotnet.git',
  defaultReleaseBranch: 'main',
  cdkVersion: '2.54.0',
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: '@xaaskit-cdk/aws-lambda-dotnet',
  publishToNuget: {
    packageId: 'XaasKit.CDK.AWS.Lambda.DotNet',
    dotNetNamespace: 'XaasKit.CDK.AWS.Lambda.DotNet',
  },
});
project.gitignore.addPatterns('/test/fixtures/**/bin', '/test/fixtures/**/obj');

// Add setup actions to build & release workflow
const setupAction = [
  { name: 'Setup .NET CLI', uses: 'actions/setup-dotnet@v3.0.1', with: { 'dotnet-version': '6.0.x' } },
  { name: 'Install .NET Lambda Tools', run: 'dotnet tool install -g Amazon.Lambda.Tools' },
];
const buildWorkflow = project.tryFindObjectFile('.github/workflows/build.yml');
const releaseWorkflow = project.tryFindObjectFile('.github/workflows/release.yml');
buildWorkflow?.patch(JsonPatch.add('/jobs/build/env', { DOTNET_INSTALL_DIR: './.dotnet' } ));
releaseWorkflow?.patch(JsonPatch.add('/jobs/release/env', { DOTNET_INSTALL_DIR: './.dotnet' } ));
setupAction.forEach((action, index) => {
  buildWorkflow?.patch(JsonPatch.add('/jobs/build/steps/' + (index + 2), action ));
  releaseWorkflow?.patch(JsonPatch.add('/jobs/release/steps/' + (index + 3), action ));
});

project.synth();