/**
 * @file Utils to manipulate types.
 * @copyright Project CHIP Authors 2022
 * @license Apache-2.0
 */

import { MatterCoreSpecificationV1_0 } from "../Specifications";

/**
 * TLV element types.
 * 
 * @see {@link MatterCoreSpecificationV1_0} § A.7.1
 */
export enum ElementType {
    SignedInt = 0x00,
    UnsignedInt = 0x04,
    Boolean = 0x08,
    Float = 0x0A,
    Double = 0x0B,
    Utf8String = 0x0C,
    OctetString = 0x10,
    Null = 0x14,
    Structure = 0x15,
    Array = 0x16,
    List = 0x17,
    EndOfContainer = 0x18,
}

export const enum ElementSize {
    Byte1 = 0x00,
    Byte2 = 0x01,
    Byte4 = 0x02,
    Byte8 = 0x03,
}

const enum TagControl {
    Anonymous = 0x00,
    ContextSpecific = 0x20,
    CommonProfile2Bytes = 0x40,
    CommonProfile4Bytes = 0x60,
    ImplicitProfile2Bytes = 0x80,
    ImplicitProfile4Bytes = 0xA0,
    FullyQualified6Bytes = 0xC0,
    FullyQualified8Bytes = 0xE0,
}

const COMMON_PROFILE = 0x00000000;
const UNSPECIFIED_PROFILE = 0xFFFFFFFF;

