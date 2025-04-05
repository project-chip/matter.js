/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModeBaseUtils } from "#behaviors/mode-base";
import { ModeBase } from "#clusters/mode-base";
import { WaterHeaterMode } from "#clusters/water-heater-mode";
import { ImplementationError } from "@matter/general";
import { WaterHeaterModeBehavior } from "./WaterHeaterModeBehavior.js";

/**
 * This is the default server implementation of {@link WaterHeaterModeBehavior}.
 */
export class WaterHeaterModeServer extends WaterHeaterModeBehavior {
    override initialize() {
        this.#assertSupportedModes();
        ModeBaseUtils.assertMode(this.state.supportedModes, this.state.currentMode);
        this.reactTo(this.events.currentMode$Changing, this.#assertMode);
    }

    #assertSupportedModes() {
        ModeBaseUtils.assertSupportedModes(this.state.supportedModes);

        if (
            // Check that at least one of manual and Off is present as tags
            ![WaterHeaterMode.ModeTag.Manual, WaterHeaterMode.ModeTag.Off].every(modeTag =>
                this.state.supportedModes.some(({ modeTags }) => modeTags.some(({ value }) => value === modeTag)),
            ) ||
            // Check that the entries with Off, Manual, or Timed tag SHALL
            // NOT also include an additional instance of any one of these tag types
            ![WaterHeaterMode.ModeTag.Off, WaterHeaterMode.ModeTag.Manual, WaterHeaterMode.ModeTag.Timed].every(
                modeTag =>
                    !this.state.supportedModes.some(
                        ({ modeTags }) => modeTags.some(({ value }) => value === modeTag) && modeTags.length > 1,
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
