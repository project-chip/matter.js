/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { int64, uint64 } from "@project-chip/matter.js/elements";
import { ClusterModel, Metatype, ValueModel } from "@project-chip/matter.js/model";
import { TlvGenerator } from "../clusters/TlvGenerator.js";
import { Block } from "../util/TsFile.js";

export class TypeGenerator {
    private defined = new Set<string>();
    private tlv: TlvGenerator;

    constructor(
        cluster: ClusterModel,
        private definitions: Block,
    ) {
        this.tlv = new TlvGenerator(cluster, definitions);
    }

    reference(model: ValueModel | undefined, emptyAs = "any"): string {
        model = model?.definingModel;
        if (model === undefined) {
            return emptyAs;
        }

        const metabase = model?.metabase;
        if (metabase === undefined) {
            return emptyAs;
        }

        switch (metabase.metatype) {
            case Metatype.any:
                return "any";

            case Metatype.array:
                let arrayMember = this.reference(model.children[0]);
                if (arrayMember.replace(/\([^)]*\)/g, "").indexOf(" ") !== -1) {
                    arrayMember = `(${arrayMember})`;
                }
                return `${arrayMember}[]`;

            case Metatype.boolean:
                return "boolean";

            case Metatype.bytes:
                this.definitions.file.addImport(`util/ByteArray.js`);
                return "ByteArray";

            case Metatype.integer:
                if (metabase.isGlobal && (metabase.name === uint64.name || metabase.name === int64.name)) {
                    return "number | bigint";
                }
                return "number";

            case Metatype.float:
                return "number";

            case Metatype.string:
                return "string";

            case Metatype.date:
                return "Date";

            case Metatype.enum:
            case Metatype.bitmap:
            case Metatype.object:
                if (TypeGenerator.isEmpty(model)) {
                    return emptyAs;
                }

                const sourceName = this.tlv.nameFor(model);
                if (!sourceName) {
                    return emptyAs;
                }
                const typeName = sourceName.startsWith("Tlv") ? sourceName.slice(3) : sourceName;
                if (!this.defined.has(typeName)) {
                    this.definitions.file.addImport("tlv/TlvSchema.js", "TypeFromSchema");

                    const cluster = model.owner(ClusterModel) ?? this.tlv.cluster;
                    this.definitions.file.addImport(
                        `cluster/definitions/${cluster.name}Cluster.js`,
                        this.tlv.cluster.name,
                    );

                    this.definitions
                        .atom(`export type ${typeName} = TypeFromSchema<typeof ${cluster.name}.${sourceName}>`)
                        .document(model);

                    this.defined.add(typeName);
                }
                return typeName;
        }

        return emptyAs;
    }

    static isEmpty(model?: ValueModel) {
        if (model === undefined) {
            return true;
        }

        if (model.effectiveMetatype !== Metatype.object) {
            return true;
        }

        for (const child of model.children) {
            if (child.isDeprecated || child.isDisallowed) {
                continue;
            }
            return false;
        }

        return true;
    }
}
