/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffCluster, ClusterInterface } from "../index.js";

export module OnOff {
    export type State = {
        onOff: boolean;
    }

    export interface Client {
        sendOff(): Promise<void>;
        sendOn(): Promise<void>;
        sendToggle(): Promise<void>;
    }

    export interface Server {
        onOff(): Promise<void>;
        onOn(): Promise<void>;
        onToggle(): Promise<void>;
    }
}

export const OnOff: ClusterInterface<OnOff.State, OnOff.Client, OnOff.Server> = {
    definition: OnOffCluster
}
