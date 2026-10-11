/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Migration } from "#behavior/state/migrations/index.js";

Migration("migration-test", values => {
    if (values.old === undefined) {
        return;
    }
    values.new = { from: values.old };
    delete values.old;
});

describe("Migration", () => {
    it("returns the keys it replaced and removed as a patch", () => {
        const values = { old: 1, kept: 2 };

        const patch = Migration.migrate("migration-test", values);

        expect(values).deep.equals({ new: { from: 1 }, kept: 2 });
        expect(patch).deep.equals({ old: undefined, new: { from: 1 } });
        expect(patch).has.property("old");
    });

    it("returns no patch when nothing changed", () => {
        expect(Migration.migrate("migration-test", { kept: 2 })).undefined;
    });

    it("returns no patch for a behavior without a migration", () => {
        expect(Migration.migrate("no-migration", { old: 1 })).undefined;
    });
});
