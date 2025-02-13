/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  TopologyResource,
  TopologyListOptionalParams,
  TopologyListByHomeRegionOptionalParams,
  TopologyGetOptionalParams,
  TopologyGetResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Topology. */
export interface Topology {
  /**
   * Gets a list that allows to build a topology view of a subscription.
   * @param options The options parameters.
   */
  list(
    options?: TopologyListOptionalParams
  ): PagedAsyncIterableIterator<TopologyResource>;
  /**
   * Gets a list that allows to build a topology view of a subscription and location.
   * @param options The options parameters.
   */
  listByHomeRegion(
    options?: TopologyListByHomeRegionOptionalParams
  ): PagedAsyncIterableIterator<TopologyResource>;
  /**
   * Gets a specific topology component.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param topologyResourceName Name of a topology resources collection.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    topologyResourceName: string,
    options?: TopologyGetOptionalParams
  ): Promise<TopologyGetResponse>;
}
