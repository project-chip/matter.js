/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterInterface } from "../../../src/behavior/cluster/ClusterInterface.js";
import { ActionContext } from "../../../src/behavior/context/ActionContext.js";
import { ClusterType } from "../../../src/cluster/ClusterType.js";
import { BitFlag } from "../../../src/schema/BitmapSchema.js";
import { MaybePromise } from "../../../src/util/Promises.js";
import { MyCluster } from "./cluster-behavior-test-util.js";

const FeaturedCluster = ClusterType({
    name: "Features",
    id: 12,
    revision: 1,

    features: {
        foo: BitFlag(0),
        bar: BitFlag(1),
    },

    supportedFeatures: {
        foo: true,
    },
});

type FeaturesInterface = {
    components: [
        {
            flags: {};
            methods: {
                unconditionalMethod(value: string): boolean;
            };
        },
        {
            flags: { foo: true };
            methods: {
                fooMethod(value: number): number;
            };
        },
        {
            flags: { bar: true };
            methods: {
                barMethod(value: boolean): string;
            };
        },
    ];
};

describe("ClusterInterface", () => {
    describe("MethodsOf", () => {
        it("includes interface", () => {
            type Mo = ClusterInterface.MethodsOf<FeaturesInterface, typeof FeaturedCluster>;
            ({}) as keyof Mo satisfies "unconditionalMethod" | "fooMethod";
            ({}) as "unconditionalMethod" | "fooMethod" satisfies keyof Mo;
        });

        it("falls back to mapped", () => {
            type Mo = ClusterInterface.MethodsOf<ClusterInterface.Empty, MyCluster>;
            ({}) as keyof Mo satisfies "optCmd" | "reqCmd";
            ({}) as "optCmd" | "reqCmd" satisfies keyof Mo;
        });
    });

    describe("InterfaceMethodsOf", () => {
        it("includes unconditional", () => {
            type Imo = ClusterInterface.InterfaceMethodsOf<FeaturesInterface, {}>;
            ({}) as keyof Imo satisfies "unconditionalMethod";
            ({}) as "unconditionalMethod" satisfies keyof Imo;
        });

        it("includes conditional", () => {
            type Imo = ClusterInterface.InterfaceMethodsOf<FeaturesInterface, { foo: true }>;
            ({}) as keyof Imo satisfies "unconditionalMethod" | "fooMethod";
            ({}) as "unconditionalMethod" | "fooMethod" satisfies keyof Imo;
        });

        it("allows override via standard method", () => {
            class Ignored implements ClusterInterface.InterfaceMethodsOf<FeaturesInterface, { foo: true }> {
                unconditionalMethod(_value: string): boolean {
                    throw new Error("Method not implemented.");
                }

                fooMethod(_value: number): number {
                    throw new Error("Method not implemented.");
                }
            }
            Ignored;
        });
    });

    describe("MappedMethodsOf", () => {
        type Mmo = ClusterInterface.MappedMethodsOf<ClusterType.CommandsOf<MyCluster>>;

        it("requires mandatory", () => {
            ({}) as Mmo satisfies {
                reqCmd(request: string, state: any, context?: ActionContext): MaybePromise<string>;
            };
        });

        it("allowsOptional", () => {
            undefined satisfies Mmo["optCmd"];
            ((_request: boolean) => true) satisfies Mmo["optCmd"];
        });
    });
});
