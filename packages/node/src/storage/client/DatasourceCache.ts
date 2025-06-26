/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Datasource } from "#behavior/state/managed/Datasource.js";
import { InternalError } from "#general";
import { Val } from "#protocol";
import { EndpointStore } from "#storage/EndpointStore.js";
import { DatasourceStore } from "../server/DatasourceStore.js";

/**
 * Factory function for the default implementation of {@link Datasource.ExternallyMutableStore}.
 *
 * This implements storage for attribute values for a single cluster loaded from remote nodes.
 */
export function DatasourceCache(
    store: EndpointStore,
    behaviorId: string,
    initialValues: Val.Struct | undefined,
): Datasource.ExternallyMutableStore {
    let version = initialValues?.[DatasourceCache.VERSION_KEY] as number;
    if (typeof version !== "number") {
        version = Datasource.UNKNOWN_VERSION;
    }

    return {
        ...DatasourceStore(store, behaviorId, initialValues),

        async externalSet(values: Val.Struct) {
            if (typeof values[DatasourceCache.VERSION_KEY] === "number") {
                version = values[DatasourceCache.VERSION_KEY];
            }

            await store.set({ [behaviorId]: values });

            if (this.externalChangeListener) {
                await this.externalChangeListener(values);
            } else {
                if (!this.initialValues) {
                    this.initialValues = {};
                }
                Object.assign(this.initialValues, values);
            }
        },

        externalChangeListener: undefined,

        get version() {
            return version;
        },

        set version(_version: number) {
            throw new InternalError("Datasource version must be set via externalSet");
        },
    };
}

DatasourceCache satisfies DatasourceStore.Type;

export namespace DatasourceCache {
    /**
     * Standard key for storing the version.
     *
     * This conveys the version to the {@link Datasource}.
     */
    export const VERSION_KEY = "__version__";
}
