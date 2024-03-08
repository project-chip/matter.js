/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { TimeSync } from "../../../cluster/definitions/TimeSyncCluster.js";
import { MatterCoreSpecificationV1_1 } from "../../../spec/Specifications.js";

/**
 * This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time source,
 * it may send a Granularity of NoTimeGranularity.
 *
 * Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the
 * command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime attribute if
 * its current Granularity is NoTimeGranularity.
 *
 * If the time is updated, the server shall also update its Granularity attribute as appropriate
 *
 * server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall also update
 * its last known good UTC time.
 *
 * If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If it opts
 * to not update its time, it shall fail the command with a cluster specific Status Code of TimeNotAccepted.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
 */
export type SetUtcTimeRequest = TypeFromSchema<typeof TimeSync.TlvSetUtcTimeRequest>;

export namespace TimeSyncInterface {
    export interface Base {
        /**
         * This command may be issued by Administrator to set the time. If the Commissioner does not have a valid time
         * source, it may send a Granularity of NoTimeGranularity.
         *
         * Upon receipt of this command, the server may update its UTCTime attribute to match the time specified in the
         * command, if the stated Granularity and TimeSource are acceptable. The server shall update its UTCTime
         * attribute if its current Granularity is NoTimeGranularity.
         *
         * If the time is updated, the server shall also update its Granularity attribute as appropriate
         *
         * server does not plan to maintain time). It shall also update its TimeSource attribute to Admin. It shall
         * also update its last known good UTC time.
         *
         * If the server updates its UTCTime attribute, it shall accept the command with a status code of SUCCESS. If
         * it opts to not update its time, it shall fail the command with a cluster specific Status Code of
         * TimeNotAccepted.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
         */
        setUtcTime(request: SetUtcTimeRequest): MaybePromise;
    }
}

export type TimeSyncInterface = { components: [{ flags: {}, methods: TimeSyncInterface.Base }] };
