/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster as CreateCluster, Attribute, WritableAttribute } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";

export namespace OnOffSwitchConfiguration {
    /**
     * The value of the OnOffSwitchConfiguration switchType attribute
     */
    export const enum SwitchType {
        Toggle = 0,
        Momentary = 1,
        MultiFunction = 2
    }

    /**
     * The value of the OnOffSwitchConfiguration switchActions attribute
     */
    export const enum SwitchActions {
        On = 0,
        Off = 1,
        Toggle = 2
    }

    /**
     * On/off Switch Configuration
     *
     * Attributes and commands for configuring On/Off switching devices.
     */
    export const Cluster = CreateCluster({
        id: 0x7,
        name: "OnOffSwitchConfiguration",
        revision: 1,
        attributes: {
            switchType: Attribute(0x0, TlvEnum<SwitchType>()),
            switchActions: WritableAttribute(0x10, TlvEnum<SwitchActions>(), { default: SwitchActions.On })
        }
    });
}

export type OnOffSwitchConfigurationCluster = typeof OnOffSwitchConfiguration.Cluster;
export const OnOffSwitchConfigurationCluster = OnOffSwitchConfiguration.Cluster;
