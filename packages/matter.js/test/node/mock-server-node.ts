/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "../../src/environment/Environment.js";
import { StorageService } from "../../src/environment/StorageService.js";
import { Network } from "../../src/net/Network.js";
import { NetworkFake } from "../../src/net/fake/NetworkFake.js";
import { ServerNode } from "../../src/node/ServerNode.js";
import { StorageBackendMemory } from "../../src/storage/StorageBackendMemory.js";

export class MockServerNode extends ServerNode {
    constructor() {
        const environment = new Environment("test");
        
        const storage = environment.get(StorageService);
        storage.location = "(memory)";
        storage.factory = () => new StorageBackendMemory();

        environment.set(Network, new NetworkFake(
            "00:B0:D0:63:C2:26",
            [ "fdce:7c65:b2dd:7d46:923f:8a53:eb6c:cafe", "192.168.20.20" ]
        ));

        super({ environment });
    }
}
