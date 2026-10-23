/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Matter, Scope } from "#index.js";

/**
 * The standard model is not frozen, so `Scope` caches nothing for it: every `Scope(cluster)` and every
 * `ValueModel.members` read redoes the full scope analysis of the cluster. A consumer that converts attribute values
 * with the model spent nearly all of its conversion time in this analysis.
 */
describe("Scope reuse on the standard model", () => {
    const cluster = Matter.clusters.require("GeneralDiagnostics");
    const attribute = cluster.attributes.require("ActiveHardwareFaults");

    it("works on an unfrozen model", () => {
        expect(Object.isFrozen(cluster)).equals(false);
    });

    it("reuses the scope of an unchanged cluster", () => {
        expect(Scope(cluster)).equals(Scope(cluster));
    });

    it("reuses the members of an unchanged list attribute", () => {
        expect(attribute.members).equals(attribute.members);
    });

    it("answers repeated members reads without redoing the scope analysis", () => {
        const reads = 1000;
        const started = performance.now();
        for (let i = 0; i < reads; i++) {
            attribute.members.at(0);
        }
        const perRead = (performance.now() - started) / reads;

        // A cached read is a lookup; the scope analysis of a standard cluster takes tens of microseconds.
        expect(perRead).below(0.005);
    });
});
