/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "../../common/MatterError.js";
import { Aspect, Constraint } from "../aspects/index.js";
import { ElementTag, FieldValue, Metatype } from "../definitions/index.js";
import { AnyElement, Globals } from "../elements/index.js";
import { CommandModel, type Model, type ValueModel } from "../models/index.js";

const OPERATION_DEPTH_LIMIT = 20;

/**
 * This class performs lookups of models in the scope of a specific model.  We
 * use a class so the lookup can maintain state and guard against circular
 * references.
 *
 * Any logic that requires traversal of a multi-model ownership or inheritance
 * should use this class.
 *
 * Note that we don't currently utilize any kind of index when we perform
 * search.  Not currently a problem but may need to address if it becomes too
 * inefficient.
 */
export class ModelTraversal {
    private operationDepth = 0;
    private dismissed?: Set<Model>;

    /**
     * Perform an operation with iteration tracking.  If iteration depth limit
     */
    operation<T>(operator: () => T, toDismiss?: Model): T {
        if (this.operationDepth > OPERATION_DEPTH_LIMIT) {
            throw new InternalError("Likely cycle detected (or OPERATION_DEPTH_LIMIT needs to be bumped)");
        }
        if (toDismiss) {
            if (!this.dismissed) {
                this.dismissed = new Set();
            }
            this.dismissed.add(toDismiss);
        }
        this.operationDepth++;
        try {
            return operator();
        } finally {
            this.operationDepth--;
            if (toDismiss) {
                this.dismissed?.delete(toDismiss);
            }
        }
    }

    /**
     * Perform an operation with a model dismissed from consideration for type
     * lookup.
     */
    operationWithDismissal<T>(toDismiss: Model | undefined, operator: () => T): T {
        return this.operation(operator, toDismiss);
    }

    /**
     * Determine the type for a model.  This is the string name of the base
     * model.  Usually this is simply the type field but we infer the type of
     * some datatypes based on their parent's type.
     */
    getTypeName(model: Model | undefined): string | undefined {
        return this.operation(() => {
            if (!model) {
                return undefined;
            }

            if (model.type) {
                return model.type;
            }

            // Commands and events always represent structs
            if (model.tag === ElementTag.Command || model.tag === ElementTag.Event) {
                return "struct";
            }

            let result: string | undefined;
            const name = model.name;
            this.visitInheritance(model.parent, ancestor => {
                // If parented by enum or bitmap, infer type as uint of same size
                if ((ancestor as any).metatype) {
                    switch (ancestor.name) {
                        case Globals.enum8.name:
                        case Globals.map8.name:
                            result = Globals.uint8.name;
                            return false;

                        case Globals.enum16.name:
                        case Globals.map16.name:
                            result = Globals.uint16.name;
                            return false;

                        case Globals.map32.name:
                            result = Globals.uint32.name;
                            return false;

                        case Globals.map64.name:
                            result = Globals.uint64.name;
                            return false;
                    }
                }

                // If I override a field my type is the same as the overridden
                // field
                const overridden = this.findLocal(ancestor, name, [model.tag]);
                if (overridden?.type) {
                    result = overridden.type;
                    return false;
                }
            });

            return result;
        });
    }

    /**
     * Find the model in my inheritance hierarchy that has semantic meaning.
     * This will be the first inherited model with a metatype.
     */
    findMetabase(model: Model | undefined): Model | undefined {
        return this.operation(() => {
            while (model && !(model as any).metatype) {
                model = this.findBase(model);
            }
            return model;
        });
    }

    /**
     * Find the model a model derives from, if any.
     */
    findBase(model: Model | undefined): Model | undefined {
        return this.operationWithDismissal(model, () => {
            if (!model) {
                return;
            }
            const type = this.getTypeName(model);
            if (type !== undefined) {
                // Allowed tags represent a priority so search each tag
                // independently
                for (const tag of model.allowedBaseTags) {
                    const found = this.findType(model.parent, type, tag);
                    if (found) {
                        return found;
                    }
                }
            }
        });
    }

    /**
     * Find the first global model this model derives from, if any.
     */
    findGlobalBase(model: Model | undefined): Model | undefined {
        if (!model) {
            return;
        }
        let result: Model | undefined;

        this.visitInheritance(model, model => {
            if (model.global) {
                result = model;
                return false;
            }
        });

        return result;
    }

    /**
     * Determine whether this model derives from another.
     */
    instanceOf(model: Model | undefined, other: Model | AnyElement | undefined): boolean {
        if (!model || !other) {
            return false;
        }
        if (model === other) {
            return true;
        }
        let result = false;

        this.visitInheritance(model, model => {
            if (model.name === other.name && model.global === other.global) {
                result = true;
                return false;
            }
        });

        return result;
    }

