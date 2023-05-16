/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates TypeScript interfaces for each cluster into src/cluster/interface

import * as tlv from "../../src/tlv/index.js";
import { camelize, clean, writeTS, clusters } from "./util.js";
import { GlobalAttributes } from "../../src/cluster/Cluster.js";

clean("cluster/interface", "Interface");

const GLOBAL_ATTRIBUTE_IDS = new Set(Object.values(GlobalAttributes({})).map((attribute) => attribute.id));

class TypeContext {
    typeName = "";
    typeSource = "";
    hasByteArray = false;
    hasTypeFromSchema = false;
    definitions = new Array<string>;
}

function suffixed(name: string, suffix: string) {
    return camelize(name) + suffix;
}

function mapType(type: tlv.TlvSchema<any>, context: TypeContext): string {
    switch (type.constructor) {
        case tlv.NullableSchema:
            return `${mapType((<tlv.NullableSchema<any>>type).schema, context)} | undefined`;

        case tlv.VoidSchema:
            return "void";

        case tlv.AnySchema:
            return "any";

        case tlv.TlvWrapper:
            return mapType((<tlv.TlvWrapper<any, any>>type).underlyingSchema, context);

        case tlv.StringSchema:
            if ((<tlv.StringSchema<any>>type).type == tlv.TlvType.ByteString) {
                if (!context.hasByteArray) {
                    context.hasByteArray = true;
                    context.definitions.unshift('import { ByteArray } from "../../util/index.js"')
                }
                return "ByteArray";
            }
            return "string";

        case tlv.BooleanSchema:
            return "boolean";

        case tlv.TlvNumberSchema:
            return "number";

        case tlv.ArraySchema:
            return `${mapType((<tlv.ArraySchema<any>>type).elementSchema, context)}[]`;

        case tlv.ObjectSchema:
            if (!context.hasTypeFromSchema) {
                context.hasTypeFromSchema = true;
                context.definitions.unshift('import { TypeFromSchema } from "../../tlv/TlvSchema.js";')
            }
            context.definitions.push(`type ${context.typeName} = TypeFromSchema<typeof ${context.typeSource}>;`);
            return context.typeName;
    }

    return "any";
}

const moduleExports = new Array<string>();

clusters.forEach((cluster) => {
    const context = new TypeContext();
    const properties = new Array<string>();

    function createEventProperties(name: string, type: string) {
        properties.push(`add${name}Listener(listener: ${type}): void;`);
        properties.push(`remove${name}Listener(listener: ${type}): void;`);
    }

    Object.entries(cluster.attributes).forEach(([name, attr]) => {
        if (GLOBAL_ATTRIBUTE_IDS.has(attr.id)) return;

        context.typeName = camelize(name);
        context.typeSource = `${cluster.definition}.attributes.${name}.schema`;

        const type = mapType(attr.schema, context);
        properties.push(`${name}${attr.optional ? "?" : ""}: ${type};`);
        if (attr.writable) {
            properties.push(`set${context.typeName}(value: ${type}): Promise<void>;`);
        }
        createEventProperties(context.typeName, `(newValue: ${type}, oldValue: ${type}) => void`);
        properties.push("");
    });

    let haveCommand = false;
    Object.entries(cluster.commands).forEach(([name, command]) => {
        haveCommand = true;

        context.typeName = suffixed(name, "Request");
        context.typeSource = `${cluster.definition}.commands.${name}.requestSchema`;
        const request = command.requestSchema instanceof tlv.TlvVoid.constructor
            ? ""
            : `request: ${mapType(command.requestSchema, context)}`; 

        context.typeName = suffixed(name, "Response");
        context.typeSource = `${cluster.definition}.commands.${name}.responseSchema`;
        const responseType = mapType(command.responseSchema, context);

        properties.push(`send${camelize(name)}(${request}): Promise<${responseType}>;`)
    });

    if (haveCommand) properties.push("");

    Object.entries(cluster.events).map(([name, event]) => {
        context.typeName = suffixed(name, "Event");
        context.typeSource = `${cluster.definition}.events.${name}.schema`;
        const type = mapType(event.schema, context);

        if (cluster.attributes[name]) name = `${name}Event`;
        createEventProperties(camelize(name), `(event: ${type}) => void`);
        properties.push("");
    });

    const baseTypeName = cluster.name.replace(/Cluster$/, "");

    let definitions = context.definitions.join("\n\n");
    if (definitions) definitions = `${definitions}\n`;

    writeTS(`cluster/interface/${cluster.interface}`,
        `import { ${cluster.definition}, ClusterInterface } from "../index.js";
${definitions}
export interface ${cluster.interface} {
    ${properties.map((p) => p ? `    ${p}` : "").join("\n").trim()}
}

export const ${baseTypeName}:
    ClusterInterface<${cluster.interface}> =
{
    definition: ${cluster.definition}
};
`);

    moduleExports.push(`export * from "./${cluster.interface}.js";`)
});

writeTS("cluster/interface/index", moduleExports.join("\n"));
