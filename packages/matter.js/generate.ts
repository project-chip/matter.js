import * as clusters from "./src/cluster/index.js";
import * as tlv from "./src/tlv/index.js";
import { Attributes, Commands, Events } from "./src/cluster/Cluster.js";
import { writeFileSync } from "fs";

type Cluster = {
    attributes: Attributes;
    commands: Commands;
    events: Events;
};

class TypeContext {
    typeName = "";
    typeToName = <{ [key: string]: string }>{};
    definitionDepth = 0;
    hasByteArray = false;
    definitions = new Array<string>;
};

function createTypeName(property: string, suffix: string = "") {
    return property[0].toUpperCase() + property.slice(1) + suffix;
}

function mapType(type: tlv.TlvSchema<any>, context: TypeContext) {
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
            context.definitionDepth++;
            const fields = (<tlv.ObjectSchema<tlv.TlvFields>>type).fieldDefinitions;
            const entries = Object.entries(fields).map(([name, type]) =>
                `${name}: ${mapType(type.schema, context)}`
            );
            context.definitionDepth--;

            const linePrefix = "".padEnd(context.definitionDepth * 4, " ");
            const obj = `{\n${linePrefix}    ${entries.join(",\n" + linePrefix + "    ")}\n${linePrefix}}`;

            if (context.definitionDepth) return obj;

            const existingName = context.typeToName[obj];
            if (existingName) return existingName;

            context.typeToName[obj] = context.typeName;
            context.definitions.push(`export type ${context.typeName} = ${obj};`)
            return context.typeName;
    }

    return "any";
}

function generateCluster(name: string, cluster: Cluster) {
    const context = new TypeContext();
    const properties = new Array<string>();

    function createEventProperties(name: string, type: string) {
        properties.push(`add${name}Listener(listener: ${type}): void;`);
        properties.push(`remove${name}Listener(listener: ${type}): void;`);
    }

    Object.entries(cluster.attributes).forEach(([ name, attr ]) => {
        context.typeName = createTypeName(name);
        const type = mapType(attr.schema, context);
        properties.push(`${name}${attr.optional ? "?" : ""}: ${mapType(attr.schema, context)};`);
        if (attr.writable) {
            properties.push(`set${context.typeName}(value: ${type}): Promise<void>;`);
        }
        createEventProperties(context.typeName, `(newValue: ${type}, oldValue: ${type}) => void`);
        properties.push("");
    });

    let haveCommand = false;
    Object.entries(cluster.commands).forEach(([ name, command ]) => {
        haveCommand = true;
        context.typeName = createTypeName(name, "Request");
        const requestType = mapType(command.requestSchema, context);
        context.typeName = createTypeName(name, "Response");
        const responseType = mapType(command.responseSchema, context);
        properties.push(`send${createTypeName(name)}(request: ${requestType}): Promise<${responseType}>;`)
    });

    if (haveCommand) properties.push("");

    Object.entries(cluster.events).map(([ name, event ]) => {
        context.typeName = createTypeName(name, "Event");
        const type = mapType(event.schema, context);
        createEventProperties(createTypeName(name), `(event: ${type}) => void`);
        properties.push("");
    });

    const baseTypeName = name.replace(/Cluster$/, "");

    let definitions = context.definitions.join("\n\n");
    if (definitions) definitions = `\n${definitions}\n`;

    writeFileSync(`src/cluster/interface/${baseTypeName}Interface.ts`,
`import { ClientIfaceImpl, ServerIfaceImpl } from "./ClusterIfaceImpl.js";
import { ${name} } from "../index.js";
${definitions}
export interface ${baseTypeName}Interface {
    ${properties.join("\n    ").trim()}
}

export const ${baseTypeName}ClientImpl = ClientIfaceImpl<${baseTypeName}Interface>(${name});
export const ${baseTypeName}ServerImpl = ServerIfaceImpl<${baseTypeName}Interface>(${name});
`);
}

for (const key in clusters) {
    key.match(/[a-z]Cluster$/i) && generateCluster(key, clusters[key]);
}
