/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { AsyncObservable, Observable } from "#general";
import type { ClusterType, TypeFromSchema } from "#types";
import type { Behavior } from "../Behavior.js";
import type { ActionContext } from "../context/ActionContext.js";
import type { ClusterOf } from "./ClusterBehaviorUtil.js";

/**
 * Event instance type for ClusterBehaviors.
 */
export type ClusterEvents<ClusterT extends ClusterType, BaseT extends Behavior.Type> =
    // Keep observables *not* supplied by the old cluster
    Omit<InstanceType<BaseT["Events"]>, keyof ClusterEvents.Properties<ClusterOf<BaseT>>> &
        // Add observables supplied by the new cluster
        ClusterEvents.Properties<ClusterT>;

export namespace ClusterEvents {
    export type Type<C extends ClusterType, B extends Behavior.Type> = {
        new (): ClusterEvents<C, B>;
    };

    /**
     * Properties the cluster contributes to Events.
     */
    export type Properties<C> = AttributeObservables<ClusterType.AttributesOf<C>, "Changing"> &
        AttributeObservables<ClusterType.AttributesOf<C>, "Changed"> &
        EventObservables<ClusterType.EventsOf<C>>;

    export type AttributeObservables<A extends Record<string, ClusterType.Attribute>, N extends string> = {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? never
                  : `${K}$${N}`
              : never]: AttributeObservable<A[K]>;
    } & {
        [K in keyof A as string extends K
            ? never
            : K extends string
              ? A[K] extends { optional: true }
                  ? `${K}$${N}`
                  : never
              : never]?: AttributeObservable<A[K]>;
    };

    export type AttributeObservable<A extends ClusterType.Attribute = ClusterType.Attribute> = AsyncObservable<
        [value: TypeFromSchema<A["schema"]>, oldValue: TypeFromSchema<A["schema"]>, context: ActionContext]
    >;

    export type EventObservables<E extends Record<string, ClusterType.Event>> = {
        [K in keyof E as string extends K
            ? never
            : K extends string
              ? E[K] extends { optional: true }
                  ? never
                  : K
              : never]: EventObservable<E[K]>;
    } & {
        [K in keyof E as string extends K
            ? never
            : K extends string
              ? E[K] extends { optional: true }
                  ? K
                  : never
              : never]?: EventObservable<E[K]>;
    };

    export type EventObservable<E extends ClusterType.Event = ClusterType.Event> = Observable<
        [payload: TypeFromSchema<E["schema"]>, context: ActionContext]
    >;
}
