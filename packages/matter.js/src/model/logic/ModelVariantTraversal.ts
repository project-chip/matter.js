/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { Logger } from "../../log/Logger.js";
import { ElementTag } from "../definitions/index.js";
import { AnyElement } from "../elements/index.js";
import { Model, ValueModel } from "../models/index.js";
import { ModelTraversal } from "./ModelTraversal.js";

const logger = Logger.get("ModelVariantTraversal");

/**
 * This is a map of equivalent models keyed by "source name".  The source
 * name is a string that identifies the source of the variant, such as "chip",
 * "spec" or "local".
 */
export type VariantMap = { [sourceName: string]: Model };

/**
 * Input to traverse().
 */
export type TraverseMap = { [sourceName: string]: Model | AnyElement };

/**
 * Supplies operational information about a set of variants.
 */
export interface VariantDetail {
    /**
     * The shared tag across all variants.
     */
    tag: ElementTag;

    /**
     * The highest priority ID across all variants, if any variant has an
     * ID.
     */
    id?: number;

    /**
     * The canonical name to use for the variants.
     */
    name: string;

    /**
     * The actual variants.
     */
    map: VariantMap;
}

/**
 * Visits multiple model hierarchies simultaneously and builds state.
 */
export abstract class ModelVariantTraversal<S = void> {
    protected clusterState: ClusterState | undefined;
    private visiting = false;
    private modelTraversal = new ModelTraversal();

    /**
     * Create a new visitor.  Must list the valid names of sources.  The order
     * of this list implies the priority used for choosing a name when multiple
     * model variants have different names.
     */
    constructor(private sourceNames: string[]) {}

    /**
     * Initiate traversal.  The class is stateful so this call should not be
     * invoked while traversal is ongoing.
     */
    traverse(variants: TraverseMap): S {
        // Ensure it's clear this class is stateful
        if (this.visiting) {
            throw new InternalError("ModelVariantVisitor.visit called with active visit; reentrancy not supported");
        }

        // Ensure prior crash doesn't muddy the waters
        delete this.clusterState;

        this.visiting = true;
        try {
            return this.visitVariants(
                this.createVariantDetail(
                    Object.fromEntries(
                        Object.entries(variants).map(([sourceName, element]) => {
                            if (!(element instanceof Model)) {
                                element = Model.create(element);
                            }
                            return [sourceName, element];
                        }),
                    ),
                ),
            );
        } finally {
            this.visiting = false;
        }
    }

    /**
     * This is the primary callback.  It is invoked for every set of variants
     * during traversal.  It may optionally return state that is returned
     * from traverse().
     *
     * @param variants the set of equivalent models
     * @param recurse call this function to recurse into variant children
     */
    protected abstract visit(variants: VariantDetail, recurse: () => S[]): S;

    /**
     * Get the canonical name for a model.  Within cluster scope alternate
     * names may be selected, otherwise the name of the model is returned.
     */
    protected getCanonicalName(model: Model) {
        if (this.clusterState) {
            const name = this.clusterState.canonicalNames.get(model);
            if (name !== undefined) {
                return name;
            }
        }
        return model.name;
    }

    /**
     * Determine if we are entering a cluster and install cluster state if so.
     */
    protected enterCluster(variants: VariantDetail) {
        if (variants.tag === ElementTag.Cluster) {
            this.clusterState = {
                canonicalNames: computeCanonicalNames(this.sourceNames, variants),
            };
            return true;
        }
        return false;
    }

    /**
     * This is the function that actually recurses during the visit.
     */
    private visitVariants(variants: VariantDetail): S {
        // Note that the only role ModelTraversal plays here is to protect
        // against loops.  We do the actual traversal ourselves
        const state = this.modelTraversal.operation(() => {
            return this.visit(variants, () => {
                const enteredCluster = this.enterCluster(variants);

                // Group children across variants
                const mappings = this.mapChildren(variants);

                // Visit children
                const result = Array<S>();
                for (const mapping of Object.values(mappings)) {
                    mappings: for (const childVariants of mapping.slots) {
                        const detail = this.createVariantDetail(childVariants);

                        // If a cluster child is defined directly in one variant but inherited in another, ignore the
                        // direct variant so we will continue to properly reflect the inheritance structure.  Only do
                        // this if the element doesn't actually have overrides though
                        let inherited = false;
                        let overrides = false;
                        if (variants.tag === ElementTag.Cluster) {
                            for (const k in variants.map) {
                                if (childVariants[k] === undefined) {
                                    const inheritedModel = variants.map[k].base?.member(detail.name, [detail.tag]);
                                    if (inheritedModel) {
                                        inherited = true;
                                    }
                                    continue;
                                }
                                const child = childVariants[k];
                                if (child instanceof ValueModel && child.overridesShadow) {
                                    overrides = true;
                                }
                            }
                        }
                        if (inherited && !overrides) {
                            continue mappings;
                        }

                        result.push(this.visitVariants(detail));
                    }
                }

                // Remove cluster state
                if (enteredCluster) {
                    delete this.clusterState;
                }

                return result;
            });
        });

        return state;
    }

