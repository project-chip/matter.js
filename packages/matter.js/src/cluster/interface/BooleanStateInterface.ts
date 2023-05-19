/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanStateCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type StateChangeEvent = TypeFromSchema<typeof BooleanStateCluster.events.stateChange.schema>;

export module BooleanState {
    export type State = {
        readonly stateValue: boolean;
    }

    export interface Common {
    }

    export interface Client extends Common {
        addStateChangeListener(listener: (event: StateChangeEvent) => void): void;
        removeStateChangeListener(listener: (event: StateChangeEvent) => void): void;
        triggerStateChange(): void;
    }
}

export const BooleanState: ClusterInterface<BooleanState.State, BooleanState.Client, BooleanState.Common> = {
    definition: BooleanStateCluster
}
