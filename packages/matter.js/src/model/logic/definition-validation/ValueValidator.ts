/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Access, Conformance, Constraint, Quality } from "../../aspects/index.js";
import { DefinitionError, FieldValue, Metatype } from "../../definitions/index.js";
import { ClusterModel, ValueModel } from "../../models/index.js";
import { ModelValidator } from "./ModelValidator.js";

/**
 * Validates models that extend DataModel.
 */
export class ValueValidator<T extends ValueModel> extends ModelValidator<T> {
    override validate() {
        this.validateProperty({ name: "type", type: "string" });
        this.validateProperty({ name: "byteSize", type: "number" });
        this.validateProperty({ name: "constraint", type: Constraint });
        this.validateProperty({ name: "conformance", type: Conformance });
        this.validateProperty({ name: "access", type: Access });
        this.validateProperty({ name: "quality", type: Quality });
        this.validateProperty({ name: "metatype", type: Metatype });

        this.model.conformance.validateReferences(name => {
            // Features are all caps, other names are field references
            if (name.match(/^[A-Z_$]+$/)) {
                // Feature lookup
                const cluster = this.model.owner(ClusterModel);
                return !!cluster?.features.find(f => f.name === name);
            } else {
                // Field lookup
                return !!this.model.parent?.member(name);
            }
        });

        this.validateAspect("conformance");
        this.validateAspect("constraint");
        this.validateAspect("access");
        this.validateAspect("quality");

        this.validateType();
        this.validateEntries();

        super.validate();
    }

    private validateAspect(name: string) {
        const aspect = (this.model as any)[name];
        if (aspect?.errors) {
            aspect.errors.forEach((e: DefinitionError) => this.model.error(e.code, e.message));
        }
    }

    private validateType() {
        if (this.model.effectiveType === undefined) {
            if (this.model.metatype) {
                // Not a derivative type
                return;
            }

            // Spec does not always provide type information for deprecated
            // fields
            if (this.model.deprecated) {
                return;
            }

            // Non-global types must specify a base type
            this.error("NO_TYPE", "No type information");
            return;
        }

        const base = this.model.base;
        if (base === undefined) {
            // Error is reported as ModelValidator TYPE_UNKNOWN
            return;
        }

        const metabase = this.model.metabase;
        if (metabase === undefined) {
            this.error("METATYPE_UNKNOWN", `No metatype for ${this.model.type}`);
            return;
        }
        const metatype = metabase.metatype;
        if (metatype === undefined) {
            // This shouldn't happen because the presence of the metatype is
            // what makes it a metabase.  But eslint doesn't know that
            this.error("METATYPE_MISSING", `Metabase ${metabase.name} has no metatype`);
            return;
        }

        let defaultValue = this.model.default;
        if (defaultValue === undefined) {
            return;
        }

        if (this.validateSpecialDefault(metatype, defaultValue)) {
            return;
        }

        // Convert value to proper type if possible
        if (metatype === Metatype.string && defaultValue === "empty") {
            // Metatype doesn't handle this case because otherwise you'd never
            // be able to have a string called "empty".  In this case though
            // the data likely comes from the spec so we're going to take a
            // flyer and say you can never have "empty" as a default value
            defaultValue = "";
        }
        const cast = Metatype.cast(metatype, defaultValue);
        if (cast === FieldValue.Invalid) {
            this.error("INVALID_VALUE", `Value "${defaultValue}" is not a ${metatype}`);
            return;
        }
        defaultValue = cast;

        // For enums convert string name to numeric ID
        if (metatype === Metatype.enum) {
            if (typeof defaultValue === "string") {
                let member = this.model.member(defaultValue);

                // If the name didn't match, try case-insensitive search
                if (!member) {
                    // Cast of def to string should be unnecessary here, TS bug?
                    member = this.model.member(
                        model => model.name.toLowerCase() === (defaultValue as string).toLowerCase(),
                    );
                }

                if (member && member.effectiveId !== undefined) {
                    defaultValue = member.effectiveId;
                } else {
                    this.error("INVALID_ENTRY", `"${defaultValue}" is not in ${metatype} ${this.model.type}`);
                }
            }
        }

        this.model.default = defaultValue;
    }

