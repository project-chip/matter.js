/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

export namespace EthernetNetworkDiagnosticsInterface {
    export interface PacketCountsOrErrorCounts {
        /**
         * Reception of this command shall reset the following attributes to 0:
         *
         *   • PacketRxCount
         *
         *   • PacketTxCount
         *
         *   • TxErrCount
         *
         *   • CollisionCount
         *
         *   • OverrunCount
         *
         * This command has no associated data.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.15.7.1
         */
        resetCounts(): MaybePromise;
    }
}

export type EthernetNetworkDiagnosticsInterface = {
    components: [
        { flags: { packetCounts: true }, methods: EthernetNetworkDiagnosticsInterface.PacketCountsOrErrorCounts },
        { flags: { errorCounts: true }, methods: EthernetNetworkDiagnosticsInterface.PacketCountsOrErrorCounts }
    ]
};
