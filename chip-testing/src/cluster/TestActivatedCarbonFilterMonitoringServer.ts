/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ActivatedCarbonFilterMonitoringServer } from "@project-chip/matter.js/behavior/definitions/activated-carbon-filter-monitoring";
import { ResourceMonitoring } from "@project-chip/matter.js/cluster";

const TestActivatedCarbonFilterMonitoringServerBase = ActivatedCarbonFilterMonitoringServer.with(
    "Condition",
    // "Warning", // Do not use here to test both cases, the Activated Carbon Filter test will include it
    "ReplacementProductList",
);

export class TestActivatedCarbonFilterMonitoringServer extends TestActivatedCarbonFilterMonitoringServerBase {
    override resetCondition(): void {
        this.state.condition = 100;
        this.state.changeIndication = ResourceMonitoring.ChangeIndication.Ok;
    }
}
