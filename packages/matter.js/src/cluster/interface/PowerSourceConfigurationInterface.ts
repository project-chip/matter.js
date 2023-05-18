/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceConfigurationCluster, ClusterInterface } from "../index.js";


export interface Common {
    readonly sources: number[];
}

export const PowerSourceConfiguration: ClusterInterface<Common, Common> = {
    definition: PowerSourceConfigurationCluster
}
