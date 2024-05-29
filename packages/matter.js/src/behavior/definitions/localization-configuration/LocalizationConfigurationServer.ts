/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { LocalizationConfigurationBehavior } from "./LocalizationConfigurationBehavior.js";

/**
 * This is the default server implementation of {@link LocalizationConfigurationBehavior}.
 */
export class LocalizationConfigurationServer extends LocalizationConfigurationBehavior {
    override initialize() {
        if (this.state.activeLocale === undefined) {
            this.state.activeLocale = this.detectedLocale;
        }
        if (this.state.supportedLocales === undefined) {
            this.state.supportedLocales = [this.state.activeLocale];
        }
    }

    protected get detectedLocale() {
        return Intl.DateTimeFormat().resolvedOptions().locale;
    }
}
