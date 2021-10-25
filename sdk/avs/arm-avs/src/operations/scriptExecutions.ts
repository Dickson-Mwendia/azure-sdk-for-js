/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/scriptExecutionsMappers";
import * as Parameters from "../models/parameters";
import { AvsClientContext } from "../avsClientContext";

/** Class representing a ScriptExecutions. */
export class ScriptExecutions {
  private readonly client: AvsClientContext;

  /**
   * Create a ScriptExecutions.
   * @param {AvsClientContext} client Reference to the service client.
   */
  constructor(client: AvsClientContext) {
    this.client = client;
  }

  /**
   * @summary Get an script execution resource by name in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.ScriptExecutionsListResponse>
   */
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<Models.ScriptExecutionsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, callback: msRest.ServiceCallback<Models.ScriptExecutionsList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, privateCloudName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ScriptExecutionsList>): void;
  list(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ScriptExecutionsList>, callback?: msRest.ServiceCallback<Models.ScriptExecutionsList>): Promise<Models.ScriptExecutionsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.ScriptExecutionsListResponse>;
  }

  /**
   * @summary Get an script execution resource by name in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param [options] The optional parameters
   * @returns Promise<Models.ScriptExecutionsGetResponse>
   */
  get(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ScriptExecutionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, callback: msRest.ServiceCallback<Models.ScriptExecution>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ScriptExecution>): void;
  get(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ScriptExecution>, callback?: msRest.ServiceCallback<Models.ScriptExecution>): Promise<Models.ScriptExecutionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ScriptExecutionsGetResponse>;
  }

  /**
   * @summary Create or update a script execution resource in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param scriptExecution A script running in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.ScriptExecutionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: Models.ScriptExecution, options?: msRest.RequestOptionsBase): Promise<Models.ScriptExecutionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,privateCloudName,scriptExecutionName,scriptExecution,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ScriptExecutionsCreateOrUpdateResponse>;
  }

  /**
   * @summary Cancel a ScriptExecution in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,privateCloudName,scriptExecutionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Return the logs for a script execution resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param [options] The optional parameters
   * @returns Promise<Models.ScriptExecutionsGetExecutionLogsResponse>
   */
  getExecutionLogs(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: Models.ScriptExecutionsGetExecutionLogsOptionalParams): Promise<Models.ScriptExecutionsGetExecutionLogsResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param callback The callback
   */
  getExecutionLogs(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, callback: msRest.ServiceCallback<Models.ScriptExecution>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param options The optional parameters
   * @param callback The callback
   */
  getExecutionLogs(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options: Models.ScriptExecutionsGetExecutionLogsOptionalParams, callback: msRest.ServiceCallback<Models.ScriptExecution>): void;
  getExecutionLogs(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: Models.ScriptExecutionsGetExecutionLogsOptionalParams | msRest.ServiceCallback<Models.ScriptExecution>, callback?: msRest.ServiceCallback<Models.ScriptExecution>): Promise<Models.ScriptExecutionsGetExecutionLogsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options
      },
      getExecutionLogsOperationSpec,
      callback) as Promise<Models.ScriptExecutionsGetExecutionLogsResponse>;
  }

  /**
   * @summary Create or update a script execution resource in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName The name of the private cloud.
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param scriptExecution A script running in the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, scriptExecution: Models.ScriptExecution, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        scriptExecution,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * @summary Cancel a ScriptExecution in a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param scriptExecutionName Name of the user-invoked script execution resource
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, privateCloudName: string, scriptExecutionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        scriptExecutionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary Get an script execution resource by name in a private cloud
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ScriptExecutionsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ScriptExecutionsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ScriptExecutionsList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ScriptExecutionsList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ScriptExecutionsList>, callback?: msRest.ServiceCallback<Models.ScriptExecutionsList>): Promise<Models.ScriptExecutionsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.ScriptExecutionsListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecutionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getExecutionLogsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}/getExecutionLogs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: [
      "options",
      "scriptOutputStreamType"
    ],
    mapper: {
      serializedName: "scriptOutputStreamType",
      type: {
        name: "Sequence",
        element: {
          type: {
            name: "String"
          }
        }
      }
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "scriptExecution",
    mapper: {
      ...Mappers.ScriptExecution,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecution
    },
    201: {
      bodyMapper: Mappers.ScriptExecution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/scriptExecutions/{scriptExecutionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName,
    Parameters.scriptExecutionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ScriptExecutionsList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};