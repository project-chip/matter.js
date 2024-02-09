/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataModelPath } from "../../endpoint/DataModelPath.js";
import { StatusCode } from "../../protocol/interaction/StatusCode.js";
import { MaybePromise } from "../../util/Promises.js";
import { Val } from "../state/Val.js";

/**
 * This is an instrumentation interface that allows for recording of attribute I/O, commands, events and state
 * mutation.
 * 
 * Implemented as abstract class to allow for lookup by type in Environment.
 */
export abstract class ActionTracer {
    abstract record(action: ActionTracer.Action): MaybePromise<void>;
}

export namespace ActionTracer {
    export type ActionPath = (string | number)[];

    export enum ActionType {
        Initialize = "initialize",
        Read = "read",
        Write = "write",
        Invoke = "invoke",
        Destroy = "destroy",
    }

    export interface Mutation {
        path: ActionPath;
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
