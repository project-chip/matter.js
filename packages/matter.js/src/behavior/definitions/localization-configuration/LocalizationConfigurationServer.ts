/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Endpoint } from "../../../endpoint/Endpoint.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { Val } from "../../state/Val.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { LocalizationConfigurationBehavior } from "./LocalizationConfigurationBehavior.js";

/**
 * This is the default server implementation of {@link LocalizationConfigurationBehavior}.
 */
export class LocalizationConfigurationServer extends LocalizationConfigurationBehavior {
    protected declare internal: LocalizationConfigurationServer.Internal;
    declare state: LocalizationConfigurationServer.State;

    override initialize() {
        // But this should be just the defaults, not the persisted values?
        const defaults = this.endpoint.behaviors.defaultsFor(LocalizationConfigurationServer);
        if (defaults !== undefined) {
            this.internal.activeLocale = defaults.activeLocale as string;
        }
    }
}

export namespace LocalizationConfigurationServer {
    export class Internal {
        activeLocale: string = ""; // TODO Hacky because formally invalid value, Does persistence work via server?
    }

    export class State extends LocalizationConfigurationBehavior.State {
        [Val.properties](endpoint: Endpoint, _session: ValueSupervisor.Session) {
            return {
                set activeLocale(locale: string) {
                    const serverState = endpoint.stateOf(LocalizationConfigurationServer);
                    if (!serverState.supportedLocales.includes(locale)) {
                        throw new StatusResponseError(`Unsupported locale: ${locale}`, StatusCode.ConstraintError);
                    }
                    const serverInternal = endpoint.behaviors.internalsOf(LocalizationConfigurationServer);
                    serverInternal.activeLocale = locale;
                },

                get activeLocale() {
                    const serverInternal = endpoint.behaviors.internalsOf(LocalizationConfigurationServer);
                    return serverInternal.activeLocale;
                },
            };
        }
    }
}
