/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffCluster, ClusterInterface } from "../index.js";

export interface OnOffInterface {
    onOff: boolean;
    addOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void): void;
    removeOnOffListener(listener: (newValue: boolean, oldValue: boolean) => void): void;

    sendOff(request: any): Promise<void>;
    sendOn(request: any): Promise<void>;
    sendToggle(request: any): Promise<void>;
}

export const OnOff:
    ClusterInterface<OnOffInterface> =
{
    definition: OnOffCluster
};
