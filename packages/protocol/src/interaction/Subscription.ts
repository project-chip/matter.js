/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#general";
import { type SecureSession } from "#session/SecureSession.js";
import { TlvAttributePath, TlvDataVersionFilter, TlvEventFilter, TlvEventPath, TypeFromSchema } from "#types";

const logger = Logger.get("Subscription");

export type SubscriptionId = number;

export interface SubscriptionCriteria {
    attributeRequests?: TypeFromSchema<typeof TlvAttributePath>[];
    dataVersionFilters?: TypeFromSchema<typeof TlvDataVersionFilter>[];
    eventRequests?: TypeFromSchema<typeof TlvEventPath>[];
    eventFilters?: TypeFromSchema<typeof TlvEventFilter>[];
    isFabricFiltered: boolean;
}

/**
 * A single active subscription.
 */
export abstract class Subscription {
    #session: SecureSession;
    #id: SubscriptionId;
    #isClosed?: boolean;
    #isCanceledByPeer?: boolean;
    #criteria: SubscriptionCriteria;

    constructor(session: SecureSession, id: SubscriptionId, criteria: SubscriptionCriteria) {
        this.#session = session;
        this.#id = id;
        this.#criteria = criteria;

        // TODO Do not add to session but to node/peer
        this.#session.subscriptions.add(this);
        logger.debug(`Added subscription ${this.#id} to ${this.#session.name}`);
    }

    get id() {
        return this.#id;
    }

    get criteria() {
        return this.#criteria;
    }

    get isClosed() {
        return !!this.#isClosed;
    }

    get isCanceledByPeer() {
        return !!this.#isCanceledByPeer;
    }

    get session() {
        return this.#session;
    }

    /**
     * Update session state.  This probably is meaningless except in a server context.
     */
    async update() {}

    /**
     * This flag is set on closed sessions when the close was initiated by the peer.
     */
    protected set isCanceledByPeer(value: boolean) {
        this.#isCanceledByPeer = value;
    }

    protected set isClosed(value: boolean) {
        this.#isClosed = value;
    }

    /** Close the subscription with the option to gracefully flush outstanding data. */
    abstract close(graceful: boolean): Promise<void>;

    /**
     * Destroy the subscription. Unsubscribe from all attributes and events and stop all timers.
     */
    protected async destroy(): Promise<void> {
        this.#isClosed = true;
        this.#session.subscriptions.delete(this);
        logger.debug(`Removed subscription ${this.id} from ${this.#session.name}`);
    }
}
