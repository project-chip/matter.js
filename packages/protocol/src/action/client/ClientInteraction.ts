/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Interactable, InteractionSession } from "#action/Interactable.js";
import { Invoke } from "#action/request/Invoke.js";
import { Read } from "#action/request/Read.js";
import { Subscribe } from "#action/request/Subscribe.js";
import { Write } from "#action/request/Write.js";
import { InvokeResult } from "#action/response/InvokeResult.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { SubscribeResult } from "#action/response/SubscribeResult.js";
import { WriteResult } from "#action/response/WriteResult.js";
import { Environment, Environmental, NotImplementedError, PromiseQueue } from "#general";
import { InteractionClientMessenger } from "#interaction/InteractionMessenger.js";
import { SubscriptionClient } from "#interaction/SubscriptionClient.js";
import { InteractionQueue } from "#peer/InteractionQueue.js";
import { ExchangeProvider } from "#protocol/ExchangeProvider.js";

export interface ClientInteractableContext {
    exchanges: ExchangeProvider;
    subscriptions: SubscriptionClient;
    queue: PromiseQueue;
}

/**
 * This is a WIP and currently largely a stub.
 */
export class ClientInteraction<SessionT extends InteractionSession = InteractionSession>
    implements Interactable<SessionT>
{
    readonly #exchanges: ExchangeProvider;
    readonly #subscriptions: SubscriptionClient;
    readonly #queue?: PromiseQueue;

    constructor(context: ClientInteractableContext) {
        this.#exchanges = context.exchanges;
        this.#subscriptions = context.subscriptions;
        this.#queue = context.queue;
    }

    get subscriptions() {
        return this.#subscriptions;
    }

    get queue() {
        return this.#queue;
    }

    static [Environmental.create](env: Environment) {
        const instance = new ClientInteraction({
            exchanges: env.get(ExchangeProvider),
            subscriptions: env.get(SubscriptionClient),
            queue: env.get(InteractionQueue),
        });
        env.set(ClientInteraction, instance);
        return instance;
    }

    read(_request: Read, _session?: SessionT): ReadResult {
        // TODO
        throw new NotImplementedError();
    }

    async write<T extends Write>(request: T, _session?: SessionT): WriteResult<T> {
        const messenger = await InteractionClientMessenger.create(this.#exchanges);
        const response = await messenger.sendWriteCommand(request);
        if (request.suppressResponse) {
            return undefined as Awaited<WriteResult<T>>;
        }
        if (!response || !response.writeResponses?.length) {
            return new Array<WriteResult.AttributeStatus>() as Awaited<WriteResult<T>>;
        } else {
            return response.writeResponses.map(
                ({
                    path: { nodeId, endpointId, clusterId, attributeId, listIndex },
                    status: { status, clusterStatus },
                }) => ({
                    kind: "attr-status",
                    path: {
                        nodeId,
                        endpointId: endpointId!,
                        clusterId: clusterId!,
                        attributeId: attributeId!,
                        listIndex,
                    },
                    status: status!,
                    clusterStatus,
                }),
            ) as Awaited<WriteResult<T>>;
        }
    }

    invoke<T extends Invoke>(request: Invoke, _session?: SessionT): InvokeResult<T> {
        if (request.suppressResponse) {
            return new Promise<void>((resolve, reject) => {
                InteractionClientMessenger.create(this.#exchanges)
                    .then(messenger =>
                        messenger
                            .sendInvokeCommand(request)
                            .then(() => resolve())
                            .catch(reject),
                    )
                    .then(resolve, reject);
            }) as InvokeResult<T>;
        }

        // TODO
        throw new NotImplementedError();
    }

    subscribe(_request: Subscribe, _session?: SessionT): SubscribeResult {
        // TODO
        throw new NotImplementedError();
    }
}