    private mapChildren(variants: VariantDetail) {
        type ChildMapping = {
            // List of children associated by ID or name (ID gets priority)
            slots: VariantMap[];

            // Map of IDs to first slot the ID appeared
            idToSlot: { [id: string]: number };

            // Map of names to first slot the name appeared
            nameToSlot: { [name: string]: number };
        };
        const mappings = {} as { [tag: string]: ChildMapping };

        // Iterate over each model variant
        for (const [sourceName, variant] of Object.entries(variants.map)) {
            // For each child of this variant, associated it with a slot
            for (let i = 0; i < variant.children.length; i++) {
                const child = variant.children[i];

                if (child.global) {
                    // Ignore globals, they're managed by the MatterModel
                    continue;
                }

                const mapping =
                    mappings[child.tag] || (mappings[child.tag] = { slots: [], idToSlot: {}, nameToSlot: {} });

                const childId = child.key;
                const childName = this.getCanonicalName(child);

                let slot;

                // Find existing slot by ID
                if (childId !== undefined) {
                    slot = mapping.idToSlot[childId];
                }

                // Find existing slot by name
                if (slot === undefined) {
                    slot = mapping.nameToSlot[childName];
                }

                // Create a new slot if necessary
                if (slot === undefined) {
                    slot = mapping.slots.length;
                    mapping.slots.push({});
                }

                // Map the child's ID to the slot
                if (childId !== undefined) {
                    if (mapping.idToSlot[childId] === undefined) {
                        mapping.idToSlot[childId] = slot;
                    }
                }

                // Map the child's name to the slot
                if (mapping.nameToSlot[childName] === undefined) {
                    mapping.nameToSlot[childName] = slot;
                }

                // Update the slot
                mapping.slots[slot][sourceName] = child;
            }
        }

        return mappings;
    }

    /**
     * Create a VariantDetail from a VariantMap.
     */
    private createVariantDetail(map: VariantMap): VariantDetail {
        let tag: ElementTag | undefined;
        let id: number | undefined;
        let name: string | undefined;

        this.sourceNames.forEach(sourceName => {
            const variant = map[sourceName];
            if (variant) {
                if (!tag) {
                    tag = variant.tag;
                } else if (tag !== variant.tag) {
                    // Sanity check
                    throw new InternalError(
                        `Variant tag mismatch; previous variant identified as ${tag} but ${sourceName} identifies as ${tag}`,
                    );
                }
                if (!id) {
                    id = variant.id;
                }
                if (!name) {
                    name = this.getCanonicalName(variant);
                }
            }
        });

        if (!tag) {
            // Sanity check
            throw new InternalError("No tag identified in variant set");
        }
        if (!name) {
            // Sanity check
            throw new InternalError("No name identified in variant set");
        }

        return { tag, id, name, map };
    }
}

/**
 * Map of Model -> name
 */
type NameMapping = Map<Model, string>;

/**
 * This type manages state that changes when we enter a cluster.
 */
type ClusterState = {
    canonicalNames: NameMapping;
};

/**
 * We go to a whole lot of work to choose proper datatype names.  This is to
 * reduce the number of manual overrides we need to correct dirty data.
 *
 * This may seem like an unreasonable amount of logic but with evolving
 * specifications and 3k+ named elements (and counting) it seems worthwhile.
 *
 * ModelVariantTraversal calls this function each time it enters a cluster.
 * Thus we are only dealing with names scoped to a single cluster
 */
function computeCanonicalNames(sourceNames: string[], variants: VariantDetail) {
    // First, infer name equivalence of datatypes based on usage.  There is no
    // ID on datatypes.  This is a reliable alternative.  We perform this
    // iteratively as new mappings could appear from subfields of previously-
    // unknown equivalent datatypes
    const datatypeNameMap = new Map<Model, string>();
    let numberOfMappings;

    do {
        numberOfMappings = datatypeNameMap.size;
        inferEquivalentDatatypes(sourceNames, variants, datatypeNameMap);
    } while (numberOfMappings != datatypeNameMap.size);

    // Now that we generally what what equals what, go through the names and
    // choose the name for the final model
    const canonicalNames = chooseCanonicalNames(sourceNames, variants, datatypeNameMap);

    return canonicalNames;
}

/**
 * Populate the canonical datatype name lookup for a specific cluster.  This is
 * pretty ugly but in pseudo code:
 *
 * for each datatype that has a base type:
 *     find the name referenced by the variant of highest priority
 *     add a mapping from the referenced name to the name we found
 */
