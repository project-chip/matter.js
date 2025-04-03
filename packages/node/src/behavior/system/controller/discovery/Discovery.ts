/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CancelablePromise, MatterAggregateError, MatterError, MaybePromise } from "#general";
import { ClientNodeFactory } from "#node/client/ClientNodeFactory.js";
import type { ClientNode } from "#node/ClientNode.js";
import type { ServerNode } from "#node/ServerNode.js";
import { CommissionableDeviceIdentifiers, ScannerSet } from "#protocol";
import { ControllerBehavior } from "../ControllerBehavior.js";
import { ActiveDiscoveries } from "./ActiveDiscoveries.js";

export class DiscoveryError extends MatterError {
    static override [Symbol.hasInstance](instance: unknown) {
        if (instance instanceof DiscoveryAggregateError) {
            return true;
        }
        return super[Symbol.hasInstance](instance);
    }
}

export class DiscoveryAggregateError extends MatterAggregateError {}

/**
 * Discovery of commissionable devices.
 *
 * This is a cancelable promise; use cancel() to terminate discovery.
 */
export abstract class Discovery<T = unknown> extends CancelablePromise<T> {
    #isCanceled = false;
    #cancel?: () => void;
    #owner: ServerNode;
    #options: Discovery.Options;
    #resolve!: (value: T) => void;
    #reject!: (cause?: any) => void;

    constructor(owner: ServerNode, options: Discovery.Options | undefined) {
        let resolve: (value: T) => void, reject: (cause?: any) => void;
        super((resolver, rejecter) => {
            resolve = resolver;
            reject = rejecter;
        });
        this.#resolve = resolve!;
        this.#reject = reject!;

        owner.env.get(ActiveDiscoveries).add(this);

        this.#owner = owner;
        this.#options = options ?? {};

        queueMicrotask(this.#initializeController.bind(this));
    }

    protected abstract onDiscovered(node: ClientNode): void;
    protected abstract onComplete(): MaybePromise<T>;

    /**
     * Terminate discovery.
     *
     * This will not abort node initialization but it will terminate any active discoveries.  The discovery result will
     * be the same as if the discovery had timed out.
     */
    override cancel() {
        if (this.#isCanceled) {
            return;
        }

        this.#isCanceled = true;
        this.#cancel?.();
    }

    override toString() {
        if ("instanceId" in this.#options) {
            return `Discovery of node instance ${this.#options.instanceId}`;
        }

        if ("longDiscriminator" in this.#options) {
            return `Discovery of node with discriminator ${this.#options.longDiscriminator}`;
        }

        if ("shortDiscriminator" in this.#options) {
            return `Discovery of node with discriminator ${this.#options.shortDiscriminator}`;
        }

        if ("productId" in this.#options && this.#options.productId !== undefined) {
            if ("vendorId" in this.#options) {
                return `Discovery of product ${this.#options.productId} from vendor ${this.#options.vendorId}`;
            }
            return `Discovery of product ${this.#options.productId}`;
        }

        if ("vendorId" in this.#options) {
            return `Discovery of node from vendor ${this.#options.vendorId}`;
        }

        if ("deviceType" in this.#options) {
            return `Discovery of node with device type ${this.#options.deviceType}`;
        }

        return "Node discovery";
    }

    /**
     * Step 1 - ensure node is initialized as a controller
     */
    #initializeController() {
        let controllerInitialized;
        try {
            this.#owner.behaviors.require(ControllerBehavior);
            controllerInitialized = this.#owner.act(agent => agent.load(ControllerBehavior));
        } catch (e) {
            this.#reject(e);
            return;
        }

        if (MaybePromise.is(controllerInitialized)) {
            controllerInitialized.then(this.#startNode.bind(this), this.#reject);
            return;
        }

        this.#startNode();
    }

    /**
     * Step 2 - ensure node is online
     */
    #startNode() {
        if (this.#isCanceled) {
            this.#invokeCompleter();
            return;
        }

        if (this.#owner.lifecycle.isOnline) {
            this.#performDiscovery();
            return;
        }

        this.#owner.start().then(this.#performDiscovery.bind(this), this.#reject);
    }

    /**
     * Step 3 - perform actual discovery
     */
    #performDiscovery() {
        if (this.#isCanceled) {
            this.#invokeCompleter();
            return;
        }

        const scanners = this.#owner.env.get(ScannerSet);

        const factory = this.#owner.env.get(ClientNodeFactory);
        const promises = new Array<PromiseLike<unknown>>();
        const cancelSignal = new Promise<void>(resolve => (this.#cancel = resolve));
        for (const scanner of scanners) {
            promises.push(
                scanner.findCommissionableDevicesContinuously(
                    this.#options,
                    descriptor => {
                        // Identify a known node that matches the descriptor
                        let node = factory.find(descriptor);

                        if (node) {
                            // Found a known node; update its commissioning metadata
                            const updatePromise = node.act(agent => {
                                agent.commissioning.descriptor = descriptor;
                            });
                            if (MaybePromise.is(updatePromise)) {
                                promises.push(updatePromise);
                            }
                        } else {
                            // This node is new to us
                            node = factory.create({
                                environment: this.#owner.env,
                                commissioning: { descriptor },
                            });
                        }

                        this.onDiscovered(node);
                    },
                    this.#options.timeoutSeconds,
                    cancelSignal,
                ),
            );
        }

        DiscoveryAggregateError.allSettled(promises, `${this} failed`)
            .then(() => this.#invokeCompleter())
            .catch(this.#reject);
    }

    /**
     * Step 4 - invoke completion callback
     */
    #invokeCompleter() {
        let result: MaybePromise<T>;
        try {
            result = this.onComplete();
        } catch (e) {
            this.#reject(e);
            return;
        }

        if (MaybePromise.is(result)) {
            result.then(this.#finish.bind(this), this.#reject);
            return;
        }

        this.#finish(result);
    }

    /**
     * Step 5 - deregister from environment and resolve
     */
    #finish(result: T) {
        this.#owner.env.get(ActiveDiscoveries).delete(this);
        this.#resolve(result);
    }
}

export namespace Discovery {
    export type Options = CommissionableDeviceIdentifiers & {
        timeoutSeconds?: number;
    };
}
