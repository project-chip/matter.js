/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ProtocolStatusMessage, ProtocolStatusMessageSchema } from "#protocol/ProtocolStatusMessage.js";
import { SECURE_CHANNEL_PROTOCOL_ID, SecureChannelStatusCode } from "#types";

export type SecureChannelStatusMessage = ProtocolStatusMessage<SecureChannelStatusCode>;

export class SecureChannelStatusMessageSchema extends ProtocolStatusMessageSchema<SecureChannelStatusMessage> {}

export const TlvSecureChannelStatusMessage = new SecureChannelStatusMessageSchema(SECURE_CHANNEL_PROTOCOL_ID);
