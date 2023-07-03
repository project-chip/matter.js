/**
* @license
* Copyright 2022-2023 Project CHIP Authors
* SPDX-License-Identifier: Apache-2.0
*/

import { ByteArray } from "../util/ByteArray.js";
import { BtpCodec } from "../codec/BtpCodec.js";
import { Logger } from "../log/Logger.js";

const logger = Logger.get("BtpSessionHandler");

const SUPPORTED_BTP_VERSIONS = [4];
const DEFAULT_FRAGMENT_SIZE = 20; // 23-byte minimum ATT_MTU - 3 bytes for ATT operation header
const MAXIMUM_FRAGMENT_SIZE = 244; // Maximum size of BTP segment

class BtpSessionHandler {
    private readonly btpVersion: number;
    private readonly attMtu: number;
    private readonly clientWindowSize: number;

    private sequenceNumber = 0; // Sequence number is set to 0 already for the handshake, next sequence number will be 1
    private currentSegmentedMsgLength: number | undefined = undefined;
    private currentSegmentedPayload: ByteArray = new ByteArray();
    private lastIncomingSequenceNumber = 255; // a new handshake is always received with sequence number 0, 

    /**
     * Creates a new BTP session handler
     *
     * @param maxDataSize The MTU reported by the connection
     * @param handshakeRequestPayload The handshake request payload
     * @param writeBleCallback Callback to write data to the BLE transport
     * @param disconnectBleCallback Callback to disconnect the BLE transport
     * @param handleMatterMessagePayload Callback to handle a Matter message payload
     */
    constructor(
        maxDataSize: number | undefined,
        handshakeRequestPayload: ByteArray,
        private readonly writeBleCallback: (data: ByteArray) => Promise<void>,
        private readonly disconnectBleCallback: () => void,
        private readonly handleMatterMessagePayload: (data: ByteArray) => void
    ) {
        // Decode handshake request
        const handshakeRequest = BtpCodec.decodeBtpHandshakeRequest(handshakeRequestPayload);

        const { versions, attMtu, clientWindowSize } = handshakeRequest;

        // Verify handshake request and choose the highest supported version for both parties
        let maximumSupportedVersion = 0;
        for (const version of versions) {
            if (SUPPORTED_BTP_VERSIONS.includes(version)) {
                maximumSupportedVersion = Math.max(maximumSupportedVersion, version);
            }
        }
        if (maximumSupportedVersion === 0) {
            throw new Error(`No supported BTP version found in ${versions}`);
        }
        this.btpVersion = maximumSupportedVersion;

        // TODO check if we need to do more on attMtu or clientWindowSize, for now just accept what client sends
        if (maxDataSize !== undefined) {
            this.attMtu = Math.min(attMtu, maxDataSize, MAXIMUM_FRAGMENT_SIZE);
        } else if (attMtu > 0) {
            this.attMtu = Math.min(attMtu, MAXIMUM_FRAGMENT_SIZE);
            // TODO or do we need to fall back to DEFAULT_FRAGMENT_SIZE ?
        } else {
            this.attMtu = DEFAULT_FRAGMENT_SIZE;
        }

        this.clientWindowSize = clientWindowSize;

        // Generate and send out handshake response
        const handshakeResponse = BtpCodec.encodeBtpHandshakeResponse({
            version: this.btpVersion,
            attMtu: this.attMtu,
            windowSize: this.clientWindowSize
        });

        logger.debug(`Sending BTP handshake response: ${handshakeResponse.toHex()}`);
        void this.writeBleCallback(handshakeResponse);

        // TODO initialize BTP Session timers, keepalives and such
    }

    getNextSequenceNumber() {
        this.sequenceNumber++;
        if (this.sequenceNumber > 255) {
            this.sequenceNumber = 0;
        }
        return this.sequenceNumber;
    }

