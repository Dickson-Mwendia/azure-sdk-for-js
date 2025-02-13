/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { SpanStatusCode } from "@azure/core-tracing";
import { createSpan } from "../tracing";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeviceUpdateClientContext } from "../deviceUpdateClientContext";
import {
  Operation,
  UpdatesGetOperationsNextOptionalParams,
  UpdatesGetOperationsOptionalParams,
  ImportUpdateInput,
  UpdatesImportUpdateResponse,
  UpdatesGetUpdateOptionalParams,
  UpdatesGetUpdateResponse,
  UpdatesDeleteUpdateResponse,
  UpdatesGetProvidersResponse,
  UpdatesGetNamesResponse,
  UpdatesGetVersionsResponse,
  UpdatesGetFilesResponse,
  UpdatesGetFileOptionalParams,
  UpdatesGetFileResponse,
  UpdatesGetOperationsResponse,
  UpdatesGetOperationOptionalParams,
  UpdatesGetOperationResponse,
  UpdatesGetProvidersNextResponse,
  UpdatesGetNamesNextResponse,
  UpdatesGetVersionsNextResponse,
  UpdatesGetFilesNextResponse,
  UpdatesGetOperationsNextResponse,
} from "../models";

/** Class representing a Updates. */
export class Updates {
  private readonly client: DeviceUpdateClientContext;

  /**
   * Initialize a new instance of the class Updates class.
   * @param client Reference to the service client
   */
  constructor(client: DeviceUpdateClientContext) {
    this.client = client;
  }

  /**
   * Get a list of all update providers that have been imported to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  public listProviders(options?: coreHttp.OperationOptions): PagedAsyncIterableIterator<string> {
    const iter = this.getProvidersPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getProvidersPagingPage(options);
      },
    };
  }

  private async *getProvidersPagingPage(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string[]> {
    let result = await this._getProviders(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getProvidersNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getProvidersPagingAll(
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string> {
    for await (const page of this.getProvidersPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all update names that match the specified provider.
   * @param provider Update provider.
   * @param options The options parameters.
   */
  public listNames(
    provider: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<string> {
    const iter = this.getNamesPagingAll(provider, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getNamesPagingPage(provider, options);
      },
    };
  }

