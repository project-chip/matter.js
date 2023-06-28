/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import assert from "assert";
import { Time } from "../../src/time/Time.js";
import { TimeFake } from "../../src/time/TimeFake.js";

Time.get = () => new TimeFake(0);

import { ByteArray } from "../../src/util/ByteArray.js";
import { BtpSessionHandler } from "../../src/ble/BtpSessionHandler.js";
import { getPromiseResolver } from "../../src/util/Promises.js";
import { BtpCodec } from "../../src/codec/BtpCodec.js";

describe("BtpSessionHandler", () => {
    describe("Test Handshake", () => {
        it("handles a correct Handshake", async () => {
            const handshakeRequest = ByteArray.fromHex("656c04000000b90006");
            const { promise: writeBlePromise, resolver } = await getPromiseResolver<ByteArray>();

            new BtpSessionHandler(
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

            assert.deepEqual(result, ByteArray.fromHex("656c04640006"));
        });

        // TODO add more

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

            btpSessionHandler = new BtpSessionHandler(
                100,
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
            assert.deepEqual(result, ByteArray.fromHex("656c04640006"));
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
                    isBeginningSegment: true
                },
                payload: {
                    ackNumber: 0,
                    sequenceNumber: 1,
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
            assert.deepEqual(result, ByteArray.fromHex("0d01010900090807060504030201"));
        });
    });

});
