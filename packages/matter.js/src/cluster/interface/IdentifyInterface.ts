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

export interface IdentifyInterface {
    identifyTime: number;
    setIdentifyTime(value: number): Promise<void>;
    addIdentifyTimeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeIdentifyTimeListener(listener: (newValue: number, oldValue: number) => void): void;

    identifyType: number;
    addIdentifyTypeListener(listener: (newValue: number, oldValue: number) => void): void;
    removeIdentifyTypeListener(listener: (newValue: number, oldValue: number) => void): void;

    invokeIdentify(request: IdentifyRequest): Promise<void>;
    invokeTriggerEffect(request: TriggerEffectRequest): Promise<void>;
}

export const Identify:
    ClusterInterface<IdentifyInterface> =
{
    definition: IdentifyCluster
};
