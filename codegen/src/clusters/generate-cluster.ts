/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "@project-chip/matter.js/log";
import {
    ClusterModel,
    ClusterVariance,
    CommandModel,
    DatatypeModel,
    FeatureBitmap,
    ValueModel,
    conditionToBitmaps,
    translateBitmap,
} from "@project-chip/matter.js/model";
import { Block, Documentation } from "../util/TsFile.js";
import { camelize, serialize } from "../util/string.js";
import { ClusterComponentGenerator } from "./ClusterComponentGenerator.js";
import { ClusterFile } from "./ClusterFile.js";
import { ConditionalElements } from "./ConditionalElements.js";

const logger = Logger.get("generate-cluster");

export function generateCluster(file: ClusterFile) {
    const cluster = file.cluster;
    logger.info(`${cluster.name} → ${file.name}.ts`);
    file.addImport("cluster/mutation/MutableCluster.js", "MutableCluster");

    // Analyze variance
    const variance = ClusterVariance(cluster);

    // Load features
    const features = cluster.features;

    // Generate components
    const gen = new ClusterComponentGenerator(file.ns, cluster);
    for (const component of variance.components) {
        gen.defineComponent(component);
    }

    // Generate the base component
    let base;
    if (cluster.id === undefined) {
        // Base cluster
        base = file.ns
            .expressions(`export const Base = MutableCluster.Component({`, "})")
            .document(
                `${cluster.name} is a derived cluster, not to be used directly.  These elements are present in all clusters derived from ${cluster.name}.`,
            );
    } else if (!features.length) {
        // Non-extensible cluster
        base = file.ns
            .expressions(`export const ClusterInstance = MutableCluster({`, "})")
            .document("@see {@link Cluster}");
        generateMetadata(base, cluster);
    } else {
        base = generateExtensibleClusterBase(file);
    }
    gen.populateComponent(variance.base, base);

    // Generate status codes even if they aren't referenced directly
    const status = cluster.get(DatatypeModel, "StatusCode");
    if (status) {
        gen.tlv.reference(status);
    }

    // The rest of this code only applies to non-base componentized clusters
    if (cluster.id === undefined) {
        return;
    }
    if (!features.length) {
        generateClusterInterface(file, cluster);
        generateExhaustive(file, variance);
        generateClusterExport(file);
        return;
    }

    // Generate composition metadata
    generateExtensions(file, variance, base);

    // Create the default cluster instance
    let documentation;
    let extraDocumentation: string | undefined;
    let instance;
    if (variance.requiresFeatures) {
        // The cluster requires some features to be present
        instance = file.ns.expressions(`export const ClusterInstance = MutableCluster.ExtensibleOnly(`, ")");
        documentation = cluster;
        (extraDocumentation =
            `Per the Matter specification you cannot use {@link ${file.clusterName}} without enabling certain feature combinations.  ` +
            `You must use the ${file.clusterName}.with() factory method to obtain a working cluster.`),
            instance.atom("Base");
    } else {
        // The cluster has optional features but none are mandatory
        instance = file.ns.expressions(`export const ClusterInstance = MutableCluster({`, "})");
        documentation = cluster;
        extraDocumentation = `${file.clusterName} supports optional features that you can enable with the ${file.clusterName}.with() factory method.`;
        instance.atom("...Base");

        const supportedFeatures = cluster.featureMap.effectiveDefault;
        if (typeof supportedFeatures === "number" && supportedFeatures) {
            // Override supportedFeatures as there are default supported
            // features
            const supportedFeatureBlock = instance.expressions(`supportedFeatures: {`, "}");
            features.forEach(feature => {
                if (typeof feature.constraint.value === "number") {
                    if (supportedFeatures & (1 << feature.constraint.value)) {
                        const name = camelize(feature.description ?? feature.name);
                        supportedFeatureBlock.atom(name, "true");
                    }
                }
            });
        }
    }
    instance.document("@see {@link Cluster}");

    // Generate an interface for the cluster as interfaces are not inlined
    // in declaration files
    generateClusterInterface(file, documentation, extraDocumentation);

    // Generate the "complete" cluster
    generateExhaustive(file, variance);

    // Export the cluster
    generateClusterExport(file);
}

function generateClusterInterface(file: ClusterFile, documentation: string | Documentation, extraDoc?: string) {
    file.addImport("util/Type.js", "Identity");
    file.ns
        .atom("export interface Cluster extends Identity<typeof ClusterInstance> {}")
        .document(documentation, extraDoc);
    file.ns.undefine("Cluster");
    file.ns.atom("export const Cluster: Cluster = ClusterInstance");
}

function generateClusterExport(file: ClusterFile) {
    file.atom(`export type ${file.clusterName} = ${file.cluster.name}.Cluster`);
    file.atom(`export const ${file.clusterName} = ${file.cluster.name}.Cluster`);

    file.addImport("cluster/ClusterRegistry.js", "ClusterRegistry");
    file.atom(`ClusterRegistry.register(${file.cluster.name}.Complete)`);
}

