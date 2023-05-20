/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanStateCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type StateChangeEvent = TypeFromSchema<typeof BooleanStateCluster.events.stateChange.schema>;

namespace BooleanState {
    export type State = {
        stateValue: boolean;
    }

    export interface Client {
        addStateChangeListener(listener: (event: StateChangeEvent) => void): void;
        removeStateChangeListener(listener: (event: StateChangeEvent) => void): void;
        triggerStateChange(): void;
    }
}

export const BooleanState: ClusterInterface<BooleanState.State, BooleanState.Client, {}> = {
    definition: BooleanStateCluster
}
