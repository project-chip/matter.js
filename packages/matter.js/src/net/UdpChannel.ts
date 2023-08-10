/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Listener } from "../common/TransportInterface.js";
import { ByteArray } from "../util/ByteArray.js";

export interface UdpChannelOptions {
    listeningPort?: number;
    type: "udp4" | "udp6";
    listeningAddress?: string;
    netInterface?: string;
}

export interface UdpChannel {
    onData(listener: (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void): Listener;
    send(host: string, port: number, data: ByteArray): Promise<void>;
    close(): void;
}
