/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Channel } from "../common/Channel.js";
import { ByteArray } from "../util/ByteArray.js";
import { TransportInterface } from "../common/TransportInterface.js";

export interface NetInterface extends TransportInterface {
    openChannel(address: string, port: number): Promise<Channel<ByteArray>>;
}

export function isNetworkInterface(obj: TransportInterface | NetInterface): obj is NetInterface {
    return "openChannel" in obj;
}
