/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffLightingCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type OffWithEffectRequest = TypeFromSchema<typeof OnOffLightingCluster.commands.offWithEffect.requestSchema>;
type OnWithTimedOffRequest = TypeFromSchema<typeof OnOffLightingCluster.commands.onWithTimedOff.requestSchema>;

export type State = {
    readonly onOff: boolean;
    readonly globalSceneControl: boolean;
    readonly onTime: number | undefined;
    readonly offWaitTime: number | undefined;
    readonly startUpOnOff: number | undefined;
}

export interface Common {
    invokeOff(): Promise<void>;
    invokeOn(): Promise<void>;
    invokeToggle(): Promise<void>;
    invokeOffWithEffect(request: OffWithEffectRequest): Promise<void>;
    invokeOnWithRecallGlobalScene(): Promise<void>;
    invokeOnWithTimedOff(request: OnWithTimedOffRequest): Promise<void>;
}

export const OnOffLighting: ClusterInterface<State, Common, Common> = {
    definition: OnOffLightingCluster
}
