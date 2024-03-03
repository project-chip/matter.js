/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Command, TlvNoResponse, AccessLevel } from "../../cluster/Cluster.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace FaultInjection {
    export enum FaultType {
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
     * Input to the FaultInjection failAtFault command
     */
    export interface FailAtFaultRequest extends TypeFromSchema<typeof TlvFailAtFaultRequest> {}

    /**
     * Input to the FaultInjection failRandomlyAtFault command
     */
    export const TlvFailRandomlyAtFaultRequest = TlvObject({
        type: TlvField(0, TlvEnum<FaultType>()),
        id: TlvField(1, TlvUInt32),
        percentage: TlvField(2, TlvUInt8)
    });

    /**
     * Input to the FaultInjection failRandomlyAtFault command
     */
    export interface FailRandomlyAtFaultRequest extends TypeFromSchema<typeof TlvFailRandomlyAtFaultRequest> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
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

    /**
     * Fault Injection
     *
     * The Fault Injection Cluster provide a means for a test harness to configure faults(for example triggering a
     * fault in the system).
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type FaultInjectionCluster = FaultInjection.Cluster;
export const FaultInjectionCluster = FaultInjection.Cluster;
ClusterRegistry.register(FaultInjection.Complete);
