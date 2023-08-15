/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Crypto } from "../../src/crypto/Crypto.js";
Crypto.get = () =>
    ({
        // make Random data deterministic
        getRandomData: (length: number) => {
            return new Uint8Array(length);
        },
    }) as Crypto;

import {
    Attribute,
    Cluster,
    Command,
    Event,
    EventPriority,
    TlvNoResponse,
    WritableAttribute,
} from "../../src/cluster/Cluster.js";
import {
    BaseClusterComponent,
    ClusterComponent,
    ClusterForBaseCluster,
    extendCluster,
    ExtensibleCluster,
    IllegalClusterError,
    preventCluster,
    validateFeatureSelection,
} from "../../src/cluster/ClusterFactory.js";
import { ClusterServer } from "../../src/cluster/server/ClusterServer.js";
import { ClusterServerHandlers } from "../../src/cluster/server/ClusterServerTypes.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../src/schema/BitmapSchema.js";
import { TlvNoArguments } from "../../src/tlv/TlvNoArguments.js";
import { TlvUInt8 } from "../../src/tlv/TlvNumber.js";
import { TlvField, TlvObject } from "../../src/tlv/TlvObject.js";

enum Feature {
    Extended = "Extended",
    Fancy = "Fancy",
    AbsolutelyFabulous = "AbsolutelyFabulous",
    BitterDisappointment = "BitterDisappointment",
}

const FEATURES = {
    extended: BitFlag(0),
    fancy: BitFlag(1),
    absolutelyFabulous: BitFlag(2),
    bitterDisappointment: BitFlag(3),
};

const METADATA = {
    id: 0x901,
    name: "MyCluster",
    revision: 2,
    features: FEATURES,
};

const ELEMENTS = ClusterComponent({
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

const ELEMENTS2 = ClusterComponent({
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
        ...ELEMENTS,
    });
    return Cluster({
        ...base,
        supportedFeatures,
    });
}

function createExtendedCluster(supportedFeatures: TypeFromPartialBitSchema<typeof FEATURES>) {
    const cluster = createCluster(supportedFeatures);

    extendCluster(cluster, ELEMENTS2, {
        extended: true,
        fancy: true,
        absolutelyFabulous: false,
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
    ...ELEMENTS,
});

const TestExtensibleCluster = ExtensibleCluster({
    ...TestBase,
    factory: <T extends `${Feature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, Feature);
        const cluster = Cluster({
            ...TestBase,
            supportedFeatures: BitFlags(METADATA.features, ...features),
        });
        extendCluster(cluster, ELEMENTS2, { extended: true });
        preventCluster(cluster, { absolutelyFabulous: true, bitterDisappointment: true });

        return cluster as unknown as TestExtension<BitFlags<typeof METADATA.features, T>>;
    },
});

export type TestExtension<SF extends TypeFromPartialBitSchema<typeof TestBase.features>> = ClusterForBaseCluster<
    typeof TestBase,
    SF
> & { supportedFeatures: SF } & (SF extends { extended: true } ? typeof ELEMENTS2 : {}) &
    (SF extends { absolutelyFabulous: true; bitterDisappointment: true } ? never : {});

describe("ClusterFactory", () => {
    describe("ClusterComponent", () => {
        it("installs elements", () => {
            const component = ClusterComponent(ELEMENTS);
            expectElements(component);
        });
    });

    describe("BaseClusterComponent", () => {
        it("builds cluster", () => {
            const base = BaseClusterComponent({
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
                validateFeatureSelection(["AbsolutelyFabulous"], Feature);
            }).not.toThrow(IllegalClusterError);
        });

        it("rejects an unsupported feature", () => {
            expect(() => {
                validateFeatureSelection(["SomewhatFabulous"], Feature);
            }).toThrow(new IllegalClusterError('"SomewhatFabulous" is not a valid feature identifier'));
        });
    });

    describe("preventCluster", () => {
        it("allows legal features", () => {
            expect(() => {
                preventCluster(createCluster({ extended: true }), {
                    absolutelyFabulous: true,
                    bitterDisappointment: true,
                });
            }).not.toThrow();
        });

        it("rejects illegal features", () => {
            expect(() => {
                preventCluster(createCluster({ absolutelyFabulous: true, bitterDisappointment: true }), {
                    absolutelyFabulous: true,
                    bitterDisappointment: true,
                });
            }).toThrow(
                new IllegalClusterError(
                    "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
                ),
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
            expect(cluster.supportedFeatures).toEqual({
                extended: true,
                fancy: false,
                absolutelyFabulous: false,
                bitterDisappointment: false,
            });
            expectElements(cluster);
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        });

        it("rejects unsupported features", () => {
            expect(() => {
                TestExtensibleCluster.with("AbsolutelyFabulous", "BitterDisappointment");
            }).toThrow(
                new IllegalClusterError(
                    "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
                ),
            );
        });

        it("rejects unsupported features with supported features", () => {
            expect(() => {
                TestExtensibleCluster.with("Extended", "AbsolutelyFabulous", "BitterDisappointment");
            }).toThrow(
                new IllegalClusterError(
                    "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
                ),
            );
        });
    });

    /**
     * Not a runtime test.  If this compiles the test "passes".
     *
     * Ensures that ClusterServer instantiates correctly from extended
     * clusters.
     */
    it("ClusterServer type is correct for automatic cluster", () => {
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
    it("ClusterServer type is correct for manually defined equivalent", () => {
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
});
