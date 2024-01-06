/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace ValidProxiesInterface {
    export interface Base {
        /**
         * @see {@link MatterCoreSpecificationV1_1} § 9.15.15.6
         */
        getValidProxiesRequest(): MaybePromise<void>;
    }
}

export type ValidProxiesInterface = { components: [{ flags: {}, methods: ValidProxiesInterface.Base }] };
