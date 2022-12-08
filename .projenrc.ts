import { awscdk } from 'projen';

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

project.synth();