/**
* @license
* Copyright 2022-2023 Project CHIP Authors
* SPDX-License-Identifier: Apache-2.0
*/

import { ByteArray } from "../util/ByteArray.js";
import { BtpCodec, BtpPacket } from "../codec/BtpCodec.js";
import { Logger } from "../log/Logger.js";
import { Time, Timer } from "../time/Time.js";

const logger = Logger.get("BtpSessionHandler");

const SUPPORTED_BTP_VERSIONS = [4];
const DEFAULT_FRAGMENT_SIZE = 20; // 23-byte minimum ATT_MTU - 3 bytes for ATT operation header
const MAXIMUM_FRAGMENT_SIZE = 244; // Maximum size of BTP segment
const MAXIMUM_WINDOW_SIZE = 255; // Server maximum window size
const BTP_ACK_TIMEOUT_MS = 15000; // timer in ms before ack should be sent for a segment
const BTP_SEND_ACK_TIMEOUT_MS = 5000; // BTP_ACK_TIMEOUT_MS / 3: timer starts when we receive a packet and stops when we sends its ack

class BtpSessionHandler {
    private readonly btpVersion: number;
    private readonly attMtu: number;
    private readonly clientWindowSize: number;

    private sequenceNumber = 0; // Sequence number is set to 0 already for the handshake, next sequence number will be 1
    private currentSegmentedMsgLength: number | undefined;
    private currentSegmentedPayload: ByteArray = new ByteArray();
    private btpPackets: Array<BtpPacket> = new Array<BtpPacket>();
    private sendInProgress = false;
    private prevClientSequenceNumber = 255; // Client's Sequence Number received
    private prevClientAckedSequenceNumber = 0; // Client's Acked Sequence Number
    private serverAckedSequenceNumber = 0; // Server's sequence number ack sent by client
    private ackReceiveTimer: Timer;
    private sendAckTimer: Timer;

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
        private readonly handleMatterMessagePayload: (data: ByteArray) => void,
    ) {
        this.ackReceiveTimer = Time.getTimer(BTP_ACK_TIMEOUT_MS, () => this.btpAckTimeoutTriggered());
        this.sendAckTimer = Time.getTimer(BTP_SEND_ACK_TIMEOUT_MS, () => this.btpSendAckTimeoutTriggered());

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
            this.disconnectAndThrow(`No supported BTP version found in ${versions}`);
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

        this.clientWindowSize = Math.min(MAXIMUM_WINDOW_SIZE, clientWindowSize);

        // Generate and send out handshake response
        const handshakeResponse = BtpCodec.encodeBtpHandshakeResponse({
            version: this.btpVersion,
            attMtu: this.attMtu,
            windowSize: this.clientWindowSize
        });

        logger.debug(`Sending BTP handshake response: ${handshakeResponse.toHex()}`);
        void this.writeBleCallback(handshakeResponse);

        this.ackReceiveTimer.start();
    }

    /**
     * Handle incoming data from the transport layer and hand over completely received matter messages to the
     * ExchangeManager layer
     *
     * @param data ByteArray containing the data
     */
    public handleIncomingBleData(data: ByteArray) {
        try {
            const btpPacket = BtpCodec.decodeBtpPacket(data);
            logger.debug(`Received BTP packet: ${Logger.toJSON(btpPacket)}`);
            const {
                header: { hasAckNumber, isHandshakeRequest, hasManagementOpcode, isEndingSegment, isBeginningSegment },
                payload: { ackNumber, sequenceNumber, messageLength, segmentPayload }
            } = btpPacket;

            if (isHandshakeRequest || hasManagementOpcode) {
                this.disconnectAndThrow("BTP packet must not be a handshake request or have a management opcode");
            }

            if (isBeginningSegment) {
                this.currentSegmentedMsgLength = messageLength;
                if (this.currentSegmentedPayload.length !== 0) {
                    console.warn("Inflight data is discarded");
                    this.currentSegmentedPayload = new ByteArray();
                }
            }

            if (segmentPayload === undefined) {
                this.disconnectAndThrow("BTP packet must have a segment payload");
            } else if (segmentPayload.length > MAXIMUM_FRAGMENT_SIZE) {
                this.disconnectAndThrow("BTP packet payload exceeds the maximum packet size");
            } else {
                this.currentSegmentedPayload = ByteArray.concat(this.currentSegmentedPayload, segmentPayload);
            }

            if (((this.prevClientSequenceNumber + 1) % 256) !== sequenceNumber) {
                this.disconnectAndThrow("Expected and actual BTP packets sequence number does not match");
            }

            this.prevClientSequenceNumber = sequenceNumber;

            if (!this.sendAckTimer.isRunning) {
                this.sendAckTimer.start();
            }

            if (hasAckNumber && ackNumber !== undefined) {
                if (ackNumber > this.serverAckedSequenceNumber) {
                    if (ackNumber === this.sequenceNumber) { // stops timer when ackNumber = current sent sequenceNumber
                        this.ackReceiveTimer.stop();
                    } else if (ackNumber > this.sequenceNumber) { //restart timer when ackNumber > current sent sequenceNumber
                        this.ackReceiveTimer.stop();
                        this.ackReceiveTimer.start();
                    } else {
                        this.disconnectAndThrow("Invalid Ack Number: greater than sent sequence number");
                    }
                    this.serverAckedSequenceNumber = ackNumber;
                } else {
                    this.disconnectAndThrow("Matter message ack already received");
                }
            }

            if (isEndingSegment) {
                if (this.currentSegmentedMsgLength === undefined) {
                    this.disconnectAndThrow("BTP packet must have a message length");
                }
                if (this.currentSegmentedPayload.length !== this.currentSegmentedMsgLength) {
                    this.disconnectAndThrow(`BTP packet payload length does not match message length: ${this.currentSegmentedPayload.length} !== ${this.currentSegmentedMsgLength}`);
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
    public async sendMatterMessage(data: ByteArray) {
        logger.debug(`Got Matter message to send via BLE transport: ${data.toHex()}`);

        if (data.length === 0) { // Just dummy for now that the data parameter is used and not marked unused
            throw new Error("BTP packet must not be empty");
        }

        const header = {
            isHandshakeRequest: false,
            hasManagementOpcode: false,
            hasAckNumber: false,
            isBeginningSegment: true,
            isEndingSegment: true,
        };

        // BTP Header is always 2 bytes - flags, sequence number
        // 3 when ackNumber is present - assuming ack is present
        // 5 when ackNumber and messageLength (aka isBeginningSegment) are present
        let expectedBtpHeaderLength = 3 + (header.isBeginningSegment ? 2 : 0);

        if (data.length <= this.attMtu - expectedBtpHeaderLength) {

            const btpPayload = {
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
            const packetHeader = {
                isHandshakeRequest: false,
                hasManagementOpcode: false,
                hasAckNumber: false,
                isBeginningSegment: true,
                isEndingSegment: false,
            };

            //splitting the segment payload
            do {
                const segment = data.slice(startIndex, Math.min(startIndex + this.attMtu - expectedBtpHeaderLength, data.length));
                startIndex += this.attMtu - expectedBtpHeaderLength;
                expectedBtpHeaderLength = 3;

                if (startIndex !== 0 && startIndex < data.length) { // middle packets
                    packetHeader.isBeginningSegment = false;
                } else if (startIndex > data.length) { // last packet
                    packetHeader.isBeginningSegment = false;
                    packetHeader.isEndingSegment = true;
                }

                const btpPayload = {
                    header: packetHeader,
                    payload: {
                        ackNumber: undefined,
                        sequenceNumber: this.getNextSequenceNumber(),
                        messageLength: packetHeader.isBeginningSegment ? data.length : undefined,
                        segmentPayload: segment
                    }
                };
                this.btpPackets.push(btpPayload);
            } while (!packetHeader.isEndingSegment);
        }
        await this.sendQueuesBtpFrames();
    }

    private async sendQueuesBtpFrames() {

        if (this.btpPackets.length === 0 || this.sendInProgress) {
            return;
        }
        if (this.sequenceNumber - this.serverAckedSequenceNumber > (this.clientWindowSize - 1)) {
            return;
        }

        while (this.btpPackets.length > 0) {
            const btpPacket = this.btpPackets[0];

            logger.debug(`Sending BTP packet: ${Logger.toJSON(btpPacket)}`);

            //checks if last ack number sent < ack number to be sent
            if ((this.prevClientSequenceNumber !== undefined) && (this.prevClientSequenceNumber > this.prevClientAckedSequenceNumber)) {
                btpPacket.header.hasAckNumber = true;
                btpPacket.payload.ackNumber = this.prevClientSequenceNumber;
                this.prevClientAckedSequenceNumber = this.prevClientSequenceNumber;
                this.sendAckTimer.stop();
            }
            const packet = BtpCodec.encodeBtpPacket(btpPacket);
            logger.debug(`Sending Matter Message response: ${packet.toHex()}`);

            await this.writeBleCallback(packet);

            if (!this.ackReceiveTimer.isRunning) {
                this.ackReceiveTimer.start(); // starts the timer
            }

            this.btpPackets.shift();
            if (this.sequenceNumber - this.serverAckedSequenceNumber > (this.clientWindowSize - 1)) {
                break;
            }
        }
        this.sendInProgress = false;
    }

    /**
     * Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.
     */
    public close() {
        this.ackReceiveTimer.stop();
        this.sendAckTimer.stop();
        this.disconnectBleCallback();
    }

    private disconnectAndThrow(message: string) {
        close();
        throw new Error(message);
    }

    private async btpSendAckTimeoutTriggered() {

        if (this.prevClientSequenceNumber > this.prevClientAckedSequenceNumber) {
            const btpPacket = {
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isBeginningSegment: false,
                    isEndingSegment: false,
                },
                payload: {
                    ackNumber: this.prevClientSequenceNumber,
                    sequenceNumber: this.getNextSequenceNumber()
                }
            };
            const packet = BtpCodec.encodeBtpPacket(btpPacket);
            await this.writeBleCallback(packet);
            if (!this.ackReceiveTimer.isRunning) {
                this.ackReceiveTimer.start(); // starts the timer
            }
        }
    }

    private btpAckTimeoutTriggered() {

        if (this.serverAckedSequenceNumber !== this.sequenceNumber) {
            this.disconnectAndThrow("Acknowledgement for the sent sequence number was not received");
        }
        return;
    }

    private getNextSequenceNumber() {
        this.sequenceNumber++;
        if (this.sequenceNumber > 255) {
            this.sequenceNumber = 0;
        }
        return this.sequenceNumber;
    }
}

export { BtpSessionHandler };
