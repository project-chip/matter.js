/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const PowerSource = Cluster(
    {
        name: "PowerSource", id: 0x2f, classification: "node", pics: "PS",
        details: "This cluster is used to describe the configuration and capabilities of a physical power source that " +
            "provides power to one or more endpoints on a node. In case the node has multiple power sources, each " +
            "shall be described by its own cluster instance. Each instance of this cluster may be associated with " +
            "one or more endpoints or the entire node.",
        xref: { document: "core", section: "11.7" }
    },

    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "core", section: "11.7.4" } },
        Field({ name: "WIRED", conformance: "O.a", constraint: "0", description: "Wired", details: "A wired power source" }),
        Field({ name: "BAT", conformance: "O.a", constraint: "1", description: "Battery", details: "A battery power source" }),
        Field({
            name: "RECHG", conformance: "[BAT]", constraint: "2", description: "Rechargeable",
            details: "A rechargeable battery power source"
        }),
        Field({
            name: "REPLC", conformance: "[BAT]", constraint: "3", description: "Replaceable",
            details: "A replaceable battery power source"
        })
    ),

    Attribute({
        name: "Status", id: 0x0, type: "PowerSourceStatusEnum", access: "R V", conformance: "M",
        constraint: "desc",
        details: "Indicates the participation of this power source in providing power to the Node as specified in " +
            "PowerSourceStatusEnum.",
        xref: { document: "core", section: "11.7.7.1" }
    }),

    Attribute({
        name: "Order", id: 0x1, type: "uint8", access: "R V", conformance: "M", quality: "N",

        details: "Indicates the relative preference with which the Node will select this source to provide power. A " +
            "source with a lower order shall be selected by the Node to provide power before any other source " +
            "with a higher order, if the lower order source is available (see Status)." +
            "\n" +
            "Note, Order is read-only and therefore NOT intended to allow clients control over power source " +
            "selection.",

        xref: { document: "core", section: "11.7.7.2" }
    }),

    Attribute({
        name: "Description", id: 0x2, type: "string", access: "R V", conformance: "M", constraint: "max 60",
        quality: "F",
        details: "This attribute shall provide a user-facing description of this source, used to distinguish it from " +
            "other power sources, e.g. \"DC Power\", \"Primary Battery\" or \"Battery back-up\". This attribute shall " +
            "NOT be used to convey information such as battery form factor, or chemistry.",
        xref: { document: "core", section: "11.7.7.3" }
    }),

    Attribute({
        name: "WiredAssessedInputVoltage", id: 0x3, type: "uint32", access: "R V", conformance: "[WIRED]",
        quality: "X C",
        details: "Indicates the assessed RMS or DC voltage currently provided by the hard-wired source, in mV " +
            "(millivolts). A value of NULL shall indicate the Node is currently unable to assess the value. If " +
            "the wired source is not connected, but the Node is still able to assess a value, then the assessed " +
            "value may be reported.",
        xref: { document: "core", section: "11.7.7.4" }
    }),

    Attribute({
        name: "WiredAssessedInputFrequency", id: 0x4, type: "uint16", access: "R V", conformance: "[WIRED]",
        quality: "X C",
        details: "Indicates the assessed frequency of the voltage, currently provided by the hard-wired source, in Hz. " +
            "A value of NULL shall indicate the Node is currently unable to assess the value. If the wired source " +
            "is not connected, but the Node is still able to assess a value, then the assessed value may be " +
            "reported.",
        xref: { document: "core", section: "11.7.7.5" }
    }),

    Attribute({
        name: "WiredCurrentType", id: 0x5, type: "WiredCurrentTypeEnum", access: "R V",
        conformance: "WIRED", constraint: "desc", quality: "F",
        details: "Indicates the type of current the Node expects to be provided by the hard- wired source as specified " +
            "in WiredCurrentTypeEnum.",
        xref: { document: "core", section: "11.7.7.6" }
    }),

    Attribute({
        name: "WiredAssessedCurrent", id: 0x6, type: "uint32", access: "R V", conformance: "[WIRED]",
        quality: "X C",
        details: "Indicates the assessed instantaneous current draw of the Node on the hard- wired source, in mA " +
            "(milliamps). A value of NULL shall indicate the Node is currently unable to assess the value. If the " +
            "wired source is not connected, but the Node is still able to assess a value, then the assessed value " +
            "may be reported.",
        xref: { document: "core", section: "11.7.7.7" }
    }),

    Attribute({
        name: "WiredNominalVoltage", id: 0x7, type: "uint32", access: "R V", conformance: "[WIRED]",
        quality: "F",
        details: "Indicates the nominal voltage, printed as part of the Node’s regulatory compliance label in mV " +
            "(millivolts), expected to be provided by the hard-wired source.",
        xref: { document: "core", section: "11.7.7.8" }
    }),

    Attribute({
        name: "WiredMaximumCurrent", id: 0x8, type: "uint32", access: "R V", conformance: "[WIRED]",
        quality: "F",
        details: "Indicates the maximum current, printed as part of the Node’s regulatory compliance label in mA " +
            "(milliamps), expected to be provided by the hard-wired source.",
        xref: { document: "core", section: "11.7.7.9" }
    }),

    Attribute({
        name: "WiredPresent", id: 0x9, type: "bool", access: "R V", conformance: "[WIRED]",
        details: "Indicates if the Node detects that the hard-wired power source is properly connected.",
        xref: { document: "core", section: "11.7.7.10" }
    }),

    Attribute(
        {
            name: "ActiveWiredFaults", id: 0xa, type: "list", access: "R V", conformance: "[WIRED]",
            constraint: "max 8",

            details: "Indicates the set of wired faults currently detected by the Node on this power source. This set is " +
                "represented as a list of WiredFaultEnum. When the Node detects a fault has been raised, the " +
                "appropriate WiredFaultEnum value shall be added to this list, provided it is not already present. " +
                "This list shall NOT contain more than one instance of a specific WiredFaultEnum value. When the Node " +
                "detects all conditions contributing to a fault have been cleared, the corresponding WiredFaultEnum " +
                "value shall be removed from this list. An empty list shall indicate there are currently no active " +
                "faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes " +
                "in active faults may subscribe to this attribute, or they may subscribe to WiredFaultChange.",

            xref: { document: "core", section: "11.7.7.11" }
        },

        Field({ name: "entry", type: "WiredFaultEnum" })
    ),

    Attribute({
        name: "BatVoltage", id: 0xb, type: "uint32", access: "R V", conformance: "[BAT]", quality: "X C",
        details: "Indicates the currently measured output voltage of the battery in mV (millivolts). A value of NULL " +
            "shall indicate the Node is currently unable to assess the value.",
        xref: { document: "core", section: "11.7.7.12" }
    }),

    Attribute({
        name: "BatPercentRemaining", id: 0xc, type: "uint8", access: "R V", conformance: "[BAT]",
        constraint: "max 200", quality: "X Q",

        details: "Indicates the estimated percentage of battery charge remaining until the battery will no longer be " +
            "able to provide power to the Node. Values are expressed in half percent units, ranging from 0 to " +
            "200. E.g. a value of 48 is equivalent to 24%. A value of NULL shall indicate the Node is currently " +
            "unable to assess the value." +
            "\n" +
            "Changes to this attribute shall only be marked as reportable in the following cases:" +
            "\n" +
            "  • At most once every 10 seconds, or" +
            "\n" +
            "  • When it changes from null to any other value and vice versa." +
            "\n" +
            "Since reporting consumes power, devices SHOULD be careful not to over-report.",

        xref: { document: "core", section: "11.7.7.13" }
    }),

    Attribute({
        name: "BatTimeRemaining", id: 0xd, type: "uint32", access: "R V", conformance: "[BAT]",
        quality: "X Q",

        details: "Indicates the estimated time in seconds before the battery will no longer be able to provide power " +
            "to the Node. A value of NULL shall indicate the Node is currently unable to assess the value." +
            "\n" +
            "Changes to this attribute shall only be marked as reportable in the following cases:" +
            "\n" +
            "  • At most once every 10 seconds, or" +
            "\n" +
            "  • When it changes from null to any other value and vice versa." +
            "\n" +
            "Since reporting consumes power, devices SHOULD be careful not to over-report.",

        xref: { document: "core", section: "11.7.7.14" }
    }),

    Attribute({
        name: "BatChargeLevel", id: 0xe, type: "BatChargeLevelEnum", access: "R V", conformance: "BAT",
        constraint: "desc",
        details: "Indicates a coarse ranking of the charge level of the battery, used to indicate when intervention is " +
            "required as specified in BatChargeLevelEnum.",
        xref: { document: "core", section: "11.7.7.15" }
    }),

    Attribute({
        name: "BatReplacementNeeded", id: 0xf, type: "bool", access: "R V", conformance: "BAT",
        details: "Indicates if the battery needs to be replaced. Replacement may be simple routine maintenance, such " +
            "as with a single use, non-rechargeable cell. Replacement, however, may also indicate end of life, or " +
            "serious fault with a rechargeable or even non-replaceable cell.",
        xref: { document: "core", section: "11.7.7.16" }
    }),

    Attribute({
        name: "BatReplaceability", id: 0x10, type: "BatReplaceabilityEnum", access: "R V",
        conformance: "BAT", quality: "F",
        details: "Indicates the replaceability of the battery as specified in BatReplaceabilityEnum.",
        xref: { document: "core", section: "11.7.7.17" }
    }),

    Attribute({
        name: "BatPresent", id: 0x11, type: "bool", access: "R V", conformance: "[BAT]",
        details: "Indicates whether the Node detects that the batteries are properly installed.",
        xref: { document: "core", section: "11.7.7.18" }
    }),

    Attribute(
        {
            name: "ActiveBatFaults", id: 0x12, type: "list", access: "R V", conformance: "[BAT]",
            constraint: "max 8",

            details: "Indicates the set of battery faults currently detected by the Node on this power source. This set is " +
                "represented as a list of BatFaultEnum. When the Node detects a fault has been raised, the " +
                "appropriate BatFaultEnum value shall be added to this list, provided it is not already present. This " +
                "list shall NOT contain more than one instance of a specific BatFaultEnum value. When the Node " +
                "detects all conditions contributing to a fault have been cleared, the corresponding BatFaultEnum " +
                "value shall be removed from this list. An empty list shall indicate there are currently no active " +
                "faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes " +
                "in active faults may subscribe to this attribute, or they may subscribe to Bat" +
                "\n" +
                "FaultChange.",

            xref: { document: "core", section: "11.7.7.19" }
        },

        Field({ name: "entry", type: "BatFaultEnum" })
    ),

    Attribute({
        name: "BatReplacementDescription", id: 0x13, type: "string", access: "R V", conformance: "REPLC",
        constraint: "max 60", quality: "F",
        details: "This attribute shall provide a user-facing description of this battery, which SHOULD contain " +
            "information required to identify a replacement, such as form factor, chemistry or preferred " +
            "manufacturer.",
        xref: { document: "core", section: "11.7.7.20" }
    }),

    Attribute({
        name: "BatCommonDesignation", id: 0x14, type: "BatCommonDesignationEnum", access: "R V",
        conformance: "[REPLC]", constraint: "desc", quality: "F",
        details: "Indicates the ID of the common or colloquial designation of the battery, as specified in " +
            "BatCommonDesignationEnum.",
        xref: { document: "core", section: "11.7.7.21" }
    }),

    Attribute({
        name: "BatAnsiDesignation", id: 0x15, type: "string", access: "R V", conformance: "[REPLC]",
        constraint: "max 20", quality: "F",
        details: "Indicates the string representing the ANSI designation for the battery as specified in ANSI C18.",
        xref: { document: "core", section: "11.7.7.22" }
    }),

    Attribute({
        name: "BatIecDesignation", id: 0x16, type: "string", access: "R V", conformance: "[REPLC]",
        constraint: "max 20", quality: "F",
        details: "Indicates the string representing the IEC designation for the battery as specified in IEC 60086.",
        xref: { document: "core", section: "11.7.7.23" }
    }),

    Attribute({
        name: "BatApprovedChemistry", id: 0x17, type: "BatApprovedChemistryEnum", access: "R V",
        conformance: "[REPLC]", constraint: "desc", quality: "F",
        details: "Indicates the ID of the preferred chemistry of the battery source as specified in " +
            "BatApprovedChemistryEnum.",
        xref: { document: "core", section: "11.7.7.24" }
    }),

    Attribute({
        name: "BatCapacity", id: 0x18, type: "uint32", access: "R V", conformance: "[REPLC | RECHG]",
        quality: "F",
        details: "Indicates the preferred minimum charge capacity rating in mAh of individual, user- or " +
            "factory-serviceable battery cells or packs in the battery source.",
        xref: { document: "core", section: "11.7.7.25" }
    }),

    Attribute({
        name: "BatQuantity", id: 0x19, type: "uint8", access: "R V", conformance: "REPLC", quality: "F",
        details: "Indicates the quantity of individual, user- or factory-serviceable battery cells or packs in the " +
            "battery source.",
        xref: { document: "core", section: "11.7.7.26" }
    }),

    Attribute({
        name: "BatChargeState", id: 0x1a, type: "BatChargeStateEnum", access: "R V", conformance: "RECHG",
        constraint: "desc",
        details: "Indicates the current state of the battery source with respect to charging as specified in " +
            "BatChargeStateEnum.",
        xref: { document: "core", section: "11.7.7.27" }
    }),

    Attribute({
        name: "BatTimeToFullCharge", id: 0x1b, type: "uint32", access: "R V", conformance: "[RECHG]",
        quality: "X Q",

        details: "Indicates the estimated time in seconds before the battery source will be at full charge. A value of " +
            "NULL shall indicate the Node is currently unable to assess the value." +
            "\n" +
            "Changes to this attribute shall only be marked as reportable in the following cases:" +
            "\n" +
            "  • At most once every 10 seconds, or" +
            "\n" +
            "  • When it changes from null to any other value and vice versa." +
            "\n" +
            "Since reporting consumes power, devices SHOULD be careful not to over-report.",

        xref: { document: "core", section: "11.7.7.28" }
    }),

    Attribute({
        name: "BatFunctionalWhileCharging", id: 0x1c, type: "bool", access: "R V", conformance: "RECHG",
        details: "Indicates whether the Node can remain operational while the battery source is charging.",
        xref: { document: "core", section: "11.7.7.29" }
    }),

    Attribute({
        name: "BatChargingCurrent", id: 0x1d, type: "uint32", access: "R V", conformance: "[RECHG]",
        quality: "X C",
        details: "Indicates assessed current in mA (milliamps) presently supplied to charge the battery source. A " +
            "value of NULL shall indicate the Node is currently unable to assess the value.",
        xref: { document: "core", section: "11.7.7.30" }
    }),

    Attribute(
        {
            name: "ActiveBatChargeFaults", id: 0x1e, type: "list", access: "R V", conformance: "[RECHG]",
            constraint: "max 16",

            details: "Indicates the set of charge faults currently detected by the Node on this power source. This set is " +
                "represented as a list of BatChargeFaultEnum. When the Node detects a fault has been raised, the " +
                "appropriate BatChargeFaultEnum value shall be added to this list, provided it is not already " +
                "present. This list shall NOT contain more than one instance of a specific BatChargeFaultEnum value. " +
                "When the Node detects all conditions contributing to a fault have been cleared, the corresponding " +
                "BatChargeFaultEnum value shall be removed from this list. An empty list shall indicate there are " +
                "currently no active faults. The order of this list SHOULD have no significance. Clients interested " +
                "in monitoring changes in active faults may subscribe to this attribute, or they may subscribe to the " +
                "BatFaultChange event.",

            xref: { document: "core", section: "11.7.7.31" }
        },

        Field({ name: "entry", type: "BatChargeFaultEnum" })
    ),

    Attribute(
        {
            name: "EndpointList", id: 0x1f, type: "list", access: "R V", conformance: "M",

            details: "Indicates a list of endpoints that are powered by the source defined by this cluster. Multiple " +
                "instances of this cluster may list the same endpoint, because it is possible for power for an " +
                "endpoint to come from multiple sources. In that case the Order attribute indicates their priority." +
                "\n" +
                "For each power source on a node, there shall only be one instance of this cluster." +
                "\n" +
                "A cluster instance with an empty list shall indicate that the power source is for the entire node, " +
                "which includes all endpoints." +
                "\n" +
                "A cluster instance with a non-empty list shall include the endpoint, upon which the cluster instance " +
                "resides." +
                "\n" +
                "The above rules allow that some endpoints can have an unknown power source, and therefore would not " +
                "be indicated by any instance of this cluster." +
                "\n" +
                "Empty list examples" +
                "\n" +
                "Typically, there is one power source for the node. Also common is mains power for the node with " +
                "battery backup power for the node. In both these common cases, for each cluster instance described, " +
                "the list is empty." +
                "\n" +
                "Populated list example" +
                "\n" +
                "A node has a mains power source with Order as 0 (zero), but some application endpoints (not all) " +
                "have a battery back up source with Order as 1, which means this list is empty for the Power Source " +
                "cluster associated with the mains power, because it indicates the entire node, but the Power Source " +
                "cluster instance associated with the battery backup would list the endpoints that have a battery " +
                "backup.",

            xref: { document: "core", section: "11.7.7.32" }
        },

        Field({ name: "entry", type: "endpoint-no" })
    ),

    Event(
        {
            name: "WiredFaultChange", id: 0x0, access: "V", conformance: "[WIRED]", priority: "info",
            details: "The WiredFaultChange Event shall be generated when the set of wired faults currently detected by the " +
                "Node on this wired power source changes. This event shall correspond to a change in value of " +
                "ActiveWiredFaults.",
            xref: { document: "core", section: "11.7.8.1" }
        },

        Field(
            {
                name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8", default: [],
                details: "This field shall represent the set of faults currently detected, as per ActiveWiredFaults.",
                xref: { document: "core", section: "11.7.8.1.1" }
            },
            Field({ name: "entry", type: "WiredFaultEnum" })
        ),

        Field(
            {
                name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8", default: [],
                details: "This field shall represent the set of faults detected prior to this change event, as per " +
                    "ActiveWiredFaults.",
                xref: { document: "core", section: "11.7.8.1.2" }
            },

            Field({ name: "entry", type: "WiredFaultEnum" })
        )
    ),

    Event(
        {
            name: "BatFaultChange", id: 0x1, access: "V", conformance: "[BAT]", priority: "info",
            details: "The BatFaultChange Event shall be generated when the set of battery faults currently detected by the " +
                "Node on this battery power source changes. This event shall correspond to a change in value of " +
                "ActiveBatFaults.",
            xref: { document: "core", section: "11.7.8.2" }
        },

        Field(
            {
                name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 8", default: [],
                details: "This field shall represent the set of faults currently detected, as per ActiveBatFaults.",
                xref: { document: "core", section: "11.7.8.2.1" }
            },
            Field({ name: "entry", type: "BatFaultEnum" })
        ),

        Field(
            {
                name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 8", default: [],
                details: "This field shall represent the set of faults detected prior to this change event, as per " +
                    "ActiveBatFaults.",
                xref: { document: "core", section: "11.7.8.2.2" }
            },

            Field({ name: "entry", type: "BatFaultEnum" })
        )
    ),

    Event(
        {
            name: "BatChargeFaultChange", id: 0x2, access: "V", conformance: "[RECHG]", priority: "info",
            details: "The BatChargeFaultChange Event shall be generated when the set of charge faults currently detected " +
                "by the Node on this battery power source changes. This event shall correspond to a change in value " +
                "of ActiveBatChargeFaults.",
            xref: { document: "core", section: "11.7.8.3" }
        },

        Field(
            {
                name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 16", default: [],
                details: "This field shall represent the set of faults currently detected, as per ActiveBatChargeFaults.",
                xref: { document: "core", section: "11.7.8.3.1" }
            },
            Field({ name: "entry", type: "BatChargeFaultEnum" })
        ),

        Field(
            {
                name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 16", default: [],
                details: "This field shall represent the set of faults detected prior to this change event, as per " +
                    "ActiveBatChargeFaults.",
                xref: { document: "core", section: "11.7.8.3.2" }
            },

            Field({ name: "entry", type: "BatChargeFaultEnum" })
        )
    ),

    Datatype(
        { name: "WiredFaultEnum", type: "enum8", xref: { document: "core", section: "11.7.6.1" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The Node detects an unspecified fault on this wired power source."
        }),
        Field({
            name: "OverVoltage", id: 0x1, conformance: "M",
            description: "The Node detects the supplied voltage is above maximum supported value for this wired power source."
        }),
        Field({
            name: "UnderVoltage", id: 0x2, conformance: "M",
            description: "The Node detects the supplied voltage is below maximum supported value for this wired power source."
        })
    ),

    Datatype(
        { name: "BatFaultEnum", type: "enum8", xref: { document: "core", section: "11.7.6.2" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The Node detects an unspecified fault on this battery power source."
        }),
        Field({
            name: "OverTemp", id: 0x1, conformance: "M",
            description: "The Node detects the temperature of this battery power source is above ideal operating conditions."
        }),
        Field({
            name: "UnderTemp", id: 0x2, conformance: "M",
            description: "The Node detects the temperature of this battery power source is below ideal operating conditions."
        })
    ),

    Datatype(
        { name: "BatChargeFaultEnum", type: "enum8", xref: { document: "core", section: "11.7.6.3" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The Node detects an unspecified fault on this battery source."
        }),
        Field({
            name: "AmbientTooHot", id: 0x1, conformance: "M",
            description: "The Node detects the ambient temperature is above the nominal range for this battery source."
        }),
        Field({
            name: "AmbientTooCold", id: 0x2, conformance: "M",
            description: "The Node detects the ambient temperature is below the nominal range for this battery source."
        }),
        Field({
            name: "BatteryTooHot", id: 0x3, conformance: "M",
            description: "The Node detects the temperature of this battery source is above the nominal range."
        }),
        Field({
            name: "BatteryTooCold", id: 0x4, conformance: "M",
            description: "The Node detects the temperature of this battery source is below the nominal range."
        }),
        Field({
            name: "BatteryAbsent", id: 0x5, conformance: "M",
            description: "The Node detects this battery source is not present."
        }),
        Field({
            name: "BatteryOverVoltage", id: 0x6, conformance: "M",
            description: "The Node detects this battery source is over voltage."
        }),
        Field({
            name: "BatteryUnderVoltage", id: 0x7, conformance: "M",
            description: "The Node detects this battery source is under voltage."
        }),
        Field({
            name: "ChargerOverVoltage", id: 0x8, conformance: "M",
            description: "The Node detects the charger for this battery source is over voltage."
        }),
        Field({
            name: "ChargerUnderVoltage", id: 0x9, conformance: "M",
            description: "The Node detects the charger for this battery source is under voltage."
        }),
        Field({
            name: "SafetyTimeout", id: 0xa, conformance: "M",
            description: "The Node detects a charging safety timeout for this battery source."
        })
    ),

    Datatype(
        { name: "PowerSourceStatusEnum", type: "enum8", xref: { document: "core", section: "11.7.6.4" } },
        Field({ name: "Unspecified", id: 0x0, conformance: "M", description: "Indicate the source status is not specified" }),
        Field({
            name: "Active", id: 0x1, conformance: "M",
            description: "Indicate the source is available and currently supplying power"
        }),
        Field({
            name: "Standby", id: 0x2, conformance: "M",
            description: "Indicate the source is available, but is not currently supplying power"
        }),
        Field({
            name: "Unavailable", id: 0x3, conformance: "M",
            description: "Indicate the source is not currently available to supply power"
        })
    ),

    Datatype(
        { name: "WiredCurrentTypeEnum", type: "enum8", xref: { document: "core", section: "11.7.6.5" } },
        Field({ name: "Ac", id: 0x0, conformance: "M", description: "Indicates AC current" }),
        Field({ name: "Dc", id: 0x1, conformance: "M", description: "Indicates DC current" })
    ),

    Datatype(
        { name: "BatChargeLevelEnum", type: "enum8", xref: { document: "core", section: "11.7.6.6" } },
        Field({ name: "Ok", id: 0x0, conformance: "M", description: "Charge level is nominal" }),
        Field({
            name: "Warning", id: 0x1, conformance: "M",
            description: "Charge level is low, intervention may soon be required."
        }),
        Field({
            name: "Critical", id: 0x2, conformance: "M",
            description: "Charge level is critical, immediate intervention is required"
        })
    ),

    Datatype(
        { name: "BatReplaceabilityEnum", type: "enum8", xref: { document: "core", section: "11.7.6.7" } },
        Field({
            name: "Unspecified", id: 0x0, conformance: "M",
            description: "The replaceability is unspecified or unknown."
        }),
        Field({ name: "NotReplaceable", id: 0x1, conformance: "M", description: "The battery is not replaceable." }),
        Field({
            name: "UserReplaceable", id: 0x2, conformance: "M",
            description: "The battery is replaceable by the user or customer."
        }),
        Field({
            name: "FactoryReplaceable", id: 0x3, conformance: "M",
            description: "The battery is replaceable by an authorized factory technician."
        })
    ),

    Datatype(
        { name: "BatCommonDesignationEnum", type: "enum16", xref: { document: "core", section: "11.7.6.8" } },
        Field({ name: "Unspecified", id: 0x0, conformance: "M", description: "Common type is unknown or unspecified" }),
        Field({ name: "Aaa", id: 0x1, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Aa", id: 0x2, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "C", id: 0x3, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "D", id: 0x4, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "4V5", id: 0x5, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "6V0", id: 0x6, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "9V0", id: 0x7, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "12Aa", id: 0x8, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Aaaa", id: 0x9, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A", id: 0xa, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "B", id: 0xb, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "F", id: 0xc, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "N", id: 0xd, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "No6", id: 0xe, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "SubC", id: 0xf, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A23", id: 0x10, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A27", id: 0x11, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Ba5800", id: 0x12, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Duplex", id: 0x13, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "4Sr44", id: 0x14, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "523", id: 0x15, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "531", id: 0x16, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "15V0", id: 0x17, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "22V5", id: 0x18, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "30V0", id: 0x19, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "45V0", id: 0x1a, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "67V5", id: 0x1b, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "J", id: 0x1c, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Cr123A", id: 0x1d, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Cr2", id: 0x1e, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "2Cr5", id: 0x1f, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "CrP2", id: 0x20, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "CrV3", id: 0x21, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr41", id: 0x22, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr43", id: 0x23, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr44", id: 0x24, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr45", id: 0x25, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr48", id: 0x26, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr54", id: 0x27, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr55", id: 0x28, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr57", id: 0x29, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr58", id: 0x2a, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr59", id: 0x2b, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr60", id: 0x2c, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr63", id: 0x2d, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr64", id: 0x2e, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr65", id: 0x2f, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr66", id: 0x30, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr67", id: 0x31, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr68", id: 0x32, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr69", id: 0x33, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr516", id: 0x34, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr731", id: 0x35, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Sr712", id: 0x36, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Lr932", id: 0x37, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A5", id: 0x38, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A10", id: 0x39, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A13", id: 0x3a, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A312", id: 0x3b, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "A675", id: 0x3c, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Ac41E", id: 0x3d, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "10180", id: 0x3e, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "10280", id: 0x3f, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "10440", id: 0x40, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "14250", id: 0x41, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "14430", id: 0x42, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "14500", id: 0x43, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "14650", id: 0x44, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "15270", id: 0x45, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "16340", id: 0x46, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "Rcr123A", id: 0x47, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "17500", id: 0x48, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "17670", id: 0x49, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "18350", id: 0x4a, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "18500", id: 0x4b, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "18650", id: 0x4c, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "19670", id: 0x4d, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "25500", id: 0x4e, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "26650", id: 0x4f, conformance: "M", description: "Common type is as specified" }),
        Field({ name: "32600", id: 0x50, conformance: "M", description: "Common type is as specified" })
    ),

    Datatype(
        { name: "BatApprovedChemistryEnum", type: "enum16", xref: { document: "core", section: "11.7.6.9" } },
        Field({ name: "Unspecified", id: 0x0, conformance: "M", description: "Cell chemistry is unspecified or unknown" }),
        Field({ name: "Alkaline", id: 0x1, conformance: "M", description: "Cell chemistry is alkaline" }),
        Field({
            name: "LithiumCarbonFluoride", id: 0x2, conformance: "M",
            description: "Cell chemistry is lithium carbon fluoride"
        }),
        Field({
            name: "LithiumChromiumOxide", id: 0x3, conformance: "M",
            description: "Cell chemistry is lithium chromium oxide"
        }),
        Field({
            name: "LithiumCopperOxide", id: 0x4, conformance: "M",
            description: "Cell chemistry is lithium copper oxide"
        }),
        Field({
            name: "LithiumIronDisulfide", id: 0x5, conformance: "M",
            description: "Cell chemistry is lithium iron disulfide"
        }),
        Field({
            name: "LithiumManganeseDioxide", id: 0x6, conformance: "M",
            description: "Cell chemistry is lithium manganese dioxide"
        }),
        Field({
            name: "LithiumThionylChloride", id: 0x7, conformance: "M",
            description: "Cell chemistry is lithium thionyl chloride"
        }),
        Field({ name: "Magnesium", id: 0x8, conformance: "M", description: "Cell chemistry is magnesium" }),
        Field({ name: "MercuryOxide", id: 0x9, conformance: "M", description: "Cell chemistry is mercury oxide" }),
        Field({ name: "NickelOxyhydride", id: 0xa, conformance: "M", description: "Cell chemistry is nickel oxyhydride" }),
        Field({ name: "SilverOxide", id: 0xb, conformance: "M", description: "Cell chemistry is silver oxide" }),
        Field({ name: "ZincAir", id: 0xc, conformance: "M", description: "Cell chemistry is zinc air" }),
        Field({ name: "ZincCarbon", id: 0xd, conformance: "M", description: "Cell chemistry is zinc carbon" }),
        Field({ name: "ZincChloride", id: 0xe, conformance: "M", description: "Cell chemistry is zinc chloride" }),
        Field({
            name: "ZincManganeseDioxide", id: 0xf, conformance: "M",
            description: "Cell chemistry is zinc manganese dioxide"
        }),
        Field({ name: "LeadAcid", id: 0x10, conformance: "M", description: "Cell chemistry is lead acid" }),
        Field({
            name: "LithiumCobaltOxide", id: 0x11, conformance: "M",
            description: "Cell chemistry is lithium cobalt oxide"
        }),
        Field({ name: "LithiumIon", id: 0x12, conformance: "M", description: "Cell chemistry is lithium ion" }),
        Field({ name: "LithiumIonPolymer", id: 0x13, conformance: "M", description: "Cell chemistry is lithium ion polymer" }),
        Field({
            name: "LithiumIronPhosphate", id: 0x14, conformance: "M",
            description: "Cell chemistry is lithium iron phosphate"
        }),
        Field({ name: "LithiumSulfur", id: 0x15, conformance: "M", description: "Cell chemistry is lithium sulfur" }),
        Field({ name: "LithiumTitanate", id: 0x16, conformance: "M", description: "Cell chemistry is lithium titanate" }),
        Field({ name: "NickelCadmium", id: 0x17, conformance: "M", description: "Cell chemistry is nickel cadmium" }),
        Field({ name: "NickelHydrogen", id: 0x18, conformance: "M", description: "Cell chemistry is nickel hydrogen" }),
        Field({ name: "NickelIron", id: 0x19, conformance: "M", description: "Cell chemistry is nickel iron" }),
        Field({
            name: "NickelMetalHydride", id: 0x1a, conformance: "M",
            description: "Cell chemistry is nickel metal hydride"
        }),
        Field({ name: "NickelZinc", id: 0x1b, conformance: "M", description: "Cell chemistry is nickel zinc" }),
        Field({ name: "SilverZinc", id: 0x1c, conformance: "M", description: "Cell chemistry is silver zinc" }),
        Field({ name: "SodiumIon", id: 0x1d, conformance: "M", description: "Cell chemistry is sodium ion" }),
        Field({ name: "SodiumSulfur", id: 0x1e, conformance: "M", description: "Cell chemistry is sodium sulfur" }),
        Field({ name: "ZincBromide", id: 0x1f, conformance: "M", description: "Cell chemistry is zinc bromide" }),
        Field({ name: "ZincCerium", id: 0x20, conformance: "M", description: "Cell chemistry is zinc cerium" })
    ),

    Datatype(
        { name: "BatChargeStateEnum", type: "enum8", xref: { document: "core", section: "11.7.6.10" } },
        Field({ name: "Unknown", id: 0x0, conformance: "M", description: "Unable to determine the charging state" }),
        Field({ name: "IsCharging", id: 0x1, conformance: "M", description: "The battery is charging" }),
        Field({ name: "IsAtFullCharge", id: 0x2, conformance: "M", description: "The battery is at full charge" }),
        Field({ name: "IsNotCharging", id: 0x3, conformance: "M", description: "The battery is not charging" })
    )
);

MatterDefinition.children.push(PowerSource);
