import { awscdk, JsonPatch } from 'projen';

const project = new awscdk.AwsCdkConstructLibrary({
  projenrcTs: true,
  name: '@xaaskit-cdk/aws-lambda-dotnet',
  description: "AWS CDK construct library for .NET Lambda functions.",
  author: 'XaasKit',
  authorAddress: 'https://xaaskit.io',
  repositoryUrl: 'https://github.com/xaaskit/cdk-aws-lambda-dotnet.git',
  defaultReleaseBranch: 'main',
  cdkVersion: '2.54.0',
  // deps: [],                /* Runtime dependencies of this module. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.gitignore.addPatterns('/test/fixtures/**/bin', '/test/fixtures/**/obj');
//project.preCompileTask?.exec('if ! command -v <the_command> &> /dev/null; then dotnet tool install -g Amazon.Lambda.Tools; fi;');
// Add setup-dotnet action to build workflow
const buildWorkflow = project.tryFindObjectFile('.github/workflows/build.yml');
buildWorkflow?.patch(JsonPatch.add('/jobs/build/steps/2', { 'uses': 'actions/setup-dotnet@v3', 'with': { 'dotnet-version': '6.0.x' } }));
buildWorkflow?.patch(JsonPatch.add('/jobs/build/steps/3', { 'run': 'dotnet tool install -g Amazon.Lambda.Tools' }));

project.synth();