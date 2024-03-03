/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../../cluster/mutation/MutableCluster.js";
import { WritableAttribute } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../../cluster/ClusterRegistry.js";

export namespace OnOffSwitchConfiguration {
    /**
     * The value of the OnOffSwitchConfiguration switchType attribute
     */
    export enum SwitchType {
        Toggle = 0,
        Momentary = 1,
        MultiFunction = 2
    }

    /**
     * The value of the OnOffSwitchConfiguration switchActions attribute
     */
    export enum SwitchActions {
        On = 0,
        Off = 1,
        Toggle = 2
    }

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster({
        id: 0x7,
        name: "OnOffSwitchConfiguration",
        revision: 1,
        attributes: {
            switchType: WritableAttribute(0x0, TlvEnum<SwitchType>()),
            switchActions: WritableAttribute(0x10, TlvEnum<SwitchActions>(), { default: SwitchActions.On })
        }
    });

    /**
     * On/off Switch Configuration
     *
     * Attributes and commands for configuring On/Off switching devices.
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type OnOffSwitchConfigurationCluster = OnOffSwitchConfiguration.Cluster;
export const OnOffSwitchConfigurationCluster = OnOffSwitchConfiguration.Cluster;
ClusterRegistry.register(OnOffSwitchConfiguration.Complete);
