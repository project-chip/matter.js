/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";
import { ByteArray } from "../../src/util/ByteArray.js";
import { BtpProtocolError, BtpSessionHandler } from "../../src/ble/BtpSessionHandler.js";
import { getPromiseResolver } from "../../src/util/Promises.js";
import { BtpCodec } from "../../src/codec/BtpCodec.js";
import { singleton } from "../../src/util/index.js";

Time.get = singleton(() => new TimeFake(0));

describe("BtpSessionHandler", () => {
    describe("Test Handshake", () => {
        it("handles a correct Handshake", async () => {
            const handshakeRequest = ByteArray.fromHex("656c04000000b90006");
            const { promise: writeBlePromise, resolver } = await getPromiseResolver<ByteArray>();

            await BtpSessionHandler.createFromHandshakeRequest(
                100,
                handshakeRequest,
                async (dataToWrite) => {
                    resolver(dataToWrite);
                },
                () => {
                    throw new Error("Should not be called");
                },
                (_matterMessageToHandle) => {
                    throw new Error("Should not be called");
                }
            );

            const result = await writeBlePromise;

            assert.deepEqual(result, ByteArray.fromHex("656c04670006"));
        });

        it("handles a zero attMtu in Handshake", async () => {
            const handshakeRequest = ByteArray.fromHex("656c04000000000006");
            const { promise: writeBlePromise, resolver } = await getPromiseResolver<ByteArray>();

            await BtpSessionHandler.createFromHandshakeRequest(
                100,
                handshakeRequest,
                async (dataToWrite) => {
                    resolver(dataToWrite);
                },
                () => {
                    throw new Error("Should not be called");
                },
                (_matterMessageToHandle) => {
                    throw new Error("Should not be called");
                }
            );

            const result = await writeBlePromise;

            assert.deepEqual(result, ByteArray.fromHex("656c04670006"));
        });

        it("handles a undefined maxDataSize in Handshake", async () => {
            const handshakeRequest = ByteArray.fromHex("656c04000000000006");
            const { promise: writeBlePromise, resolver } = await getPromiseResolver<ByteArray>();

            await BtpSessionHandler.createFromHandshakeRequest(
                undefined,
                handshakeRequest,
                async (dataToWrite) => {
                    resolver(dataToWrite);
                },
                () => {
                    throw new Error("Should not be called");
                },
                (_matterMessageToHandle) => {
                    throw new Error("Should not be called");
                }
            );

            const result = await writeBlePromise;

            assert.deepEqual(result, ByteArray.fromHex("656c04170006"));
        });

        it("Client does not share the same supported BTP version", async () => {

            const handshakeRequest = ByteArray.fromHex("656c05000000000006");
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            await assert.rejects(async () => {
                await BtpSessionHandler.createFromHandshakeRequest(
                    100,
                    handshakeRequest,
                    () => {
                        throw new Error("Should not be called");
                    },
                    () => {
                        disconnectBleResolver();
                    },
                    (_matterMessageToHandle) => {
                        throw new Error("Should not be called");
                    }
                );
                await disconnectBlePromise;

            }, BtpProtocolError, "No supported BTP version found in 5");
        });
    });

    describe("Test Matter Message handling", () => {
        let btpSessionHandler: BtpSessionHandler | undefined;

        let onWriteBleCallback = (_dataToWrite: ByteArray): void => {
            throw new Error("Should not be called");
        }

        let onDisconnectBleCallback = (): void => {
            throw new Error("Should not be called");
        };

        let onHandleMatterMessageCallback = (_matterMessage: ByteArray): void => {
            throw new Error("Should not be called");
        }

        // Each test gets his own btpSessionHandler with a successfully done handshake
        // callback can be overridden
        beforeEach(async () => {
            const { promise: localWriteBlePromise, resolver: localWriteBleResolver } = await getPromiseResolver<ByteArray>();

            onWriteBleCallback = (dataToWrite: ByteArray) => {
                localWriteBleResolver(dataToWrite);
            }

            const handshakeRequest = ByteArray.fromHex("656c04000000b90006");

            btpSessionHandler = await BtpSessionHandler.createFromHandshakeRequest(
                20,
                handshakeRequest,
                async (dataToWrite) => {
                    onWriteBleCallback(dataToWrite);
                },
                (): void => {
                    onDisconnectBleCallback();
                },
                (matterMessage: ByteArray): void => {
                    onHandleMatterMessageCallback(matterMessage);
                }
            );

            const result = await localWriteBlePromise;
            assert.deepEqual(result, ByteArray.fromHex("656c04170006"));
        });

        it("disconnect when incoming message is another handshake", async () => {
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            const matterMessage = ByteArray.fromHex("656c04000000b90006");

            onDisconnectBleCallback = () => {
                disconnectBleResolver();
            }

            btpSessionHandler?.handleIncomingBleData(matterMessage);

            await disconnectBlePromise;
        });

        it("disconnect when incoming message has management opcode", async () => {
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();

            const matterMessage = ByteArray.fromHex("0d6c04000000b90006");

            onDisconnectBleCallback = () => {
                disconnectBleResolver();
            }

            btpSessionHandler?.handleIncomingBleData(matterMessage);

            await disconnectBlePromise;
        });

        it("handles a correct One segment long Matter Message", async () => {
            const { promise: writeBlePromise, resolver: writeBleResolver } = await getPromiseResolver<ByteArray>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } = await getPromiseResolver<ByteArray>();

            const segmentPayload = ByteArray.fromHex("010203040506070809");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload
                }
            });

            onHandleMatterMessageCallback = (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                void btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201"));
            };

            onWriteBleCallback = (dataToWrite: ByteArray) => {
                writeBleResolver(dataToWrite);
            }

            btpSessionHandler?.handleIncomingBleData(matterMessage);

            const matterHandlerResult = await handleMatterMessagePromise;
            assert.deepEqual(matterHandlerResult, segmentPayload);

            const result = await writeBlePromise;
            assert.deepEqual(result, ByteArray.fromHex("0d00010900090807060504030201"));
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
                    isBeginningSegment: true
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload
                }
            });

            onDisconnectBleCallback = () => {
                disconnectBleResolver();
            }

            btpSessionHandler?.handleIncomingBleData(matterMessage);
            await disconnectBlePromise;
        });

        it("Btp packet must not be 0", async () => {
            await expect(btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("")))
                .rejects.toThrowError("BTP packet must not be empty");
        });

        it("handles a correct two segment long Matter Message", async () => {
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } = await getPromiseResolver<ByteArray>();

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
                    isBeginningSegment: true
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload: segmentPayload1
                }
            });
            const segmentPayload2 = ByteArray.fromHex("07");
            const matterMessage2 = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: false,
                    isEndingSegment: true,
                    isContinuingSegment: true,
                    isBeginningSegment: false
                },
                payload: {
                    sequenceNumber: 1,
                    segmentPayload: segmentPayload2
                }
            });

            onHandleMatterMessageCallback = (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                void btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("030201090807060504030201090807060504"));
            };

            onWriteBleCallback = (dataToWrite: ByteArray) => {
                promiseResolver.push(dataToWrite);
            }

            btpSessionHandler?.handleIncomingBleData(matterMessage1);
            btpSessionHandler?.handleIncomingBleData(matterMessage2);

            const matterHandlerResult = await handleMatterMessagePromise;

            assert.deepEqual(matterHandlerResult, segmentPayload);
            assert.deepEqual(promiseResolver[0], ByteArray.fromHex("0901011200030201090807060504030201090807"));
            assert.deepEqual(promiseResolver[1], ByteArray.fromHex("0602060504"));
        });

        it("triggers timeout as did not send ack within 5 sec", async () => {
            const fakeTime = Time.get() as TimeFake;
            const { promise: writeBlePromise, resolver: writeBleResolver } = await getPromiseResolver<ByteArray>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } = await getPromiseResolver<ByteArray>();

            const segmentPayload = ByteArray.fromHex("010203040506070809");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: true,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload
                }
            });

            onHandleMatterMessageCallback = (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                fakeTime.getTimer(5000, () => btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201")));
            };

            onWriteBleCallback = (dataToWrite: ByteArray) => {
                writeBleResolver(dataToWrite);
            }

            btpSessionHandler?.handleIncomingBleData(matterMessage);
            await fakeTime.advanceTime(5000);

            const result = await writeBlePromise;
            const matterHandlerResult = await handleMatterMessagePromise;

            assert.deepEqual(result, ByteArray.fromHex("080001"));
            assert.deepEqual(matterHandlerResult, segmentPayload);
        });

        it("triggers timeout as did not receive ack within 15 sec", async () => {
            const fakeTime = Time.get() as TimeFake;
            const { promise: disconnectBlePromise, resolver: disconnectBleResolver } = await getPromiseResolver<void>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } = await getPromiseResolver<ByteArray>();

            const segmentPayload = ByteArray.fromHex("010203040506070809");
            const matterMessage = BtpCodec.encodeBtpPacket({
                header: {
                    isHandshakeRequest: false,
                    hasManagementOpcode: false,
                    hasAckNumber: false,
                    isEndingSegment: true,
                    isContinuingSegment: false,
                    isBeginningSegment: true
                },
                payload: {
                    ackNumber: undefined,
                    sequenceNumber: 0,
                    messageLength: segmentPayload.length,
                    segmentPayload
                }
            });

            onHandleMatterMessageCallback = (matterMessage: ByteArray) => {
                handleMatterMessageResolver(matterMessage);
                void btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201"));
            };

            onDisconnectBleCallback = () => {
                disconnectBleResolver();
            }

            await assert.rejects(async () => {
                btpSessionHandler?.handleIncomingBleData(matterMessage);

                await fakeTime.advanceTime(15000);
                await handleMatterMessagePromise;
                await disconnectBlePromise;
            }, "Acknowledgement for the sent sequence number was not received");
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
                    isBeginningSegment: true
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 0,
                    messageLength: 8,
                    segmentPayload
                }
            });
            onDisconnectBleCallback = () => {
                disconnectBleResolver();
            }

            btpSessionHandler?.handleIncomingBleData(matterMessage);
            await disconnectBlePromise;
        });

        it("handles rounding off sequence numbers", async () => {
            const { promise: writeBlePromise, resolver: writeBleResolver } = await getPromiseResolver<ByteArray>();
            const { promise: handleMatterMessagePromise, resolver: handleMatterMessageResolver } = await getPromiseResolver<ByteArray>();

            for (let i = 0; i < 257; i++) {
                const segmentPayload = ByteArray.fromHex("010203040506070809");

                const packet = {
                    header: {
                        isHandshakeRequest: false,
                        hasManagementOpcode: false,
                        hasAckNumber: true,
                        isEndingSegment: true,
                        isContinuingSegment: false,
                        isBeginningSegment: true
                    },
                    payload: {
                        ackNumber: getSequenceNumber(i - 1),
                        sequenceNumber: getSequenceNumber(i - 1),
                        messageLength: segmentPayload.length,
                        segmentPayload
                    }
                };
                const matterMessage = BtpCodec.encodeBtpPacket(packet);

                onHandleMatterMessageCallback = (matterMessage: ByteArray) => {
                    handleMatterMessageResolver(matterMessage);
                    void btpSessionHandler?.sendMatterMessage(ByteArray.fromHex("090807060504030201"));
                };

                onWriteBleCallback = (dataToWrite: ByteArray) => {
                    writeBleResolver(dataToWrite);
                }

                btpSessionHandler?.handleIncomingBleData(matterMessage);
                const matterHandlerResult = await handleMatterMessagePromise;
                assert.deepEqual(matterHandlerResult, segmentPayload);

                const result = await writeBlePromise;
                assert.deepEqual(result, ByteArray.fromHex("0d00010900090807060504030201"));
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

