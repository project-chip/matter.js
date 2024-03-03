/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../../spec/Specifications.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { OnOff } from "../../../cluster/definitions/OnOffCluster.js";

/**
 * The OffWithEffect command allows devices to be turned off using enhanced ways of fading.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
 */
export type OffWithEffectRequest = TypeFromSchema<typeof OnOff.TlvOffWithEffectRequest>;

/**
 * The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off duration so
 * that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received during this time, are
 * prevented from turning the devices back on. Further
 *
 * OnWithTimedOff commands received while the server is turned on, will update the period that the device is turned on.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
 */
export type OnWithTimedOffRequest = TypeFromSchema<typeof OnOff.TlvOnWithTimedOffRequest>;

export namespace OnOffInterface {
    export interface Base {
        /**
         * This command does not have any data fields.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.1
         */
        off(): MaybePromise;

        /**
         * This command does not have any data fields.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.2
         */
        on(): MaybePromise;

        /**
         * This command does not have any data fields.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.3
         */
        toggle(): MaybePromise;
    }

    export interface LevelControlForLighting {
        /**
         * The OffWithEffect command allows devices to be turned off using enhanced ways of fading.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.4
         */
        offWithEffect(request: OffWithEffectRequest): MaybePromise;

        /**
         * The OnWithRecallGlobalScene command allows the recall of the settings when the device was turned off.
         *
         * The OnWithRecallGlobalScene command shall have no parameters.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.5
         */
        onWithRecallGlobalScene(): MaybePromise;

        /**
         * The OnWithTimedOff command allows devices to be turned on for a specific duration with a guarded off
         * duration so that SHOULD the device be subsequently turned off, further OnWithTimedOff commands, received
         * during this time, are prevented from turning the devices back on. Further
         *
         * OnWithTimedOff commands received while the server is turned on, will update the period that the device is
         * turned on.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.5.7.6
         */
        onWithTimedOff(request: OnWithTimedOffRequest): MaybePromise;
    }
}

export type OnOffInterface = {
    components: [
        { flags: {}, methods: OnOffInterface.Base },
        { flags: { levelControlForLighting: true }, methods: OnOffInterface.LevelControlForLighting }
    ]
};
