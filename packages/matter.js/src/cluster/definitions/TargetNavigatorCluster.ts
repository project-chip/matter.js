/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { Attribute, OptionalAttribute, Command } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace TargetNavigator {
    /**
     * This indicates an object describing the navigable target.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.11.5.1
     */
    export const TlvTargetInfoStruct = TlvObject({
        /**
         * An unique id within the TargetList.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.11.5.1.1
         */
        identifier: TlvField(0, TlvUInt8),

        /**
         * A name string for the TargetInfoStruct.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.11.5.1.2
         */
        name: TlvField(1, TlvString.bound({ maxLength: 32 }))
    });

    /**
     * This indicates an object describing the navigable target.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.11.5.1
     */
    export interface TargetInfoStruct extends TypeFromSchema<typeof TlvTargetInfoStruct> {}

    /**
     * Input to the TargetNavigator navigateTarget command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.1
     */
    export const TlvNavigateTargetRequest = TlvObject({
        /**
         * This shall indicate the Identifier for the target for UX navigation. The Target shall be an Identifier value
         * contained within one of the TargetInfoStruct objects in the TargetList attribute list.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.1.1
         */
        target: TlvField(0, TlvUInt8),

        /**
         * This shall indicate Optional app-specific data.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.1.2
         */
        data: TlvOptionalField(1, TlvString)
    });

    /**
     * Input to the TargetNavigator navigateTarget command
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.1
     */
    export interface NavigateTargetRequest extends TypeFromSchema<typeof TlvNavigateTargetRequest> {}

    /**
     * @see {@link MatterSpecification.v11.Cluster} § 6.11.5.2
     */
    export enum Status {
        /**
         * Command succeeded
         */
        Success = 0,

        /**
         * Requested target was not found in the TargetList
         */
        TargetNotFound = 1,

        /**
         * Target request is not allowed in current state.
         */
        NotAllowed = 2
    }

    /**
     * This command shall be generated in response to NavigateTarget command.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.2
     */
    export const TlvNavigateTargetResponse = TlvObject({
        /**
         * This shall indicate the of the command.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.2.1
         */
        status: TlvField(0, TlvEnum<Status>()),

        /**
         * This shall indicate Optional app-specific data.
         *
         * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.2.2
         */
        data: TlvOptionalField(1, TlvString)
    });

    /**
     * This command shall be generated in response to NavigateTarget command.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.2
     */
    export interface NavigateTargetResponse extends TypeFromSchema<typeof TlvNavigateTargetResponse> {}

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x505,
        name: "TargetNavigator",
        revision: 1,

        attributes: {
            /**
             * The TargetList attribute shall represent a list of targets that can be navigated to within the
             * experience presented to the user by the Endpoint (Video Player or Content App). The list shall not
             * contain any entries with the same Identifier in the TargetInfoStruct object.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 6.11.3.1
             */
            targetList: Attribute(0x0, TlvArray(TlvTargetInfoStruct, { maxLength: 254 }), { default: [] }),

            /**
             * The CurrentTarget attribute shall represent the Identifier for the target which is currently in
             * foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no
             * target is in the foreground.
             *
             * When not null, the CurrentTarget shall be an Identifier value contained within one of the
             * TargetInfoStruct objects in the TargetList attribute list.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 6.11.3.2
             */
            currentTarget: OptionalAttribute(0x1, TlvNullable(TlvUInt8), { default: null })
        },

        commands: {
            /**
             * Upon receipt, this shall navigation the UX to the target identified.
             *
             * @see {@link MatterSpecification.v11.Cluster} § 6.11.4.1
             */
            navigateTarget: Command(0x0, TlvNavigateTargetRequest, 0x1, TlvNavigateTargetResponse)
        }
    });

    /**
     * Target Navigator
     *
     * This cluster provides an interface for UX navigation within a set of targets on a device or endpoint.
     *
     * @see {@link MatterSpecification.v11.Cluster} § 6.11
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type TargetNavigatorCluster = TargetNavigator.Cluster;
export const TargetNavigatorCluster = TargetNavigator.Cluster;
ClusterRegistry.register(TargetNavigator.Complete);
