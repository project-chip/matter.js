/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * The Matter specification documents.
 */
export enum Specification {
    Core = "core",
    Cluster = "cluster",
    Device = "device",
}

export namespace Specification {
    /**
     * Long names for Matter specification documents.
     */
    export enum Names {
        core = "Matter Core Specification",
        cluster = "Matter Application Cluster Specification",
        device = "Matter Device Library Specification",
    }

    /**
     * Information on the source of an element.
     */
    export type CrossReference = {
        /**
         * The defining document for the element.
         */
        document: `${Specification}`;

        /**
         * The section of the defining document that most specifically
         * addresses the element.
         */
        section: string;
    };
}
