/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "#general";
import { ValidProxies } from "#clusters/valid-proxies";

export namespace ValidProxiesInterface {
    export interface Base {
        /**
         * This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & Assignment
         * Flow”.
         *
         * @see {@link MatterSpecification.v14.Core} § 9.15.14.6.1
         */
        getValidProxiesRequest(): MaybePromise<ValidProxies.GetValidProxiesResponse>;
    }
}

export type ValidProxiesInterface = { components: [{ flags: {}, methods: ValidProxiesInterface.Base }] };
