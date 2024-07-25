import { defineStorage } from '@aws-amplify/backend';


export const storage = defineStorage({
  name: 'amplify-d7h49eqvkkjnx-mai-smartplantpotbucketopena-xsv9mldevwmw',
  access: (allow) => ({
    'public/*': [
      allow.guest.to(['read', 'write']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ]
  })
});