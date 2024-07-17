import { defineBackend } from "@aws-amplify/backend"
import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito"


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
    aws_region: authStack.region,
    user_pool_id: userPool.userPoolId,
    user_pool_client_id: userPoolClient.userPoolClientId,
    identity_pool_id: identityPoolId,
    // this property configures the Authenticator's sign-up/sign-in views
    username_attributes: ["email"],
    // this property configures the Authenticator's sign-up/sign-in views
    standard_required_attributes: ["email"],
    // this property configures the Authenticator confirmation views
    user_verification_types: ["email"],
    unauthenticated_identities_enabled: true,
    // this property configures the validation for the Authenticator's password field
    password_policy: {
      min_length: 8,
      require_lowercase: true,
      require_uppercase: true,
      require_numbers: true,
      require_symbols: false,
    }
  },
})