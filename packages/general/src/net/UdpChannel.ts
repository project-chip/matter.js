/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChannelType } from "./Channel.js";
import { TransportInterface } from "./TransportInterface.js";

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
    onData(
        listener: (netInterface: string | undefined, peerAddress: string, peerPort: number, data: Uint8Array) => void,
    ): TransportInterface.Listener;
    send(host: string, port: number, data: Uint8Array): Promise<void>;
    close(): Promise<void>;
    get port(): number;
    supports(type: ChannelType, address?: string): boolean;
}
