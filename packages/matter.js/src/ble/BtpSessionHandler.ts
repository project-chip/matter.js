/**
* @license
* Copyright 2022-2023 Project CHIP Authors
* SPDX-License-Identifier: Apache-2.0
*/

import { ByteArray } from "../util/ByteArray.js";
import { BtpCodec, BtpPacket } from "../codec/BtpCodec.js";
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
    private currentSegmentedMsgLength: number | undefined;
    private currentSegmentedPayload: ByteArray = new ByteArray();
    private btpPackets: Array<BtpPacket> = new Array<BtpPacket>();
    private sendInProgress = false;
    private lastIncomingSequenceNumber = 255; // a new handshake is always received with sequence number 0, 
    private lastAckedSequenceNumber = 0;

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
                header: { hasAckNumber, isHandshakeRequest, hasManagementOpcode, isEndingSegment, isBeginningSegment },
                payload: { ackNumber, sequenceNumber, messageLength, segmentPayload }
            } = btpPacket;

            if (isHandshakeRequest || hasManagementOpcode) {
                this.disconnectBleCallback(); // Just here as example ... when specs say "close connection" use this callback
                throw new Error("BTP packet must not be a handshake request or have a management opcode");
            }

            if (isBeginningSegment) {
                this.currentSegmentedMsgLength = messageLength;
                if (this.currentSegmentedPayload.length !== 0) {
                    console.warn("Inflight data is discarded");
                }
            }

            if (segmentPayload === undefined) {
                throw new Error("BTP packet must have a segment payload");
            } else if (segmentPayload.length > MAXIMUM_FRAGMENT_SIZE) {
                this.disconnectBleCallback();
                throw new Error("BTP packet payload exceeds the maximum packet size");
            }
            this.currentSegmentedPayload = ByteArray.concat(this.currentSegmentedPayload, segmentPayload);

            //adding sequence number received because it needs to be acked
            // this.serverWindow.push(sequenceNumber);

            if (((this.lastIncomingSequenceNumber + 1) % 256) !== sequenceNumber) {
                this.disconnectBleCallback();
                throw new Error("Expected and actual BTP packets sequence number does not match");
            }

            if (hasAckNumber && ackNumber !== undefined) {
                this.lastAckedSequenceNumber = ackNumber;
            }

            this.lastIncomingSequenceNumber = sequenceNumber;

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

                // Hand over the resulting Matter message to ExchangeManager via the callback
                this.handleMatterMessagePayload(this.currentSegmentedPayload);

                this.currentSegmentedMsgLength = 0; // resetting current segment msg length to 0
                this.currentSegmentedPayload = new ByteArray(); // resetting current segment Payload to empty byte array
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

        if (data.length === 0) { // Just dummy for now that the data parameter is used and not marked unused
            throw new Error("BTP packet must not be empty");
        }

        let btpPayload: BtpPacket;
        const header = {
            isHandshakeRequest: false,
            hasManagementOpcode: false,
            hasAckNumber: false,
            isBeginningSegment: true,
            isEndingSegment: false,
        };

        // BTP Header is always 2 bytes - flags, sequence number
        // 3 when ackNumber is present
        // 5 when ackNumber and messageLength (aka isBeginningSegment) are present
        let expectedBtpHeaderLength = 2 + (this.lastAckedSequenceNumber !== undefined ? 1 : 0) + (header.isBeginningSegment !== undefined ? 2 : 0);

        if (data.length <= this.attMtu - expectedBtpHeaderLength) {

            header.isEndingSegment = true;
            btpPayload = {
                header,
                payload: {
                    ackNumber: undefined,
                    sequenceNumber: this.getNextSequenceNumber(),
                    messageLength: data.length,
                    segmentPayload: data
                }
            };
            this.btpPackets.push(btpPayload);
        } else {

            console.log("Message segmentation: ${data.length} > ${this.attMtu}");
            let startIndex = 0;

            //splitting the segment payload
            while (true) {
                const packetHeader = {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: false,
                    isBeginningSegment: true,
                    isEndingSegment: false,
                };
                const segment = data.slice(startIndex, Math.min(startIndex + this.attMtu - expectedBtpHeaderLength, data.length));
                startIndex += this.attMtu - expectedBtpHeaderLength;

                expectedBtpHeaderLength = 2 + (this.lastAckedSequenceNumber !== undefined ? 1 : 0);

                if (startIndex !== 0 && startIndex < data.length) { // middle packets
                    packetHeader.isBeginningSegment = false;
                } else if (startIndex > data.length) { // last packet
                    packetHeader.isBeginningSegment = false;
                    packetHeader.isEndingSegment = false;

                    btpPayload = {
                        header: packetHeader,
                        payload: {
                            ackNumber: undefined,
                            sequenceNumber: this.getNextSequenceNumber(),
                            messageLength: undefined,
                            segmentPayload: segment
                        }
                    };
                    this.btpPackets.push(btpPayload);
                    break;
                }

                btpPayload = {
                    header: packetHeader,
                    payload: {
                        ackNumber: undefined,
                        sequenceNumber: this.getNextSequenceNumber(),
                        messageLength: packetHeader.isBeginningSegment ? data.length : undefined,
                        segmentPayload: segment
                    }
                };
                this.btpPackets.push(btpPayload);
            }
        }
        await this.sendQueuesBtpFrames(this.btpPackets);
    }

    async sendQueuesBtpFrames(packets: Array<BtpPacket>) {

        if (packets.length === 0 || this.sendInProgress) {
            return;
        }
        if (this.sequenceNumber - this.lastAckedSequenceNumber > this.clientWindowSize) {
            return;
        }

        while (packets.length > 0) {
            const btpPacket = packets[0];

            logger.debug(`Sending BTP packet: ${Logger.toJSON(btpPacket)}`);

            if (this.lastIncomingSequenceNumber !== undefined) {
                btpPacket.header.hasAckNumber = true;
                btpPacket.payload.ackNumber = this.lastIncomingSequenceNumber;
            }
            const packet = BtpCodec.encodeBtpPacket(btpPacket);
            logger.debug(`Sending Matter Message response: ${packet.toHex()}`);

            await this.writeBleCallback(packet);

            packets.shift();
            if (this.sequenceNumber - this.lastAckedSequenceNumber > this.clientWindowSize) {
                break;
            }
        }
        this.sendInProgress = false;
    }

    /**
     * Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.
     */
    close() {
        // TODO: Cleanup everything here, Times and all
    }
}

export { BtpSessionHandler };
