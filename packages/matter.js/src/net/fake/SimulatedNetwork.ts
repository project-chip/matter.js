/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NetListener } from "../NetInterface.js";
import { singleton } from "../../util/Singleton.js";
import { ByteArray } from "../../util/ByteArray.js";
import { Logger } from "../../log/Logger.js";

export type Listener = (netInterface: string, peerAddress: string, peerPort: number, data: ByteArray) => void;

const logger = Logger.get("SimulatedNetwork");

export const FAKE_INTERFACE_NAME = "fakeInterface";

export class SimulatedNetwork {
    static get = singleton(() => new SimulatedNetwork());

    private readonly listenersMap = new Map<string, Array<Listener>>();

    onUdpData(address: string | undefined, port: number, listener: Listener): NetListener {
        const ipPort = `${address ?? "*"}:${port}`;
        let listeners = this.listenersMap.get(ipPort);
        if (listeners === undefined) {
            listeners = new Array<Listener>();
            this.listenersMap.set(ipPort, listeners);
        }
        listeners.push(listener);
        return {
            close: () => this.offUdpData(address, port, listener),
        }
    }

    private offUdpData(address: string | undefined, port: number, listenerToRemove: Listener) {
        const ipPort = `${address ?? "*"}:${port}`;
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
        [`${remoteAddress}:${remotePort}`, `*:${remotePort}`].forEach(ipPort => this.listenersMap.get(ipPort)?.forEach(listener => {
            try {
                listener(FAKE_INTERFACE_NAME, localAddress, localPort, data);
            } catch (error) {
                logger.error(error);
            }
        }));
    }
}
