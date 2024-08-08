/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { HepaFilterMonitoringServer } from "@project-chip/matter.js/behavior/definitions/hepa-filter-monitoring";
import { ResourceMonitoring } from "@project-chip/matter.js/cluster";

const TestHepaFilterMonitoringServerBase = HepaFilterMonitoringServer.with(
    "Condition",
    "Warning",
    "ReplacementProductList",
);

export class TestHepaFilterMonitoringServer extends TestHepaFilterMonitoringServerBase {
    override resetCondition(): void {
        this.state.condition = 100;
        this.state.changeIndication = ResourceMonitoring.ChangeIndication.Ok;
    }
}
