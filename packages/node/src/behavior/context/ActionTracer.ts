/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModelPath } from "#model";
import { Val } from "#protocol";
import { StatusCode } from "#types";

/**
 * This is an instrumentation interface that allows for recording of attribute I/O, commands, events and state
 * mutation.
 *
 * Implemented as abstract class to allow for lookup by type in Environment.
 */
export abstract class ActionTracer {
    abstract record(action: ActionTracer.Action): void;
}

export namespace ActionTracer {
    export enum ActionType {
        Initialize = "initialize",
        Read = "read",
        Write = "write",
        Invoke = "invoke",
        Destroy = "destroy",
    }

    export interface Mutation {
        path: DataModelPath;
        values: Record<string, unknown>;
    }

    export interface Action {
        type: ActionType;
        path?: DataModelPath;
        status?: StatusCode;
        input?: Val;
        mutations?: Mutation[];
        output?: Val;
    }
}
