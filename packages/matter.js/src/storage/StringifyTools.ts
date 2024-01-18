/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { UnexpectedDataError } from "../common/MatterError.js";
import { AttributeId } from "../datatype/AttributeId.js";
import { CaseAuthenticatedTag } from "../datatype/CaseAuthenticatedTag.js";
import { ClusterId } from "../datatype/ClusterId.js";
import { CommandId } from "../datatype/CommandId.js";
import { DataVersion } from "../datatype/DataVersion.js";
import { DeviceTypeId } from "../datatype/DeviceTypeId.js";
import { EndpointNumber } from "../datatype/EndpointNumber.js";
import { EntryIndex } from "../datatype/EntryIndex.js";
import { EventId } from "../datatype/EventId.js";
import { EventNumber } from "../datatype/EventNumber.js";
import { FabricId } from "../datatype/FabricId.js";
import { FabricIndex } from "../datatype/FabricIndex.js";
import { FieldId } from "../datatype/FieldId.js";
import { GroupId } from "../datatype/GroupId.js";
import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { ByteArray } from "../util/ByteArray.js";

/** Supported base types to stringify the data for the storage that can be used as keys and also values. */
type SupportedStorageBaseTypes =
    | string
    | number
    | boolean
    | bigint
    | ByteArray
    | AttributeId
    | CaseAuthenticatedTag
    | ClusterId
    | CommandId
    | DataVersion
    | DeviceTypeId
    | EndpointNumber
    | EntryIndex
    | EventId
    | EventNumber
    | FabricId
    | FabricIndex
    | FieldId
    | GroupId
    | NodeId
    | VendorId;

/** Supported combined types to stringify the data for the storage that can be used as values. */
type SupportedComplexStorageTypes =
    | Array<SupportedStorageBaseTypes | SupportedComplexStorageTypes> // Arrays
    | { [key: string]: SupportedStorageBaseTypes | SupportedComplexStorageTypes | null | undefined } // Objects
    | Array<[SupportedStorageBaseTypes, SupportedStorageBaseTypes | SupportedComplexStorageTypes | null | undefined]> // Map style arrays
    | Map<SupportedStorageBaseTypes, SupportedStorageBaseTypes | SupportedComplexStorageTypes>
    | null
    | undefined; // Maps

export type SupportedStorageTypes = SupportedStorageBaseTypes | SupportedComplexStorageTypes;

/** Special Magic key to identify special object types with custom encoding in JSON. */
const JSON_SPECIAL_KEY_TYPE = "__object__";

/** Special Magic key to identify the value of the custom encoded objects in JSON. */
const JSON_SPECIAL_KEY_VALUE = "__value__";

export function toJson(object: SupportedStorageTypes, spaces?: number): string {
    return JSON.stringify(
        object,
        (_key, value) => {
            if (value === undefined) {
                return `{"${JSON_SPECIAL_KEY_TYPE}":"Undefined"}`;
            }
            if (typeof value === "bigint") {
                return `{"${JSON_SPECIAL_KEY_TYPE}":"BigInt","${JSON_SPECIAL_KEY_VALUE}":"${value.toString()}"}`;
            }
            if (value instanceof Uint8Array) {
                return `{"${JSON_SPECIAL_KEY_TYPE}":"Uint8Array","${JSON_SPECIAL_KEY_VALUE}":"${value.toHex()}"}`;
            }
            //Node.js can sometimes pass in a native Buffer object in place of a Uint8Array, of which it is a subclass of, the Buffer class implements its own toJSON method which breaks our serialization.
            if (value != null && typeof value === "object" && value.type === "Buffer" && Array.isArray(value.data)) {
                return `{"${JSON_SPECIAL_KEY_TYPE}":"Uint8Array","${JSON_SPECIAL_KEY_VALUE}":"${Uint8Array.from(
                    value.data,
                ).toHex()}"}`;
            }
            if (value instanceof Map) {
                return `{"${JSON_SPECIAL_KEY_TYPE}":"Map","${JSON_SPECIAL_KEY_VALUE}":${JSON.stringify(
                    toJson(Array.from(value.entries())),
                )}}`;
            }
            return value;
        },
        spaces,
    );
}

export function fromJson(json: string): SupportedStorageTypes {
    return JSON.parse(json, (_key, value) => {
        if (typeof value === "string" && value.startsWith(`{"${JSON_SPECIAL_KEY_TYPE}":"`) && value.endsWith("}")) {
            const data = JSON.parse(value);
            const object = data[JSON_SPECIAL_KEY_TYPE];
            switch (object) {
                case "Undefined":
                    return undefined;
                case "BigInt":
                    return BigInt(data[JSON_SPECIAL_KEY_VALUE]);
                case "Uint8Array":
                    return ByteArray.fromHex(data[JSON_SPECIAL_KEY_VALUE]);
                case "Map":
                    return new Map(
                        fromJson(data[JSON_SPECIAL_KEY_VALUE]) as [
                            SupportedStorageBaseTypes,
                            SupportedStorageBaseTypes,
                        ][],
                    );

                // TODO Remove in the future, leave here for now for backward compatibility?
                case "AttributeId":
                case "CaseAuthenticatedTag":
                case "ClusterId":
                case "CommandId":
                case "DataVersion":
                case "DeviceTypeId":
                case "EndpointNumber":
                case "EntryIndex":
                case "EventId":
                case "FabricIndex":
                case "FieldId":
                case "GroupId":
                case "VendorId":
                    return data[JSON_SPECIAL_KEY_VALUE];
                case "EventNumber":
                case "FabricId":
                case "NodeId":
                    return BigInt(data[JSON_SPECIAL_KEY_VALUE]);

                default:
                    throw new UnexpectedDataError(`Unknown object type: ${object}`);
            }
        }
        return value;
    });
}
