/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClientInteraction } from "#action/client/ClientInteraction.js";
import { Subscribe } from "#action/request/Subscribe.js";
import { MessageType } from "#interaction/InteractionMessenger.js";
import { PeerAddress } from "#peer/PeerAddress.js";
import { ExchangeManager } from "#protocol/ExchangeManager.js";
import { ExchangeProvider } from "#protocol/ExchangeProvider.js";
import { ExchangeReceiveOptions, MessageExchange } from "#protocol/MessageExchange.js";
import { AbortedError, ChannelType, createPromise, Duration, Environment, Seconds } from "@matter/general";
import { FabricIndex, NodeId } from "@matter/types";
import { createDummyMessageExchange } from "../../interaction/interaction-utils.js";

/** A peer that accepts a subscribe request and then sends nothing until the receiving side gives up. */
class SilentPeerExchangeProvider extends ExchangeProvider {
    readonly channelType = ChannelType.UDP;
    readonly peerAddress = PeerAddress({ fabricIndex: FabricIndex(1), nodeId: NodeId(1) });
    readonly maxPathsPerInvoke = 10;

    #requestSent = createPromise<void>();
    exchangeClosed = false;

    get requestSent() {
        return this.#requestSent.promise;
    }

    constructor() {
        super(undefined as unknown as ExchangeManager);
    }

    maximumPeerResponseTime(): Duration {
        return Seconds(30);
    }

    async initiateExchange(): Promise<MessageExchange> {
        const exchange = await createDummyMessageExchange();
        exchange.send = async (messageType: number) => {
            if (messageType === MessageType.SubscribeRequest) {
                this.#requestSent.resolver();
            }
        };
        exchange.nextMessage = (options?: ExchangeReceiveOptions) =>
            new Promise((_, reject) => {
                const abort = options?.abort;
                if (abort?.aborted) {
                    reject(new AbortedError());
                    return;
                }
                abort?.addEventListener("abort", () => reject(new AbortedError()), { once: true });
            });
        exchange.close = async () => {
            this.exchangeClosed = true;
        };
        return exchange;
    }
}

describe("ClientInteraction subscribe", () => {
    it("rejects an aborted subscribe at once and stops waiting for the peer's report on close", async () => {
        const provider = new SilentPeerExchangeProvider();
        const client = new ClientInteraction({ environment: Environment.default, exchangeProvider: provider });
        const abort = new AbortController();

        const subscribing = client.subscribe({ ...Subscribe({ attributes: [{}] }), abort: abort.signal });
        await provider.requestSent;
        abort.abort();

        await expect(subscribing).rejectedWith(AbortedError);
        expect(provider.exchangeClosed).false;

        await client.close();
        expect(provider.exchangeClosed).true;
    });
});
