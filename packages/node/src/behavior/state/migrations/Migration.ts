/**
 * @license
 * Copyright 2022-2026 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { InternalError } from "@matter/general";
import { Val } from "@matter/protocol";

const migrations = new Map<string, Migration.Migrator>();

/**
 * Add a data migration for the persisted values of a behavior.
 *
 * Migrations adjust persisted data when the stored format is incompatible with current code.  The store applies them
 * when it loads and persists the result with the behavior's next write.
 */
export function Migration(behaviorId: string, migrator: Migration.Migrator) {
    if (migrations.has(behaviorId)) {
        throw new InternalError(`Duplicate migration ${behaviorId}`);
    }

    migrations.set(behaviorId, migrator);
}

export namespace Migration {
    /**
     * Migrate {@link values} in place.  Returns the patch to persist, or undefined if nothing changed.
     */
    export function migrate(behaviorId: string, values: Val.Struct): Val.Struct | undefined {
        const migrator = migrations.get(behaviorId);
        if (migrator === undefined) {
            return;
        }

        const before = { ...values };
        migrator(values);

        let patch: Val.Struct | undefined;
        for (const key in before) {
            if (!(key in values)) {
                (patch ??= {})[key] = undefined;
            }
        }
        for (const key in values) {
            if (values[key] !== before[key]) {
                (patch ??= {})[key] = values[key];
            }
        }
        return patch;
    }

    /**
     * Adjusts persisted values in place.  Changes are detected per top-level key by identity, so replace a value
     * rather than mutating it.
     */
    export interface Migrator {
        (values: Val.Struct): void;
    }
}
