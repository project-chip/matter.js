/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Diagnostic } from "#log/Diagnostic.js";
import { Interval } from "#time/Interval.js";
import { Seconds } from "#time/TimeUnit.js";

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

    /** Length of lifespan, if known (seconds) */
    ttl: Interval;
}

export type ServerAddress = (ServerAddressIp | ServerAddressBle) & Partial<Lifespan>;

export function ServerAddress(definition: ServerAddress.Definition) {
    return {
        discoveredAt: undefined,
        ...definition,
        ttl: Seconds(definition.ttl),
    } as ServerAddress;
}

export namespace ServerAddress {
    export function urlFor(address: ServerAddress): string {
        return address.type === "udp" ? `udp://[${address.ip}]:${address.port}` : `ble://${address.peripheralAddress}`;
    }

    export function diagnosticFor(address: ServerAddress) {
        const diagnostic = Array<unknown>();

        if (address.type === "udp") {
            diagnostic.push("udp://", Diagnostic.strong(address.ip), ":", address.port);
        } else {
            diagnostic.push("ble://", Diagnostic.strong(address.peripheralAddress));
        }

        if ("ttl" in address && typeof address.ttl === "number") {
            diagnostic.push(" ttl ", Interval.format(address.ttl));
        }

        return Diagnostic.squash(...diagnostic);
    }

    export function definitionOf(address: ServerAddress): Definition {
        return address;
    }

    export interface Definition extends Omit<ServerAddress, "ttl"> {
        ttl?: Interval;
    }
}
