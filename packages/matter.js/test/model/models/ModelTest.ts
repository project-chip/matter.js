/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AttributeModel,
    ClusterModel,
    DatatypeModel,
    FieldModel,
    Globals,
    MatterModel,
    Metatype,
} from "../../../src/model/index.js";

describe("Model", () => {
    describe("children", () => {
        it("can be added", () => {
            const parent = new ClusterModel({ name: "Foo" });
            parent.add({ tag: "datatype", name: "Bar" });
            expect(parent.children.length).equal(1);
            expect(parent.children[0]).instanceof(DatatypeModel);
        });

        it("can be added as model", () => {
            const parent = new ClusterModel({ name: "Foo" });
            parent.add(new DatatypeModel({ name: "Bar" }));
            expect(parent.children.length).equal(1);
            expect(parent.children[0]).instanceof(DatatypeModel);
        });

        it("can be removed", () => {
            const parent = new ClusterModel({ name: "Foo" });
            parent.add({ tag: "datatype", name: "Bar" });
            const child = parent.children[0];
            child.parent = undefined;
            expect(child.parent).equal(undefined);
            expect(parent.children.length).equal(0);
        });

        it("can be moved", () => {
            const parent = new ClusterModel({ name: "Foo" });
            parent.add({ tag: "datatype", name: "Bar" });
            const child = parent.children[0];
            const parent2 = new ClusterModel({ name: "Foo2", children: [child] });
            expect(parent.children.length).equal(0);
            expect(parent2.children.length).equal(1);
            expect(child.parent).equal(parent2);
        });

        it("can be bulk added", () => {
            const parent = new ClusterModel({ name: "Foo" });
            parent.children = [
                { tag: "datatype", name: "Bar1" },
                { tag: "datatype", name: "Bar2" },
            ];
            expect(parent.children.length).equal(2);
            expect(parent.children[0].name).equal("Bar1");
            expect(parent.children[1].name).equal("Bar2");
        });

        it("can be bulk added with model", () => {
            const parent = new ClusterModel({ name: "Foo" });
            parent.children = [new DatatypeModel({ name: "Bar1" }), { tag: "datatype", name: "Bar2" }];
            expect(parent.children.length).equal(2);
            expect(parent.children[0].name).equal("Bar1");
            expect(parent.children[1].name).equal("Bar2");
        });

        it("can be bulk moved", () => {
            const parent = new ClusterModel({ name: "Foo" });
            parent.children = [
                { tag: "datatype", name: "Bar1" },
                { tag: "datatype", name: "Bar2" },
            ];
            const parent2 = new ClusterModel({ name: "Foo2", children: parent.children });
            expect(parent.children.length).equal(0);
            expect(parent2.children.length).equal(2);
            expect(parent2.children[0].name).equal("Bar1");
            expect(parent2.children[1].name).equal("Bar2");
        });

        it("splices correctly", () => {
            const parent = new ClusterModel({ name: "Foo" });

            parent.children = [
                { tag: "datatype", name: "Bar1" },
                { tag: "datatype", name: "Bar2" },
                { tag: "datatype", name: "Bar3" },
            ];

            const removed = parent.children.splice(
                1,
                1,
                { tag: "datatype", name: "Bar4" },
                { tag: "datatype", name: "Bar5" },
            );

            expect(removed.length === 1);
            expect(removed[0].name === "Bar2");
            expect(removed[0].parent === undefined);

            expect(parent.children.length === 4);
            expect(parent.children.map(({ name, parent }) => ({ name, parent: parent?.name }))).deep.equals([
                { name: "Bar1", parent: "Foo" },
                { name: "Bar4", parent: "Foo" },
                { name: "Bar5", parent: "Foo" },
                { name: "Bar3", parent: "Foo" },
            ]);
        });
    });

    describe("all", () => {
        it("finds all models by type", () => {
            expect(Fixtures.matter.all(ClusterModel).length).equal(3);

            // 66 standard datatypes + 3 defined in our fake model
            expect(Fixtures.matter.all(DatatypeModel).length).equal(69);
        });
    });

    describe("get", () => {
        it("finds by ID", () => {
            expect(Fixtures.matter.get(ClusterModel, 1)).equal(Fixtures.cluster1);
            expect(Fixtures.matter.get(AttributeModel, 1)).equal(Fixtures.globalAttr);
        });

        it("finds by name", () => {
            expect(Fixtures.matter.get(ClusterModel, "Cluster1")).equal(Fixtures.cluster1);
        });
    });

    describe("base", () => {
        it("finds global base type", () => {
            expect(Fixtures.cluster1StructType.base).equal(Fixtures.globalStruct);
        });

        it("finds local base type", () => {
            expect(Fixtures.cluster1StructField1.base).equal(Fixtures.cluster1StructType);
        });

        it("finds inherited base type", () => {
            expect(Fixtures.cluster2StructField.base).equal(Fixtures.cluster1StructType);
        });

        it("is inferred from inherited base", () => {
            expect(Fixtures.feature.base?.name).equal(Globals.uint32.name);
        });

        it("finds attribute struct", () => {
            expect(Fixtures.cluster1StructAttr.base).equal(Fixtures.cluster1StructType);
        });

        it("is inferred from struct attribute override", () => {
            expect(Fixtures.cluster2Attr2.base).equal(Fixtures.cluster1StructType);
        });
    });

    describe("effectiveMetatype", () => {
        it("represents global base type", () => {
            expect(Fixtures.cluster1StructType.effectiveMetatype).equal(Metatype.object);
        });

        it("represents local base type", () => {
            expect(Fixtures.cluster1StructField1.effectiveMetatype).equal(Metatype.object);
        });

        it("represents inherited base type", () => {
            expect(Fixtures.cluster2StructField.effectiveMetatype).equal(Metatype.object);
        });

        it("is inferred from inherited base type", () => {
            expect(Fixtures.enumValue2.effectiveMetatype).equal(Metatype.integer);
        });
    });

    describe("enum values", () => {
        it("infers ID", () => {
            expect(Fixtures.enumValue2.effectiveId).equal(1);
        });

        it("infers type", () => {
            expect(Fixtures.enumValue2.effectiveType).equal(Globals.uint16.name);
        });
    });

    describe("effectiveType", () => {
        it("is inherited on datatype override", () => {
            expect(Fixtures.cluster1StructFieldOverride.effectiveType).equal(Globals.string.name);
        });

        it("is inherited on secondary datatype override", () => {
            expect(Fixtures.cluster2StructFieldOverride.effectiveType).equal(Globals.string.name);
        });

        it("is inherited on attribute override", () => {
            expect(Fixtures.cluster2Attr1.effectiveType).equal(Globals.uint8.name);
        });
    });
});

