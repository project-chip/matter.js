/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel, Listener, TransportInterface } from "@project-chip/matter.js/common";
import { ByteArray } from "@project-chip/matter.js/util";
import { BlenoBleServer } from "./BlenoBleServer";

export class BlePeripheralInterface implements TransportInterface {
    constructor(private readonly blenoServer: BlenoBleServer) {}

    // TransportInterface
    onData(listener: (socket: Channel<ByteArray>, data: ByteArray) => void): Listener {
        this.blenoServer.setMatterMessageListener(listener);
        return {
            close: async () => await this.close(),
        };
    }

    async close() {
        await this.blenoServer.close();
    }
}
