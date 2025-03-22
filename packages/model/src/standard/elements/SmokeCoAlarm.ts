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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const SmokeCoAlarm = Cluster(
    {
        name: "SmokeCoAlarm", id: 0x5c, classification: "application", pics: "SMOKECO",
        details: "This cluster provides an interface for observing and managing the state of smoke and CO alarms.",
        xref: { document: "cluster", section: "2.11" }
    },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap", xref: { document: "cluster", section: "2.11.4" } },
        Field({
            name: "SMOKE", conformance: "O.a+", constraint: "0", description: "SmokeAlarm",
            details: "Supports Smoke alarm"
        }),
        Field({ name: "CO", conformance: "O.a+", constraint: "1", description: "CoAlarm", details: "Supports CO alarm" })
    ),

    Attribute({
        name: "ExpressedState", id: 0x0, type: "ExpressedStateEnum", access: "R V", conformance: "M",
        quality: "N",

        details: "Indicates the visibly- and audibly-expressed state of the alarm. When multiple alarm conditions are " +
            "being reflected in the server, this attribute shall indicate the condition with the highest " +
            "priority. Priority order of conditions is determined by the manufacturer and shall be supplied as a " +
            "part of certification procedure. If the value of ExpressedState is not Normal, the attribute " +
            "corresponding to the value shall NOT be Normal. For example, if the ExpressedState is set to " +
            "SmokeAlarm, the value of the SmokeState will indicate the severity of the alarm (Warning or " +
            "Critical). Clients SHOULD also read the other attributes to be aware of further alarm conditions " +
            "beyond the one indicated in ExpressedState." +
            "\n" +
            "Visible expression is typically a LED light pattern. Audible expression is a horn or speaker " +
            "pattern. Audible expression shall BE suppressed if the DeviceMuted attribute is supported and set to " +
            "Muted.",

        xref: { document: "cluster", section: "2.11.6.1" }
    }),

    Attribute({
        name: "SmokeState", id: 0x1, type: "AlarmStateEnum", access: "R V", conformance: "SMOKE",
        quality: "N",
        details: "Indicates whether the device’s smoke sensor is currently triggering a smoke alarm.",
        xref: { document: "cluster", section: "2.11.6.2" }
    }),

    Attribute({
        name: "CoState", id: 0x2, type: "AlarmStateEnum", access: "R V", conformance: "CO", quality: "N",
        details: "Indicates whether the device’s CO sensor is currently triggering a CO alarm.",
        xref: { document: "cluster", section: "2.11.6.3" }
    }),

    Attribute({
        name: "BatteryAlert", id: 0x3, type: "AlarmStateEnum", access: "R V", conformance: "M",
        quality: "N",
        details: "Indicates whether the power resource fault detection mechanism is currently triggered at the device. " +
            "If the detection mechanism is triggered, this attribute shall be set to Warning or Critical, " +
            "otherwise it shall be set to Normal. The battery state shall also be reflected in the Power Source " +
            "cluster representing the device’s battery using the appropriate supported attributes and events.",
        xref: { document: "cluster", section: "2.11.6.4" }
    }),

    Attribute({
        name: "DeviceMuted", id: 0x4, type: "MuteStateEnum", access: "R V", conformance: "O", quality: "N",
        details: "Indicates the whether the audible expression of the device is currently muted. Audible expression is " +
            "typically a horn or speaker pattern.",
        xref: { document: "cluster", section: "2.11.6.5" }
    }),

    Attribute({
        name: "TestInProgress", id: 0x5, type: "bool", access: "R V", conformance: "M",
        details: "Indicates whether the device self-test is currently activated. If the device self- test is " +
            "activated, this attribute shall be set to True, otherwise it shall be set to False.",
        xref: { document: "cluster", section: "2.11.6.6" }
    }),

    Attribute({
        name: "HardwareFaultAlert", id: 0x6, type: "bool", access: "R V", conformance: "M", quality: "N",
        details: "Indicates whether the hardware fault detection mechanism is currently triggered. If the detection " +
            "mechanism is triggered, this attribute shall be set to True, otherwise it shall be set to False.",
        xref: { document: "cluster", section: "2.11.6.7" }
    }),

    Attribute({
        name: "EndOfServiceAlert", id: 0x7, type: "EndOfServiceEnum", access: "R V", conformance: "M",
        quality: "N",
        details: "Indicates whether the end-of-service has been triggered at the device. This attribute shall be set " +
            "to Expired when the device reaches the end-of-service.",
        xref: { document: "cluster", section: "2.11.6.8" }
    }),

    Attribute({
        name: "InterconnectSmokeAlarm", id: 0x8, type: "AlarmStateEnum", access: "R V", conformance: "O",
        details: "Indicates whether the interconnected smoke alarm is currently triggering by branching devices. When " +
            "the interconnected smoke alarm is being triggered, this attribute shall be set to Warning or " +
            "Critical, otherwise it shall be set to Normal.",
        xref: { document: "cluster", section: "2.11.6.9" }
    }),

    Attribute({
        name: "InterconnectCoAlarm", id: 0x9, type: "AlarmStateEnum", access: "R V", conformance: "O",
        details: "Indicates whether the interconnected CO alarm is currently triggering by branching devices. When the " +
            "interconnected CO alarm is being triggered, this attribute shall be set to Warning or Critical, " +
            "otherwise it shall be set to Normal.",
        xref: { document: "cluster", section: "2.11.6.10" }
    }),

    Attribute({
        name: "ContaminationState", id: 0xa, type: "ContaminationStateEnum", access: "R V",
        conformance: "[SMOKE]",
        details: "Indicates the contamination level of the smoke sensor.",
        xref: { document: "cluster", section: "2.11.6.11" }
    }),

    Attribute({
        name: "SmokeSensitivityLevel", id: 0xb, type: "SensitivityEnum", access: "RW VM",
        conformance: "[SMOKE]",
        details: "Indicates the sensitivity level of the smoke sensor configured on the device.",
        xref: { document: "cluster", section: "2.11.6.12" }
    }),

    Attribute({
        name: "ExpiryDate", id: 0xc, type: "epoch-s", access: "R V", conformance: "O", quality: "F",
        details: "Indicates the date when the device reaches its stated expiry date. After the ExpiryDate has been " +
            "reached, the EndOfServiceAlert shall start to be triggered. To account for better customer " +
            "experience across time zones, the EndOfServiceAlert may be delayed by up to 24 hours after the " +
            "ExpiryDate. Similarly, clients may delay any actions based on the ExpiryDate by up to 24 hours to " +
            "best align with the local time zone.",
        xref: { document: "cluster", section: "2.11.6.13" }
    }),

    Event(
        {
            name: "SmokeAlarm", id: 0x0, access: "V", conformance: "SMOKE", priority: "critical",
            details: "This event shall be generated when SmokeState attribute changes to either Warning or Critical state.",
            xref: { document: "cluster", section: "2.11.8.1" }
        },
        Field({
            name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
            details: "This field shall indicate the current value of the SmokeState attribute.",
            xref: { document: "cluster", section: "2.11.8.1.1" }
        })
    ),

    Event(
        {
            name: "CoAlarm", id: 0x1, access: "V", conformance: "CO", priority: "critical",
            details: "This event shall be generated when COState attribute changes to either Warning or Critical state.",
            xref: { document: "cluster", section: "2.11.8.2" }
        },
        Field({
            name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
            details: "This field shall indicate the current value of the COState attribute.",
            xref: { document: "cluster", section: "2.11.8.2.1" }
        })
    ),

    Event(
        {
            name: "LowBattery", id: 0x2, access: "V", conformance: "M", priority: "info",
            details: "This event shall be generated when BatteryAlert attribute changes to either Warning or Critical " +
                "state.",
            xref: { document: "cluster", section: "2.11.8.3" }
        },

        Field({
            name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
            details: "This field shall indicate the current value of the BatteryAlert attribute.",
            xref: { document: "cluster", section: "2.11.8.3.1" }
        })
    ),

    Event({
        name: "HardwareFault", id: 0x3, access: "V", conformance: "M", priority: "info",
        details: "This event shall be generated when the device detects a hardware fault that leads to setting " +
            "HardwareFaultAlert to True.",
        xref: { document: "cluster", section: "2.11.8.4" }
    }),

    Event({
        name: "EndOfService", id: 0x4, access: "V", conformance: "M", priority: "info",
        details: "This event shall be generated when the EndOfServiceAlert is set to Expired.",
        xref: { document: "cluster", section: "2.11.8.5" }
    }),

    Event({
        name: "SelfTestComplete", id: 0x5, access: "V", conformance: "M", priority: "info",
        details: "This event shall be generated when the SelfTest completes, and the attribute TestInProgress changes " +
            "to False.",
        xref: { document: "cluster", section: "2.11.8.6" }
    }),

    Event({
        name: "AlarmMuted", id: 0x6, access: "V", conformance: "O", priority: "info",
        details: "This event shall be generated when the DeviceMuted attribute changes to Muted.",
        xref: { document: "cluster", section: "2.11.8.7" }
    }),
    Event({
        name: "MuteEnded", id: 0x7, access: "V", conformance: "O", priority: "info",
        details: "This event shall be generated when DeviceMuted attribute changes to NotMuted.",
        xref: { document: "cluster", section: "2.11.8.8" }
    }),

    Event(
        {
            name: "InterconnectSmokeAlarm", id: 0x8, access: "V", conformance: "[SMOKE]", priority: "critical",
            details: "This event shall be generated when the device hosting the server receives a smoke alarm from an " +
                "interconnected sensor.",
            xref: { document: "cluster", section: "2.11.8.9" }
        },

        Field({
            name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
            details: "This field shall indicate the current value of the InterconnectSmokeAlarm attribute.",
            xref: { document: "cluster", section: "2.11.8.9.1" }
        })
    ),

    Event(
        {
            name: "InterconnectCoAlarm", id: 0x9, access: "V", conformance: "[CO]", priority: "critical",
            details: "This event shall be generated when the device hosting the server receives a CO alarm from an " +
                "interconnected sensor.",
            xref: { document: "cluster", section: "2.11.8.10" }
        },

        Field({
            name: "AlarmSeverityLevel", id: 0x0, type: "AlarmStateEnum", conformance: "M",
            details: "This field shall indicate the current value of the InterconnectCOAlarm attribute.",
            xref: { document: "cluster", section: "2.11.8.10.1" }
        })
    ),

    Event({
        name: "AllClear", id: 0xa, access: "V", conformance: "M", priority: "info",
        details: "This event shall be generated when ExpressedState attribute returns to Normal state.",
        xref: { document: "cluster", section: "2.11.8.11" }
    }),

    Command({
        name: "SelfTestRequest", id: 0x0, access: "O", conformance: "O", direction: "request",
        response: "status",

        details: "This command shall initiate a device self-test. The return status shall indicate whether the test " +
            "was successfully initiated. Only one SelfTestRequest may be processed at a time. When the value of " +
            "the ExpressedState attribute is any of SmokeAlarm, COAlarm, Testing, InterconnectSmoke, " +
            "InterconnectCO, the device shall NOT execute the self-test, and shall return status code BUSY." +
            "\n" +
            "Upon successful acceptance of SelfTestRequest, the TestInProgress attribute shall be set to True and " +
            "ExpressedState attribute shall be set to Testing. Any faults identified during the test shall be " +
            "reflected in the appropriate attributes and events. Upon completion of the self test procedure, the " +
            "SelfTestComplete event shall be generated, the TestInProgress attribute shall be set to False and " +
            "ExpressedState attribute shall be updated to reflect the current state of the server.",

        xref: { document: "cluster", section: "2.11.7.1" }
    }),

    Datatype(
        { name: "AlarmStateEnum", type: "enum8", xref: { document: "cluster", section: "2.11.5.1" } },
        Field({
            name: "Normal", id: 0x0, conformance: "M", description: "Nominal state, the device is not alarming",
            details: "This value shall indicate that this alarm is not alarming.",
            xref: { document: "cluster", section: "2.11.5.1.1" }
        }),

        Field({
            name: "Warning", id: 0x1, conformance: "O", description: "Warning state",
            details: "This value shall indicate that this alarm is in a warning state. Alarms in this state SHOULD be " +
                "subject to being muted via physical interaction.",
            xref: { document: "cluster", section: "2.11.5.1.2" }
        }),

        Field({
            name: "Critical", id: 0x2, conformance: "M", description: "Critical state",
            details: "This value shall indicate that this alarm is in a critical state. Alarms in this state shall NOT be " +
                "subject to being muted via physical interaction.",
            xref: { document: "cluster", section: "2.11.5.1.3" }
        })
    ),

    Datatype(
        { name: "SensitivityEnum", type: "enum8", xref: { document: "cluster", section: "2.11.5.2" } },
        Field({ name: "High", id: 0x0, conformance: "O", description: "High sensitivity" }),
        Field({ name: "Standard", id: 0x1, conformance: "M", description: "Standard Sensitivity" }),
        Field({ name: "Low", id: 0x2, conformance: "O", description: "Low sensitivity" })
    ),

    Datatype(
        {
            name: "ExpressedStateEnum", type: "enum8",
            details: "This value shall indicate that this alarm is not alarming.",
            xref: { document: "cluster", section: "2.11.5.3" }
        },
        Field({ name: "Normal", id: 0x0, conformance: "M", description: "Nominal state, the device is not alarming" }),

        Field({
            name: "SmokeAlarm", id: 0x1, conformance: "SMOKE", description: "Smoke Alarm state",
            details: "This value shall indicate that this alarm is currently expressing visual indication of Smoke Alarm. " +
                "This value shall indicate that the alarm is currently expressing audible indication of Smoke Alarm " +
                "unless the DeviceMuted attribute is supported and set to Muted.",
            xref: { document: "cluster", section: "2.11.5.3.2" }
        }),

        Field({
            name: "CoAlarm", id: 0x2, conformance: "CO", description: "CO Alarm state",
            details: "This value shall indicate that this alarm is currently expressing visual indication of CO Alarm. " +
                "This value shall indicate that the alarm is currently expressing audible indication of CO Alarm " +
                "unless the DeviceMuted attribute is supported and set to Muted.",
            xref: { document: "cluster", section: "2.11.5.3.3" }
        }),

        Field({
            name: "BatteryAlert", id: 0x3, conformance: "M", description: "Battery Alert State",
            details: "This value shall indicate that this alarm is currently expressing visual indication of Critical Low " +
                "Battery. This value shall indicate that the alarm is currently expressing audible indication of " +
                "Critical Low Battery unless the DeviceMuted attribute is supported and set to Muted.",
            xref: { document: "cluster", section: "2.11.5.3.4" }
        }),

        Field({
            name: "Testing", id: 0x4, conformance: "M", description: "Test in Progress",
            details: "This value shall indicate that this alarm is currently expressing visual and audible indication of " +
                "SelfTest.",
            xref: { document: "cluster", section: "2.11.5.3.5" }
        }),

        Field({
            name: "HardwareFault", id: 0x5, conformance: "M", description: "Hardware Fault Alert State",
            details: "This value shall indicate that this alarm is currently expressing visual indication of Hardware " +
                "Fault. This value shall indicate that the alarm is currently expressing audible indication of " +
                "Hardware Fault unless the DeviceMuted attribute is supported and set to Muted.",
            xref: { document: "cluster", section: "2.11.5.3.6" }
        }),

        Field({
            name: "EndOfService", id: 0x6, conformance: "M", description: "End of Service Alert State",
            details: "This value shall indicate that this alarm is currently expressing visual indication of End Of " +
                "Service. This value shall indicate that the alarm is currently expressing audible indication of End " +
                "of Service unless the DeviceMuted attribute is supported and set to Muted.",
            xref: { document: "cluster", section: "2.11.5.3.7" }
        }),

        Field({
            name: "InterconnectSmoke", id: 0x7, conformance: "O",
            description: "Interconnected Smoke Alarm State",
            details: "This value shall indicate that this alarm is currently expressing visual indication of Smoke Alarm " +
                "caused by Interconnect. This value shall indicate that the alarm is currently expressing audible " +
                "indication of Smoke Alarm caused by Interconnect unless the DeviceMuted attribute is supported and " +
                "set to Muted.",
            xref: { document: "cluster", section: "2.11.5.3.8" }
        }),

        Field({
            name: "InterconnectCo", id: 0x8, conformance: "O", description: "Interconnected CO Alarm State",
            details: "This value shall indicate that this alarm is currently expressing visual indication of CO Alarm " +
                "caused by Interconnect. This value shall indicate that the alarm is currently expressing audible " +
                "indication of CO Alarm caused by Interconnect unless the DeviceMuted attribute is supported and set " +
                "to Muted.",
            xref: { document: "cluster", section: "2.11.5.3.9" }
        })
    ),

    Datatype(
        { name: "MuteStateEnum", type: "enum8", xref: { document: "cluster", section: "2.11.5.4" } },
        Field({
            name: "NotMuted", id: 0x0, conformance: "M", description: "Not Muted",
            details: "This value shall indicate that the device is not muted.",
            xref: { document: "cluster", section: "2.11.5.4.1" }
        }),
        Field({
            name: "Muted", id: 0x1, conformance: "M", description: "Muted",
            details: "This value shall indicate that the device is muted.",
            xref: { document: "cluster", section: "2.11.5.4.2" }
        })
    ),

    Datatype(
        { name: "EndOfServiceEnum", type: "enum8", xref: { document: "cluster", section: "2.11.5.5" } },

        Field({
            name: "Normal", id: 0x0, conformance: "M", description: "Device has not expired",
            details: "This value shall indicate that the device has not yet reached its end of service, and does not need " +
                "to be imminently replaced.",
            xref: { document: "cluster", section: "2.11.5.5.2" }
        }),

        Field({
            name: "Expired", id: 0x1, conformance: "M", description: "Device has reached its end of service",
            details: "This value shall indicate that the device has reached its end of service, and needs to be replaced.",
            xref: { document: "cluster", section: "2.11.5.5.1" }
        })
    ),

    Datatype(
        {
            name: "ContaminationStateEnum", type: "enum8",
            details: "This value shall indicate that the smoke sensor has nominal contamination levels, no customer action " +
                "is required.",
            xref: { document: "cluster", section: "2.11.5.6" }
        },

        Field({ name: "Normal", id: 0x0, conformance: "M", description: "Nominal state, the sensor is not contaminated" }),

        Field({
            name: "Low", id: 0x1, conformance: "O", description: "Low contamination",
            details: "This value shall indicate that the smoke sensor has detectable contamination levels, but the " +
                "contamination is too low to cause a visible or audible alarm.",
            xref: { document: "cluster", section: "2.11.5.6.2" }
        }),

        Field({
            name: "Warning", id: 0x2, conformance: "O", description: "Warning state",
            details: "This value shall indicate that the smoke sensor has contamination levels in a warning state. At this " +
                "level, the contamination may cause a visible or audible alarm. User intervention is suggested.",
            xref: { document: "cluster", section: "2.11.5.6.3" }
        }),

        Field({
            name: "Critical", id: 0x3, conformance: "M",
            description: "Critical state, will cause nuisance alarms",
            details: "This value shall indicate that the smoke sensor has contamination levels in a critical state. At " +
                "this level, the contamination should cause a visible or audible alarm. User intervention is " +
                "required. Critical contamination of the sensor shall also be reflected as a HardwareFault.",
            xref: { document: "cluster", section: "2.11.5.6.4" }
        })
    )
);

MatterDefinition.children.push(SmokeCoAlarm);
