/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export type ServerAddressIp = {
    type: "udp";
    ip: string;
    port: number;
};

export type ServerAddressBle = {
    type: "ble";
    peripheralAddress: string;
};

export interface Lifespan {
    /** Beginning of lifespan (system time in milliseconds) */
    discoveredAt: number;

    /** Length of lifespan, if known (milliseconds) */
    ttl: number;
}

export type ServerAddress = (ServerAddressIp | ServerAddressBle) & Partial<Lifespan>;

export function serverAddressToString(address: ServerAddress): string {
    return address.type === "udp" ? `udp://[${address.ip}]:${address.port}` : `ble://${address.peripheralAddress}`;
}
