/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Listener } from "../common/TransportInterface.js";
import { ByteArray } from "../util/ByteArray.js";

export interface UdpChannelOptions {
    /**
     * UDP channel type.  "udp4" and "udp6" mean IPv4 and IPv6 respectively.  "udp" is dual-mode IPv4/IPv6.
     * {@link listeningAddress} in this case must be undefined or "::".
     */
    type: "udp" | "udp4" | "udp6";

    /**
     * The port to listen on.  undefined or 0 directs the operating system to select an open port.
     */
    listeningPort?: number;

    /**
     * The address to listen on, either a hostname or IP address in correct format based on {@link type}.
     */
    listeningAddress?: string;

    /**
     * If true the socket is opened non-exclusively.
     */
    reuseAddress?: boolean;

    /**
     * The network interface, required for multicast.
     */
    netInterface?: string;

    membershipAddresses?: string[];
}

export interface UdpChannel {
    onData(listener: (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void): Listener;
    send(host: string, port: number, data: ByteArray): Promise<void>;
    close(): void;
    get port(): number;
}
