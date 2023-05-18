/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanStateCluster, ClusterInterface } from "../index.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";

type StateChangeEvent = TypeFromSchema<typeof BooleanStateCluster.events.stateChange.schema>;

export interface Common {
    readonly stateValue: boolean;
}

export interface Client extends Common {
    addStateChangeListener(listener: (event: StateChangeEvent) => void): void;
    removeStateChangeListener(listener: (event: StateChangeEvent) => void): void;
}

export interface Server extends Common {
    triggerStateChange(): void;
}

export const BooleanState: ClusterInterface<Client, Server> = {
    definition: BooleanStateCluster
}
