/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Schema } from "../../schema/Schema.js";
import { ByteArray, Endian } from "../../util/ByteArray.js";
import { DataReader } from "../../util/DataReader.js";
import { DataWriter } from "../../util/DataWriter.js";
import { GeneralStatusCode, ProtocolStatusCode } from "./SecureChannelMessages.js";

export type StatusMessage = {
    generalStatus: GeneralStatusCode;
    protocolId: number;
    protocolStatus: ProtocolStatusCode;
    protocolData?: ByteArray;
};

export class SecureChannelStatusMessageSchema extends Schema<StatusMessage, ByteArray> {
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

    decodeInternal(bytes: ByteArray) {
        const reader = new DataReader(bytes, Endian.Little);
        const generalStatus = reader.readUInt16();
        const protocolId = reader.readUInt32();
        const protocolStatus = reader.readUInt16();
        const remainingBytes = reader.getRemainingBytesCount() > 0 ? reader.getRemainingBytes() : undefined;

        return { generalStatus, protocolId, protocolStatus, remainingBytes };
    }
}

export const TlvSecureChannelStatusMessage = new SecureChannelStatusMessageSchema();
