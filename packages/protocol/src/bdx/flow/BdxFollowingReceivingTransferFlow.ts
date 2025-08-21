/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Bytes } from "#general";
import { BdxStatusCode } from "#types";
import { BdxReadingTransferFlow } from "./BdxReadingTransferFlow.js";

/**
 * BDX Transport flow logic for a "BDX Following Receiver":
 * - Reads BlockQuery(WithSkip) messages and responds with Block or (for last block) BlockEof.
 *   Data are skipped over when requested by the peer.
 * - After the last block is send it expects an AckEof
 */
export class BdxFollowingReceivingTransferFlow extends BdxReadingTransferFlow {
    async processTransfer() {
        const { blockSize, dataLength } = this.transferParameters;
        const reader = this.readStream;
        let bytesLeft = dataLength;

        while (true) {
            let done: boolean;
            let data: Bytes;

            if (this.isClosed) {
                return; // Session is closed, so we stop processing
            }

            // Read the data query from the peer
            const message = await this.messenger.readBlockQuery();
            let bytesToSkip =
                "bytesToSkip" in message
                    ? this.messenger.asNumber(
                          message.bytesToSkip,
                          "BytesToSkip",
                          BdxStatusCode.TransferFailedUnknownError,
                      )
                    : 0;

            const { blockCounter } = message;
            this.validateCounter(blockCounter);

            // Read data from the storage and potentially skip over some data as requested by the peer
            while (true) {
                ({ data, done, bytesLeft } = await this.readDataChunk(reader, blockSize, bytesLeft, dataLength));

                if (bytesToSkip === 0 || done) {
                    break; // When reading is done or no data to skip, so return the data chunk in any case
                }

                if (data.byteLength > bytesToSkip) {
                    // Skip the requested bytes and send the data left even if the message is then shorter
                    data = Bytes.of(data).slice(bytesToSkip);
                    break;
                }

                // Peer requested to skip more bytes that were returned by the reader, so we read more
                bytesToSkip -= data.byteLength;
            }

            if (done) {
                await this.messenger.sendBlockEof({ data, blockCounter });
                const { blockCounter: ackedBlockCounter } = await this.messenger.readBlockAckEof();
                this.validateCounter(ackedBlockCounter, blockCounter);
                break; // End of transfer
            }

            await this.messenger.sendBlock({ data, blockCounter });
            // Ack or next BlockQuery is read on the next iteration
        }
    }
}
