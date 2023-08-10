/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "#matter.js/common/MatterError.js";
import {
    ClusterModel,
    CommandModel,
    Constraint,
    DatatypeModel,
    ElementTag,
    EventModel,
    FieldValue,
    Globals,
    Metatype,
    Model,
    ValueModel,
} from "#matter.js/model/index.js";
import { asObjectKey, camelize, serialize } from "#util/string.js";
import { Entry } from "#util/TsFile.js";
import { ClusterFile } from "./ClusterFile.js";
import { NumericRanges, SpecializedNumbers, WrappedConstantKeys } from "./NumberConstants.js";

/**
 * Adds TLV structures for ValueModels to a ClusterFile
 **/
export class TlvGenerator {
    private definedDatatypes = new Set<Model>();
    private scopedNames = new Set<string>();
    private cluster: ClusterModel;

    constructor(public file: ClusterFile) {
        this.cluster = file.cluster;

        // Find datatype names that conflict at top-level module scope.
        // Datatypes at cluster level get to use their own name but for nested
        // structures we prepend the parent name
        const names = new Set<string>();
        this.cluster.visit(model => {
            if (model instanceof DatatypeModel && model.children.length) {
                const metatype = model.effectiveMetatype;
                switch (metatype) {
                    case Metatype.object:
                    case Metatype.enum:
                    case Metatype.bitmap:
                        if (names.has(model.name)) {
                            this.scopedNames.add(model.name);
                        } else {
                            names.add(model.name);
                        }
                }
            }
        });
    }

    /**
     * Import TLV type with automatic file naming.  Returns the name.
     */
    importTlv(fileOrDirectory: string, name: string) {
        if (fileOrDirectory === "datatype") {
            fileOrDirectory = `${fileOrDirectory}/${name.replace(/^Tlv/, "")}`;
        } else if (fileOrDirectory === "tlv") {
            fileOrDirectory = `${fileOrDirectory}/${name}`;
        } else if (fileOrDirectory === "number") {
            fileOrDirectory = `tlv/TlvNumber`;
        }
        this.file.addImport(fileOrDirectory, name);
        return name;
    }

    /**
     * Reference a TLV type.  Adds definitions to the file as necessary.
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
                tlv = this.integerTlv(metabase, model);
                break;

            case Metatype.any:
                tlv = this.importTlv("tlv", "TlvAny");
                break;

            case Metatype.bytes:
            case Metatype.string:
                {
                    tlv = this.importTlv(
                        "tlv/TlvString",
                        metabase.name === Globals.octstr.name ? "TlvByteString" : "TlvString",
                    );
                    const bounds = this.createLengthBounds(model);
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
                    const bounds = this.createLengthBounds(model);
                    const boundsStr = bounds ? `, ${serialize(bounds)}` : "";
                    tlv = `TlvArray(${this.reference(entry)}${boundsStr})`;
                }
                break;

            case Metatype.bitmap:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        tlv = this.bitmapTlv(dt, model);
                    } else {
                        // No fields; revert to the primitive type the bitmap
                        // derives from
                        tlv = this.primitiveTlv(metabase, model);
                    }
                }
                break;

            case Metatype.enum:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        this.importTlv("number", "TlvEnum");
                        tlv = `TlvEnum<${dt}>()`;
                    } else {
                        // No fields; revert to the primitive type the enum
                        // derives from
                        tlv = this.primitiveTlv(metabase, model);
                    }
                }
                break;

            case Metatype.object:
                {
                    const dt = this.defineDatatype(model);
                    if (dt) {
                        tlv = dt;
                    } else {
                        // This is only legal for commands but we'll fall back
                        // to it in the (illegal) case where an object has no
                        // fields
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
     * Determine the TypeScript name we'll use for a model.
     */
    nameFor(model?: Model) {
        if (!(model instanceof ValueModel)) {
            return;
        }

        const defining: ValueModel = model.definingModel ?? model;
        let name = defining.name;

        // If there is a name collision, prefix the name with the parent's name
        if (this.scopedNames.has(name) && defining.parent && !(defining instanceof ClusterModel)) {
            name = `${defining.parent.name}${name}`;
        }

        // Specialize the name based on the model type
        if (defining instanceof CommandModel && defining.isRequest) {
            name += "Request";
        }
        if (defining instanceof EventModel) {
            name += "Event";
        }

        // For enums and bitmaps we create a TypeScript value object, for other
        // types we create a TLV definition
        if (defining.effectiveMetatype === Metatype.enum) {
            if (name.endsWith("Enum")) {
                // This seems a bit redundant
                name = name.substring(0, name.length - 4);
            }
        } else if (defining.effectiveMetatype !== Metatype.bitmap) {
            name = "Tlv" + name;
        }

        // We reserve the name "Type".  Plus it's kind of ambiguous
        if (name == "Type") {
            name = `${this.cluster.name}Type`;
        }

        return name;
    }

    private integerTlv(metabase: ValueModel, model: ValueModel) {
        const globalBase = model.globalBase?.name;
        const globalMapping = SpecializedNumbers[globalBase as any];

        let tlv;
        if (globalMapping) {
            tlv = this.importTlv(...globalMapping);
        } else {
            tlv = camelize(`tlv ${metabase.name}`).replace("Uint", "UInt");
            this.importTlv("number", tlv);
        }

        if (!WrappedConstantKeys[globalBase as any]) {
            const bounds = this.createNumberBounds(model);
            if (bounds) {
                tlv = `${tlv}.bound(${serialize(bounds)})`;
            }
        }

        return tlv;
    }

