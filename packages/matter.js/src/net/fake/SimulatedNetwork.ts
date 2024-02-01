/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Listener } from "../../common/TransportInterface.js";
import { Logger } from "../../log/Logger.js";
import { ByteArray } from "../../util/ByteArray.js";
import { singleton } from "../../util/Singleton.js";

export type ListenerFunc = (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void;

const logger = Logger.get("SimulatedNetwork");

export const FAKE_INTERFACE_NAME = "fakeInterface";

export class SimulatedNetwork {
    static get = singleton(() => new SimulatedNetwork());

    private readonly listenersMap = new Map<string, Array<ListenerFunc>>();

    onUdpData(host: string | undefined, port: number, listener: ListenerFunc): Listener {
        const ipPort = `${host ?? "*"}:${port}`;
        let listeners = this.listenersMap.get(ipPort);
        if (listeners === undefined) {
            listeners = new Array<ListenerFunc>();
            this.listenersMap.set(ipPort, listeners);
        }
        listeners.push(listener);
        return {
            close: async () => this.offUdpData(host, port, listener),
        };
    }

    private offUdpData(host: string | undefined, port: number, listenerToRemove: ListenerFunc) {
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

    sendUdp(localAddress: string, localPort: number, remoteAddress: string, remotePort: number, data: ByteArray) {
        [`${remoteAddress}:${remotePort}`, `*:${remotePort}`].forEach(
            ipPort =>
                this.listenersMap.get(ipPort)?.forEach(listener => {
                    try {
                        listener(FAKE_INTERFACE_NAME, localAddress, localPort, data);
                    } catch (error) {
                        logger.error(error);
                    }
                }),
        );
    }
}
