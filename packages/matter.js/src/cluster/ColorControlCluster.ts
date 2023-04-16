/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitFlag } from "../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvBitmap, TlvUInt8, TlvUInt16, TlvInt16, TlvEnum  } from "../tlv/TlvNumber.js";
import { TlvString } from "../tlv/TlvString.js";
import { Attribute, OptionalAttribute, Cluster, TlvNoResponse, OptionalCommand } from "./Cluster.js";

// TODO - None of the "@see" comments are likely to be correct. ##### updated, validate
// TODO - Need comments on everything
// TODO - Optional/Required likely not correct.
// TODO = Remove min/max bounds when they are same as datatype allows #### updated, validate
// TODO - Validate each Attribure and Command against standard.
// TODO - Default values not correct in many cases  ### updated, validate
// TODO - Command return values are all default - check how other clusters do it

// TODO - Document interdependenices with their own TODOs

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.3 */
const OptionsBitmap = TlvBitmap(TlvUInt8, {
    ExecuteIfOff: BitFlag(0),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.7.18 */
const ColorCapabilities = TlvBitmap(TlvUInt16, { // TODO: Validate same as the corresponding bits of the FeatureMap attribute
    HueSaturationSupported: BitFlag(0),
    EnhancedHueSupported: BitFlag(1),
    ColorLoopSupported: BitFlag(2),
    XYAttributesSupported: BitFlag(3),
    ColorTemperatureSupported: BitFlag(4),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.19.1 */
const ColorLoopUpdateFlags = TlvBitmap(TlvUInt8, {
    UpdateAction: BitFlag(0),
    UpdateDirection: BitFlag(1),
    UpdateTime: BitFlag(2),
    UpdateStartHue: BitFlag(3),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.7.12 */
export const enum EnhancedColorMode {
    CurrentHueCurrentSaturation = 0,
    CurrentXCurrentY = 1,
    ColorTemperatureMireds = 2,
    EnhancedCurrentHueCurrentSaturation = 3
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.4.2 */
export const enum HueDirection {
    ShortestDistance = 0,
    LongestDistance = 1,
    Up = 2,
    Down = 3,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.5.1 */
export const enum HueMoveMode {
    Stop = 0,
    Up = 1,
    Down = 3,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.6.1 */
export const enum StepMode {
    Up = 1,
    Down = 3,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.8.1 */
export const enum SaturationMoveMode {
    Stop = 0,
    Up = 1,
    Down = 3,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.7.9. */
export const enum ColorMode {
    CurrentHueAndCurrentSaturation = 0,
    CurrentXAndCurrentY = 1,
    ColorTemperature = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.19.2 */
export const enum ColorLoopAction {
    Deactivate = 0,
    ActivateFromColorLoopStartEnhancedHue = 1,
    ActivateFromEnhancedCurrentHue = 2,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.19.3 */
export const enum ColorLoopDirection {
    DecrementHue = 0,
    IncrementHue = 1,
}

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.7.6 */
export const enum DriftCompensation {
    None = 0,
    OtherUnknown = 1,
    TemperatureMonitoring = 2,
    OpticalLuminance = 3,
    Opticalcolor = 4,
}

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.4 */
const MoveToHueCommandRequest = TlvObject({
    Hue: TlvField(0, TlvUInt8.bound({ max: 254 })),
    Direction: TlvField(1, TlvEnum<HueDirection>()),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(3, OptionsBitmap),   // TODO: default 0 for all option and options override below
    OptionsOverride: TlvField(4, OptionsBitmap), // TODO : default 0
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.5 */
const MoveHueCommandRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<HueMoveMode>()),
    Rate: TlvField(1, TlvUInt8),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.6 */
const StepHueCommandRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<StepMode>()),
    StepSize: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt8),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.7 */
const MoveToSaturationCommandRequest = TlvObject({
    Saturation: TlvField(0, TlvUInt8.bound({ max: 254 })),
    TransitionTime: TlvField(1, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.8 */
const MoveSaturationCommandRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<SaturationMoveMode>()),
    Rate: TlvField(1, TlvUInt8),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.9 */
const StepSaturationCommandRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<StepMode>()),
    StepSize: TlvField(1, TlvUInt8),
    TransitionTime: TlvField(2, TlvUInt8),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.10 */
const MoveToHueAndSaturatioCommandRequest = TlvObject({
    Hue: TlvField(0, TlvUInt8.bound({ max: 254 })),
    Saturation: TlvField(1, TlvUInt8.bound({ max: 254 })),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.11 */
const MoveToColorCommandRequest = TlvObject({
    ColorX: TlvField(0, TlvUInt16.bound({ max: 0xfeff })),
    ColorY: TlvField(1, TlvUInt16.bound({ max: 0xfeff })),
    TransitionTime: TlvField(2, TlvUInt16),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.12 */
const MoveColorCommandRequest = TlvObject({
    RateX: TlvField(0, TlvInt16),
    RateY: TlvField(1, TlvInt16),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.13 */
const StepColorCommandRequest = TlvObject({
    StepX: TlvField(0, TlvInt16),
    StepY: TlvField(1, TlvInt16),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.14 */
const MoveToColorTemperatureCommandRequest = TlvObject({
    ColorTemperatureMireds: TlvField(0, TlvUInt16.bound({ max: 0xfeff })),
    TransitionTime: TlvField(1, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.15 */
const EnhancedMoveToHueRequest = TlvObject({
    EnhancedHue: TlvField(0, TlvUInt16),
    Direction: TlvField(1, TlvEnum<HueDirection>()),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.16 */
const EnhancedMoveHueRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<HueMoveMode>()),
    Rate: TlvField(1, TlvUInt16),
    OptionsMask: TlvField(2, OptionsBitmap),
    OptionsOverride: TlvField(3, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.17 */
const EnhancedStepHueRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<StepMode>()),
    StepSize: TlvField(1, TlvUInt16),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.18 */
const EnhancedMoveToHueAndSaturationRequest = TlvObject({
    EnhancedHue: TlvField(0, TlvUInt16),
    Saturation: TlvField(1, TlvUInt8.bound({ max: 254 })),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    OptionsMask: TlvField(3, OptionsBitmap),
    OptionsOverride: TlvField(4, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.19 */
const ColorLoopSetRequest = TlvObject({
    UpdateFlags: TlvField(0, ColorLoopUpdateFlags),
    Action: TlvField(1, TlvEnum<ColorLoopAction>()),
    Direction: TlvField(2, TlvEnum<ColorLoopDirection>()),
    Time: TlvField(3, TlvUInt16),
    StartHue: TlvField(4, TlvUInt16),
    OptionsMask: TlvField(5, OptionsBitmap),
    OptionsOverride: TlvField(6, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.20 */
const StopMoveStepRequest = TlvObject({
    OptionsMask: TlvField(0, OptionsBitmap),
    OptionsOverride: TlvField(1, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.21 */
const MoveColorTemperatureRequest = TlvObject({
    MoveMode: TlvField(0, TlvEnum<HueMoveMode>()),
    Rate: TlvField(1, TlvUInt16),
    ColorTemperatureMinimumMireds: TlvField(2, TlvUInt16.bound({ max: 0xfeff })),
    ColorTemperatureMaximumMireds: TlvField(3, TlvUInt16.bound({ max: 0xfeff })),
    OptionsMask: TlvField(4, OptionsBitmap),
    OptionsOverride: TlvField(5, OptionsBitmap),
});

/**  @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.22 */
const StepColorTemperatureRequest = TlvObject({
    StepMode: TlvField(0, TlvEnum<StepMode>()),
    StepSize: TlvField(1, TlvUInt16),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    ColorTemperatureMinimumMireds: TlvField(3, TlvUInt16.bound({ max: 0xfeff })),
    ColorTemperatureMaximumMireds: TlvField(4, TlvUInt16.bound({ max: 0xfeff })),
    OptionsMask: TlvField(5, OptionsBitmap),
    OptionsOverride: TlvField(6, OptionsBitmap),
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 2.3
 */
export const ColorControlCluster = Cluster({
    id: 0x0300,
    name: "ColorControl",
    revision: 5,
    features: {
        HueSaturation: BitFlag(0), // TODO: Support for EHUE SHALL require support for HS. Support for CL SHALL require support for EHUE.
        EnhancedHue: BitFlag(1),
        ColorLoop: BitFlag(2),
        XY: BitFlag(3),
        ColorTemperature: BitFlag(4),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.6 */
    attributes: {
        /** 
         * Color Information Attribute Set
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.7 
         */
        currentHue: Attribute(0x0, TlvUInt8.bound({ min: 0x0, max: 0xFE }), { default: 0x0 }),
        currentSaturation: Attribute(0x0001, TlvUInt8.bound({ min: 0x0, max: 0xFE }), { default: 0x0 }),
        remainingTime: Attribute(0x0002, TlvUInt16.bound({ min: 0x0, max: 0xffFE }), { default: 0x0 }),
        currentX: Attribute(0x0003, TlvUInt16.bound({ max: 0xfeff }), { default: 0x616b }),
        currentY: Attribute(0x0004, TlvUInt16.bound({ max: 0xfeff }), { default: 0x607d }),
        driftCompensation: Attribute(0x0005, TlvEnum<DriftCompensation>()),
        compensationText: Attribute(0x0006, TlvString.bound({ maxLength: 254 })),
        colorTemperatureMireds: Attribute(0x0007, TlvUInt16.bound({ max: 0xfeff }), { default: 0x00fa }),
        colorMode: Attribute(0x0008, TlvEnum<DriftCompensation>()),
        options: Attribute(0x000F, OptionsBitmap), // TODO: 0

        // ?? IDs 0x4000 to 0x4010 - separated as "clusterExtension" in XML, with "code" 0x300, i.e. same cluster ID 
        enhancedCurrentHue: OptionalAttribute(0x4000, TlvUInt16, { default: 0x0 }),
        enhancedColorMode: Attribute(0x4001, TlvEnum<EnhancedColorMode>(), { default: 1 }),
        colorLoopActive: OptionalAttribute(0x4002, TlvUInt8, { default: 0x0 }),
        colorLoopDirection: OptionalAttribute(0x4003, TlvUInt8, { default: 0x0 }),
        colorLoopTime: OptionalAttribute(0x4004, TlvUInt16, { default: 0x0019 }),
        colorLoopStartEnhancedHue: OptionalAttribute(0x4005, TlvUInt16, { default: 0x2300 }),
        colorLoopStoredEnhancedHue: OptionalAttribute(0x4006, TlvUInt16, { default: 0x0 }),
        colorCapabilities: Attribute(0x400A, ColorCapabilities),  // , {default: 0}
        colorTempPhysicalMinMireds: OptionalAttribute(0x400B, TlvUInt16.bound({ max: 0xfeff }), { default: 0x0 }),
        colorTempPhysicalMaxMireds: OptionalAttribute(0x400C, TlvUInt16.bound({ max: 0xfeff }), { default: 0xfeff }),
        coupleColorTempToLevelMinMireds: Attribute(0x400D, TlvUInt16, { default: 0x0 }),
        startUpColorTemperatureMireds: Attribute(0x4010, TlvUInt16.bound({ max: 0xfeff }), { default: 0x0 }),

        /** 
         * Defined Primaries Information Attribute Set
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.8 
         */
        numberOfPrimaries: Attribute(0x0010, TlvUInt8.bound({ min: 0x0, max: 0x06 })),
        primary1X: Attribute(0x0011, TlvUInt16.bound({ max: 0xfeff })),
        primary1Y: Attribute(0x0012, TlvUInt16.bound({ max: 0xfeff })),
        primary1Intensity: Attribute(0x0013, TlvUInt8),
        primary2X: Attribute(0x0015, TlvUInt16.bound({ max: 0xfeff })),
        primary2Y: Attribute(0x0016, TlvUInt16.bound({ max: 0xfeff })),
        primary2Intensity: Attribute(0x0017, TlvUInt8),
        primary3X: Attribute(0x0019, TlvUInt16.bound({ max: 0xfeff })),
        primary3Y: Attribute(0x001A, TlvUInt16.bound({ max: 0xfeff })),
        primary3Intensity: Attribute(0x001B, TlvUInt8),

        /** 
         * Additional Defined Primaries Information Attribute Set
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.9 
         */
        primary4X: Attribute(0x0020, TlvUInt16.bound({ max: 0xfeff })),
        primary4Y: Attribute(0x0021, TlvUInt16.bound({ max: 0xfeff })),
        primary4Intensity: Attribute(0x0022, TlvUInt8),
        primary5X: Attribute(0x0024, TlvUInt16.bound({ max: 0xfeff })),
        primary5Y: Attribute(0x0025, TlvUInt16.bound({ max: 0xfeff })),
        primary5Intensit: Attribute(0x0026, TlvUInt8),
        primary6X: Attribute(0x0028, TlvUInt16.bound({ max: 0xfeff })),
        primary6Y: Attribute(0x0029, TlvUInt16.bound({ max: 0xfeff })),
        primary6Intensity: Attribute(0x002A, TlvUInt8),

        /** 
         * Defined Color Points Settings Attribute Set
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.10 
         */
        whitePointX: Attribute(0x0030, TlvUInt16.bound({ max: 0xfeff })),
        whitePointY: Attribute(0x0031, TlvUInt16.bound({ max: 0xfeff })),
        colorPointRX: Attribute(0x0032, TlvUInt16.bound({ max: 0xfeff })),
        colorPointRY: Attribute(0x0033, TlvUInt16.bound({ max: 0xfeff })),
        colorPointRIntensity: Attribute(0x0034, TlvUInt8),
        colorPointGX: Attribute(0x0036, TlvUInt16.bound({ max: 0xfeff })),
        colorPointGY: Attribute(0x0037, TlvUInt16.bound({ max: 0xfeff })),
        colorPointGIntensity: Attribute(0x0038, TlvUInt8),
        colorPointBX: Attribute(0x003A, TlvUInt16.bound({ max: 0xfeff })),
        colorPointBY: Attribute(0x003B, TlvUInt16.bound({ max: 0xfeff })),
        olorPointBIntensity: Attribute(0x003C, TlvUInt8),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11 */
    commands: {
        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.4 */
        moveToHue: OptionalCommand(0x0, MoveToHueCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.5 */
        moveHue: OptionalCommand(0x01, MoveHueCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.6 */
        stepHue: OptionalCommand(0x02, StepHueCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.7 */
        moveToSaturation: OptionalCommand(0x03, MoveToSaturationCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.8 */
        moveSaturation: OptionalCommand(0x04, MoveSaturationCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.9 */
        stepSaturation: OptionalCommand(0x05, StepSaturationCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.10 */
        moveToHueAndSaturation: OptionalCommand(0x06, MoveToHueAndSaturatioCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.11 */
        moveToColor: OptionalCommand(0x07, MoveToColorCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.12 */
        moveColor: OptionalCommand(0x08, MoveColorCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.13 */
        stepColor: OptionalCommand(0x09, StepColorCommandRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.14 */
        moveToColorTemperature: OptionalCommand(0x0A, MoveToColorTemperatureCommandRequest, 0x0, TlvNoResponse),

        // ?? IDs 0x40 to 0x4c - separated as "clusterExtension" in XML, with "code" 0x300, i.e. same cluster ID 

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.15 */
        enhancedMoveToHue: OptionalCommand(0x40, EnhancedMoveToHueRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.16 */
        enhancedMoveHue: OptionalCommand(0x41, EnhancedMoveHueRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.17 */
        enhancedStepHue: OptionalCommand(0x42, EnhancedStepHueRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.18 */
        enhancedMoveToHueAndSaturation: OptionalCommand(0x43, EnhancedMoveToHueAndSaturationRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.19 */
        colorLoopSet: OptionalCommand(0x44, ColorLoopSetRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.20 */
        stopMoveStep: OptionalCommand(0x47, StopMoveStepRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.21 */
        moveColorTemperature: OptionalCommand(0x4B, MoveColorTemperatureRequest, 0x0, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.22 */
        stepColorTemperature: OptionalCommand(0x4C, StepColorTemperatureRequest, 0x0, TlvNoResponse),
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

    <globalAttribute side="either" code="0xffFD" value="5"/>

    <attribute side="server" code="0x0" define="COLOR_CONTROL_CURRENT_HUE" type="INT8U" min="0x00" max="0xFE" writable="false" reportable="true" default="0x00" optional="true">CurrentHue</attribute>
    <!-- CURRENT_HUE -->
    <attribute side="server" code="0x0001" define="COLOR_CONTROL_CURRENT_SATURATION" type="INT8U" min="0x00" max="0xFE" writable="false" reportable="true" default="0x00" optional="true">CurrentSaturation</attribute>
    <!-- CURRENT_SATURATION -->
    <attribute side="server" code="0x0002" define="COLOR_CONTROL_REMAINING_TIME" type="INT16U" min="0x0" max="0xffFE" writable="false" default="0x0" optional="true">RemainingTime</attribute>
    <!-- REMAINING_TIME -->
    <attribute side="server" code="0x0003" define="COLOR_CONTROL_CURRENT_X" type="INT16U" min="0x0" max="0xfeff" writable="false" reportable="true" default="0x616B" optional="true">CurrentX</attribute>
    <!-- CURRENT_X -->
    <attribute side="server" code="0x0004" define="COLOR_CONTROL_CURRENT_Y" type="INT16U" min="0x0" max="0xfeff" writable="false" reportable="true" default="0x607D" optional="true">CurrentY</attribute>
    <!-- CURRENT_Y -->
    <attribute side="server" code="0x0005" define="COLOR_CONTROL_DRIFT_COMPENSATION" type="ENUM8" min="0x00" max="0x04" writable="false" optional="true">DriftCompensation</attribute>
    <!-- DRIFT_COMPENSATION -->
    <attribute side="server" code="0x0006" define="COLOR_CONTROL_COMPENSATION_TEXT" type="CHAR_STRING" length="254" writable="false" optional="true">CompensationText</attribute>
    <!-- COMPENSATION_TEXT -->
    <attribute side="server" code="0x0007" define="COLOR_CONTROL_COLOR_TEMPERATURE" type="INT16U" min="0x0" max="0xfeff" writable="false" reportable="true" default="0x00FA" optional="true">ColorTemperatureMireds</attribute>
    <!-- COLOR_TEMPERATURE -->
    <attribute side="server" code="0x0008" define="COLOR_CONTROL_COLOR_MODE" type="ENUM8" min="0x00" max="0x02" writable="false" default="0x01">ColorMode</attribute>
    <!-- COLOR_MODE -->
    <attribute side="server" code="0x000F" define="COLOR_CONTROL_OPTIONS" type="OptionsBitmap" writable="true" default="0x00">Options</attribute>
    <!-- COLOR_CONTROL_OPTIONS -->
    <attribute side="server" code="0x0010" define="COLOR_CONTROL_NUMBER_OF_PRIMARIES" type="INT8U" min="0x00" max="0x06" isNullable="true" writable="false">NumberOfPrimaries</attribute>
    <!-- NUMBER_OF_PRIMARIES -->
    <attribute side="server" code="0x0011" define="COLOR_CONTROL_PRIMARY_1_X" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary1X</attribute>
    <!-- PRIMARY_1_X -->
    <attribute side="server" code="0x0012" define="COLOR_CONTROL_PRIMARY_1_Y" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary1Y</attribute>
    <!-- PRIMARY_1_Y -->
    <attribute side="server" code="0x0013" define="COLOR_CONTROL_PRIMARY_1_INTENSITY" type="INT8U" min="0x00" max="0xff" isNullable="true" writable="false" optional="true">Primary1Intensity</attribute>
    <!-- PRIMARY_1_INTENSITY -->
    <attribute side="server" code="0x0015" define="COLOR_CONTROL_PRIMARY_2_X" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary2X</attribute>
    <!-- PRIMARY_2_X -->
    <attribute side="server" code="0x0016" define="COLOR_CONTROL_PRIMARY_2_Y" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary2Y</attribute>
    <!-- PRIMARY_2_Y -->
    <attribute side="server" code="0x0017" define="COLOR_CONTROL_PRIMARY_2_INTENSITY" type="INT8U" min="0x00" max="0xff" isNullable="true" writable="false" optional="true">Primary2Intensity</attribute>
    <!-- PRIMARY_2_INTENSITY -->
    <attribute side="server" code="0x0019" define="COLOR_CONTROL_PRIMARY_3_X" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary3X</attribute>
    <!-- PRIMARY_3_X -->
    <attribute side="server" code="0x001A" define="COLOR_CONTROL_PRIMARY_3_Y" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary3Y</attribute>
    <!-- PRIMARY_3_Y -->
    <attribute side="server" code="0x001B" define="COLOR_CONTROL_PRIMARY_3_INTENSITY" type="INT8U" min="0x00" max="0xff" isNullable="true" writable="false" optional="true">Primary3Intensity</attribute>
    <!-- PRIMARY_3_INTENSITY -->
    <attribute side="server" code="0x0020" define="COLOR_CONTROL_PRIMARY_4_X" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary4X</attribute>
    <!-- PRIMARY_4_X -->
    <attribute side="server" code="0x0021" define="COLOR_CONTROL_PRIMARY_4_Y" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary4Y</attribute>
    <!-- PRIMARY_4_Y -->
    <attribute side="server" code="0x0022" define="COLOR_CONTROL_PRIMARY_4_INTENSITY" type="INT8U" min="0x00" max="0xff" isNullable="true" writable="false" optional="true">Primary4Intensity</attribute>
    <!-- PRIMARY_4_INTENSITY -->
    <attribute side="server" code="0x0024" define="COLOR_CONTROL_PRIMARY_5_X" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary5X</attribute>
    <!-- PRIMARY_5_X -->
    <attribute side="server" code="0x0025" define="COLOR_CONTROL_PRIMARY_5_Y" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary5Y</attribute>
    <!-- PRIMARY_5_Y -->
    <attribute side="server" code="0x0026" define="COLOR_CONTROL_PRIMARY_5_INTENSITY" type="INT8U" min="0x00" max="0xff" isNullable="true" writable="false" optional="true">Primary5Intensity</attribute>
    <!-- PRIMARY_5_INTENSITY -->
    <attribute side="server" code="0x0028" define="COLOR_CONTROL_PRIMARY_6_X" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary6X</attribute>
    <!-- PRIMARY_6_X -->
    <attribute side="server" code="0x0029" define="COLOR_CONTROL_PRIMARY_6_Y" type="INT16U" min="0x0" max="0xfeff" writable="false" optional="true">Primary6Y</attribute>
    <!-- PRIMARY_6_Y -->
    <attribute side="server" code="0x002A" define="COLOR_CONTROL_PRIMARY_6_INTENSITY" type="INT8U" min="0x00" max="0xff" isNullable="true" writable="false" optional="true">Primary6Intensity</attribute>
    <!-- PRIMARY_6_INTENSITY -->
    <attribute side="server" code="0x0030" define="COLOR_CONTROL_WHITE_POINT_X" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
      <description>WhitePointX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- WHITE_POINT_X -->
    <attribute side="server" code="0x0031" define="COLOR_CONTROL_WHITE_POINT_Y" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
      <description>WhitePointY</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- WHITE_POINT_Y -->
    <attribute side="server" code="0x0032" define="COLOR_CONTROL_COLOR_POINT_R_X" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
      <description>ColorPointRX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_R_X -->
    <attribute side="server" code="0x0033" define="COLOR_CONTROL_COLOR_POINT_R_Y" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
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
    <attribute side="server" code="0x0036" define="COLOR_CONTROL_COLOR_POINT_G_X" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
      <description>ColorPointGX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_G_X -->
    <attribute side="server" code="0x0037" define="COLOR_CONTROL_COLOR_POINT_G_Y" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
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
    <attribute side="server" code="0x003A" define="COLOR_CONTROL_COLOR_POINT_B_X" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
      <description>ColorPointBX</description>
      <access op="read" role="view"/>
      <access op="write" role="manage"/>
    </attribute>
    <!-- COLOR_POINT_B_X -->
    <attribute side="server" code="0x003B" define="COLOR_CONTROL_COLOR_POINT_B_Y" type="INT16U" min="0x0" max="0xfeff" writable="true" optional="true">
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
    <attribute side="server" code="0x400D" define="COLOR_CONTROL_TEMPERATURE_LEVEL_MIN_MIREDS" type="INT16U" min="0x0" max="0xffff" writable="false" optional="true">CoupleColorTempToLevelMinMireds</attribute>
    <attribute side="server" code="0x4010" define="START_UP_COLOR_TEMPERATURE_MIREDS" type="INT16U" min="0x0" max="0xfeff" writable="true" isNullable="true" optional="true">
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
    <attribute side="server" code="0x4000" define="COLOR_CONTROL_ENHANCED_CURRENT_HUE" type="INT16U" min="0x0" max="0xffff" writable="false" default="0x0" optional="true">EnhancedCurrentHue</attribute>
    <attribute side="server" code="0x4001" define="COLOR_CONTROL_ENHANCED_COLOR_MODE" type="ENUM8" min="0x00" max="0xff" writable="false" default="0x01">EnhancedColorMode</attribute>
    <attribute side="server" code="0x4002" define="COLOR_CONTROL_COLOR_LOOP_ACTIVE" type="INT8U" min="0x00" max="0xff" writable="false" default="0x00" optional="true">ColorLoopActive</attribute>
    <attribute side="server" code="0x4003" define="COLOR_CONTROL_COLOR_LOOP_DIRECTION" type="INT8U" min="0x00" max="0xff" writable="false" default="0x00" optional="true">ColorLoopDirection</attribute>
    <attribute side="server" code="0x4004" define="COLOR_CONTROL_COLOR_LOOP_TIME" type="INT16U" min="0x0" max="0xffff" writable="false" default="0x0019" optional="true">ColorLoopTime</attribute>
    <attribute side="server" code="0x4005" define="COLOR_CONTROL_COLOR_LOOP_START_ENHANCED_HUE" type="INT16U" min="0x0" max="0xffff" writable="false" default="0x2300" optional="true">ColorLoopStartEnhancedHue</attribute>
    <attribute side="server" code="0x4006" define="COLOR_CONTROL_COLOR_LOOP_STORED_ENHANCED_HUE" type="INT16U" min="0x0" max="0xffff" writable="false" default="0x0" optional="true">ColorLoopStoredEnhancedHue</attribute>
    <attribute side="server" code="0x400A" define="COLOR_CONTROL_COLOR_CAPABILITIES" type="BITMAP16" min="0x0" max="0x001F" writable="false" default="0x0">ColorCapabilities</attribute>
    <attribute side="server" code="0x400B" define="COLOR_CONTROL_COLOR_TEMP_PHYSICAL_MIN" type="INT16U" min="0x0" max="0xfeff" writable="false" default="0x0" optional="true">ColorTempPhysicalMinMireds</attribute>
    <attribute side="server" code="0x400C" define="COLOR_CONTROL_COLOR_TEMP_PHYSICAL_MAX" type="INT16U" min="0x0" max="0xfeff" writable="false" default="0xfeff" optional="true">ColorTempPhysicalMaxMireds</attribute>

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
