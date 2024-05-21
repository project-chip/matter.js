/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "@project-chip/matter.js/common";
import { Logger } from "@project-chip/matter.js/log";
import {
    AttributeModel,
    ClusterModel,
    ClusterVariance,
    CommandModel,
    Conformance,
    FeatureBitmap,
    ValueModel,
    conditionToBitmaps,
    translateBitmap,
} from "@project-chip/matter.js/model";
import { Block, Entry } from "../util/TsFile.js";
import { camelize, serialize } from "../util/string.js";
import { ClusterComponentGenerator } from "./ClusterComponentGenerator.js";
import { ClusterFile } from "./ClusterFile.js";
import { ConditionalElements } from "./ConditionalElements.js";

const logger = Logger.get("generate-cluster");

export function generateCluster(file: ClusterFile) {
    const cluster = file.cluster;
    logger.info(`${cluster.name} → ${file.name}.ts`);

    file.addImport("#/cluster/mutation/MutableCluster.js", "MutableCluster");

    if (cluster.type === undefined || cluster.children.length) {
        generateDefinition(file);
    } else {
        generateAlias(file);
    }
}

function generateDefinition(file: ClusterFile) {
    const cluster = file.cluster;

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
        generateFeatures(file, base);
        generateMetadata(base, cluster);
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

    // First generate all local compound datatypes
    for (const datatype of cluster.datatypes) {
        if (!datatype.definesFields || !datatype.children.length) {
            continue;
        }
        gen.tlv.defineDatatype(datatype);
    }

    // Generate composition metadata
    if (features.length) {
        generateExtensions(file, variance, base);
    }

    // The rest of this code only applies to non-base componentized clusters
    if (cluster.id === undefined) {
        generateComplete(file, variance);
        return;
    }

    if (!features.length) {
        generateClusterInterface(file);
        generateComplete(file, variance);
        generateClusterExport(file);
        return;
    }

    // Create the default cluster instance
    generateMutableCluster(variance, file, cluster.featureMap, instance => {
        if (variance.requiresFeatures) {
            instance.atom("Base");
        } else {
            instance.atom(`...Base`);
        }
    });

    // Generate the complete cluster
    generateComplete(file, variance);
}

/**
 * Generate the actual "Foo.Cluster" object for a cluster with variance.
 */
