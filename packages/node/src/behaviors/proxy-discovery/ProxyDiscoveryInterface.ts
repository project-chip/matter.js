/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { ProxyDiscovery } from "#clusters/proxy-discovery";

export namespace ProxyDiscoveryInterface {
    export interface Base {
        /**
         * This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & Assignment
         * Flow”.
         *
         * @see {@link MatterSpecification.v141.Core} § 9.15.12.4.1
         */
        proxyDiscoverRequest(request: ProxyDiscovery.ProxyDiscoverRequest): MaybePromise;
    }
}

export type ProxyDiscoveryInterface = { components: [{ flags: {}, methods: ProxyDiscoveryInterface.Base }] };
