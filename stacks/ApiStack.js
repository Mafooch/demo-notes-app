import { Api, use } from "@serverless-stack/resources";
import { StorageStack } from "./StorageStack";


export function ApiStack({ stack, app }) {
  const { table } = use(StorageStack);

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      authorizer: "iam",
      function: {
        permissions: [table],
        environment: {
          TABLE_NAME: table.tableName,
          STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
        },
      },
    },
    routes: {
      "POST /notes": "functions/create.main",
      "GET /notes/{id}": "functions/get.main",
      "GET /notes": "functions/list.main",
      "PUT /notes/{id}": "functions/update.main",
      "DELETE /notes/{id}": "functions/delete.main",
      "POST /billing": "functions/billing.main",
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}

// npx aws-api-gateway-cli-test \
// --username='admin@example.com' \
// --password='Passw0rd!' \
// --user-pool-id='us-east-1_PSgULxF1e' \
// --app-client-id='41fhhf7nsh3q0j143sq7a1cld8' \
// --cognito-region='us-east-1' \
// --identity-pool-id='us-east-1:d09cf7a4-b5b4-4168-914e-996ead05f6fc' \
// --invoke-url='https://fe4bwch1pg.execute-api.us-east-1.amazonaws.com' \
// --api-gateway-region='us-east-1' \
// --path-template='/notes' \
// --method='POST' \
// --body='{"content":"hello world","attachment":"hello.jpg"}'

// npx aws-api-gateway-cli-test \
// --username='jpmaff@yahoo.com' \
// --password='Abcd1234!' \
// --user-pool-id='us-east-1_PSgULxF1e' \
// --app-client-id='41fhhf7nsh3q0j143sq7a1cld8' \
// --cognito-region='us-east-1' \
// --identity-pool-id='us-east-1:d09cf7a4-b5b4-4168-914e-996ead05f6fc' \
// --invoke-url='https://fe4bwch1pg.execute-api.us-east-1.amazonaws.com' \
// --api-gateway-region='us-east-1' \
// --path-template='/notes' \
// --method='GET' \

// npx aws-api-gateway-cli-test \
// --username='admin@example.com' \
// --password='Passw0rd!' \
// --user-pool-id='us-east-1_PSgULxF1e' \
// --app-client-id='41fhhf7nsh3q0j143sq7a1cld8' \
// --cognito-region='us-east-1' \
// --identity-pool-id='us-east-1:d09cf7a4-b5b4-4168-914e-996ead05f6fc' \
// --invoke-url='https://fe4bwch1pg.execute-api.us-east-1.amazonaws.com' \
// --api-gateway-region='us-east-1' \
// --path-template='/billing' \
// --method='POST' \
// --body='{"source":"tok_visa","storage":21}'