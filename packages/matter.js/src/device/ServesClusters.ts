/**
 * @license
 * Copyright 2022 The matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Device } from "./Device.js";
import { Cluster, ClusterInterface, Attributes, Commands, Events } from "../cluster/Cluster.js";
import { UnionToIntersection } from "../util/Type.js";

type ExtractInterface<CI> = CI extends ClusterInterface<infer I> ? I : never;
type ExtractInterfaces<CIT> = { [K in keyof CIT]: ExtractInterface<CIT[K]> };
type MergeInterfaces<CIT extends ClusterInterface<any>[]> = UnionToIntersection<ExtractInterfaces<CIT[number]>>;

export function ServesClusters<BaseT extends new (...args: any[]) => Device,
    Interfaces extends ClusterInterface<any>[]>(BaseClass: BaseT, ...interfaces: Interfaces):
    BaseT & MergeInterfaces<Interfaces> {
    class ExtendedDevice extends BaseClass {
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
