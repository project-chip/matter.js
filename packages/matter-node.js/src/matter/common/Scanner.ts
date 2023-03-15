/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "../fabric/Fabric";
import { NodeId } from "./NodeId";

export type MatterServer = {
    ip: string,
    port: number,
};

export interface Scanner {
    findDevice(fabric: Fabric, nodeId: NodeId): Promise<MatterServer | undefined>;
    close(): void;
}
