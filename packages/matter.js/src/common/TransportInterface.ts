/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";
import { Channel } from "./Channel.js";

export interface Listener {
    close(): Promise<void>;
}

/**
 * A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
 * It can not open new connections.
 */
export interface TransportInterface {
    onData(listener: (socket: Channel<ByteArray>, data: ByteArray) => void): Listener;
    close(): Promise<void>;
}
