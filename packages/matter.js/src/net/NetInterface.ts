/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "../common/Channel.js";
import { ServerAddress } from "../common/ServerAddress.js";
import { TransportInterface } from "../common/TransportInterface.js";
import { ByteArray } from "../util/ByteArray.js";

/**
 * A Network interface enhances a TransportInterface with the ability to open a channel to a remote server.
 */
export interface NetInterface extends TransportInterface {
    openChannel(address: ServerAddress): Promise<Channel<ByteArray>>;
}

export function isNetworkInterface(obj: TransportInterface | NetInterface): obj is NetInterface {
    return "openChannel" in obj;
}