  private async *getNamesPagingPage(
    provider: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string[]> {
    let result = await this._getNames(provider, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getNamesNext(provider, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getNamesPagingAll(
    provider: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string> {
    for await (const page of this.getNamesPagingPage(provider, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all update versions that match the specified provider and name.
   * @param provider Update provider.
   * @param name Update name.
   * @param options The options parameters.
   */
  public listVersions(
    provider: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<string> {
    const iter = this.getVersionsPagingAll(provider, name, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getVersionsPagingPage(provider, name, options);
      },
    };
  }

  private async *getVersionsPagingPage(
    provider: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string[]> {
    let result = await this._getVersions(provider, name, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getVersionsNext(provider, name, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getVersionsPagingAll(
    provider: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string> {
    for await (const page of this.getVersionsPagingPage(provider, name, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all update file identifiers for the specified version.
   * @param provider Update provider.
   * @param name Update name.
   * @param version Update version.
   * @param options The options parameters.
   */
  public listFiles(
    provider: string,
    name: string,
    version: string,
    options?: coreHttp.OperationOptions
  ): PagedAsyncIterableIterator<string> {
    const iter = this.getFilesPagingAll(provider, name, version, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getFilesPagingPage(provider, name, version, options);
      },
    };
  }

  private async *getFilesPagingPage(
    provider: string,
    name: string,
    version: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string[]> {
    let result = await this._getFiles(provider, name, version, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getFilesNext(provider, name, version, continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getFilesPagingAll(
    provider: string,
    name: string,
    version: string,
    options?: coreHttp.OperationOptions
  ): AsyncIterableIterator<string> {
    for await (const page of this.getFilesPagingPage(provider, name, version, options)) {
      yield* page;
    }
  }

  /**
   * Get a list of all import update operations. Completed operations are kept for 7 days before
   * auto-deleted. Delete operations are not returned by this API version.
   * @param options The options parameters.
   */
  public listOperations(
    options?: UpdatesGetOperationsOptionalParams
  ): PagedAsyncIterableIterator<Operation> {
    const iter = this.getOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.getOperationsPagingPage(options);
      },
    };
  }

  private async *getOperationsPagingPage(
    options?: UpdatesGetOperationsOptionalParams
  ): AsyncIterableIterator<Operation[]> {
    let result = await this._getOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._getOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *getOperationsPagingAll(
    options?: UpdatesGetOperationsOptionalParams
  ): AsyncIterableIterator<Operation> {
    for await (const page of this.getOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Import new update version.
   * @param updateToImport The update to be imported.
   * @param options The options parameters.
   */
  async importUpdate(
    updateToImport: ImportUpdateInput,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesImportUpdateResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-importUpdate",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      updateToImport,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        importUpdateOperationSpec
      );
      return result as UpdatesImportUpdateResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a specific update version.
   * @param provider Update provider.
   * @param name Update name.
   * @param version Update version.
   * @param options The options parameters.
   */
  async getUpdate(
    provider: string,
    name: string,
    version: string,
    options?: UpdatesGetUpdateOptionalParams
  ): Promise<UpdatesGetUpdateResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-getUpdate",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      name,
      version,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getUpdateOperationSpec
      );
      return result as UpdatesGetUpdateResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Delete a specific update version.
   * @param provider Update provider.
   * @param name Update name.
   * @param version Update version.
   * @param options The options parameters.
   */
  async deleteUpdate(
    provider: string,
    name: string,
    version: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesDeleteUpdateResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-deleteUpdate",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      name,
      version,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        deleteUpdateOperationSpec
      );
      return result as UpdatesDeleteUpdateResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a list of all update providers that have been imported to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  private async _getProviders(
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetProvidersResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getProviders",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getProvidersOperationSpec
      );
      return result as UpdatesGetProvidersResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a list of all update names that match the specified provider.
   * @param provider Update provider.
   * @param options The options parameters.
   */
  private async _getNames(
    provider: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetNamesResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getNames",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getNamesOperationSpec
      );
      return result as UpdatesGetNamesResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a list of all update versions that match the specified provider and name.
   * @param provider Update provider.
   * @param name Update name.
   * @param options The options parameters.
   */
  private async _getVersions(
    provider: string,
    name: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetVersionsResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getVersions",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      name,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getVersionsOperationSpec
      );
      return result as UpdatesGetVersionsResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a list of all update file identifiers for the specified version.
   * @param provider Update provider.
   * @param name Update name.
   * @param version Update version.
   * @param options The options parameters.
   */
  private async _getFiles(
    provider: string,
    name: string,
    version: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetFilesResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getFiles",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      name,
      version,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getFilesOperationSpec
      );
      return result as UpdatesGetFilesResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a specific update file from the version.
   * @param provider Update provider.
   * @param name Update name.
   * @param version Update version.
   * @param fileId File identifier.
   * @param options The options parameters.
   */
  async getFile(
    provider: string,
    name: string,
    version: string,
    fileId: string,
    options?: UpdatesGetFileOptionalParams
  ): Promise<UpdatesGetFileResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-getFile",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      name,
      version,
      fileId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getFileOperationSpec
      );
      return result as UpdatesGetFileResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Get a list of all import update operations. Completed operations are kept for 7 days before
   * auto-deleted. Delete operations are not returned by this API version.
   * @param options The options parameters.
   */
  private async _getOperations(
    options?: UpdatesGetOperationsOptionalParams
  ): Promise<UpdatesGetOperationsResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getOperations",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getOperationsOperationSpec
      );
      return result as UpdatesGetOperationsResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * Retrieve operation status.
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  async getOperation(
    operationId: string,
    options?: UpdatesGetOperationOptionalParams
  ): Promise<UpdatesGetOperationResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-getOperation",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      operationId,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getOperationOperationSpec
      );
      return result as UpdatesGetOperationResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetProvidersNext
   * @param nextLink The nextLink from the previous successful call to the GetProviders method.
   * @param options The options parameters.
   */
  private async _getProvidersNext(
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetProvidersNextResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getProvidersNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getProvidersNextOperationSpec
      );
      return result as UpdatesGetProvidersNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetNamesNext
   * @param provider Update provider.
   * @param nextLink The nextLink from the previous successful call to the GetNames method.
   * @param options The options parameters.
   */
  private async _getNamesNext(
    provider: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetNamesNextResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getNamesNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      nextLink,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getNamesNextOperationSpec
      );
      return result as UpdatesGetNamesNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetVersionsNext
   * @param provider Update provider.
   * @param name Update name.
   * @param nextLink The nextLink from the previous successful call to the GetVersions method.
   * @param options The options parameters.
   */
  private async _getVersionsNext(
    provider: string,
    name: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetVersionsNextResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getVersionsNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      name,
      nextLink,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getVersionsNextOperationSpec
      );
      return result as UpdatesGetVersionsNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetFilesNext
   * @param provider Update provider.
   * @param name Update name.
   * @param version Update version.
   * @param nextLink The nextLink from the previous successful call to the GetFiles method.
   * @param options The options parameters.
   */
  private async _getFilesNext(
    provider: string,
    name: string,
    version: string,
    nextLink: string,
    options?: coreHttp.OperationOptions
  ): Promise<UpdatesGetFilesNextResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getFilesNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      provider,
      name,
      version,
      nextLink,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getFilesNextOperationSpec
      );
      return result as UpdatesGetFilesNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }

  /**
   * GetOperationsNext
   * @param nextLink The nextLink from the previous successful call to the GetOperations method.
   * @param options The options parameters.
   */
  private async _getOperationsNext(
    nextLink: string,
    options?: UpdatesGetOperationsNextOptionalParams
  ): Promise<UpdatesGetOperationsNextResponse> {
    const { span, updatedOptions } = createSpan(
      "DeviceUpdateClient-_getOperationsNext",
      coreHttp.operationOptionsToRequestOptionsBase(options || {})
    );
    const operationArguments: coreHttp.OperationArguments = {
      nextLink,
      options: updatedOptions,
    };
    try {
      const result = await this.client.sendOperationRequest(
        operationArguments,
        getOperationsNextOperationSpec
      );
      return result as UpdatesGetOperationsNextResponse;
    } catch (error) {
      span.setStatus({
        code: SpanStatusCode.ERROR,
        message: error.message,
      });
      throw error;
    } finally {
      span.end();
    }
  }
}
// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, /* isXml */ false);

const importUpdateOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates",
  httpMethod: "POST",
  responses: {
    202: {
      headersMapper: Mappers.UpdatesImportUpdateHeaders,
    },
    429: {
      isError: true,
    },
  },
  requestBody: Parameters.updateToImport,
  queryParameters: [Parameters.action],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer,
};
const getUpdateOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions/{version}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Update,
    },
    304: {},
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.name,
    Parameters.version,
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer,
};
const deleteUpdateOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions/{version}",
  httpMethod: "DELETE",
  responses: {
    202: {
      headersMapper: Mappers.UpdatesDeleteUpdateHeaders,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.name,
    Parameters.version,
  ],
  serializer,
};
const getProvidersOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/providers",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getNamesOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.provider],
  headerParameters: [Parameters.accept],
  serializer,
};
const getVersionsOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.name,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getFilesOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions/{version}/files",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.name,
    Parameters.version,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getFileOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/providers/{provider}/names/{name}/versions/{version}/files/{fileId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.File,
    },
    304: {},
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.name,
    Parameters.version,
    Parameters.fileId,
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer,
};
const getOperationsOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfOperations,
    },
    429: {
      isError: true,
    },
  },
  queryParameters: [Parameters.filter, Parameters.top],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationOperationSpec: coreHttp.OperationSpec = {
  path: "/deviceupdate/{instanceId}/v2/updates/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Operation,
      headersMapper: Mappers.UpdatesGetOperationHeaders,
    },
    304: {},
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.operationId],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer,
};
const getProvidersNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
const getNamesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getVersionsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.name,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getFilesNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfStrings,
    },
    404: {
      isError: true,
    },
    429: {
      isError: true,
    },
  },
  urlParameters: [
    Parameters.accountEndpoint,
    Parameters.instanceId,
    Parameters.provider,
    Parameters.name,
    Parameters.version,
    Parameters.nextLink,
  ],
  headerParameters: [Parameters.accept],
  serializer,
};
const getOperationsNextOperationSpec: coreHttp.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.PageableListOfOperations,
    },
    429: {
      isError: true,
    },
  },
  queryParameters: [Parameters.filter, Parameters.top],
  urlParameters: [Parameters.accountEndpoint, Parameters.instanceId, Parameters.nextLink],
  headerParameters: [Parameters.accept],
  serializer,
};
