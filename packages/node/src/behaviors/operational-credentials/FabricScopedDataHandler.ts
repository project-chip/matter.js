/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior, ClusterBehavior } from "#behavior/index.js";
import { createPromise, deepCopy, isObject, Logger, MaybePromise, withTimeout } from "#general";
import { ServerNode } from "#node/ServerNode.js";
import { OccurrenceManager, Val } from "#protocol";
import { FabricIndex, ObjectSchema } from "#types";

const logger = Logger.get("FabricScopedDataHandler");

/**
 * Sanitize Fabric scoped data and events to a list of allowed fabrics.
 * The logic walks through all endpoints and removes relevant fabric-scoped attribute values for the relevant fabric
 * from the state. After all state changes are processed, it removes all occurrences of fabric-scoped events.
 */
export async function limitNodeDataToAllowedFabrics(node: ServerNode, allowedIndices: FabricIndex[]) {
    const fabricRelevantEvents = new Set<string>();
    const stateUpdatePromises = new Array<Promise<void>>();
    let sanitizedAttributes = 0;
    await node.visit(async endpoint => {
        for (const type of Object.values(endpoint.behaviors.supported)) {
            const cluster = (type as ClusterBehavior.Type)?.cluster;
            if (!cluster) {
                continue;
            }
            const stateUpdate = {} as Val.Struct;
            const elements = endpoint.behaviors.elementsOf(type);
            if (elements.attributes.size) {
                // Iterate over all attributes and check if they are fabric-scoped
                for (const attributeName of elements.attributes) {
                    const attr = cluster.attributes[attributeName];
                    if (attr.fabricScoped) {
                        const value = (endpoint.stateOf(type) as Val.Struct)[attributeName];
                        // If the value contains data for the fabric being removed, remove the data
                        if (Array.isArray(value) && value.length > 0) {
                            const filtered = deepCopy(value).filter(entry =>
                                allowedIndices.includes(entry.fabricIndex),
                            );
                            if (filtered.length !== value.length) {
                                sanitizedAttributes++;
                                stateUpdate[attributeName] = filtered;
                            }
                        }
                    }
                }
                // If we have any state updates for this behavior, we need to set the state.
                // Errors are being logged and ignored
                if (Object.keys(stateUpdate).length > 0) {
                    const { resolver, promise } = createPromise<void>();
                    (endpoint.eventsOf(type) as Behavior.EventsOf<any>).stateChanged?.on(resolver);
                    try {
                        await endpoint.setStateOf(type, stateUpdate);
                        stateUpdatePromises.push(withTimeout(5_000, promise)); // 5s should be enough for state change
                    } catch (error) {
                        logger.warn(
                            `Could not sanitize fabric-scoped attributes for cluster ${cluster.name} on endpoint ${endpoint.id}`,
                            error,
                        );
                    }
                }
            }
            if (elements.events.size) {
                // If we have events also check if they are fabric scoped and collect them
                for (const eventName of elements.events) {
                    const event = cluster.events[eventName];
                    if ((event.schema as ObjectSchema<any>).isFabricScoped) {
                        fabricRelevantEvents.add(`${cluster.id}-${event.id}`);
                    }
                }
            }
        }
    });

    // Wait for all state changed to be executed before processing events
    await Promise.allSettled(stateUpdatePromises);

    let sanitizedEvents = 0;
    // Now we can remove all occurrences of fabric-scoped events when payload is bound to this fabric index
    if (fabricRelevantEvents.size > 0) {
        const occurrences = node.env.get(OccurrenceManager);
        for await (const event of occurrences.get()) {
            if (
                fabricRelevantEvents.has(`${event.clusterId}-${event.eventId}`) &&
                isObject(event.payload) &&
                !allowedIndices.includes(event.payload.fabricIndex as FabricIndex)
            ) {
                // Remove occurrences of fabric-scoped events
                const result = occurrences.remove(event.number);
                if (MaybePromise.is(result)) {
                    await result;
                }
                sanitizedEvents++;
            }
        }
    }
    if (sanitizedAttributes > 0 || sanitizedEvents > 0) {
        logger.info(
            `Sanitized ${sanitizedAttributes} attribute(s) and ${sanitizedEvents} event(s) because of non-existent fabrics`,
        );
    }
}
