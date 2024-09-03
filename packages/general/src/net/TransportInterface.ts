/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "./Channel.js";

/**
 * A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
 * It cannot open new connections.
 */
export interface TransportInterface {
    onData(listener: (socket: Channel<Uint8Array>, data: Uint8Array) => void): TransportInterface.Listener;
    close(): Promise<void>;
}

export namespace TransportInterface {
    export interface Listener {
        close(): Promise<void>;
    }
}
