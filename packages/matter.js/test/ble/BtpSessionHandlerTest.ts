/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BtpFlowError, BtpProtocolError, BtpSessionHandler } from "../../src/ble/BtpSessionHandler.js";
import { BtpCodec } from "../../src/codec/BtpCodec.js";
import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { getPromiseResolver } from "../../src/util/Promises.js";
import { singleton } from "../../src/util/Singleton.js";

Time.get = singleton(() => new TimeFake(0));

describe("BtpSessionHandler", () => {
    describe("Test Handshake", () => {
        it("handles a correct Handshake", async () => {
            const handshakeRequest = ByteArray.fromHex("656c04000000b90006");
            const { promise: writeBlePromise, resolver } = await getPromiseResolver<ByteArray>();

            let allowClose = false;
            const btpSession = await BtpSessionHandler.createFromHandshakeRequest(
                100,
                handshakeRequest,
                async dataToWrite => {
                    resolver(dataToWrite);
                },
                async () => {
                    if (!allowClose) throw new Error("Should not be called");
                },
                async _matterMessageToHandle => {
                    throw new Error("Should not be called");
                },
            );

            const result = await writeBlePromise;

            expect(result).toEqual(ByteArray.fromHex("656c04670006"));

            allowClose = true;
            await btpSession.close();
        });

        it("handles a zero attMtu in Handshake", async () => {
            const handshakeRequest = ByteArray.fromHex("656c04000000000006");
            const { promise: writeBlePromise, resolver } = await getPromiseResolver<ByteArray>();

            let allowClose = false;
            const btpSession = await BtpSessionHandler.createFromHandshakeRequest(
                100,
                handshakeRequest,
                async dataToWrite => {
                    resolver(dataToWrite);
                },
                async () => {
                    if (!allowClose) throw new Error("Should not be called");
                },
                async _matterMessageToHandle => {
                    throw new Error("Should not be called");
                },
            );

            const result = await writeBlePromise;

            expect(result).toEqual(ByteArray.fromHex("656c04670006"));

            allowClose = true;
            await btpSession.close();
        });

        it("handles a undefined maxDataSize in Handshake", async () => {
            const handshakeRequest = ByteArray.fromHex("656c04000000000006");
            const { promise: writeBlePromise, resolver } = await getPromiseResolver<ByteArray>();

            let allowClose = false;
            const btpSession = await BtpSessionHandler.createFromHandshakeRequest(
                undefined,
                handshakeRequest,
                async dataToWrite => {
                    resolver(dataToWrite);
                },
                async () => {
                    if (!allowClose) throw new Error("Should not be called");
                },
                async _matterMessageToHandle => {
                    throw new Error("Should not be called");
                },
            );

            const result = await writeBlePromise;

            expect(result).toEqual(ByteArray.fromHex("656c04170006"));

            allowClose = true;
            await btpSession.close();
        });

        it("Client does not share the same supported BTP version", async () => {
            const handshakeRequest = ByteArray.fromHex("656c05000000000006");
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            // change to expect().rejects.toThrow() when no longer using jasmine expect
            let error;
            try {
                const btpSession = await BtpSessionHandler.createFromHandshakeRequest(
                    100,
                    handshakeRequest,
                    () => {
                        throw new Error("Should not be called");
                    },
                    async () => {
                        disconnectBleResolver();
                    },
                    _matterMessageToHandle => {
                        throw new Error("Should not be called");
                    },
                );
                await disconnectBlePromise;

                await btpSession.close();
            } catch (e) {
                error = e;
            }
            expect(error).toEqual(new BtpProtocolError("No supported BTP version found in 5"));
        });
    });

    describe("Test Matter Message handling", () => {
        let btpSessionHandler: BtpSessionHandler | undefined;

        let onWriteBleCallback = (_dataToWrite: ByteArray): Promise<void> => {
            throw new Error("Should not be called");
        };

        let onDisconnectBleCallback = (): Promise<void> => {
            throw new Error("Should not be called");
        };

        let onHandleMatterMessageCallback = async (_matterMessage: ByteArray): Promise<void> => {
            throw new Error("Should not be called");
        };

        // Each test gets his own btpSessionHandler with a successfully done handshake
        // callback can be overridden
        beforeEach(async () => {
            const { promise: localWriteBlePromise, resolver: localWriteBleResolver } =
                await getPromiseResolver<ByteArray>();

            onWriteBleCallback = async (dataToWrite: ByteArray) => {
                localWriteBleResolver(dataToWrite);
            };

            const handshakeRequest = ByteArray.fromHex("656c04000000b90006");

            btpSessionHandler = await BtpSessionHandler.createFromHandshakeRequest(
                20,
                handshakeRequest,
                async dataToWrite => {
                    await onWriteBleCallback(dataToWrite);
                },
                async () => {
                    await onDisconnectBleCallback();
                },
                async (matterMessage: ByteArray) => {
                    await onHandleMatterMessageCallback(matterMessage);
                },
            );

            const result = await localWriteBlePromise;
            expect(result).toEqual(ByteArray.fromHex("656c04170006"));
        });

        afterEach(async () => {
            await btpSessionHandler?.close();
        });

        it("disconnect when incoming message is another handshake", async () => {
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            const matterMessage = ByteArray.fromHex("656c04000000b90006");

            onDisconnectBleCallback = async () => {
                disconnectBleResolver();
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage);

            await disconnectBlePromise;
        });

        it("disconnect when incoming message has management opcode", async () => {
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            const matterMessage = ByteArray.fromHex("0d6c04000000b90006");

            onDisconnectBleCallback = async () => {
                disconnectBleResolver();
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage);

            await disconnectBlePromise;
        });

        it("handles a correct One segment long Matter Message", async () => {
            const { promise: writeBlePromise, resolver: writeBleResolver } = await getPromiseResolver<ByteArray>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } =
                await getPromiseResolver<ByteArray>();

            const segmentPayload = ByteArray.fromHex("010203040506070809");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true,
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload,
                },
            });

            onHandleMatterMessageCallback = async (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                await btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201"));
            };

            onWriteBleCallback = async (dataToWrite: ByteArray) => {
                writeBleResolver(dataToWrite);
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage);

            const matterHandlerResult = await handleMatterMessagePromise;
            expect(matterHandlerResult).toEqual(segmentPayload);

            const result = await writeBlePromise;
            expect(result).toEqual(ByteArray.fromHex("0d00010900090807060504030201"));
        });

        it("received bytes more than fragment size", async () => {
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            const segmentPayload = ByteArray.fromHex("01020304050607080901020304050607080901");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true,
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload,
                },
            });

            onDisconnectBleCallback = async () => {
                disconnectBleResolver();
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage);
            await disconnectBlePromise;
        });

        it("Btp packet must not be 0", async () => {
            // change to expect().rejects.toThrow() when no longer using jasmine expect
            let error;
            try {
                await btpSessionHandler?.sendMatterMessage(ByteArray.fromHex(""));
            } catch (e) {
                error = e;
            }
            expect(error).toEqual(new BtpFlowError("BTP packet must not be empty"));
        });

        it("handles a correct two segment long Matter Message", async () => {
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } =
                await getPromiseResolver<ByteArray>();

            const segmentPayload = ByteArray.fromHex("01020304050607080901020304050607");
            const segmentPayload1 = ByteArray.fromHex("010203040506070809010203040506");
            const promiseResolver = new Array<ByteArray>();

            const matterMessage1 = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isEndingSegment: false,
                    isContinuingSegment: false,
                    isBeginningSegment: true,
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload: segmentPayload1,
                },
            });
            const segmentPayload2 = ByteArray.fromHex("07");
            const matterMessage2 = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: false,
                    isEndingSegment: true,
                    isContinuingSegment: true,
                    isBeginningSegment: false,
                },
                payload: {
                    sequenceNumber: 1,
                    segmentPayload: segmentPayload2,
                },
            });

            onHandleMatterMessageCallback = async (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                await btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("030201090807060504030201090807060504"));
            };

            onWriteBleCallback = async (dataToWrite: ByteArray) => {
                promiseResolver.push(dataToWrite);
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage1);
            await btpSessionHandler?.handleIncomingBleData(matterMessage2);

            const matterHandlerResult = await handleMatterMessagePromise;

            expect(matterHandlerResult).toEqual(segmentPayload);
            expect(promiseResolver[0]).toEqual(ByteArray.fromHex("0901011200030201090807060504030201090807"));
            expect(promiseResolver[1]).toEqual(ByteArray.fromHex("0602060504"));
        });

        it("triggers timeout as did not send ack within 5 sec", async () => {
            const fakeTime = Time.get() as TimeFake;
            const { promise: writeBlePromise, resolver: writeBleResolver } = await getPromiseResolver<ByteArray>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } =
                await getPromiseResolver<ByteArray>();

            const segmentPayload = ByteArray.fromHex("010203040506070809");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true,
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload,
                },
            });

            onHandleMatterMessageCallback = async (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                fakeTime.getTimer(
                    5000,
                    () => btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201")),
                );
            };

            onWriteBleCallback = async (dataToWrite: ByteArray) => {
                writeBleResolver(dataToWrite);
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage);
            await fakeTime.advanceTime(5000);

            const result = await writeBlePromise;
            const matterHandlerResult = await handleMatterMessagePromise;

            expect(result).toEqual(ByteArray.fromHex("080001"));
            expect(matterHandlerResult).toEqual(segmentPayload);
        });

        it("triggers timeout as did not receive ack within 15 sec", async () => {
            const fakeTime = Time.get() as TimeFake;
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } =
                await getPromiseResolver<ByteArray>();

            const segmentPayload = ByteArray.fromHex("010203040506070809");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: false,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true,
                },
                payload: {
                    ackNumber: undefined,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload,
                },
            });

            onHandleMatterMessageCallback = async (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                await btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201"));
            };

            onDisconnectBleCallback = async () => {
                disconnectBleResolver();
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage); // BLE data coming in

            await handleMatterMessagePromise; // Getting parsed and sent to Matter layer
            await fakeTime.advanceTime(15000); // now nothing happens in 15s
            await disconnectBlePromise; // disconnected because of error
        });

        it("payload size and message Length does not match", async () => {
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            const segmentPayload = ByteArray.fromHex("010203040506070809");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true,
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: 8,
                    segmentPayload,
                },
            });
            onDisconnectBleCallback = async () => {
                disconnectBleResolver();
            };

            await btpSessionHandler?.handleIncomingBleData(matterMessage);
            await disconnectBlePromise;
        });

        it("handles rounding off sequence numbers", async () => {
            const { promise: writeBlePromise, resolver: writeBleResolver } = await getPromiseResolver<ByteArray>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } =
                await getPromiseResolver<ByteArray>();

            for (let i = 0; i < 257; i++) {
                const segmentPayload = ByteArray.fromHex("010203040506070809");

                const packet = {
                    header: {
                        isHandshakeRequest: false,
                        hasManagementOpcode: false,
                        hasAckNumber: true,
                        isEndingSegment: true,
                        isContinuingSegment: false,
                        isBeginningSegment: true,
                    },
                    payload: {
                        ackNumber: getSequenceNumber(i - 1),
                        sequenceNumber: getSequenceNumber(i - 1),
                        messageLength: segmentPayload.length,
                        segmentPayload,
                    },
                };
                const matterMessage = BtpCodec.encodeBtpPacket(packet);

                onHandleMatterMessageCallback = async (matterMessage: ByteArray) => {
                    handleMatterMessageResolver(matterMessage);
                    await btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201"));
                };

                onWriteBleCallback = async (dataToWrite: ByteArray) => {
                    writeBleResolver(dataToWrite);
                };

                await btpSessionHandler?.handleIncomingBleData(matterMessage);
                const matterHandlerResult = await handleMatterMessagePromise;
                expect(matterHandlerResult).toEqual(segmentPayload);

                const result = await writeBlePromise;
                expect(result).toEqual(ByteArray.fromHex("0d00010900090807060504030201"));
            }
        });
    });
});

function getSequenceNumber(sequenceNumber: number) {
    sequenceNumber++;
    if (sequenceNumber > 255) {
        sequenceNumber = 0;
    }
    return sequenceNumber;
}
