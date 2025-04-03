/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SmokeCoAlarmDt = DeviceType(
    {
        name: "SmokeCoAlarm", id: 0x76, category: "Sensor", classification: "simple",

        details: "A Smoke CO Alarm device is capable of sensing smoke, carbon monoxide or both. It is capable of " +
            "issuing a visual and audible alert to indicate elevated concentration of smoke or carbon monoxide." +
            "\n" +
            "Smoke CO Alarms are capable of monitoring themselves and issuing visual and audible alerts for " +
            "hardware faults, critical low battery conditions, and end of service. Optionally, some of the " +
            "audible alerts can be temporarily silenced. Smoke CO Alarms are capable of performing a self-test " +
            "which performs a diagnostic of the primary sensor and issuing a cycle of the audible and visual life " +
            "safety alarm indications." +
            "\n" +
            "Some smoke alarms may be capable of adjusting sensitivity. Smoke CO Alarm may have the ability to " +
            "detect and report humidity levels, temperature levels, and contamination levels.",

        xref: { document: "device", section: "7.9" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 118, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.9.5" }
    }),
    Requirement({
        name: "Groups", id: 0x4, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.9.5" }
    }),
    Requirement({
        name: "SmokeCoAlarm", id: 0x5c, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.9.5" }
    }),
    Requirement({
        name: "RelativeHumidityMeasurement", id: 0x405, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.9.5" }
    }),
    Requirement({
        name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.9.5" }
    }),
    Requirement({
        name: "CarbonMonoxideConcentrationMeasurement", id: 0x40c, conformance: "O",
        element: "serverCluster",
        xref: { document: "device", section: "7.9.5" }
    })
);

MatterDefinition.children.push(SmokeCoAlarmDt);
