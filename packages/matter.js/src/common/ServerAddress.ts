/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
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
