/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "./Channel.js";
import { ByteArray } from "../util/ByteArray.js";

export interface Listener {
    close(): void;
}

export interface TransportInterface {
    onData(listener: (socket: Channel<ByteArray>, data: ByteArray) => void): Listener;
}
