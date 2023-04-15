/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitFlag } from "../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvBitmap, TlvUInt8, TlvUInt16, TlvInt16, TlvEnum, TlvUInt32 } from "../tlv/TlvNumber.js";
import { TlvString } from "../tlv/TlvString.js";
import { Attribute, OptionalAttribute, Cluster, Command, TlvNoArguments, TlvNoResponse, OptionalCommand } from "./Cluster.js";

// TODO - None of the "@see" comments are likely to be correct. 
// TODO - Need comments on everything
// TODO - Optional/Required likely not correct.
// TODO = Remove min/max bounds when they are same as datatype allows
// TODO - Validate each Attribure and Command against standard.
// TODO - Default values not correct in many cases
// TODO - Command return values are all default - check

/**
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.5.1
 * 
 */
/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.5.8 */
const OptionsBitmap = TlvBitmap(TlvUInt8, {
    ExecuteIfOff: BitFlag(0),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.5.8 */
const ColorControlFeature = TlvBitmap(TlvUInt32, {
    HueAndSaturation: BitFlag(0),
    EnhancedHue: BitFlag(1),
    ColorLoop: BitFlag(2),
    XY: BitFlag(3),
    ColorTemperature: BitFlag(4),

});
/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.5.8 */
const ColorCapabilities = TlvBitmap(TlvUInt16, {
    HueSaturationSupported: BitFlag(0),
    EnhancedHueSupported: BitFlag(1),
    ColorLoopSupported: BitFlag(2),
    XYAttributesSupported: BitFlag(3),
    ColorTemperatureSupported: BitFlag(4),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.5.8 */
const ColorLoopUpdateFlags = TlvBitmap(TlvUInt8, {
    UpdateAction: BitFlag(0),
    UpdateDirection: BitFlag(1),
    UpdateTime: BitFlag(2),
    UpdateStartHue: BitFlag(3),
});

export const enum EnhancedColorMode {
    CurrentHueCurrentSaturation = 0,
    CurrentXCurrentY = 1,
    ColorTemperatureMireds = 2,
    EnhancedCurrentHueCurrentSaturation = 3
}

export const enum HueDirection {
    ShortestDistance = 0,
    LongestDistance = 1,
    Up = 2,
    Down = 3
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.1 */
export const enum HueMoveMode {
    Stpo = 0,
    Up = 1,
    Down = 3
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.2 */
export const enum HueStepMode {
    Up = 1,
    Down = 3
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.2 */
export const enum SaturationMoveMode {
    Stop = 0,
    Up = 1,
    Down = 3
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.2 */
export const enum SaturationStepMode {
    Up = 1,
    Down = 3
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.2 */
export const enum ColorMode {
    CurrentHueAndCurrentSaturation = 0,
    CurrentXAndCurrentY = 1,
    ColorTemperature = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.2 */
export const enum ColorLoopAction {
    Deactivate = 0,
    ActivateFromColorLoopStartEnhancedHue = 1,
    ActivateFromEnhancedCurrentHue = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.2 */
export const enum ColorLoopDirection {
    DecrementHue = 0,
    IncrementHue = 1,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7.4.2 */
export const enum DriftCompensation {
    None = 0,
    OtherUnknown = 1,
    TemperatureMonitoring = 2,
    OpticalLuminance = 3,
    Opticalcolor = 4,
}

const MoveToHueCommandRequest = TlvObject({
    Hue: TlvField(0, TlvUInt8),
    Direction: TlvField(1, TlvEnum<HueDirection>()),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const MoveHueCommandRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<HueMoveMode>()),
    Rate: TlvField(1, TlvUInt8),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

const StepHueCommandRequest = TlvObject({
    StepMode: TlvField(1, TlvEnum<HueStepMode>()),
    StepSize: TlvField(2, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt8),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const MoveToSaturationCommandRequest = TlvObject({
    Saturation: TlvField(0, TlvUInt8),
    TransitionTime: TlvField(1, TlvUInt16),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

const MoveSaturationCommandRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<SaturationMoveMode>()),
    Rate: TlvField(1, TlvUInt8),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

const StepSaturationCommandRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<SaturationStepMode>()),
    StepSize: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt8),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const MoveToHueAndSaturatioCommandRequest = TlvObject({
    Hue: TlvField(0, TlvUInt8),
    Saturation: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const MoveToColorCommandRequest = TlvObject({
    ColorX: TlvField(0, TlvUInt16),
    ColorY: TlvField(1, TlvUInt16),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const MoveColorCommandRequest = TlvObject({
    RateX: TlvField(0, TlvInt16),
    RateY: TlvField(1, TlvInt16),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

const StepColorCommandRequest = TlvObject({
    StepX: TlvField(0, TlvInt16),
    StepY: TlvField(1, TlvInt16),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const MoveToColorTemperatureCommandRequest = TlvObject({
    ColorTemperatureMireds: TlvField(0, TlvUInt16),
    TransitionTime: TlvField(1, TlvUInt16),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

/** extensions */

const extensionAttributes = {
    EnhancedCurrentHue: OptionalAttribute(0x4000, TlvUInt16.bound({ min: 0x0000, max: 0xFFFF }), { default: 0 }),
    EnhancedColorMode: Attribute(0x4001, TlvEnum<EnhancedColorMode>(), { default: 1 }),
    ColorLoopActive: OptionalAttribute(0x4002, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
    ColorLoopDirection: OptionalAttribute(0x4003, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
    ColorLoopTime: OptionalAttribute(0x4004, TlvUInt16.bound({ min: 0x0000, max: 0xFFFF }), { default: 0x19 }),
    ColorLoopStartEnhancedHue: OptionalAttribute(0x4005, TlvUInt16.bound({ min: 0x0000, max: 0xFFFF }), { default: 0x2300 }),
    ColorLoopStoredEnhancedHue: OptionalAttribute(0x4006, TlvUInt16.bound({ min: 0x0000, max: 0xFFFF }), { default: 0 }),
    ColorCapabilities: Attribute(0x400A, ColorCapabilities),  // , {default: 0}
    ColorTempPhysicalMinMireds: OptionalAttribute(0x400B, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
    ColorTempPhysicalMaxMireds: OptionalAttribute(0x400C, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
}

const EnhancedMoveToHueRequest = TlvObject({
    EnhancedHue: TlvField(0, TlvUInt16),
    Direction: TlvField(1, TlvEnum<HueDirection>()),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const EnhancedMoveHueRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<HueMoveMode>()),
    Rate: TlvField(1, TlvUInt16),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

const EnhancedStepHueRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<HueStepMode>()),
    StepSize: TlvField(1, TlvUInt16),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const EnhancedMoveToHueAndSaturationRequest = TlvObject({
    EnhancedHue: TlvField(0, TlvUInt16),
    Saturation: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

const ColorLoopSetRequest = TlvObject({
    UpdateFlags: TlvField(0, ColorLoopUpdateFlags),
    Action: TlvField(1, TlvEnum<ColorLoopAction>()),
    Direction: TlvField(2, TlvEnum<ColorLoopDirection>()),
    Time: TlvField(3, TlvUInt16),
    StartHue: TlvField(4, TlvUInt16),
    OptionsMask: TlvField(5, OptionsBitmap),
    OptionsOverride: TlvField(6, OptionsBitmap),
});

const StopMoveStepRequest = TlvObject({
    OptionsMask: TlvField(0, OptionsBitmap),
    OptionsOverride: TlvField(1, OptionsBitmap),
});

const MoveColorTemperatureRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<HueMoveMode>()),
    Rate: TlvField(1, TlvUInt16),
    ColorTemperatureMinimumMireds: TlvField(2, TlvUInt16),
    ColorTemperatureMaximumMireds: TlvField(3, TlvUInt16),
    OptionsMask: TlvField(4, OptionsBitmap),
    OptionsOverride: TlvField(5, OptionsBitmap),
});

const StepColorTemperatureRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<HueStepMode>()),
    StepSize: TlvField(1, TlvUInt16),
    TransitionTime: TlvField(2, TlvUInt16),
    ColorTemperatureMinimumMireds: TlvField(3, TlvUInt16),
    ColorTemperatureMaximumMireds: TlvField(4, TlvUInt16),
    OptionsMask: TlvField(5, OptionsBitmap),
    OptionsOverride: TlvField(6, OptionsBitmap),
});

const extensionCommands = {
    EnhancedMoveToHue: OptionalCommand(0x40, EnhancedMoveToHueRequest, 0x0, TlvNoResponse),
    EnhancedMoveHue: OptionalCommand(0x41, EnhancedMoveHueRequest, 0x0, TlvNoResponse),
    EnhancedStepHue: OptionalCommand(0x42, EnhancedStepHueRequest, 0x0, TlvNoResponse),
    EnhancedMoveToHueAndSaturation: OptionalCommand(0x43, EnhancedMoveToHueAndSaturationRequest, 0x0, TlvNoResponse),
    ColorLoopSet: OptionalCommand(0x44, ColorLoopSetRequest, 0x0, TlvNoResponse),
    StopMoveStep: OptionalCommand(0x47, StopMoveStepRequest, 0x0, TlvNoResponse),
    MoveColorTemperature: OptionalCommand(0x4B, MoveColorTemperatureRequest, 0x0, TlvNoResponse),
    StepColorTemperature: OptionalCommand(0x4C, StepColorTemperatureRequest, 0x0, TlvNoResponse),
}
/** extensions */

/**
 *
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3
 */
export const ColorControlCluster = Cluster({
    id: 0x0300,
    name: "ColorControl",
    revision: 5,
    features: {
        HueSaturation: BitFlag(0),
        EnhancedHue: BitFlag(1),
        ColorLoop: BitFlag(2),
        XY: BitFlag(3),
        ColorTemperature: BitFlag(4),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.6 */
    // TODO - Need real defaults when called out in spec
    attributes: {
        CurrentHue: Attribute(0x0000, TlvUInt8.bound({ min: 0x00, max: 0xFE }), { default: 0 }),
        CurrentSaturation: Attribute(0x0001, TlvUInt8.bound({ min: 0x00, max: 0xFE }), { default: 0 }),
        RemainingTime: Attribute(0x0002, TlvUInt16.bound({ min: 0x0000, max: 0xFFFE }), { default: 0 }),
        CurrentX: Attribute(0x0003, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        CurrentY: Attribute(0x0004, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        DriftCompensation: Attribute(0x0005, TlvEnum<DriftCompensation>(), { default: 0 }),
        CompensationText: Attribute(0x0006, TlvString.bound({ length: 254 })),
        ColorTemperatureMireds: Attribute(0x0007, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorMode: Attribute(0x0008, TlvEnum<DriftCompensation>(), { default: 0 }),
        Options: Attribute(0x000F, OptionsBitmap),
        NumberOfPrimaries: Attribute(0x0010, TlvUInt8.bound({ min: 0x00, max: 0x06 }), { default: 0 }),
        Primary1X: Attribute(0x0011, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary1Y: Attribute(0x0012, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary1Intensity: Attribute(0x0013, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
        Primary2X: Attribute(0x0015, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary2Y: Attribute(0x0016, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary2Intensity: Attribute(0x0017, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
        Primary3X: Attribute(0x0019, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary3Y: Attribute(0x001A, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary3Intensity: Attribute(0x001B, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
        Primary4X: Attribute(0x0020, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary4Y: Attribute(0x0021, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary4Intensity: Attribute(0x0022, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
        Primary5X: Attribute(0x0024, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary5Y: Attribute(0x0025, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary5Intensit: Attribute(0x0026, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
        Primary6X: Attribute(0x0028, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary6Y: Attribute(0x0029, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        Primary6Intensity: Attribute(0x002A, TlvUInt8.bound({ min: 0x00, max: 0xFF }), { default: 0 }),
        WhitePointX: Attribute(0x0030, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        WhitePointY: Attribute(0x0031, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorPointRX: Attribute(0x0032, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorPointRY: Attribute(0x0033, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorPointRIntensity: Attribute(0x0034, TlvUInt8, { default: 0 }),
        ColorPointGX: Attribute(0x0036, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorPointGY: Attribute(0x0037, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorPointGIntensity: Attribute(0x0038, TlvUInt8, { default: 0 }),
        ColorPointBX: Attribute(0x003A, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorPointBY: Attribute(0x003B, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),
        ColorPointBIntensity: Attribute(0x003C, TlvUInt8, { default: 0 }),
        CoupleColorTempToLevelMinMireds: Attribute(0x400D, TlvUInt16.bound({ min: 0x0000, max: 0xFFFF }), { default: 0 }),
        StartUpColorTemperatureMireds: Attribute(0x4010, TlvUInt16.bound({ min: 0x0000, max: 0xFEFF }), { default: 0 }),

        // TODO - Need to understand when/how to properly account for the extensions
        ...extensionAttributes
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3.7 */
    commands: {
        MoveToHue: OptionalCommand(0x00, MoveToHueCommandRequest, 0x0, TlvNoResponse),
        MoveHu: OptionalCommand(0x01, MoveHueCommandRequest, 0x0, TlvNoResponse),
        StepHue: OptionalCommand(0x02, StepHueCommandRequest, 0x0, TlvNoResponse),
        MoveToSaturation: OptionalCommand(0x03, MoveToSaturationCommandRequest, 0x0, TlvNoResponse),
        MoveSaturation: OptionalCommand(0x04, MoveSaturationCommandRequest, 0x0, TlvNoResponse),
        StepSaturation: OptionalCommand(0x05, StepSaturationCommandRequest, 0x0, TlvNoResponse),
        MoveToHueAndSaturation: OptionalCommand(0x06, MoveToHueAndSaturatioCommandRequest, 0x0, TlvNoResponse),
        MoveToColor: OptionalCommand(0x07, MoveToColorCommandRequest, 0x0, TlvNoResponse),
        MoveColor: OptionalCommand(0x08, MoveColorCommandRequest, 0x0, TlvNoResponse),
        StepColor: OptionalCommand(0x09, StepColorCommandRequest, 0x0, TlvNoResponse),
        MoveToColorTemperature: OptionalCommand(0x0A, MoveToColorTemperatureCommandRequest, 0x0, TlvNoResponse),

        // TODO - Need to understand when/how to properly account for the extensions
        ...extensionCommands
    }
});


/*

<?xml version="1.0"?>
<!--
Copyright (c) 2023 Project CHIP Authors
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
    http://www.apache.org/licenses/LICENSE-2.0
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
<configurator>
  <bitmap name="ColorControlFeature" type="BITMAP32">
    <cluster code="0x0300" />
    <field name="HueAndSaturation" mask="0x01" />
    <field name="EnhancedHue" mask="0x02" />
    <field name="ColorLoop" mask="0x04" />
    <field name="XY" mask="0x08" />
    <field name="ColorTemperature" mask="0x10" />
  </bitmap>

  <enum name="HueDirection" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="ShortestDistance" value="0x0"/>
    <item name="LongestDistance" value="0x1"/>
    <item name="Up" value="0x2"/>
    <item name="Down" value="0x3"/>
  </enum>

  <enum name="HueMoveMode" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="Stop" value="0x0"/>
    <item name="Up" value="0x1"/>
    <item name="Down" value="0x3"/>
  </enum>

  <enum name="HueStepMode" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="Up" value="0x1"/>
    <item name="Down" value="0x3"/>
  </enum>

  <enum name="SaturationMoveMode" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="Stop" value="0x0"/>
    <item name="Up" value="0x1"/>
    <item name="Down" value="0x3"/>
  </enum>

  <enum name="SaturationStepMode" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="Up" value="0x1"/>
    <item name="Down" value="0x3"/>
  </enum>

  <enum name="ColorMode" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="CurrentHueAndCurrentSaturation" value="0x00"/>
    <item name="CurrentXAndCurrentY" value="0x01"/>
    <item name="ColorTemperature" value="0x02"/>
  </enum>

  <bitmap name="ColorCapabilities" type="BITMAP16">
    <cluster code="0x0300"/>
    <field name="HueSaturationSupported" mask="0x0001"/>
    <field name="EnhancedHueSupported" mask="0x0002"/>
    <field name="ColorLoopSupported" mask="0x0004"/>
    <field name="XYAttributesSupported" mask="0x0008"/>
    <field name="ColorTemperatureSupported" mask="0x0010"/>
  </bitmap>

  <bitmap name="ColorLoopUpdateFlags" type="OptionsBitmap">
    <cluster code="0x0300"/>
    <field name="UpdateAction" mask="0x01"/>
    <field name="UpdateDirection" mask="0x02"/>
    <field name="UpdateTime" mask="0x04"/>
    <field name="UpdateStartHue" mask="0x08"/>
  </bitmap>

  <enum name="ColorLoopAction" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="Deactivate" value="0x00"/>
    <item name="ActivateFromColorLoopStartEnhancedHue" value="0x01"/>
    <item name="ActivateFromEnhancedCurrentHue" value="0x02"/>
  </enum>

  <enum name="ColorLoopDirection" type="ENUM8">
    <cluster code="0x0300"/>
    <item name="DecrementHue" value="0x00"/>
    <item name="IncrementHue" value="0x01"/>
  </enum>

  <cluster>
    <name>Color Control</name>
    <domain>Lighting</domain>
    <description>Attributes and commands for controlling the color properties of a color-capable light.</description>
    <code>0x0300</code>
    <define>COLOR_CONTROL_CLUSTER</define>

    <client tick="false" init="false">true</client>
    <server tick="false" init="false">true</server>

    <globalAttribute side="either" code="0xFFFD" value="5"/>

    <attribute side="server" code="0x0000" define="COLOR_CONTROL_CURRENT_HUE" type="INT8U" min="0x00" max="0xFE" writable="false" reportable="true" default="0x00" optional="true">CurrentHue</attribute>
    <!-- CURRENT_HUE -->
    <attribute side="server" code="0x0001" define="COLOR_CONTROL_CURRENT_SATURATION" type="INT8U" min="0x00" max="0xFE" writable="false" reportable="true" default="0x00" optional="true">CurrentSaturation</attribute>
    <!-- CURRENT_SATURATION -->
    <attribute side="server" code="0x0002" define="COLOR_CONTROL_REMAINING_TIME" type="INT16U" min="0x0000" max="0xFFFE" writable="false" default="0x0000" optional="true">RemainingTime</attribute>
    <!-- REMAINING_TIME -->
    <attribute side="server" code="0x0003" define="COLOR_CONTROL_CURRENT_X" type="INT16U" min="0x0000" max="0xFEFF" writable="false" reportable="true" default="0x616B" optional="true">CurrentX</attribute>
    <!-- CURRENT_X -->
    <attribute side="server" code="0x0004" define="COLOR_CONTROL_CURRENT_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="false" reportable="true" default="0x607D" optional="true">CurrentY</attribute>
    <!-- CURRENT_Y -->
    <attribute side="server" code="0x0005" define="COLOR_CONTROL_DRIFT_COMPENSATION" type="ENUM8" min="0x00" max="0x04" writable="false" optional="true">DriftCompensation</attribute>
    <!-- DRIFT_COMPENSATION -->
    <attribute side="server" code="0x0006" define="COLOR_CONTROL_COMPENSATION_TEXT" type="CHAR_STRING" length="254" writable="false" optional="true">CompensationText</attribute>
    <!-- COMPENSATION_TEXT -->
    <attribute side="server" code="0x0007" define="COLOR_CONTROL_COLOR_TEMPERATURE" type="INT16U" min="0x0000" max="0xFEFF" writable="false" reportable="true" default="0x00FA" optional="true">ColorTemperatureMireds</attribute>
    <!-- COLOR_TEMPERATURE -->
    <attribute side="server" code="0x0008" define="COLOR_CONTROL_COLOR_MODE" type="ENUM8" min="0x00" max="0x02" writable="false" default="0x01">ColorMode</attribute>
    <!-- COLOR_MODE -->
    <attribute side="server" code="0x000F" define="COLOR_CONTROL_OPTIONS" type="OptionsBitmap" writable="true" default="0x00">Options</attribute>
    <!-- COLOR_CONTROL_OPTIONS -->
    <attribute side="server" code="0x0010" define="COLOR_CONTROL_NUMBER_OF_PRIMARIES" type="INT8U" min="0x00" max="0x06" isNullable="true" writable="false">NumberOfPrimaries</attribute>
    <!-- NUMBER_OF_PRIMARIES -->
    <attribute side="server" code="0x0011" define="COLOR_CONTROL_PRIMARY_1_X" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary1X</attribute>
    <!-- PRIMARY_1_X -->
    <attribute side="server" code="0x0012" define="COLOR_CONTROL_PRIMARY_1_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary1Y</attribute>
    <!-- PRIMARY_1_Y -->
    <attribute side="server" code="0x0013" define="COLOR_CONTROL_PRIMARY_1_INTENSITY" type="INT8U" min="0x00" max="0xFF" isNullable="true" writable="false" optional="true">Primary1Intensity</attribute>
    <!-- PRIMARY_1_INTENSITY -->
    <attribute side="server" code="0x0015" define="COLOR_CONTROL_PRIMARY_2_X" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary2X</attribute>
    <!-- PRIMARY_2_X -->
    <attribute side="server" code="0x0016" define="COLOR_CONTROL_PRIMARY_2_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary2Y</attribute>
    <!-- PRIMARY_2_Y -->
    <attribute side="server" code="0x0017" define="COLOR_CONTROL_PRIMARY_2_INTENSITY" type="INT8U" min="0x00" max="0xFF" isNullable="true" writable="false" optional="true">Primary2Intensity</attribute>
    <!-- PRIMARY_2_INTENSITY -->
    <attribute side="server" code="0x0019" define="COLOR_CONTROL_PRIMARY_3_X" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary3X</attribute>
    <!-- PRIMARY_3_X -->
    <attribute side="server" code="0x001A" define="COLOR_CONTROL_PRIMARY_3_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary3Y</attribute>
    <!-- PRIMARY_3_Y -->
    <attribute side="server" code="0x001B" define="COLOR_CONTROL_PRIMARY_3_INTENSITY" type="INT8U" min="0x00" max="0xFF" isNullable="true" writable="false" optional="true">Primary3Intensity</attribute>
    <!-- PRIMARY_3_INTENSITY -->
    <attribute side="server" code="0x0020" define="COLOR_CONTROL_PRIMARY_4_X" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary4X</attribute>
    <!-- PRIMARY_4_X -->
    <attribute side="server" code="0x0021" define="COLOR_CONTROL_PRIMARY_4_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary4Y</attribute>
    <!-- PRIMARY_4_Y -->
    <attribute side="server" code="0x0022" define="COLOR_CONTROL_PRIMARY_4_INTENSITY" type="INT8U" min="0x00" max="0xFF" isNullable="true" writable="false" optional="true">Primary4Intensity</attribute>
    <!-- PRIMARY_4_INTENSITY -->
    <attribute side="server" code="0x0024" define="COLOR_CONTROL_PRIMARY_5_X" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary5X</attribute>
    <!-- PRIMARY_5_X -->
    <attribute side="server" code="0x0025" define="COLOR_CONTROL_PRIMARY_5_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary5Y</attribute>
    <!-- PRIMARY_5_Y -->
    <attribute side="server" code="0x0026" define="COLOR_CONTROL_PRIMARY_5_INTENSITY" type="INT8U" min="0x00" max="0xFF" isNullable="true" writable="false" optional="true">Primary5Intensity</attribute>
    <!-- PRIMARY_5_INTENSITY -->
    <attribute side="server" code="0x0028" define="COLOR_CONTROL_PRIMARY_6_X" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary6X</attribute>
    <!-- PRIMARY_6_X -->
    <attribute side="server" code="0x0029" define="COLOR_CONTROL_PRIMARY_6_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="false" optional="true">Primary6Y</attribute>
    <!-- PRIMARY_6_Y -->
    <attribute side="server" code="0x002A" define="COLOR_CONTROL_PRIMARY_6_INTENSITY" type="INT8U" min="0x00" max="0xFF" isNullable="true" writable="false" optional="true">Primary6Intensity</attribute>
    <!-- PRIMARY_6_INTENSITY -->
    <attribute side="server" code="0x0030" define="COLOR_CONTROL_WHITE_POINT_X" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>WhitePointX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- WHITE_POINT_X -->
    <attribute side="server" code="0x0031" define="COLOR_CONTROL_WHITE_POINT_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>WhitePointY</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- WHITE_POINT_Y -->
    <attribute side="server" code="0x0032" define="COLOR_CONTROL_COLOR_POINT_R_X" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>ColorPointRX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_R_X -->
    <attribute side="server" code="0x0033" define="COLOR_CONTROL_COLOR_POINT_R_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>ColorPointRY</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_R_Y -->
    <attribute side="server" code="0x0034" define="COLOR_CONTROL_COLOR_POINT_R_INTENSITY" type="INT8U" isNullable="true" writable="true" optional="true">
      <description>ColorPointRIntensity</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_R_INTENSITY -->
    <attribute side="server" code="0x0036" define="COLOR_CONTROL_COLOR_POINT_G_X" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>ColorPointGX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_G_X -->
    <attribute side="server" code="0x0037" define="COLOR_CONTROL_COLOR_POINT_G_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>ColorPointGY</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_G_Y -->
    <attribute side="server" code="0x0038" define="COLOR_CONTROL_COLOR_POINT_G_INTENSITY" type="INT8U" isNullable="true" writable="true" optional="true">
      <description>ColorPointGIntensity</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_G_INTENSITY -->
    <attribute side="server" code="0x003A" define="COLOR_CONTROL_COLOR_POINT_B_X" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>ColorPointBX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_B_X -->
    <attribute side="server" code="0x003B" define="COLOR_CONTROL_COLOR_POINT_B_Y" type="INT16U" min="0x0000" max="0xFEFF" writable="true" optional="true">
      <description>ColorPointBY</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_B_Y -->
    <attribute side="server" code="0x003C" define="COLOR_CONTROL_COLOR_POINT_B_INTENSITY" type="INT8U" isNullable="true" writable="true" optional="true">
      <description>ColorPointBIntensity</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_B_INTENSITY -->
    <attribute side="server" code="0x400D" define="COLOR_CONTROL_TEMPERATURE_LEVEL_MIN_MIREDS" type="INT16U" min="0x0000" max="0xFFFF" writable="false" optional="true">CoupleColorTempToLevelMinMireds</attribute>
    <attribute side="server" code="0x4010" define="START_UP_COLOR_TEMPERATURE_MIREDS" type="INT16U" min="0x0000" max="0xFEFF" writable="true" isNullable="true" optional="true">
      <description>StartUpColorTemperatureMireds</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>

    <command source="client" code="0x00" name="MoveToHue" optional="true" cli="zcl color-control movetohue">
      <description>
        Move to specified hue.
      </description>
      <arg name="Hue" type="INT8U"/>
      <arg name="Direction" type="HueDirection"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x01" name="MoveHue" optional="true" cli="zcl color-control movehue">
      <description>
        Move hue up or down at specified rate.
      </description>
      <arg name="MoveMode" type="HueMoveMode"/>
      <arg name="Rate" type="INT8U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x02" name="StepHue" optional="true" cli="zcl color-control stephue">
      <description>
        Step hue up or down by specified size at specified rate.
      </description>
      <arg name="StepMode" type="HueStepMode"/>
      <arg name="StepSize" type="INT8U"/>
      <arg name="TransitionTime" type="INT8U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x03" name="MoveToSaturation" optional="true" cli="zcl color-control movetosat">
      <description>
        Move to specified saturation.
      </description>
      <arg name="Saturation" type="INT8U"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x04" name="MoveSaturation" optional="true" cli="zcl color-control movesat">
      <description>
        Move saturation up or down at specified rate.
      </description>
      <arg name="MoveMode" type="SaturationMoveMode"/>
      <arg name="Rate" type="INT8U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x05" name="StepSaturation" optional="true" cli="zcl color-control stepsat">
      <description>
        Step saturation up or down by specified size at specified rate.
      </description>
      <arg name="StepMode" type="SaturationStepMode"/>
      <arg name="StepSize" type="INT8U"/>
      <arg name="TransitionTime" type="INT8U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x06" name="MoveToHueAndSaturation" optional="true" cli="zcl color-control movetohueandsat">
      <description>
        Move to hue and saturation.
      </description>
      <arg name="Hue" type="INT8U"/>
      <arg name="Saturation" type="INT8U"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x07" name="MoveToColor" optional="true" cli="zcl color-control movetocolor">
      <description>
        Move to specified color.
      </description>
      <arg name="ColorX" type="INT16U"/>
      <arg name="ColorY" type="INT16U"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x08" name="MoveColor" optional="true" cli="zcl color-control movecolor">
      <description>
        Moves the color.
      </description>
      <arg name="RateX" type="INT16S"/>
      <arg name="RateY" type="INT16S"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x09" name="StepColor" optional="true" cli="zcl color-control stepcolor">
      <description>
        Steps the lighting to a specific color.
      </description>
      <arg name="StepX" type="INT16S"/>
      <arg name="StepY" type="INT16S"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x0A" name="MoveToColorTemperature" optional="true" cli="zcl color-control movetocolortemp">
      <description>
        Move to a specific color temperature.
      </description>
      <arg name="ColorTemperatureMireds" type="INT16U"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>
  </cluster>

  <clusterExtension code="0x0300">
    <attribute side="server" code="0x4000" define="COLOR_CONTROL_ENHANCED_CURRENT_HUE" type="INT16U" min="0x0000" max="0xFFFF" writable="false" default="0x0000" optional="true">EnhancedCurrentHue</attribute>
    <attribute side="server" code="0x4001" define="COLOR_CONTROL_ENHANCED_COLOR_MODE" type="ENUM8" min="0x00" max="0xFF" writable="false" default="0x01">EnhancedColorMode</attribute>
    <attribute side="server" code="0x4002" define="COLOR_CONTROL_COLOR_LOOP_ACTIVE" type="INT8U" min="0x00" max="0xFF" writable="false" default="0x00" optional="true">ColorLoopActive</attribute>
    <attribute side="server" code="0x4003" define="COLOR_CONTROL_COLOR_LOOP_DIRECTION" type="INT8U" min="0x00" max="0xFF" writable="false" default="0x00" optional="true">ColorLoopDirection</attribute>
    <attribute side="server" code="0x4004" define="COLOR_CONTROL_COLOR_LOOP_TIME" type="INT16U" min="0x0000" max="0xFFFF" writable="false" default="0x0019" optional="true">ColorLoopTime</attribute>
    <attribute side="server" code="0x4005" define="COLOR_CONTROL_COLOR_LOOP_START_ENHANCED_HUE" type="INT16U" min="0x0000" max="0xFFFF" writable="false" default="0x2300" optional="true">ColorLoopStartEnhancedHue</attribute>
    <attribute side="server" code="0x4006" define="COLOR_CONTROL_COLOR_LOOP_STORED_ENHANCED_HUE" type="INT16U" min="0x0000" max="0xFFFF" writable="false" default="0x0000" optional="true">ColorLoopStoredEnhancedHue</attribute>
    <attribute side="server" code="0x400A" define="COLOR_CONTROL_COLOR_CAPABILITIES" type="BITMAP16" min="0x0000" max="0x001F" writable="false" default="0x0000">ColorCapabilities</attribute>
    <attribute side="server" code="0x400B" define="COLOR_CONTROL_COLOR_TEMP_PHYSICAL_MIN" type="INT16U" min="0x0000" max="0xFEFF" writable="false" default="0x0000" optional="true">ColorTempPhysicalMinMireds</attribute>
    <attribute side="server" code="0x400C" define="COLOR_CONTROL_COLOR_TEMP_PHYSICAL_MAX" type="INT16U" min="0x0000" max="0xFEFF" writable="false" default="0xFEFF" optional="true">ColorTempPhysicalMaxMireds</attribute>

    <command source="client" code="0x40" name="EnhancedMoveToHue" optional="true" noDefaultImplementation="true" cli="zcl color-control emovetohue">
      <description>
        Command description for EnhancedMoveToHue
      </description>
      <arg name="EnhancedHue" type="INT16U"/>
      <arg name="Direction" type="HueDirection"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x41" name="EnhancedMoveHue" optional="true" noDefaultImplementation="true" cli="zcl color-control emovehue">
      <description>
        Command description for EnhancedMoveHue
      </description>
      <arg name="MoveMode" type="HueMoveMode"/>
      <arg name="Rate" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x42" name="EnhancedStepHue" optional="true" noDefaultImplementation="true" cli="zcl color-control estephue">
      <description>
        Command description for EnhancedStepHue
      </description>
      <arg name="StepMode" type="HueStepMode"/>
      <arg name="StepSize" type="INT16U"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x43" name="EnhancedMoveToHueAndSaturation" optional="true" noDefaultImplementation="true" cli="zcl color-control emovetohueandsat">
      <description>
        Command description for EnhancedMoveToHueAndSaturation
      </description>
      <arg name="EnhancedHue" type="INT16U"/>
      <arg name="Saturation" type="INT8U"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x44" name="ColorLoopSet" optional="true" noDefaultImplementation="true" cli="zcl color-control loop">
      <description>
        Command description for ColorLoopSet
      </description>
      <arg name="UpdateFlags" type="ColorLoopUpdateFlags"/>
      <arg name="Action" type="ColorLoopAction"/>
      <arg name="Direction" type="ColorLoopDirection"/>
      <arg name="Time" type="INT16U"/>
      <arg name="StartHue" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x47" name="StopMoveStep" optional="true" noDefaultImplementation="true" cli="zcl color-control stopmovestep">
      <description>
        Command description for StopMoveStep
      </description>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x4B" name="MoveColorTemperature" optional="true" noDefaultImplementation="true" cli="zcl color-control movecolortemp">
      <description>
        Command description for MoveColorTemperature
      </description>
      <arg name="MoveMode" type="HueMoveMode"/>
      <arg name="Rate" type="INT16U"/>
      <arg name="ColorTemperatureMinimumMireds" type="INT16U"/>
      <arg name="ColorTemperatureMaximumMireds" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>

    <command source="client" code="0x4C" name="StepColorTemperature" optional="true" noDefaultImplementation="true" cli="zcl color-control stepcolortemp">
      <description>
        Command description for StepColorTemperature
      </description>
      <arg name="StepMode" type="HueStepMode"/>
      <arg name="StepSize" type="INT16U"/>
      <arg name="TransitionTime" type="INT16U"/>
      <arg name="ColorTemperatureMinimumMireds" type="INT16U"/>
      <arg name="ColorTemperatureMaximumMireds" type="INT16U"/>
      <arg name="OptionsMask" type="OptionsBitmap"/>
      <arg name="OptionsOverride" type="OptionsBitmap"/>
    </command>
  </clusterExtension>
</configurator>

*/
