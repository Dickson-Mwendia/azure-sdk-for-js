/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  StorageInsight,
  StorageInsightConfigsListByWorkspaceOptionalParams,
  StorageInsightConfigsCreateOrUpdateOptionalParams,
  StorageInsightConfigsCreateOrUpdateResponse,
  StorageInsightConfigsGetOptionalParams,
  StorageInsightConfigsGetResponse,
  StorageInsightConfigsDeleteOptionalParams
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a StorageInsightConfigs. */
export interface StorageInsightConfigs {
  /**
   * Lists the storage insight instances within a workspace
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param options The options parameters.
   */
  listByWorkspace(
    resourceGroupName: string,
    workspaceName: string,
    options?: StorageInsightConfigsListByWorkspaceOptionalParams
  ): PagedAsyncIterableIterator<StorageInsight>;
  /**
   * Create or update a storage insight.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param parameters The parameters required to create or update a storage insight.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    workspaceName: string,
    storageInsightName: string,
    parameters: StorageInsight,
    options?: StorageInsightConfigsCreateOrUpdateOptionalParams
  ): Promise<StorageInsightConfigsCreateOrUpdateResponse>;
  /**
   * Gets a storage insight instance.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    workspaceName: string,
    storageInsightName: string,
    options?: StorageInsightConfigsGetOptionalParams
  ): Promise<StorageInsightConfigsGetResponse>;
  /**
   * Deletes a storageInsightsConfigs resource
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace.
   * @param storageInsightName Name of the storageInsightsConfigs resource
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    workspaceName: string,
    storageInsightName: string,
    options?: StorageInsightConfigsDeleteOptionalParams
  ): Promise<void>;
}