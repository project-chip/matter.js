/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */
import { ImplementationError, MatterError } from "#general";

/**
 * Matter specific Certificate Sizes
 * @see {@link MatterSpecification.v13.Core} 6.1.3.
 */
export const MAX_DER_CERTIFICATE_SIZE = 600;

export class CertificateError extends MatterError {}

export type Unsigned<Type> = { [Property in keyof Type as Exclude<Property, "signature">]: Type[Property] };

export function assertCertificateDerSize(certBytes: Uint8Array) {
    if (certBytes.length > MAX_DER_CERTIFICATE_SIZE) {
        throw new ImplementationError(
            `Certificate to generate is too big: ${certBytes.length} bytes instead of max ${MAX_DER_CERTIFICATE_SIZE} bytes`,
        );
    }
}
