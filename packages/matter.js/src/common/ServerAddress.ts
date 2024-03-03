/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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

export type ServerAddress = ServerAddressIp | ServerAddressBle;

export function serverAddressToString(address: ServerAddress): string {
    return address.type === "udp" ? `udp://${address.ip}:${address.port}` : `ble://${address.peripheralAddress}`;
}
