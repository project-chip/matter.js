/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray, Endian } from "../util/ByteArray.js";
import { BtpCodec, BtpPacket } from "../codec/BtpCodec.js";
import { Logger } from "../log/Logger.js";
import { Time, Timer } from "../time/Time.js";
import { DataReader } from "../util/DataReader.js";

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

    private sequenceNumber = 0; // Sequence number is set to 0 already for the handshake, next sequence number is 1
    private currentSegmentedMsgLength: number | undefined;
    private currentSegmentedPayload: ByteArray = new ByteArray();
    private btpPackets: Array<BtpPacket> = [];
    private sendInProgress = false;
    private prevClientSequenceNumber = 255; // Client's Sequence Number received
    private prevClientAckedSequenceNumber = 0; // Client's Acked Sequence Number
    private serverAckedSequenceNumber = -1; // initializing server's sequence number ack sent by client with -1
    private ackReceiveTimer: Timer;
    private sendAckTimer: Timer;
    private isActive: boolean = true;
    private dataReader: DataReader<Endian.Little> | undefined;

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
        if (attMtu === 0 && maxDataSize !== undefined) {
            this.attMtu = Math.min(maxDataSize, MAXIMUM_FRAGMENT_SIZE);
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

            if (segmentPayload === undefined && !hasAckNumber) {
                this.disconnectAndThrow("BTP packet must have a segment payload");
            }
            else if (segmentPayload !== undefined && segmentPayload.length > MAXIMUM_FRAGMENT_SIZE) {
                this.disconnectAndThrow("BTP packet payload exceeds the maximum packet size");
            } else if (segmentPayload !== undefined) {
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

                // check that ack number is valid
                if (ackNumber <= this.serverAckedSequenceNumber || ackNumber > this.sequenceNumber) {
                    this.disconnectAndThrow(`Invalid Ack Number, Ack Number: ${ackNumber}, Sequence Number: ${this.sequenceNumber}, Server Acked Sequence Number ${this.serverAckedSequenceNumber}`);
                }

                // for valid acks, stop timer and update serverAckedSequenceNumber
                this.ackReceiveTimer.stop();
                this.serverAckedSequenceNumber = ackNumber;

                // if still waiting for ack for sequence number restart timer
                if (ackNumber < this.sequenceNumber) {
                    this.ackReceiveTimer.start();
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

        await this.sendQueuedBtpFrames(data);
    }

    private async sendQueuedBtpFrames(outgoingSegmentPayload: ByteArray) {

        const header = {
            isHandshakeRequest: false,
            hasManagementOpcode: false,
            hasAckNumber: false,
            isBeginningSegment: true,
            isEndingSegment: true,
        };

        let expectedBtpHeaderLength = 3 + (header.isBeginningSegment ? 2 : 0);

        if (outgoingSegmentPayload.length <= this.attMtu - expectedBtpHeaderLength) {
            const btpPayload = {
                header,
                payload: {
                    ackNumber: (this.prevClientSequenceNumber !== undefined) && (this.prevClientSequenceNumber > this.prevClientAckedSequenceNumber)
                        ? this.prevClientSequenceNumber : undefined,
                    sequenceNumber: this.getNextSequenceNumber(),
                    messageLength: outgoingSegmentPayload.length,
                    segmentPayload: outgoingSegmentPayload
                }
            };
            if (btpPayload.payload.ackNumber !== undefined) {
                btpPayload.header.hasAckNumber = true;
                this.prevClientAckedSequenceNumber = this.prevClientSequenceNumber;
                this.sendAckTimer.stop();
            }
            this.btpPackets.push(btpPayload);

        } else {
            //split data
            this.dataReader = new DataReader(outgoingSegmentPayload, Endian.Little);
            let remainingLengthInBytes = this.dataReader?.getRemainingBytesCount();

            while (true) {

                const packetHeader = {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: false,
                    isBeginningSegment: remainingLengthInBytes === outgoingSegmentPayload.length,
                    isEndingSegment: false,
                };

                if ((this.prevClientSequenceNumber !== undefined) && (this.prevClientSequenceNumber > this.prevClientAckedSequenceNumber)) {
                    packetHeader.hasAckNumber = true;
                } else {
                    expectedBtpHeaderLength -= 1;
                }

                console.log(`Message segmentation: ${remainingLengthInBytes} > ${this.attMtu - expectedBtpHeaderLength}`);

                //splitting the segment payload
                const segment = this.dataReader?.readByteArray(Math.min(this.attMtu - expectedBtpHeaderLength, remainingLengthInBytes ? remainingLengthInBytes : 0));
                remainingLengthInBytes = this.dataReader?.getRemainingBytesCount();

                console.log(`segment: ${segment?.toHex()}`);
                expectedBtpHeaderLength = 3;

                if (remainingLengthInBytes === undefined || remainingLengthInBytes === 0) {
                    packetHeader.isEndingSegment = true;
                }

                const btpPayload = {
                    header: packetHeader,
                    payload: {
                        ackNumber: (this.prevClientSequenceNumber !== undefined) && (this.prevClientSequenceNumber > this.prevClientAckedSequenceNumber)
                            ? this.prevClientSequenceNumber : undefined,
                        sequenceNumber: this.getNextSequenceNumber(),
                        messageLength: packetHeader.isBeginningSegment ? outgoingSegmentPayload.length : undefined,
                        segmentPayload: segment?.length !== 0 ? segment : undefined,
                    }
                };

                if (btpPayload.payload.ackNumber !== undefined) {
                    this.prevClientAckedSequenceNumber = this.prevClientSequenceNumber;
                    this.sendAckTimer.stop();
                }

                this.btpPackets.push(btpPayload);

                if (packetHeader.isEndingSegment) {
                    break;
                }
            }
        }

        if (this.btpPackets.length === 0 || this.sendInProgress) {
            return;
        }
        if (this.sequenceNumber - this.serverAckedSequenceNumber > (this.clientWindowSize - 1)) {
            return;
        }

        while (this.btpPackets.length > 0) {
            const btpPacket = this.btpPackets[0];

            logger.debug(`Sending BTP packet: ${Logger.toJSON(btpPacket)}`);
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
        if (this.isActive) {
            this.isActive = false;
            this.disconnectBleCallback();
        }
    }

    private disconnectAndThrow(message: string) {
        this.close();
        throw new Error(message);
    }

    // If this timer expires and the peer has a pending acknowledgement, the peer SHALL immediately send that acknowledgement
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

    //If a peer’s acknowledgement-received timer expires, or if a peer receives an invalid acknowledgement,
    // the peer SHALL close the BTP session and report an error to the application.
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
