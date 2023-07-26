/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "PowerSource", id: 0x2f, classification: "node", description: "Power Source",
    details: "This cluster is used to describe the configuration and capabilities of a physical power source that " +
        "provides power to the Node. In case the Node has multiple power sources, each is described by its " +
        "own Power Source cluster. The Power Source Configuration cluster referenced by the Root Node device " +
        "type for the Node provides the overview of the power source(s) of the Node.",
    xref: { document: "core", section: "11.7" },

    children: [
        { tag: "attribute", name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 },

        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.7.4" },

            children: [
                {
                    tag: "datatype", name: "WIRED", constraint: "0", description: "Wired",
                    details: "A wired power source"
                },
                {
                    tag: "datatype", name: "BAT", constraint: "1", description: "Battery",
                    details: "A battery power source"
                },
                {
                    tag: "datatype", name: "RECHG", constraint: "2", description: "Rechargeable",
                    details: "A rechargeable battery power source (requires Battery feature)"
                },
                {
                    tag: "datatype", name: "REPLC", constraint: "3", description: "Replaceable",
                    details: "A replaceable battery power source (requires Battery feature)"
                }
            ]
        },

        {
            tag: "attribute", name: "Status", id: 0x0, type: "PowerSourceStatusEnum", access: "R V",
            conformance: "M", constraint: "desc",
            details: "This attribute shall indicate the participation of this power source in providing power to the Node " +
                "as specified in PowerSourceStatusEnum.",
            xref: { document: "core", section: "11.7.6.1" }
        },

        {
            tag: "attribute", name: "Order", id: 0x1, type: "uint8", access: "R V", conformance: "M",
            quality: "N",

            details: "This attribute shall indicate the relative preference with which the Node will select this source " +
                "to provide power. A source with a lower order shall be selected by the Node to provide power before " +
                "any other source with a higher order, if the lower order source is available (see Status)." +
                "\n" +
                "Note, Order is read-only and therefore NOT intended to allow clients control over power source " +
                "selection.",

            xref: { document: "core", section: "11.7.6.2" }
        },

        {
            tag: "attribute", name: "Description", id: 0x2, type: "string", access: "R V", conformance: "M",
            constraint: "max 60", quality: "F",
            details: "This attribute shall provide a user-facing description of this source, used to distinguish it from " +
                "other power sources, e.g. \"DC Power\", \"Primary Battery\" or \"Battery back-up\". This attribute shall " +
                "NOT be used to convey information such as battery form factor, or chemistry.",
            xref: { document: "core", section: "11.7.6.3" }
        },

        {
            tag: "attribute", name: "WiredAssessedInputVoltage", id: 0x3, type: "uint32", access: "R V",
            conformance: "[WIRED]", quality: "X C",
            details: "This attribute shall indicate the assessed RMS or DC voltage currently provided by the hard-wired " +
                "source, in mV (millivolts). A value of NULL shall indicate the Node is currently unable to assess " +
                "the value. If the wired source is not connected, but the Node is still able to assess a value, then " +
                "the assessed value may be reported.",
            xref: { document: "core", section: "11.7.6.4" }
        },

        {
            tag: "attribute", name: "WiredAssessedInputFrequency", id: 0x4, type: "uint16", access: "R V",
            conformance: "[WIRED]", quality: "X C",
            details: "This attribute shall indicate the assessed frequency of the voltage, currently provided by the " +
                "hard-wired source, in Hz. A value of NULL shall indicate the Node is currently unable to assess the " +
                "value. If the wired source is not connected, but the Node is still able to assess a value, then the " +
                "assessed value may be reported.",
            xref: { document: "core", section: "11.7.6.5" }
        },

        {
            tag: "attribute", name: "WiredCurrentType", id: 0x5, type: "WiredCurrentTypeEnum", access: "R V",
            conformance: "WIRED", constraint: "desc", quality: "F",
            details: "This attribute shall indicate the type of current the Node expects to be provided by the hard- " +
                "wired source as specified in WiredCurrentTypeEnum.",
            xref: { document: "core", section: "11.7.6.6" }
        },

        {
            tag: "attribute", name: "WiredAssessedCurrent", id: 0x6, type: "uint32", access: "R V",
            conformance: "[WIRED]", quality: "X C",
            details: "This attribute shall indicate the assessed instantaneous current draw of the Node on the hard- " +
                "wired source, in mA (milliamps). A value of NULL shall indicate the Node is currently unable to " +
                "assess the value. If the wired source is not connected, but the Node is still able to assess a " +
                "value, then the assessed value may be reported.",
            xref: { document: "core", section: "11.7.6.7" }
        },

        {
            tag: "attribute", name: "WiredNominalVoltage", id: 0x7, type: "uint32", access: "R V",
            conformance: "[WIRED]", quality: "F",
            details: "This attribute shall indicate the nominal voltage, printed as part of the Node’s regulatory " +
                "compliance label in mV (millivolts), expected to be provided by the hard-wired source.",
            xref: { document: "core", section: "11.7.6.8" }
        },

        {
            tag: "attribute", name: "WiredMaximumCurrent", id: 0x8, type: "uint32", access: "R V",
            conformance: "[WIRED]", quality: "F",
            details: "This attribute shall indicate the maximum current, printed as part of the Node’s regulatory " +
                "compliance label in mA (milliamps), expected to be provided by the hard-wired source.",
            xref: { document: "core", section: "11.7.6.9" }
        },

        {
            tag: "attribute", name: "WiredPresent", id: 0x9, type: "bool", access: "R V",
            conformance: "[WIRED]",
            details: "This attribute shall indicate if the Node detects that the hard-wired power source is properly " +
                "connected.",
            xref: { document: "core", section: "11.7.6.10" }
        },

        {
            tag: "attribute", name: "ActiveWiredFaults", id: 0xa, type: "list", access: "R V",
            conformance: "[WIRED]", constraint: "8",

            details: "This attribute shall indicate the set of wired faults currently detected by the Node on this power " +
                "source. This set is represented as a list of WiredFaultEnum. When the Node detects a fault has been " +
                "raised, the appropriate WiredFaultEnum value shall be added to this list, provided it is not " +
                "already present. This list shall NOT contain more than one instance of a specific WiredFaultEnum " +
                "value. When the Node detects all conditions contributing to a fault have been cleared, the " +
                "corresponding WiredFaultEnum value shall be removed from this list. An empty list shall indicate " +
                "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                "subscribe to WiredFaultChange.",

            xref: { document: "core", section: "11.7.6.11" },
            children: [{ tag: "datatype", name: "entry", type: "WiredFaultEnum" }]
        },

        {
            tag: "attribute", name: "BatVoltage", id: 0xb, type: "uint32", access: "R V", conformance: "[BAT]",
            quality: "X C",
            details: "This attribute shall indicate the currently measured output voltage of the battery in mV " +
                "(millivolts). A value of NULL shall indicate the Node is currently unable to assess the value.",
            xref: { document: "core", section: "11.7.6.12" }
        },

        {
            tag: "attribute", name: "BatPercentRemaining", id: 0xc, type: "uint8", access: "R V",
            conformance: "[BAT]", constraint: "0 to 200", quality: "X C",
            details: "This attribute shall indicate the estimated percentage of battery charge remaining until the " +
                "battery will no longer be able to provide power to the Node. Values are expressed in half percent " +
                "units, ranging from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of NULL shall " +
                "indicate the Node is currently unable to assess the value.",
            xref: { document: "core", section: "11.7.6.13" }
        },

        {
            tag: "attribute", name: "BatTimeRemaining", id: 0xd, type: "uint32", access: "R V",
            conformance: "[BAT]", quality: "X C",
            details: "This attribute shall indicate the estimated time in seconds before the battery will no longer be " +
                "able to provide power to the Node. A value of NULL shall indicate the Node is currently unable to " +
                "assess the value.",
            xref: { document: "core", section: "11.7.6.14" }
        },

        {
            tag: "attribute", name: "BatChargeLevel", id: 0xe, type: "BatChargeLevelEnum", access: "R V",
            conformance: "BAT", constraint: "desc",
            details: "This attribute shall indicate a coarse ranking of the charge level of the battery, used to indicate " +
                "when intervention is required as specified in BatChargeLevelEnum.",
            xref: { document: "core", section: "11.7.6.15" }
        },

        {
            tag: "attribute", name: "BatReplacementNeeded", id: 0xf, type: "bool", access: "R V",
            conformance: "BAT",
            details: "This attribute shall indicate if the battery needs to be replaced. Replacement may be simple " +
                "routine maintenance, such as with a single use, non-rechargeable cell. Replacement, however, may " +
                "also indicate end of life, or serious fault with a rechargeable or even non-replaceable cell.",
            xref: { document: "core", section: "11.7.6.16" }
        },

        {
            tag: "attribute", name: "BatReplaceability", id: 0x10, type: "BatReplaceabilityEnum", access: "R V",
            conformance: "BAT", quality: "F",
            details: "This attribute shall indicate the replaceability of the battery as specified in " +
                "BatReplaceabilityEnum.",
            xref: { document: "core", section: "11.7.6.17" }
        },

        {
            tag: "attribute", name: "BatPresent", id: 0x11, type: "bool", access: "R V", conformance: "[BAT]",
            details: "This attribute shall indicate whether the Node detects that the batteries are properly installed.",
            xref: { document: "core", section: "11.7.6.18" }
        },

        {
            tag: "attribute", name: "ActiveBatFaults", id: 0x12, type: "list", access: "R V",
            conformance: "[BAT]", constraint: "8",

            details: "This attribute shall indicate the set of battery faults currently detected by the Node on this " +
                "power source. This set is represented as a list of BatFaultEnum. When the Node detects a fault has " +
                "been raised, the appropriate BatFaultEnum value shall be added to this list, provided it is not " +
                "already present. This list shall NOT contain more than one instance of a specific BatFaultEnum " +
                "value. When the Node detects all conditions contributing to a fault have been cleared, the " +
                "corresponding BatFaultEnum value shall be removed from this list. An empty list shall indicate " +
                "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                "interested in monitoring changes in active faults may subscribe to this attribute, or they may " +
                "subscribe to Section 11.7.7.2, “BatFaultChange Event”.",

            xref: { document: "core", section: "11.7.6.19" },
            children: [{ tag: "datatype", name: "entry", type: "BatFaultEnum" }]
        },

        {
            tag: "attribute", name: "BatReplacementDescription", id: 0x13, type: "string", access: "R V",
            conformance: "REPLC", constraint: "max 60", quality: "F",
            details: "This attribute shall provide a user-facing description of this battery, which SHOULD contain " +
                "information required to identify a replacement, such as form factor, chemistry or preferred " +
                "manufacturer.",
            xref: { document: "core", section: "11.7.6.20" }
        },

        {
            tag: "attribute", name: "BatCommonDesignation", id: 0x14, type: "BatCommonDesignationEnum",
            access: "R V", conformance: "[REPLC]", constraint: "desc", quality: "F",
            details: "This attribute shall indicate the ID of the common or colloquial designation of the battery, as " +
                "specified in BatCommonDesignationEnum.",
            xref: { document: "core", section: "11.7.6.21" }
        },

        {
            tag: "attribute", name: "BatAnsiDesignation", id: 0x15, type: "string", access: "R V",
            conformance: "[REPLC]", constraint: "max 20", quality: "F",
            details: "This attribute shall indicate the string representing the ANSI designation for the battery as " +
                "specified in ANSI C18.",
            xref: { document: "core", section: "11.7.6.22" }
        },

        {
            tag: "attribute", name: "BatIecDesignation", id: 0x16, type: "string", access: "R V",
            conformance: "[REPLC]", constraint: "max 20", quality: "F",
            details: "This attribute shall indicate the string representing the IEC designation for the battery as " +
                "specified in IEC 60086.",
            xref: { document: "core", section: "11.7.6.23" }
        },

        {
            tag: "attribute", name: "BatApprovedChemistry", id: 0x17, type: "BatApprovedChemistryEnum",
            access: "R V", conformance: "[REPLC]", constraint: "desc", quality: "F",
            details: "This attribute shall indicate the ID of the preferred chemistry of the battery source as specified " +
                "in BatApprovedChemistryEnum.",
            xref: { document: "core", section: "11.7.6.24" }
        },

        {
            tag: "attribute", name: "BatCapacity", id: 0x18, type: "uint32", access: "R V",
            conformance: "[REPLC]", quality: "F",
            details: "This attribute shall indicate the preferred minimum charge capacity rating in mAh of individual, " +
                "user- or factory-serviceable battery cells or packs in the battery source.",
            xref: { document: "core", section: "11.7.6.25" }
        },

        {
            tag: "attribute", name: "BatQuantity", id: 0x19, type: "uint8", access: "R V", conformance: "REPLC",
            quality: "F",
            details: "This attribute shall indicate the quantity of individual, user- or factory-serviceable battery " +
                "cells or packs in the battery source.",
            xref: { document: "core", section: "11.7.6.26" }
        },

        {
            tag: "attribute", name: "BatChargeState", id: 0x1a, type: "BatChargeStateEnum", access: "R V",
            conformance: "RECHG", constraint: "desc",
            details: "This attribute shall indicate the current state of the battery source with respect to charging as " +
                "specified in BatChargeStateEnum.",
            xref: { document: "core", section: "11.7.6.27" }
        },

        {
            tag: "attribute", name: "BatTimeToFullCharge", id: 0x1b, type: "uint32", access: "R V",
            conformance: "[RECHG]", quality: "X C",
            details: "This attribute shall indicate the estimated time in seconds before the battery source will be at " +
                "full charge. A value of NULL shall indicate the Node is currently unable to assess the value.",
            xref: { document: "core", section: "11.7.6.28" }
        },

        {
            tag: "attribute", name: "BatFunctionalWhileCharging", id: 0x1c, type: "bool", access: "R V",
            conformance: "RECHG",
            details: "This attribute shall indicate whether the Node can remain operational while the battery source is " +
                "charging.",
            xref: { document: "core", section: "11.7.6.29" }
        },

        {
            tag: "attribute", name: "BatChargingCurrent", id: 0x1d, type: "uint32", access: "R V",
            conformance: "[RECHG]", quality: "X C",
            details: "This attribute shall indicate assessed current in mA (milliamps) presently supplied to charge the " +
                "battery source. A value of NULL shall indicate the Node is currently unable to assess the value.",
            xref: { document: "core", section: "11.7.6.30" }
        },

        {
            tag: "attribute", name: "ActiveBatChargeFaults", id: 0x1e, type: "list", access: "R V",
            conformance: "[RECHG]", constraint: "16",

            details: "This attribute shall indicate the set of charge faults currently detected by the Node on this power " +
                "source. This set is represented as a list of BatChargeFaultEnum. When the Node detects a fault has " +
                "been raised, the appropriate BatChargeFaultEnum value shall be added to this list, provided it is " +
                "not already present. This list shall NOT contain more than one instance of a specific " +
                "BatChargeFaultEnum value. When the Node detects all conditions contributing to a fault have been " +
                "cleared, the corresponding BatChargeFaultEnum value shall be removed from this list. An empty list " +
                "shall indicate there are currently no active faults. The order of this list SHOULD have no " +
                "significance. Clients interested in monitoring changes in active faults may subscribe to this " +
                "attribute, or they may subscribe to the BatFaultChange event.",

            xref: { document: "core", section: "11.7.6.31" },
            children: [{ tag: "datatype", name: "entry", type: "BatChargeFaultEnum" }]
        },

        {
            tag: "event", name: "WiredFaultChange", id: 0x0, access: "V", conformance: "[WIRED]",
            priority: "info",
            details: "The WiredFaultChange Event shall be generated when the set of wired faults currently detected by " +
                "the Node on this wired power source changes. This event shall correspond to a change in value of " +
                "ActiveWiredFaults.",
            xref: { document: "core", section: "11.7.7.1" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8",
                    default: [],
                    details: "This field shall represent the set of faults currently detected, as per Section 11.7.6.11, " +
                        "“ActiveWiredFaults Attribute”.",
                    xref: { document: "core", section: "11.7.7.1.1" },
                    children: [{ tag: "datatype", name: "entry", type: "WiredFaultEnum" }]
                },

                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8",
                    default: [],
                    details: "This field shall represent the set of faults detected prior to this change event, as per Section " +
                        "11.7.6.11, “ActiveWiredFaults Attribute”.",
                    xref: { document: "core", section: "11.7.7.1.2" },
                    children: [{ tag: "datatype", name: "entry", type: "WiredFaultEnum" }]
                }
            ]
        },

        {
            tag: "event", name: "BatFaultChange", id: 0x1, access: "V", conformance: "[BAT]", priority: "info",

            details: "The BatFaultChange Event shall be generated when the set of battery faults currently detected by " +
                "the Node on this battery power source changes. This event shall correspond to a change in value of " +
                "ActiveBatFaults." +
                "\n" +
                "This field shall represent the set of faults currently detected, as per Section 11.7.6.19, " +
                "“ActiveBatFaults Attribute”." +
                "\n" +
                "This field shall represent the set of faults detected prior to this change event, as per Section " +
                "11.7.6.19, “ActiveBatFaults Attribute”.",

            xref: { document: "core", section: "11.7.7.2" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8",
                    default: [],
                    children: [{ tag: "datatype", name: "entry", type: "BatFaultEnum" }]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8",
                    default: [],
                    children: [{ tag: "datatype", name: "entry", type: "BatFaultEnum" }]
                }
            ]
        },

        {
            tag: "event", name: "BatChargeFaultChange", id: 0x2, access: "V", conformance: "[RECHG]",
            priority: "info",

            details: "The BatChargeFaultChange Event shall be generated when the set of charge faults currently" +
                "\n" +
                "detected by the Node on this battery power source changes. This event shall correspond to a change " +
                "in value of ActiveBatChargeFaults." +
                "\n" +
                "This field shall represent the set of faults currently detected, as per Section 11.7.6.31, " +
                "“ActiveBatChargeFaults Attribute”." +
                "\n" +
                "This field shall represent the set of faults detected prior to this change event, as per Section " +
                "11.7.6.31, “ActiveBatChargeFaults Attribute”.",

            xref: { document: "core", section: "11.7.7.3" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 16",
                    default: [],
                    children: [{ tag: "datatype", name: "entry", type: "BatChargeFaultEnum" }]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 16",
                    default: [],
                    children: [{ tag: "datatype", name: "entry", type: "BatChargeFaultEnum" }]
                }
            ]
        },

        {
            tag: "datatype", name: "WiredFaultEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.1" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The Node detects an unspecified fault on this wired power source."
                },
                {
                    tag: "datatype", name: "OverVoltage", id: 0x1, conformance: "M",
                    description: "The Node detects the supplied voltage is above maximum supported value for this wired power source."
                },
                {
                    tag: "datatype", name: "UnderVoltage", id: 0x2, conformance: "M",
                    description: "The Node detects the supplied voltage is below maximum supported value for this wired power source."
                }
            ]
        },

        {
            tag: "datatype", name: "BatFaultEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.2" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The Node detects an unspecified fault on this battery power source."
                },
                {
                    tag: "datatype", name: "OverTemp", id: 0x1, conformance: "M",
                    description: "The Node detects the temperature of this battery power source is above ideal operating conditions."
                },
                {
                    tag: "datatype", name: "UnderTemp", id: 0x2, conformance: "M",
                    description: "The Node detects the temperature of this battery power source is below ideal operating conditions."
                }
            ]
        },

        {
            tag: "datatype", name: "BatChargeFaultEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.3" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The Node detects an unspecified fault on this battery source."
                },
                {
                    tag: "datatype", name: "AmbientTooHot", id: 0x1, conformance: "M",
                    description: "The Node detects the ambient temperature is above the nominal range for this battery source."
                },
                {
                    tag: "datatype", name: "AmbientTooCold", id: 0x2, conformance: "M",
                    description: "The Node detects the ambient temperature is below the nominal range for this battery source."
                },
                {
                    tag: "datatype", name: "BatteryTooHot", id: 0x3, conformance: "M",
                    description: "The Node detects the temperature of this battery source is above the nominal range."
                },
                {
                    tag: "datatype", name: "BatteryTooCold", id: 0x4, conformance: "M",
                    description: "The Node detects the temperature of this battery source is below the nominal range."
                },
                {
                    tag: "datatype", name: "BatteryAbsent", id: 0x5, conformance: "M",
                    description: "The Node detects this battery source is not present."
                },
                {
                    tag: "datatype", name: "BatteryOverVoltage", id: 0x6, conformance: "M",
                    description: "The Node detects this battery source is over voltage."
                },
                {
                    tag: "datatype", name: "BatteryUnderVoltage", id: 0x7, conformance: "M",
                    description: "The Node detects this battery source is under voltage."
                },
                {
                    tag: "datatype", name: "ChargerOverVoltage", id: 0x8, conformance: "M",
                    description: "The Node detects the charger for this battery source is over voltage."
                },
                {
                    tag: "datatype", name: "ChargerUnderVoltage", id: 0x9, conformance: "M",
                    description: "The Node detects the charger for this battery source is under voltage."
                },
                {
                    tag: "datatype", name: "SafetyTimeout", id: 0xa, conformance: "M",
                    description: "The Node detects a charging safety timeout for this battery source."
                }
            ]
        },

        {
            tag: "datatype", name: "PowerSourceStatusEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.4" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "Indicate the source status is not specified"
                },
                {
                    tag: "datatype", name: "Active", id: 0x1, conformance: "M",
                    description: "Indicate the source is available and currently supplying power"
                },
                {
                    tag: "datatype", name: "Standby", id: 0x2, conformance: "M",
                    description: "Indicate the source is available, but is not currently supplying power"
                },
                {
                    tag: "datatype", name: "Unavailable", id: 0x3, conformance: "M",
                    description: "Indicate the source is not currently available to supply power"
                }
            ]
        },

        {
            tag: "datatype", name: "WiredCurrentTypeEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.5" },
            children: [
                { tag: "datatype", name: "Ac", id: 0x0, conformance: "M", description: "Indicates AC current" },
                { tag: "datatype", name: "Dc", id: 0x1, conformance: "M", description: "Indicates DC current" }
            ]
        },

        {
            tag: "datatype", name: "BatChargeLevelEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.6" },

            children: [
                { tag: "datatype", name: "Ok", id: 0x0, conformance: "M", description: "Charge level is nominal" },
                {
                    tag: "datatype", name: "Warning", id: 0x1, conformance: "M",
                    description: "Charge level is low, intervention may soon be required."
                },
                {
                    tag: "datatype", name: "Critical", id: 0x2, conformance: "M",
                    description: "Charge level is critical, immediate intervention is required"
                }
            ]
        },

        {
            tag: "datatype", name: "BatReplaceabilityEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.7" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "The replaceability is unspecified or unknown."
                },
                {
                    tag: "datatype", name: "NotReplaceable", id: 0x1, conformance: "M",
                    description: "The battery is not replaceable."
                },
                {
                    tag: "datatype", name: "UserReplaceable", id: 0x2, conformance: "M",
                    description: "The battery is replaceable by the user or customer."
                },
                {
                    tag: "datatype", name: "FactoryReplaceable", id: 0x3, conformance: "M",
                    description: "The battery is replaceable by an authorized factory technician."
                }
            ]
        },

        {
            tag: "datatype", name: "BatCommonDesignationEnum", type: "enum16", conformance: "M",
            xref: { document: "core", section: "11.7.5.8" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "Common type is unknown or unspecified"
                },
                { tag: "datatype", name: "Aaa", id: 0x1, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "Aa", id: 0x2, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "C", id: 0x3, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "D", id: 0x4, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "4V5", id: 0x5, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "6V0", id: 0x6, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "9V0", id: 0x7, conformance: "M", description: "Common type is as specified" },
                {
                    tag: "datatype", name: "12Aa", id: 0x8, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Aaaa", id: 0x9, conformance: "M",
                    description: "Common type is as specified"
                },
                { tag: "datatype", name: "A", id: 0xa, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "B", id: 0xb, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "F", id: 0xc, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "N", id: 0xd, conformance: "M", description: "Common type is as specified" },
                { tag: "datatype", name: "No6", id: 0xe, conformance: "M", description: "Common type is as specified" },
                {
                    tag: "datatype", name: "SubC", id: 0xf, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "A23", id: 0x10, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "A27", id: 0x11, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Ba5800", id: 0x12, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Duplex", id: 0x13, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "4Sr44", id: 0x14, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "523", id: 0x15, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "531", id: 0x16, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "15V0", id: 0x17, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "22V5", id: 0x18, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "30V0", id: 0x19, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "45V0", id: 0x1a, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "67V5", id: 0x1b, conformance: "M",
                    description: "Common type is as specified"
                },
                { tag: "datatype", name: "J", id: 0x1c, conformance: "M", description: "Common type is as specified" },
                {
                    tag: "datatype", name: "Cr123A", id: 0x1d, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Cr2", id: 0x1e, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "2Cr5", id: 0x1f, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "CrP2", id: 0x20, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "CrV3", id: 0x21, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr41", id: 0x22, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr43", id: 0x23, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr44", id: 0x24, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr45", id: 0x25, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr48", id: 0x26, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr54", id: 0x27, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr55", id: 0x28, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr57", id: 0x29, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr58", id: 0x2a, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr59", id: 0x2b, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr60", id: 0x2c, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr63", id: 0x2d, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr64", id: 0x2e, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr65", id: 0x2f, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr66", id: 0x30, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr67", id: 0x31, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr68", id: 0x32, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr69", id: 0x33, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr516", id: 0x34, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr731", id: 0x35, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Sr712", id: 0x36, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Lr932", id: 0x37, conformance: "M",
                    description: "Common type is as specified"
                },
                { tag: "datatype", name: "A5", id: 0x38, conformance: "M", description: "Common type is as specified" },
                {
                    tag: "datatype", name: "A10", id: 0x39, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "A13", id: 0x3a, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "A312", id: 0x3b, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "A675", id: 0x3c, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Ac41E", id: 0x3d, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "10180", id: 0x3e, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "10280", id: 0x3f, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "10440", id: 0x40, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "14250", id: 0x41, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "14430", id: 0x42, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "14500", id: 0x43, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "14650", id: 0x44, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "15270", id: 0x45, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "16340", id: 0x46, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "Rcr123A", id: 0x47, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "17500", id: 0x48, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "17670", id: 0x49, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "18350", id: 0x4a, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "18500", id: 0x4b, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "18650", id: 0x4c, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "19670", id: 0x4d, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "25500", id: 0x4e, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "26650", id: 0x4f, conformance: "M",
                    description: "Common type is as specified"
                },
                {
                    tag: "datatype", name: "32600", id: 0x50, conformance: "M",
                    description: "Common type is as specified"
                }
            ]
        },

        {
            tag: "datatype", name: "BatApprovedChemistryEnum", type: "enum16", conformance: "M",
            xref: { document: "core", section: "11.7.5.9" },

            children: [
                {
                    tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M",
                    description: "Cell chemistry is unspecified or unknown"
                },
                {
                    tag: "datatype", name: "Alkaline", id: 0x1, conformance: "M",
                    description: "Cell chemistry is alkaline"
                },
                {
                    tag: "datatype", name: "LithiumCarbonFluoride", id: 0x2, conformance: "M",
                    description: "Cell chemistry is lithium carbon fluoride"
                },
                {
                    tag: "datatype", name: "LithiumChromiumOxide", id: 0x3, conformance: "M",
                    description: "Cell chemistry is lithium chromium oxide"
                },
                {
                    tag: "datatype", name: "LithiumCopperOxide", id: 0x4, conformance: "M",
                    description: "Cell chemistry is lithium copper oxide"
                },
                {
                    tag: "datatype", name: "LithiumIronDisulfide", id: 0x5, conformance: "M",
                    description: "Cell chemistry is lithium iron disulfide"
                },
                {
                    tag: "datatype", name: "LithiumManganeseDioxide", id: 0x6, conformance: "M",
                    description: "Cell chemistry is lithium manganese dioxide"
                },
                {
                    tag: "datatype", name: "LithiumThionylChloride", id: 0x7, conformance: "M",
                    description: "Cell chemistry is lithium thionyl chloride"
                },
                {
                    tag: "datatype", name: "Magnesium", id: 0x8, conformance: "M",
                    description: "Cell chemistry is magnesium"
                },
                {
                    tag: "datatype", name: "MercuryOxide", id: 0x9, conformance: "M",
                    description: "Cell chemistry is mercury oxide"
                },
                {
                    tag: "datatype", name: "NickelOxyhydride", id: 0xa, conformance: "M",
                    description: "Cell chemistry is nickel oxyhydride"
                },
                {
                    tag: "datatype", name: "SilverOxide", id: 0xb, conformance: "M",
                    description: "Cell chemistry is silver oxide"
                },
                {
                    tag: "datatype", name: "ZincAir", id: 0xc, conformance: "M",
                    description: "Cell chemistry is zinc air"
                },
                {
                    tag: "datatype", name: "ZincCarbon", id: 0xd, conformance: "M",
                    description: "Cell chemistry is zinc carbon"
                },
                {
                    tag: "datatype", name: "ZincChloride", id: 0xe, conformance: "M",
                    description: "Cell chemistry is zinc chloride"
                },
                {
                    tag: "datatype", name: "ZincManganeseDioxide", id: 0xf, conformance: "M",
                    description: "Cell chemistry is zinc manganese dioxide"
                },
                {
                    tag: "datatype", name: "LeadAcid", id: 0x10, conformance: "M",
                    description: "Cell chemistry is lead acid"
                },
                {
                    tag: "datatype", name: "LithiumCobaltOxide", id: 0x11, conformance: "M",
                    description: "Cell chemistry is lithium cobalt oxide"
                },
                {
                    tag: "datatype", name: "LithiumIon", id: 0x12, conformance: "M",
                    description: "Cell chemistry is lithium ion"
                },
                {
                    tag: "datatype", name: "LithiumIonPolymer", id: 0x13, conformance: "M",
                    description: "Cell chemistry is lithium ion polymer"
                },
                {
                    tag: "datatype", name: "LithiumIronPhosphate", id: 0x14, conformance: "M",
                    description: "Cell chemistry is lithium iron phosphate"
                },
                {
                    tag: "datatype", name: "LithiumSulfur", id: 0x15, conformance: "M",
                    description: "Cell chemistry is lithium sulfur"
                },
                {
                    tag: "datatype", name: "LithiumTitanate", id: 0x16, conformance: "M",
                    description: "Cell chemistry is lithium titanate"
                },
                {
                    tag: "datatype", name: "NickelCadmium", id: 0x17, conformance: "M",
                    description: "Cell chemistry is nickel cadmium"
                },
                {
                    tag: "datatype", name: "NickelHydrogen", id: 0x18, conformance: "M",
                    description: "Cell chemistry is nickel hydrogen"
                },
                {
                    tag: "datatype", name: "NickelIron", id: 0x19, conformance: "M",
                    description: "Cell chemistry is nickel iron"
                },
                {
                    tag: "datatype", name: "NickelMetalHydride", id: 0x1a, conformance: "M",
                    description: "Cell chemistry is nickel metal hydride"
                },
                {
                    tag: "datatype", name: "NickelZinc", id: 0x1b, conformance: "M",
                    description: "Cell chemistry is nickel zinc"
                },
                {
                    tag: "datatype", name: "SilverZinc", id: 0x1c, conformance: "M",
                    description: "Cell chemistry is silver zinc"
                },
                {
                    tag: "datatype", name: "SodiumIon", id: 0x1d, conformance: "M",
                    description: "Cell chemistry is sodium ion"
                },
                {
                    tag: "datatype", name: "SodiumSulfur", id: 0x1e, conformance: "M",
                    description: "Cell chemistry is sodium sulfur"
                },
                {
                    tag: "datatype", name: "ZincBromide", id: 0x1f, conformance: "M",
                    description: "Cell chemistry is zinc bromide"
                },
                {
                    tag: "datatype", name: "ZincCerium", id: 0x20, conformance: "M",
                    description: "Cell chemistry is zinc cerium"
                }
            ]
        },

        {
            tag: "datatype", name: "BatChargeStateEnum", type: "enum8", conformance: "M",
            xref: { document: "core", section: "11.7.5.10" },

            children: [
                {
                    tag: "datatype", name: "Unknown", id: 0x0, conformance: "M",
                    description: "Unable to determine the charging state"
                },
                {
                    tag: "datatype", name: "IsCharging", id: 0x1, conformance: "M",
                    description: "The battery is charging"
                },
                {
                    tag: "datatype", name: "IsAtFullCharge", id: 0x2, conformance: "M",
                    description: "The battery is at full charge"
                },
                {
                    tag: "datatype", name: "IsNotCharging", id: 0x3, conformance: "M",
                    description: "The battery is not charging"
                }
            ]
        }
    ]
});
