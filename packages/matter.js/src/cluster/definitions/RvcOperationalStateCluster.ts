/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { OptionalCommand } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { OperationalState } from "../../cluster/definitions/OperationalStateCluster.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace RvcOperationalState {
    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x61,
        name: "RvcOperationalState",
        revision: 2,

        commands: {
            /**
             * On receipt of this command, the device shall start seeking the charging dock, if possible in the current
             * state of the device.
             *
             * If this command is received when already in the SeekingCharger state the device shall respond with an
             * OperationalCommandResponse command with an ErrorStateID of NoError but the command shall have no other
             * effect.
             *
             * A device that receives this command in any state which does not allow seeking the charger, such as
             * Charging or Docked, shall respond with an OperationalCommandResponse command with an ErrorStateID of
             * CommandInvalidInState and shall have no other effect.
             *
             * Otherwise, on success:
             *
             *   • The OperationalState attribute shall be set to SeekingCharger.
             *
             *   • The device shall respond with an OperationalCommandResponse command with an ErrorStateID of NoError.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 7.4.5.1
             */
            goHome: OptionalCommand(0x80, TlvNoArguments, 0x4, OperationalState.TlvOperationalCommandResponse)
        }
    })

    /**
     * This cluster provides an interface for monitoring the operational state of a Robotic Vacuum Cleaner.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.4
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;

    export const Complete = Cluster;
}

export type RvcOperationalStateCluster = RvcOperationalState.Cluster;
export const RvcOperationalStateCluster = RvcOperationalState.Cluster;
ClusterRegistry.register(RvcOperationalState.Complete);
