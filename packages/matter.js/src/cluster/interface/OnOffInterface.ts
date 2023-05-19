/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OnOffCluster, ClusterInterface } from "../index.js";


export module OnOff {
    export type State = {
        readonly onOff: boolean;
    }

    export interface Common {
        invokeOff(): Promise<void>;
        invokeOn(): Promise<void>;
        invokeToggle(): Promise<void>;
    }
}

export const OnOff: ClusterInterface<OnOff.State, OnOff.Common, OnOff.Common> = {
    definition: OnOffCluster
}
