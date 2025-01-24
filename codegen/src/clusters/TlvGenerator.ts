/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "#general";
import {
    ClusterModel,
    CommandModel,
    Constraint,
    DatatypeModel,
    ElementTag,
    FieldValue,
    MatterModel,
    Metatype,
    Model,
    octstr,
    status,
    ValueModel,
} from "#model";
import { ScopeFile } from "../util/ScopeFile.js";
import { Block, Entry } from "../util/TsFile.js";
import { asObjectKey, camelize, serialize } from "../util/string.js";
import { GeneratorScope } from "./GeneratorScope.js";
import { NumericRanges, SpecializedNumbers, specializedNumberTypeFor } from "./NumberConstants.js";

/**
 * Adds TLV structures for ValueModels to a ClusterFile
 **/
export class TlvGenerator {
    #scope: GeneratorScope;
    #file: ScopeFile;
    #definitions: Block;
    #definedDatatypes = new Set<Model>();

    constructor(file: ScopeFile, definitions?: Block) {
        this.#scope = file.scope;
        this.#file = file;
        this.#definitions = definitions ?? file;
    }

    get owner() {
        return this.#scope.owner;
    }

    get scope() {
        return this.#scope;
    }

    get file() {
        return this.#file;
    }

    get definitions() {
        return this.#definitions;
    }

    /**
     * Import TLV type with automatic file naming.  Returns the name.
     */
    importTlv(fileOrDirectory: string, name: string, as?: string) {
        if (fileOrDirectory === "datatype") {
            fileOrDirectory = `!types/${fileOrDirectory}/${name.replace(/^Tlv/, "")}.js`;
        } else if (fileOrDirectory === "tlv") {
            fileOrDirectory = `!types/${fileOrDirectory}/${name}.js`;
        } else if (fileOrDirectory === "number") {
            fileOrDirectory = `!types/tlv/TlvNumber.js`;
        } else {
            fileOrDirectory = `!types/${fileOrDirectory}.js`;
        }

        if (as) {
            name = `${name} as ${as}`;
        }

        this.file.addImport(fileOrDirectory, name);
        return name;
    }

    /**
     * Reference a TLV type.  Adds definitions to the file as necessary.
     *
     * @param model the model to reference
     *
     * @return the referencing TS expression as a string
     */
    reference(model: ValueModel): string {
        const metabase = model.metabase;
        if (!metabase) {
            throw new InternalError(`${model.path}: No root type for ${model.type}`);
        }

        let tlv: string;
        switch (metabase.metatype) {
            case Metatype.boolean:
                tlv = this.importTlv("tlv", "TlvBoolean");
                break;

            case Metatype.float:
                if (metabase.name === "single") {
                    tlv = "TlvFloat";
                } else {
                    tlv = "TlvDouble";
                }
                this.importTlv("number", tlv);
                break;

            case Metatype.integer:
                tlv = this.#integerTlv(metabase, model);
                break;

            case Metatype.any:
                tlv = this.importTlv("tlv", "TlvAny");
                break;

            case Metatype.bytes:
            case Metatype.string:
                {
                    tlv = this.importTlv(
                        "tlv/TlvString",
                        metabase.name === octstr.name ? "TlvByteString" : "TlvString",
                    );
                    const bounds = this.#createLengthBounds(model);
                    if (bounds) {
                        tlv = `${tlv}.bound(${serialize(bounds)})`;
                    }
                }
                break;

            case Metatype.array:
                {
                    this.importTlv("tlv", "TlvArray");
                    const entry = model.listEntry;
                    if (!entry) {
                        throw new InternalError(`${model.path}: No list entry type`);
                    }
                    const bounds = this.#createLengthBounds(model);
                    const boundsStr = bounds ? `, ${serialize(bounds)}` : "";
                    tlv = `TlvArray(${this.reference(entry)}${boundsStr})`;
                }
                break;

            case Metatype.bitmap:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        tlv = this.#bitmapTlv(dt, model);
                    } else {
                        // No fields; revert to the primitive type the bitmap derives from
                        tlv = this.#primitiveTlv(metabase, model);
                    }
                }
                break;

            case Metatype.enum:
                {
                    const dts = new Set<string>();
                    for (let m = this.#scope.definingModelFor(model); m; m = m.base) {
                        if (!m.children.length) {
                            continue;
                        }
                        const dt = this.#defineSpecificDatatype(m);
                        if (dt !== undefined) {
                            dts.add(dt);
                        }
                    }
                    if (dts.size) {
                        this.importTlv("number", "TlvEnum");
                        tlv = `TlvEnum<${[...dts].join(" | ")}>()`;
                    } else {
                        // No fields; revert to the primitive type the enum derives from
                        tlv = this.#primitiveTlv(metabase, model);
                    }
                }
                break;

