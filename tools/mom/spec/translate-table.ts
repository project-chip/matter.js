/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Logger } from "#matter.js/log/Logger.js";
import { AnyElement, DatatypeElement, Specification } from "#matter.js/model/index.js";
import { addDocumentation } from "./add-documentation.js";
import { Str } from "./html-translators.js";
import { HtmlReference } from "./spec-types.js";

const logger = Logger.get("translate-table");

/** Generic type of table cell "translators" such as those in html-translators */
type Translator<T> = (el: HTMLElement) => T;

/** Modifier that allows a value to be undefined */
type Optional<T> = { option: "optional"; wrapped: Alias<T> | Translator<T> };
export const Optional = <T>(wrapped: Alias<T> | Translator<T>): Optional<T> => ({ option: "optional", wrapped });

/** Modifier that maps one or more columns to a canonical name */
type Alias<T> = { option: "alias"; sources: string[]; wrapped: Translator<T> };
export const Alias = <T>(wrapped: Translator<T>, ...sources: string[]): Alias<T> => ({
    option: "alias",
    sources,
    wrapped,
});

/** Injects a column with a fixed value */
type Constant<T> = { option: "constant"; value: T };
export const Constant = <T>(value: T): Constant<T> => ({ option: "constant", value });

/** Converts detail section into children */
type ChildTranslator = (tag: string, parentRecord: any, definition: HtmlReference) => DatatypeElement[] | undefined;
type Children = { option: "children"; translator: ChildTranslator };
export const Children = (translator: ChildTranslator) => ({ option: "children", translator });

/**
 * A simple schema format.  This is all a little fancy for an ugly scraping
 * tool but accuracy and repeatability is the goal
 */
type TableSchema = {
    [name: string]: any;
};

type FieldType<F> = F extends Optional<infer W>
    ? W | undefined
    : F extends Alias<infer W> | Translator<infer W> | Constant<infer W>
    ? W
    : F extends Children
    ? DatatypeElement[]
    : never;

// Create TS object type from schema definition
type TableRecord<T extends TableSchema> = {
    [name in keyof T]: FieldType<T[name]>;
} & { xref?: Specification.CrossReference; name?: string; details?: string };

const has = (object: object, name: string) => !!Object.getOwnPropertyDescriptor(object, name);

/** Translates an array of key => HTMLElement records into a proper TS type */
export function translateTable<T extends TableSchema>(
    tag: string,
    definition: HtmlReference | undefined,
    schema: T,
): Array<TableRecord<T>> {
    if (!definition) {
        return [];
    }

    if (!definition.table) {
        logger.warn(`no ${tag} table § ${definition.xref.section}`);
        return [];
    }

    const missing = new Set<string>();
    const result = Array<TableRecord<T>>();

    const aliases = Array<[string, string]>();
    const optional = new Set<string>();
    const translators = Array<[string, Translator<any> | string | number]>();
    let childTranslator: ChildTranslator | undefined;

    nextField: for (const kv of Object.entries(schema)) {
        const [k] = kv;
        let [, v] = kv;
        while (typeof v === "object") {
            switch (v.option) {
                case "optional":
                    optional.add(k);
                    v = v.wrapped;
                    break;

                case "alias":
                    for (const source of v.sources) {
                        aliases.push([source, k]);
                    }
                    v = v.wrapped;
                    break;

                case "constant":
                    v = v.value;
                    break;

                case "children":
                    childTranslator = v.translator;
                    continue nextField;
            }
        }

        translators.push([k, v]);
    }

    // Translate each table row
    nextRow: for (let source of definition.table.rows) {
        source = { ...source };

        // Map aliased columns to their normalized name
        for (const [alias, name] of aliases) {
            if (!has(source, name) && has(source, alias)) {
                source[name] = source[alias];
                delete source[alias];
            }
        }

        // Hard cast as we are taking care of enforcing typing ourselves
        const record = { xref: definition.xref } as TableRecord<T>;

        // Translate each field
        for (const [name, translator] of translators) {
            const el = source[name];
            let value;
            if (typeof translator === "function") {
                value = el === undefined ? undefined : translator(el);
            } else {
                value = translator;
            }

            // Ignore the row if required values are missing
            const empty = value === undefined || value === null || value === "" || Number.isNaN(value);
            if (empty && !optional.has(name)) {
                missing.add(name);
                continue nextRow;
            }

            // Set the column
            if (!empty) {
                (record as any)[name] = value;
            }
        }
        result.push(record);
    }

    if (missing.size) {
        logger.error(
            `§ ${definition.xref.section} ignored one or more ${tag} rows due to missing fields: ${Array(
                ...missing,
            ).join(", ")}`,
        );
        logger.error(`keys present are: ${Object.keys(definition.table.rows[0]).join(", ")}`);
    }

    if (definition.details) {
        installPreciseDetails(tag, definition.details, result, childTranslator);
    }

    return result;
}

