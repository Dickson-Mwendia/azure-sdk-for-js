/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  OpenidConnectProviderContract,
  OpenIdConnectProviderListByServiceOptionalParams,
  OpenIdConnectProviderGetEntityTagOptionalParams,
  OpenIdConnectProviderGetEntityTagResponse,
  OpenIdConnectProviderGetOptionalParams,
  OpenIdConnectProviderGetResponse,
  OpenIdConnectProviderCreateOrUpdateOptionalParams,
  OpenIdConnectProviderCreateOrUpdateResponse,
  OpenidConnectProviderUpdateContract,
  OpenIdConnectProviderUpdateOptionalParams,
  OpenIdConnectProviderUpdateResponse,
  OpenIdConnectProviderDeleteOptionalParams,
  OpenIdConnectProviderListSecretsOptionalParams,
  OpenIdConnectProviderListSecretsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a OpenIdConnectProvider. */
export interface OpenIdConnectProvider {
  /**
   * Lists of all the OpenId Connect Providers.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param options The options parameters.
   */
  listByService(
    resourceGroupName: string,
    serviceName: string,
    options?: OpenIdConnectProviderListByServiceOptionalParams
  ): PagedAsyncIterableIterator<OpenidConnectProviderContract>;
  /**
   * Gets the entity state (Etag) version of the openIdConnectProvider specified by its identifier.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param options The options parameters.
   */
  getEntityTag(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    options?: OpenIdConnectProviderGetEntityTagOptionalParams
  ): Promise<OpenIdConnectProviderGetEntityTagResponse>;
  /**
   * Gets specific OpenID Connect Provider without secrets.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    options?: OpenIdConnectProviderGetOptionalParams
  ): Promise<OpenIdConnectProviderGetResponse>;
  /**
   * Creates or updates the OpenID Connect Provider.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param parameters Create parameters.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    parameters: OpenidConnectProviderContract,
    options?: OpenIdConnectProviderCreateOrUpdateOptionalParams
  ): Promise<OpenIdConnectProviderCreateOrUpdateResponse>;
  /**
   * Updates the specific OpenID Connect Provider.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param parameters Update parameters.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    ifMatch: string,
    parameters: OpenidConnectProviderUpdateContract,
    options?: OpenIdConnectProviderUpdateOptionalParams
  ): Promise<OpenIdConnectProviderUpdateResponse>;
  /**
   * Deletes specific OpenID Connect Provider of the API Management service instance.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param ifMatch ETag of the Entity. ETag should match the current entity state from the header
   *                response of the GET request or it should be * for unconditional update.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    ifMatch: string,
    options?: OpenIdConnectProviderDeleteOptionalParams
  ): Promise<void>;
  /**
   * Gets the client secret details of the OpenID Connect Provider.
   * @param resourceGroupName The name of the resource group.
   * @param serviceName The name of the API Management service.
   * @param opid Identifier of the OpenID Connect Provider.
   * @param options The options parameters.
   */
  listSecrets(
    resourceGroupName: string,
    serviceName: string,
    opid: string,
    options?: OpenIdConnectProviderListSecretsOptionalParams
  ): Promise<OpenIdConnectProviderListSecretsResponse>;
}