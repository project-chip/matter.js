/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ElementTag, Mei } from "../definitions/index.js";
import { BaseElement } from "./BaseElement.js";
import { ClusterElement } from "./ClusterElement.js";

/**
 * Details on a specific device as defined in the Matter specification.
 * 
 * TODO - extract/merge DeviceTypes.ts?
 */
export type DeviceTypeElement = BaseElement & {
    id: Mei,
    tag: `${DeviceTypeElement.Tag}`,
    classification: `${DeviceTypeElement.Classification}`,
    children?: (DeviceTypeElement | ClusterElement)[]
}

export function DeviceTypeElement(definition: DeviceTypeElement.Properties) {
    return BaseElement(DeviceTypeElement.Tag, definition) as DeviceTypeElement;
}

export namespace DeviceTypeElement {
    export type Tag = ElementTag.DeviceType;
    export const Tag = ElementTag.DeviceType;
    export type Properties = BaseElement.Properties<DeviceTypeElement>;

    export enum Classification {
        Node = "node",
        Utility = "utility",
        Simple = "simple",
        Dynamic = "dynamic"
    }

    // TODO - kill this enum once clusters are loaded
    export enum DeviceType {
        // Lighting
        OnOffLight = 0x0100,
        DimmableLight = 0x0101,
        ColorTemperatureLight = 0x010c,
        ExtendedColorLight = 0x010d,

        // Smart plugs/outlets and other actuators
        OnOffPluginUnit = 0x010a,
        DimmablePluginUnit = 0x010b,
        Pump = 0x303,

        // Switches and controls
        OnOffLightSwitch = 0x0103,
        DimmerSwitch = 0x0104,
        ColorDimmerSwitch = 0x105,
        ControlBridge = 0x0840,
        PumpController = 0x0304,
        GenericSwitch = 0x000f,

        // Sensors
        ContactSensor = 0x0015,
        LightSensor = 0x0106,
        OccupancySensor = 0x0107,
        TemperatureSensor = 0x0302,
        PressureSensor = 0x0305,
        FlowSensor = 0x0306,
        HumiditySensor = 0x0307,
        OnOffSensor = 0x0850,

        // Closures
        DoorLock = 0x000a,
        DoorLockController = 0x000b,
        WindowCovering = 0x0202,

        // HVAC
        HeatingCoolingUnit = 0x0300,
        Thermostat = 0x0301,
        Fan = 0x002b,

        // Media
        BasicVideoPlayer = 0x0028,
        CastingVideoPlayer = 0x0023,
        Speaker = 0x0022,
        ContentApp = 0x0024,
        CastingVideoClient = 0x0029,
        VideoRemoteControl = 0x002a,

        // Generic
        ModeSelect = 0x0027
    }
}
