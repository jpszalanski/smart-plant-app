import { defineBackend } from "@aws-amplify/backend"
import { UserPool, UserPoolClient } from "aws-cdk-lib/aws-cognito"
import { auth } from './auth/resource';
import { data } from './data/resource';


const backend = defineBackend({})
defineBackend({
  auth,
  data
});

const authStack = backend.createStack("ExistingAuth")
const userPool = UserPool.fromUserPoolId(
  authStack,
  "UserPool",
  "us-east-1_7Ph0LzUE1"
)
const userPoolClient = UserPoolClient.fromUserPoolClientId(
  authStack,
  "UserPoolClient",
  "52ml83h4sfu3irsb0114mdf7eg"
)



// Cognito Identity Pools can be referenced directly
const identityPoolId = "us-east-1:5cbf7cfc-7bee-4bb0-a9b3-7c3cb8ed1d7d"




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