/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "../fabric/Fabric";
import { NodeId } from "./NodeId";

export type MatterServer = {
    ip: string,
    port: number,
};

export interface Scanner {
    findDevice(fabric: Fabric, nodeId: NodeId, timeoutSeconds?: number): Promise<MatterServer | undefined>;
    close(): void;
}
