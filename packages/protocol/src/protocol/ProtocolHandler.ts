/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../codec/MessageCodec.js";
import { MessageExchange } from "./MessageExchange.js";

export interface ProtocolHandler {
    getId(): number;
    onNewExchange(exchange: MessageExchange, message: Message): Promise<void>;
    close(): Promise<void>;
}
