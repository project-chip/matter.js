/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { Endpoint } from "#endpoint/Endpoint.js";
import { EventEmitter, GeneratedClass, Observable, ObservableProxy } from "#general";
import type { BehaviorBacking } from "./BehaviorBacking.js";

type Implementation = new (target: EventEmitter) => EventEmitter;

const EventCache = new WeakMap<new (...args: unknown[]) => unknown, Implementation>();

/**
 * Generates a BehaviorBacking.events implementation.
 *
 * The actual {@link EventEmitter} for the behavior is owned by the Endpoint.  For the behavior backing we create a
 * separate EventEmitter that proxies to the one owned by the Endpoint.
 *
 * We do this because while the API for behavior.events vs endpoint.events.behaviorId is identical, the lifecycle of
 * observers is different.  Observers registered on the behavior deregister whenever the backing closes, but observers
 * registered on the endpoint remain registered for the lifetime of the {@link Endpoint}.
 */
export function BackingEvents(backing: BehaviorBacking): EventEmitter {
    const target = backing.endpoint.eventsOf(backing.type);

    const constructor = target.constructor as new (...args: unknown[]) => unknown;

    let Implementation = EventCache.get(constructor);

    if (Implementation === undefined) {
        Implementation = EventEmitterProxy(target);
        EventCache.set(constructor, Implementation);
    }

    return new Implementation(target);
}

const TARGET = Symbol("target");

/**
 * Generates a proxy {@link EventEmitter} for the given {@link EventEmitter} instance.
 *
 * This is a {@link Proxy} that automatically adds {@link ObservableProxy} properties for events on reference.
 */
function EventEmitterProxy(instance: EventEmitter) {
    const descriptors = {} as PropertyDescriptorMap;

    for (const key in instance) {
        const property = Symbol(key);

        descriptors[key] = {
            get(this: { [TARGET]: Record<string, Observable>; [property]: Observable }) {
                let observable = this[property];
                if (observable === undefined) {
                    observable = this[property] = new ObservableProxy(this[TARGET][key]);
                }
                return observable;
            },
        };
    }

    return GeneratedClass({
        name: `${instance.constructor.name}$Proxy`,
        base: EventEmitter,
        instanceDescriptors: descriptors,

        initialize(this: { [TARGET]: EventEmitter }, target: EventEmitter) {
            this[TARGET] = target;
        },
    }) as Implementation;
}
