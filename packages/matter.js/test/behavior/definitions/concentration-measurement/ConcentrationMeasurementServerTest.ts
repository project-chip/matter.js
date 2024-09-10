/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConcentrationMeasurement, FanControl } from "@project-chip/matter.js-types";
import { CarbonDioxideConcentrationMeasurementServer } from "../../../../src/behavior/definitions/carbon-dioxide-concentration-measurement/CarbonDioxideConcentrationMeasurementServer.js";
import { CarbonMonoxideConcentrationMeasurementServer } from "../../../../src/behavior/definitions/carbon-monoxide-concentration-measurement/CarbonMonoxideConcentrationMeasurementServer.js";
import { AirPurifierDevice } from "../../../../src/endpoint/definitions/device/AirPurifierDevice.js";
import { Endpoint } from "../../../../src/endpoint/Endpoint.js";
import { MockServerNode } from "../../../node/mock-server-node.js";

const fanControl = { fanModeSequence: FanControl.FanModeSequence.OffHigh, percentCurrent: 50 };

describe("ConcentrationMeasurementServer", () => {
    it("supports numeric measurement mode", async () => {
        const node = await MockServerNode.create();
        const Co2MeasurementServer = CarbonDioxideConcentrationMeasurementServer.with("NumericMeasurement");

        const PurifierDevice = AirPurifierDevice.with(Co2MeasurementServer);
        const purifier = new Endpoint(PurifierDevice, {
            fanControl,
            carbonDioxideConcentrationMeasurement: {
                measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
                measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
            },
        });

        await node.add(purifier);

        await purifier.set({
            carbonDioxideConcentrationMeasurement: {
                measuredValue: 4,
            },
        });
    });

    it("supports level indication mode", async () => {
        const node = await MockServerNode.create();
        const CoMeasurementServer = CarbonDioxideConcentrationMeasurementServer.with("LevelIndication");

        const PurifierDevice = AirPurifierDevice.with(CoMeasurementServer);
        const purifier = new Endpoint(PurifierDevice, {
            fanControl,
            carbonDioxideConcentrationMeasurement: {
                measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
            },
        });

        await node.add(purifier);

        await purifier.set({
            carbonDioxideConcentrationMeasurement: {
                levelValue: ConcentrationMeasurement.LevelValue.High,
            },
        });
    });

    it("supports one value mode with sibling with different value mode", async () => {
        const node = await MockServerNode.create();
        const Co2MeasurementServer = CarbonDioxideConcentrationMeasurementServer.with("NumericMeasurement");
        const CoMeasurementServer = CarbonMonoxideConcentrationMeasurementServer.with("LevelIndication");

        const PurifierDevice = AirPurifierDevice.with(Co2MeasurementServer, CoMeasurementServer);
        const purifier = new Endpoint(PurifierDevice, {
            fanControl,

            carbonDioxideConcentrationMeasurement: {
                measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
                measurementUnit: ConcentrationMeasurement.MeasurementUnit.Ppm,
            },

            carbonMonoxideConcentrationMeasurement: {
                measurementMedium: ConcentrationMeasurement.MeasurementMedium.Air,
            },
        });

        await node.add(purifier);

        await purifier.set({
            carbonDioxideConcentrationMeasurement: {
                measuredValue: 4,
            },

            carbonMonoxideConcentrationMeasurement: {
                levelValue: ConcentrationMeasurement.LevelValue.High,
            },
        });
    });
});
