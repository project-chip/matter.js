/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    AccessLevel,
    Attribute,
    Cluster,
    Command,
    Event,
    EventPriority,
    TlvNoResponse,
    WritableAttribute,
    WritableFabricScopedAttribute,
} from "../../src/cluster/Cluster.js";
import { ClusterFactory, IllegalClusterError } from "../../src/cluster/ClusterFactory.js";
import { ClusterServer } from "../../src/cluster/server/ClusterServer.js";
import { ClusterServerHandlers } from "../../src/cluster/server/ClusterServerTypes.js";
import { TlvClusterId } from "../../src/datatype/ClusterId.js";
import { TlvEndpointNumber } from "../../src/datatype/EndpointNumber.js";
import { FabricIndex, TlvFabricIndex } from "../../src/datatype/FabricIndex.js";
import { TlvGroupId } from "../../src/datatype/GroupId.js";
import { TlvNodeId } from "../../src/datatype/NodeId.js";
import { Fabric } from "../../src/fabric/Fabric.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../src/schema/BitmapSchema.js";
import { TlvArray } from "../../src/tlv/TlvArray.js";
import { TlvNoArguments } from "../../src/tlv/TlvNoArguments.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { TlvField, TlvObject, TlvOptionalField } from "../../src/tlv/TlvObject.js";
import { TypeFromSchema } from "../../src/tlv/TlvSchema.js";

// Metadata

enum Feature {
    Extended = "Extended",
    Fancy = "Fancy",
    AbsolutelyFabulous = "AbsolutelyFabulous",
    BitterDisappointment = "BitterDisappointment",
    AlsoExtended = "AlsoExtended",
}

const FEATURES = {
    extended: BitFlag(0),
    fancy: BitFlag(1),
    absolutelyFabulous: BitFlag(2),
    bitterDisappointment: BitFlag(3),
    alsoExtended: BitFlag(4),
};

const METADATA = {
    id: 0x901,
    name: "MyCluster",
    revision: 2,
    features: FEATURES,
};

function expectMetadata(component: ClusterFactory.Cluster) {
    expect(component.id).equal(METADATA.id);
    expect(component.name).equal(METADATA.name);
    expect(component.revision).equal(METADATA.revision);
    expect(component.features).equal(METADATA.features);
}

// First element set

const ELEMENTS = ClusterFactory.Component({
    attributes: {
        attr1: WritableAttribute(1, TlvUInt8),
    },
    commands: {
        cmd1: Command(2, TlvNoArguments, 2, TlvNoResponse),
    },
    events: {
        ev1: Event(3, EventPriority.Debug, TlvNoArguments),
    },
});

type Elements1ish = {
    attributes: {
        attr1: Attribute<any, any>;
    };
    commands: {
        cmd1: Command<any, any, any>;
    };
    events: {
        ev1: Event<any, any>;
    };
};

function expectElements(component: Elements1ish) {
    expect(component.attributes.attr1).exist;
    expect(component.attributes.attr1.id).equal(1);
    expect(component.commands.cmd1).exist;
    expect(component.commands.cmd1.requestId).equal(2);
    expect(component.events.ev1).exist;
    expect(component.events.ev1.id).equal(3);
}

// Second element set

const ELEMENTS2 = ClusterFactory.Component({
    attributes: {
        attr2: Attribute(4, TlvUInt8),
    },
    commands: {
        cmd2: Command(
            5,
            TlvObject({ cmd2RequestField: TlvField(1, TlvUInt8) }),
            5,
            TlvObject({ cmd2ResponseField: TlvField(1, TlvUInt8) }),
        ),
    },
    events: {
        ev2: Event(6, EventPriority.Debug, TlvNoArguments),
    },
});

type Elements2ish = {
    attributes: {
        attr2: Attribute<any, any>;
    };
    commands: {
        cmd2: Command<any, any, any>;
    };
    events: {
        ev2: Event<any, any>;
    };
};

// Third element set
export const TlvTargetStruct = TlvObject({
    node: TlvOptionalField(1, TlvNodeId),
    group: TlvOptionalField(2, TlvGroupId),
    endpoint: TlvOptionalField(3, TlvEndpointNumber),
    cluster: TlvOptionalField(4, TlvClusterId),
    fabricIndex: TlvField(254, TlvFabricIndex),
});

const ELEMENTS3 = ClusterFactory.Component({
    attributes: {
        wfs: WritableFabricScopedAttribute(7, TlvArray(TlvTargetStruct), {
            persistent: true,
            default: [],
            writeAcl: AccessLevel.Manage,
        }),
    },
});

