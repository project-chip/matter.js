/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { AttributeId } from "../datatype/AttributeId.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { CommandId } from "../datatype/CommandId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { EventId } from "../datatype/EventId.js";
import { FabricId } from "../datatype/FabricId.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { GroupId } from "../datatype/GroupId.js";
import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { ByteArray } from "../util/ByteArray.js";

/** Supported base types to stringify the data for the storage that can be used as keys and also values. */
type SupportedStorageBaseTypes =
    string
    | number
    | boolean
    | bigint
    | ByteArray
    | AttributeId
    | ClusterId
    | CommandId
    | EndpointNumber
    | EventId
    | FabricId
    | FabricIndex
    | GroupId
    | NodeId
    | VendorId;

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
        //Node.js can sometimes pass in a native Buffer object in place of a Uint8Array, of which it is a subclass of, the Buffer class implements its own toJSON method which breaks our serialization.
        if (value != null && typeof value === 'object' && value.type === 'Buffer' && Array.isArray(value.data)) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"Uint8Array","${JSON_SPECIAL_KEY_VALUE}":"${Uint8Array.from(value.data).toHex()}"}`;
        }
        if (value instanceof Map) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"Map","${JSON_SPECIAL_KEY_VALUE}":${JSON.stringify(toJson(Array.from(value.entries())))}}`;
        }
        if (value instanceof AttributeId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"AttributeId","${JSON_SPECIAL_KEY_VALUE}":${value.id}}`;
        }
        if (value instanceof ClusterId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"ClusterId","${JSON_SPECIAL_KEY_VALUE}":${value.id}}`;
        }
        if (value instanceof CommandId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"CommandId","${JSON_SPECIAL_KEY_VALUE}":${value.id}}`;
        }
        if (value instanceof EndpointNumber) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"EndpointNumber","${JSON_SPECIAL_KEY_VALUE}":${value.number}}`;
        }
        if (value instanceof EventId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"EventId","${JSON_SPECIAL_KEY_VALUE}":${value.id}}`;
        }
        if (value instanceof FabricId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"FabricId","${JSON_SPECIAL_KEY_VALUE}":"${value.id.toString()}"}`;
        }
        if (value instanceof FabricIndex) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"FabricIndex","${JSON_SPECIAL_KEY_VALUE}":${value.index}}`;
        }
        if (value instanceof GroupId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"GroupId","${JSON_SPECIAL_KEY_VALUE}":${value.id}}`;
        }
        if (value instanceof NodeId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"NodeId","${JSON_SPECIAL_KEY_VALUE}":"${value.id.toString()}"}`;
        }
        if (value instanceof VendorId) {
            return `{"${JSON_SPECIAL_KEY_TYPE}":"VendorId","${JSON_SPECIAL_KEY_VALUE}":${value.id}}`;
        }
        return value;
    });
}

export function fromJson(json: string): SupportedStorageTypes {
    return JSON.parse(json, (_key, value) => {
        if (typeof value === "string" && value.startsWith(`{"${JSON_SPECIAL_KEY_TYPE}":"`) && value.endsWith('}')) {
            const data = JSON.parse(value);
            const object = data[JSON_SPECIAL_KEY_TYPE];
            switch (object) {
                case "BigInt":
                    return BigInt(data[JSON_SPECIAL_KEY_VALUE]);
                case "Uint8Array":
                    return ByteArray.fromHex(data[JSON_SPECIAL_KEY_VALUE]);
                case "Map":
                    return new Map(fromJson(data[JSON_SPECIAL_KEY_VALUE]) as [SupportedStorageBaseTypes, SupportedStorageBaseTypes][]);
                case "AttributeId":
                    return new AttributeId(data[JSON_SPECIAL_KEY_VALUE]);
                case "ClusterId":
                    return new ClusterId(data[JSON_SPECIAL_KEY_VALUE]);
                case "CommandId":
                    return new CommandId(data[JSON_SPECIAL_KEY_VALUE]);
                case "EndpointNumber":
                    return new EndpointNumber(data[JSON_SPECIAL_KEY_VALUE]);
                case "EventId":
                    return new EventId(data[JSON_SPECIAL_KEY_VALUE]);
                case "FabricId":
                    return new FabricId(BigInt(data[JSON_SPECIAL_KEY_VALUE]));
                case "FabricIndex":
                    return new FabricIndex(data[JSON_SPECIAL_KEY_VALUE]);
                case "GroupId":
                    return new GroupId(data[JSON_SPECIAL_KEY_VALUE]);
                case "NodeId":
                    return new NodeId(BigInt(data[JSON_SPECIAL_KEY_VALUE]));
                case "VendorId":
                    return new VendorId(data[JSON_SPECIAL_KEY_VALUE]);

                default:
                    throw new Error(`Unknown object type: ${object}`);
            }
        }
        return value;
    });
}
