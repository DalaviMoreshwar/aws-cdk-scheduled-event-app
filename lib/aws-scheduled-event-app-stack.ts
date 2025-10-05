import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { join } from 'path';

export class AwsScheduledEventAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFn = new Function(this, 'quoteFn', {
      runtime: Runtime.PYTHON_3_12,
      handler: 'app.handler',
      code: Code.fromAsset(join(__dirname, '../lambdas')),
      timeout: cdk.Duration.seconds(40)
    })
  }
}
