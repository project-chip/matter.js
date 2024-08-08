/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Listener } from "../common/TransportInterface.js";
import { ByteArray } from "../util/ByteArray.js";

/** @see {@link MatterSpecification.v12.Core} § 4.4.4 */
export const MAX_UDP_MESSAGE_SIZE = 1280 - 48; // 48 bytes IP and UDP header size for IPv6

export interface UdpChannelOptions {
    listeningPort?: number;
    type: "udp4" | "udp6";
    listeningAddress?: string;
    netInterface?: string;
    membershipAddresses?: string[];
}

export interface UdpChannel {
    maxPayloadSize: number;
    onData(listener: (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void): Listener;
    send(host: string, port: number, data: ByteArray): Promise<void>;
    close(): void;
    get port(): number;
}
