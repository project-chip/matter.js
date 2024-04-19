/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ColorControl } from "../../../cluster/definitions/ColorControlCluster.js";
import { TypeFromPartialBitSchema } from "../../../schema/BitmapSchema.js";
import { OnOffServer } from "../on-off/OnOffServer.js";
import { ColorControlBehavior } from "./ColorControlBehavior.js";
import { MoveToHueRequest } from "./ColorControlInterface.js";

const ColorControlServerBase = ColorControlBehavior.with(
    ColorControl.Feature.HueSaturation,
    ColorControl.Feature.EnhancedHue,
    ColorControl.Feature.ColorLoop,
    ColorControl.Feature.Xy,
    ColorControl.Feature.ColorTemperature,
);

/**
 * This is the default server implementation of {@link ColorControlBehavior}.
 */
export class ColorControlServerLogic extends ColorControlServerBase {
    override initialize() {
        if (this.features.colorTemperature) {
            // TODO Only do this if it was not a "OTA upgrade reboot" case, no way right now to distinguish
            const startUpMiredsValue = this.state.startUpColorTemperatureMireds ?? null;
            const currentMiredsValue = this.state.colorTemperatureMireds;
            let targetMiredsValue: number | null;
            switch (startUpMiredsValue) {
                case null:
                    targetMiredsValue = currentMiredsValue;
                    break;
                default:
                    targetMiredsValue = startUpMiredsValue;
                    break;
            }
            if (targetMiredsValue !== currentMiredsValue) {
                this.state.colorMode = ColorControl.ColorMode.ColorTemperatureMireds;
                this.state.enhancedColorMode = ColorControl.EnhancedColorMode.ColorTemperatureMireds;
                this.state.colorTemperatureMireds = targetMiredsValue;
            }
        }
    }

    /**
     * Default implementation note:
     * This implementation just sets the hue value without caring about `transitionTime`, `direction` or setting the
     * `remainingTime` attribute.
     */
    override moveToHue(request: MoveToHueRequest) {
        const { optionsMask, optionsOverride, hue } = request;
        if (!this.#optionsAllowExecution(optionsMask, optionsOverride)) {
            return;
        }
        this.setColorMode(ColorControl.ColorMode.CurrentHueAndCurrentSaturation);
        this.state.currentHue = hue;
    }

    protected setColorMode(mode: ColorControl.ColorMode) {
        if (this.state.colorMode === mode) {
            return;
        }
        // TODO Convert data to the new mode
        this.state.colorMode = mode;
    }

    #calculateEffectiveOptions(
        optionsMask: TypeFromPartialBitSchema<typeof ColorControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof ColorControl.Options>,
    ): TypeFromPartialBitSchema<typeof ColorControl.Options> {
        const options = this.state.options ?? {};
        return {
            executeIfOff: optionsMask.executeIfOff ? optionsOverride.executeIfOff : options.executeIfOff,
        };
    }

    #optionsAllowExecution(
        optionsMask: TypeFromPartialBitSchema<typeof ColorControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof ColorControl.Options>,
    ) {
        const options = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        return options.executeIfOff || !this.agent.has(OnOffServer) || this.agent.get(OnOffServer).state.onOff;
    }
}

// We had turned on some more features to provide da default implementation, but export the cluster with default
// Features again.
export class ColorControlServer extends ColorControlServerLogic.with() {}
