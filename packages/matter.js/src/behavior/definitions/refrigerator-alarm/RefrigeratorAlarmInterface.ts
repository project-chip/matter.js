/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { AlarmBase } from "../../../cluster/definitions/AlarmBaseCluster.js";

export namespace RefrigeratorAlarmInterface {
    export interface Reset {
        /**
         * This command resets active and latched alarms (if possible). Any generated Notify event shall contain fields
         * that represent the state of the server after the command has been processed.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.15.7.1
         */
        reset(request: AlarmBase.ResetRequest): MaybePromise;
    }
}

export type RefrigeratorAlarmInterface = {
    components: [{ flags: { reset: true }, methods: RefrigeratorAlarmInterface.Reset }]
};
