/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ValidationError } from "../common/ValidationError.js";
import { VendorId } from "./VendorId.js";

/**
 * Base type for semantic identifiers per Matter specification.  Formally a 32-bit unsigned integer with assigned bit
 * functions:
 *
 *     Bits 0-15 are the identifier's scope:
 *         0x0000: Standard (global) or scoped (within cluster) ID
 *         0x0001 - 0xfff0: Manufacturer code as defined by CSA group
 *         0xfff1 - 0xfff4: Test manufacturer codes
 *     Bits 16-31 are the actual identifier
 *
 * For this and following types, the specification defines restrictions that we do not express statically with
 * TypeScript.
 */
export type ManufacturerExtensibleIdentifier = number;
export type Mei = ManufacturerExtensibleIdentifier;

export function asMEI(vendorPrefix: VendorId, typeSuffix: number) {
    if (vendorPrefix < 0 || vendorPrefix > 0xfff4) {
        throw new ValidationError(`Invalid vendor prefix for MEI: ${vendorPrefix}`);
    }
    if (typeSuffix < 0 || typeSuffix > 0xfffe) {
        throw new ValidationError(`Invalid type suffix for MEI: ${typeSuffix}`);
    }

    return ((vendorPrefix << 16) + typeSuffix) >>> 0;
}

export function fromMEI(mei: number): { vendorPrefix: VendorId; typeSuffix: number } {
    const vendorPrefix = mei >>> 16;
    if (vendorPrefix > 0xfff4) {
        throw new ValidationError(`Invalid vendor prefix for MEI: ${mei}`);
    }

    const typeSuffix = mei & 0xffff;
    if (typeSuffix > 0xfffe) {
        throw new ValidationError(`Invalid type suffix for MEI: ${mei}`);
    }

    return {
        vendorPrefix: VendorId(vendorPrefix),
        typeSuffix: mei & 0xffff,
    };
}