// Convert from raw records into a matter element.  Note that we have to
// cast the element to any for automatic properties because TS isn't sure that
// the extension hasn't changed the values
export function translateRecordsToMatter<R, E extends { id?: number; name: string }>(
    desc: string,
    records: R[],
    mapper: (record: R) => E | undefined,
): Array<E> | undefined {
    const result = Array<E>();
    for (const record of records) {
        const mapped = mapper(record);
        if (!mapped) {
            continue;
        }

        logger.debug(`${desc} ${mapped.name} = ${mapped.id ?? "(anon)"}`);
        result.push(mapped);
    }
    if (!result.length) {
        return undefined;
    }
    return result;
}

/** Attempt to install more specific xref and details */
function installPreciseDetails(
    tag: string,
    definitions: HtmlReference[],
    records: Array<{ name?: string; xref?: Specification.CrossReference; details?: string; children?: AnyElement[] }>,
    childTranslator?: ChildTranslator,
) {
    const lookup = Object.fromEntries(
        definitions.map(detail => [detail.name.toLowerCase().replace(/\s*\([^)]+\)\s*/g, " "), detail]),
    );

    records.forEach(r => {
        if (!r.name) {
            return;
        }

        const detail = lookup[`${r.name.toLowerCase()} ${tag}`] || lookup[`${r.name.toLowerCase()}`];
        if (detail) {
            r.xref = detail.xref;

            addDocumentation(r, detail);

            if (r.details && r.details.indexOf("SHALL indicate the of the") !== -1) {
                // Goofballs copy & pasted this typo a couple times
                r.details = r.details.replace("the of the", "the status of the");
            }

            if (childTranslator) {
                r.children = childTranslator(tag, r, detail);
            }
        }
    });
}

/** The type of data we think is present in a field */
enum InferredFieldType {
    Unknown,
    UniqueNumbers,
    UniqueStrings,
}

/** Examine a field in every row to infer the type of a field */
function inferFieldType(definition: HtmlReference, name: string): InferredFieldType {
    if (!definition.table) {
        return InferredFieldType.Unknown;
    }

    const values = new Set<string>();
    let inferredType = InferredFieldType.Unknown;

    // Examine each row
    for (const row of definition.table.rows) {
        // Extract the value and rows without the named field
        const value = row[name];
        if (!value) {
            return InferredFieldType.Unknown;
        }
        const str = Str(value);
        if (str === "") {
            return InferredFieldType.Unknown;
        }

        // We're only interested in fields with unique values
        if (values.has(str)) {
            return InferredFieldType.Unknown;
        }
        values.add(str);

        // Update state based on the shape of the field
        if (str.match(/^\d+/)) {
            // Could be the ID.  Note we allow garbage after the ID
            if (inferredType === InferredFieldType.UniqueStrings) {
                return InferredFieldType.Unknown;
            }
            inferredType = InferredFieldType.UniqueNumbers;
        } else {
            // Could be the name
            if (inferredType === InferredFieldType.UniqueNumbers) {
                return InferredFieldType.Unknown;
            }
            inferredType = InferredFieldType.UniqueStrings;
        }
    }

    return inferredType;
}

/** Infer the columns to use for ID and name */
export function chooseIdentityAliases(definition: HtmlReference, preferredIds: string[], preferredNames: string[]) {
    const fields = definition.table?.fields;

    let ids: string[] | undefined;
    let names: string[] | undefined;
    let idIndex = -1,
        nameIndex = -1;

    if (fields && fields.length > 1) {
        // Use the first preferred ID that is present
        for (const id of preferredIds) {
            idIndex = fields.indexOf(id);
            if (idIndex !== -1) {
                break;
            }
        }

        // Use the first preferred name that is present
        for (const name of preferredNames) {
            nameIndex = fields.indexOf(name);
            if (nameIndex !== -1) {
                break;
            }
        }

        // If we didn't find a preferred ID, use the first IDish column
        if (idIndex === -1) {
            for (let i = 0; i < fields.length; i++) {
                if (inferFieldType(definition, fields[i]) === InferredFieldType.UniqueNumbers) {
                    idIndex = i;
                    break;
                }
            }
        }

        // If we found the ID, set the alias
        if (idIndex !== -1) {
            ids = [fields[idIndex]];
        }

        // If we didn't find a preferred name, use the first namish column
        // following the ID
        if (nameIndex === -1) {
            for (let i = idIndex === -1 ? 0 : idIndex; i < fields.length; i++) {
                if (inferFieldType(definition, fields[i]) === InferredFieldType.UniqueStrings) {
                    nameIndex = i;
                    break;
                }
            }
        }

        // If we found the name, set the alias
        if (nameIndex !== -1) {
            names = [fields[nameIndex]];
        }
    }

    // If ids or names is undefined, the table is probably invalid but return
    // the preferred sets anyway
    if (!ids) {
        ids = preferredIds;
    }
    if (!names) {
        names = preferredNames;
    }

    return { ids, names };
}
