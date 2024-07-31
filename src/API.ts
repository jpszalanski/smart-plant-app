/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateSmartPlantDataInput = {
  deviceId: string,
  temperature: number,
  humidity: number,
  light: number,
  soilMoisture: number,
  createdAt: number,
  updatedAt: number,
  id?: string | null,
};

export type ModelSmartPlantDataConditionInput = {
  deviceId?: ModelStringInput | null,
  temperature?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  light?: ModelFloatInput | null,
  soilMoisture?: ModelFloatInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelSmartPlantDataConditionInput | null > | null,
  or?: Array< ModelSmartPlantDataConditionInput | null > | null,
  not?: ModelSmartPlantDataConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type SmartPlantData = {
  __typename: "SmartPlantData",
  deviceId: string,
  temperature: number,
  humidity: number,
  light: number,
  soilMoisture: number,
  createdAt: number,
  updatedAt: number,
  id: string,
};

export type UpdateSmartPlantDataInput = {
  deviceId?: string | null,
  temperature?: number | null,
  humidity?: number | null,
  light?: number | null,
  soilMoisture?: number | null,
  createdAt?: number | null,
  updatedAt?: number | null,
  id: string,
};

export type DeleteSmartPlantDataInput = {
  id: string,
};

export type CreateSmartPlantDataRealTimeInput = {
  id?: string | null,
  deviceId: string,
  humidity: number,
  lightLevel: number,
  percentageSoilMoisture: number,
  soilMoisture: number,
  temperature: number,
  updatedAt: number,
};

export type ModelSmartPlantDataRealTimeConditionInput = {
  deviceId?: ModelStringInput | null,
  humidity?: ModelFloatInput | null,
  lightLevel?: ModelFloatInput | null,
  percentageSoilMoisture?: ModelFloatInput | null,
  soilMoisture?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelSmartPlantDataRealTimeConditionInput | null > | null,
  or?: Array< ModelSmartPlantDataRealTimeConditionInput | null > | null,
  not?: ModelSmartPlantDataRealTimeConditionInput | null,
  createdAt?: ModelStringInput | null,
};

export type SmartPlantDataRealTime = {
  __typename: "SmartPlantDataRealTime",
  id: string,
  deviceId: string,
  humidity: number,
  lightLevel: number,
  percentageSoilMoisture: number,
  soilMoisture: number,
  temperature: number,
  updatedAt: number,
  createdAt: string,
};

export type UpdateSmartPlantDataRealTimeInput = {
  id: string,
  deviceId?: string | null,
  humidity?: number | null,
  lightLevel?: number | null,
  percentageSoilMoisture?: number | null,
  soilMoisture?: number | null,
  temperature?: number | null,
  updatedAt?: number | null,
};

export type DeleteSmartPlantDataRealTimeInput = {
  id: string,
};

export type CreatePlantIdentificationDataInput = {
  nome: string,
  especie: string,
  temperaturaMin: number,
  temperaturaMax: number,
  umidadeArMin: number,
  umidadeArMax: number,
  iluminanciaMin: number,
  iluminanciaMax: number,
  umidadeSoloMin: number,
  umidadeSoloMax: number,
  recomendacoes: string,
  createdAt: number,
  updatedAt: number,
  id?: string | null,
};

export type ModelPlantIdentificationDataConditionInput = {
  nome?: ModelStringInput | null,
  especie?: ModelStringInput | null,
  temperaturaMin?: ModelFloatInput | null,
  temperaturaMax?: ModelFloatInput | null,
  umidadeArMin?: ModelFloatInput | null,
  umidadeArMax?: ModelFloatInput | null,
  iluminanciaMin?: ModelFloatInput | null,
  iluminanciaMax?: ModelFloatInput | null,
  umidadeSoloMin?: ModelFloatInput | null,
  umidadeSoloMax?: ModelFloatInput | null,
  recomendacoes?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  and?: Array< ModelPlantIdentificationDataConditionInput | null > | null,
  or?: Array< ModelPlantIdentificationDataConditionInput | null > | null,
  not?: ModelPlantIdentificationDataConditionInput | null,
};

export type PlantIdentificationData = {
  __typename: "PlantIdentificationData",
  nome: string,
  especie: string,
  temperaturaMin: number,
  temperaturaMax: number,
  umidadeArMin: number,
  umidadeArMax: number,
  iluminanciaMin: number,
  iluminanciaMax: number,
  umidadeSoloMin: number,
  umidadeSoloMax: number,
  recomendacoes: string,
  createdAt: number,
  updatedAt: number,
  id: string,
};

export type UpdatePlantIdentificationDataInput = {
  nome?: string | null,
  especie?: string | null,
  temperaturaMin?: number | null,
  temperaturaMax?: number | null,
  umidadeArMin?: number | null,
  umidadeArMax?: number | null,
  iluminanciaMin?: number | null,
  iluminanciaMax?: number | null,
  umidadeSoloMin?: number | null,
  umidadeSoloMax?: number | null,
  recomendacoes?: string | null,
  createdAt?: number | null,
  updatedAt?: number | null,
  id: string,
};

export type DeletePlantIdentificationDataInput = {
  id: string,
};

export type ModelSmartPlantDataFilterInput = {
  deviceId?: ModelStringInput | null,
  temperature?: ModelFloatInput | null,
  humidity?: ModelFloatInput | null,
  light?: ModelFloatInput | null,
  soilMoisture?: ModelFloatInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  and?: Array< ModelSmartPlantDataFilterInput | null > | null,
  or?: Array< ModelSmartPlantDataFilterInput | null > | null,
  not?: ModelSmartPlantDataFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSmartPlantDataConnection = {
  __typename: "ModelSmartPlantDataConnection",
  items:  Array<SmartPlantData | null >,
  nextToken?: string | null,
};

export type ModelSmartPlantDataRealTimeFilterInput = {
  id?: ModelStringInput | null,
  deviceId?: ModelStringInput | null,
  humidity?: ModelFloatInput | null,
  lightLevel?: ModelFloatInput | null,
  percentageSoilMoisture?: ModelFloatInput | null,
  soilMoisture?: ModelFloatInput | null,
  temperature?: ModelFloatInput | null,
  updatedAt?: ModelIntInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelSmartPlantDataRealTimeFilterInput | null > | null,
  or?: Array< ModelSmartPlantDataRealTimeFilterInput | null > | null,
  not?: ModelSmartPlantDataRealTimeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSmartPlantDataRealTimeConnection = {
  __typename: "ModelSmartPlantDataRealTimeConnection",
  items:  Array<SmartPlantDataRealTime | null >,
  nextToken?: string | null,
};

export type ModelPlantIdentificationDataFilterInput = {
  nome?: ModelStringInput | null,
  especie?: ModelStringInput | null,
  temperaturaMin?: ModelFloatInput | null,
  temperaturaMax?: ModelFloatInput | null,
  umidadeArMin?: ModelFloatInput | null,
  umidadeArMax?: ModelFloatInput | null,
  iluminanciaMin?: ModelFloatInput | null,
  iluminanciaMax?: ModelFloatInput | null,
  umidadeSoloMin?: ModelFloatInput | null,
  umidadeSoloMax?: ModelFloatInput | null,
  recomendacoes?: ModelStringInput | null,
  createdAt?: ModelIntInput | null,
  updatedAt?: ModelIntInput | null,
  id?: ModelIDInput | null,
  and?: Array< ModelPlantIdentificationDataFilterInput | null > | null,
  or?: Array< ModelPlantIdentificationDataFilterInput | null > | null,
  not?: ModelPlantIdentificationDataFilterInput | null,
};

export type ModelPlantIdentificationDataConnection = {
  __typename: "ModelPlantIdentificationDataConnection",
  items:  Array<PlantIdentificationData | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionSmartPlantDataFilterInput = {
  deviceId?: ModelSubscriptionStringInput | null,
  temperature?: ModelSubscriptionFloatInput | null,
  humidity?: ModelSubscriptionFloatInput | null,
  light?: ModelSubscriptionFloatInput | null,
  soilMoisture?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionSmartPlantDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionSmartPlantDataFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionSmartPlantDataRealTimeFilterInput = {
  id?: ModelSubscriptionStringInput | null,
  deviceId?: ModelSubscriptionStringInput | null,
  humidity?: ModelSubscriptionFloatInput | null,
  lightLevel?: ModelSubscriptionFloatInput | null,
  percentageSoilMoisture?: ModelSubscriptionFloatInput | null,
  soilMoisture?: ModelSubscriptionFloatInput | null,
  temperature?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionSmartPlantDataRealTimeFilterInput | null > | null,
  or?: Array< ModelSubscriptionSmartPlantDataRealTimeFilterInput | null > | null,
};

export type ModelSubscriptionPlantIdentificationDataFilterInput = {
  nome?: ModelSubscriptionStringInput | null,
  especie?: ModelSubscriptionStringInput | null,
  temperaturaMin?: ModelSubscriptionFloatInput | null,
  temperaturaMax?: ModelSubscriptionFloatInput | null,
  umidadeArMin?: ModelSubscriptionFloatInput | null,
  umidadeArMax?: ModelSubscriptionFloatInput | null,
  iluminanciaMin?: ModelSubscriptionFloatInput | null,
  iluminanciaMax?: ModelSubscriptionFloatInput | null,
  umidadeSoloMin?: ModelSubscriptionFloatInput | null,
  umidadeSoloMax?: ModelSubscriptionFloatInput | null,
  recomendacoes?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionIntInput | null,
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionPlantIdentificationDataFilterInput | null > | null,
  or?: Array< ModelSubscriptionPlantIdentificationDataFilterInput | null > | null,
};

export type CreateSmartPlantDataMutationVariables = {
  input: CreateSmartPlantDataInput,
  condition?: ModelSmartPlantDataConditionInput | null,
};

export type CreateSmartPlantDataMutation = {
  createSmartPlantData?:  {
    __typename: "SmartPlantData",
    deviceId: string,
    temperature: number,
    humidity: number,
    light: number,
    soilMoisture: number,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type UpdateSmartPlantDataMutationVariables = {
  input: UpdateSmartPlantDataInput,
  condition?: ModelSmartPlantDataConditionInput | null,
};

export type UpdateSmartPlantDataMutation = {
  updateSmartPlantData?:  {
    __typename: "SmartPlantData",
    deviceId: string,
    temperature: number,
    humidity: number,
    light: number,
    soilMoisture: number,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type DeleteSmartPlantDataMutationVariables = {
  input: DeleteSmartPlantDataInput,
  condition?: ModelSmartPlantDataConditionInput | null,
};

export type DeleteSmartPlantDataMutation = {
  deleteSmartPlantData?:  {
    __typename: "SmartPlantData",
    deviceId: string,
    temperature: number,
    humidity: number,
    light: number,
    soilMoisture: number,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type CreateSmartPlantDataRealTimeMutationVariables = {
  input: CreateSmartPlantDataRealTimeInput,
  condition?: ModelSmartPlantDataRealTimeConditionInput | null,
};

export type CreateSmartPlantDataRealTimeMutation = {
  createSmartPlantDataRealTime?:  {
    __typename: "SmartPlantDataRealTime",
    id: string,
    deviceId: string,
    humidity: number,
    lightLevel: number,
    percentageSoilMoisture: number,
    soilMoisture: number,
    temperature: number,
    updatedAt: number,
    createdAt: string,
  } | null,
};

export type UpdateSmartPlantDataRealTimeMutationVariables = {
  input: UpdateSmartPlantDataRealTimeInput,
  condition?: ModelSmartPlantDataRealTimeConditionInput | null,
};

export type UpdateSmartPlantDataRealTimeMutation = {
  updateSmartPlantDataRealTime?:  {
    __typename: "SmartPlantDataRealTime",
    id: string,
    deviceId: string,
    humidity: number,
    lightLevel: number,
    percentageSoilMoisture: number,
    soilMoisture: number,
    temperature: number,
    updatedAt: number,
    createdAt: string,
  } | null,
};

export type DeleteSmartPlantDataRealTimeMutationVariables = {
  input: DeleteSmartPlantDataRealTimeInput,
  condition?: ModelSmartPlantDataRealTimeConditionInput | null,
};

export type DeleteSmartPlantDataRealTimeMutation = {
  deleteSmartPlantDataRealTime?:  {
    __typename: "SmartPlantDataRealTime",
    id: string,
    deviceId: string,
    humidity: number,
    lightLevel: number,
    percentageSoilMoisture: number,
    soilMoisture: number,
    temperature: number,
    updatedAt: number,
    createdAt: string,
  } | null,
};

export type CreatePlantIdentificationDataMutationVariables = {
  input: CreatePlantIdentificationDataInput,
  condition?: ModelPlantIdentificationDataConditionInput | null,
};

export type CreatePlantIdentificationDataMutation = {
  createPlantIdentificationData?:  {
    __typename: "PlantIdentificationData",
    nome: string,
    especie: string,
    temperaturaMin: number,
    temperaturaMax: number,
    umidadeArMin: number,
    umidadeArMax: number,
    iluminanciaMin: number,
    iluminanciaMax: number,
    umidadeSoloMin: number,
    umidadeSoloMax: number,
    recomendacoes: string,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type UpdatePlantIdentificationDataMutationVariables = {
  input: UpdatePlantIdentificationDataInput,
  condition?: ModelPlantIdentificationDataConditionInput | null,
};

export type UpdatePlantIdentificationDataMutation = {
  updatePlantIdentificationData?:  {
    __typename: "PlantIdentificationData",
    nome: string,
    especie: string,
    temperaturaMin: number,
    temperaturaMax: number,
    umidadeArMin: number,
    umidadeArMax: number,
    iluminanciaMin: number,
    iluminanciaMax: number,
    umidadeSoloMin: number,
    umidadeSoloMax: number,
    recomendacoes: string,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type DeletePlantIdentificationDataMutationVariables = {
  input: DeletePlantIdentificationDataInput,
  condition?: ModelPlantIdentificationDataConditionInput | null,
};

export type DeletePlantIdentificationDataMutation = {
  deletePlantIdentificationData?:  {
    __typename: "PlantIdentificationData",
    nome: string,
    especie: string,
    temperaturaMin: number,
    temperaturaMax: number,
    umidadeArMin: number,
    umidadeArMax: number,
    iluminanciaMin: number,
    iluminanciaMax: number,
    umidadeSoloMin: number,
    umidadeSoloMax: number,
    recomendacoes: string,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type GetSmartPlantDataQueryVariables = {
  id: string,
};

export type GetSmartPlantDataQuery = {
  getSmartPlantData?:  {
    __typename: "SmartPlantData",
    deviceId: string,
    temperature: number,
    humidity: number,
    light: number,
    soilMoisture: number,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type ListSmartPlantDataQueryVariables = {
  filter?: ModelSmartPlantDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListSmartPlantDataQuery = {
  listSmartPlantData?:  {
    __typename: "ModelSmartPlantDataConnection",
    items:  Array< {
      __typename: "SmartPlantData",
      deviceId: string,
      temperature: number,
      humidity: number,
      light: number,
      soilMoisture: number,
      createdAt: number,
      updatedAt: number,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetSmartPlantDataRealTimeQueryVariables = {
  id: string,
};

export type GetSmartPlantDataRealTimeQuery = {
  getSmartPlantDataRealTime?:  {
    __typename: "SmartPlantDataRealTime",
    id: string,
    deviceId: string,
    humidity: number,
    lightLevel: number,
    percentageSoilMoisture: number,
    soilMoisture: number,
    temperature: number,
    updatedAt: number,
    createdAt: string,
  } | null,
};

export type ListSmartPlantDataRealTimesQueryVariables = {
  id?: string | null,
  filter?: ModelSmartPlantDataRealTimeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListSmartPlantDataRealTimesQuery = {
  listSmartPlantDataRealTimes?:  {
    __typename: "ModelSmartPlantDataRealTimeConnection",
    items:  Array< {
      __typename: "SmartPlantDataRealTime",
      id: string,
      deviceId: string,
      humidity: number,
      lightLevel: number,
      percentageSoilMoisture: number,
      soilMoisture: number,
      temperature: number,
      updatedAt: number,
      createdAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetPlantIdentificationDataQueryVariables = {
  id: string,
};

export type GetPlantIdentificationDataQuery = {
  getPlantIdentificationData?:  {
    __typename: "PlantIdentificationData",
    nome: string,
    especie: string,
    temperaturaMin: number,
    temperaturaMax: number,
    umidadeArMin: number,
    umidadeArMax: number,
    iluminanciaMin: number,
    iluminanciaMax: number,
    umidadeSoloMin: number,
    umidadeSoloMax: number,
    recomendacoes: string,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type ListPlantIdentificationDataQueryVariables = {
  filter?: ModelPlantIdentificationDataFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlantIdentificationDataQuery = {
  listPlantIdentificationData?:  {
    __typename: "ModelPlantIdentificationDataConnection",
    items:  Array< {
      __typename: "PlantIdentificationData",
      nome: string,
      especie: string,
      temperaturaMin: number,
      temperaturaMax: number,
      umidadeArMin: number,
      umidadeArMax: number,
      iluminanciaMin: number,
      iluminanciaMax: number,
      umidadeSoloMin: number,
      umidadeSoloMax: number,
      recomendacoes: string,
      createdAt: number,
      updatedAt: number,
      id: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateSmartPlantDataSubscriptionVariables = {
  filter?: ModelSubscriptionSmartPlantDataFilterInput | null,
};

export type OnCreateSmartPlantDataSubscription = {
  onCreateSmartPlantData?:  {
    __typename: "SmartPlantData",
    deviceId: string,
    temperature: number,
    humidity: number,
    light: number,
    soilMoisture: number,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type OnUpdateSmartPlantDataSubscriptionVariables = {
  filter?: ModelSubscriptionSmartPlantDataFilterInput | null,
};

export type OnUpdateSmartPlantDataSubscription = {
  onUpdateSmartPlantData?:  {
    __typename: "SmartPlantData",
    deviceId: string,
    temperature: number,
    humidity: number,
    light: number,
    soilMoisture: number,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type OnDeleteSmartPlantDataSubscriptionVariables = {
  filter?: ModelSubscriptionSmartPlantDataFilterInput | null,
};

export type OnDeleteSmartPlantDataSubscription = {
  onDeleteSmartPlantData?:  {
    __typename: "SmartPlantData",
    deviceId: string,
    temperature: number,
    humidity: number,
    light: number,
    soilMoisture: number,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type OnCreateSmartPlantDataRealTimeSubscriptionVariables = {
  filter?: ModelSubscriptionSmartPlantDataRealTimeFilterInput | null,
};

export type OnCreateSmartPlantDataRealTimeSubscription = {
  onCreateSmartPlantDataRealTime?:  {
    __typename: "SmartPlantDataRealTime",
    id: string,
    deviceId: string,
    humidity: number,
    lightLevel: number,
    percentageSoilMoisture: number,
    soilMoisture: number,
    temperature: number,
    updatedAt: number,
    createdAt: string,
  } | null,
};

export type OnUpdateSmartPlantDataRealTimeSubscriptionVariables = {
  filter?: ModelSubscriptionSmartPlantDataRealTimeFilterInput | null,
};

export type OnUpdateSmartPlantDataRealTimeSubscription = {
  onUpdateSmartPlantDataRealTime?:  {
    __typename: "SmartPlantDataRealTime",
    id: string,
    deviceId: string,
    humidity: number,
    lightLevel: number,
    percentageSoilMoisture: number,
    soilMoisture: number,
    temperature: number,
    updatedAt: number,
    createdAt: string,
  } | null,
};

export type OnDeleteSmartPlantDataRealTimeSubscriptionVariables = {
  filter?: ModelSubscriptionSmartPlantDataRealTimeFilterInput | null,
};

export type OnDeleteSmartPlantDataRealTimeSubscription = {
  onDeleteSmartPlantDataRealTime?:  {
    __typename: "SmartPlantDataRealTime",
    id: string,
    deviceId: string,
    humidity: number,
    lightLevel: number,
    percentageSoilMoisture: number,
    soilMoisture: number,
    temperature: number,
    updatedAt: number,
    createdAt: string,
  } | null,
};

export type OnCreatePlantIdentificationDataSubscriptionVariables = {
  filter?: ModelSubscriptionPlantIdentificationDataFilterInput | null,
};

export type OnCreatePlantIdentificationDataSubscription = {
  onCreatePlantIdentificationData?:  {
    __typename: "PlantIdentificationData",
    nome: string,
    especie: string,
    temperaturaMin: number,
    temperaturaMax: number,
    umidadeArMin: number,
    umidadeArMax: number,
    iluminanciaMin: number,
    iluminanciaMax: number,
    umidadeSoloMin: number,
    umidadeSoloMax: number,
    recomendacoes: string,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type OnUpdatePlantIdentificationDataSubscriptionVariables = {
  filter?: ModelSubscriptionPlantIdentificationDataFilterInput | null,
};

export type OnUpdatePlantIdentificationDataSubscription = {
  onUpdatePlantIdentificationData?:  {
    __typename: "PlantIdentificationData",
    nome: string,
    especie: string,
    temperaturaMin: number,
    temperaturaMax: number,
    umidadeArMin: number,
    umidadeArMax: number,
    iluminanciaMin: number,
    iluminanciaMax: number,
    umidadeSoloMin: number,
    umidadeSoloMax: number,
    recomendacoes: string,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};

export type OnDeletePlantIdentificationDataSubscriptionVariables = {
  filter?: ModelSubscriptionPlantIdentificationDataFilterInput | null,
};

export type OnDeletePlantIdentificationDataSubscription = {
  onDeletePlantIdentificationData?:  {
    __typename: "PlantIdentificationData",
    nome: string,
    especie: string,
    temperaturaMin: number,
    temperaturaMax: number,
    umidadeArMin: number,
    umidadeArMax: number,
    iluminanciaMin: number,
    iluminanciaMax: number,
    umidadeSoloMin: number,
    umidadeSoloMax: number,
    recomendacoes: string,
    createdAt: number,
    updatedAt: number,
    id: string,
  } | null,
};
