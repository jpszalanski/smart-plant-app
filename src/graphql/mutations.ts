/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createSmartPlantData = /* GraphQL */ `mutation CreateSmartPlantData(
  $input: CreateSmartPlantDataInput!
  $condition: ModelSmartPlantDataConditionInput
) {
  createSmartPlantData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateSmartPlantDataMutationVariables,
  APITypes.CreateSmartPlantDataMutation
>;
export const updateSmartPlantData = /* GraphQL */ `mutation UpdateSmartPlantData(
  $input: UpdateSmartPlantDataInput!
  $condition: ModelSmartPlantDataConditionInput
) {
  updateSmartPlantData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateSmartPlantDataMutationVariables,
  APITypes.UpdateSmartPlantDataMutation
>;
export const deleteSmartPlantData = /* GraphQL */ `mutation DeleteSmartPlantData(
  $input: DeleteSmartPlantDataInput!
  $condition: ModelSmartPlantDataConditionInput
) {
  deleteSmartPlantData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteSmartPlantDataMutationVariables,
  APITypes.DeleteSmartPlantDataMutation
>;
export const createSmartPlantDataRealTime = /* GraphQL */ `mutation CreateSmartPlantDataRealTime(
  $input: CreateSmartPlantDataRealTimeInput!
  $condition: ModelSmartPlantDataRealTimeConditionInput
) {
  createSmartPlantDataRealTime(input: $input, condition: $condition) {
    id
    deviceId
    humidity
    lightLevel
    soilMoisture
    temperature
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateSmartPlantDataRealTimeMutationVariables,
  APITypes.CreateSmartPlantDataRealTimeMutation
>;
export const updateSmartPlantDataRealTime = /* GraphQL */ `mutation UpdateSmartPlantDataRealTime(
  $input: UpdateSmartPlantDataRealTimeInput!
  $condition: ModelSmartPlantDataRealTimeConditionInput
) {
  updateSmartPlantDataRealTime(input: $input, condition: $condition) {
    id
    deviceId
    humidity
    lightLevel
    soilMoisture
    temperature
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateSmartPlantDataRealTimeMutationVariables,
  APITypes.UpdateSmartPlantDataRealTimeMutation
>;
export const deleteSmartPlantDataRealTime = /* GraphQL */ `mutation DeleteSmartPlantDataRealTime(
  $input: DeleteSmartPlantDataRealTimeInput!
  $condition: ModelSmartPlantDataRealTimeConditionInput
) {
  deleteSmartPlantDataRealTime(input: $input, condition: $condition) {
    id
    deviceId
    humidity
    lightLevel
    soilMoisture
    temperature
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteSmartPlantDataRealTimeMutationVariables,
  APITypes.DeleteSmartPlantDataRealTimeMutation
>;
export const createPlantIdentificationData = /* GraphQL */ `mutation CreatePlantIdentificationData(
  $input: CreatePlantIdentificationDataInput!
  $condition: ModelPlantIdentificationDataConditionInput
) {
  createPlantIdentificationData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreatePlantIdentificationDataMutationVariables,
  APITypes.CreatePlantIdentificationDataMutation
>;
export const updatePlantIdentificationData = /* GraphQL */ `mutation UpdatePlantIdentificationData(
  $input: UpdatePlantIdentificationDataInput!
  $condition: ModelPlantIdentificationDataConditionInput
) {
  updatePlantIdentificationData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdatePlantIdentificationDataMutationVariables,
  APITypes.UpdatePlantIdentificationDataMutation
>;
export const deletePlantIdentificationData = /* GraphQL */ `mutation DeletePlantIdentificationData(
  $input: DeletePlantIdentificationDataInput!
  $condition: ModelPlantIdentificationDataConditionInput
) {
  deletePlantIdentificationData(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeletePlantIdentificationDataMutationVariables,
  APITypes.DeletePlantIdentificationDataMutation
>;
