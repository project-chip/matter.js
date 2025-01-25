/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const AirQualitySensorDt = DeviceType(
    {
        name: "AirQualitySensor", id: 0x2c, category: "Sensor", classification: "simple",
        details: "This defines conformance for the Air Quality Sensor device type." +
            "\n" +
            "An air quality sensor is a device designed to monitor and measure various parameters related to the " +
            "quality of ambient air in indoor or outdoor environments.",
        xref: { document: "device", section: "7.10" }
    },

    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 44, revision: 1 } ], element: "attribute" })
    ),
    Requirement({
        name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "AirQuality", id: 0x5b, conformance: "M", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "TemperatureMeasurement", id: 0x402, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "RelativeHumidityMeasurement", id: 0x405, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "CarbonMonoxideConcentrationMeasurement", id: 0x40c, conformance: "O",
        element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "CarbonDioxideConcentrationMeasurement", id: 0x40d, conformance: "O",
        element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "NitrogenDioxideConcentrationMeasurement", id: 0x413, conformance: "O",
        element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "OzoneConcentrationMeasurement", id: 0x415, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "FormaldehydeConcentrationMeasurement", id: 0x42b, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "Pm1ConcentrationMeasurement", id: 0x42c, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "Pm25ConcentrationMeasurement", id: 0x42a, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "Pm10ConcentrationMeasurement", id: 0x42d, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "RadonConcentrationMeasurement", id: 0x42f, conformance: "O", element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    }),
    Requirement({
        name: "TotalVolatileOrganicCompoundsConcentrationMeasurement", id: 0x42e, conformance: "O",
        element: "serverCluster",
        xref: { document: "device", section: "7.10.4" }
    })
);

MatterDefinition.children.push(AirQualitySensorDt);
