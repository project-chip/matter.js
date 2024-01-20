/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ClusterType } from "../../cluster/ClusterType.js";
import type { TypeFromSchema } from "../../tlv/TlvSchema.js";
import type { Observable } from "../../util/Observable.js";
import type { Behavior } from "../Behavior.js";
import type { ActionContext } from "../server/context/ActionContext.js";
import type { ClusterOf, Named } from "./ClusterBehaviorUtil.js";

/**
 * Event instance type for ClusterBehaviors.
 */
export type ClusterEvents<C extends ClusterType, B extends Behavior.Type> =
    // Keep observables *not* supplied by the old cluster
    Omit<InstanceType<B["Events"]>, keyof ClusterEvents.Properties<ClusterOf<B>>> &
        // Add observables supplied by the old cluster
        ClusterEvents.Properties<C>;

export namespace ClusterEvents {
    export type Type<C extends ClusterType, B extends Behavior.Type> = {
        new (): ClusterEvents<C, B>;
    };

    /**
     * Properties the cluster contributes to Events.
     */
    export type Properties<C> = AttributeObservables<Named<ClusterType.AttributesOf<C>>> &
        EventObservables<Named<ClusterType.EventsOf<C>>>;

    export type AttributeObservables<A extends Record<string, ClusterType.Attribute>> = ClusterType.SomeOptional<
        { [K in keyof A & string as `${K}$Change`]: A[K] },
        {
            [K in keyof A & string as `${K}$Change`]: AttributeObservable<A[K]>;
        }
    >;

    export type AttributeObservable<A extends ClusterType.Attribute = ClusterType.Attribute> = Observable<
        [value: TypeFromSchema<A["schema"]>, oldValue: TypeFromSchema<A["schema"]>, context: ActionContext]
    >;

    export type EventObservables<E extends Record<string, ClusterType.Event>> = ClusterType.SomeOptional<
        E,
        {
            [K in keyof E & string]: EventObservable<E[K]>;
        }
    >;

    export type EventObservable<E extends ClusterType.Event> = Observable<
        [payload: TypeFromSchema<E["schema"]>, context: ActionContext]
    >;
}