namespace Fixtures {
    export const globalStruct = new DatatypeModel({
        name: "GlobalStruct",
        type: "struct",
        children: [
            { tag: "field", name: "numField", type: "uint16" },
            { tag: "field", name: "strField", type: "string" },
        ],
    });

    export const cluster1StructFieldOverride = new FieldModel({ name: "strField" });
    export const cluster1StructType = new DatatypeModel({
        name: "ClusterDatatype",
        type: "GlobalStruct",
        children: [{ tag: "field", name: "numField2", type: "single" }, cluster1StructFieldOverride],
    });

    export const cluster1StructField1 = new FieldModel({ name: "structField", type: "ClusterDatatype" });
    export const cluster1StructAttr = new AttributeModel({ id: 3, name: "structAttr2", type: "ClusterDatatype" });

    export const globalAttr = new AttributeModel({ id: 1, name: "Attr1" });

    export const feature = new FieldModel({ name: "PIN" });

    export const cluster1 = new ClusterModel({
        id: 1,
        name: "Cluster1",
        children: [
            {
                tag: "attribute",
                id: 0xfffc,
                name: "FeatureMap",
                type: "FeatureMap",
                children: [feature],
            },
            { tag: "attribute", id: 1, name: "byteAttr", type: "uint8" },
            {
                tag: "attribute",
                id: 2,
                name: "structAttr1",
                type: "struct",
                children: [
                    { tag: "field", name: "numField", type: "double" },
                    { tag: "field", name: "enumField", type: "GlobalEnum" },
                    cluster1StructField1,
                ],
            },
            cluster1StructAttr,
            cluster1StructType,
        ],
    });

    export const cluster2StructFieldOverride = new FieldModel({ name: "strField" });
    export const cluster2StructField = new FieldModel({
        id: 1,
        name: "inheritedStruct",
        type: "ClusterDatatype",
        children: [cluster2StructFieldOverride],
    });
    export const cluster2Attr1 = new AttributeModel({ id: 1, name: "byteAttr" });
    export const cluster2Attr2 = new AttributeModel({ id: 3, name: "structAttr2" });

    export const enumValue2 = new FieldModel({ name: "Value2" });

    export const matter = new MatterModel({
        name: "Fake Matter",
        children: [
            cluster1,
            {
                tag: "cluster",
                id: 2,
                name: "Cluster2",
                type: "Cluster1",
                children: [cluster2StructField, cluster2Attr1, cluster2Attr2],
            },
            { tag: "cluster", id: 3, name: "Cluster3" },
            globalAttr,
            { tag: "datatype", name: "GlobalByte", type: "uint8" },
            globalStruct,
            {
                tag: "datatype",
                type: "enum16",
                name: "GlobalEnum",
                children: [{ tag: "field", name: "Value1" }, enumValue2],
            },
        ],
    });
}
