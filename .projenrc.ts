import { awscdk } from 'projen';
import { NpmAccess } from 'projen/lib/javascript';

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
  jsiiVersion: '~5.0.0',
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  packageName: '@xaaskit-cdk/aws-lambda-dotnet',
  npmAccess: NpmAccess.PUBLIC,
  publishToNuget: {
    packageId: 'XaasKit.CDK.AWS.Lambda.DotNet',
    dotNetNamespace: 'XaasKit.CDK.AWS.Lambda.DotNet',
  },
  artifactsDirectory: 'dist',
});
project.gitignore.exclude('/.yarn');
project.gitignore.addPatterns('/test/fixtures/**/bin', '/test/fixtures/**/obj');
project.npmignore?.include('src/**/Dockerfile');

project.synth();
