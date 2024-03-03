/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Attribute, Command, Event, EventPriority, TlvNoResponse } from "../../../src/cluster/Cluster.js";
import { ClusterType } from "../../../src/cluster/ClusterType.js";
import { IllegalClusterError } from "../../../src/cluster/mutation/ClusterComposer.js";
import { MutableCluster } from "../../../src/cluster/mutation/MutableCluster.js";
import { ClusterServer } from "../../../src/cluster/server/ClusterServer.js";
import { ClusterServerHandlers } from "../../../src/cluster/server/ClusterServerTypes.js";
import { FabricIndex } from "../../../src/datatype/FabricIndex.js";
import { Fabric } from "../../../src/fabric/Fabric.js";
import { BitFlag } from "../../../src/schema/BitmapSchema.js";
import { TlvNoArguments } from "../../../src/tlv/TlvNoArguments.js";
import { TlvUInt8 } from "../../../src/tlv/TlvNumber.js";
import { TlvField, TlvObject } from "../../../src/tlv/TlvObject.js";
import { TypeFromSchema } from "../../../src/tlv/TlvSchema.js";
import {
    TestComposite,
    TlvTargetStruct,
    expectElementCounts,
    expectElements1,
    expectElements2,
    expectMetadata,
} from "./util.js";

const TestMutable = MutableCluster(TestComposite);

describe("ClusterFactory", () => {
    describe("BaseClusterComponent", () => {
        it("builds cluster", () => {
            expectMetadata(TestMutable);
            expectElements1(TestMutable);
        });
    });

    describe("a conventional extensible cluster", () => {
        it("creates with no features", () => {
            const cluster = TestMutable.with();
            expectElements1(cluster);
            expectElementCounts(cluster, 1);
        });

        it("creates with a feature", () => {
            const cluster = TestMutable.with("Extended");
            expect(cluster.supportedFeatures).deep.equal({
                extended: true,
                fancy: false,
                absolutelyFabulous: false,
                bitterDisappointment: false,
                alsoExtended: false,
            });
            expectElements1(cluster);
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        });

        it("rejects unsupported features", () => {
            expect(() => {
                TestMutable.with("AbsolutelyFabulous", "BitterDisappointment");
            }).throw(
                IllegalClusterError,
                "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
            );
        });

        it("rejects unsupported features with supported features", () => {
            expect(() => {
                TestMutable.with("Extended", "AbsolutelyFabulous", "BitterDisappointment");
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
            const MyCluster = TestMutable.with("Extended");

            MyCluster.name satisfies "MyCluster";

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
            const MyCluster = ClusterType({
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
            const MyCluster = TestMutable.with("AlsoExtended");

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