function expectElements2(component: Elements2ish) {
    expect(component.attributes.attr2).exist;
    expect(component.attributes.attr2.id).equal(4);
    expect(component.commands.cmd2).exist;
    expect(component.commands.cmd2.requestId).equal(5);
    expect(component.events.ev2).exist;
    expect(component.events.ev2.id).equal(6);
}

// Base cluster

function createCluster(supportedFeatures: TypeFromPartialBitSchema<typeof FEATURES>) {
    return ClusterFactory.Definition({
        ...METADATA,
        ...ClusterFactory.Component(ELEMENTS),
        supportedFeatures,
    });
}

// Extension

export type TestExtension<SF extends TypeFromPartialBitSchema<typeof TestBase.features>> = Omit<
    typeof TestBase,
    "supportedFeatures"
> & { supportedFeatures: SF } & (SF extends { extended: true } ? typeof ELEMENTS2 : {}) &
    (SF extends { absolutelyFabulous: true; bitterDisappointment: true } ? never : {}) &
    (SF extends { alsoExtended: true } ? typeof ELEMENTS3 : {});

function createExtendedCluster<F extends TypeFromPartialBitSchema<typeof FEATURES>>(supportedFeatures: F) {
    const cluster = createCluster(supportedFeatures);

    ClusterFactory.extend(cluster, ELEMENTS2, {
        extended: true,
        fancy: true,
        absolutelyFabulous: false,
    });

    expectMetadata(cluster);
    expectElements(cluster);

    return cluster as unknown as TestExtension<F>;
}

const TestBase = ClusterFactory.Definition({
    ...METADATA,
    ...ELEMENTS,
});

const TestExtensibleCluster = ClusterFactory.Extensible(
    TestBase,

    <T extends `${Feature}`[]>(...features: [...T]) => {
        ClusterFactory.validateFeatureSelection(features, Feature);
        const cluster = Cluster({
            ...TestBase,
            supportedFeatures: BitFlags(METADATA.features, ...features),
        });
        ClusterFactory.extend(cluster, ELEMENTS2, { extended: true });
        ClusterFactory.extend(cluster, ELEMENTS3, { alsoExtended: true });
        ClusterFactory.prevent(cluster, { absolutelyFabulous: true, bitterDisappointment: true });

        return cluster as unknown as TestExtension<BitFlags<typeof METADATA.features, T>>;
    },
);

function expectElementCounts(cluster: Cluster<any, any, any, any, any>, count: number) {
    expect(Object.keys(cluster.attributes).length).equal(count + 6);
    expect(Object.keys(cluster.commands).length).equal(count);
    expect(Object.keys(cluster.events).length).equal(count);
}

