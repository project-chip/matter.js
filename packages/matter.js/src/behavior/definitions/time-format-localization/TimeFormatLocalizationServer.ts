/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimeFormatLocalization } from "../../../cluster/definitions/TimeFormatLocalizationCluster.js";
import { Endpoint } from "../../../endpoint/Endpoint.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { Val } from "../../state/Val.js";
import { ValueSupervisor } from "../../supervision/ValueSupervisor.js";
import { TimeFormatLocalizationBehavior } from "./TimeFormatLocalizationBehavior.js";

const TimeFormatLocalizationServerBase = TimeFormatLocalizationBehavior.with(
    TimeFormatLocalization.Feature.CalendarFormat,
);

/**
 * This is the default server implementation of {@link TimeFormatLocalizationBehavior}.
 */
export class TimeFormatLocalizationServerLogic extends TimeFormatLocalizationServerBase {
    protected declare internal: TimeFormatLocalizationServerLogic.Internal;
    declare state: TimeFormatLocalizationServerLogic.State;

    override initialize() {
        // But this should be just the defaults, not the persisted values?
        const defaults = this.endpoint.behaviors.defaultsFor(TimeFormatLocalizationServerBase);
        if (defaults !== undefined) {
            this.internal.activeCalendarType =
                defaults.activeCalendarType as TimeFormatLocalization.CalendarType | null;
        }
    }
}

export namespace TimeFormatLocalizationServerLogic {
    export class Internal {
        activeCalendarType: TimeFormatLocalization.CalendarType | null = null; // TODO Does persistence work via server?
    }

    export class State extends TimeFormatLocalizationServerBase.State {
        [Val.properties](endpoint: Endpoint, _session: ValueSupervisor.Session) {
            return {
                set activeCalendarType(calendarType: TimeFormatLocalization.CalendarType | null) {
                    if (calendarType !== null) {
                        const serverState = endpoint.stateOf(TimeFormatLocalizationServerBase);
                        if (!serverState.supportedCalendarTypes.includes(calendarType)) {
                            throw new StatusResponseError(
                                `Unsupported calendarType: ${calendarType}`,
                                StatusCode.ConstraintError,
                            );
                        }
                    }
                    const serverInternal = endpoint.behaviors.internalsOf(TimeFormatLocalizationServerLogic);
                    serverInternal.activeCalendarType = calendarType;
                },

                get activeCalendarType() {
                    const serverInternal = endpoint.behaviors.internalsOf(TimeFormatLocalizationServerLogic);
                    return serverInternal.activeCalendarType;
                },
            };
        }
    }
}

export const TimeFormatLocalizationServer = TimeFormatLocalizationServerLogic.with(); // Disable features again
