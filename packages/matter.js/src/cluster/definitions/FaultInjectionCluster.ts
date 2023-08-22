/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Command, TlvNoResponse, AccessLevel } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";

export namespace FaultInjection {
    export const enum FaultType {
        Unspecified = 0,
        SystemFault = 1,
        InetFault = 2,
        ChipFault = 3,
        CertFault = 4
    }

    /**
     * Input to the FaultInjection failAtFault command
     */
    export const TlvFailAtFaultRequest = TlvObject({
        type: TlvField(0, TlvEnum<FaultType>()),
        id: TlvField(1, TlvUInt32),
        numCallsToSkip: TlvField(2, TlvUInt32),
        numCallsToFail: TlvField(3, TlvUInt32),
        takeMutex: TlvField(4, TlvBoolean)
    });

    /**
     * Input to the FaultInjection failRandomlyAtFault command
     */
    export const TlvFailRandomlyAtFaultRequest = TlvObject({
        type: TlvField(0, TlvEnum<FaultType>()),
        id: TlvField(1, TlvUInt32),
        percentage: TlvField(2, TlvUInt8)
    });

    /**
     * Fault Injection
     *
     * The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a
     * fault in the system).
     */
    export const Cluster = CreateCluster({
        id: 0xfff1fc06,
        name: "FaultInjection",
        revision: 1,

        commands: {
            failAtFault: Command(0x0, TlvFailAtFaultRequest, 0x0, TlvNoResponse, { invokeAcl: AccessLevel.Manage }),

            failRandomlyAtFault: Command(
                0x1,
                TlvFailRandomlyAtFaultRequest,
                0x1,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            )
        }
    });
}

export type FaultInjectionCluster = typeof FaultInjection.Cluster;
export const FaultInjectionCluster = FaultInjection.Cluster;
