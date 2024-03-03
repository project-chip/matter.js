/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { ModeSelect } from "../../../cluster/definitions/ModeSelectCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * On receipt of this command, if the NewMode field indicates a valid mode transition within the supported list, the
 * server shall set the CurrentMode attribute to the NewMode value, otherwise, the
 *
 * server shall respond with an INVALID_COMMAND status response.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.6.1
 */
export type ChangeToModeRequest = TypeFromSchema<typeof ModeSelect.TlvChangeToModeRequest>;

export namespace ModeSelectInterface {
    export interface Base {
        /**
         * On receipt of this command, if the NewMode field indicates a valid mode transition within the supported
         * list, the server shall set the CurrentMode attribute to the NewMode value, otherwise, the
         *
         * server shall respond with an INVALID_COMMAND status response.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.8.6.1
         */
        changeToMode(request: ChangeToModeRequest): MaybePromise;
    }
}

export type ModeSelectInterface = { components: [{ flags: {}, methods: ModeSelectInterface.Base }] };
