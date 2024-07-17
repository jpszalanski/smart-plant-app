import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a.schema({
  SmartPlantData: a.model({
    light: a.float(),
    soilMoisture: a.float(),
    temperature: a.float(),
    humidity: a.float(),
    deviceId: a.string(),
  })
    .authorization((allow) => [allow.publicApiKey()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "apiKey",
    //defaultAuthorizationMode: 'userPool',
    // API Key is used for a.allow.public() rules

    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