function generateExtensibleClusterBase(file: ClusterFile) {
    // Feature enum
    const featureEnum = file.ns.expressions(`export enum Feature {`, "}").document({
        description: `These are optional features supported by ${file.clusterName}.`,
        xref: file.cluster.featureMap.xref,
    });
    for (const f of file.cluster.features) {
        const name = camelize(f.description ?? f.name, true);
        featureEnum.atom(`${name} = ${serialize(name)}`).document(f);
    }

    // Base component
    const base = file.ns
        .expressions("export const Base = MutableCluster.Component({", "})")
        .document(`These elements and properties are present in all ${file.cluster.name} clusters.`);
    generateMetadata(base, file.cluster);

    // Features
    const features = file.cluster.features;
    if (features.length) {
        const featureBlock = base.expressions("features: {", "}");
        base.file.addImport("schema/BitmapSchema.js", "BitFlag");
        features.forEach(feature => {
            const name = camelize(feature.description ?? feature.name);
            featureBlock.atom(name, `BitFlag(${feature.constraint.value})`).document(feature);
        });
    }

    return base;
}

function generateExtensions(file: ClusterFile, variance: ClusterVariance, base: Block) {
    const extensions = base
        .expressions("extensions: MutableCluster.Extensions(", ")")
        .document(
            `This metadata controls which ${file.clusterName} elements matter.js activates for specific feature combinations.`,
        );

    for (const accept of variance.components) {
        let bitmaps: FeatureBitmap[];
        if (accept.condition) {
            bitmaps = conditionToBitmaps(accept.condition, file.cluster);
        } else {
            // Don't think this should happen
            bitmaps = [{}];
        }

        for (const bitmap of bitmaps) {
            const extension = extensions.expressions("{", "}");
            extension.value(bitmap, "flags: ");
            extension.atom("component", `${accept.name}Component`);
        }
    }

    const illegal = variance.illegal.map(bitmap => translateBitmap(bitmap, file.cluster));
    for (const reject of illegal) {
        extensions.value({
            flags: reject,
            component: false,
        });
    }
}

function generateMetadata(base: Block, cluster: ClusterModel) {
    if (cluster.id === undefined) {
        return;
    }

    base.atom("id", `0x${cluster.id.toString(16)}`);
    base.atom("name", `${JSON.stringify(cluster.name)}`);
    base.atom("revision", `${JSON.stringify(cluster.revision)}`);
}

function generateExhaustive(file: ClusterFile, variance: ClusterVariance) {
    if (!variance.components.length) {
        // If the cluster is not extensible, just alias "Complete" to the
        // Cluster
        file.ns.atom(`export const Complete = Cluster`);
        return;
    }

    const conditions = new ConditionalElements(file.cluster, variance);
    for (const name in conditions.definitions) {
        file.ns.value((conditions.definitions as any)[name], `const ${name} = `);
    }

    let baseName: string;
    if (variance.requiresFeatures) {
        // The actual "Cluster" only has a "with" property
        baseName = "Base";
    } else {
        // Retrieve properties from Cluster
        baseName = "Cluster";
    }
    const complete = file.ns
        .expressions(`export const CompleteInstance = MutableCluster({`, "})")
        .document("@see {@link Complete}");

    complete.atom("id", `${baseName}.id`);
    complete.atom("name", `${baseName}.name`);
    complete.atom("revision", `${baseName}.revision`);
    if (file.cluster.features.length) {
        complete.atom("features", `${baseName}.features`);
    }

    // Add elements of specific type
    function addElements(tag: string) {
        // Collect elements and a name referencing them in their original location
        const elements = new Map<ValueModel, string>();
        for (const component of variance.components) {
            for (const element of [...component.optional, ...component.mandatory]) {
                if (element.tag !== tag) {
                    continue;
                }

                if (element instanceof CommandModel && element.isResponse) {
                    continue;
                }

                if (!elements.has(element)) {
                    elements.set(element, `${component.name}Component.${tag}s.${camelize(element.name)}`);
                }
            }
        }

        // If the base has elements of this type, we add them without modification
        let baseElements: string | undefined;
        if ([...variance.base.mandatory, ...variance.base.optional].some(e => e.tag === tag)) {
            baseElements = `${baseName}.${tag}s`;
            if (!elements.size) {
                // Only elements are only contributed by the base so just map 1:1
                complete.atom(`${tag}s`, baseElements);
            }
        }

        if (!elements.size) {
            return;
        }

        const block = complete.expressions(`${tag}s: {`, "}");

        // If we have base elements, spread them into the block
        if (baseElements) {
            block.atom(`...${baseElements}`);
        }

        // Order elements by ID so they appear roughly in spec order
        const ordered = [...elements.keys()].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));

        // Add the elements
        for (const model of ordered) {
            const elementBlock = block.expressions(`${camelize(model.name)}: MutableCluster.AsConditional(`, ")");
            elementBlock.atom(`${elements.get(model)}`);
            elementBlock.value(conditions.forModel(model));
        }
    }

    ["attribute", "command", "event"].forEach(addElements);

    // Generate an interface for Complete
    file.addImport("util/Type.js", "Identity");
    file.ns
        .atom("export interface Complete extends Identity<typeof CompleteInstance> {}")
        .document(
            `This cluster supports all ${file.cluster.name} features.  It may support illegal feature combinations.\n` +
                "If you use this cluster you must manually specify which features are active and ensure the set of active features is legal per the Matter specification.",
        );
    file.ns.undefine("Complete");
    file.ns.atom("export const Complete: Complete = CompleteInstance");
}
