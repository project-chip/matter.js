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
export class PowerSourceBaseServer extends PowerSourceLevelBase {
    override async initialize() {
        (await this.agent.load(DescriptorServer)).addDeviceTypes("PowerSource");

        // According to specs changes to these attributes should not occur more often than every 10 seconds
        [
            this.events.batPercentRemaining$Changed,
            this.events.batTimeRemaining$Changed,
            this.events.batTimeToFullCharge$Changed,
        ].forEach(event => {
            if (event !== undefined) {
                event.quiet.minimumEmitIntervalMs = 10_000;
            }
        });
    }
}

// We had turned on some more features to provide the default implementation, but export the cluster with default
// Features again.
export class PowerSourceServer extends PowerSourceBaseServer.for(ClusterType(PowerSource.Base)) {}
