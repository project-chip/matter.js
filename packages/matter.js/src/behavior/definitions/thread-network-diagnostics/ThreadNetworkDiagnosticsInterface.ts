/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace ThreadNetworkDiagnosticsInterface {
    export interface ErrorCounts {
        /**
         * Reception of this command shall reset the following attributes to 0:
         *
         *   • OverrunCount
         *
         * This command has no associated data. Upon completion, this command shall send a status code set to a value
         * of SUCCESS back to the initiator.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.13.7.1
         */
        resetCounts(): MaybePromise;
    }
}

export type ThreadNetworkDiagnosticsInterface = {
    components: [{ flags: { errorCounts: true }, methods: ThreadNetworkDiagnosticsInterface.ErrorCounts }]
};
