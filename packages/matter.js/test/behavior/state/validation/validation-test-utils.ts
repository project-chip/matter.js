/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { OfflineContext } from "../../../../src/behavior/context/server/OfflineContext.js";
import { RootSupervisor } from "../../../../src/behavior/supervision/RootSupervisor.js";
import { DataModelPath } from "../../../../src/endpoint/DataModelPath.js";
import {
    AttributeModel,
    ClusterModel,
    FeatureSet,
    FieldElement,
    FieldModel,
    Globals,
} from "../../../../src/model/index.js";
import { StatusResponseError } from "../../../../src/protocol/interaction/StatusCode.js";
import { Properties } from "../../../../src/util/Type.js";

export function Fields(
    ...definition: {
        name?: string;
        type?: string;
        conformance?: string;
        constraint?: string;
        quality?: string;
        children?: FieldElement[];
    }[]
): Fields {
    return definition.map(
        f =>
            new FieldModel({
                name: f.name ?? "Test",
                type: f.type ?? "int16",
                ...f,
            }),
    );
}

export function Features(definition: { [code: string]: string }): AttributeModel {
    return new AttributeModel({
        ...Globals.FeatureMap,

        children: Object.entries(definition).map(
            ([name, description]) =>
                new FieldModel({
                    name,
                    description,
                }),
        ),
    });
}

export function Tests(...definition: (Fields | Features | Tests["entries"])[]): Tests {
    const result = { [NESTING]: true } as Tests;
    for (const d of definition) {
        if (Array.isArray(d)) {
            result.fields = d;
        } else if (d instanceof AttributeModel) {
            result.features = d;
        } else {
            result.entries = d;
        }
    }
    return result;
}

const NESTING: unique symbol = Symbol("NESTING");

function validate({ fields, features }: ClusterStructure, { supports, record, error }: Test) {
    if (!fields) {
        throw new Error("Validation attempt with no fields defined");
    }

    // Create cluster
    const cluster = new ClusterModel({
        name: "Test",
        supportedFeatures: new FeatureSet(supports),

        children: [features ?? new AttributeModel(Globals.FeatureMap), ...fields],
    });

    // Obtain a manager
    const root = new RootSupervisor(cluster);
    const manager = root.get(cluster);

    // Perform validation
    try {
        manager.validate?.(record ?? {}, OfflineContext.ReadOnly, { path: DataModelPath(cluster.path) });
        expect(error).undefined;
    } catch (e) {
        if (!error || (e as any).constructor.name === "AssertionError") {
            throw e;
        }
        expect(e).instanceof(error.type);
        expect((e as Error).message).equals(`${error.message} (${new error.type("", {}).code})`);
    }
}

export function testValidation(description: string, what: Tests | Test, structure: ClusterStructure = {}) {
    if (what.fields) {
        structure = { ...structure, fields: what.fields };
    }
    if (what.features) {
        structure = { ...structure, features: what.features };
    }

    if (what[NESTING]) {
        describe(description, () => {
            for (const k in what.entries) {
                testValidation(k, what.entries[k], structure);
            }
        });
    } else {
        it(description, () => validate(structure, what));
    }
}

type Fields = FieldModel[];
type Features = AttributeModel;

type ClusterStructure = {
    fields?: Fields;
    features?: Features;
};

type Test = ClusterStructure & {
    [NESTING]?: false;
    supports?: FeatureSet.Definition;
    record?: Properties;
    error?: { type: new (...args: any[]) => StatusResponseError; message?: string };
};

type Tests = ClusterStructure & {
    [NESTING]: true;
    entries: { [description: string]: Tests | Test };
};
