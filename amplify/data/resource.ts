import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  SmartPlantData: a.model({
    deviceId: a.string().required(),
    temperature: a.float().required(),
    humidity: a.float().required(),
    light: a.float().required(),
    soilMoisture: a.float().required(),
    createdAt: a.timestamp().required(),
    updatedAt: a.timestamp().required(),
}).authorization((allow) => [allow.guest(), allow.authenticated('identityPool')]),
//}).authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  }
});


