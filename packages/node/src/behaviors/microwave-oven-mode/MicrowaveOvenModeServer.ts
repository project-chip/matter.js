/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ModeBaseUtils } from "#behaviors/mode-base";
import { MicrowaveOvenModeBehavior } from "./MicrowaveOvenModeBehavior.js";

/**
 * This is the default server implementation of {@link MicrowaveOvenModeBehavior}.
 */
export class MicrowaveOvenModeServer extends MicrowaveOvenModeBehavior {
    override initialize() {
        ModeBaseUtils.assertSupportedModes(this.state.supportedModes);
        ModeBaseUtils.assertMode(this.state.supportedModes, this.state.currentMode);
        this.reactTo(this.events.currentMode$Changing, this.#assertMode);
    }

    #assertMode(newMode: number) {
        ModeBaseUtils.assertMode(this.state.supportedModes, newMode);
    }
}
