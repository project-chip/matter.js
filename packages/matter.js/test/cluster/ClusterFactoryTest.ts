/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BaseClusterComponent, ClusterComponent, ClusterForBaseCluster, ExtensibleCluster, IllegalClusterError, extendCluster, preventCluster, validateFeatureSelection } from "../../src/cluster/ClusterFactory.js";
import { Attribute, Cluster, Command, Event, EventPriority, TlvNoResponse } from "../../src/cluster/Cluster.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { TlvNoArguments } from "../../src/tlv/TlvNoArguments.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../src/schema/BitmapSchema.js";

enum Feature {
    Extended = "Extended",
    Fancy = "Fancy",
    AbsolutelyFabulous = "AbsolutelyFabulous",
    BitterDisappointment = "BitterDisappointment"
}

const FEATURES = {
    extended: BitFlag(0),
    fancy: BitFlag(1),
    absolutelyFabulous: BitFlag(2),
    bitterDisappointment: BitFlag(3)
}

const METADATA = {
    id: 0x901,
    name: "MyCluster",
    revision: 2,
    features: FEATURES
}

const ELEMENTS = {
    attributes: {
        attr1: Attribute(1, TlvUInt8)
    },
    commands: {
        cmd1: Command(2, TlvNoArguments, 2, TlvNoResponse)
    },
    events: {
        ev1: Event(3, EventPriority.Debug, TlvNoArguments)
    }
}

const ELEMENTS2 = {
    attributes: {
        attr2: Attribute(4, TlvUInt8)
    },
    commands: {
        cmd2: Command(5, TlvNoArguments, 5, TlvNoResponse)
    },
    events: {
        ev2: Event(6, EventPriority.Debug, TlvNoArguments)
    }
}

function expectMetadata(component: BaseClusterComponent<any, any, any, any>) {
    expect(component.id).toBe(METADATA.id);
    expect(component.name).toBe(METADATA.name);
    expect(component.revision).toBe(METADATA.revision);
    expect(component.features).toBe(METADATA.features);
}

function expectElements(component: ClusterComponent<any, any, any>) {
    expect(component.attributes.attr1).toBeDefined();
    expect(component.attributes.attr1.id).toBe(1);
    expect(component.commands.cmd1).toBeDefined();
    expect(component.commands.cmd1.requestId).toBe(2);
    expect(component.events.ev1).toBeDefined();
    expect(component.events.ev1.id).toBe(3);
}

function expectElements2(component: ClusterComponent<any, any, any>) {
    expect(component.attributes.attr2).toBeDefined();
    expect(component.attributes.attr2.id).toBe(4);
    expect(component.commands.cmd2).toBeDefined();
    expect(component.commands.cmd2.requestId).toBe(5);
    expect(component.events.ev2).toBeDefined();
    expect(component.events.ev2.id).toBe(6);
}

function createCluster(supportedFeatures: TypeFromPartialBitSchema<typeof FEATURES>) {
    const base = BaseClusterComponent({
        ...METADATA,
        ...ELEMENTS
    });
    return Cluster({
        ...base,
        supportedFeatures
    });
}

function createExtendedCluster(supportedFeatures: TypeFromPartialBitSchema<typeof FEATURES>) {
    const cluster = createCluster(supportedFeatures);

    extendCluster(cluster, ELEMENTS2, {
        extended: true,
        fancy: true,
        absolutelyFabulous: false
    });

    expectMetadata(cluster);
    expectElements(cluster);

    return cluster;
}

function expectElementCounts(cluster: Cluster<any, any, any, any, any>, count: number) {
    expect(Object.keys(cluster.attributes).length).toBe(count + 6);
    expect(Object.keys(cluster.commands).length).toBe(count);
    expect(Object.keys(cluster.events).length).toBe(count);
}

export const TestBase = BaseClusterComponent({
    ...METADATA,
    ...ELEMENTS
});

