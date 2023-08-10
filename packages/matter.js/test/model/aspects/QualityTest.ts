/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Quality } from "../../../src/model/aspects/Quality.js";

describe("Quality", () => {
    Quality.FlagNames.forEach(flag => {
        describe(`flag ${flag}`, () => {
            const field = Quality.Flag[flag];

            it("loads from structured definition", () => {
                expect(new Quality({ [field]: true })[field]).toBe(true);
            });

            it("loads from text definition", () => {
                expect(new Quality(`${flag}`)[field]).toBe(true);
            });

            it("disallows from text definition", () => {
                const quality = new Quality(`!${flag}`);
                expect(quality[field]).toBe(undefined);
                expect(quality.disallowed?.[field]).toBe(true);
            });
        });
    });

    describe("illegal flag", () => {
        it("throws", () => {
            expect(new Quality("Z").errors).toEqual([
                {
                    code: "UNKNOWN_QUALITY_FLAG",
                    message: 'Unknown flag "Z"',
                    source: 'Quality "Z"',
                },
            ]);
        });
    });

    describe("all flags", () => {
        const quality = new Quality(Quality.FlagNames.join("I N F S P C X"));

        it("load from text definition", () => {
            expect(quality.nullable).toBe(true);
            expect(quality.nonvolatile).toBe(true);
            expect(quality.fixed).toBe(true);
            expect(quality.scene).toBe(true);
            expect(quality.reportable).toBe(true);
            expect(quality.changesOmitted).toBe(true);
            expect(quality.singleton).toBe(true);
        });

        it("serialize", () => {
            expect(`${quality}`).toBe("X N F S P C I");
        });
    });

    describe("mixed flags", () => {
        it("parse correctly", () => {
            const quality = new Quality("X !N F !S P");
            expect(quality.nullable).toBe(true);
            expect(quality.nonvolatile).toBe(undefined);
            expect(quality.fixed).toBe(true);
            expect(quality.scene).toBe(undefined);
            expect(quality.reportable).toBe(true);
            expect(quality.changesOmitted).toBe(undefined);
            expect(quality.singleton).toBe(undefined);
        });
    });
});
