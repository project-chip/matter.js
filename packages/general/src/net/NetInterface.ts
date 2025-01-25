/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Environment } from "#environment/Environment.js";
import { Environmental } from "#environment/Environmental.js";
import { Channel } from "./Channel.js";
import { ServerAddress } from "./ServerAddress.js";
import { TransportInterface, TransportInterfaceSet } from "./TransportInterface.js";

/**
 * A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.
 */
export interface NetInterface extends TransportInterface {
    openChannel(address: ServerAddress): Promise<Channel<Uint8Array>>;
}

export function isNetworkInterface(obj: TransportInterface | NetInterface): obj is NetInterface {
    return "openChannel" in obj;
}

/**
 * A collection of {@link NetInterfaces} managed as a unit.
 */
export class NetInterfaceSet extends TransportInterfaceSet<NetInterface> {
    static override [Environmental.create](env: Environment) {
        const instance = new NetInterfaceSet();
        env.set(NetInterfaceSet, instance);
        return instance;
    }
}
