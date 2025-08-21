/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes, DataReader } from "#general";
import { BdxStatusCode } from "#types";
import { BdxError } from "../BdxError.js";
import { BdxMessenger } from "../BdxMessenger.js";
import { BdxTransferFlow } from "./BdxTransferFlow.js";

/**
 * Base class for BDX transfer flows that read data from a Blob.
 */
export abstract class BdxReadingTransferFlow extends BdxTransferFlow {
    #blob: Blob;
    #closeStreams?: (error?: unknown) => Promise<void>;

    constructor(blob: Blob, messenger: BdxMessenger, transferParameters: BdxTransferFlow.TransferOptions) {
        super(messenger, transferParameters);
        this.#blob = blob;
    }

    /**
     * Returns initialized streams for the transfer and initializes the #closeStream class function
     */
    protected get readStream() {
        const { blockSize } = this.transferParameters;

        // Get the full or relevant part of the stream by startOffset and length
        const { startOffset = 0, dataLength = this.#blob.size } = this.transferParameters;

        const dataBlob =
            startOffset > 0 || dataLength !== this.#blob.size
                ? this.#blob.slice(startOffset, startOffset + dataLength)
                : this.#blob;

        const stream = dataBlob.stream();

        // For Blobs the chunk size is determined by the underlying storage, so we need to chunk the stream ourselves.
        let dataReader: DataReader | undefined = undefined;
        const chunker = new TransformStream<Bytes>({
            transform: (chunk, controller) => {
                if (dataReader !== undefined) {
                    dataReader = new DataReader(Bytes.concat(dataReader.remainingBytes, chunk));
                } else {
                    dataReader = new DataReader(chunk);
                }
                while (dataReader.remainingBytesCount >= blockSize) {
                    controller.enqueue(dataReader.readByteArray(blockSize));
                }
                if (dataReader.remainingBytesCount === 0) {
                    dataReader = undefined;
                }
            },
            flush: controller => controller.enqueue(dataReader?.remainingBytes ?? new Uint8Array()),
        });
        const reader = stream.pipeThrough(chunker).getReader();
        // Method to be used by main close() method to make sure all streams are correctly closed or cancelled
        this.#closeStreams = async (_error?: unknown) => {
            if (stream.locked) {
                reader?.releaseLock();
                await reader?.cancel();
            }
            await stream.cancel();
        };

        return reader;
    }

    /**
     * Reads one data chunk from the reader and does some basic checks.
     */
    protected async readDataChunk(
        reader: ReadableStreamDefaultReader<Bytes>,
        blockSize: number,
        bytesLeft: number | undefined,
        dataLength: number | undefined,
    ) {
        let { value, done = false } = await reader.read();
        if (value === undefined) {
            // Done needs to be true when value is undefined or there is something broken
            if (!done) {
                throw new BdxError(
                    `Data length too short, expected ${blockSize} bytes, but got less`,
                    BdxStatusCode.LengthTooShort,
                );
            }
            value = new Uint8Array(); // Simulate an empty value when we reached the end of the stream
        } else if (value.byteLength < blockSize) {
            // When we git less data than blocksize it is the last block, so validate that
            ({ done = false } = await reader.read());
            if (!done) {
                throw new BdxError(
                    `Data length too short, expected ${blockSize} bytes, but got less`,
                    BdxStatusCode.LengthTooShort,
                );
            }
        }

        if (bytesLeft !== undefined && dataLength !== undefined) {
            bytesLeft -= value.byteLength;
            if (bytesLeft < 0) {
                throw new BdxError(
                    `Data length exceeded, expected ${dataLength} bytes, but got ${-bytesLeft}bytes more`,
                    BdxStatusCode.LengthTooLarge,
                );
            }
            if (done && bytesLeft > 0) {
                throw new BdxError(
                    `Data length too short, expected ${dataLength} bytes, but got ${bytesLeft}bytes less`,
                    BdxStatusCode.LengthTooShort,
                );
            }
            if (bytesLeft === 0) {
                done = true;
            }
        }

        return { data: value, done, bytesLeft };
    }

    override async close(error?: unknown) {
        await super.close(error);
        await this.#closeStreams?.(error);
    }
}
