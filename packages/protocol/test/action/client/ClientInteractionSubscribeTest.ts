/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClientInteraction } from "#action/client/ClientInteraction.js";
import { Subscribe } from "#action/request/Subscribe.js";
import { Message } from "#codec/MessageCodec.js";
import { MessageType } from "#interaction/InteractionMessenger.js";
import { PeerAddress } from "#peer/PeerAddress.js";
import { ExchangeManager } from "#protocol/ExchangeManager.js";
import { ExchangeProvider } from "#protocol/ExchangeProvider.js";
import { ExchangeReceiveOptions, MessageExchange } from "#protocol/MessageExchange.js";
import {
    AbortedError,
    ChannelType,
    createPromise,
    DataReadQueue,
    Duration,
    Environment,
    Seconds,
} from "@matter/general";
import { Specification } from "@matter/model";
import { FabricIndex, NodeId, TlvSubscribeResponse } from "@matter/types";
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

/** One exchange of {@link ScriptedPeerExchangeProvider}: the test delivers its messages and decides when it closes. */
class ScriptedExchange {
    readonly #messages = new DataReadQueue<Message>();
    readonly #requestSent = createPromise<void>();
    readonly #closeReleased = createPromise<void>();
    readonly #closeCalled = createPromise<void>();
    readonly #closed = createPromise<void>();
    #holdClose = false;

    get requestSent() {
        return this.#requestSent.promise;
    }

    get closeCalled() {
        return this.#closeCalled.promise;
    }

    get closed() {
        return this.#closed.promise;
    }

    deliver(message: Message) {
        this.#messages.write(message);
    }

    holdClose() {
        this.#holdClose = true;
    }

    releaseClose() {
        this.#closeReleased.resolver();
    }

    async create() {
        const exchange = await createDummyMessageExchange();
        exchange.send = async (messageType: number) => {
            if (messageType === MessageType.SubscribeRequest) {
                this.#requestSent.resolver();
            }
        };
        exchange.nextMessage = (options?: ExchangeReceiveOptions) => this.#messages.read(options?.abort);
        exchange.close = async () => {
            this.#closeCalled.resolver();
            if (this.#holdClose) {
                await this.#closeReleased.promise;
            }
            this.#closed.resolver();
        };
        return exchange;
    }
}

class ScriptedPeerExchangeProvider extends ExchangeProvider {
    readonly channelType = ChannelType.UDP;
    readonly peerAddress = PeerAddress({ fabricIndex: FabricIndex(1), nodeId: NodeId(1) });
    readonly maxPathsPerInvoke = 10;
    #opened = new DataReadQueue<ScriptedExchange>();

    constructor() {
        super(undefined as unknown as ExchangeManager);
    }

    maximumPeerResponseTime(): Duration {
        return Seconds(30);
    }

    /** The next exchange the client opens. */
    nextExchange() {
        return this.#opened.read();
    }

    async initiateExchange(): Promise<MessageExchange> {
        const scripted = new ScriptedExchange();
        this.#opened.write(scripted);
        return scripted.create();
    }
}

function subscribeResponse(): Message {
    return {
        packetHeader: {},
        payloadHeader: { messageType: MessageType.SubscribeResponse },
        payload: TlvSubscribeResponse.encode({
            interactionModelRevision: Specification.INTERACTION_MODEL_REVISION,
            subscriptionId: 1,
            maxInterval: 60,
        }),
    } as Message;
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

    it("waits on close for an attempt that reuses the request of an abandoned subscribe", async () => {
        const provider = new ScriptedPeerExchangeProvider();
        const client = new ClientInteraction({ environment: Environment.default, exchangeProvider: provider });
        const request = Subscribe({ attributes: [{}], keepSubscriptions: true });

        const cancel = new AbortController();
        const abandoned = client.subscribe(request, { abort: cancel.signal });
        const first = await provider.nextExchange();
        await first.requestSent;
        cancel.abort();
        await expect(abandoned).rejectedWith(AbortedError);

        const retried = client.subscribe(request).then(
            () => undefined,
            (error: unknown) => error,
        );
        const second = await provider.nextExchange();
        await second.requestSent;

        // The peer confirms the abandoned subscription, which ends its termination
        first.deliver(subscribeResponse());
        await first.closed;

        second.holdClose();
        let closed = false;
        const closing = client.close().then(() => (closed = true));
        await second.closeCalled;
        await expect(Promise.race([closing, Promise.resolve("pending")])).eventually.equals("pending");
        expect(closed).false;

        second.releaseClose();
        await closing;
        expect(await retried).instanceOf(AbortedError);
    });
});
