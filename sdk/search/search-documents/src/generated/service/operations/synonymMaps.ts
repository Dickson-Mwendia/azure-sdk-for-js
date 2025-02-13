/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SynonymMaps } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SearchServiceClientContext } from "../searchServiceClientContext";
import {
  SynonymMap,
  SynonymMapsCreateOrUpdateOptionalParams,
  SynonymMapsCreateOrUpdateResponse,
  SynonymMapsDeleteOptionalParams,
  SynonymMapsGetOptionalParams,
  SynonymMapsGetResponse,
  SynonymMapsListOptionalParams,
  SynonymMapsListResponse,
  SynonymMapsCreateOptionalParams,
  SynonymMapsCreateResponse
} from "../models";

/** Class containing SynonymMaps operations. */
export class SynonymMapsImpl implements SynonymMaps {
  private readonly client: SearchServiceClientContext;

  /**
   * Initialize a new instance of the class SynonymMaps class.
   * @param client Reference to the service client
   */
  constructor(client: SearchServiceClientContext) {
    this.client = client;
  }

  /**
   * Creates a new synonym map or updates a synonym map if it already exists.
   * @param synonymMapName The name of the synonym map to create or update.
   * @param synonymMap The definition of the synonym map to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    synonymMapName: string,
    synonymMap: SynonymMap,
    options?: SynonymMapsCreateOrUpdateOptionalParams
  ): Promise<SynonymMapsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      { synonymMapName, synonymMap, options },
      createOrUpdateOperationSpec
    );
  }

  /**
   * Deletes a synonym map.
   * @param synonymMapName The name of the synonym map to delete.
   * @param options The options parameters.
   */
  delete(
    synonymMapName: string,
    options?: SynonymMapsDeleteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { synonymMapName, options },
      deleteOperationSpec
    );
  }

  /**
   * Retrieves a synonym map definition.
   * @param synonymMapName The name of the synonym map to retrieve.
   * @param options The options parameters.
   */
  get(
    synonymMapName: string,
    options?: SynonymMapsGetOptionalParams
  ): Promise<SynonymMapsGetResponse> {
    return this.client.sendOperationRequest(
      { synonymMapName, options },
      getOperationSpec
    );
  }

  /**
   * Lists all synonym maps available for a search service.
   * @param options The options parameters.
   */
  list(
    options?: SynonymMapsListOptionalParams
  ): Promise<SynonymMapsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Creates a new synonym map.
   * @param synonymMap The definition of the synonym map to create.
   * @param options The options parameters.
   */
  create(
    synonymMap: SynonymMap,
    options?: SynonymMapsCreateOptionalParams
  ): Promise<SynonymMapsCreateResponse> {
    return this.client.sendOperationRequest(
      { synonymMap, options },
      createOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const createOrUpdateOperationSpec: coreClient.OperationSpec = {
  path: "/synonymmaps('{synonymMapName}')",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.SynonymMap
    },
    201: {
      bodyMapper: Mappers.SynonymMap
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.synonymMap,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.synonymMapName],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.prefer
  ],
  mediaType: "json",
  serializer
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/synonymmaps('{synonymMapName}')",
  httpMethod: "DELETE",
  responses: {
    204: {},
    404: {},
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.synonymMapName],
  headerParameters: [
    Parameters.accept,
    Parameters.xMsClientRequestId,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path: "/synonymmaps('{synonymMapName}')",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.SynonymMap
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.synonymMapName],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const listOperationSpec: coreClient.OperationSpec = {
  path: "/synonymmaps",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ListSynonymMapsResult
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.select],
  urlParameters: [Parameters.endpoint],
  headerParameters: [Parameters.accept, Parameters.xMsClientRequestId],
  serializer
};
const createOperationSpec: coreClient.OperationSpec = {
  path: "/synonymmaps",
  httpMethod: "POST",
  responses: {
    201: {
      bodyMapper: Mappers.SynonymMap
    },
    default: {
      bodyMapper: Mappers.SearchError
    }
  },
  requestBody: Parameters.synonymMap,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint],
  headerParameters: [
    Parameters.contentType,
    Parameters.accept,
    Parameters.xMsClientRequestId
  ],
  mediaType: "json",
  serializer
};
