/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "../../../../common/MatterError.js";
import { DataModelPath } from "../../../../endpoint/DataModelPath.js";
import { Metatype, ValueModel } from "../../../../model/index.js";
import { camelize } from "../../../../util/String.js";
import { SchemaImplementationError, WriteError } from "../../../errors.js";
import { RootSupervisor } from "../../../supervision/RootSupervisor.js";
import { Schema } from "../../../supervision/Schema.js";
import { ValueSupervisor } from "../../../supervision/ValueSupervisor.js";
import { Val } from "../../Val.js";

/**
 * Obtain a {@link ValueSupervisor.Patch} function for the given schema.
 */
export function ValuePatcher(schema: Schema, owner: RootSupervisor) {
    switch (schema.effectiveMetatype) {
        case Metatype.object:
            return StructPatcher(schema as ValueModel, owner);

        case Metatype.array:
            return ListPatcher(schema as ValueModel, owner);

        // TODO - for completeness we should either make ByteArray immutable
        // in state or wrap here but meh

        default:
            throw new ImplementationError(`Cannot generate patcher for ${schema.name} because does not define not a collection`);
    }
}

/**
 * Create a function that takes a patch object and applies it to a target object.
 */
function StructPatcher(schema: ValueModel, owner: RootSupervisor): ValueSupervisor.Patch {
    // An object mapping name to a patch function for sub-collections and undefined otherwise
    const memberPatchers = {} as Record<string, ValueSupervisor.Patch | undefined>;

    for (const member of schema.members) {
        const metatype = member.effectiveMetatype;

        let handler: ValueSupervisor.Patch | undefined;
        if (metatype === Metatype.object || metatype === Metatype.array) {
            handler = owner.get(schema).patch;
        }

        memberPatchers[camelize(member.name)] = handler;
    }

    return (changes, target, path) => {
        // Validate changes
        if (typeof changes !== "object" || changes === null || Array.isArray(changes)) {
            throw new WriteError(path, `patch definition ${changes} is not an object`);
        }

        // Validate target
        if (typeof target !== "object" || target === null || Array.isArray(target)) {
            throw new WriteError(path, `cannot patch ${target} because it is not an object`);
        }

        for (const key in changes) {
            // Validate the key
            if (!(key in memberPatchers)) {
                throw new WriteError(path, `${key} is not a property of ${schema.name}`);
            }

            const newValue = changes[key];

            // Most properties we patch as a simple "set".  This includes:
            //   - Primitives
            //   - Patch definition is not an object
            //   - Existing field is null or undefined
            const subpatch = memberPatchers[key];
            if (
                !subpatch
                || typeof newValue !== "object"
                || newValue === null
                || Array.isArray(newValue)
                || target[key] === undefined
                || target[key] === null
            ) {
                target[key] = newValue;
                continue;
            }

            // Patch subfields of array or object.  Casts to collection here may be incorrect but we rely on the
            // subpatcher for validation
            subpatch(newValue as Val.Collection, target[key] as Val.Collection, path.at(key));
        }
    }
}

/**
 * Creates a function that takes a patch object and applies it to a target array.
 */
function ListPatcher(schema: ValueModel, owner: RootSupervisor): ValueSupervisor.Patch {
    const entry = schema.listEntry;
    if (entry === undefined) {
        throw new SchemaImplementationError(DataModelPath(schema.path), "List schema has no entry definition");
    }

    const entryMetatype = entry?.effectiveMetatype;

    let patchEntry: ValueSupervisor.Patch | undefined;
    if (entryMetatype === Metatype.object || entryMetatype === Metatype.array) {
        patchEntry = owner.get(entry).patch;
    }

    return (changes, target, path) => {
        // Validate chagnes
        if (typeof changes !== "object" || changes === null) {
            throw new WriteError(path, `patch definition ${changes} is not an object`);
        }

        // Validate target
        if (!Array.isArray(target)) {
            throw new WriteError(path, `patch definition ${changes} is not an object`)
        }

        for (const indexStr in changes) {
            const index = Number.parseInt(indexStr);
            
            if (index < 0 || Number.isNaN(index)) {
                throw new WriteError(path, `key ${index} is not a valid array index`);
            }

            const newValue = (changes as any)[indexStr];

            if (patchEntry) {
                const oldValue = target[index];
                if (newValue === undefined || newValue === null || oldValue === undefined || oldValue === null) {
                    target[index] = newValue;
                } else {
                    patchEntry(newValue, target[index] as Val.Collection, path.at(index));
                }
            } else {
                target[index] = newValue;
            }
        }
    }
}
