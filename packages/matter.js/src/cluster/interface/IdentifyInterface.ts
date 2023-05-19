/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IdentifyCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type IdentifyRequest = TypeFromSchema<typeof IdentifyCluster.commands.identify.requestSchema>;
type TriggerEffectRequest = TypeFromSchema<typeof IdentifyCluster.commands.triggerEffect.requestSchema>;

export module Identify {
    export type State = {
        readonly identifyTime: number;
        readonly identifyType: number;
    }

    export interface Common {
        invokeIdentify(request: IdentifyRequest): Promise<void>;
        invokeTriggerEffect(request: TriggerEffectRequest): Promise<void>;
    }
}

export const Identify: ClusterInterface<Identify.State, Identify.Common, Identify.Common> = {
    definition: IdentifyCluster
}
