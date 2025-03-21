/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DescriptorServer } from "#behaviors/descriptor";
import { ClusterType } from "@matter/types";
import { PowerSource } from "@matter/types/clusters/power-source";
import { PowerSourceBehavior } from "./PowerSourceBehavior.js";

const PowerSourceLevelBase = PowerSourceBehavior.with(PowerSource.Feature.Battery, PowerSource.Feature.Rechargeable);

/**
 * This is the default server implementation of {@link PowerSourceBehavior}.
 */
export class PowerSourceServerLogic extends PowerSourceLevelBase {
    override async initialize() {
        (await this.agent.load(DescriptorServer)).addDeviceTypes("PowerSource");

        // According to specs changes to these attributes should not occur more often than every 10 seconds
        if (this.events.batPercentRemaining$Changed !== undefined) {
            this.events.batPercentRemaining$Changed.quiet.config = {
                minimumEmitIntervalMs: 10_000,
            };
        }
        if (this.events.batTimeRemaining$Changed !== undefined) {
            this.events.batTimeRemaining$Changed.quiet.config = {
                minimumEmitIntervalMs: 10_000,
            };
        }
        if (this.events.batTimeToFullCharge$Changed !== undefined) {
            this.events.batTimeToFullCharge$Changed.quiet.config = {
                minimumEmitIntervalMs: 10_000,
            };
        }
    }
}

// We had turned on some more features to provide the default implementation, but export the cluster with default
// Features again.
export class PowerSourceServer extends PowerSourceServerLogic.for(ClusterType(PowerSource.Base)) {}
