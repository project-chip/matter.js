/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/** Supported base types to stringify the data for the storage. */
type SupportedStorageBaseTypes = string | number | boolean | bigint | Uint8Array | Buffer;

/** Supported combined types to stringify the data for the storage. */
export type SupportedStorageTypes = SupportedStorageBaseTypes | SupportedStorageBaseTypes[] | [SupportedStorageBaseTypes, SupportedStorageTypes][] | Map<SupportedStorageBaseTypes, SupportedStorageTypes> | { [key: string]: SupportedStorageTypes | undefined | null } | { [key: string]: SupportedStorageTypes | undefined | null }[];

/** Special Magic key to identify special object types with custom encoding in JSON. */
const JSON_SPECIAL_KEY_TYPE = "__object__";

/** Special Magic key to identify the value of the custom encoded objects in JSON. */
const JSON_SPECIAL_KEY_VALUE = "__value__";

export function toJson(object: SupportedStorageTypes): string {
    return JSON.stringify(object, (_key, value) => {
        if (typeof value === 'bigint') {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"BigInt","${JSON_SPECIAL_KEY_VALUE}":"${value.toString()}"}`;
        }
        if (typeof value === 'object' && value !== null && value.type === 'Buffer' && Array.isArray(value.data)) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"Buffer","${JSON_SPECIAL_KEY_VALUE}":"${Buffer.from(value.data).toString('base64')}"}`;
        }
        if (value instanceof Uint8Array) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"Uint8Array","${JSON_SPECIAL_KEY_VALUE}":"${Buffer.from(value).toString('base64')}"}`;
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
                case "Buffer":
                    return Buffer.from(data[JSON_SPECIAL_KEY_VALUE], 'base64');
                case "Uint8Array":
                    return new Uint8Array(Buffer.from(data[JSON_SPECIAL_KEY_VALUE], 'base64'));
                case "Map":
                    return new Map(fromJson(data[JSON_SPECIAL_KEY_VALUE]) as [SupportedStorageBaseTypes, SupportedStorageBaseTypes][]);
                default:
                    throw new Error(`Unknown object type: ${object}`);
            }
        }
        return value;
    });
}
