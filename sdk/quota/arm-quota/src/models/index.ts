/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

export type LimitJsonObjectUnion = LimitJsonObject | LimitObject;

/** Resource usage. */
export interface CurrentUsagesBase {
  /**
   * The resource ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Usage properties for the specified resource. */
  properties?: UsagesProperties;
}

/** Usage properties for the specified resource. */
export interface UsagesProperties {
  /** The quota limit properties for this resource. */
  usages?: UsagesObject;
  /**
   *  The units for the quota usage, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly unit?: string;
  /** Resource name provided by the resource provider. Use this property name when requesting quota. */
  name?: ResourceName;
  /** The name of the resource type. */
  resourceType?: string;
  /**
   * The time period for the summary of the quota usage values. For example:
   * *P1D (per one day)
   * *PT1M (per one minute)
   * *PT1S (per one second).
   * This parameter is optional because it is not relevant for all resources such as compute.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly quotaPeriod?: string;
  /**
   * States if quota can be requested for this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isQuotaApplicable?: boolean;
  /** Additional properties for the specific resource provider. */
  properties?: Record<string, unknown>;
}

/** The resource usages value. */
export interface UsagesObject {
  /** The usages value. */
  value: number;
  /** The quota or usages limit types. */
  usagesType?: UsagesTypes;
}

