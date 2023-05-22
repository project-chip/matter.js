/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterServer } from "../protocol/interaction/index.js";
import { BitSchema, TypeFromBitSchema } from "../schema/BitmapSchema.js";
import { AttributeInitialValues, Attributes, Cluster, ClusterServerHandlers, Commands, Events } from "./index.js";

type AnyCluster = Cluster<any, any, any, any, any>;

function notImplemented() {
    throw new Error("Not implemented");
}

export class ClusterServerFactory {
    private static providers = new Map<AnyCluster, () => any>();

    public static register<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, SF, A, C, E>, provider: () => ClusterServerHandlers<Cluster<F, SF, A, C, E>>) {
        this.providers.set(cluster, provider);
    }

    public static create<F extends BitSchema, SF extends TypeFromBitSchema<F>, A extends Attributes, C extends Commands, E extends Events>(cluster: Cluster<F, SF, A, C, E>, attributeInitialValues?: AttributeInitialValues<A>, handlers?: ClusterServerHandlers<Cluster<F, SF, A, C, E>>) {
        handlers = Object.assign({}, handlers);

        const provider = this.providers.get(cluster);
        if (provider) {
            Object.assign(handlers, provider());
        }

        for (const command in cluster.commands) {
            if (!(handlers as any)[command]) {
                (handlers as any)[command] = notImplemented;
            }
        }

        let attributes = {} as AttributeInitialValues<A>;
        for (const attribute in cluster.attributes) {
            if (cluster.attributes[attribute].default !== undefined) {
                (attributes as any)[attribute] = cluster.attributes[attribute].default;
            }
        }
        Object.assign(attributes, attributeInitialValues);

        return ClusterServer(cluster, attributes, handlers);
    }
}
