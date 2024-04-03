/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";

export namespace ProxyDiscoveryInterface {
    export interface Base {
        /**
         * @see {@link MatterSpecification.v11.Core} § 9.15.13.5
         */
        proxyDiscoverRequest(): MaybePromise;
    }
}

export type ProxyDiscoveryInterface = { components: [{ flags: {}, methods: ProxyDiscoveryInterface.Base }] };
