/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ByteArray } from "../util/ByteArray.js";

/** Supported base types to stringify the data for the storage that can be used as keys and also values. */
type SupportedStorageBaseTypes =
    string
    | number
    | boolean
    | bigint
    | ByteArray;

/** Supported combined types to stringify the data for the storage that can be used as values. */
type SupportedComplexStorageTypes =
    | Array<SupportedStorageBaseTypes | SupportedComplexStorageTypes> // Arrays
    | { [key: string]: SupportedStorageBaseTypes | SupportedComplexStorageTypes | null | undefined } // Objects
    | Array<[SupportedStorageBaseTypes, SupportedStorageBaseTypes | SupportedComplexStorageTypes | null | undefined]> // Map style arrays
    | Map<SupportedStorageBaseTypes, SupportedStorageBaseTypes | SupportedComplexStorageTypes> | null | undefined; // Maps

export type SupportedStorageTypes = SupportedStorageBaseTypes | SupportedComplexStorageTypes;

/** Special Magic key to identify special object types with custom encoding in JSON. */
const JSON_SPECIAL_KEY_TYPE = "__object__";

/** Special Magic key to identify the value of the custom encoded objects in JSON. */
const JSON_SPECIAL_KEY_VALUE = "__value__";

export function toJson(object: SupportedStorageTypes): string {
    return JSON.stringify(object, (_key, value) => {
        if (typeof value === 'bigint') {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"BigInt","${JSON_SPECIAL_KEY_VALUE}":"${value.toString()}"}`;
        }
        if (value instanceof Uint8Array) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"Uint8Array","${JSON_SPECIAL_KEY_VALUE}":"${value.toHex()}"}`;
        }
        if (value instanceof Map) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"Map","${JSON_SPECIAL_KEY_VALUE}":${JSON.stringify(toJson(Array.from(value.entries())))}}`;
        }
        return value;
    });
}

export function fromJson(json: string): SupportedStorageTypes {
    return JSON.parse(json, (_key, value) => {
        if (typeof value === "string" && value.startsWith(`{"${JSON_SPECIAL_KEY_TYPE}":"`) && value.endsWith('"}')) {
            const data = JSON.parse(value);
            const object = data[JSON_SPECIAL_KEY_TYPE];
            switch (object) {
                case "BigInt":
                    return BigInt(data[JSON_SPECIAL_KEY_VALUE]);
                case "Uint8Array":
                    return ByteArray.fromHex(data[JSON_SPECIAL_KEY_VALUE]);
                case "Map":
                    return new Map(fromJson(data[JSON_SPECIAL_KEY_VALUE]) as [SupportedStorageBaseTypes, SupportedStorageBaseTypes][]);
                default:
                    throw new Error(`Unknown object type: ${object}`);
            }
        }
        return value;
    });
}
