/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { ContentLauncher } from "../../../cluster/definitions/ContentLauncherCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * Upon receipt, this shall launch content from the specified URL.
 *
 * The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols attributes.
 *
 * A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
 */
export type LaunchUrlRequest = TypeFromSchema<typeof ContentLauncher.TlvLaunchUrlRequest>;

/**
 * This command shall be generated in response to LaunchContent and LaunchURL commands.
 *
 * WARNING TODO: Data in table above needs a max size
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.3
 */
export type LauncherResponse = TypeFromSchema<typeof ContentLauncher.TlvLauncherResponse>;

/**
 * Upon receipt, this shall launch the specified content with optional search criteria. This command returns a Launch
 * Response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
 */
export type LaunchContentRequest = TypeFromSchema<typeof ContentLauncher.TlvLaunchContentRequest>;

export namespace ContentLauncherInterface {
    export interface UrlPlayback {
        /**
         * Upon receipt, this shall launch content from the specified URL.
         *
         * The content types supported include those identified in the AcceptHeader and SupportedStreamingProtocols
         * attributes.
         *
         * A check shall be made to ensure the URL is secure (uses HTTPS). This command returns a Launch Response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.2
         */
        launchUrl(request: LaunchUrlRequest): MaybePromise<LauncherResponse>;
    }

    export interface ContentSearch {
        /**
         * Upon receipt, this shall launch the specified content with optional search criteria. This command returns a
         * Launch Response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.7.4.1
         */
        launchContent(request: LaunchContentRequest): MaybePromise<LauncherResponse>;
    }
}

export type ContentLauncherInterface = {
    components: [
        { flags: { urlPlayback: true }, methods: ContentLauncherInterface.UrlPlayback },
        { flags: { contentSearch: true }, methods: ContentLauncherInterface.ContentSearch }
    ]
};
