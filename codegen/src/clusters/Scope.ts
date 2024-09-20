/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "#general";
import {
    ClusterModel,
    CommandModel,
    DatatypeModel,
    ElementTag,
    EventModel,
    FieldModel,
    MatterModel,
    Metatype,
    Model,
    ValueModel,
} from "#model";
import { camelize } from "../util/string.js";

/**
 * Defines the names and locations for objects in a specific scope.
 *
 * We compute this information before interacting with the scope so we can resolve any name collisions in deference to
 * the most logical definition.
 *
 * We do not worry about Tlv* prefixed names as these are not prone to collision.
 */
export interface Scope {
    /**
     * The model that defines this scope.
     */
    owner: Model;

    /**
     * Obtain the name to use for an in-scope model.
     *
     * Throws an error if the model is not assessed as in-scope.
     *
     * @param model the model to name
     * @param tlv structs have both Name and TlvName defined; this selects the latter
     */
    nameFor(model: Model, tlv?: boolean): string;

    /**
     * Obtain the location of a model's definition.
     *
     * Throws an error if the model is not referenced in this scope.
     *
     * @param model the model whose location we load
     */
    locationOf(model: Model): Scope.Location;
}

export namespace Scope {
    /**
     * The canonical location of a model.
     */
    export interface Location {
        /**
         * The scope that owns the defining model.
         */
        scope: Model;

        /**
         * The defining model.
         */
        definition: Model;

        /**
         * True iff the model is owned by this scope.
         */
        isLocal: boolean;

        /**
         * True iff the model is owned by the root Matter element.
         */
        isGlobal: boolean;
    }
}

const modelScopes = new WeakMap<Model, Scope>();

/**
 * Obtain the scope for a model.
 *
 * Scopes are cached so this should not be used with models that may mutate.
 */
export function Scope(model: Model | Scope): Scope {
    if (!(model instanceof Model)) {
        return model;
    }

    let definition = model;
    while (!definition.isGlobal) {
        if (!definition.parent) {
            throw new InternalError(`Cannot identify scope for ${model} as there is no global owner`);
        }
        definition = definition.parent;
    }

    let scope = modelScopes.get(definition);
    if (scope === undefined) {
        modelScopes.set(definition, (scope = allocateScope(definition)));
    }
    return scope;
}

function allocateScope(definition: Model): Scope {
    const { locations, names } = assignNames(definition);

    return {
        owner: definition,

        nameFor(model: Model, tlv: boolean) {
            const { definition: definer } = this.locationOf(model);
            const name = names.get(definer);
            if (name === undefined) {
                throw new InternalError(`No name assigned to ${model} in scope ${definition}`);
            }
            if (tlv) {
                return `Tlv${name}`;
            }
            return name;
        },

        locationOf(model: Model) {
            const location = locations.get(model);
            if (location === undefined) {
                throw new InternalError(`No location identified for ${model} from scope ${definition}`);
            }
            return location;
        },
    };
}

enum Priority {
    LocalNamespace,
    Struct,
    Enum,
    Bitmap,
    OtherNamespace,
    Global,
    Attribute,
    Command,
    Event,
}

type ModelsByPriority = Array<Set<Model> | undefined>;
class Locations extends Map<Model, Scope.Location> {}
type Names = Map<Model, string>;

interface BackingData {
    names: Names;
    locations: Locations;
}

function assignNames(namespace: Model): BackingData {
    const locations = identifyNamedModels(namespace);
    const priorities = assignPriorities(locations);
    const names = assignNamesByPriority(priorities);
    return { names, locations };
}

function identifyNamedModels(rootScope: Model): Locations {
    const locations = new Locations();

    locations.set(rootScope, {
        definition: rootScope,
        scope: rootScope,
        isLocal: true,
        isGlobal: true,
    });

    const base = rootScope.base;
    if (base instanceof ClusterModel || (base instanceof ValueModel && !base.metatype)) {
        locations.set(base, {
            definition: base,
            scope: base,
            isLocal: false,
            isGlobal: true,
        });
    }

    function define(model: Model) {
        if (!(model instanceof ValueModel)) {
            return;
        }

        const metatype = model.effectiveMetatype;
        switch (metatype) {
            case Metatype.array:
                const entry = model.listEntry;
                if (entry) {
                    // If entry is in another scope we won't see it when visiting
                    define(entry);
                }
                break;

            case Metatype.object:
            case Metatype.enum:
            case Metatype.bitmap:
                // Defines a type (if it has fields)
                break;

            default:
                return;
        }

        const definer = model.definingModel;
        if (!definer) {
            return;
        }

        const scope = definer.owner(ClusterModel) ?? definer.owner(MatterModel);
        if (scope === undefined) {
            throw new InternalError(`Model ${definer} does not appear to be part of a proper hierarchy`);
        }

        locations.set(definer, {
            definition: definer,
            scope,
            isLocal: scope === rootScope || definer === rootScope,
            isGlobal: scope.tag === ElementTag.Matter,
        });

        if (scope instanceof ClusterModel && scope !== rootScope) {
            locations.set(scope, {
                definition: scope,
                scope,
                isLocal: false,
                isGlobal: true,
            });
        }
    }

    // Visit all direct descendents and assign names
    rootScope.visit(define);

    // For clusters, also visit inherited attributes, commands and events
    if (rootScope instanceof ClusterModel) {
        const aces = rootScope.allAces;
        for (const ace of aces) {
            if (ace.parent === rootScope) {
                continue;
            }

            ace.visit(define);
        }
    }

    return locations;
}

