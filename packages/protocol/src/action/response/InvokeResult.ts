/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Invoke } from "#action/request/Invoke.js";
import type { ClusterId, CommandId, CommandPath, EndpointNumber, NodeId, StatusCode, TlvStream } from "#types";

export type InvokeResult<T extends Invoke> = T extends { suppressResponse: true }
    ? Promise<void>
    : AsyncIterable<InvokeResult.Chunk>;

export namespace InvokeResult {
    export type Chunk = Iterable<Data>;

    export type Data = CommandStatus | CommandResponse;

    export interface ConcreteCommandPath extends CommandPath {
        /** Exists here but not on the encoding level, so only allowed to be empty or "the target node" */
        nodeId?: NodeId;

        endpointId: EndpointNumber;
        clusterId: ClusterId;
        commandId: CommandId;
    }

    export interface CommandStatus {
        kind: "cmd-status";
        path: ConcreteCommandPath;
        commandRef?: number;
        status: StatusCode;
        clusterStatus?: number;
    }

    export interface CommandResponse {
        kind: "cmd-response";
        path: ConcreteCommandPath;
        commandRef?: number;
        data: TlvStream;
    }
}
