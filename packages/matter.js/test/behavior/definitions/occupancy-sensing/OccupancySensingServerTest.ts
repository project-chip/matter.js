/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OccupancySensingServer } from "../../../../src/behavior/definitions/occupancy-sensing/OccupancySensingServer.js";
import { OccupancySensing } from "../../../../src/cluster/definitions/OccupancySensingCluster.js";
import { MockEndpoint } from "../../../endpoint/mock-endpoint.js";

describe("OccupancySensingServer", () => {
    it("instantiates", async () => {
        await MockEndpoint.createWith(
            OccupancySensingServer.set({ occupancySensorType: OccupancySensing.OccupancySensorType.Pir }),
        );
    });
});
