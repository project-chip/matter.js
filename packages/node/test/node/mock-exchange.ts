/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { DataReadQueue } from "@matter/general";
import { Specification } from "@matter/model";
import { Message, MessageExchange, MessageExchangeContext, MessageType, PeerAddress } from "@matter/protocol";
import { NodeId, SECURE_CHANNEL_PROTOCOL_ID, StatusCode, TlvStatusResponse } from "@matter/types";

/**
 * A mock message exchange.
 *
 * This provides an intermediate level of mock communication, higher level than network mocking but lower level than
 * direct method calls.
 *
 * Our mocking of the message exchange context is a bit half assed, we don't use a real channel or session and just
 * stub out methods as necessary.
 */
export class MockExchange extends MessageExchange {
    #requests = new DataReadQueue<Message>();
    #responses = new DataReadQueue<Message>();

    address: PeerAddress;

    constructor(address: PeerAddress) {
        const context = {
            channel: {
                name: "test",
                send: async message => {
                    await this.#requests.write(message);
                },
                session: {
                    notifyActivity(_messageReceived: boolean) {},
                    async getIncrementedMessageCounter() {
                        return 1;
                    },
                    parameters: {},
                },
            },
            resubmissionStarted() {},
            localSessionParameters: {},
        } as MessageExchangeContext;

        super(context, true, 1, NodeId(1), NodeId(address.nodeId), 1, SECURE_CHANNEL_PROTOCOL_ID);

        this.address = address;
    }

    /**
     * Enqueue a mock response.
     */
    async write(message: Message) {
        this.#responses.push(message);
    }

    /**
     * Enqueue a mock status response.
     */
    async writeStatus(status = StatusCode.Success) {
        await this.write({
            payloadHeader: {
                messageType: MessageType.StatusResponse,
            },
            payload: TlvStatusResponse.encode({
                status,
                interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            }),
        } as Message);
    }

    /**
     * Wait for a mock request.
     */
    async read() {
        return MockTime.resolve(this.#requests.read());
    }

    override async nextMessage() {
        return await MockTime.resolve(this.#responses.read());
    }

    override async close() {}
}
