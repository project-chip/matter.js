/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel, TransportInterface } from "@matter.js/general";
import { BlenoBleServer } from "./BlenoBleServer.js";

export class BlePeripheralInterface implements TransportInterface {
    constructor(private readonly blenoServer: BlenoBleServer) {}

    // TransportInterface
    onData(listener: (socket: Channel<Uint8Array>, data: Uint8Array) => void): TransportInterface.Listener {
        this.blenoServer.setMatterMessageListener(listener);
        return {
            close: async () => await this.close(),
        };
    }

    async close() {
        await this.blenoServer.close();
    }
}
