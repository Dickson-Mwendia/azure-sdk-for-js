/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DiscoveredSecuritySolutions } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SecurityCenter } from "../securityCenter";
import {
  DiscoveredSecuritySolution,
  DiscoveredSecuritySolutionsListNextOptionalParams,
  DiscoveredSecuritySolutionsListOptionalParams,
  DiscoveredSecuritySolutionsListByHomeRegionNextOptionalParams,
  DiscoveredSecuritySolutionsListByHomeRegionOptionalParams,
  DiscoveredSecuritySolutionsListResponse,
  DiscoveredSecuritySolutionsListByHomeRegionResponse,
  DiscoveredSecuritySolutionsGetOptionalParams,
  DiscoveredSecuritySolutionsGetResponse,
  DiscoveredSecuritySolutionsListNextResponse,
  DiscoveredSecuritySolutionsListByHomeRegionNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DiscoveredSecuritySolutions operations. */
export class DiscoveredSecuritySolutionsImpl
  implements DiscoveredSecuritySolutions {
  private readonly client: SecurityCenter;

  /**
   * Initialize a new instance of the class DiscoveredSecuritySolutions class.
   * @param client Reference to the service client
   */
  constructor(client: SecurityCenter) {
    this.client = client;
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription.
   * @param options The options parameters.
   */
  public list(
    options?: DiscoveredSecuritySolutionsListOptionalParams
  ): PagedAsyncIterableIterator<DiscoveredSecuritySolution> {
    const iter = this.listPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listPagingPage(options);
      }
    };
  }

  private async *listPagingPage(
    options?: DiscoveredSecuritySolutionsListOptionalParams
  ): AsyncIterableIterator<DiscoveredSecuritySolution[]> {
    let result = await this._list(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listPagingAll(
    options?: DiscoveredSecuritySolutionsListOptionalParams
  ): AsyncIterableIterator<DiscoveredSecuritySolution> {
    for await (const page of this.listPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription and location.
   * @param options The options parameters.
   */
  public listByHomeRegion(
    options?: DiscoveredSecuritySolutionsListByHomeRegionOptionalParams
  ): PagedAsyncIterableIterator<DiscoveredSecuritySolution> {
    const iter = this.listByHomeRegionPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByHomeRegionPagingPage(options);
      }
    };
  }

  private async *listByHomeRegionPagingPage(
    options?: DiscoveredSecuritySolutionsListByHomeRegionOptionalParams
  ): AsyncIterableIterator<DiscoveredSecuritySolution[]> {
    let result = await this._listByHomeRegion(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listByHomeRegionNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listByHomeRegionPagingAll(
    options?: DiscoveredSecuritySolutionsListByHomeRegionOptionalParams
  ): AsyncIterableIterator<DiscoveredSecuritySolution> {
    for await (const page of this.listByHomeRegionPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription.
   * @param options The options parameters.
   */
  private _list(
    options?: DiscoveredSecuritySolutionsListOptionalParams
  ): Promise<DiscoveredSecuritySolutionsListResponse> {
    return this.client.sendOperationRequest({ options }, listOperationSpec);
  }

  /**
   * Gets a list of discovered Security Solutions for the subscription and location.
   * @param options The options parameters.
   */
  private _listByHomeRegion(
    options?: DiscoveredSecuritySolutionsListByHomeRegionOptionalParams
  ): Promise<DiscoveredSecuritySolutionsListByHomeRegionResponse> {
    return this.client.sendOperationRequest(
      { options },
      listByHomeRegionOperationSpec
    );
  }

  /**
   * Gets a specific discovered Security Solution.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param discoveredSecuritySolutionName Name of a discovered security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    discoveredSecuritySolutionName: string,
    options?: DiscoveredSecuritySolutionsGetOptionalParams
  ): Promise<DiscoveredSecuritySolutionsGetResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, discoveredSecuritySolutionName, options },
      getOperationSpec
    );
  }

  /**
   * ListNext
   * @param nextLink The nextLink from the previous successful call to the List method.
   * @param options The options parameters.
   */
  private _listNext(
    nextLink: string,
    options?: DiscoveredSecuritySolutionsListNextOptionalParams
  ): Promise<DiscoveredSecuritySolutionsListNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listNextOperationSpec
    );
  }

  /**
   * ListByHomeRegionNext
   * @param nextLink The nextLink from the previous successful call to the ListByHomeRegion method.
   * @param options The options parameters.
   */
  private _listByHomeRegionNext(
    nextLink: string,
    options?: DiscoveredSecuritySolutionsListByHomeRegionNextOptionalParams
  ): Promise<DiscoveredSecuritySolutionsListByHomeRegionNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listByHomeRegionNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/discoveredSecuritySolutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [Parameters.$host, Parameters.subscriptionId],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHomeRegionOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Security/locations/{ascLocation}/discoveredSecuritySolutions/{discoveredSecuritySolutionName}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiscoveredSecuritySolution
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.ascLocation,
    Parameters.discoveredSecuritySolutionName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listByHomeRegionNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DiscoveredSecuritySolutionList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  queryParameters: [Parameters.apiVersion9],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.nextLink,
    Parameters.ascLocation
  ],
  headerParameters: [Parameters.accept],
  serializer
};
