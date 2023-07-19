/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BlenoBleServer } from "./BlenoBleServer";
import { Channel, Listener, TransportInterface } from "@project-chip/matter.js/common";
import { ByteArray } from "@project-chip/matter.js/util";

export class BleInterface implements TransportInterface {
    constructor(
        private readonly blenoServer: BlenoBleServer
    ) { }

    // TransportInterface
    openChannel(_address: string, _port: number): Promise<Channel<ByteArray>> {
        throw new Error('BLE can not open a outgoing channel');
    }

    // TransportInterface
    onData(listener: (socket: Channel<ByteArray>, data: ByteArray) => void): Listener {
        this.blenoServer.setMatterMessageListener(listener);
        return {
            close: () => this.close()
        }
    }

    close(): void {
        this.blenoServer.close();
    }
}
