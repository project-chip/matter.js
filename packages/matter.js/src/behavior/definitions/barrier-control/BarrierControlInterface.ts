/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Promises.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { BarrierControl } from "../../../cluster/definitions/BarrierControlCluster.js";

export type BarrierControlGoToPercentRequest = TypeFromSchema<typeof BarrierControl.TlvBarrierControlGoToPercentRequest>;

export namespace BarrierControlInterface {
    export interface Base {
        barrierControlGoToPercent(request: BarrierControlGoToPercentRequest): MaybePromise;
        barrierControlStop(): MaybePromise;
    }
}

export type BarrierControlInterface = { components: [{ flags: {}, methods: BarrierControlInterface.Base }] };
