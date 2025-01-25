/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReader, DataWriter, Endian } from "#general";
import { GeneralStatusCode, ProtocolStatusCode, Schema } from "#types";

export type StatusMessage = {
    generalStatus: GeneralStatusCode;
    protocolId: number;
    protocolStatus: ProtocolStatusCode;
    protocolData?: Uint8Array;
};

export class SecureChannelStatusMessageSchema extends Schema<StatusMessage, Uint8Array> {
    encodeInternal({ generalStatus, protocolId, protocolStatus, protocolData }: StatusMessage) {
        const writer = new DataWriter(Endian.Little);
        writer.writeUInt16(generalStatus);
        writer.writeUInt32(protocolId);
        writer.writeUInt16(protocolStatus);
        if (protocolData !== undefined && protocolData.length > 0) {
            writer.writeByteArray(protocolData);
        }
        return writer.toByteArray();
    }

    decodeInternal(bytes: Uint8Array) {
        const reader = new DataReader(bytes, Endian.Little);
        const generalStatus = reader.readUInt16();
        const protocolId = reader.readUInt32();
        const protocolStatus = reader.readUInt16();
        const remainingBytes = reader.remainingBytesCount > 0 ? reader.remainingBytes : undefined;

        return { generalStatus, protocolId, protocolStatus, remainingBytes };
    }
}

export const TlvSecureChannelStatusMessage = new SecureChannelStatusMessageSchema();
