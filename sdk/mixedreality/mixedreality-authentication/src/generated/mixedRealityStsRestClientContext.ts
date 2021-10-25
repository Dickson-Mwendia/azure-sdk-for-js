/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import { MixedRealityStsRestClientOptionalParams } from "./models";

const packageName = "@azure/mixedreality-authentication";
const packageVersion = "1.0.0";

/** @hidden */
export class MixedRealityStsRestClientContext extends coreHttp.ServiceClient {
  $host: string;
  apiVersion?: string;

  /**
   * Initializes a new instance of the MixedRealityStsRestClientContext class.
   * @param options The parameter options
   */
  constructor(options?: MixedRealityStsRestClientOptionalParams) {
    // Initializing default values for options
    if (!options) {
      options = {};
    }

    if (!options.userAgent) {
      const defaultUserAgent = coreHttp.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(undefined, options);

    this.requestContentType = "application/json; charset=utf-8";

    this.baseUri = options.endpoint || "https://sts.mixedreality.azure.com";

    // Assigning values to Constant parameters
    this.$host = options.$host || "https://sts.mixedreality.azure.com";
    this.apiVersion = options.apiVersion || "2019-02-28-preview";
  }
}