/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { LocalizationConfigurationBehavior } from "./LocalizationConfigurationBehavior.js";

/**
 * This is the default server implementation of {@link LocalizationConfigurationBehavior}.
 */
export class LocalizationConfigurationServer extends LocalizationConfigurationBehavior {
    override initialize() {
        this.reactTo(this.events.activeLocale$Change, this.#validateActiveLocale, { offline: true });
    }

    #validateActiveLocale(locale: string) {
        if (!this.state.supportedLocales.includes(locale)) {
            throw new StatusResponseError(`Unsupported locale: ${locale}`, StatusCode.ConstraintError);
        }
    }
}