    private primitiveTlv(metabase: ValueModel, model: ValueModel) {
        const primitive = metabase.primitiveBase;
        if (!primitive) {
            throw new InternalError(`No primitive base for type ${metabase.name}`);
        }
        return this.integerTlv(primitive, model);
    }

    private bitmapTlv(name: string, model: ValueModel) {
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

    private defineEnum(name: string, model: ValueModel) {
        const enumBlock = this.file.types.expressions(`export const enum ${name} {`, "}");
        this.file.types.insertingBefore(enumBlock, () => {
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

    private defineStruct(name: string, model: ValueModel) {
        this.importTlv("tlv", "TlvObject");

        const struct = this.file.types.expressions(`export const ${name} = TlvObject({`, "})");
        this.file.types.insertingBefore(struct, () => {
            model.children.forEach(field => {
                if (field.disallowed || field.deprecated) {
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
                    .atom(camelize(field.name, false), `${tlv}(${field.effectiveId}, ${this.reference(field)})`)
                    .document(field);
            });
        });

        if (!struct.entries.length) {
            struct.remove();
            return;
        }

        return struct;
    }

    private defineBitmap(name: string, model: ValueModel) {
        const bitmap = this.file.types.expressions(`export const ${name} = {`, "}");

        for (const child of model.children) {
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

            bitmap.atom(camelize(child.name, false), type).document(child);
        }

        return bitmap;
    }

    private defineDatatype(model: ValueModel) {
        // Obtain the defining model.  This is the actual datatype definition
        const defining = model.definingModel;
        if (defining) {
            model = defining;
        } else {
            // If there's no defining model, the datatype is empty.  Use either
            // the base or the model directly for naming.  Handling of this is
            // context specific
            return;
        }

        // Special case - use StatusCode enum.  The cluster can technically
        // define cluster-specific status codes so this should probably use
        // an extension type at some point but AFAICT InteractionProtocol only
        // allows for codes in its enum to be used currently
        if (model.global && model.name === Globals.status.name) {
            this.importTlv("protocol/interaction/InteractionProtocol", "StatusCode");
            return "StatusCode";
        }

        // Determine what we'll call this thing.  Name should be defined
        const name = this.nameFor(model);
        if (name === undefined) {
            return;
        }

        // If the type is already defined we reference the existing definition
        if (this.definedDatatypes.has(model)) {
            return name;
        }

        // Record name usage
        this.definedDatatypes.add(model);

        // If the type is defined in a different cluster, load the cluster type
        // rather than defining.  This will fail if the other cluster does not
        // actually use the type.  Currently not an issue.
        const definingScope = defining.owner(ClusterModel);
        if (definingScope && definingScope !== this.cluster) {
            this.file.addImport(`cluster/definitions/${definingScope.name}Cluster`, definingScope.name);
            return `${definingScope.name}.${name}`;
        }

        // Define the type
        let definition: Entry | undefined;
        switch (model.effectiveMetatype) {
            case Metatype.enum:
                definition = this.defineEnum(name, model);
                break;

            case Metatype.object:
                definition = this.defineStruct(name, model);
                break;

            case Metatype.bitmap:
                definition = this.defineBitmap(name, model);
                break;

            default:
                throw new InternalError(`${model.path}: Top-level ${model.effectiveMetatype} is unsupported`);
        }

        // If all object fields are omitted (disallowed or deprecated) then
        // no object is defined
        if (!definition) {
            return;
        }

        // Document the type.  For standalone definitions documentation is
        // present on the model.  For other definitions the documentation is
        // associated with the defining location, so just leave a comment
        // referencing that
        switch (model.tag) {
            case ElementTag.Attribute:
                definition.document({
                    details: `The value of the ${this.cluster.name} ${camelize(model.name, false)} attribute`,
                    xref: model.xref,
                });
                break;

            case ElementTag.Command:
                if ((model as CommandModel).isResponse) {
                    // Responses do not appear in the commands field
                    definition.document(model);
                } else {
                    definition.document({
                        details: `Input to the ${this.cluster.name} ${camelize(model.name, false)} command`,
                        xref: model.xref,
                    });
                }
                break;

            case ElementTag.Event:
                definition.document({
                    details: `Body of the ${this.cluster.name} ${camelize(model.name, false)} event`,
                    xref: model.xref,
                });
                break;

            default:
                if (model.parent instanceof ClusterModel) {
                    // Standalone
                    definition.document(model);
                } else {
                    definition.document({
                        details: `The value of ${this.cluster.name}.${camelize(model.name, false)}`,
                        xref: model.xref,
                    });
                }
                break;
        }

        return name;
    }

    private createLengthBounds(model: ValueModel) {
        const constraint = model.effectiveConstraint;
        const value = FieldValue.numericValue(constraint.value, model.type);
        if (value !== undefined) {
            return { length: value };
        }

        return this.createRangeBounds(constraint, "minLength", "maxLength");
    }

    private createNumberBounds(model: ValueModel) {
        const constraint = model.effectiveConstraint;
        const value = FieldValue.numericValue(constraint.value, model.type);
        if (value !== undefined) {
            return { min: value, max: value + 1 };
        }

        return this.createRangeBounds(constraint, "min", "max", model.type);
    }

    private createRangeBounds(constraint: Constraint, minKey: string, maxKey: string, type?: string) {
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
