/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";

export namespace ValidProxiesInterface {
    export interface Base {
        /**
         * @see {@link MatterSpecification.v11.Core} § 9.15.15.6
         */
        getValidProxiesRequest(): MaybePromise;
    }
}

export type ValidProxiesInterface = { components: [{ flags: {}, methods: ValidProxiesInterface.Base }] };
