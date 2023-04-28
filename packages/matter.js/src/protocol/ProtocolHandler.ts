/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Message } from "../codec/MessageCodec.js";
import { MessageExchange } from "./MessageExchange.js";

export interface ProtocolHandler<ContextT> {
    getId(): number;
    onNewExchange(exchange: MessageExchange<ContextT>, message: Message): Promise<void>;
}
