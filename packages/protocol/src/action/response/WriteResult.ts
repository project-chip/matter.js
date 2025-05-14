/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Write } from "#action/request/Write.js";
import type { AttributeId, AttributePath, ClusterId, EndpointNumber, NodeId, StatusCode } from "#types";

export type WriteResult<T extends Write> = Promise<
    T extends { suppressResponse: true } ? void : WriteResult.AttributeStatus[]
>;

export namespace WriteResult {
    export interface ConcreteAttributePath extends AttributePath {
        nodeId?: NodeId;
        endpointId: EndpointNumber;
        clusterId: ClusterId;
        attributeId: AttributeId;
        listIndex?: number | null;
    }

    export interface AttributeStatus {
        kind: "attr-status";
        path: ConcreteAttributePath;
        status: StatusCode;
        clusterStatus?: number;
    }
}
