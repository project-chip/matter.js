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

namespace Identify {
    export type State = {
        identifyTime: number;
        identifyType: number;
    }

    export interface Client {
        sendIdentify(request: IdentifyRequest): Promise<void>;
        sendTriggerEffect(request: TriggerEffectRequest): Promise<void>;
    }

    export interface Server {
        onIdentify(request: IdentifyRequest): Promise<void>;
        onTriggerEffect(request: TriggerEffectRequest): Promise<void>;
    }
}

export const Identify: ClusterInterface<Identify.State, Identify.Client, Identify.Server> = {
    definition: IdentifyCluster
}