    private validateEntries() {
        // Note - these checks only apply for first-order derived types, so use
        // direct metatype
        const metatype = this.model.directMetatype;
        switch (metatype) {
            case Metatype.object:
                if (this.model.metatype || !this.model.children.length) {
                    this.error("CHILDLESS_STRUCT", `struct element with no children`);
                }
                break;

            case Metatype.enum:
            case Metatype.bitmap:
                if (!this.model.children.length && !this.model.global) {
                    this.error(`CHILDLESS_${metatype.toUpperCase()}`, `${this.model.type} with no children`);
                }
                if (metatype == Metatype.enum) {
                    this.validateEnumKeys();
                } else {
                    this.validateBitFields();
                }
                break;

            case Metatype.array:
                if (!this.model.children.length) {
                    this.error("UNTYPED_ARRAY", `array element with no entry type`);
                } else if (this.model.children.length > 1) {
                    this.error("OVERLY_TYPED_ARRAY", `array element with multiple entry types`);
                }
                break;
        }
    }

    private validateEnumKeys() {
        const ids = new Set<number>();
        const names = new Set<string>();
        for (const c of this.model.children) {
            if (c.id) {
                if (ids.has(c.id)) {
                    this.error(
                        "DUPLICATE_ENUM_ID",
                        `${this.model.type} ID 0x${c.id.toString(16)} appears more than once`,
                    );
                } else {
                    ids.add(c.id);
                }
            }
            if (names.has(c.name)) {
                this.error("DUPLICATE_ENUM_NAME", `${this.model.type} name "${c.name}" appears more than once`);
            }
        }
    }

    private validateBitFields() {
        const ranges = Array<{ name: string; min: number; max: number }>();
        for (const c of this.model.children) {
            let min, max;

            if (typeof c.constraint.value === "number") {
                min = c.constraint.value;
                max = c.constraint.value + 1;
            } else {
                min = c.constraint.min;
                max = c.constraint.max;
                if (typeof min !== "number" || typeof max !== "number" || min < 0 || min > max) {
                    this.error(
                        "UNCONSTRAINED_BIT_RANGE",
                        `${this.model.type} bit field "${c.name}" is not properly constrained`,
                    );
                    continue;
                }
            }

            for (const r of ranges) {
                if (min < r.max && max > r.min) {
                    this.error(
                        "OVERLAPPING_BIT_RANGE",
                        `${this.model.type} bit fields "${r.name}" and "${c.name}" overlap`,
                    );
                }
            }

            ranges.push({ name: c.name, min, max });
        }
    }

    private validateSpecialDefault(metatype: Metatype, def: any) {
        // Special "reference" object referencing another field by name
        if (typeof def === "object" && FieldValue.is(def, FieldValue.reference)) {
            const reference = (def as FieldValue.Reference).name;
            const other = this.model.parent?.member(reference);
            if (!other) {
                this.error("MEMBER_UNKNOWN", `Default value references unknown property ${reference}`);
            }
            return true;
        }

        // If the default value is a string referencing another field, convert
        // to a reference object
        if (typeof def === "string") {
            const other = this.model.parent?.member(def);
            if (other) {
                this.model.default = FieldValue.Reference(other.name);
                return true;
            }
        }

        // If the default value for bitmaps is an array, treat as a set of
        // flag names or IDs; validate as such
        if (metatype === Metatype.bitmap && Array.isArray(def)) {
            for (const value of def) {
                if (typeof value !== "string" && typeof value !== "number") {
                    this.error("INVALID_BIT_FLAG", `Default bit flag ${def} is not a string or number`);
                    continue;
                }
                if (!this.model.member(value)) {
                    this.error("UNRESOLVED_BIT_FLAG", `Default bit flag ${def} is not a valid bit value`);
                }
            }
            return true;
        }
    }
}
