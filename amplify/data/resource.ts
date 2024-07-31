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

  SmartPlantDataRealTime: a.model({
    id: a.string().required(),
    deviceId: a.string().required(),
    humidity: a.float().required(),
    lightLevel: a.float().required(),
    percentageSoilMoisture: a.float().required(),
    soilMoisture: a.float().required(),
    temperature: a.float().required(),
    createdAt: a.timestamp().required(),
    updatedAt: a.timestamp().required(),
  }).authorization((allow) => [allow.guest(), allow.authenticated('identityPool')]),

  PlantIdentificationData: a.model({
    nome: a.string().required(),
    especie: a.string().required(),
    temperaturaMin: a.float().required(),
    temperaturaMax: a.float().required(),
    umidadeArMin: a.float().required(),
    umidadeArMax: a.float().required(),
    iluminanciaMin: a.float().required(),
    iluminanciaMax: a.float().required(),
    umidadeSoloMin: a.float().required(),
    umidadeSoloMax: a.float().required(),
    recomendacoes: a.string().required(),
    createdAt: a.timestamp().required(),
    updatedAt: a.timestamp().required(),
  }).authorization((allow) => [allow.authenticated('identityPool')]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'iam',
    apiKeyAuthorizationMode: { expiresInDays: 30 },
  }
});
