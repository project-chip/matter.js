/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ClusterType } from "../../cluster/ClusterType.js";
import type { TypeFromSchema } from "../../tlv/TlvSchema.js";
import type { Behavior } from "../Behavior.js";
import type { ClusterOf } from "./ClusterBehaviorUtil.js";

/**
 * Instance type for complete (endpoint + fabric) state.
 */
export type ClusterState<C extends ClusterType, B extends Behavior.Type> = ClusterState.Type<C, B>;

export namespace ClusterState {
    /**
     * Instance type for ClusterBehavior state.
     */
    export type Type<C extends ClusterType, B extends Behavior.Type> =
        // Keep properties *not* from attributes of the old cluster
        Omit<InstanceType<B["State"]>, keyof PropertiesOf<ClusterOf<B>>> &
            // Add properties from attributes of the old cluster
            PropertiesOf<C>;

    /**
     * Properties a cluster contributes state.
     */
    export type PropertiesOf<C> = PropertiesOfAttributes<ClusterType.AttributesOf<C>>;

    export type PropertiesOfAttributes<A extends Record<string, ClusterType.Attribute>> = {
        -readonly [N in keyof A as A[N] extends { fixed: true }
            ? never
            : A[N] extends { optional: true }
              ? never
              : N]: TypeFromSchema<A[N]["schema"]>;
    } & {
        -readonly [N in keyof A as A[N] extends { fixed: true }
            ? never
            : A[N] extends { optional: true }
              ? N
              : never]?: TypeFromSchema<A[N]["schema"]>;
    } & {
        -readonly [N in keyof A as A[N] extends { fixed: true }
            ? A[N] extends { optional: true }
                ? never
                : N
            : never]: TypeFromSchema<A[N]["schema"]>;
    } & {
        -readonly [N in keyof A as A[N] extends { fixed: true }
            ? A[N] extends { optional: true }
                ? N
                : never
            : never]?: TypeFromSchema<A[N]["schema"]>;
    };
}
