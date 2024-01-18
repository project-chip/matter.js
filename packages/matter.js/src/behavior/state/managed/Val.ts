/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import type { ValueSupervisor } from "../../supervision/ValueSupervisor.js";

/**
 * General type for state values.
 */
export type Val = unknown;

export namespace Val {
    /**
     * Type for Matter structs.  In JS this is an object with string keys.
     */
    export type Struct = Record<string, Val>;

    /**
     * Type for Matter lists.  In Js this is an array.
     */
    export type List = Val[];

    /**
     * Any matter collection type.
     */
    export type Collection = Struct | List;

    /**
     * A Reference offers a simple mechanism for referring to properties by reference.
     */
    export interface Reference<T extends Val = Val> {
        /**
         * The current value of the referenced property.
         */
        value: T;

        /**
         * The original value of the referenced property.
         */
        readonly original: T;

        /**
         * Active references to child properties.
         */
        subreferences?: Record<number | string, Reference>;

        /**
         * Mutates data.  Clones the container and updates metadata when called on an unmodified transactional
         * reference.
         *
         * Then runs the specified mutator to make the actual changes.
         *
         * Immediately commits if non-transactional.
         */
        change(mutator: () => void): void;

        /**
         * Notify owner of change.
         *
         * Any changes to referenced values outside of transactions should use this to trigger change events.
         *
         * Inside a transaction change events trigger after commit.
         *
         * @param index the index for struct property changes
         * @param oldValue the previous value of the property
         * @param newValue the new value
         */
        notify(index?: string, oldValue?: Val, newValue?: Val): void;

        /**
         * Refresh any internal cache from the referenced container.
         */
        refresh(): void;

        /**
         * The managed value that owns the reference.
         */
        owner?: T;
    }

    export const properties = Symbol("properties");

    /**
     * Unmanaged raw state classes have no contextual information.  They may implement this interface to provide an
     * alternate context-aware object for property read, write and validation.
     */
    export interface Dynamic extends Struct {
        /**
         * Obtain a context-aware property source (and sink).  Supervision will read/write properties from here if
         * present.  Otherwise they're read from static state as normal.
         */
        [properties]<This extends Val.Struct>(
            this: This,
            session: ValueSupervisor.Session,
        ): Partial<This>;
    }
}
