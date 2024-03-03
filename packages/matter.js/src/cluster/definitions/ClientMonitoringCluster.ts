/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { WritableAttribute, Command, TlvNoResponse, AccessLevel, OptionalCommand } from "../../cluster/Cluster.js";
import { TlvUInt32, TlvUInt16, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace ClientMonitoring {
    export const TlvMonitoringRegistration = TlvObject({
        clientNodeId: TlvField(1, TlvNodeId),
        iCid: TlvField(2, TlvUInt64)
    });
    export interface MonitoringRegistration extends TypeFromSchema<typeof TlvMonitoringRegistration> {}

    /**
     * Input to the ClientMonitoring registerClientMonitoring command
     */
    export const TlvRegisterClientMonitoringRequest = TlvObject({
        clientNodeId: TlvField(0, TlvNodeId),
        iCid: TlvField(1, TlvUInt64)
    });

    /**
     * Input to the ClientMonitoring registerClientMonitoring command
     */
    export interface RegisterClientMonitoringRequest extends TypeFromSchema<typeof TlvRegisterClientMonitoringRequest> {}

    /**
     * Input to the ClientMonitoring unregisterClientMonitoring command
     */
    export const TlvUnregisterClientMonitoringRequest = TlvObject({
        clientNodeId: TlvField(0, TlvNodeId),
        iCid: TlvField(1, TlvUInt64)
    });

    /**
     * Input to the ClientMonitoring unregisterClientMonitoring command
     */
    export interface UnregisterClientMonitoringRequest extends TypeFromSchema<typeof TlvUnregisterClientMonitoringRequest> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x1046,
        name: "ClientMonitoring",
        revision: 1,

        attributes: {
            idleModeInterval: WritableAttribute(0x0, TlvUInt32.bound({ min: 300, max: 86400000 }), { default: 18 }),
            activeModeInterval: WritableAttribute(0x1, TlvUInt32.bound({ min: 300, max: 86400000 }), { default: 18 }),
            activeModeThreshold: WritableAttribute(0x2, TlvUInt16.bound({ min: 300, max: 60000 }), { default: 0 }),
            expectedClients: WritableAttribute(
                0x3,
                TlvArray(TlvMonitoringRegistration, { maxLength: 4 }),
                { default: [] }
            )
        },

        commands: {
            registerClientMonitoring: Command(
                0x0,
                TlvRegisterClientMonitoringRequest,
                0x0,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            ),

            unregisterClientMonitoring: Command(
                0x1,
                TlvUnregisterClientMonitoringRequest,
                0x1,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            ),

            stayAwakeRequest: OptionalCommand(
                0x2,
                TlvNoArguments,
                0x2,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * Client Monitoring
     *
     * Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type ClientMonitoringCluster = ClientMonitoring.Cluster;
export const ClientMonitoringCluster = ClientMonitoring.Cluster;
ClusterRegistry.register(ClientMonitoring.Complete);
