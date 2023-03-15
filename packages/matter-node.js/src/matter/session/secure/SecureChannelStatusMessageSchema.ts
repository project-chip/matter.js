/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, DataReader, DataWriter, Endian, Schema } from "@project-chip/matter.js";
import { GeneralStatusCode, ProtocolStatusCode } from "./SecureChannelMessages";

export type StatusMessage = {
    generalStatus: GeneralStatusCode;
    protocolId: number;
    protocolStatus: ProtocolStatusCode;
}

export class SecureChannelStatusMessageSchema extends Schema<StatusMessage, ByteArray> {
    encodeInternal({ generalStatus, protocolId, protocolStatus }: StatusMessage) {
        const writer = new DataWriter(Endian.Little);
        writer.writeUInt16(generalStatus);
        writer.writeUInt32(protocolId);
        writer.writeUInt16(protocolStatus);
        return writer.toByteArray();
    }

    decodeInternal(bytes: ByteArray) {
        const reader = new DataReader(bytes, Endian.Little);
        const generalStatus = reader.readUInt16();
        const protocolId = reader.readUInt32();
        const protocolStatus = reader.readUInt16();
        return { generalStatus, protocolId, protocolStatus };
    }
}

export const TlvSecureChannelStatusMessage = new SecureChannelStatusMessageSchema();
