/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccupancySensingServer } from "#behaviors/occupancy-sensing";
import { OccupancySensing } from "#clusters/occupancy-sensing";
import { MockEndpoint } from "../../endpoint/mock-endpoint.js";

describe("OccupancySensingServer", () => {
    it("instantiates", async () => {
        await MockEndpoint.createWith(
            OccupancySensingServer.set({ occupancySensorType: OccupancySensing.OccupancySensorType.Pir }),
        );
    });
});