const TestExtensibleCluster = ExtensibleCluster({
    ...TestBase,
    factory: <T extends `${Feature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, Feature);
        const cluster = Cluster({
            ...TestBase,
            supportedFeatures: BitFlags(
                METADATA.features,
                ...features
            )
        });
        extendCluster(cluster, ELEMENTS2, { extended: true });
        preventCluster(cluster, { absolutelyFabulous: true, bitterDisappointment: true });

        return cluster as unknown as TestExtension<BitFlags<typeof METADATA.features, T>>;
    }
});

export type TestExtension<SF extends TypeFromPartialBitSchema<typeof TestBase.features>> =
    ClusterForBaseCluster<typeof TestBase, SF>
    & { supportedFeatures: SF }
    & (SF extends { extended: true } ? typeof ELEMENTS2 : {})
    & (SF extends { absolutelyFabulous: true, bitterDisappointment: true } ? never : {});

describe("ClusterFactory", () => {
    describe("ClusterComponent", () => {
        it("installs elements", () => {
            const component = ClusterComponent(ELEMENTS);
            expectElements(component);
        })
    })

    describe("BaseClusterComponent", () => {
        it("builds cluster", () => {
            const base = BaseClusterComponent({
                ...METADATA,
                ...ELEMENTS
            });
            expectMetadata(base);
            expectElements(base);
        })
    })

    describe("extendCluster", () => {
        it("extends cluster when features match", () => {
            const cluster = createExtendedCluster({ extended: true, fancy: true, absolutelyFabulous: false });
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        })

        it("doesn't extend cluster when features don't match", () => {
            const cluster = createExtendedCluster({ extended: true });
            expectElementCounts(cluster, 1);
        })

        it("treats missing feature as false", () => {
            const cluster = createExtendedCluster({ extended: true, fancy: true });
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        })

        it("does not extend with disabled features", () => {
            const cluster = createExtendedCluster({ extended: true, fancy: true, absolutelyFabulous: true });
            expectElementCounts(cluster, 1);
        })
    })

    describe("validateFeatureSelection", () => {
        it("accepts a supported feature", () => {
            expect(() => {
                validateFeatureSelection(["AbsolutelyFabulous"], Feature)
            }).not.toThrowError(IllegalClusterError)
        })

        it("rejects an unsupported feature", () => {
            expect(() => {
                validateFeatureSelection(["SomewhatFabulous"], Feature)
            }).toThrowError(IllegalClusterError);
        })
    })

    describe("preventCluster", () => {
        it("allows legal features", () => {
            expect(() => {
                preventCluster(
                    createCluster({ extended: true }),
                    { absolutelyFabulous: true, bitterDisappointment: true }
                )
            }).not.toThrow();
        })

        it("rejects illegal features", () => {
            expect(() => {
                preventCluster(
                    createCluster({ absolutelyFabulous: true, bitterDisappointment: true }),
                    { absolutelyFabulous: true, bitterDisappointment: true }
                )
            }).toThrowError(/Feature combination.*is disallowed/);
        })
    })

    describe("a conventional extensible cluster", () => {
        it("creates with no features", () => {
            const cluster = TestExtensibleCluster.with();
            expectElements(cluster);
            expectElementCounts(cluster, 1);
        })

        it("creates with a feature", () => {
            const cluster = TestExtensibleCluster.with("Extended");
            expect(cluster.supportedFeatures).toEqual({
                extended: true,
                fancy: false,
                absolutelyFabulous: false,
                bitterDisappointment: false
            })
            expectElements(cluster);
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        })

        it("rejects unsupported features", () => {
            expect(() => {
                TestExtensibleCluster.with("AbsolutelyFabulous", "BitterDisappointment");
            }).toThrowError(IllegalClusterError);
        })

        it("rejects unsupported features with supported features", () => {
            expect(() => {
                TestExtensibleCluster.with("Extended", "AbsolutelyFabulous", "BitterDisappointment");
            }).toThrowError(IllegalClusterError);
        })
    })
})
