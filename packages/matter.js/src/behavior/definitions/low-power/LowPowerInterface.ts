/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace LowPowerInterface {
    export interface Base {
        /**
         * This command shall put the device into low power mode.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9.3.1
         */
        sleep(): MaybePromise<void>;
    }
}

export type LowPowerInterface = { components: [{ flags: {}, methods: LowPowerInterface.Base }] };
