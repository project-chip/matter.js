/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ClusterId, CommandId, CommandPath, EndpointNumber, StatusCode, TlvStream } from "#types";

export type InvokeResult = AsyncIterable<InvokeResult.Chunk>;

export namespace InvokeResult {
    export type Chunk = Iterable<Data>;

    export type Data = CommandStatus | CommandResponse;

    export interface ConcreteCommandPath extends CommandPath {
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
