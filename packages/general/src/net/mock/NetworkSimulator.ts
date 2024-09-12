/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "../../log/Logger.js";
import { singleton } from "../../util/Singleton.js";
import { TransportInterface } from "../TransportInterface.js";

const logger = Logger.get("SimulatedNetwork");

export class NetworkSimulator {
    static get = singleton(() => new NetworkSimulator());

    private readonly listenersMap = new Map<string, Array<NetworkSimulator.Listener>>();

    onUdpData(
        host: string | undefined,
        port: number,
        listener: NetworkSimulator.Listener,
    ): TransportInterface.Listener {
        const ipPort = `${host ?? "*"}:${port}`;
        let listeners = this.listenersMap.get(ipPort);
        if (listeners === undefined) {
            listeners = new Array<NetworkSimulator.Listener>();
            this.listenersMap.set(ipPort, listeners);
        }
        listeners.push(listener);
        return {
            close: async () => this.offUdpData(host, port, listener),
        };
    }

    private offUdpData(host: string | undefined, port: number, listenerToRemove: NetworkSimulator.Listener) {
        const ipPort = `${host ?? "*"}:${port}`;
        const listeners = this.listenersMap.get(ipPort);
        if (listeners === undefined) return;
        const newListeners = listeners.filter(listener => listener !== listenerToRemove);
        if (newListeners.length === 0) {
            this.listenersMap.delete(ipPort);
            return;
        }
        this.listenersMap.set(ipPort, newListeners);
    }

    sendUdp(localAddress: string, localPort: number, remoteAddress: string, remotePort: number, data: Uint8Array) {
        [`${remoteAddress}:${remotePort}`, `*:${remotePort}`].forEach(ipPort =>
            this.listenersMap.get(ipPort)?.forEach(listener => {
                try {
                    listener(NetworkSimulator.INTERFACE_NAME, localAddress, localPort, data);
                } catch (error) {
                    logger.error(error);
                }
            }),
        );
    }
}

export namespace NetworkSimulator {
    export type Listener = (netInterface: string, peerAddress: string, peerPort: number, data: Uint8Array) => void;
    export const INTERFACE_NAME = "fakeInterface";
}
