/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Device } from "./Device.js";
import { Cluster, ClusterInterface, Attributes, Commands, Events } from "../cluster/Cluster.js";

/**
 * Unify multiple interfaces into a single type.
 */
type ClusterType<T> =
    T extends [ClusterInterface<infer C>]
        ? C
        : T extends [ ClusterInterface<infer C>, ...infer R ]
            ? C & ClusterType<R>
            : never;

/**
 * Creates a new class that extends a base device type with additional cluster
 * implementations.
 * 
 * @param base the class to extend
 * @param interfaces the set of interfaces to implement
 * @returns the new class
 */
export function ServesClusters<BaseT extends new (...args: any[]) => Device,
    Interfaces extends ClusterInterface<any>[]>(base: BaseT, ...interfaces: Interfaces):
    new (...args: any[]) => BaseT & ClusterType<Interfaces>
{
    class ExtendedDevice extends base {
        constructor(...args: any[]) {
            super(...args);

            initializers.forEach((initializer) => initializer.apply(this));
        }
    }
    const initializers = new Array<(this: ExtendedDevice) => void>;

    function implementCluster(definition: Cluster<any, any, Attributes, Commands, Events>) {
        // TODO -- implement interface and initializers
        definition;
    }

    interfaces.forEach(({ definition }) => {
        implementCluster(definition);
    })

    return <any>ExtendedDevice;
}
