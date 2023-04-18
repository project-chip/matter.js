/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BitFlag } from "../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_0 } from "../spec/Specifications.js";
import { TlvField, TlvObject } from "../tlv/TlvObject.js";
import { TlvBitmap, TlvUInt8, TlvUInt16, TlvInt16, TlvEnum } from "../tlv/TlvNumber.js";
import { TlvString } from "../tlv/TlvString.js";
import { Attribute, OptionalAttribute, Cluster, TlvNoResponse, OptionalCommand } from "./Cluster.js";
import { TlvNullable } from "../tlv/TlvNullable.js";

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.3 */
export const OptionsBitmap = TlvBitmap(TlvUInt8, {
    /**  
     *   0 : Don't execute command when associated On/Off Cluster is off
     *   1 : Execute command when associated On/Off Cluster is off
     */
    ExecuteIfOff: BitFlag(0),

});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.7.18 */
export const ColorCapabilities = TlvBitmap(TlvUInt16, { // TODO: Validate to be set the same as feature bits
    HueSaturationSupported: BitFlag(0),
    EnhancedHueSupported: BitFlag(1),
    ColorLoopSupported: BitFlag(2),
    XYAttributesSupported: BitFlag(3),
    ColorTemperatureSupported: BitFlag(4),
});

/** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.19.1 */
export const ColorLoopUpdateFlags = TlvBitmap(TlvUInt8, {
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
export const enum ColorControlStepMode {
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
    OptionsMask: TlvField(3, OptionsBitmap),   // TODO: default 0 for all OptionsMask and OptionsOverride below
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
    StepMode: TlvField(0, TlvEnum<ColorControlStepMode>()),
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
    StepMode: TlvField(0, TlvEnum<ColorControlStepMode>()),
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
    StepMode: TlvField(0, TlvEnum<ColorControlStepMode>()),
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
    StepMode: TlvField(0, TlvEnum<ColorControlStepMode>()),
    StepSize: TlvField(1, TlvUInt16),
    TransitionTime: TlvField(2, TlvUInt16.bound({ max: 65534 })),
    ColorTemperatureMinimumMireds: TlvField(3, TlvUInt16.bound({ max: 0xfeff })),
    ColorTemperatureMaximumMireds: TlvField(4, TlvUInt16.bound({ max: 0xfeff })),
    OptionsMask: TlvField(5, OptionsBitmap),
    OptionsOverride: TlvField(6, OptionsBitmap),
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2
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
         * Color Information Attribute Set. Different attributes are utilized depending on what color 
         * mode is used and specified in the features
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.7 
         */
        currentHue: OptionalAttribute(0x0, TlvUInt8.bound({ max: 0xfe }), { default: 0x0, persistent: true }), // TODO: This and following are Mandatory if HueSat flag set in features
        currentSaturation: OptionalAttribute(0x0001, TlvUInt8.bound({ max: 0xfe }), { default: 0x0, persistent: true }),
        remainingTime: OptionalAttribute(0x0002, TlvUInt16.bound({ max: 0xfffe }), { default: 0x0 }),
        currentX: OptionalAttribute(0x0003, TlvUInt16.bound({ max: 0xfeff }), { default: 0x616b, persistent: true }), // TODO: This and following are Mandatory if XY flag set in features
        currentY: OptionalAttribute(0x0004, TlvUInt16.bound({ max: 0xfeff }), { default: 0x607d, persistent: true }),
        driftCompensation: OptionalAttribute(0x0005, TlvEnum<DriftCompensation>()),
        compensationText: OptionalAttribute(0x0006, TlvString.bound({ maxLength: 254 })),
        colorTemperatureMireds: OptionalAttribute(0x0007, TlvUInt16.bound({ max: 0xfeff }), { default: 0x00fa, persistent: true }), // TODO: Mandatory if ColorTemp flag set in features
        colorMode: Attribute(0x0008, TlvEnum<ColorMode>(), { default: 1, persistent: true }),
        options: Attribute(0x000F, OptionsBitmap), // TODO: default 0
        enhancedCurrentHue: OptionalAttribute(0x4000, TlvUInt16, { default: 0x0, persistent: true }), // TODO: Mandatory if Enhanced Hue flag set in features
        enhancedColorMode: Attribute(0x4001, TlvEnum<EnhancedColorMode>(), { default: 1, persistent: true }),
        colorLoopActive: OptionalAttribute(0x4002, TlvUInt8, { default: 0x0, persistent: true }), // TODO - Color Loop Attributes are Mandatory if ColorLoop flag set in features
        colorLoopDirection: OptionalAttribute(0x4003, TlvUInt8, { default: 0x0, persistent: true }),
        colorLoopTime: OptionalAttribute(0x4004, TlvUInt16, { default: 0x0019, persistent: true }),
        colorLoopStartEnhancedHue: OptionalAttribute(0x4005, TlvUInt16, { default: 0x2300 }),
        colorLoopStoredEnhancedHue: OptionalAttribute(0x4006, TlvUInt16, { default: 0x0 }),
        colorCapabilities: Attribute(0x400A, ColorCapabilities),  // , {default: 0}
        colorTempPhysicalMinMireds: OptionalAttribute(0x400B, TlvUInt16.bound({ max: 0xfeff }), { default: 0x0 }), // TODO: This and following Mandatory if ColorTemp flag set in features
        colorTempPhysicalMaxMireds: OptionalAttribute(0x400C, TlvUInt16.bound({ max: 0xfeff }), { default: 0xfeff }),
        coupleColorTempToLevelMinMireds: OptionalAttribute(0x400D, TlvUInt16, { default: 0x0 }),
        startUpColorTemperatureMireds: OptionalAttribute(0x4010, TlvNullable(TlvUInt16.bound({ max: 0xfeff })), { default: 0x0 }),

        /** 
         * Defined Primaries Information Attribute Set
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.8 
         */
        numberOfPrimaries: Attribute(0x0010, TlvNullable(TlvUInt8.bound({ max: 0x06 }))), // TODO - The following Primary(N) Attributes become Mandated depending on this value 
        primary1X: OptionalAttribute(0x0011, TlvUInt16.bound({ max: 0xfeff })),
        primary1Y: OptionalAttribute(0x0012, TlvUInt16.bound({ max: 0xfeff })),
        primary1Intensity: OptionalAttribute(0x0013, TlvNullable(TlvUInt8)),
        primary2X: OptionalAttribute(0x0015, TlvUInt16.bound({ max: 0xfeff })),
        primary2Y: OptionalAttribute(0x0016, TlvUInt16.bound({ max: 0xfeff })),
        primary2Intensity: OptionalAttribute(0x0017, TlvNullable(TlvUInt8)),
        primary3X: OptionalAttribute(0x0019, TlvUInt16.bound({ max: 0xfeff })),
        primary3Y: OptionalAttribute(0x001A, TlvUInt16.bound({ max: 0xfeff })),
        primary3Intensity: OptionalAttribute(0x001B, TlvNullable(TlvUInt8)),

        /** 
         * Additional Defined Primaries Information Attribute Set
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.9 
         */
        primary4X: OptionalAttribute(0x0020, TlvUInt16.bound({ max: 0xfeff })),
        primary4Y: OptionalAttribute(0x0021, TlvUInt16.bound({ max: 0xfeff })),
        primary4Intensity: OptionalAttribute(0x0022, TlvNullable(TlvUInt8)),
        primary5X: OptionalAttribute(0x0024, TlvUInt16.bound({ max: 0xfeff })),
        primary5Y: OptionalAttribute(0x0025, TlvUInt16.bound({ max: 0xfeff })),
        primary5Intensity: OptionalAttribute(0x0026, TlvNullable(TlvUInt8)),
        primary6X: OptionalAttribute(0x0028, TlvUInt16.bound({ max: 0xfeff })),
        primary6Y: OptionalAttribute(0x0029, TlvUInt16.bound({ max: 0xfeff })),
        primary6Intensity: OptionalAttribute(0x002A, TlvNullable(TlvUInt8)),

        /** 
         * Defined Color Points Settings Attribute Set
         * @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.10 
         */
        whitePointX: OptionalAttribute(0x0030, TlvUInt16.bound({ max: 0xfeff })),
        whitePointY: OptionalAttribute(0x0031, TlvUInt16.bound({ max: 0xfeff })),
        colorPointRX: OptionalAttribute(0x0032, TlvUInt16.bound({ max: 0xfeff })),
        colorPointRY: OptionalAttribute(0x0033, TlvUInt16.bound({ max: 0xfeff })),
        colorPointRIntensity: OptionalAttribute(0x0034, TlvNullable(TlvUInt8)),
        colorPointGX: OptionalAttribute(0x0036, TlvUInt16.bound({ max: 0xfeff })),
        colorPointGY: OptionalAttribute(0x0037, TlvUInt16.bound({ max: 0xfeff })),
        colorPointGIntensity: OptionalAttribute(0x0038, TlvNullable(TlvUInt8)),
        colorPointBX: OptionalAttribute(0x003A, TlvUInt16.bound({ max: 0xfeff })),
        colorPointBY: OptionalAttribute(0x003B, TlvUInt16.bound({ max: 0xfeff })),
        colorPointBIntensity: OptionalAttribute(0x003C, TlvNullable(TlvUInt8)),
    },

    /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11 */
    commands: {
        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.4 */
        moveToHue: OptionalCommand(0x0, MoveToHueCommandRequest, 0x0, TlvNoResponse), // TODO - This and following HueSat commands become Mandatory if HueSat flag set in features

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.5 */
        moveHue: OptionalCommand(0x01, MoveHueCommandRequest, 0x01, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.6 */
        stepHue: OptionalCommand(0x02, StepHueCommandRequest, 0x02, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.7 */
        moveToSaturation: OptionalCommand(0x03, MoveToSaturationCommandRequest, 0x03, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.8 */
        moveSaturation: OptionalCommand(0x04, MoveSaturationCommandRequest, 0x04, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.9 */
        stepSaturation: OptionalCommand(0x05, StepSaturationCommandRequest, 0x05, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.10 */
        moveToHueAndSaturation: OptionalCommand(0x06, MoveToHueAndSaturatioCommandRequest, 0x06, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.11 */
        moveToColor: OptionalCommand(0x07, MoveToColorCommandRequest, 0x07, TlvNoResponse), // TODO - This and 8,9 become Mandatory if XY set in feature flags

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.12 */
        moveColor: OptionalCommand(0x08, MoveColorCommandRequest, 0x08, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.13 */
        stepColor: OptionalCommand(0x09, StepColorCommandRequest, 0x09, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.14 */
        moveToColorTemperature: OptionalCommand(0x0a, MoveToColorTemperatureCommandRequest, 0x0a, TlvNoResponse), // TODO - Mandatory if ColorTemperature set in feature flags

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.15 */
        enhancedMoveToHue: OptionalCommand(0x40, EnhancedMoveToHueRequest, 0x40, TlvNoResponse), // TODO - This and 41, 42, 43 Mandatory if EnhancedHue set in feature flags

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.16 */
        enhancedMoveHue: OptionalCommand(0x41, EnhancedMoveHueRequest, 0x41, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.17 */
        enhancedStepHue: OptionalCommand(0x42, EnhancedStepHueRequest, 0x42, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.18 */
        enhancedMoveToHueAndSaturation: OptionalCommand(0x43, EnhancedMoveToHueAndSaturationRequest, 0x43, TlvNoResponse),

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.19 */
        colorLoopSet: OptionalCommand(0x44, ColorLoopSetRequest, 0x44, TlvNoResponse), // TODO - Mandatory if ColorLoop flag set in features

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.20 */
        stopMoveStep: OptionalCommand(0x47, StopMoveStepRequest, 0x47, TlvNoResponse), // TODO - Mandatory if EnhancedHue, ColorTemperature or XY flags set in features

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.21 */
        moveColorTemperature: OptionalCommand(0x4b, MoveColorTemperatureRequest, 0x4b, TlvNoResponse), // TODO - Mandatory if ColorTemperature set in feature flags

        /** @see {@link MatterApplicationClusterSpecificationV1_0} § 3.2.11.22 */
        stepColorTemperature: OptionalCommand(0x4c, StepColorTemperatureRequest, 0x4c, TlvNoResponse), // TODO - Mandatory if ColorTemperature set in feature flags
    }
});