import { defineBackend } from '@aws-amplify/backend';
import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito"
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({})
const authStack = backend.createStack("ExistingAuth")
const userPool = UserPool.fromUserPoolId(
  authStack,
  "UserPool",
  "us-east-1:ede24891-d5f7-4956-b45d-687690bb1ced"
)
const userPoolClient = UserPoolClient.fromUserPoolClientId(
  authStack,
  "UserPoolClient",
  "326gl26s11g5ab010m262r3lns"
)
// Cognito Identity Pools can be referenced directly
const identityPoolId = "us-east-1:ede24891-d5f7-4956-b45d-687690bb1ced"



backend.addOutput({
  auth: {
    aws_region: "us-east-1",
    user_pool_id: "us-east-1_CbmLjOUtL",
    user_pool_client_id: "326gl26s11g5ab010m262r3lns",
    identity_pool_id: "us-east-1:ede24891-d5f7-4956-b45d-687690bb1ced",
    username_attributes: ["email"],
    standard_required_attributes: ["email"],
    user_verification_types: ["email"],
    unauthenticated_identities_enabled: true,
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_uppercase: true,
      require_numbers: true,
      require_symbols: false,
    }
  },
  data: {

  }
})