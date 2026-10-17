/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@matter/main";
import type { LegacyEndpoint } from "./LegacyDeviceStorage.js";

const logger = Logger.get("ShadeBridgeEndpointIds");

const ON_OFF_CLUSTER = 0x06;
const LEVEL_CONTROL_CLUSTER = 0x08;
const WINDOW_COVERING_CLUSTER = 0x102;

/**
 * Endpoint ids of a window-shade bridge whose legacy and new structure is:
 *
 * ```
 * legacy key                                   new endpoint id
 * <root>                                       (root)
 * └─ index_0                  Aggregator       <aggregatorId>
 *    └─ unique_<ble>:<shade>  Bridged shade    <shade>-node
 *       ├─ index_0            primary surface  <shade>-primary
 *       ├─ index_1            secondary / aura <shade>-secondary | <shade>-aura
 *       └─ index_2            aura             <shade>-aura
 * ```
 *
 * The children are created in the order primary, secondary (if present), aura (if present). With three children
 * the order alone decides. With two children the second one is either the secondary surface or the aura light: it is
 * the aura if the legacy storage holds OnOff or LevelControl values for it, and the secondary surface if it holds
 * WindowCovering values. Without stored values of these clusters it is taken as the secondary surface and a warning
 * is logged.
 *
 * Returns undefined for endpoints outside this structure, so they are left out of the conversion.
 */
export function shadeBridgeEndpointId(endpoint: LegacyEndpoint, aggregatorId: string): string | undefined {
    const ancestors = ancestorsOf(endpoint);
    switch (ancestors.length) {
        case 1:
            return endpoint.identifier === "index_0" ? aggregatorId : undefined;

        case 2: {
            const shadeId = shadeIdOf(endpoint);
            return shadeId === undefined ? undefined : `${shadeId}-node`;
        }

        case 3:
            return surfaceIdOf(endpoint);
    }
}

function ancestorsOf(endpoint: LegacyEndpoint) {
    const ancestors = new Array<LegacyEndpoint>();
    for (let parent = endpoint.parent; parent !== undefined; parent = parent.parent) {
        ancestors.push(parent);
    }
    return ancestors;
}

/** The legacy unique id is `<bleName>:<shadeId>`; the bleName itself contains ":". */
function shadeIdOf(endpoint: LegacyEndpoint) {
    const match = endpoint.identifier.match(/^unique_.*:(\d+)$/);
    return match?.[1];
}

function surfaceIdOf(endpoint: LegacyEndpoint) {
    const { parent } = endpoint;
    const shadeId = parent === undefined ? undefined : shadeIdOf(parent);
    const index = endpoint.identifier.match(/^index_(\d+)$/)?.[1];
    if (parent === undefined || shadeId === undefined || index === undefined) {
        return;
    }

    const siblingCount = parent.children.length;
    switch (Number(index)) {
        case 0:
            return `${shadeId}-primary`;

        case 1:
            if (siblingCount >= 3) {
                return `${shadeId}-secondary`;
            }
            return `${shadeId}-${secondChildKind(endpoint)}`;

        case 2:
            return `${shadeId}-aura`;
    }
}

function secondChildKind(endpoint: LegacyEndpoint) {
    const { clusters } = endpoint;
    if (clusters.has(ON_OFF_CLUSTER) || clusters.has(LEVEL_CONTROL_CLUSTER)) {
        return "aura";
    }
    if (!clusters.has(WINDOW_COVERING_CLUSTER)) {
        logger.warn(
            `Legacy endpoint #${endpoint.number} (${endpoint.key}) has no stored window covering or light values; assuming a secondary surface`,
        );
    }
    return "secondary";
}