describe("ClusterFactory", () => {
    describe("ClusterComponent", () => {
        it("installs elements", () => {
            const component = ClusterFactory.Component(ELEMENTS);
            expectElements(component);
        });
    });

    describe("BaseClusterComponent", () => {
        it("builds cluster", () => {
            const base = ClusterFactory.Definition({
                ...METADATA,
                ...ELEMENTS,
            });
            expectMetadata(base);
            expectElements(base);
        });
    });

    describe("extendCluster", () => {
        it("extends cluster when features match", () => {
            const cluster = createExtendedCluster({ extended: true, fancy: true, absolutelyFabulous: false });
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        });

        it("doesn't extend cluster when features don't match", () => {
            const cluster = createExtendedCluster({ extended: true });
            expectElementCounts(cluster, 1);
        });

        it("treats missing feature as false", () => {
            const cluster = createExtendedCluster({ extended: true, fancy: true });
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        });

        it("does not extend with disabled features", () => {
            const cluster = createExtendedCluster({ extended: true, fancy: true, absolutelyFabulous: true });
            expectElementCounts(cluster, 1);
        });
    });

    describe("validateFeatureSelection", () => {
        it("accepts a supported feature", () => {
            expect(() => {
                ClusterFactory.validateFeatureSelection(["AbsolutelyFabulous"], Feature);
            }).not.throw(IllegalClusterError);
        });

        it("rejects an unsupported feature", () => {
            expect(() => {
                ClusterFactory.validateFeatureSelection(["SomewhatFabulous"], Feature);
            }).throw(IllegalClusterError, '"SomewhatFabulous" is not a valid feature identifier');
        });
    });

    describe("preventCluster", () => {
        it("allows legal features", () => {
            expect(() => {
                ClusterFactory.prevent(createCluster({ extended: true }), {
                    absolutelyFabulous: true,
                    bitterDisappointment: true,
                });
            }).not.throw();
        });

        it("rejects illegal features", () => {
            expect(() => {
                ClusterFactory.prevent(createCluster({ absolutelyFabulous: true, bitterDisappointment: true }), {
                    absolutelyFabulous: true,
                    bitterDisappointment: true,
                });
            }).throw(
                IllegalClusterError,
                "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
            );
        });
    });

    describe("a conventional extensible cluster", () => {
        it("creates with no features", () => {
            const cluster = TestExtensibleCluster.with();
            expectElements(cluster);
            expectElementCounts(cluster, 1);
        });

        it("creates with a feature", () => {
            const cluster = TestExtensibleCluster.with("Extended");
            expect(cluster.supportedFeatures).deep.equal({
                extended: true,
                fancy: false,
                absolutelyFabulous: false,
                bitterDisappointment: false,
                alsoExtended: false,
            });
            expectElements(cluster);
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        });

        it("rejects unsupported features", () => {
            expect(() => {
                TestExtensibleCluster.with("AbsolutelyFabulous", "BitterDisappointment");
            }).throw(
                IllegalClusterError,
                "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
            );
        });

        it("rejects unsupported features with supported features", () => {
            expect(() => {
                TestExtensibleCluster.with("Extended", "AbsolutelyFabulous", "BitterDisappointment");
            }).throw(
                IllegalClusterError,
                "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
            );
        });
    });

    describe("ClusterServer type", () => {
        /**
         * Not a runtime test.  If this compiles the test "passes".
         *
         * Ensures that ClusterServer instantiates correctly from extended
         * clusters.
         */
        it("is correct for automatic cluster", () => {
            const MyCluster = TestExtensibleCluster.with("Extended");

            // Create handlers directly
            const handlers: ClusterServerHandlers<typeof MyCluster> = {
                cmd1: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                    attr1;
                    attr2;
                    session;
                    endpoint;
                },
                cmd2: ({ request: { cmd2RequestField }, attributes: { attr1, attr2 }, session, endpoint }) => {
                    cmd2RequestField;
                    attr1;
                    attr2;
                    session;
                    endpoint;
                    return { cmd2ResponseField: 5 };
                },
                attr1AttributeGetter: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                    if (attr1 == undefined || attr2 == undefined || session === undefined || endpoint === undefined)
                        throw new Error("Missing attribute");
                    return 5;
                },
                attr1AttributeSetter: (value, { attributes: { attr1, attr2 }, session, endpoint }) => {
                    if (
                        value === undefined ||
                        attr1 == undefined ||
                        attr2 == undefined ||
                        session === undefined ||
                        endpoint === undefined
                    )
                        throw new Error("Missing attribute");
                    return true;
                },
                attr1AttributeValidator: (value, { attributes: { attr1, attr2 }, session, endpoint }) => {
                    if (
                        value === undefined ||
                        attr1 == undefined ||
                        attr2 == undefined ||
                        session === undefined ||
                        endpoint === undefined
                    )
                        throw new Error("Missing attribute");
                },
            };
            handlers;

            // Create cluster server
            ClusterServer(
                MyCluster,
                {
                    attr1: 1,
                    attr2: 2,
                },
                {
                    cmd1: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                        attr1;
                        attr2;
                        session;
                        endpoint;
                    },
                    cmd2: ({ request: { cmd2RequestField }, attributes: { attr1, attr2 }, session, endpoint }) => {
                        cmd2RequestField;
                        attr1;
                        attr2;
                        session;
                        endpoint;
                        return { cmd2ResponseField: 5 };
                    },
                    attr1AttributeGetter: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                        if (attr1 == undefined || attr2 == undefined || session === undefined || endpoint === undefined)
                            throw new Error("Missing attribute");
                        return 5;
                    },
                    attr1AttributeSetter: (value, { attributes: { attr1, attr2 }, session, endpoint }) => {
                        if (
                            value === undefined ||
                            attr1 == undefined ||
                            attr2 == undefined ||
                            session === undefined ||
                            endpoint === undefined
                        )
                            throw new Error("Missing attribute");
                        return true;
                    },
                },
                {
                    ev1: true,
                    ev2: true,
                },
            );
        });

        /**
         * Not a runtime test.  If this compiles the test "passes".
         *
         * Equivalent of above but removes ClusterFactory from the equation.
         */
        it("is correct for manually defined equivalent", () => {
            const MyCluster = Cluster({
                id: 0x901,
                name: "MyCluster",
                revision: 2,
                features: {
                    extended: BitFlag(0),
                    fancy: BitFlag(1),
                    absolutelyFabulous: BitFlag(2),
                    bitterDisappointment: BitFlag(3),
                },
                supportedFeatures: {
                    extended: true,
                    fancy: false,
                    absolutelyFabulous: false,
                    bitterDisappointment: false,
                },
                attributes: {
                    attr1: Attribute(1, TlvUInt8),
                    attr2: Attribute(4, TlvUInt8),
                },
                commands: {
                    cmd1: Command(2, TlvNoArguments, 2, TlvNoResponse),
                    cmd2: Command(
                        5,
                        TlvObject({ cmd2RequestField: TlvField(1, TlvUInt8) }),
                        5,
                        TlvObject({ cmd2ResponseField: TlvField(1, TlvUInt8) }),
                    ),
                },
                events: {
                    ev1: Event(3, EventPriority.Debug, TlvNoArguments),
                    ev2: Event(6, EventPriority.Debug, TlvNoArguments),
                },
            });

            // Create handlers directly
            const handlers: ClusterServerHandlers<typeof MyCluster> = {
                cmd1: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                    attr1;
                    attr2;
                    session;
                    endpoint;
                },
                cmd2: ({ request: { cmd2RequestField }, attributes: { attr1, attr2 }, session, endpoint }) => {
                    cmd2RequestField;
                    attr1;
                    attr2;
                    session;
                    endpoint;
                    return { cmd2ResponseField: 5 };
                },
                attr1AttributeGetter: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                    if (attr1 == undefined || attr2 == undefined || session === undefined || endpoint === undefined)
                        throw new Error("Missing attribute");
                    return 5;
                },
                attr1AttributeSetter: (value, { attributes: { attr1, attr2 }, session, endpoint }) => {
                    if (
                        value === undefined ||
                        attr1 == undefined ||
                        attr2 == undefined ||
                        session === undefined ||
                        endpoint === undefined
                    )
                        throw new Error("Missing attribute");
                    return true;
                },
            };
            handlers;

            // Create the cluster server
            ClusterServer(
                MyCluster,
                {
                    attr1: 1,
                    attr2: 2,
                },
                {
                    cmd1: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                        attr1;
                        attr2;
                        session;
                        endpoint;
                    },
                    cmd2: ({ request: { cmd2RequestField }, attributes: { attr1, attr2 }, session, endpoint }) => {
                        cmd2RequestField;
                        attr1;
                        attr2;
                        session;
                        endpoint;
                        return { cmd2ResponseField: 5 };
                    },
                    attr1AttributeGetter: ({ attributes: { attr1, attr2 }, session, endpoint }) => {
                        if (attr1 == undefined || attr2 == undefined || session === undefined || endpoint === undefined)
                            throw new Error("Missing attribute");
                        return 5;
                    },
                    attr1AttributeSetter: (value, { attributes: { attr1, attr2 }, session, endpoint }) => {
                        if (
                            value === undefined ||
                            attr1 == undefined ||
                            attr2 == undefined ||
                            session === undefined ||
                            endpoint === undefined
                        )
                            throw new Error("Missing attribute");
                        return true;
                    },
                },
                {
                    ev1: true,
                    ev2: true,
                },
            );
        });

        it("is correct for a WritableFabricScopedAttribute", () => {
            const MyCluster = TestExtensibleCluster.with("AlsoExtended");

            // Create handlers directly
            const handlers: ClusterServerHandlers<typeof MyCluster> = {
                cmd1: ({ attributes: { attr1, wfs }, session, endpoint }) => {
                    attr1;
                    wfs;
                    session;
                    endpoint;
                },
            };
            handlers;

            // Create cluster server
            const server = ClusterServer(
                MyCluster,
                {
                    attr1: 1,
                    wfs: [{ fabricIndex: FabricIndex(4) }],
                },
                {
                    cmd1: ({ attributes: { attr1 }, session, endpoint }) => {
                        attr1;
                        session;
                        endpoint;
                    },
                    attr1AttributeGetter: ({ attributes: { attr1, wfs }, session, endpoint }) => {
                        if (attr1 == undefined || wfs == undefined || session === undefined || endpoint === undefined)
                            throw new Error("Missing attribute");
                        return 5;
                    },
                    attr1AttributeSetter: (value, { attributes: { attr1, wfs }, session, endpoint }) => {
                        if (
                            value === undefined ||
                            attr1 == undefined ||
                            wfs == undefined ||
                            session === undefined ||
                            endpoint === undefined
                        )
                            throw new Error("Missing attribute");
                        return true;
                    },
                },
                {
                    ev1: true,
                },
            );

            const value: TypeFromSchema<typeof TlvTargetStruct>[] = [
                {
                    fabricIndex: FabricIndex(4),
                },
            ];

            const fabric = {
                getScopedClusterDataValue(): TypeFromSchema<typeof TlvTargetStruct>[] {
                    return value;
                },
            } as unknown as Fabric;
            const wfs = server.getWfsAttribute(fabric);
            expect(wfs).deep.equal(value);
            server.setWfsAttribute(wfs, fabric);
        });
    });
});
