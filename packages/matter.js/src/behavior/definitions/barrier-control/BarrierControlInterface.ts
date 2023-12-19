/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MaybePromise } from "../../../util/Type.js";
import { TypeFromSchema } from "../../../tlv/TlvSchema.js";
import { BarrierControl } from "../../../cluster/definitions/BarrierControlCluster.js";

export type BarrierControlGoToPercentRequest = TypeFromSchema<typeof BarrierControl.TlvBarrierControlGoToPercentRequest>;

export namespace BarrierControlInterface {
    export interface Base {
        barrierControlGoToPercent(request: BarrierControlGoToPercentRequest): MaybePromise<void>;
        barrierControlStop(): MaybePromise<void>;
    }
}

export type BarrierControlInterface = { components: [{ flags: {}, methods: BarrierControlInterface.Base }] };
