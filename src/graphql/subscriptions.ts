/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateSmartPlantData = /* GraphQL */ `subscription OnCreateSmartPlantData(
  $filter: ModelSubscriptionSmartPlantDataFilterInput
) {
  onCreateSmartPlantData(filter: $filter) {
    deviceId
    temperature
    humidity
    light
    soilMoisture
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSmartPlantDataSubscriptionVariables,
  APITypes.OnCreateSmartPlantDataSubscription
>;
export const onUpdateSmartPlantData = /* GraphQL */ `subscription OnUpdateSmartPlantData(
  $filter: ModelSubscriptionSmartPlantDataFilterInput
) {
  onUpdateSmartPlantData(filter: $filter) {
    deviceId
    temperature
    humidity
    light
    soilMoisture
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSmartPlantDataSubscriptionVariables,
  APITypes.OnUpdateSmartPlantDataSubscription
>;
export const onDeleteSmartPlantData = /* GraphQL */ `subscription OnDeleteSmartPlantData(
  $filter: ModelSubscriptionSmartPlantDataFilterInput
) {
  onDeleteSmartPlantData(filter: $filter) {
    deviceId
    temperature
    humidity
    light
    soilMoisture
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSmartPlantDataSubscriptionVariables,
  APITypes.OnDeleteSmartPlantDataSubscription
>;
export const onCreateSmartPlantDataRealTime = /* GraphQL */ `subscription OnCreateSmartPlantDataRealTime(
  $filter: ModelSubscriptionSmartPlantDataRealTimeFilterInput
) {
  onCreateSmartPlantDataRealTime(filter: $filter) {
    deviceId
    temperature
    humidity
    light
    soilMoisture
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateSmartPlantDataRealTimeSubscriptionVariables,
  APITypes.OnCreateSmartPlantDataRealTimeSubscription
>;
export const onUpdateSmartPlantDataRealTime = /* GraphQL */ `subscription OnUpdateSmartPlantDataRealTime(
  $filter: ModelSubscriptionSmartPlantDataRealTimeFilterInput
) {
  onUpdateSmartPlantDataRealTime(filter: $filter) {
    deviceId
    temperature
    humidity
    light
    soilMoisture
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateSmartPlantDataRealTimeSubscriptionVariables,
  APITypes.OnUpdateSmartPlantDataRealTimeSubscription
>;
export const onDeleteSmartPlantDataRealTime = /* GraphQL */ `subscription OnDeleteSmartPlantDataRealTime(
  $filter: ModelSubscriptionSmartPlantDataRealTimeFilterInput
) {
  onDeleteSmartPlantDataRealTime(filter: $filter) {
    deviceId
    temperature
    humidity
    light
    soilMoisture
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteSmartPlantDataRealTimeSubscriptionVariables,
  APITypes.OnDeleteSmartPlantDataRealTimeSubscription
>;
export const onCreatePlantIdentificationData = /* GraphQL */ `subscription OnCreatePlantIdentificationData(
  $filter: ModelSubscriptionPlantIdentificationDataFilterInput
) {
  onCreatePlantIdentificationData(filter: $filter) {
    nome
    especie
    temperaturaMin
    temperaturaMax
    umidadeArMin
    umidadeArMax
    iluminanciaMin
    iluminanciaMax
    umidadeSoloMin
    umidadeSoloMax
    recomendacoes
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreatePlantIdentificationDataSubscriptionVariables,
  APITypes.OnCreatePlantIdentificationDataSubscription
>;
export const onUpdatePlantIdentificationData = /* GraphQL */ `subscription OnUpdatePlantIdentificationData(
  $filter: ModelSubscriptionPlantIdentificationDataFilterInput
) {
  onUpdatePlantIdentificationData(filter: $filter) {
    nome
    especie
    temperaturaMin
    temperaturaMax
    umidadeArMin
    umidadeArMax
    iluminanciaMin
    iluminanciaMax
    umidadeSoloMin
    umidadeSoloMax
    recomendacoes
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdatePlantIdentificationDataSubscriptionVariables,
  APITypes.OnUpdatePlantIdentificationDataSubscription
>;
export const onDeletePlantIdentificationData = /* GraphQL */ `subscription OnDeletePlantIdentificationData(
  $filter: ModelSubscriptionPlantIdentificationDataFilterInput
) {
  onDeletePlantIdentificationData(filter: $filter) {
    nome
    especie
    temperaturaMin
    temperaturaMax
    umidadeArMin
    umidadeArMax
    iluminanciaMin
    iluminanciaMax
    umidadeSoloMin
    umidadeSoloMax
    recomendacoes
    createdAt
    updatedAt
    id
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeletePlantIdentificationDataSubscriptionVariables,
  APITypes.OnDeletePlantIdentificationDataSubscription
>;
