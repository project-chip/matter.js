/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ClusterComposer, IllegalClusterError } from "../../../src/cluster/mutation/ClusterComposer.js";
import {
    Elements1ish,
    Elements2ish,
    TestComposite,
    expectElementCounts,
    expectElements1,
    expectElements2,
} from "./util.js";

const composer = new ClusterComposer(TestComposite);

describe("ClusterComposer", () => {
    describe("composition", () => {
        it("extends cluster when features match", () => {
            const SELECTION = ["Extended", "Fancy", "AbsolutelyFabulous"] as const;
            type SELECTION = typeof SELECTION;
            type SELECTION_FLAGS = {
                extended: true;
                fancy: true;
                absolutelyFabulous: true;
                alsoExtended: false;
                bitterDisappointment: false;
            };

            // Type test: Feature-to-flag conversion
            const flags = {} as ClusterComposer.FeaturesAsFlags<typeof TestComposite, SELECTION>;
            flags satisfies SELECTION_FLAGS;

            // Type test: Selector applicability
            const contribution = {} as ClusterComposer.SelectorContribution<
                SELECTION_FLAGS,
                (typeof TestComposite.extensions)[0]
            >;
            contribution satisfies Elements2ish;

            // Type test: Component selection
            const selected = {} as ClusterComposer.SelectedElements<SELECTION_FLAGS, typeof TestComposite.extensions>;
            selected satisfies Elements2ish;

            // Type test: Overall composition
            type Composed = ClusterComposer.Of<typeof TestComposite, SELECTION>;
            const fakeCluster = {} as Composed;
            fakeCluster satisfies Elements1ish;
            fakeCluster satisfies Elements2ish;

            // Functional
            const cluster = composer.compose(SELECTION);
            expectElements1(cluster);
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        });

        it("doesn't extend cluster when features don't match", () => {
            const cluster = composer.compose(["Extended"]);
            expectElementCounts(cluster, 2);
        });

        it("treats missing feature as false", () => {
            const cluster = composer.compose(["Extended", "Fancy"]);
            expectElements2(cluster);
            expectElementCounts(cluster, 2);
        });
    });

    describe("validation", () => {
        it("accepts a supported feature", () => {
            expect(() => {
                composer.compose(["AbsolutelyFabulous"]);
            }).not.throw(IllegalClusterError);
        });

        it("rejects an unsupported feature", () => {
            expect(() => {
                composer.compose(["SomewhatFabulous"] as any);
            }).throw(IllegalClusterError, '"SomewhatFabulous" is not a valid feature identifier');
        });
    });

    describe("rejection", () => {
        type IsNever<T> = [T] extends [never] ? true : false;

        it("allows legal features", () => {
            expect(() => {
                composer.compose(["Extended"]);
            }).not.throw();
        });

        it("rejects illegal features", () => {
            const SELECTION = ["AbsolutelyFabulous", "BitterDisappointment"] as const;
            type SELECTION = typeof SELECTION;
            type SELECTION_FLAGS = {
                extended: false;
                fancy: false;
                absolutelyFabulous: true;
                alsoExtended: false;
                bitterDisappointment: true;
            };

            // Type test: Selector applicability
            const contribution = {} as ClusterComposer.SelectorContribution<
                SELECTION_FLAGS,
                (typeof TestComposite.extensions)[1]
            >;
            ({}) as IsNever<typeof contribution> satisfies true;

            // Type test: Component selection
            const selected = {} as ClusterComposer.SelectedElements<SELECTION_FLAGS, typeof TestComposite.extensions>;
            ({}) as IsNever<typeof selected> satisfies true;

            // Type test: WithSelected
            const withSelected = {} as ClusterComposer.WithSelected<typeof TestComposite, never>;
            withSelected satisfies never;

            // Type test: WithFeatures
            const withFeatures = {} as ClusterComposer.WithFeatures<typeof TestComposite, SELECTION>;
            withFeatures satisfies never;

            // Type test: Overall composition
            type Composed = ClusterComposer.Of<typeof TestComposite, SELECTION>;
            const fakeCluster = {} as Composed;
            fakeCluster satisfies never;

            // Functional
            expect(() => {
                const composed = composer.compose(SELECTION);
                composed satisfies never;
            }).throw(
                IllegalClusterError,
                "Feature combination { absolutelyFabulous: true, bitterDisappointment: true } is disallowed by the Matter specification",
            );
        });
    });
});
