/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Metatype, ValueModel } from "#matter.js/model/index.js";
import { Properties } from "#matter.js/util/Type.js";
import { camelize, serialize } from "#util/string.js";
import { SpecializedNumbers, WrappedConstantKeys } from "./NumberConstants.js";
import { TlvGenerator } from "./TlvGenerator.js";

/**
 * Generates a default value for fields based on model definitions.
 */
export class DefaultValueGenerator {
    constructor(private tlv: TlvGenerator) {}

    create(model: ValueModel, defaultValue = model.effectiveDefault) {
        // TODO - don't currently have a way to express "this field should
        // default to the value of another field" as indicated by
        // model.default.reference

        if (defaultValue === undefined || defaultValue === null) {
            return defaultValue;
        }

        switch (model.effectiveMetatype) {
            case Metatype.integer:
            case Metatype.float:
                return this.createNumeric(defaultValue, model);

            case Metatype.enum:
                return this.createEnum(defaultValue, model);

            case Metatype.bitmap:
                return this.createBitmap(defaultValue, model);

            case Metatype.object:
                return this.createObject(defaultValue, model);

            default:
                return defaultValue;
        }
    }

    /**
     * Simple numbers serialize either as one of our "wrapped ID" things or
     * just as a numeric literal.
     */
    private createNumeric(defaultValue: any, model: ValueModel) {
        if (typeof defaultValue !== "number" && typeof defaultValue !== "bigint") return;
        const type = model.effectiveType;
        if (type && (WrappedConstantKeys as any)[type]) {
            const importConf = SpecializedNumbers[type];
            if (!importConf) {
                throw new Error(`Unable to ascertain constructor for wrapped ID type ${type}`);
            }
            const constructor = importConf[1].replace("Tlv", "");
            this.tlv.importTlv(importConf[0], constructor);
            return serialize.asIs(`${constructor}(${defaultValue})`);
        }
        return defaultValue;
    }

    /**
     * For enums, translate ID or string into an enum constant.
     */
    private createEnum(defaultValue: any, model: ValueModel) {
        if (typeof defaultValue === "number" || typeof defaultValue === "string") {
            const value = model.member(defaultValue);
            if (value) {
                const enumName = this.tlv.nameFor(value.parent);
                if (enumName) {
                    return serialize.asIs(`${enumName}.${value.name}`);
                }
            }
        }
    }

    /**
     * Bitmaps are more complicated.  We need to collect bits into individual
     * fields.  Then we generate a value for each field depending on the field
     * type.
     */
    private createBitmap(defaultValue: any, model: ValueModel) {
        if (typeof defaultValue !== "number") {
            return;
        }

        const fields = new Map<ValueModel, number>();
        for (let bit = 0; Math.pow(bit, 2) <= defaultValue; bit++) {
            if (!(defaultValue & (1 << bit))) {
                continue;
            }

            const definition = model.bitDefinition(bit);
            if (!definition || definition.deprecated) {
                continue;
            }

            const constraint = definition.effectiveConstraint;
            if (constraint.value !== undefined) {
                fields.set(definition, 1);
            } else if (constraint.min !== undefined) {
                const fieldBit = 1 << (bit - (constraint.min as number));
                fields.set(definition, (fields.get(definition) ?? 0) & fieldBit);
            }
        }

        const properties = {} as { [name: string]: boolean | number | string };
        for (const [field, bits] of fields) {
            const name = camelize(field.name, false);
            const constraint = field.effectiveConstraint;
            if (typeof constraint.value === "number") {
                properties[name] = true;
            } else {
                const defining = field.definingModel;
                const enumValue = defining?.member(bits);
                if (enumValue) {
                    properties[name] = serialize.asIs(`${this.tlv.nameFor(defining)}.${enumValue.name}`);
                } else {
                    properties[name] = bits;
                }
            }
        }
        if (!Object.keys(properties).length) {
            return;
        }

        this.tlv.file.addImport("schema/BitmapSchema", "BitsFromPartial");
        return serialize.asIs(`BitsFromPartial(${this.tlv.nameFor(model)}, ${serialize(properties)})`);
    }

    /**
     * For objects, we need to recurse into each property.
     */
    private createObject(defaultValue: any, model: ValueModel) {
        // Neither of these should be true, this is more for TS's benefit
        if (typeof defaultValue !== "object" || defaultValue === undefined || defaultValue === null) {
            return;
        }

        const alreadyProcessed = new Set<string>();
        let result: Properties | undefined;
        for (const member of model.members) {
            const name = camelize(member.name, false);

            // Members are listed with overrides first so we ignore subsequent
            // definitions for the same name
            if (alreadyProcessed.has(name)) {
                continue;
            }
            alreadyProcessed.add(name);

            let value = defaultValue[name];
            if (value !== undefined) {
                value = this.create(member, value);
                if (value !== undefined) {
                    if (result === undefined) {
                        result = {};
                    }
                    result[name] = value;
                }
            }
        }

        return result;
    }
}
