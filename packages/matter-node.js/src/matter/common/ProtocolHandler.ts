/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../../codec/MessageCodec";
import { MessageExchange } from "./MessageExchange";

export interface ProtocolHandler<ContextT> {
    getId(): number;
    onNewExchange(exchange: MessageExchange<ContextT>, message: Message): Promise<void>;
}
