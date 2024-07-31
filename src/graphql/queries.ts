/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getSmartPlantData = /* GraphQL */ `query GetSmartPlantData($id: ID!) {
  getSmartPlantData(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSmartPlantDataQueryVariables,
  APITypes.GetSmartPlantDataQuery
>;
export const listSmartPlantData = /* GraphQL */ `query ListSmartPlantData(
  $filter: ModelSmartPlantDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listSmartPlantData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSmartPlantDataQueryVariables,
  APITypes.ListSmartPlantDataQuery
>;
export const getSmartPlantDataRealTime = /* GraphQL */ `query GetSmartPlantDataRealTime($id: String!) {
  getSmartPlantDataRealTime(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetSmartPlantDataRealTimeQueryVariables,
  APITypes.GetSmartPlantDataRealTimeQuery
>;
export const listSmartPlantDataRealTimes = /* GraphQL */ `query ListSmartPlantDataRealTimes(
  $id: String
  $filter: ModelSmartPlantDataRealTimeFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listSmartPlantDataRealTimes(
    id: $id
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSmartPlantDataRealTimesQueryVariables,
  APITypes.ListSmartPlantDataRealTimesQuery
>;
export const getPlantIdentificationData = /* GraphQL */ `query GetPlantIdentificationData($id: ID!) {
  getPlantIdentificationData(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPlantIdentificationDataQueryVariables,
  APITypes.GetPlantIdentificationDataQuery
>;
export const listPlantIdentificationData = /* GraphQL */ `query ListPlantIdentificationData(
  $filter: ModelPlantIdentificationDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listPlantIdentificationData(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPlantIdentificationDataQueryVariables,
  APITypes.ListPlantIdentificationDataQuery
>;
