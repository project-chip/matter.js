/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "#environment/Environment.js";
import { Environmental } from "#environment/Environmental.js";
import { BasicSet } from "#util/Set.js";
import { Channel, ChannelType } from "./Channel.js";

/**
 * A TransportInterface is a generic interface for sending and receiving data on an established incoming connection.
 * It cannot open new connections.
 */
export interface TransportInterface {
    onData(listener: (socket: Channel<Uint8Array>, data: Uint8Array) => void): TransportInterface.Listener;
    close(): Promise<void>;
    supports(type: ChannelType, address?: string): boolean;
}

export namespace TransportInterface {
    export interface Listener {
        close(): Promise<void>;
    }
}

/**
 * A collection of {@link TransportInterfaces} managed as a unit.
 */
export class TransportInterfaceSet<T extends TransportInterface = TransportInterface> extends BasicSet<T> {
    constructor(...initialInterfaces: T[]) {
        super(...initialInterfaces);
    }

    static [Environmental.create](env: Environment) {
        const instance = new TransportInterfaceSet();
        env.set(TransportInterfaceSet, instance);
        return instance;
    }

    /**
     * Closes all interfaces.
     */
    async close() {
        for (const transportInterface of this) {
            await transportInterface.close();
        }
    }

    /**
     * Obtain an interface capable of routing an address.
     */
    interfaceFor(type: ChannelType, address?: string) {
        return this.find(transportInterface => transportInterface.supports(type, address));
    }

    /**
     * Obtain an interface of specific type.
     */
    hasInterfaceFor(type: ChannelType, address?: string) {
        return this.interfaceFor(type, address) !== undefined;
    }
}
