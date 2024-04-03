/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimeFormatLocalization } from "../../../cluster/definitions/TimeFormatLocalizationCluster.js";
import { StatusCode, StatusResponseError } from "../../../protocol/interaction/StatusCode.js";
import { TimeFormatLocalizationBehavior } from "./TimeFormatLocalizationBehavior.js";

/**
 * This is the default server implementation of {@link TimeFormatLocalizationBehavior}.
 */
export class TimeFormatLocalizationServerLogic extends TimeFormatLocalizationBehavior.with(
    TimeFormatLocalization.Feature.CalendarFormat,
) {
    override initialize() {
        if (this.events.activeCalendarType$Change !== undefined) {
            this.reactTo(this.events.activeCalendarType$Change, this.#validateActiveCalendarType, { offline: true });
        }
    }

    #validateActiveCalendarType(calendarType: TimeFormatLocalization.CalendarType | null) {
        if (calendarType === null) {
            return;
        }
        if (!this.state.supportedCalendarTypes.includes(calendarType)) {
            throw new StatusResponseError(`Unsupported calendarType: ${calendarType}`, StatusCode.ConstraintError);
        }
    }
}

export const TimeFormatLocalizationServer = TimeFormatLocalizationServerLogic.with();