function assignPriorities(locations: Locations): ModelsByPriority {
    const priorities = Array<Set<Model> | undefined>();

    function collect(priority: Priority, model: Model) {
        let slot = priorities[priority];
        if (slot === undefined) {
            slot = priorities[priority] = new Set();
        }
        slot.add(model);
    }

    for (const [model, { definition: definer, isLocal, isGlobal }] of locations) {
        if (definer instanceof DatatypeModel || definer instanceof FieldModel) {
            const definingNamespace = definer.owner(ClusterModel) ?? definer.owner(MatterModel);
            if (definingNamespace === undefined) {
                throw new InternalError(`Model ${definer} does not appear to be part of a proper hierarchy`);
            }

            if (isLocal) {
                switch ((model as ValueModel).effectiveMetatype) {
                    case Metatype.object:
                        collect(Priority.Struct, definer);
                        break;

                    case Metatype.enum:
                        collect(Priority.Enum, definer);
                        break;

                    case Metatype.bitmap:
                        collect(Priority.Bitmap, definer);
                        break;
                }
            } else {
                if (isGlobal) {
                    collect(Priority.Global, definer);
                } else {
                    collect(Priority.OtherNamespace, definingNamespace);
                }
            }
        } else {
            switch (model.tag) {
                case ElementTag.Attribute:
                    collect(Priority.Attribute, definer);
                    break;

                case ElementTag.Event:
                    collect(Priority.Event, definer);
                    break;

                case ElementTag.Command:
                    collect(Priority.Command, definer);
                    break;

                case ElementTag.Cluster:
                    collect(isLocal ? Priority.LocalNamespace : Priority.OtherNamespace, definer);
            }
        }
    }

    return priorities;
}

function assignNamesByPriority(priorities: ModelsByPriority): Names {
    const names = new Map<Model, string>();
    const assigned = new Set<string>();

    function assign(model: Model) {
        let name = camelize(model.name, true);

        // Determine preferred name
        if (model instanceof DatatypeModel) {
            name = name.replace(/(?:Enum|Struct|Bitmap)$/, "");
        } else if (model instanceof CommandModel) {
            name = name.replace(/(?:Request|Response)$/, "");
            if (model.isRequest) {
                name += "Request";
            } else {
                name += "Response";
            }
        } else if (model instanceof EventModel) {
            if (!name.endsWith("Event")) {
                name += "Event";
            }
        } else if (model instanceof ClusterModel) {
            name = name.replace(/Cluster$/, "");
        }

        // We reserve "Type", plus it's ambiguous
        if (name === "Type") {
            name = `${model.parent?.name}Type`;
        }

        // If the preferred name is unavailable, find a logical fallback
        if (assigned.has(name)) {
            switch (model.tag) {
                case ElementTag.Attribute:
                    name += "Attribute";
                    break;

                case ElementTag.Field:
                    if (model.parent && model.name !== "Type") {
                        name = `${model.parent.name}${name}`;
                    }
                    break;

                case ElementTag.Cluster:
                    name += "Namespace";
                    break;

                case ElementTag.Datatype:
                    switch ((model as DatatypeModel).effectiveMetatype) {
                        case Metatype.object:
                            name += "Struct";
                            break;

                        case Metatype.enum:
                            name += "Enum";
                            break;

                        case Metatype.bitmap:
                            name += "Bitmap";
                            break;
                    }
            }
        }

        // If the logical fallback is unavailable, just start enumerating (this unlikely, hopefully never happens)
        if (assigned.has(name)) {
            let next = 2;
            while (true) {
                const candidate = `${name}${next}`;
                if (assigned.has(name)) {
                    next++;
                } else {
                    name = candidate;
                    break;
                }
            }
        }

        names.set(model, name);
        assigned.add(name);
    }

    for (const models of priorities) {
        if (!models) {
            continue;
        }

        for (const model of models) {
            assign(model);
        }
    }

    return names;
}
