[![GitHub](https://img.shields.io/github/license/xaaskit/cdk-aws-lambda-dotnet?style=flat-square)](https://github.com/xaaskit/cdk-aws-lambda-dotnet/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@xaaskit-cdk/aws-lambda-dotnet?style=flat-square)](https://www.npmjs.com/package/@xaaskit-cdk/aws-lambda-dotnet)
[![Nuget](https://img.shields.io/nuget/v/XaasKit.CDK.AWS.Lambda.DotNet?style=flat-square)](https://www.nuget.org/packages/XaasKit.CDK.AWS.Lambda.DotNet/)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/xaaskit/cdk-aws-lambda-dotnet/release.yml?branch=main&label=release&style=flat-square)](https://github.com/xaaskit/cdk-aws-lambda-dotnet/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/xaaskit/cdk-aws-lambda-dotnet?sort=semver&style=flat-square)](https://github.com/xaaskit/cdk-aws-lambda-dotnet/releases)

# CDK AWS Lambda for .NET

This library provides constructs for .NET Lambda functions.

To use this module you will either need to have the [.NET CLI](https://dotnet.microsoft.com/en-us/download) installed (.NET SDK 6.0 or later) with the [AWS Lambda .NET Tools](https://aws.amazon.com/blogs/developer/net-core-global-tools-for-aws/) or Docker installed.

## Install

### TypeScript

```shell
npm install @xaaskit-cdk/aws-lambda-dotnet
```

or

```shell
yarn add @xaaskit-cdk/aws-lambda-dotnet
```

### C\# / .Net

```
dotnet add package XaasKit.CDK.AWS.Lambda.DotNet
```

## Usage

### Create a .NET Function

```typescript
new DotNetFunction(this, 'MyFunction', {
  projectDir: 'src/MyFunction'
});
```

See [DotNetFunction](https://github.com/xaaskit/cdk-aws-lambda-dotnet/blob/main//API.md#dotnetfunction-)

### Create a exposed .NET Web API

```typescript
const function = new DotNetFunction(this, 'MyWebApi', {
  projectDir: 'src/MyWebApi'
});

const functionUrl = function.addFunctionUrl({
  authType: lambda.FunctionUrlAuthType.NONE,
});

new CfnOutput(this, 'MyWebApiUrl', {
  value: functionUrl.url,
});
```

See [DotNetFunction](https://github.com/xaaskit/cdk-aws-lambda-dotnet/blob/main//API.md#dotnetfunction-)