    /**
     * Find an xref from this model or a parent.
     */
    findXref(model: Model | undefined): Model.CrossReference | undefined {
        return this.operationWithDismissal(model, () => {
            if (!model) {
                return;
            }
            if (model.xref) {
                return model.xref;
            }
            return this.findXref(model.parent);
        });
    }

    /**
     * Find the model this model derives from that has children, if any.
     */
    findDefiningModel(model: ValueModel | undefined): ValueModel | undefined {
        let result: ValueModel | undefined;
        this.visitInheritance(model, model => {
            if (!model.isType) {
                return false;
            }
            if (model.children.length) {
                result = model as ValueModel;
                return false;
            }
        });
        return result;
    }

    /**
     * Find a child in the parent's inheritance hierarchy with the same tag
     * and ID/name.
     */
    findShadow(model: Model | undefined): Model | undefined {
        if (model === undefined) {
            return undefined;
        }

        let shadow: Model | undefined;
        this.operationWithDismissal(model, () => {
            this.visitInheritance(this.findBase(model?.parent), parent => {
                if (model.id !== undefined) {
                    shadow = this.findLocal(parent, model.id, [model.tag]);
                    if (shadow) {
                        return false;
                    }
                }
                shadow = this.findLocal(parent, model.name, [model.tag]);
                if (shadow) {
                    return false;
                }
            });
        });
        return shadow;
    }

    /**
     * Get an aspect that reflects extension of any shadowed aspects.  Note
     * that this searches parent's inheritance and the model's inheritance.
     * This is because aspects can be inherited by overriding an element in
     * the parent or by direct type inheritance.  Aspects in shadowed elements
     * take priority as they are presumably more specific.
     */
    findAspect(model: Model | undefined, symbol: symbol): Aspect<any> | undefined {
        if (!model) {
            return;
        }

        return this.operation(() => {
            let aspect = (model as any)[symbol] as Aspect<any>;

            const shadowedAspect = this.findAspect(this.findShadow(model), symbol);
            if (shadowedAspect) {
                if (aspect) {
                    aspect = shadowedAspect.extend(aspect);
                } else {
                    aspect = shadowedAspect;
                }
            }

            const inheritedAspect = this.findAspect(this.findBase(model), symbol);
            if (inheritedAspect) {
                if (aspect) {
                    aspect = inheritedAspect.extend(aspect);
                } else {
                    aspect = inheritedAspect;
                }
            }

            return aspect;
        });
    }

    /**
     * Constraint aspects are specialized because we infer constraint fields
     * that are referenced in other models.
     */
    findConstraint(model: ValueModel, symbol: symbol, field?: "value" | "min" | "max"): Constraint | undefined {
        return this.operation(() => {
            let constraint = this.findAspect(model, symbol) as Constraint;
            if (constraint === undefined) {
                return;
            }

            const bounds = {} as Constraint.Ast;

            const resolve = (field: "value" | "min" | "max") => {
                const value = constraint[field];
                const name = FieldValue.referenced(value);
                if (name === undefined) {
                    return;
                }

                const referenced = this.findMember(model.parent, name, [
                    ElementTag.Attribute,
                    ElementTag.Datatype,
                ]) as ValueModel;
                if (!referenced) {
                    return;
                }

                const otherConstraint = this.findConstraint(referenced, symbol, field);
                if (otherConstraint?.[field]) {
                    bounds[field] = otherConstraint[field];
                }
            };

            // The only reason the field filter exists is that some fields
            // referenced in constraints are circularly constrained (e.g. min
            // of max field is max of min field and vice versa).  By only
            // loading the field of interest we avoid infinite loops
            if (field) {
                resolve(field);
            } else {
                resolve("value");
                resolve("min");
                resolve("max");
            }

            if (Object.keys(bounds).length) {
                constraint = constraint.extend(bounds) as Constraint;
            }

            return constraint;
        });
    }

    /**
     * Search inherited scope for a named member.
     */
    findMember(
        scope: Model | undefined,
        key: ModelTraversal.ElementSelector,
        allowedTags: ElementTag[],
    ): Model | undefined {
        return this.operation(() => {
            while (scope) {
                const result = this.findLocal(scope, key, allowedTags);
                if (result) {
                    return result;
                }
                scope = this.findBase(scope);
            }
        });
    }

