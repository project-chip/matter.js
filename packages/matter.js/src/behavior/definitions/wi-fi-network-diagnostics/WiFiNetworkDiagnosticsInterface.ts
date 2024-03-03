/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace WiFiNetworkDiagnosticsInterface {
    export interface ErrorCounts {
        /**
         * Reception of this command shall reset the following attributes to 0:
         *
         *   • BeaconLostCount
         *
         *   • BeaconRxCount
         *
         *   • PacketMulticastRxCount
         *
         *   • PacketMulticastTxCount
         *
         *   • PacketUnicastRxCount
         *
         *   • PacketUnicastTxCount
         *
         * This command has no associated data.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.14.7.1
         */
        resetCounts(): MaybePromise;
    }
}

export type WiFiNetworkDiagnosticsInterface = {
    components: [{ flags: { errorCounts: true }, methods: WiFiNetworkDiagnosticsInterface.ErrorCounts }]
};
