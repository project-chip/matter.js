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

export interface OnOffLightingInterface {
    onOff: boolean;
    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    globalSceneControl: boolean;
    addGlobalSceneControlListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeGlobalSceneControlListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    onTime: number | undefined;
    setOnTime(value: number | undefined): Promise<void>;
    addOnTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeOnTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    offWaitTime: number | undefined;
    setOffWaitTime(value: number | undefined): Promise<void>;
    addOffWaitTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeOffWaitTimeListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    startUpOnOff: number | undefined;
    setStartUpOnOff(value: number | undefined): Promise<void>;
    addStartUpOnOffListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;
    removeStartUpOnOffListener(listener: (newValue: number | undefined, oldValue: number | undefined) => void): void;

    sendOff(): Promise<void>;
    sendOn(): Promise<void>;
    sendToggle(): Promise<void>;
    sendOffWithEffect(request: OffWithEffectRequest): Promise<void>;
    sendOnWithRecallGlobalScene(): Promise<void>;
    sendOnWithTimedOff(request: OnWithTimedOffRequest): Promise<void>;
}

export const OnOffLighting:
    ClusterInterface<OnOffLightingInterface> =
{
    definition: OnOffLightingCluster
};