function inferEquivalentDatatypes(sourceNames: string[], variants: VariantDetail, datatypeNameMap: NameMapping) {
    type ModelNameMapping = {
        mapTo: string | undefined;
        priority: number;
    };
    const nameVariants = new Map<Model, ModelNameMapping>();

    // Create a new traversal to visit each element
    const traversal = new (class extends ModelVariantTraversal {
        override visit(variants: VariantDetail, recurse: () => void[]) {
            let mapEntry: ModelNameMapping | undefined;

            for (let priority = 0; priority < sourceNames.length; priority++) {
                const sourceName = sourceNames[priority];
                const variant = variants.map[sourceName];

                // Only elements with a base type local to the cluster are of
                // interest.  Global types we map manually so they should be
                // correct
                const base = variant?.base;
                if (!base || base.parent?.tag !== ElementTag.Cluster) {
                    continue;
                }

                // Create a new map entry if this is the highest priority
                // position
                if (!mapEntry) {
                    mapEntry = {
                        mapTo: base.name,
                        priority,
                    };
                }

                // Find existing entry
                const existingEntry = nameVariants.get(base);

                // Replace existing entry if this is a higher priority.
                // Otherwise the types should in theory be equivalent.  If
                // they're not it's a definition bug that will need to be
                // corrected manually
                if (existingEntry) {
                    if (existingEntry.priority > mapEntry.priority) {
                        nameVariants.set(base, mapEntry);
                    } else if (existingEntry.priority === mapEntry.priority && existingEntry.mapTo !== mapEntry.mapTo) {
                        logger.warn(
                            `Mapping ${sourceName} ${base.tag} ${base.name} to ${existingEntry.mapTo} but it also maps to ${mapEntry.mapTo}`,
                        );
                    }
                } else {
                    nameVariants.set(base, mapEntry);
                }
            }

            recurse();
        }

        override enterCluster() {
            // Do not call base logic because it is uses inferCanonicalNames,
            // but do install existing mappings that may be present from
            // previous iterations of this function
            if (variants.tag === ElementTag.Cluster) {
                this.clusterState = { canonicalNames: datatypeNameMap };
                return true;
            }
            return false;
        }
    })(sourceNames);
    traversal.traverse(variants.map);

    // Convert the internal structure to NameMappings
    for (const [model, mapEntry] of nameVariants) {
        if (mapEntry.mapTo && mapEntry.mapTo !== model.name) {
            datatypeNameMap.set(model, mapEntry.mapTo);
        }
    }
}

/**
 * Heuristically select the best name for each element.  Priority does affect
 * this selection but it's not absolute
 */
function chooseCanonicalNames(
    sourceNames: string[],
    variants: VariantDetail,
    datatypeNameMap: NameMapping,
): NameMapping {
    const canonicalNames = new Map<Model, string>();

    const traversal = new (class extends ModelVariantTraversal {
        visit(variants: VariantDetail, recurse: () => void) {
            let canonicalName: string | undefined;

            // First, choose the canonical name
            for (let i = 0; i < sourceNames.length; i++) {
                const name = variants.map[sourceNames[i]]?.name;

                // We give absolute priority to the highest priority element.
                // This is presumably an editorial decision made by a human
                if (!i && name !== undefined) {
                    break;
                }

                // If this is the first item, use its name
                if (!canonicalName) {
                    canonicalName = name;
                    continue;
                }

                // Prefer the shortest available name.  CHIP tends to add
                // non-standard prefixes because they have a global namespace.
                // When we scrape the spec we sometimes pick up extraneous
                // garbage
                if (name?.length < canonicalName?.length) {
                    canonicalName = name;
                    continue;
                }

                // If two names are equivalent except for case, prefer the one
                // with more capital letters.  This corrects for case issues
                // that can arise from automatic camelization in our spec
                // scraper
                if (canonicalName?.toLowerCase() === name?.toLowerCase()) {
                    if (canonicalName === name) {
                        continue;
                    }

                    if (canonicalName.replace(/[^A-Z]/g, "").length < name.replace(/[^A-Z]/g, "").length) {
                        canonicalName = name;
                        continue;
                    }
                }
            }

            // We should have found a name but if not, fall back to the name
            // chosen previously
            if (!canonicalName) {
                canonicalName = variants.name;
            }

            // Now install a mapping for any losing variants to the preferred
            // name
            for (const sourceName in variants.map) {
                const variant = variants.map[sourceName];
                if (variant.name !== canonicalName) {
                    canonicalNames.set(variant, canonicalName);
                }
            }

            recurse();
        }

        override enterCluster(variants: VariantDetail) {
            // Disable default logic, just ensure our datatype names are always
            // installed so datatypes match up correctly
            if (variants.tag === ElementTag.Cluster) {
                this.clusterState = { canonicalNames: datatypeNameMap };
                return true;
            }
            return false;
        }
    })(sourceNames);

    traversal.traverse(variants.map);

    return canonicalNames;
}
