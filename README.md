# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

# Challenge 1

1. Pull the quotes from a JSON file api somewhere
2. Create a function where you process those quotes, each time scheduled event, you will be serving to the RESTapi a random quote

# Challege 2
Scheduled emails where random quotes are sent to subscribers!



---

Here's what we'll cover:

Setting up the AWS Lambda Function: We'll start by creating a Python-based Lambda function.
Defining a Cron Schedule: Next, we'll define a cron expression to trigger our function at specific times.
Integrating with EventBridge: We'll then connect our cron schedule to the Lambda function using EventBridge.
Testing and Verification: We'll ensure our scheduled event system works as expected.
Exploring Extensions: Finally, we'll discuss potential enhancements for our quote generator.