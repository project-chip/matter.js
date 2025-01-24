/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export function looksLikeField(text?: string) {
    return !!text?.match(/^[a-z0-9]+(?: Field| Value)$/i);
}

export function looksLikeDatatype(text?: string) {
    return !!(
        text?.match(/^[a-z0-9]+(?:Enum|Struct| Attribute| Command| Event| Type| Field| Value| Bits?)$/i) ||
        // This is a real winner.  Joint Fabric Datastore cluster in 1.4 manages to follow no convention for indicating
        // these are structs *and* innovatively sticks spaces in type names.  We don't add to the pattern above because
        // the spaces make this pretty aggressive so we execute with case sensitivity
        text?.match(/^(?:[A-Z][?:a-zA-Z0-9]* )+Entry Type$/)
    );
}
