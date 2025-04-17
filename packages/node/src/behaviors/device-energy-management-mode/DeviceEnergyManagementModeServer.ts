/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ModeUtils } from "#behaviors/mode-base";
import { DeviceEnergyManagementMode } from "#clusters/device-energy-management-mode";
import { ModeBase } from "#clusters/mode-base";
import { ImplementationError, MaybePromise } from "#general";
import { DeviceEnergyManagementModeBehavior } from "./DeviceEnergyManagementModeBehavior.js";

/**
 * This is the default server implementation of {@link DeviceEnergyManagementModeBehavior}.
 */
export class DeviceEnergyManagementModeServer extends DeviceEnergyManagementModeBehavior {
    override initialize(): MaybePromise {
        this.#assertSupportedModes();
        ModeUtils.assertMode(this.state.supportedModes, this.state.currentMode);
        this.reactTo(this.events.currentMode$Changing, this.#assertMode);
    }

    #assertSupportedModes() {
        ModeUtils.assertSupportedModes(this.state.supportedModes);

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
        ModeUtils.assertMode(this.state.supportedModes, newMode);
    }

    /**
     * This command is used to change device modes.
     * On receipt of this command the device shall respond with a ChangeToModeResponse command.
     *
     * The default implementation automatically validates the new mode against the supported modes and returns an error
     * if the new mode is not supported. If the new mode is supported, the current mode is updated to the new mode.
     *
     * If you need to override this with extra validation logic you can use
     * `ModeUtils.assertModeChange(this.state.supportedModes, this.state.currentMode, newMode)`
     * to just execute the validation and add your own validation requirements before or after these standard checks.
     * The above method returns a `ModeBase.ChangeToModeResponse` object that you can use to return the result of the
     * validation.
     */
    override changeToMode({ newMode }: ModeBase.ChangeToModeRequest): MaybePromise<ModeBase.ChangeToModeResponse> {
        const result = ModeUtils.assertModeChange(this.state.supportedModes, this.state.currentMode, newMode);
        if (result.status === ModeBase.ModeChangeStatus.Success) {
            this.state.currentMode = newMode;
        }
        return result;
    }
}
