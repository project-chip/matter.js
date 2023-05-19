/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RelativeHumidityCluster, ClusterInterface } from "../index.js";


export module RelativeHumidity {
    export type State = {
        readonly measuredValue: number | undefined;
        readonly minMeasuredValue: number | undefined;
        readonly maxMeasuredValue: number | undefined;
        readonly tolerance?: number;
    }

    export interface Common {
    }
}

export const RelativeHumidity: ClusterInterface<RelativeHumidity.State, RelativeHumidity.Common, RelativeHumidity.Common> = {
    definition: RelativeHumidityCluster
}