            case Metatype.object:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        tlv = dt;
                    } else {
                        // TlvNoArguments is only legal for commands but we'll fall back to it in the (illegal) case
                        // where an object has no fields
                        return this.importTlv("tlv", "TlvNoArguments");
                    }
                }
                break;

            default:
                throw new InternalError(`${model.path}: No tlv mapping for base type ${metabase.name}`);
        }
        if (model.quality.nullable) {
            this.importTlv("tlv", "TlvNullable");
            tlv = `TlvNullable(${tlv})`;
        }
        return tlv;
    }

    /**
     * Get the filename for global datatypes.
     */
    static filenameFor(model: Model) {
        const name = model.name.replace(/Enum|Bitmap|Struct$/, "");
        return camelize(name, true);
    }

    #integerTlv(metabase: ValueModel, model: ValueModel) {
        const globalBase = specializedNumberTypeFor(model)?.name;
        const globalMapping = SpecializedNumbers[globalBase as any];

        let tlv;
        if (globalMapping) {
            tlv = this.importTlv(globalMapping.category, globalMapping.type);
        } else {
            tlv = camelize(`tlv ${metabase.name}`, true).replace("Uint", "UInt");
            this.importTlv("number", tlv);
        }

        if (globalMapping?.category !== "datatype") {
            const bounds = this.#createNumberBounds(model);
            if (bounds) {
                tlv = `${tlv}.bound(${serialize(bounds)})`;
            }
        }

        return tlv;
    }

    #primitiveTlv(metabase: ValueModel, model: ValueModel) {
        const primitive = metabase.primitiveBase;
        if (!primitive) {
            throw new InternalError(`No primitive base for type ${metabase.name}`);
        }
        return this.#integerTlv(primitive, model);
    }

    #bitmapTlv(name: string, model: ValueModel) {
        let tlvNum;
        switch (model.metabase?.name) {
            case "map8":
                tlvNum = "TlvUInt8";
                break;

            case "map16":
                tlvNum = "TlvUInt16";
                break;

            case "map32":
                tlvNum = "TlvUInt32";
                break;

            case "map64":
                tlvNum = "TlvUInt64";
                break;

            default:
                throw new InternalError(`${model.path}: Could not determine numeric type for ${model.type}`);
        }

        this.importTlv("number", tlvNum);
        this.importTlv("number", "TlvBitmap");

        return `TlvBitmap(${tlvNum}, ${name})`;
    }

    #defineEnum(name: string, model: ValueModel) {
        const enumBlock = this.definitions.expressions(`export enum ${name} {`, "}");

        this.definitions.insertingBefore(enumBlock, () => {
            model.children.forEach(child => {
                let name = child.name;
                if (name.match(/^\d+$/)) {
                    // Typescript doesn't allow numeric enum keys
                    name = `E${name}`;
                }
                enumBlock.atom(`${asObjectKey(name)} = ${child.id}`).document(child);
            });
        });

        return enumBlock;
    }

    #defineStruct(name: string, model: ValueModel) {
        const struct = this.definitions.expressions(`export const ${name} = TlvObject({`, "})");
        this.definitions.insertingBefore(struct, () => {
            model.members.forEach(field => {
                if (field.isDisallowed || (field.isDeprecated && !field.type)) {
                    return;
                }

                let tlv: string;
                if (field.mandatory) {
                    tlv = "TlvField";
                } else {
                    tlv = "TlvOptionalField";
                }

                this.importTlv("tlv/TlvObject", tlv);
                struct
                    .atom(camelize(field.name), `${tlv}(${field.effectiveId}, ${this.reference(field)})`)
                    .document(field);
            });
        });

        if (!struct.entries.length) {
            struct.remove();
            return;
        }

        this.importTlv("tlv", "TlvObject");
        this.file.addImport("!types/tlv/TlvSchema.js", "TypeFromSchema");
        const intf = this.definitions.atom(
            `export interface ${name.slice(3)} extends TypeFromSchema<typeof ${name}> {}`,
        );
        this.#documentType(model, intf);

        return struct;
    }

    #defineBitmap(name: string, model: ValueModel) {
        const bitmap = this.definitions.expressions(`export const ${name} = {`, "}");

        for (const child of model.members) {
            let type: string | undefined;

            const constraint = child.effectiveConstraint;
            if (typeof constraint.value === "number") {
                // Single bit
                this.importTlv("schema/BitmapSchema", "BitFlag");
                type = `BitFlag(${constraint.value})`;
            } else if (typeof constraint.min === "number" && typeof constraint.max === "number") {
                if (child.effectiveMetatype === Metatype.enum) {
                    const enumName = this.defineDatatype(child);
                    if (enumName) {
                        // Bit range with enum definition
                        this.importTlv("schema/BitmapSchema", "BitFieldEnum");
                        type = `BitFieldEnum<${enumName}>`;
                    }
                }

                if (!type) {
                    // Raw bit range
                    this.importTlv("schema/BitmapSchema", "BitField");
                    type = `BitField`;
                }

                type = `${type}(${constraint.min}, ${constraint.max - constraint.min})`;
            } else {
                // Can't do anything without a property constrained definition
                continue;
            }

            bitmap.atom(camelize(child.name), type).document(child);
        }

        return bitmap;
    }

    defineDatatype(model: ValueModel) {
        // Obtain the defining model.  This is the actual datatype definition
        const defining = this.#scope.definingModelFor(model);

        if (!defining) {
            // If there's no defining model, the datatype is empty.  Use either the base or the model directly for
            // naming.  Handling of this is context specific
            return;
        }

        return this.#defineSpecificDatatype(defining);
    }

    #defineSpecificDatatype(model: ValueModel) {
        // Special case for status codes.  "Status code" in door lock cluster seems to be the global status codes
        // instead of the local one.  So always reference the global one until we see something different
        if (model.isGlobal && model.name === status.name && this.file.scope.owner !== model) {
            let as;
            if (this.owner?.get(DatatypeModel, "Status")) {
                // Status would conflict with local type so import as an alias
                as = "GlobalStatus";
            }

            this.importTlv("globals/Status", "Status", as);
            return as ?? "Status";
        }

        // If the model is not local, import rather than define
        const isObject = model.effectiveMetatype === Metatype.object;
        const location = this.#scope.locationOf(model, true);
        if (!location.isLocal) {
            return this.#file.reference(model, isObject, true);
        }

        // If the type is already defined we reference the existing definition
        const name = this.#file.scope.nameFor(model, isObject);
        if (this.#definedDatatypes.has(model)) {
            return name;
        }

        // Record name usage
        this.#definedDatatypes.add(model);

        // Define the type
        let definition: Entry | undefined;
        switch (model.effectiveMetatype) {
            case Metatype.enum:
                definition = this.#defineEnum(name, model);
                break;

            case Metatype.object:
                definition = this.#defineStruct(name, model);
                break;

            case Metatype.bitmap:
                definition = this.#defineBitmap(name, model);
                break;

            default:
                throw new InternalError(`${model.path}: Top-level ${model.effectiveMetatype} is unsupported`);
        }

        // If all object fields are omitted (disallowed or deprecated) then no object is defined
        if (!definition) {
            return;
        }

        this.#documentType(model, definition);

        return name;
    }

    #documentType(model: ValueModel, definition: Entry) {
        // Document the type.  For standalone definitions documentation is present on the model.  For other definitions
        // the documentation is associated with the defining location, so just leave a comment referencing that
        switch (model.tag) {
            case ElementTag.Attribute:
                definition.document({
                    details: `The value of the ${this.owner.name} ${camelize(model.name)} attribute`,
                    xref: model.xref,
                });
                break;

            case ElementTag.Command:
                if ((model as CommandModel).isResponse) {
                    // Responses do not appear in the commands field
                    definition.document(model);
                } else {
                    definition.document({
                        details: `Input to the ${this.owner.name} ${camelize(model.name)} command`,
                        xref: model.xref,
                    });
                }
                break;

            case ElementTag.Event:
                definition.document({
                    details: `Body of the ${this.owner.name} ${camelize(model.name)} event`,
                    xref: model.xref,
                });
                break;

            default:
                if (model.parent instanceof ClusterModel || model.parent instanceof MatterModel) {
                    // Standalone
                    definition.document(model);
                } else {
                    definition.document({
                        details: `The value of ${this.owner.name}.${camelize(model.name)}`,
                        xref: model.xref,
                    });
                }
                break;
        }
    }

    #extractApplicableConstraint(model: ValueModel) {
        let constraint = model.effectiveConstraint;

        // Our TLV parser has no way of representing "in" constraints.  But if the referenced array has a member
        // constraint then we can at least enforce to that level with the TLV parser
        if (constraint.in) {
            const siblingName = FieldValue.referenced(constraint.in);
            if (siblingName) {
                const sibling = model.parent?.member(camelize(siblingName, true)) as ValueModel;
                const siblingConstraint = sibling.effectiveConstraint;
                if (siblingConstraint.entry) {
                    constraint = siblingConstraint.entry;
                }
            }
        }

        return constraint;
    }

    #createLengthBounds(model: ValueModel) {
        const constraint = this.#extractApplicableConstraint(model);

        const value = FieldValue.numericValue(constraint.value, model.type);
        if (value !== undefined) {
            return { length: value };
        }

        return this.#createRangeBounds(constraint, "minLength", "maxLength");
    }

    #createNumberBounds(model: ValueModel) {
        const constraint = model.effectiveConstraint;

        const value = FieldValue.numericValue(constraint.value, model.type);
        if (value !== undefined) {
            return { min: value, max: value };
        }

        return this.#createRangeBounds(constraint, "min", "max", model.type);
    }

    #createRangeBounds(constraint: Constraint, minKey: string, maxKey: string, type?: string) {
        let min = FieldValue.numericValue(constraint.min, type);
        let max = FieldValue.numericValue(constraint.max, type);

        if (min === (NumericRanges as any)[type as any]?.min) {
            min = undefined;
        }

        if (max === (NumericRanges as any)[type as any]?.max) {
            max = undefined;
        }

        if (min === undefined && max === undefined) {
            return;
        }

        const bounds = {} as { [key: string]: number };
        if (min !== undefined) {
            bounds[minKey] = min;
        }
        if (max !== undefined) {
            bounds[maxKey] = max;
        }

        return bounds;
    }
}
