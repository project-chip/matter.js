/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../codec/MessageCodec.js";
import { MessageExchange } from "./MessageExchange.js";

export interface ProtocolHandler {
    readonly id: number;
    readonly requiresSecureSession: boolean;
    onNewExchange(exchange: MessageExchange, message: Message): Promise<void>;
    close(): Promise<void>;
}