function generateMutableCluster(
    variance: ClusterVariance,
    file: ClusterFile,
    featureMap: AttributeModel,
    populator: (instance: Block, extraDocumentation: string[]) => string | void,
) {
    const extraDocumentation = [] as string[];
    let instance;
    if (variance.requiresFeatures) {
        // The cluster requires some features to be present
        instance = file.ns.expressions(`export const ClusterInstance = MutableCluster.ExtensibleOnly(`, ")");
        const populatorDocs = populator(instance, extraDocumentation);
        if (populatorDocs) {
            extraDocumentation;
        }
        extraDocumentation.push(
            `Per the Matter specification you cannot use {@link ${file.clusterName}} without enabling certain feature combinations.  ` +
                `You must use the {@link with} factory method to obtain a working cluster.`,
        );
    } else {
        // The cluster has optional features but none are mandatory
        instance = file.ns.expressions(`export const ClusterInstance = MutableCluster({`, "})");
        populator(instance, extraDocumentation);
        extraDocumentation.push(
            `${file.clusterName} supports optional features that you can enable with the ${file.clusterName}.with() factory method.`,
        );

        const supportedFeatures = featureMap.effectiveDefault;
        if (typeof supportedFeatures === "number" && supportedFeatures) {
            // Override supportedFeatures as there are default supported features
            const supportedFeatureBlock = instance.expressions(`supportedFeatures: {`, "}");
            featureMap.children.forEach(feature => {
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

    generateClusterInterface(file, extraDocumentation.join("\n"));
    generateClusterExport(file);
}

function generateClusterInterface(file: ClusterFile, extraDoc?: string) {
    generateExportableTypeAndObject(file.ns, "Cluster").document(file.cluster, extraDoc);
}

function generateClusterExport(file: ClusterFile) {
    file.atom(`export type ${file.clusterName} = ${file.cluster.name}.Cluster`);
    file.atom(`export const ${file.clusterName} = ${file.cluster.name}.Cluster`);

    file.addImport("#/cluster/ClusterRegistry.js", "ClusterRegistry");
    file.atom(`ClusterRegistry.register(${file.cluster.name}.Complete)`);
}

/**
 * Generate a component representing the "non-varying" elements in a cluster with variable shape.
 */
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
    generateFeatures(file, base);

    return base;
}

function generateFeatures(file: ClusterFile, target: Block) {
    const features = file.cluster.features;
    if (features.length) {
        const featureBlock = target.expressions("features: {", "}");
        target.file.addImport("#/schema/BitmapSchema.js", "BitFlag");
        features.forEach(feature => {
            const name = camelize(feature.description ?? feature.name);
            featureBlock.atom(name, `BitFlag(${feature.constraint.value})`).document(feature);
        });
    }
}

/**
 * Generate extension metadata that allows for composition of clusters from components + feature selection.
 */
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
    generateIdentity(base, cluster);
    base.atom("name", `${serialize(cluster.name)}`);
    base.atom("revision", `${JSON.stringify(cluster.revision)}`);
}

function generateIdentity(target: Block, cluster: ClusterModel) {
    if (cluster.id === undefined) {
        return;
    }

    target.atom("id", `0x${cluster.id.toString(16)}`);
}

/**
 * Generate a cluster with all possible elements and basic metadata that allows for runtime validation in the "old" API.
 */
function generateComplete(file: ClusterFile, variance: ClusterVariance) {
    const isAbstract = file.cluster.id === undefined;

    if (!variance.components.length) {
        // If the cluster is not extensible, just alias "Complete" to the Cluster
        file.ns.atom(`export const Complete = ${file.cluster.id === undefined ? "Base" : "Cluster"}`);
        return;
    }

    const conditions = new ConditionalElements(file.cluster, variance);
    for (const name in conditions.definitions) {
        file.ns.value((conditions.definitions as any)[name], `const ${name} = `);
    }

    let baseName: string;
    if (variance.requiresFeatures || isAbstract) {
        // The actual "Cluster" only has a "with" property or isn't even defined
        baseName = "Base";
    } else {
        // Retrieve properties from Cluster
        baseName = "Cluster";
    }
    let factory;
    if (isAbstract) {
        factory = "MutableCluster.Component";
    } else {
        factory = "MutableCluster";
    }
    const complete = file.ns
        .expressions(`export const CompleteInstance = ${factory}({`, "})")
        .document("@see {@link Complete}");

    if (!isAbstract) {
        complete.atom("id", `${baseName}.id`);
    }
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

        // Elements that appear differently based on conformance but would conflict in the exhaustive cluster need to
        // be merged and downgraded to be less restrictive.  This won't allow for full enforcement but happens only
        // rarely and it's not clear if we'll maintain the conditional clusters going forward anyway
        let prev = ordered[0];
        for (let i = 1; i < ordered.length; i++) {
            const current = ordered[i];

            if (current.id === prev.id) {
                if (prev.conformance.toString() !== current.conformance.toString()) {
                    prev.conformance = { ast: { type: Conformance.Flag.Optional } };
                }
                if (prev.constraint.toString() !== current.constraint.toString()) {
                    prev.constraint = {};
                }
                if (prev.quality.toString() !== current.quality.toString()) {
                    if (prev.quality.nullable || current.quality.nullable) {
                        prev.quality = { nullable: true };
                    } else {
                        prev.quality = {};
                    }
                }
                if (prev.access.toString() !== current.access.toString()) {
                    throw new InternalError("Need to implement safe merging of access control");
                }

                ordered.splice(i, 1);
                i--;
            }

            prev = current;
        }

        // Add the elements
        for (const model of ordered) {
            const elementBlock = block.expressions(`${camelize(model.name)}: MutableCluster.AsConditional(`, ")");
            elementBlock.atom(`${elements.get(model)}`);
            elementBlock.value(conditions.forModel(model));
        }
    }

    ["attribute", "command", "event"].forEach(addElements);

    // Generate an interface for Complete
    file.addImport("#/util/Type.js", "Identity");
    const definition = generateExportableTypeAndObject(file.ns, "Complete");
    documentComplete(file.cluster.name, definition);
}

function documentComplete(name: string, complete: Entry) {
    complete.document(
        `This cluster supports all ${name} features.  It may support illegal feature combinations.\n` +
            "If you use this cluster you must manually specify which features are active and ensure the set of active features is legal per the Matter specification.",
    );
}

/**
 * Generate a cluster that is just an alias to a base cluster without field modification.
 */
function generateAlias(file: ClusterFile) {
    const { name, base } = file.cluster;
    if (!(base instanceof ClusterModel)) {
        throw new InternalError(`Cluster ${name} has no children or base type`);
    }

    file.addImport(`#clusters/${base.name}Cluster.js`, base.name);

    const variance = ClusterVariance(base);

    generateMutableCluster(variance, file, base.featureMap, (instance, documentation) => {
        const fields = variance.requiresFeatures ? instance.expressions("{", "}") : instance;
        fields.atom(`...${base.name}.${variance.requiresFeatures || base.id === undefined ? "Base" : "Cluster"}`);
        generateIdentity(fields, file.cluster);
        documentation.push(`This alias specializes the semantics of {@link ${base.name}.Cluster}.`);
    });

    const complete = file.ns.expressions("export const CompleteInstance = MutableCluster({", "})");
    complete.atom(`...${base.name}.Complete`);
    generateIdentity(complete, file.cluster);
    documentComplete(name, complete);
    generateExportableTypeAndObject(file.ns, "Complete");
}

/**
 * Exporting our raw objects causes their type to be inlined *everywhere* which makes our build time slow and build size
 * huge.  So instead we export an interface that extends the actual type + an object that is cast to this interface.
 *
 * If TS were to fix this at some point then we can stop doing this.
 */
export function generateExportableTypeAndObject(target: Block, name: string): Entry {
    target.file.addImport("#/util/Type.js", "Identity");
    const definition = target.atom(`export interface ${name} extends Identity<typeof ${name}Instance> {}`);
    target.undefine(name);
    target.atom(`export const ${name}: ${name} = ${name}Instance`);
    return definition;
}
