/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    Cluster as CreateCluster,
    Attribute,
    Command,
    TlvNoResponse,
    AccessLevel,
    OptionalCommand
} from "../../cluster/Cluster.js";
import { TlvUInt32, TlvUInt16, TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvNodeId } from "../../datatype/NodeId.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

export namespace ClientMonitoring {
    export const TlvMonitoringRegistration = TlvObject({
        clientNodeId: TlvField(1, TlvNodeId),
        iCid: TlvField(2, TlvUInt64)
    });

    /**
     * Input to the ClientMonitoring registerClientMonitoring command
     */
    export const TlvRegisterClientMonitoringRequest = TlvObject({
        clientNodeId: TlvField(0, TlvNodeId),
        iCid: TlvField(1, TlvUInt64)
    });

    /**
     * Input to the ClientMonitoring unregisterClientMonitoring command
     */
    export const TlvUnregisterClientMonitoringRequest = TlvObject({
        clientNodeId: TlvField(0, TlvNodeId),
        iCid: TlvField(1, TlvUInt64)
    });

    /**
     * Client Monitoring
     *
     * Client Monitoring allows for ensuring that listed clients meet the required monitoring conditions on the server.
     */
    export const Cluster = CreateCluster({
        id: 0x1046,
        name: "ClientMonitoring",
        revision: 1,

        attributes: {
            idleModeInterval: Attribute(0x0, TlvUInt32.bound({ min: 300, max: 86400000 }), { default: 18 }),
            activeModeInterval: Attribute(0x1, TlvUInt32.bound({ min: 300, max: 86400000 }), { default: 18 }),
            activeModeThreshold: Attribute(0x2, TlvUInt16.bound({ min: 300, max: 60000 }), { default: 0 }),
            expectedClients: Attribute(0x3, TlvArray(TlvMonitoringRegistration, { maxLength: 4 }), { default: [] })
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
}

export type ClientMonitoringCluster = typeof ClientMonitoring.Cluster;
export const ClientMonitoringCluster = ClientMonitoring.Cluster;
