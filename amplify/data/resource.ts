import { a, defineData, type ClientSchema } from '@aws-amplify/backend';

const schema = a.schema({
  SmartPlantData: a.model({
    deviceId: a.string(),
    temperature: a.float(),
    humidity: a.float(),
    light: a.float(),
    soilMoisture: a.float(),
    createdAt: a.string(),
    updatedAt: a.string(),
  }).authorization(allow => [allow.publicApiKey()])
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  }
});
