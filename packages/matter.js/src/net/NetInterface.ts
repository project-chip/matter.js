/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "./Channel.js";
import { ByteArray } from "../util/ByteArray.js";

export interface NetListener {
    close(): void;
}

export interface NetInterface {
    openChannel(address: string, port: number): Promise<Channel<ByteArray>>;
    onData(listener: (socket: Channel<ByteArray>, data: ByteArray) => void): NetListener;
}
