/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "./Channel";
import { ByteArray } from "@project-chip/matter.js";

export interface NetListener {
    close(): void;
}

export interface NetInterface {
    openChannel(address: string, port: number): Promise<Channel<ByteArray>>;
    onData(listener: (socket: Channel<ByteArray>, data: ByteArray) => void): NetListener;
}
