/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ColorControl = Cluster(
    {
        name: "ColorControl", id: 0x300, classification: "application", pics: "CC",
        xref: { document: "cluster", section: "3.2" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 6 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "3.2.5" } },
        Field({
            name: "HS", constraint: "0", description: "HueSaturation",
            details: "Supports color specification via hue/saturation."
        }),
        Field({ name: "EHUE", constraint: "1", description: "EnhancedHue", details: "Enhanced hue is supported." }),
        Field({ name: "CL", constraint: "2", description: "ColorLoop", details: "Color loop is supported." }),
        Field({ name: "XY", constraint: "3", description: "Xy", details: "Supports color specification via XY." }),
        Field({
            name: "CT", constraint: "4", description: "ColorTemperature",
            details: "Supports specification of color temperature."
        })
    ),

    Attribute(
        {
            name: "CurrentHue", id: 0x0, type: "uint8", access: "R V", conformance: "HS",
            constraint: "0 to 254", default: 0, quality: "N P",

            details: "The CurrentHue attribute contains the current hue value of the light. It is updated as fast as " +
                "practical during commands that change the hue." +
                "\n" +
                "The hue in degrees shall be related to the CurrentHue attribute by the relationship: Hue = " +
                "CurrentHue x 360 / 254 (CurrentHue in the range 0 to 254 inclusive)" +
                "\n" +
                "If this attribute is implemented then the CurrentSaturation and ColorMode attributes shall also be " +
                "implemented.",

            xref: { document: "cluster", section: "3.2.7.2" }
        }
    ),

    Attribute({
        name: "CurrentSaturation", id: 0x1, type: "uint8", access: "R V", conformance: "HS",
        constraint: "0 to 254", default: 0, quality: "N S P",

        details: "The CurrentSaturation attribute holds the current saturation value of the light. It is updated as " +
            "fast as practical during commands that change the saturation." +
            "\n" +
            "The saturation shall be related to the CurrentSaturation attribute by the relationship: Saturation " +
            "= CurrentSaturation/254 (CurrentSaturation in the range 0 to 254 inclusive)" +
            "\n" +
            "If this attribute is implemented then the CurrentHue and ColorMode attributes shall also be " +
            "implemented.",

        xref: { document: "cluster", section: "3.2.7.3" }
    }),

    Attribute({
        name: "RemainingTime", id: 0x2, type: "uint16", access: "R V", conformance: "O",
        constraint: "0 to 65535", default: 0,
        details: "The RemainingTime attribute holds the time remaining, in 1/10ths of a second, until the currently " +
            "active command will be complete.",
        xref: { document: "cluster", section: "3.2.7.4" }
    }),

    Attribute(
        {
            name: "CurrentX", id: 0x3, type: "uint16", access: "R V", conformance: "XY",
            constraint: "0 to 65279", default: 24939, quality: "N S P",

            details: "The CurrentX attribute contains the current value of the normalized chromaticity value x, as " +
                "defined in the CIE xyY Color Space. It is updated as fast as practical during commands that change " +
                "the color." +
                "\n" +
                "The value of x shall be related to the CurrentX attribute by the relationship x = CurrentX / 65536 " +
                "(CurrentX in the range 0 to 65279 inclusive)",

            xref: { document: "cluster", section: "3.2.7.5" }
        }
    ),

    Attribute(
        {
            name: "CurrentY", id: 0x4, type: "uint16", access: "R V", conformance: "XY",
            constraint: "0 to 65279", default: 24701, quality: "N S P",

            details: "The CurrentY attribute contains the current value of the normalized chromaticity value y, as " +
                "defined in the CIE xyY Color Space. It is updated as fast as practical during commands that change " +
                "the color." +
                "\n" +
                "The value of y shall be related to the CurrentY attribute by the relationship y = CurrentY / 65536 " +
                "(CurrentY in the range 0 to 65279 inclusive)",

            xref: { document: "cluster", section: "3.2.7.6" }
        }
    ),

    Attribute(
        {
            name: "DriftCompensation", id: 0x5, type: "enum8", access: "R V", conformance: "O",
            constraint: "0 to 4",
            details: "The DriftCompensation attribute indicates what mechanism, if any, is in use for compensation for " +
                "color/intensity drift over time. It shall be one of the non-reserved values in Values of the " +
                "DriftCompensation Attribute." +
                "\n" +
                "### Table 8. Values of the DriftCompensation Attribute",
            xref: { document: "cluster", section: "3.2.7.7" }
        },

        Field({ name: "None", id: 0x0 }),
        Field({ name: "OtherUnknown", id: 0x1 }),
        Field({ name: "TemperatureMonitoring", id: 0x2 }),
        Field({ name: "OpticalLuminanceMonitoringAndFeedback", id: 0x3 }),
        Field({ name: "OpticalColorMonitoringAndFeedback", id: 0x4 })
    ),

    Attribute({
        name: "CompensationText", id: 0x6, type: "string", access: "R V", conformance: "O",
        constraint: "max 254",
        details: "The CompensationText attribute holds a textual indication of what mechanism, if any, is in use to " +
            "compensate for color/intensity drift over time.",
        xref: { document: "cluster", section: "3.2.7.8" }
    }),

    Attribute(
        {
            name: "ColorTemperatureMireds", id: 0x7, type: "uint16", access: "R V", conformance: "CT",
            constraint: "colorTempPhysicalMinMireds to colorTempPhysicalMaxMireds", default: 250,
            quality: "N S P",

            details: "The ColorTemperatureMireds attribute contains a scaled inverse of the current value of the color " +
                "temperature. The unit of ColorTemperatureMireds is the mired (micro reciprocal degree), a.k.a. " +
                "mirek (micro reciprocal kelvin). It is updated as fast as practical during commands that change the " +
                "color." +
                "\n" +
                "The color temperature value in kelvins shall be related to the ColorTemperatureMireds attribute in " +
                "mireds by the relationship" +
                "\n" +
                "Color temperature in kelvins = 1,000,000 / ColorTemperatureMireds, where ColorTemperatureMireds is " +
                "in the range 1 to 65279 mireds inclusive, giving a color temperature range from 1,000,000 kelvins " +
                "to 15.32 kelvins." +
                "\n" +
                "If this attribute is implemented then the ColorMode attribute shall also be implemented.",

            xref: { document: "cluster", section: "3.2.7.9" }
        }
    ),

    Attribute(
        {
            name: "ColorMode", id: 0x8, type: "enum8", access: "R V", conformance: "M", constraint: "0 to 2",
            quality: "N",

            details: "The ColorMode attribute indicates which attributes are currently determining the color of the " +
                "device." +
                "\n" +
                "The value of the ColorMode attribute cannot be written directly - it is set upon reception of any " +
                "command in section Commands to the appropriate mode for that command." +
                "\n" +
                "Table 9. Values of the ColorMode Attribute",

            xref: { document: "cluster", section: "3.2.7.10" }
        },

        Field({ name: "CurrentHueAndCurrentSaturation", id: 0x0, conformance: "HS" }),
        Field({ name: "CurrentXAndCurrentY", id: 0x1, conformance: "XY" }),
        Field({ name: "ColorTemperatureMireds", id: 0x2, conformance: "CT" })
    ),

    Attribute(
        {
            name: "Options", id: 0xf, type: "map8", access: "RW VO", conformance: "M", constraint: "desc",
            default: 0,

            details: "The Options attribute is meant to be changed only during commissioning. The Options attribute is a " +
                "bitmap that determines the default behavior of some cluster commands. Each command that is " +
                "dependent on the Options attribute shall first construct a temporary Options bitmap that is in " +
                "effect during the command processing. The temporary Options bitmap has the same format and meaning " +
                "as the Options attribute, but includes any bits that may be overridden by command fields." +
                "\n" +
                "Below is the format and description of the Options attribute and temporary Options bitmap and the " +
                "effect on dependent commands." +
                "\n" +
                "Table 10. Options Attribute" +
                "\n" +
                "ExecuteIfOff Options bit: Command execution shall NOT continue beyond the Options processing if all " +
                "of these criteria are true:" +
                "\n" +
                "  • The On/Off cluster exists on the same endpoint as this cluster." +
                "\n" +
                "  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE." +
                "\n" +
                "  • The value of the ExecuteIfOff bit is 0.",

            xref: { document: "cluster", section: "3.2.7.11" }
        },

        Field({ name: "ExecuteIfOff", constraint: "0" })
    ),

    Attribute({
        name: "EnhancedCurrentHue", id: 0x4000, type: "uint16", access: "R V", conformance: "EHUE",
        default: 0, quality: "N S",

        details: "The EnhancedCurrentHue attribute represents non-equidistant steps along the CIE 1931 color " +
            "triangle, and it provides 16-bits precision." +
            "\n" +
            "The upper 8 bits of this attribute shall be used as an index in the implementation specific XY " +
            "lookup table to provide the non-equidistance steps. The lower 8 bits shall be used to interpolate " +
            "between these steps in a linear way in order to provide color zoom for the user." +
            "\n" +
            "To provide compatibility with standard ZCL, the CurrentHue attribute shall contain a hue value in " +
            "the range 0 to 254, calculated from the EnhancedCurrentHue attribute.",

        xref: { document: "cluster", section: "3.2.7.12" }
    }),

    Attribute(
        {
            name: "EnhancedColorMode", id: 0x4001, type: "enum8", access: "R V", conformance: "M",
            constraint: "0 to 3", default: 1, quality: "N S",

            details: "The EnhancedColorMode attribute specifies which attributes are currently determining the color of " +
                "the device, as detailed in Values of the EnhancedColorMode Attribute." +
                "\n" +
                "### Table 11. Values of the EnhancedColorMode Attribute" +
                "\n" +
                "To provide compatibility with standard ZCL, the original ColorMode attribute shall indicate " +
                "‘CurrentHue and CurrentSaturation’ when the light uses the EnhancedCurrentHue attribute. If the " +
                "ColorMode attribute is changed, e.g., due to one of the standard Color Control cluster commands " +
                "defined in the ZCL, its new value shall be copied to the EnhancedColorMode attribute.",

            xref: { document: "cluster", section: "3.2.7.13" }
        },

        Field({ name: "CurrentHueAndCurrentSaturation", id: 0x0 }),
        Field({ name: "CurrentXAndCurrentY", id: 0x1 }),
        Field({ name: "ColorTemperatureMireds", id: 0x2 }),
        Field({ name: "EnhancedCurrentHueAndCurrentSaturation", id: 0x3 })
    ),

    Attribute(
        {
            name: "ColorLoopActive", id: 0x4002, type: "enum16", access: "R V", conformance: "CL", default: 0,
            quality: "N S",
            details: "The ColorLoopActive attribute specifies the current active status of the color loop. If this " +
                "attribute has the value 0, the color loop shall not be active. If this attribute has the value 1, " +
                "the color loop shall be active. All other values (2 to 254) are reserved.",
            xref: { document: "cluster", section: "3.2.7.14" }
        },

        Field({ name: "Inactive", id: 0x0 }),
        Field({ name: "Active", id: 0x1 })
    ),

    Attribute(
        {
            name: "ColorLoopDirection", id: 0x4003, type: "enum16", access: "R V", conformance: "CL",
            default: 0, quality: "N S",
            details: "The ColorLoopDirection attribute specifies the current direction of the color loop. If this " +
                "attribute has the value 0, the EnhancedCurrentHue attribute shall be decremented. If this attribute " +
                "has the value 1, the EnhancedCurrentHue attribute shall be incremented. All other values (2 to 254) " +
                "are reserved.",
            xref: { document: "cluster", section: "3.2.7.15" }
        },

        Field({ name: "Decrement", id: 0x0 }),
        Field({ name: "Increment", id: 0x1 })
    ),

    Attribute({
        name: "ColorLoopTime", id: 0x4004, type: "uint16", access: "R V", conformance: "CL", default: 25,
        quality: "N S",
        details: "The ColorLoopTime attribute specifies the number of seconds it shall take to perform a full color " +
            "loop, i.e., to cycle all values of the EnhancedCurrentHue attribute (between 0 and 0xFFFE).",
        xref: { document: "cluster", section: "3.2.7.16" }
    }),

    Attribute({
        name: "ColorLoopStartEnhancedHue", id: 0x4005, type: "uint16", access: "R V", conformance: "CL",
        default: 8960,
        details: "The ColorLoopStartEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute " +
            "from which the color loop shall be started.",
        xref: { document: "cluster", section: "3.2.7.17" }
    }),

    Attribute({
        name: "ColorLoopStoredEnhancedHue", id: 0x4006, type: "uint16", access: "R V", conformance: "CL",
        default: 0,
        details: "The ColorLoopStoredEnhancedHue attribute specifies the value of the EnhancedCurrentHue attribute " +
            "before the color loop was started. Once the color loop is complete, the EnhancedCurrentHue " +
            "attribute shall be restored to this value.",
        xref: { document: "cluster", section: "3.2.7.18" }
    }),

    Attribute(
        {
            name: "ColorCapabilities", id: 0x400a, type: "map16", access: "R V", conformance: "M",
            constraint: "0 to 31", default: 0,
            details: "Bits 0-4 of the ColorCapabilities attribute shall have the same values as the corresponding bits of " +
                "the FeatureMap attribute. All other bits in ColorCapabilities shall be 0.",
            xref: { document: "cluster", section: "3.2.7.19" }
        },

        Field({ name: "HueSaturation", constraint: "0" }),
        Field({ name: "EnhancedHue", constraint: "1" }),
        Field({ name: "ColorLoop", constraint: "2" }),
        Field({ name: "XY", constraint: "3" }),
        Field({ name: "ColorTemperature", constraint: "4" })
    ),

    Attribute({
        name: "ColorTempPhysicalMinMireds", id: 0x400b, type: "uint16", access: "R V", conformance: "CT",
        constraint: "0 to 65279", default: 0,
        details: "The ColorTempPhysicalMinMireds attribute indicates the minimum mired value supported by the " +
            "hardware. ColorTempPhysicalMinMireds corresponds to the maximum color temperature in kelvins " +
            "supported by the hardware. ColorTempPhysicalMinMireds <= ColorTemperatureMireds.",
        xref: { document: "cluster", section: "3.2.7.20" }
    }),

    Attribute({
        name: "ColorTempPhysicalMaxMireds", id: 0x400c, type: "uint16", access: "R V", conformance: "CT",
        constraint: "0 to 65279", default: 65279,
        details: "The ColorTempPhysicalMaxMireds attribute indicates the maximum mired value supported by the " +
            "hardware. ColorTempPhysicalMaxMireds corresponds to the minimum color temperature in kelvins " +
            "supported by the hardware. ColorTemperatureMireds <= ColorTempPhysicalMaxMireds.",
        xref: { document: "cluster", section: "3.2.7.21" }
    }),

    Attribute(
        {
            name: "CoupleColorTempToLevelMinMireds", id: 0x400d, type: "uint16", access: "R V",
            conformance: "CT & ColorTemperatureMireds",
            constraint: "colorTempPhysicalMinMireds to colorTemperatureMireds",

            details: "The CoupleColorTempToLevelMinMireds attribute specifies a lower bound on the value of the " +
                "ColorTemperatureMireds attribute for the purposes of coupling the ColorTemperatureMireds attribute " +
                "to the CurrentLevel attribute when the CoupleColorTempToLevel bit of the Options attribute of the " +
                "Level Control cluster is equal to 1. When coupling the ColorTemperatureMireds attribute to the " +
                "CurrentLevel attribute, this value shall correspond to a CurrentLevel value of 0xFE (100%)." +
                "\n" +
                "This attribute shall be set such that the following relationship exists: ColorTempPhysicalMinMireds " +
                "≤ CoupleColorTempToLevelMinMireds ≤ ColorTemperatureMireds" +
                "\n" +
                "Note that since this attribute is stored as a micro reciprocal degree (mired) value (i.e. color " +
                "temperature in kelvins = 1,000,000 / CoupleColorTempToLevelMinMireds), the " +
                "CoupleColorTempToLevelMinMireds attribute corresponds to an upper bound on the value of the color " +
                "temperature in kelvins supported by the device.",

            xref: { document: "cluster", section: "3.2.7.22" }
        }
    ),

    Attribute({
        name: "StartUpColorTemperatureMireds", id: 0x4010, type: "uint16", access: "RW VM",
        conformance: "CT & ColorTemperatureMireds", constraint: "0 to 65279", quality: "X N",

        details: "The StartUpColorTemperatureMireds attribute shall define the desired startup color temperature " +
            "value a lamp shall use when it is supplied with power and this value shall be reflected in the " +
            "ColorTemperatureMireds attribute. In addition, the ColorMode and EnhancedColorMode attributes shall " +
            "be set to 0x02 (color temperature). The values of the StartUpColorTemperatureMireds attribute are " +
            "listed in the table below," +
            "\n" +
            "Table 12. Values of the StartUpColorTemperatureMireds attribute",

        xref: { document: "cluster", section: "3.2.7.23" }
    }),

    Attribute({
        name: "NumberOfPrimaries", id: 0x10, type: "uint8", access: "R V", conformance: "M",
        constraint: "0 to 6", quality: "X F",

        details: "The NumberOfPrimaries attribute contains the number of color primaries implemented on this device. " +
            "A value of null shall indicate that the number of primaries is unknown." +
            "\n" +
            "Where this attribute is implemented, the attributes below for indicating the “x” and “y” color " +
            "values of the primaries shall also be implemented for each of the primaries from 1 to " +
            "NumberOfPrimaries, without leaving gaps. Implementation of the Primary1Intensity attribute and " +
            "subsequent intensity attributes is optional.",

        xref: { document: "cluster", section: "3.2.8.1" }
    }),

    Attribute(
        {
            name: "Primary1X", id: 0x11, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 0",
            constraint: "0 to 65279", quality: "F",
            details: "The Primary1X attribute contains the normalized chromaticity value x for this primary, as defined " +
                "in the CIE xyY Color Space." +
                "\n" +
                "The value of x shall be related to the Primary1X attribute by the relationship x = Primary1X / " +
                "65536 (Primary1X in the range 0 to 65279 inclusive)",
            xref: { document: "cluster", section: "3.2.8.2" }
        }
    ),

    Attribute(
        {
            name: "Primary1Y", id: 0x12, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 0",
            constraint: "0 to 65279", quality: "F",
            details: "The Primary1Y attribute contains the normalized chromaticity value y for this primary, as defined " +
                "in the CIE xyY Color Space." +
                "\n" +
                "The value of y shall be related to the Primary1Y attribute by the relationship y = Primary1Y / " +
                "65536 (Primary1Y in the range 0 to 65279 inclusive)",
            xref: { document: "cluster", section: "3.2.8.3" }
        }
    ),

    Attribute({
        name: "Primary1Intensity", id: 0x13, type: "uint8", access: "R V",
        conformance: "NumberOfPrimaries > 0", quality: "X F",

        details: "The Primary1intensity attribute contains a representation of the maximum intensity of this primary " +
            "as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast " +
            "Configuration Cluster), normalized such that the primary with the highest maximum intensity " +
            "contains the value 0xFE." +
            "\n" +
            "A value of null shall indicate that this primary is not available.",

        xref: { document: "cluster", section: "3.2.8.4" }
    }),

    Attribute({
        name: "Primary2X", id: 0x15, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 1",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.8" }
    }),
    Attribute({
        name: "Primary2Y", id: 0x16, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 1",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.8" }
    }),
    Attribute({
        name: "Primary2Intensity", id: 0x17, type: "uint8", access: "R V",
        conformance: "NumberOfPrimaries > 1", quality: "X F",
        xref: { document: "cluster", section: "3.2.8" }
    }),
    Attribute({
        name: "Primary3X", id: 0x19, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 2",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.8" }
    }),
    Attribute({
        name: "Primary3Y", id: 0x1a, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 2",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.8" }
    }),
    Attribute({
        name: "Primary3Intensity", id: 0x1b, type: "uint8", access: "R V",
        conformance: "NumberOfPrimaries > 2", quality: "X F",
        xref: { document: "cluster", section: "3.2.8" }
    }),
    Attribute({
        name: "Primary4X", id: 0x20, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 3",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary4Y", id: 0x21, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 3",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary4Intensity", id: 0x22, type: "uint8", access: "R V",
        conformance: "NumberOfPrimaries > 3", quality: "X F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary5X", id: 0x24, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 4",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary5Y", id: 0x25, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 4",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary5Intensity", id: 0x26, type: "uint8", access: "R V",
        conformance: "NumberOfPrimaries > 4", quality: "X F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary6X", id: 0x28, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 5",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary6Y", id: 0x29, type: "uint16", access: "R V", conformance: "NumberOfPrimaries > 5",
        constraint: "0 to 65279", quality: "F",
        xref: { document: "cluster", section: "3.2.9" }
    }),
    Attribute({
        name: "Primary6Intensity", id: 0x2a, type: "uint8", access: "R V",
        conformance: "NumberOfPrimaries > 5", quality: "X F",
        xref: { document: "cluster", section: "3.2.9" }
    }),

    Attribute(
        {
            name: "WhitePointX", id: 0x30, type: "uint16", access: "RW VM", conformance: "O",
            constraint: "0 to 65279",
            details: "The WhitePointX attribute contains the normalized chromaticity value x, as defined in the CIE xyY " +
                "Color Space, of the current white point of the device." +
                "\n" +
                "The value of x shall be related to the WhitePointX attribute by the relationship x = WhitePointX / " +
                "65536 (WhitePointX in the range 0 to 65279 inclusive)",
            xref: { document: "cluster", section: "3.2.10.1" }
        }
    ),

    Attribute(
        {
            name: "WhitePointY", id: 0x31, type: "uint16", access: "RW VM", conformance: "O",
            constraint: "0 to 65279",

            details: "The WhitePointY attribute contains the normalized chromaticity value y, as defined in the CIE xyY" +
                "\n" +
                "Color Space, of the current white point of the device." +
                "\n" +
                "The value of y shall be related to the WhitePointY attribute by the relationship y = WhitePointY / " +
                "65536 (WhitePointY in the range 0 to 65279 inclusive)",

            xref: { document: "cluster", section: "3.2.10.2" }
        }
    ),

    Attribute(
        {
            name: "ColorPointRx", id: 0x32, type: "uint16", access: "RW VM", conformance: "O",
            constraint: "0 to 65279",
            details: "The ColorPointRX attribute contains the normalized chromaticity value x, as defined in the CIE xyY " +
                "Color Space, of the red color point of the device." +
                "\n" +
                "The value of x shall be related to the ColorPointRX attribute by the relationship x = ColorPointRX " +
                "/ 65536 (ColorPointRX in the range 0 to 65279 inclusive)",
            xref: { document: "cluster", section: "3.2.10.3" }
        }
    ),

    Attribute(
        {
            name: "ColorPointRy", id: 0x33, type: "uint16", access: "RW VM", conformance: "O",
            constraint: "0 to 65279",
            details: "The ColorPointRY attribute contains the normalized chromaticity value y, as defined in the CIE xyY " +
                "Color Space, of the red color point of the device." +
                "\n" +
                "The value of y shall be related to the ColorPointRY attribute by the relationship y = ColorPointRY " +
                "/ 65536 (ColorPointRY in the range 0 to 65279 inclusive)",
            xref: { document: "cluster", section: "3.2.10.4" }
        }
    ),

    Attribute({
        name: "ColorPointRIntensity", id: 0x34, type: "uint8", access: "RW VM", conformance: "O",
        quality: "X",

        details: "The ColorPointRIntensity attribute contains a representation of the relative intensity of the red " +
            "color point as defined in the Dimming Light Curve in the Ballast Configuration cluster (see Ballast " +
            "Configuration Cluster), normalized such that the color point with the highest relative intensity " +
            "contains the value 0xFE." +
            "\n" +
            "A value of null shall indicate an invalid value.",

        xref: { document: "cluster", section: "3.2.10.5" }
    }),

    Attribute({
        name: "ColorPointGx", id: 0x36, type: "uint16", access: "RW VM", conformance: "O",
        constraint: "0 to 65279",
        xref: { document: "cluster", section: "3.2.10" }
    }),
    Attribute({
        name: "ColorPointGy", id: 0x37, type: "uint16", access: "RW VM", conformance: "O",
        constraint: "0 to 65279",
        xref: { document: "cluster", section: "3.2.10" }
    }),
    Attribute({
        name: "ColorPointGIntensity", id: 0x38, type: "uint8", access: "RW VM", conformance: "O",
        quality: "X",
        xref: { document: "cluster", section: "3.2.10" }
    }),
    Attribute({
        name: "ColorPointBx", id: 0x3a, type: "uint16", access: "RW VM", conformance: "O",
        constraint: "0 to 65279",
        xref: { document: "cluster", section: "3.2.10" }
    }),
    Attribute({
        name: "ColorPointBy", id: 0x3b, type: "uint16", access: "RW VM", conformance: "O",
        constraint: "0 to 65279",
        xref: { document: "cluster", section: "3.2.10" }
    }),
    Attribute({
        name: "ColorPointBIntensity", id: 0x3c, type: "uint8", access: "RW VM", conformance: "O",
        quality: "X",
        xref: { document: "cluster", section: "3.2.10" }
    }),

    Command(
        {
            name: "MoveToHue", id: 0x0, access: "O", conformance: "HS", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.4" }
        },
        Field({
            name: "Hue", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
            details: "The Hue field specifies the hue to be moved to.",
            xref: { document: "cluster", section: "3.2.11.4.1" }
        }),

        Field({
            name: "Direction", id: 0x1, type: "Direction", conformance: "M", constraint: "desc",
            details: "The Direction field shall be one of the non-reserved values in Values of the Direction Field." +
                "\n" +
                "### Table 17. Values of the Direction Field",
            xref: { document: "cluster", section: "3.2.11.4.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
            details: "The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to move to " +
                "the new hue.",
            xref: { document: "cluster", section: "3.2.11.4.3" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveHue", id: 0x1, access: "O", conformance: "HS", direction: "request", response: "status",
            xref: { document: "cluster", section: "3.2.11.5" }
        },

        Field({
            name: "MoveMode", id: 0x0, type: "MoveMode", conformance: "M", constraint: "desc",
            details: "The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the " +
                "MoveMode field is equal to 0 (Stop), the Rate field shall be ignored." +
                "\n" +
                "### Table 18. Values of the MoveMode Field",
            xref: { document: "cluster", section: "3.2.11.5.1" }
        }),

        Field({
            name: "Rate", id: 0x1, type: "uint8", conformance: "M",
            details: "The Rate field specifies the rate of movement in steps per second. A step is a change in the " +
                "device’s hue of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate field has " +
                "a value of zero, the command has no effect and a response command shall be sent in response, with " +
                "the status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the Rate field " +
                "shall be ignored.",
            xref: { document: "cluster", section: "3.2.11.5.2" }
        }),

        Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "StepHue", id: 0x2, access: "O", conformance: "HS", direction: "request", response: "status",
            xref: { document: "cluster", section: "3.2.11.6" }
        },

        Field({
            name: "StepMode", id: 0x0, type: "StepMode", conformance: "M", constraint: "desc",
            details: "The StepMode field shall be one of the non-reserved values in Values of the StepMode Field." +
                "\n" +
                "### Table 20. Values of the StepMode Field",
            xref: { document: "cluster", section: "3.2.11.6.1" }
        }),

        Field({
            name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
            details: "The change to be added to (or subtracted from) the current value of the device’s hue.",
            xref: { document: "cluster", section: "3.2.11.6.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M",

            details: "The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform " +
                "the step. A step is a change in the device’s hue of ‘Step size’ units." +
                "\n" +
                "NOTE" +
                "\n" +
                "Here the TransitionTime data field is of data type uint8, where uint16 is more common for " +
                "TransitionTime data fields in other clusters / commands.",

            xref: { document: "cluster", section: "3.2.11.6.3" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveToSaturation", id: 0x3, access: "O", conformance: "HS", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.7" }
        },
        Field({ name: "Saturation", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254" }),
        Field({ name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", constraint: "0 to 65534" }),
        Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveSaturation", id: 0x4, access: "O", conformance: "HS", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.8" }
        },

        Field({
            name: "MoveMode", id: 0x0, type: "MoveMode", conformance: "M", constraint: "desc",
            details: "The MoveMode field shall be one of the non-reserved values in Values of the MoveMode Field. If the " +
                "MoveMode field is equal to 0 (Stop), the Rate field shall be ignored." +
                "\n" +
                "### Table 22. Values of the MoveMode Field",
            xref: { document: "cluster", section: "3.2.11.8.1" }
        }),

        Field({
            name: "Rate", id: 0x1, type: "uint8", conformance: "M",
            details: "The Rate field specifies the rate of movement in steps per second. A step is a change in the " +
                "device’s saturation of one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the Rate " +
                "field has a value of zero, the command has no effect and a response command shall be sent in " +
                "response, with the status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the " +
                "Rate field shall be ignored.",
            xref: { document: "cluster", section: "3.2.11.8.2" }
        }),

        Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "StepSaturation", id: 0x5, access: "O", conformance: "HS", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.9" }
        },

        Field({
            name: "StepMode", id: 0x0, type: "StepMode", conformance: "M", constraint: "desc",
            details: "The StepMode field shall be one of the non-reserved values in Values of the StepMode Field." +
                "\n" +
                "### Table 24. Values of the StepMode Field",
            xref: { document: "cluster", section: "3.2.11.9.1" }
        }),

        Field({
            name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
            details: "The change to be added to (or subtracted from) the current value of the device’s saturation.",
            xref: { document: "cluster", section: "3.2.11.9.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M",

            details: "The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform " +
                "the step. A step is a change in the device’s saturation of ‘Step size’ units." +
                "\n" +
                "NOTE" +
                "\n" +
                "Here the TransitionTime data field is of data type uint8, where uint16 is more common for " +
                "TransitionTime data fields in other clusters / commands.",

            xref: { document: "cluster", section: "3.2.11.9.3" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveToHueAndSaturation", id: 0x6, access: "O", conformance: "HS", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.10" }
        },
        Field({ name: "Hue", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254" }),
        Field({ name: "Saturation", id: 0x1, type: "uint8", conformance: "M", constraint: "0 to 254" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534" }),
        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveToColor", id: 0x7, access: "O", conformance: "XY", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.11" }
        },
        Field({ name: "ColorX", id: 0x0, type: "uint16", conformance: "M", constraint: "0 to 65279" }),
        Field({ name: "ColorY", id: 0x1, type: "uint16", conformance: "M", constraint: "0 to 65279" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534" }),
        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveColor", id: 0x8, access: "O", conformance: "XY", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.12" }
        },

        Field({
            name: "RateX", id: 0x0, type: "int16", conformance: "M",
            details: "The RateX field specifies the rate of movement in steps per second. A step is a change in the " +
                "device’s CurrentX attribute of one unit.",
            xref: { document: "cluster", section: "3.2.11.12.1" }
        }),

        Field({
            name: "RateY", id: 0x1, type: "int16", conformance: "M",
            details: "The RateY field specifies the rate of movement in steps per second. A step is a change in the " +
                "device’s CurrentY attribute of one unit.",
            xref: { document: "cluster", section: "3.2.11.12.2" }
        }),

        Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "StepColor", id: 0x9, access: "O", conformance: "XY", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.13" }
        },
        Field({ name: "StepX", id: 0x0, type: "int16", conformance: "M" }),
        Field({ name: "StepY", id: 0x1, type: "int16", conformance: "M" }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
            details: "The TransitionTime field specifies, in 1/10ths of a second, the time that shall be taken to perform " +
                "the color change.",
            xref: { document: "cluster", section: "3.2.11.13.2" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveToColorTemperature", id: 0xa, access: "O", conformance: "CT", direction: "request",
            response: "status",
            xref: { document: "cluster", section: "3.2.11.14" }
        },
        Field({ name: "ColorTemperatureMireds", id: 0x0, type: "uint16", conformance: "M", constraint: "0 to 65279" }),
        Field({ name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M", constraint: "0 to 65534" }),
        Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "EnhancedMoveToHue", id: 0x40, access: "O", conformance: "EHUE", direction: "request",
            response: "status",
            details: "The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their " +
                "current hue to a target hue.",
            xref: { document: "cluster", section: "3.2.11.15" }
        },

        Field({
            name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
            details: "The EnhancedHue field specifies the target extended hue for the lamp.",
            xref: { document: "cluster", section: "3.2.11.15.1" }
        }),

        Field({
            name: "Direction", id: 0x1, type: "Direction", conformance: "M", constraint: "desc",
            details: "This field is identical to the Direction field of the MoveToHue command of the Color Control " +
                "cluster (see sub-clause Use of the OptionsMask and OptionsOverride fields).",
            xref: { document: "cluster", section: "3.2.11.15.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
            details: "This field is identical to the TransitionTime field of the MoveToHue command of the Color Control " +
                "cluster (see sub-clause Use of the OptionsMask and OptionsOverride fields).",
            xref: { document: "cluster", section: "3.2.11.15.3" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "EnhancedMoveHue", id: 0x41, access: "O", conformance: "EHUE", direction: "request",
            response: "status",
            details: "The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their " +
                "current hue to a target hue.",
            xref: { document: "cluster", section: "3.2.11.16" }
        },

        Field({
            name: "MoveMode", id: 0x0, type: "MoveMode", conformance: "M", constraint: "desc",
            details: "This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster " +
                "(see sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall " +
                "be ignored.",
            xref: { document: "cluster", section: "3.2.11.16.1" }
        }),

        Field({
            name: "Rate", id: 0x1, type: "uint16", conformance: "M",
            details: "The Rate field specifies the rate of movement in steps per second. A step is a change in the " +
                "extended hue of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the " +
                "Rate field has a value of zero, the command has no effect and a response command shall be sent in " +
                "response, with the status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the " +
                "Rate field shall be ignored.",
            xref: { document: "cluster", section: "3.2.11.16.2" }
        }),

        Field({ name: "OptionsMask", id: 0x2, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "EnhancedStepHue", id: 0x42, access: "O", conformance: "EHUE", direction: "request",
            response: "status",
            details: "The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue " +
                "to a target hue, resulting in a linear transition through XY space.",
            xref: { document: "cluster", section: "3.2.11.17" }
        },

        Field({
            name: "StepMode", id: 0x0, type: "StepMode", conformance: "M", constraint: "desc",
            details: "This field is identical to the StepMode field of the StepHue command of the Color Control cluster " +
                "(see sub-clause StepHue Command).",
            xref: { document: "cluster", section: "3.2.11.17.1" }
        }),

        Field({
            name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
            details: "The StepSize field specifies the change to be added to (or subtracted from) the current value of " +
                "the device’s enhanced hue.",
            xref: { document: "cluster", section: "3.2.11.17.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",

            details: "The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken " +
                "to perform the step. A step is a change to the device’s enhanced hue of a magnitude corresponding " +
                "to the StepSize field." +
                "\n" +
                "NOTE" +
                "\n" +
                "Here TransitionTime data field is of data type uint16, while the TransitionTime data field of the " +
                "StepHue command is of data type uint8.",

            xref: { document: "cluster", section: "3.2.11.17.3" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "EnhancedMoveToHueAndSaturation", id: 0x43, access: "O", conformance: "EHUE",
            direction: "request", response: "status",
            details: "The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous " +
                "transition from their current hue to a target hue and from their current saturation to a target " +
                "saturation.",
            xref: { document: "cluster", section: "3.2.11.18" }
        },

        Field({
            name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
            details: "The EnhancedHue field specifies the target extended hue for the lamp.",
            xref: { document: "cluster", section: "3.2.11.18.1" }
        }),

        Field({
            name: "Saturation", id: 0x1, type: "uint8", conformance: "M", constraint: "0 to 254",
            details: "This field is identical to the Saturation field of the MoveToHueAndSaturation command of the Color " +
                "Control cluster (see sub-clause MoveToHueAndSaturation Command).",
            xref: { document: "cluster", section: "3.2.11.18.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
            details: "This field is identical to the TransitionTime field of the MoveToHue command of the Color Control " +
                "cluster (see sub-clause MoveToHueAndSaturation Command).",
            xref: { document: "cluster", section: "3.2.11.18.3" }
        }),

        Field({ name: "OptionsMask", id: 0x3, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "ColorLoopSet", id: 0x44, access: "O", conformance: "CL", direction: "request",
            response: "status",
            details: "The Color Loop Set command allows a color loop to be activated such that the color lamp cycles " +
                "through its range of hues.",
            xref: { document: "cluster", section: "3.2.11.19" }
        },

        Field(
            {
                name: "UpdateFlags", id: 0x0, type: "map8", conformance: "M", constraint: "desc",

                details: "The UpdateFlags field specifies which color loop attributes to update before the color loop is " +
                    "started. This field shall be formatted as illustrated in Format of the UpdateFlags Field of the " +
                    "ColorLoopSet Command." +
                    "\n" +
                    "### Table 28. Format of the UpdateFlags Field of the ColorLoopSet Command" +
                    "\n" +
                    "The UpdateAction sub-field is 1 bit in length and specifies whether the device shall adhere to the " +
                    "action field in order to process the command. If this sub-field is set to 1, the device shall " +
                    "adhere to the action field. If this sub-field is set to 0, the device shall ignore the Action field." +
                    "\n" +
                    "The UpdateDirection sub-field is 1 bit in length and specifies whether the device shall update the " +
                    "ColorLoopDirection attribute with the Direction field. If this sub-field is set to 1, the device " +
                    "shall update the value of the ColorLoopDirection attribute with the value of the Direction field. " +
                    "If this sub-field is set to 0, the device shall ignore the Direction field." +
                    "\n" +
                    "The UpdateTime sub-field is 1 bit in length and specifies whether the device shall update the " +
                    "ColorLoopTime attribute with the Time field. If this sub-field is set to 1, the device shall update " +
                    "the value of the ColorLoopTime attribute with the value of the Time field. If this sub-field is set " +
                    "to 0, the device shall ignore the Time field." +
                    "\n" +
                    "The UpdateStartHue sub-field is 1 bit in length and specifies whether the device shall update the " +
                    "ColorLoopStartEnhancedHue attribute with the StartHue field. If this sub-field is set to 1, the " +
                    "device shall update the value of the ColorLoopStartEnhancedHue attribute with the value of the " +
                    "StartHue field. If this sub-field is set to 0, the device shall ignore the StartHue field.",

                xref: { document: "cluster", section: "3.2.11.19.1" }
            },

            Field({ name: "UpdateAction", constraint: "0" }),
            Field({ name: "UpdateDirection", constraint: "1" }),
            Field({ name: "UpdateTime", constraint: "2" }),
            Field({ name: "UpdateStartHue", constraint: "3" }),
            Field({ name: "Reserved", constraint: "4 to 8" })
        ),

        Field(
            {
                name: "Action", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                details: "The Action field specifies the action to take for the color loop if the UpdateAction sub-field of " +
                    "the UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed " +
                    "in Values of the Action Field of the ColorLoopSet Command." +
                    "\n" +
                    "### Table 29. Values of the Action Field of the ColorLoopSet Command",
                xref: { document: "cluster", section: "3.2.11.19.2" }
            },

            Field({ name: "DeActivateTheColorLoop", id: 0x0 }),
            Field({ name: "ActivateTheColorLoopFromTheValueInTheColorLoopStartEnhancedHueField", id: 0x1 }),
            Field({ name: "ActivateTheColorLoopFromTheValueOfTheEnhancedCurrentHueAttribute", id: 0x2 })
        ),

        Field(
            {
                name: "Direction", id: 0x2, type: "enum8", conformance: "M", constraint: "desc",
                details: "The Direction field specifies the direction for the color loop if the Update Direction field of the " +
                    "UpdateFlags field is set to 1. This field shall be set to one of the non-reserved values listed in " +
                    "Values of the Direction Field of the ColorLoopSet Command." +
                    "\n" +
                    "### Table 30. Values of the Direction Field of the ColorLoopSet Command",
                xref: { document: "cluster", section: "3.2.11.19.3" }
            },

            Field({ name: "DecrementTheHueInTheColorLoop", id: 0x0 }),
            Field({ name: "IncrementTheHueInTheColorLoop", id: 0x1 })
        ),

        Field({
            name: "Time", id: 0x3, type: "uint16", conformance: "M",
            details: "The Time field specifies the number of seconds over which to perform a full color loop if the " +
                "UpdateTime sub-field of the UpdateFlags field is set to 1.",
            xref: { document: "cluster", section: "3.2.11.19.4" }
        }),

        Field({ name: "StartHue", id: 0x4, type: "uint16", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x5, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x6, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "StopMoveStep", id: 0x47, access: "O", conformance: "HS | XY | CT", direction: "request",
            response: "status",
            details: "The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this " +
                "automatically provides symmetry to the Level Control cluster.)" +
                "\n" +
                "NOTE the StopMoveStep command has no effect on an active color loop.",
            xref: { document: "cluster", section: "3.2.11.20" }
        },

        Field({ name: "OptionsMask", id: 0x0, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x1, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "MoveColorTemperature", id: 0x4b, access: "O", conformance: "CT", direction: "request",
            response: "status",
            details: "The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified " +
                "rate.",
            xref: { document: "cluster", section: "3.2.11.21" }
        },

        Field({
            name: "MoveMode", id: 0x0, type: "MoveMode", conformance: "M", constraint: "desc",
            details: "This field is identical to the MoveMode field of the MoveHue command of the Color Control cluster " +
                "(see sub-clause MoveHue Command). If the MoveMode field is equal to 0 (Stop), the Rate field shall " +
                "be ignored.",
            xref: { document: "cluster", section: "3.2.11.21.1" }
        }),

        Field({
            name: "Rate", id: 0x1, type: "uint16", conformance: "M",
            details: "The Rate field specifies the rate of movement in steps per second. A step is a change in the color " +
                "temperature of a device by one unit. If the MoveMode field is set to 1 (up) or 3 (down) and the " +
                "Rate field has a value of zero, the command has no effect and a response command shall be sent in " +
                "response, with the status code set to INVALID_COMMAND. If the MoveMode field is set to 0 (stop) the " +
                "Rate field shall be ignored.",
            xref: { document: "cluster", section: "3.2.11.21.2" }
        }),

        Field({
            name: "ColorTemperatureMinimumMireds", id: 0x2, type: "uint16", conformance: "M",
            constraint: "0 to 65279",

            details: "The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds " +
                "attribute (≡ an upper bound on the color temperature in kelvins) for the current move operation" +
                "\n" +
                "ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds" +
                "\n" +
                "As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the " +
                "ColorTemperatureMinimumMireds field it shall be clipped so that the above invariant is satisfied. " +
                "If the ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall be used as " +
                "the lower bound for the ColorTemperatureMireds attribute.",

            xref: { document: "cluster", section: "3.2.11.21.3" }
        }),

        Field({
            name: "ColorTemperatureMaximumMireds", id: 0x3, type: "uint16", conformance: "M",
            constraint: "0 to 65279",

            details: "The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds " +
                "attribute (≡ a lower bound on the color temperature in kelvins) for the current move operation" +
                "\n" +
                "ColorTemperatureMireds <= ColorTemperatureMaximumMireds field <= ColorTempPhysicalMaxMireds" +
                "\n" +
                "As such if the move operation takes the ColorTemperatureMireds attribute towards the value of the " +
                "ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. " +
                "If the ColorTemperatureMaximumMireds field is set to 0, ColorTempPhysicalMaxMireds shall be used as " +
                "the upper bound for the ColorTemperatureMireds attribute.",

            xref: { document: "cluster", section: "3.2.11.21.4" }
        }),

        Field({ name: "OptionsMask", id: 0x4, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x5, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            name: "StepColorTemperature", id: 0x4c, access: "O", conformance: "CT", direction: "request",
            response: "status",
            details: "The StepColorTemperature command allows the color temperature of a lamp to be stepped with a " +
                "specified step size.",
            xref: { document: "cluster", section: "3.2.11.22" }
        },

        Field({
            name: "StepMode", id: 0x0, type: "StepMode", conformance: "M", constraint: "desc",
            details: "This field is identical to the StepMode field of the StepHue command of the Color Control cluster " +
                "(see sub-clause StepHue Command).",
            xref: { document: "cluster", section: "3.2.11.22.1" }
        }),

        Field({
            name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
            details: "The StepSize field specifies the change to be added to (or subtracted from) the current value of " +
                "the device’s color temperature.",
            xref: { document: "cluster", section: "3.2.11.22.2" }
        }),

        Field({
            name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M", constraint: "0 to 65534",
            details: "The TransitionTime field specifies, in units of 1/10ths of a second, the time that shall be taken " +
                "to perform the step. A step is a change to the device’s color temperature of a magnitude " +
                "corresponding to the StepSize field.",
            xref: { document: "cluster", section: "3.2.11.22.3" }
        }),

        Field({
            name: "ColorTemperatureMinimumMireds", id: 0x3, type: "uint16", conformance: "M",
            constraint: "0 to 65279",

            details: "The ColorTemperatureMinimumMireds field specifies a lower bound on the ColorTemperatureMireds " +
                "attribute (≡ an upper bound on the color temperature in kelvins) for the current step operation" +
                "\n" +
                "ColorTempPhysicalMinMireds <= ColorTemperatureMinimumMireds field <= ColorTemperatureMireds" +
                "\n" +
                "As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the " +
                "Color Temperature Minimum Mireds field it shall be clipped so that the above invariant is " +
                "satisfied. If the ColorTemperatureMinimumMireds field is set to 0, ColorTempPhysicalMinMireds shall " +
                "be used as the lower bound for the ColorTemperatureMireds attribute.",

            xref: { document: "cluster", section: "3.2.11.22.4" }
        }),

        Field({
            name: "ColorTemperatureMaximumMireds", id: 0x4, type: "uint16", conformance: "M",
            constraint: "0 to 65279",

            details: "The ColorTemperatureMaximumMireds field specifies an upper bound on the ColorTemperatureMireds " +
                "attribute (≡ a lower bound on the color temperature in kelvins) for the current step operation" +
                "\n" +
                "ColorTemperatureMireds ≤ ColorTemperatureMaximumMireds field ≤ ColorTempPhysicalMaxMireds" +
                "\n" +
                "As such if the step operation takes the ColorTemperatureMireds attribute towards the value of the " +
                "ColorTemperatureMaximumMireds field it shall be clipped so that the above invariant is satisfied. " +
                "If the ColorTemperatureMaximum Mireds field is set to 0, ColorTempPhysicalMaxMireds shall be used " +
                "as the upper bound for the ColorTemperatureMireds attribute.",

            xref: { document: "cluster", section: "3.2.11.22.5" }
        }),

        Field({ name: "OptionsMask", id: 0x5, type: "Options", conformance: "M", constraint: "desc", default: 0 }),
        Field({ name: "OptionsOverride", id: 0x6, type: "Options", conformance: "M", constraint: "desc", default: 0 })
    ),

    Datatype(
        { name: "MoveMode", type: "enum8", xref: { document: "cluster", section: "3.2.11.5.1" } },
        Field({ name: "Stop", id: 0x0 }),
        Field({ name: "Up", id: 0x1 }),
        Field({ name: "Down", id: 0x3 })
    ),

    Datatype(
        { name: "StepMode", type: "enum8", xref: { document: "cluster", section: "3.2.11.6.1" } },
        Field({ name: "Up", id: 0x1 }),
        Field({ name: "Down", id: 0x3 })
    ),

    Datatype(
        { name: "Direction", type: "enum8", xref: { document: "cluster", section: "3.2.11.4.2" } },
        Field({ name: "ShortestDistance", id: 0x0 }),
        Field({ name: "LongestDistance", id: 0x1 }),
        Field({ name: "Up", id: 0x2 }),
        Field({ name: "Down", id: 0x3 })
    )
);

MatterDefinition.children.push(ColorControl);
