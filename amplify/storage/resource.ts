import { defineStorage } from '@aws-amplify/backend';


export const storage = defineStorage({
  name: 'amplify-d7h49eqvkkjnx-mai-smartplantpotbucketopena-xsv9mldevwmw',
  access: (allow) => ({
    'public/picture-submissions/*': [
      allow.authenticated.to(['read','write']),
      allow.guest.to(['read', 'write'])
    ],
  })
});