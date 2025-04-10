/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModeBaseUtils } from "#behaviors/mode-base";
import { EnergyEvseMode } from "#clusters/energy-evse-mode";
import { ModeBase } from "#clusters/mode-base";
import { ImplementationError } from "@matter/general";
import { EnergyEvseModeBehavior } from "./EnergyEvseModeBehavior.js";

/**
 * This is the default server implementation of {@link EnergyEvseModeBehavior}.
 */
export class EnergyEvseModeServer extends EnergyEvseModeBehavior {
    override initialize() {
        this.#assertSupportedModes();
        ModeBaseUtils.assertMode(this.state.supportedModes, this.state.currentMode);
        this.reactTo(this.events.currentMode$Changing, this.#assertMode);
    }

    #assertSupportedModes() {
        ModeBaseUtils.assertSupportedModes(this.state.supportedModes);

        // Check if the supported modes contain at least one mode with Manual mode tag, but not together with
        // TimeOfUse or SolarCharging
        if (
            !this.state.supportedModes.some(
                ({ modeTags }) =>
                    modeTags.some(({ value }) => value === EnergyEvseMode.ModeTag.Manual) &&
                    !modeTags.some(
                        ({ value }) =>
                            value === EnergyEvseMode.ModeTag.TimeOfUse ||
                            value === EnergyEvseMode.ModeTag.SolarCharging,
                    ),
            )
        ) {
            throw new ImplementationError("Provided supportedModes invalid.");
        }
    }

    #assertMode(newMode: number) {
        ModeBaseUtils.assertMode(this.state.supportedModes, newMode);
    }

    override changeToMode({ newMode }: ModeBase.ChangeToModeRequest): ModeBase.ChangeToModeResponse {
        const result = ModeBaseUtils.assertModeChange(this.state.supportedModes, this.state.currentMode, newMode);
        if (result.status === ModeBase.ModeChangeStatus.Success) {
            this.state.currentMode = newMode;
        }
        return result;
    }
}