/** Name of the resource provided by the resource Provider. When requesting quota, use this property name. */
export interface ResourceName {
  /** Resource name. */
  value?: string;
  /**
   * Resource display name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly localizedValue?: string;
}

/** Error. */
export interface ExceptionResponse {
  /** API error details. */
  error?: ServiceError;
}

/** API error details. */
export interface ServiceError {
  /** Error code. */
  code?: string;
  /** Error message. */
  message?: string;
  /**
   * List of error details.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly details?: ServiceErrorDetail[];
}

/** Error details. */
export interface ServiceErrorDetail {
  /**
   * Error code.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly code?: string;
  /**
   * Error message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
}

/** Quota limits. */
export interface UsagesLimits {
  /** List of quota limits. */
  value?: CurrentUsagesBase[];
  /** The URI used to fetch the next page of quota limits. When there are no more pages, this is null. */
  nextLink?: string;
}

/** Quota limit. */
export interface CurrentQuotaLimitBase {
  /**
   * The resource ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Quota properties for the specified resource, based on the API called, Quotas or Usages. */
  properties?: QuotaProperties;
}

/** Quota properties for the specified resource. */
export interface QuotaProperties {
  /** Resource quota limit properties. */
  limit?: LimitJsonObjectUnion;
  /**
   *  The quota units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly unit?: string;
  /** Resource name provided by the resource provider. Use this property name when requesting quota. */
  name?: ResourceName;
  /** Resource type name. */
  resourceType?: string;
  /**
   * The time period over which the quota usage values are summarized. For example:
   * *P1D (per one day)
   * *PT1M (per one minute)
   * *PT1S (per one second).
   * This parameter is optional because, for some resources like compute, the period is irrelevant.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly quotaPeriod?: string;
  /**
   * States if quota can be requested for this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isQuotaApplicable?: boolean;
  /** Additional properties for the specific resource provider. */
  properties?: Record<string, unknown>;
}

/** LimitJson abstract class. */
export interface LimitJsonObject {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  limitObjectType: "LimitValue";
}

/** Quota limits. */
export interface QuotaLimits {
  /** List of quota limits. */
  value?: CurrentQuotaLimitBase[];
  /** The URI used to fetch the next page of quota limits. When there are no more pages, this string is null. */
  nextLink?: string;
}

/** List of quota requests with details. */
export interface QuotaRequestDetails {
  /**
   * Quota request ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Quota request name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type. "Microsoft.Quota/quotas".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * The quota request status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: QuotaRequestState;
  /**
   * User-friendly status message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /** Error details of the quota request. */
  error?: ServiceErrorDetail;
  /**
   * The quota request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requestSubmitTime?: Date;
  /** Quota request details. */
  value?: SubRequest[];
}

/** Quota request properties. */
export interface QuotaRequestProperties {
  /**
   * The quota request status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: QuotaRequestState;
  /**
   * User-friendly status message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /** Error details of the quota request. */
  error?: ServiceErrorDetail;
  /**
   * The quota request submission time. The date conforms to the following format specified by the ISO 8601 standard: yyyy-MM-ddTHH:mm:ssZ
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requestSubmitTime?: Date;
  /** Quota request details. */
  value?: SubRequest[];
}

/** Request property. */
export interface SubRequest {
  /** Resource name. */
  name?: ResourceName;
  /**
   * Resource type for which the quota properties were requested.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly resourceType?: string;
  /**  Quota limit units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation. */
  unit?: string;
  /**
   * The quota request status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: QuotaRequestState;
  /**
   * User-friendly status message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * Quota request ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly subRequestId?: string;
  /** Resource quota limit properties. */
  limit?: LimitJsonObjectUnion;
}

/** Quota request information. */
export interface QuotaRequestDetailsList {
  /** Quota request details. */
  value?: QuotaRequestDetails[];
  /** The URI for fetching the next page of quota limits. When there are no more pages, this string is null. */
  nextLink?: string;
}

export interface OperationList {
  value?: OperationResponse[];
  /** URL to get the next page of items. */
  nextLink?: string;
}

export interface OperationResponse {
  name?: string;
  display?: OperationDisplay;
  origin?: string;
}

export interface OperationDisplay {
  /** Provider name. */
  provider?: string;
  /** Resource name. */
  resource?: string;
  /** Operation name. */
  operation?: string;
  /** Operation description. */
  description?: string;
}

/** Resource properties. */
export interface CommonResourceProperties {
  /**
   * Resource ID
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Resource name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type. Example: "Microsoft.Quota/quotas"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** Quota limits request response. */
export interface QuotaLimitsResponse {
  /** List of quota limits with the quota request status. */
  value?: CurrentQuotaLimitBase[];
  /** The URI used to fetch the next page of quota limits. When there are no more pages, this is null. */
  nextLink?: string;
}

/** Quota change requests information. */
export interface CreateGenericQuotaRequestParameters {
  /** Quota change requests. */
  value?: CurrentQuotaLimitBase[];
}

/** Quota request response. */
export interface QuotaRequestOneResourceSubmitResponse {
  /**
   * Quota request ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * The name of the quota request.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type. "Microsoft.Quota/ServiceLimitRequests"
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Quota request status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: QuotaRequestState;
  /**
   * User-friendly status message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /**
   * Quota request submission time. The date conforms to the following ISO 8601 standard format: yyyy-MM-ddTHH:mm:ssZ.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly requestSubmitTime?: Date;
  /** Resource quota limit properties. */
  limit?: LimitObject;
  /**
   * Usage information for the current resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly currentValue?: number;
  /**  The quota limit units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation. */
  unit?: string;
  /** Resource name provided by the resource provider. Use this property name when requesting quota. */
  namePropertiesName?: ResourceName;
  /** Resource type name. */
  resourceType?: string;
  /**
   * The time period over which the quota usage values are summarized. For example:
   * *P1D (per one day)
   * *PT1M (per one minute)
   * *PT1S (per one second).
   * This parameter is optional because, for some resources like compute, the period is irrelevant.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly quotaPeriod?: string;
  /**
   * States if quota can be requested for this resource.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly isQuotaApplicable?: boolean;
  /** Error details of the quota request. */
  error?: ServiceErrorDetail;
  /** Additional properties for the specific resource provider. */
  properties?: Record<string, unknown>;
}

/** Quota request response. */
export interface QuotaRequestSubmitResponse {
  /**
   * Quota request ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Quota request name.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /** Quota request details. */
  properties?: QuotaRequestProperties;
  /**
   * Resource type. "Microsoft.Quota/quotas".
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
}

/** The quota request response with the quota request ID. */
export interface QuotaRequestSubmitResponse202 {
  /**
   * The quota request ID. To check the request status, use the **id** value in a [Quota Request Status](https://docs.microsoft.com/en-us/rest/api/reserved-vm-instances/quotarequeststatus/get) GET operation.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly id?: string;
  /**
   * Operation ID.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly name?: string;
  /**
   * Resource type.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly type?: string;
  /**
   * Quota request status.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly provisioningState?: QuotaRequestState;
  /**
   * User-friendly message.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly message?: string;
  /** Resource quota limit properties. */
  limit?: LimitObject;
  /**  The quota limit units, such as Count and Bytes. When requesting quota, use the **unit** value returned in the GET response in the request body of your PUT operation. */
  unit?: string;
  /** Resource name provided by the resource provider. Use this property name when requesting quota. */
  namePropertiesName?: ResourceName;
  /** Resource type name. */
  resourceType?: string;
  /**
   * The time period over which the quota usage values are summarized. For example:
   * *P1D (per one day)
   * *PT1M (per one minute)
   * *PT1S (per one second).
   * This parameter is optional because, for some resources like compute, the period is irrelevant.
   * NOTE: This property will not be serialized. It can only be populated by the server.
   */
  readonly quotaPeriod?: string;
  /** Additional properties for the specific resource provider. */
  properties?: Record<string, unknown>;
}

/** The resource quota limit value. */
export type LimitObject = LimitJsonObject & {
  /** Polymorphic discriminator, which specifies the different types this object can be */
  limitObjectType: "LimitValue";
  /** The quota/limit value */
  value: number;
  /** The quota or usages limit types. */
  limitType?: QuotaLimitTypes;
};

/** Defines headers for Usages_get operation. */
export interface UsagesGetHeaders {
  /** Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. */
  eTag?: string;
}

/** Defines headers for Usages_list operation. */
export interface UsagesListHeaders {
  /** Current entity state version. It should be treated as opaque and used to make conditional HTTP requests. */
  eTag?: string;
}

/** Defines headers for Usages_listNext operation. */
export interface UsagesListNextHeaders {
  /** Current entity state version. It should be treated as opaque and used to make conditional HTTP requests. */
  eTag?: string;
}

/** Defines headers for Quota_get operation. */
export interface QuotaGetHeaders {
  /** Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. */
  eTag?: string;
}

/** Defines headers for Quota_list operation. */
export interface QuotaListHeaders {
  /** Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. */
  eTag?: string;
}

/** Defines headers for Quota_listNext operation. */
export interface QuotaListNextHeaders {
  /** Current entity state version. Should be treated as opaque and used to make conditional HTTP requests. */
  eTag?: string;
}

/** Known values of {@link UsagesTypes} that the service accepts. */
export enum KnownUsagesTypes {
  Individual = "Individual",
  Combined = "Combined"
}

/**
 * Defines values for UsagesTypes. \
 * {@link KnownUsagesTypes} can be used interchangeably with UsagesTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Individual** \
 * **Combined**
 */
export type UsagesTypes = string;

/** Known values of {@link LimitType} that the service accepts. */
export enum KnownLimitType {
  LimitValue = "LimitValue"
}

/**
 * Defines values for LimitType. \
 * {@link KnownLimitType} can be used interchangeably with LimitType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LimitValue**
 */
export type LimitType = string;

/** Known values of {@link QuotaRequestState} that the service accepts. */
export enum KnownQuotaRequestState {
  Accepted = "Accepted",
  Invalid = "Invalid",
  Succeeded = "Succeeded",
  Failed = "Failed",
  InProgress = "InProgress"
}

/**
 * Defines values for QuotaRequestState. \
 * {@link KnownQuotaRequestState} can be used interchangeably with QuotaRequestState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted** \
 * **Invalid** \
 * **Succeeded** \
 * **Failed** \
 * **InProgress**
 */
export type QuotaRequestState = string;

/** Known values of {@link QuotaLimitTypes} that the service accepts. */
export enum KnownQuotaLimitTypes {
  Independent = "Independent",
  Shared = "Shared"
}

/**
 * Defines values for QuotaLimitTypes. \
 * {@link KnownQuotaLimitTypes} can be used interchangeably with QuotaLimitTypes,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Independent** \
 * **Shared**
 */
export type QuotaLimitTypes = string;

/** Optional parameters. */
export interface UsagesGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type UsagesGetResponse = UsagesGetHeaders & CurrentUsagesBase;

/** Optional parameters. */
export interface UsagesListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type UsagesListResponse = UsagesListHeaders & UsagesLimits;

/** Optional parameters. */
export interface UsagesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type UsagesListNextResponse = UsagesListNextHeaders & UsagesLimits;

/** Optional parameters. */
export interface QuotaGetOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type QuotaGetResponse = QuotaGetHeaders & CurrentQuotaLimitBase;

/** Optional parameters. */
export interface QuotaCreateOrUpdateOptionalParams
  extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the createOrUpdate operation. */
export type QuotaCreateOrUpdateResponse = CurrentQuotaLimitBase;

/** Optional parameters. */
export interface QuotaUpdateOptionalParams extends coreClient.OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
  /** A serialized poller which can be used to resume an existing paused Long-Running-Operation. */
  resumeFrom?: string;
}

/** Contains response data for the update operation. */
export type QuotaUpdateResponse = CurrentQuotaLimitBase;

/** Optional parameters. */
export interface QuotaListOptionalParams extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type QuotaListResponse = QuotaListHeaders & QuotaLimits;

/** Optional parameters. */
export interface QuotaListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type QuotaListNextResponse = QuotaListNextHeaders & QuotaLimits;

/** Optional parameters. */
export interface QuotaRequestStatusGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type QuotaRequestStatusGetResponse = QuotaRequestDetails;

/** Optional parameters. */
export interface QuotaRequestStatusListOptionalParams
  extends coreClient.OperationOptions {
  /**
   * | Field                    | Supported operators
   * |---------------------|------------------------
   *
   * |requestSubmitTime | ge, le, eq, gt, lt
   *  |provisioningState eq {QuotaRequestState}
   *  |resourceName eq {resourceName}
   *
   */
  filter?: string;
  /** Number of records to return. */
  top?: number;
  /** The **Skiptoken** parameter is used only if a previous operation returned a partial result. If a previous response contains a **nextLink** element, its value includes a **skiptoken** parameter that specifies a starting point to use for subsequent calls. */
  skiptoken?: string;
}

/** Contains response data for the list operation. */
export type QuotaRequestStatusListResponse = QuotaRequestDetailsList;

/** Optional parameters. */
export interface QuotaRequestStatusListNextOptionalParams
  extends coreClient.OperationOptions {
  /**
   * | Field                    | Supported operators
   * |---------------------|------------------------
   *
   * |requestSubmitTime | ge, le, eq, gt, lt
   *  |provisioningState eq {QuotaRequestState}
   *  |resourceName eq {resourceName}
   *
   */
  filter?: string;
  /** Number of records to return. */
  top?: number;
  /** The **Skiptoken** parameter is used only if a previous operation returned a partial result. If a previous response contains a **nextLink** element, its value includes a **skiptoken** parameter that specifies a starting point to use for subsequent calls. */
  skiptoken?: string;
}

/** Contains response data for the listNext operation. */
export type QuotaRequestStatusListNextResponse = QuotaRequestDetailsList;

/** Optional parameters. */
export interface QuotaOperationListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type QuotaOperationListResponse = OperationList;

/** Optional parameters. */
export interface QuotaOperationListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type QuotaOperationListNextResponse = OperationList;

/** Optional parameters. */
export interface AzureQuotaExtensionAPIOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