    /**
     * Retrieve all children of a specific type, inherited or otherwise.
     */
    findMembers(scope: Model, allowedTags: ElementTag[]) {
        const members = Array<Model>();

        this.visitInheritance(scope, model => {
            for (const child of model.children) {
                if (allowedTags.indexOf(child.tag) !== -1) {
                    members.push(child);
                }
            }
        });

        return members;
    }

    /**
     * Search inherited scope for a bit definition.
     */
    findBitDefinition(scope: Model | undefined, bit: number) {
        return this.operation(() => {
            while (scope) {
                if (!scope.isType) {
                    return;
                }

                if ((scope as ValueModel).effectiveMetatype !== Metatype.bitmap) {
                    scope = scope.parent;
                    continue;
                }

                for (const c of (scope as ValueModel).children) {
                    if (c.constraint.test(bit)) {
                        return c;
                    }
                }

                scope = this.findBase(scope);
            }
        });
    }

    /**
     * Search inherited and structural type scope for a named type.
     */
    findType(scope: Model | undefined, name: string, tag: ElementTag): Model | undefined {
        return this.operation(() => {
            if (!scope) {
                return;
            }
            const queue = Array<Model>(scope);
            for (scope = queue.shift(); scope; scope = queue.shift()) {
                if (scope.isTypeScope) {
                    const result = this.findLocal(scope, name, [tag]);
                    if (result) {
                        return result;
                    }
                }

                // Search inherited scope next
                const inheritedScope = this.findBase(scope);
                if (inheritedScope) {
                    queue.unshift(inheritedScope);
                }

                // Search parent scope once all inherited scope is searched
                if (scope.parent) {
                    queue.push(scope.parent);
                }
            }
        });
    }

    /**
     * Find the response model for a command.
     */
    findResponse(command: CommandModel) {
        if (command.response && command.response !== "status") {
            return new ModelTraversal().findType(command, command.response, ElementTag.Command);
        }
    }

    /**
     * Find all children of a node that reference a specific type.
     */
    findReferences(scope: Model | undefined, type: Model | undefined): Model[] {
        if (!scope || !type) {
            return [];
        }

        const references = Array<Model>();
        this.visit(scope, model => {
            // This is the most common method for referencing
            if (this.findBase(model) === type) {
                references.push(model);
                return;
            }

            // A command can reference its response
            if (model instanceof CommandModel && this.findResponse(model) === type) {
                references.push(model);
                return;
            }

            // This is not common but the default value can reference another
            // field
            if (model.isType) {
                const defaultValue = (model as ValueModel).default;
                if (FieldValue.is(defaultValue, FieldValue.reference)) {
                    if ((defaultValue as FieldValue.Reference).name === type.name) {
                        references.push(model);
                    }
                }
            }
        });

        return references;
    }

    /**
     * Find an owning model of a specific type.
     */
    findOwner<T extends Model>(constructor: Model.Constructor<T>, model: Model | undefined): T | undefined {
        if (!model || model instanceof constructor || !model.parent) {
            return model as T | undefined;
        }

        return this.operation(() => {
            return this.findOwner(constructor, model.parent);
        });
    }

    /**
     * Find the root model.
     */
    findRoot(model: Model | undefined) {
        if (!model) {
            return undefined;
        }
        if (!model.parent) {
            return model;
        }
        this.operation(() => {
            return this.findRoot(model.parent);
        });
    }

    /**
     * Visit all nodes in the model tree.
     */
    visit(model: Model, visitor: (model: Model) => boolean | void): boolean | undefined {
        return this.operation(() => {
            if (visitor(model) === false) {
                return false;
            }
            for (const c of model.children) {
                if (this.visit(c, visitor) === false) {
                    return false;
                }
            }
            return true;
        });
    }

    /**
     * Visit all nodes in the inheritance hierarchy until the visitor returns false.
     */
    visitInheritance(model: Model | undefined, visitor: (model: Model) => boolean | void): boolean | undefined {
        return this.operation(() => {
            if (!model) {
                return;
            }
            if (visitor(model) === false) {
                return false;
            }
            const base = this.findBase(model);
            this.visitInheritance(base, visitor);
        });
    }

    /**
     * Search for a direct child by name.
     */
    private findLocal(scope: Model, key: ModelTraversal.ElementSelector, allowedTags: ElementTag[]) {
        for (const c of scope.children) {
            if (c.is(key) && allowedTags.indexOf(c.tag) !== -1 && !this.dismissed?.has(c)) {
                return c;
            }
        }
    }
}

export namespace ModelTraversal {
    export type ElementSelector = string | number | ((model: Model) => boolean);
}
