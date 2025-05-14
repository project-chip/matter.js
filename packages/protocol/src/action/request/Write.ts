/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { FALLBACK_INTERACTIONMODEL_REVISION } from "#session/Session.js";
import { AttributeData, ClusterType, WriteRequest } from "#types";
import { MalformedRequestError } from "./MalformedRequestError.js";
import { Specifier } from "./Specifier.js";

export interface Write extends WriteRequest {}

/**
 * Formulate a write-request using Matter numeric IDs.
 */
export function Write(options: Write.Options): Write;

/**
 * Formulate a write-request with extended options and name-based IDs.
 */
export function Write(options: Write.Options, ...data: Write.Attribute[]): Write;

/**
 * Formulate a write-request with name-based IDs.
 */
export function Write(...data: Write.Attribute[]): Write;

export function Write(optionsOrData: Write.Options | Write.Attribute, ...data: Write.Attribute[]): Write {
    let options;
    if ("writes" in optionsOrData) {
        options = optionsOrData;
    } else {
        data = [optionsOrData as Write.Attribute, ...data];
        options = {};
    }
    const { writes: writeRequests = [] } = options;

    const result: Write = {
        timedRequest: !!options.timed || !!options.timeout,
        writeRequests,
        interactionModelRevision: options.interactionModelRevision ?? FALLBACK_INTERACTIONMODEL_REVISION,
    };

    for (const entry of data) {
        reifyData(entry);
    }

    if (!writeRequests.length) {
        throw new MalformedRequestError(`Write action contains no attributes to write`);
    }

    return result;

    function reifyData(data: Write.Attribute) {
        const cluster = Specifier.clusterOf(data);

        if (cluster === undefined) {
            throw new MalformedRequestError(`Write action must specify a cluster`);
        }

        let { attributes } = data;
        if (attributes === undefined) {
            throw new MalformedRequestError(`Write action must specify an attribute`);
        }
        if (!Array.isArray(attributes)) {
            attributes = [attributes];
        }

        const { endpoint, value, version: dataVersion } = data;

        // Configure base AttributePath
        const prototype: AttributeData = {
            path: {
                endpointId: endpoint !== undefined ? Specifier.endpointIdOf(data) : undefined,
                clusterId: cluster.id,
                attributeId: undefined,
            },
            data: value, //should be schema.encodeTlv(value, { forWriteInteraction: true }),
            dataVersion,
        };

        for (const specifier of attributes) {
            writeRequests.push({
                ...prototype,
                path: { ...prototype.path, attributeId: Specifier.attributeFor(cluster, specifier).id },
            });
        }
    }
}

export namespace Write {
    export interface Options {
        writes?: AttributeData[];
        timed?: boolean;
        timeout?: number;
        interactionModelRevision?: number;
    }

    /**
     * Selects attributes to Write.  Limits fields to legal permutations per the Matter specification.
     */
    export type Attribute<C extends Specifier.Cluster = Specifier.Cluster> = (
        | Attribute.Concrete<C>
        | Attribute.WildcardEndpoint<C>
    ) & {
        value: any;
        version?: number;
    };

    export function Attribute<const C extends ClusterType>(data: Attribute<C>): Attribute<C> {
        return {
            ...data,
        };
    }

    export namespace Attribute {
        export interface Concrete<C extends Specifier.Cluster> {
            endpoint: Specifier.Endpoint;
            cluster: C;
            attributes: Specifier.Attribute<Specifier.ClusterFor<C>> | Specifier.Attribute<Specifier.ClusterFor<C>>[];
        }

        export interface WildcardEndpoint<C extends Specifier.Cluster> {
            endpoint?: undefined;
            cluster: C;
            attributes: Specifier.Attribute<Specifier.ClusterFor<C>> | Specifier.Attribute<Specifier.ClusterFor<C>>[];
        }
    }
}
