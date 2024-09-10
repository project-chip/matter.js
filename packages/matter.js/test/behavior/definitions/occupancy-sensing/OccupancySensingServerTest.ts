/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccupancySensing } from "@project-chip/matter.js-types";
import { OccupancySensingServer } from "../../../../src/behavior/definitions/occupancy-sensing/OccupancySensingServer.js";
import { MockEndpoint } from "../../../endpoint/mock-endpoint.js";

describe("OccupancySensingServer", () => {
    it("instantiates", async () => {
        await MockEndpoint.createWith(
            OccupancySensingServer.set({ occupancySensorType: OccupancySensing.OccupancySensorType.Pir }),
        );
    });
});
