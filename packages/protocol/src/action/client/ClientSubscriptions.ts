/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Subscribe } from "#action/request/Subscribe.js";
import { ReadResult } from "#action/response/ReadResult.js";
import { ActiveSubscription } from "#action/response/SubscribeResult.js";
import {
    BasicSet,
    CanceledError,
    Diagnostic,
    Environment,
    Environmental,
    Logger,
    Time,
    TimeoutError,
    Timer,
} from "#general";
import { SubscriptionId } from "#interaction/Subscription.js";
import { SubscribeResponse } from "#types";
import { ClientSubscription } from "./ClientSubscription.js";

const logger = Logger.get("ClientSubscriptions");

/**
 * A managed set of {@link ClientSubscription} instances.
 */
export class ClientSubscriptions {
    #subscriptions = new BasicSet<ClientSubscription>();
    #timeout?: Timer;
    #nextTimeoutAt?: number;

    static [Environmental.create](env: Environment) {
        const instance = new ClientSubscriptions();
        env.set(ClientSubscriptions, instance);
        return instance;
    }

    /**
     * Register an active subscription.
     */
    add(request: Subscribe, response: SubscribeResponse): ActiveSubscription {
        const subscription: ClientSubscription = {
            ...response,
            request,
            close: () => this.#closeOne(subscription, new CanceledError()),
            timeoutAtMs: undefined,
            isClosed: false,
            isReading: true,
        };

        this.#subscriptions.add(subscription);
        this.resetTimer();

        return subscription;
    }

    /**
     * Retrieve a subscription by ID.
     */
    get(id: SubscriptionId) {
        return this.#subscriptions.get("subscriptionId", id);
    }

    /**
     * Iterate over active subscriptions.
     */
    [Symbol.iterator]() {
        return this.#subscriptions[Symbol.iterator]();
    }

    /**
     * Terminate all subscriptions.
     */
    async close() {
        if (this.#timeout) {
            this.#timeout.stop();
            this.#timeout = undefined;
        }
        for (const subscription of this.#subscriptions) {
            subscription.close();
        }
    }

    /**
     * Restart the timeout timer for the current set of active subscriptions.
     */
    resetTimer() {
        const now = Time.nowMs();
        let nextTimeoutAt: number | undefined;

        // Process each subscription
        for (const subscription of this.#subscriptions) {
            // If reading data reports, ignore for timeout purposes
            if (subscription.isReading) {
                continue;
            }

            // Update timeout or expire if timed out
            let { timeoutAtMs } = subscription;
            if (timeoutAtMs === undefined) {
                // Set timeout time
                timeoutAtMs = subscription.timeoutAtMs = timeoutFor(subscription);
            } else if (timeoutAtMs < now) {
                // Timeout
                this.#timeOut(subscription);
                continue;
            }

            // If this is the earliest timeout, record
            if (nextTimeoutAt === undefined || nextTimeoutAt > timeoutAtMs) {
                nextTimeoutAt = timeoutAtMs;
            }
        }

        // If no subscriptions require timeout, disable timer
        if (nextTimeoutAt === undefined) {
            this.#nextTimeoutAt = undefined;
            this.#timeout?.stop();
            return;
        }

        // Create or update timer if not set for correct interval
        if (nextTimeoutAt !== this.#nextTimeoutAt) {
            this.#nextTimeoutAt = nextTimeoutAt;
            if (this.#timeout) {
                this.#timeout?.stop();
                this.#timeout.intervalMs = nextTimeoutAt - now;
            } else {
                this.#timeout = Time.getTimer("SubscriptionTimeout", nextTimeoutAt - now, this.resetTimer.bind(this));
            }
        }
    }

    #closeOne(subscription: ClientSubscription, cause: CanceledError | TimeoutError) {
        if (subscription.isClosed) {
            return;
        }
        subscription.isClosed = true;
        this.#subscriptions.delete(subscription);

        try {
            subscription.request.closed?.(cause);
        } catch (e) {
            logger.error("Error canceling subscription", Diagnostic.strong(subscription.subscriptionId), e);
        }
    }

    #timeOut(registration: ClientSubscription) {
        logger.info(
            "Subscription",
            Diagnostic.strong(registration.subscriptionId),
            "timed out after",
            Diagnostic.strong(`${timeoutFor(registration)}ms`),
        );

        // TODO - rather than closing, put into dormant state and resubscribe when connection reestablishes
        this.#closeOne(registration, new TimeoutError());
    }
}

function timeoutFor(subscription: ClientSubscription) {
    return subscription.maxInterval * 1000 + (subscription.request.maxPeerResponseTime ?? 0);
}

export namespace ClientSubscriptions {
    export interface Listener {
        (reports: AsyncIterable<ReadResult.Chunk>): Promise<void>;
    }
}
