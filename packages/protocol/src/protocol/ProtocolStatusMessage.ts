/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReader, DataWriter, Endian } from "#general";
import { GeneralStatusCode, Schema } from "#types";

export type ProtocolStatusMessage<T> = {
    generalStatus: GeneralStatusCode;
    protocolId: number;
    protocolStatus: T;
    protocolData?: Uint8Array;
};

export abstract class ProtocolStatusMessageSchema<T extends ProtocolStatusMessage<any>> extends Schema<T, Uint8Array> {
    #protocolId: number;
    #protocolSpecificDataAllowed: boolean;

    constructor(protocolId: number, protocolSpecificDataAllowed = true) {
        super();
        this.#protocolId = protocolId;
        this.#protocolSpecificDataAllowed = protocolSpecificDataAllowed;
    }

    override encode(message: Omit<T, "protocolId">): Uint8Array {
        return super.encode({ ...message, protocolId: this.#protocolId } as T);
    }

    encodeInternal({ generalStatus, protocolStatus, protocolId, protocolData }: T) {
        const writer = new DataWriter(Endian.Little);
        writer.writeUInt16(generalStatus);
        writer.writeUInt32(protocolId);
        writer.writeUInt16(protocolStatus);
        if (this.#protocolSpecificDataAllowed && protocolData !== undefined && protocolData.length > 0) {
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

        return { generalStatus, protocolId, protocolStatus, remainingBytes } as unknown as T;
    }
}
