import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";
import { initSchema } from "@aws-amplify/datastore";

import { schema } from "./schema";

export enum ModelAttributeTypes {
  NULL = "_null",
  BINARY = "binary",
  BINARY_SET = "binarySet",
  BOOL = "bool",
  LIST = "list",
  MAP = "map",
  NUMBER = "number",
  NUMBER_SET = "numberSet",
  STRING = "string",
  STRING_SET = "stringSet"
}

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC"
}



type EagerModelPlantIdentificationDataConnectionModel = {
  readonly items: (PlantIdentificationData | null)[];
  readonly nextToken?: string | null;
}

type LazyModelPlantIdentificationDataConnectionModel = {
  readonly items: (PlantIdentificationData | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelPlantIdentificationDataConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelPlantIdentificationDataConnectionModel : LazyModelPlantIdentificationDataConnectionModel

export declare const ModelPlantIdentificationDataConnectionModel: (new (init: ModelInit<ModelPlantIdentificationDataConnectionModel>) => ModelPlantIdentificationDataConnectionModel)

type EagerModelSmartPlantDataConnectionModel = {
  readonly items: (SmartPlantData | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSmartPlantDataConnectionModel = {
  readonly items: (SmartPlantData | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSmartPlantDataConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSmartPlantDataConnectionModel : LazyModelSmartPlantDataConnectionModel

export declare const ModelSmartPlantDataConnectionModel: (new (init: ModelInit<ModelSmartPlantDataConnectionModel>) => ModelSmartPlantDataConnectionModel)

type EagerModelSmartPlantDataRealTimeConnectionModel = {
  readonly items: (SmartPlantDataRealTime | null)[];
  readonly nextToken?: string | null;
}

type LazyModelSmartPlantDataRealTimeConnectionModel = {
  readonly items: (SmartPlantDataRealTime | null)[];
  readonly nextToken?: string | null;
}

export declare type ModelSmartPlantDataRealTimeConnectionModel = LazyLoading extends LazyLoadingDisabled ? EagerModelSmartPlantDataRealTimeConnectionModel : LazyModelSmartPlantDataRealTimeConnectionModel

export declare const ModelSmartPlantDataRealTimeConnectionModel: (new (init: ModelInit<ModelSmartPlantDataRealTimeConnectionModel>) => ModelSmartPlantDataRealTimeConnectionModel)

type EagerPlantIdentificationDataModel = {
  readonly createdAt: number;
  readonly especie: string;
  readonly id: string;
  readonly iluminanciaMax: number;
  readonly iluminanciaMin: number;
  readonly nome: string;
  readonly recomendacoes: string;
  readonly temperaturaMax: number;
  readonly temperaturaMin: number;
  readonly umidadeArMax: number;
  readonly umidadeArMin: number;
  readonly umidadeSoloMax: number;
  readonly umidadeSoloMin: number;
  readonly updatedAt: number;
}

type LazyPlantIdentificationDataModel = {
  readonly createdAt: number;
  readonly especie: string;
  readonly id: string;
  readonly iluminanciaMax: number;
  readonly iluminanciaMin: number;
  readonly nome: string;
  readonly recomendacoes: string;
  readonly temperaturaMax: number;
  readonly temperaturaMin: number;
  readonly umidadeArMax: number;
  readonly umidadeArMin: number;
  readonly umidadeSoloMax: number;
  readonly umidadeSoloMin: number;
  readonly updatedAt: number;
}

export declare type PlantIdentificationDataModel = LazyLoading extends LazyLoadingDisabled ? EagerPlantIdentificationDataModel : LazyPlantIdentificationDataModel

export declare const PlantIdentificationDataModel: (new (init: ModelInit<PlantIdentificationDataModel>) => PlantIdentificationDataModel)

type EagerSmartPlantDataModel = {
  readonly createdAt: number;
  readonly deviceId: string;
  readonly humidity: number;
  readonly id: string;
  readonly light: number;
  readonly soilMoisture: number;
  readonly temperature: number;
  readonly updatedAt: number;
}

type LazySmartPlantDataModel = {
  readonly createdAt: number;
  readonly deviceId: string;
  readonly humidity: number;
  readonly id: string;
  readonly light: number;
  readonly soilMoisture: number;
  readonly temperature: number;
  readonly updatedAt: number;
}

export declare type SmartPlantDataModel = LazyLoading extends LazyLoadingDisabled ? EagerSmartPlantDataModel : LazySmartPlantDataModel

export declare const SmartPlantDataModel: (new (init: ModelInit<SmartPlantDataModel>) => SmartPlantDataModel)

type EagerSmartPlantDataRealTimeModel = {
  readonly createdAt: number;
  readonly deviceId: string;
  readonly humidity: number;
  readonly id: string;
  readonly lightLevel: number;
  readonly soilMoisture: number;
  readonly temperature: number;
  readonly updatedAt: number;
}

type LazySmartPlantDataRealTimeModel = {
  readonly createdAt: number;
  readonly deviceId: string;
  readonly humidity: number;
  readonly id: string;
  readonly lightLevel: number;
  readonly soilMoisture: number;
  readonly temperature: number;
  readonly updatedAt: number;
}

export declare type SmartPlantDataRealTimeModel = LazyLoading extends LazyLoadingDisabled ? EagerSmartPlantDataRealTimeModel : LazySmartPlantDataRealTimeModel

export declare const SmartPlantDataRealTimeModel: (new (init: ModelInit<SmartPlantDataRealTimeModel>) => SmartPlantDataRealTimeModel)

const { ModelPlantIdentificationDataConnection, ModelSmartPlantDataConnection, ModelSmartPlantDataRealTimeConnection, PlantIdentificationData, SmartPlantData, SmartPlantDataRealTime } = initSchema(schema) as {
  ModelPlantIdentificationDataConnection: PersistentModelConstructor<ModelPlantIdentificationDataConnectionModel>;
  ModelSmartPlantDataConnection: PersistentModelConstructor<ModelSmartPlantDataConnectionModel>;
  ModelSmartPlantDataRealTimeConnection: PersistentModelConstructor<ModelSmartPlantDataRealTimeConnectionModel>;
  PlantIdentificationData: PersistentModelConstructor<PlantIdentificationDataModel>;
  SmartPlantData: PersistentModelConstructor<SmartPlantDataModel>;
  SmartPlantDataRealTime: PersistentModelConstructor<SmartPlantDataRealTimeModel>;
};

export {
  
};