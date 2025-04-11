/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModeBaseUtils } from "#behaviors/mode-base";
import { DeviceEnergyManagementMode } from "#clusters/device-energy-management-mode";
import { ModeBase } from "#clusters/mode-base";
import { ImplementationError } from "#general";
import { DeviceEnergyManagementModeBehavior } from "./DeviceEnergyManagementModeBehavior.js";

/**
 * This is the default server implementation of {@link DeviceEnergyManagementModeBehavior}.
 */
export class DeviceEnergyManagementModeServer extends DeviceEnergyManagementModeBehavior {
    override initialize() {
        this.#assertSupportedModes();
        ModeBaseUtils.assertMode(this.state.supportedModes, this.state.currentMode);
        this.reactTo(this.events.currentMode$Changing, this.#assertMode);
    }

    #assertSupportedModes() {
        ModeBaseUtils.assertSupportedModes(this.state.supportedModes);

        if (
            // Check that at least one of NoOptimization, LocalOptimization or GridOptimization is present as tags
            ![
                DeviceEnergyManagementMode.ModeTag.NoOptimization,
                DeviceEnergyManagementMode.ModeTag.LocalOptimization,
                DeviceEnergyManagementMode.ModeTag.GridOptimization,
            ].every(modeTag =>
                this.state.supportedModes.some(({ modeTags }) => modeTags.some(({ value }) => value === modeTag)),
            ) ||
            // Check that the combination of DeviceOptimization, LocalOptimization or GridOptimization is not present with NoOptimization
            ![
                DeviceEnergyManagementMode.ModeTag.DeviceOptimization,
                DeviceEnergyManagementMode.ModeTag.LocalOptimization,
                DeviceEnergyManagementMode.ModeTag.GridOptimization,
            ].every(
                modeTag =>
                    !this.state.supportedModes.some(
                        ({ modeTags }) =>
                            modeTags.some(({ value }) => value === modeTag) &&
                            modeTags.some(({ value }) => value === DeviceEnergyManagementMode.ModeTag.NoOptimization),
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
