/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/softwareInventoriesMappers";
import * as Parameters from "../models/parameters";
import { SecurityCenterContext } from "../securityCenterContext";

/** Class representing a SoftwareInventories. */
export class SoftwareInventories {
  private readonly client: SecurityCenterContext;

  /**
   * Create a SoftwareInventories.
   * @param {SecurityCenterContext} client Reference to the service client.
   */
  constructor(client: SecurityCenterContext) {
    this.client = client;
  }

  /**
   * Gets the software inventory of the virtual machine.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareInventoriesListByExtendedResourceResponse>
   */
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, options?: msRest.RequestOptionsBase): Promise<Models.SoftwareInventoriesListByExtendedResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param callback The callback
   */
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  listByExtendedResource(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SoftwaresList>, callback?: msRest.ServiceCallback<Models.SoftwaresList>): Promise<Models.SoftwareInventoriesListByExtendedResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        options
      },
      listByExtendedResourceOperationSpec,
      callback) as Promise<Models.SoftwareInventoriesListByExtendedResourceResponse>;
  }

  /**
   * Gets the software inventory of all virtual machines in the subscriptions.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareInventoriesListBySubscriptionResponse>
   */
  listBySubscription(options?: msRest.RequestOptionsBase): Promise<Models.SoftwareInventoriesListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  listBySubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SoftwaresList>, callback?: msRest.ServiceCallback<Models.SoftwaresList>): Promise<Models.SoftwareInventoriesListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.SoftwareInventoriesListBySubscriptionResponse>;
  }

  /**
   * Gets a single software data of the virtual machine.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param softwareName Name of the installed software.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareInventoriesGetResponse>
   */
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, softwareName: string, options?: msRest.RequestOptionsBase): Promise<Models.SoftwareInventoriesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param softwareName Name of the installed software.
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, softwareName: string, callback: msRest.ServiceCallback<Models.Software>): void;
  /**
   * @param resourceGroupName The name of the resource group within the user's subscription. The name
   * is case insensitive.
   * @param resourceNamespace The namespace of the resource.
   * @param resourceType The type of the resource.
   * @param resourceName Name of the resource.
   * @param softwareName Name of the installed software.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, softwareName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Software>): void;
  get(resourceGroupName: string, resourceNamespace: string, resourceType: string, resourceName: string, softwareName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Software>, callback?: msRest.ServiceCallback<Models.Software>): Promise<Models.SoftwareInventoriesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        resourceNamespace,
        resourceType,
        resourceName,
        softwareName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SoftwareInventoriesGetResponse>;
  }

  /**
   * Gets the software inventory of the virtual machine.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareInventoriesListByExtendedResourceNextResponse>
   */
  listByExtendedResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SoftwareInventoriesListByExtendedResourceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByExtendedResourceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByExtendedResourceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  listByExtendedResourceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SoftwaresList>, callback?: msRest.ServiceCallback<Models.SoftwaresList>): Promise<Models.SoftwareInventoriesListByExtendedResourceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByExtendedResourceNextOperationSpec,
      callback) as Promise<Models.SoftwareInventoriesListByExtendedResourceNextResponse>;
  }

  /**
   * Gets the software inventory of all virtual machines in the subscriptions.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareInventoriesListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.SoftwareInventoriesListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.SoftwaresList>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.SoftwaresList>, callback?: msRest.ServiceCallback<Models.SoftwaresList>): Promise<Models.SoftwareInventoriesListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.SoftwareInventoriesListBySubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByExtendedResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/softwareInventories",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName
  ],
  queryParameters: [
    Parameters.apiVersion14
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.Security/softwareInventories",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion14
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceNamespace}/{resourceType}/{resourceName}/providers/Microsoft.Security/softwareInventories/{softwareName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.resourceNamespace,
    Parameters.resourceType,
    Parameters.resourceName,
    Parameters.softwareName
  ],
  queryParameters: [
    Parameters.apiVersion14
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Software
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByExtendedResourceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion14
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  queryParameters: [
    Parameters.apiVersion14
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwaresList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};