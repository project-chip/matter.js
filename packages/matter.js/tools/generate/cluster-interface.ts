/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

// Generates TypeScript interfaces for each cluster into src/cluster/interface

import * as tlv from "../../src/tlv/index.js";
import { clean, writeTS, CodeModel } from "./util.js";
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

CodeModel.clusters.forEach((cluster) => {
    const context = new TypeContext();
    const properties = new Array<string>();

    function createEventProperties(typeName: string, type: string) {
        properties.push(`add${typeName}Listener(listener: ${type}): void;`);
        properties.push(`remove${typeName}Listener(listener: ${type}): void;`);
    }

    cluster.attributes.forEach((attr) => {
        if (GLOBAL_ATTRIBUTE_IDS.has(attr.id)) return;

        context.typeName = attr.typeName;
        context.typeSource = `${attr.source}.schema`;

        const type = mapType(attr.schema, context);
        properties.push(`${attr.fieldName}${attr.optional ? "?" : ""}: ${type};`);
        if (attr.writable) {
            properties.push(`set${context.typeName}(value: ${type}): Promise<void>;`);
        }
        createEventProperties(context.typeName, `(newValue: ${type}, oldValue: ${type}) => void`);
        properties.push("");
    });

    let haveCommand = false;
    cluster.commands.forEach((command) => {
        haveCommand = true;

        context.typeName = `${command.typeName}Request`;
        context.typeSource = `${command.source}.requestSchema`;
        const request = command.requestSchema instanceof tlv.TlvVoid.constructor
            ? ""
            : `request: ${mapType(command.requestSchema, context)}`;

        context.typeName = `${command.typeName}Response`;
        context.typeSource = `${command.source}.responseSchema`;
        const responseType = mapType(command.responseSchema, context);

        properties.push(`invoke${command.name}(${request}): Promise<${responseType}>;`)
    });

    if (haveCommand) properties.push("");

    cluster.events.map((event) => {
        context.typeName = `${event.typeName}Event`;
        context.typeSource = `${event.source}.schema`;
        const type = mapType(event.schema, context);

        createEventProperties(event.typeName, `(event: ${type}) => void`);
        properties.push("");
    });

    let definitions = context.definitions.join("\n\n");
    if (definitions) definitions = `${definitions}\n`;

    writeTS(`cluster/interface/${cluster.interfaceName}`,
        `import { ${cluster.definitionName}, ClusterInterface } from "../index.js";
${definitions}
export interface ${cluster.interfaceName} {
    ${properties.map((p) => p ? `    ${p}` : "").join("\n").trim()}
}

export const ${cluster.name}:
    ClusterInterface<${cluster.interfaceName}> =
{
    definition: ${cluster.definitionName}
};
`);

    moduleExports.push(`export * from "./${cluster.interfaceName}.js";`)
});

writeTS("cluster/interface/index", moduleExports.join("\n"));
