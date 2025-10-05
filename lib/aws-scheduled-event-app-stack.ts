import * as cdk from 'aws-cdk-lib';
import { Code, Function, Runtime } from 'aws-cdk-lib/aws-lambda';
import events = require('aws-cdk-lib/aws-events');
import { Construct } from 'constructs';
import { join } from 'path';
import { LambdaFunction } from 'aws-cdk-lib/aws-events-targets';

export class AwsScheduledEventAppStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const lambdaFn = new Function(this, 'cron-fn', {
      runtime: Runtime.PYTHON_3_12,
      handler: 'app.handler',
      code: Code.fromAsset(join(__dirname, '../lambdas')),
      timeout: cdk.Duration.seconds(300)
    });

    const rule = new events.Rule(this, 'cron-rule', {
      schedule: events.Schedule.expression('cron(0 18 ? * MON-FRI *)')
    });

    rule.addTarget(new LambdaFunction(lambdaFn))
  }
}