    /**
     * Handle incoming data from the transport layer and hand over completely received matter messages to the
     * ExchangeManager layer
     *
     * @param data ByteArray containing the data
     */
    handleIncomingBleData(data: ByteArray) {
        try {
            const btpPacket = BtpCodec.decodeBtpPacket(data);
            logger.debug(`Received BTP packet: ${Logger.toJSON(btpPacket)}`);
            const {
                header: { isHandshakeRequest, hasManagementOpcode, isEndingSegment, isBeginningSegment },
                payload: { sequenceNumber, messageLength, segmentPayload }
            } = btpPacket;

            if (isHandshakeRequest || hasManagementOpcode) {
                this.disconnectBleCallback(); // Just here as example ... when specs say "close connection" use this callback
                throw new Error("BTP packet must not be a handshake request or have a management opcode");
            }

            if (isBeginningSegment) {
                this.currentSegmentedMsgLength = messageLength;
                this.currentSegmentedMsgLength = 0;
                this.currentSegmentedPayload = new ByteArray();
            }

            if (segmentPayload === undefined) {
                throw new Error("BTP packet must have a segment payload");
            } else if (segmentPayload.length > MAXIMUM_FRAGMENT_SIZE) {
                this.disconnectBleCallback();
                throw new Error("BTP packet payload exceeds the maximum packet size");
            }
            this.currentSegmentedPayload = ByteArray.concat(this.currentSegmentedPayload, segmentPayload);

            if (isEndingSegment) {
                if (this.currentSegmentedMsgLength === undefined) {
                    this.disconnectBleCallback();
                    throw new Error("BTP packet must have a message length");
                }
                if (this.currentSegmentedPayload.length !== this.currentSegmentedMsgLength) {
                    this.disconnectBleCallback();
                    throw new Error(`BTP packet payload length does not match message length: ${this.currentSegmentedPayload.length} !== ${this.currentSegmentedMsgLength}`);
                }

                this.currentSegmentedMsgLength = undefined

                // TODO ack handling needs to be implemented

                // TODO handle ackNumber
                if (((this.lastIncomingSequenceNumber + 1) % 256) !== sequenceNumber) {
                    this.disconnectBleCallback();
                    throw new Error("Expected and actual BTP packets sequence number does not match");
                }

                this.lastIncomingSequenceNumber = sequenceNumber;

                // Hand over the resulting Matter message to ExchangeManager via the callback
                this.handleMatterMessagePayload(this.currentSegmentedPayload);
            }

        } catch (error) {
            logger.error(`Error while handling incoming BTP data: ${error}`);
            this.disconnectBleCallback();
        }
    }

    /**
     * Send a Matter message to the transport layer, but before that encode it into a BTP packet and potentially split
     * it into multiple segments. This Method is indirectly called by the ExchangeManager layer when a Matter message
     * should be sent.
     *
     * @param data ByteArray containing the Matter message
     */
    async sendMatterMessage(data: ByteArray) {
        logger.debug(`Got Matter message to send via BLE transport: ${data.toHex()}`);

        // TODO implement message assembly
        // TODO Implement client window handling

        if (data.length === 0) { // Just dummy for now that the data parameter is used and not marked unused
            throw new Error("BTP packet must not be empty");
        }

        // Hacky code from here that needs to be completely reworked!
        const header = {
            isHandshakeRequest: false,
            hasManagementOpcode: false,
            hasAckNumber: this.lastIncomingSequenceNumber !== undefined,
            isBeginningSegment: true,
            isEndingSegment: true,
        };

        // BTP Header is always 3 bytes
        // 4 when ackNumber is present
        // 6 when ackNumber and messageLength (aka isBeginningSegment) are present
        const expectedBtpHeaderLength = 3 + (this.lastIncomingSequenceNumber !== undefined ? 1 : 0) + (header.isBeginningSegment !== undefined ? 2 : 0);

        if (data.length > this.attMtu - expectedBtpHeaderLength) {
            throw new Error(`BTP packets with data length > attMtu not supported yet. This requires message segmentation: ${data.length} > ${this.attMtu}`);
        }

        const btpPayload = BtpCodec.encodeBtpPacket({
            header,
            payload: {
                sequenceNumber: this.getNextSequenceNumber(),
                ackNumber: this.lastIncomingSequenceNumber,
                messageLength: header.isBeginningSegment ? data.length : undefined,
                segmentPayload: data
            }
        });

        logger.debug(`Sending BTP packet: ${btpPayload.toHex()}`);

        await this.writeBleCallback(btpPayload);
    }

    /**
     * Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.
     */
    close() {
        // TODO: Cleanup everything here, Times and all
    }
}

export { BtpSessionHandler };
