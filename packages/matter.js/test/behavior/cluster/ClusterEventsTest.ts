/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Behavior } from "../../../src/behavior/Behavior.js";
import { InvocationContext } from "../../../src/behavior/InvocationContext.js";
import { ClusterEvents } from "../../../src/behavior/cluster/ClusterEvents.js";
import { Observable } from "../../../src/util/Observable.js";
import { MyCluster } from "./cluster-behavior-test-util.js";

describe("ClusterEvents", () => {
    describe("EventsProperties", () => {
        type Ep = ClusterEvents<MyCluster, Behavior.Type>;

        it("includes required", () => {
            ({}) as Ep satisfies {
                reqAttr$Change: Observable<[value: string, oldValue: string, context?: InvocationContext]>;

                reqEv: Observable<[payload: string, context?: InvocationContext]>;
            };
        });

        it("allows optional", () => {
            undefined satisfies Ep["optAttr$Change"];
            ({}) as Observable<[boolean, boolean, context: InvocationContext]> satisfies Ep["optAttr$Change"];
            undefined satisfies Ep["optEv"];
            ({}) as Observable<[string, context: InvocationContext]> satisfies Ep["optEv"];
        });
    });

    describe("EventsInstance", () => {
        type Ei = ClusterEvents<MyCluster, Behavior.Type>;

        it("requires mandatory", () => {
            ({}) as Ei satisfies {
                reqAttr$Change: Observable<[value: string, oldValue: string, context: InvocationContext]>;

                reqEv: Observable<[payload: string, context: InvocationContext]>;
            };
        });

        it("allows optional", () => {
            undefined satisfies Ei["optAttr$Change"];
            ({}) as Observable<[boolean, boolean, context: InvocationContext]> satisfies Ei["optAttr$Change"];
            undefined satisfies Ei["optEv"];
            ({}) as Observable<[string, context: InvocationContext]> satisfies Ei["optEv"];
        });
    });
});
