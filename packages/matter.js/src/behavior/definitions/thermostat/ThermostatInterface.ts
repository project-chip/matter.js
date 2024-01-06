/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { Thermostat } from "../../../cluster/definitions/ThermostatCluster.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export type SetpointRaiseLowerRequest = TypeFromSchema<typeof Thermostat.TlvSetpointRaiseLowerRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export type SetWeeklyScheduleRequest = TypeFromSchema<typeof Thermostat.TlvSetWeeklyScheduleRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export type GetWeeklyScheduleRequest = TypeFromSchema<typeof Thermostat.TlvGetWeeklyScheduleRequest>;

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
 */
export type GetWeeklyScheduleResponse = TypeFromSchema<typeof Thermostat.TlvGetWeeklyScheduleResponse>;

export namespace ThermostatInterface {
    export interface Base {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        setpointRaiseLower(request: SetpointRaiseLowerRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        getRelayStatusLog(): MaybePromise<void>;
    }

    export interface ScheduleConfiguration {
        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        setWeeklySchedule(request: SetWeeklyScheduleRequest): MaybePromise<void>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        getWeeklySchedule(request: GetWeeklyScheduleRequest): MaybePromise<GetWeeklyScheduleResponse>;

        /**
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.3.8
         */
        clearWeeklySchedule(): MaybePromise<void>;
    }
}

export type ThermostatInterface = {
    components: [
        { flags: {}, methods: ThermostatInterface.Base },
        { flags: { scheduleConfiguration: true }, methods: ThermostatInterface.ScheduleConfiguration }
    ]
};
