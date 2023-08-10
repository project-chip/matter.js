/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterModel } from "../models/index.js";
import { IllegalFeatureCombinations } from "./cluster-variance/IllegalFeatureCombinations.js";
import { InferredComponent, InferredComponents } from "./cluster-variance/InferredComponents.js";
import { NamedComponents } from "./cluster-variance/NamedComponents.js";

/**
 * Defines different variants of clusters.
 */
export type ClusterVariance = {
    /**
     * The base component.
     */
    base: InferredComponent;

    /**
     * Optional components.
     */
    components: NamedComponents;

    /**
     * Illegal feature combinations as bit flags.
     */
    illegal: IllegalFeatureCombinations;

    /**
     * If this is false, the cluster cannot be used without features.
     */
    requiresFeatures: boolean;
};

/**
 * Analyzes a cluster to determine components, component names and feature
 * flag -> component mapping.
 */
export function ClusterVariance(cluster: ClusterModel): ClusterVariance {
    const inferredComponents = InferredComponents(cluster);
    const { base, components } = NamedComponents(cluster, inferredComponents);
    const { illegal, requiresFeatures } = IllegalFeatureCombinations(cluster);

    return {
        base,
        components,
        illegal,
        requiresFeatures,
    };
}
