/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AccessControl, ExpiredReferenceError, Val } from "#protocol";

type Container = Record<string | number, Val>;

/**
 * ManagedReference manages a reference to a container property of another reference.
 *
 * The ManagedReference detects when the value changes and clones the container if it is the original copy.
 *
 * This serves the following purposes:
 *
 *   - We can change properties in a container (an array or object) without modifying the original container
 *
 *   - When nested, this effect bubbles so we make copies at all levels in the hierarchy as necessary
 *
 *   - Preserves metadata regarding the state of the value
 *
 * Change detection happens automatically if the value is replaced.  If a subvalue is replaced, the logic replacing the
 * subvalue must update "changed" manually before replacing the subvalue.  For managed structures this is handled by a
 * separate ManagedReference.
 *
 * @param parent a reference to the container we reference
 * @param index the key we reference
 * @param assertWriteOk enforces ACLs and read-only
 * @param clone clones the container prior to write; undefined if not transactional
 *
 * @returns a reference to the property
 */
export function ManagedReference(
    parent: Val.Reference<Val.Collection>,
    index: string | number,
    assertWriteOk: (value: Val) => void,
    clone: (container: Val) => Val,
) {
    let value = (parent.value as Container)[index];
    let expired = false;
    let location = {
        ...parent.location,
        path: parent.location.path.at(index),
    };

    const reference: Val.Reference = {
        get rootOwner() {
            return parent.rootOwner;
        },

        get parent() {
            return parent;
        },

        get value() {
            // Authorization is unnecessary here because the reference would not exist if access is unauthorized

            // Note that we allow read from expired references
            return value;
        },

        get expired() {
            return expired;
        },

        get location() {
            return location;
        },

        set location(loc: AccessControl.Location) {
            location = loc;
        },

        set value(newValue: Val) {
            if (value === newValue) {
                return;
            }

            // Authorization and validation
            assertWriteOk(newValue);

            // Set the value directly before change() so change() doesn't create a useless clone
            replaceValue(newValue);

            // Now use change to complete the update
            this.change(() => ((parent.value as Container)[index] = newValue));
        },

        get original() {
            if (!parent.original) {
                return undefined;
            }
            return (parent.original as Container)[index];
        },

        change(mutator: () => void) {
            if (expired) {
                throw new ExpiredReferenceError(this.location);
            }

            parent.change(() => {
                // In transactions, clone the value if we haven't done so yet
                if (clone && value === this.original) {
                    const newValue = clone(value);
                    (parent.value as Container)[index] = newValue;
                    replaceValue(newValue);
                }

                // Apply changes
                mutator();
            });
        },

        refresh() {
            if (parent.expired) {
                expired = true;
                return;
            }
            if (parent.value === undefined) {
                expired = true;
                replaceValue(undefined);
                return;
            }
            replaceValue((parent.value as Container)[index]);
        },
    };

    if (!parent.subrefs) {
        parent.subrefs = {};
    }
    parent.subrefs[index] = reference;

    return reference;

    function replaceValue(newValue: Val) {
        value = newValue;

        const subrefs = reference.subrefs;
        if (subrefs) {
            for (const key in subrefs) {
                subrefs[key].refresh();
            }
        }
    }
}
