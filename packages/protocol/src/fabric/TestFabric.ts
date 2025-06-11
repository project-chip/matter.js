/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { CertificateAuthority } from "#certificate/CertificateAuthority.js";
import { ImplementationError, nonentropic } from "#general";
import { FabricIndex, VendorId } from "#types";
import { FabricAuthority } from "./FabricAuthority.js";
import { FabricManager } from "./FabricManager.js";

/**
 * WARNING: ONLY FOR USE IN PROTECTED TESTING ENVIRONMENTS WHERE SECURITY IS NOT A CONCERN
 *
 * Generate a fabric useful for testing purposes.
 *
 * The properties of the fabric, including crypto matter, are stable with regards to {@link index}.
 */
export async function TestFabric(options: TestFabric.Options = {}) {
    const authority = await TestFabric.Authority(options);

    return authority.createFabric();
}

export namespace TestFabric {
    /**
     * WARNING: ONLY FOR USE IN PROTECTED TESTING ENVIRONMENTS WHERE SECURITY IS NOT A CONCERN
     *
     * Obtain a test authority.
     *
     * Crypto matter is stable with respect to {@link index}.
     */
    export async function Authority({ index, fabrics }: Options = {}) {
        if (index === undefined) {
            if (fabrics) {
                index = fabrics.allocateFabricIndex();
            } else {
                index = 1;
            }
        }

        return forFabric(index, async () => {
            const authority = new FabricAuthority({
                ca: await CertificateAuthority.create(),
                config: {
                    adminFabricLabel: `mock-fabric-${index}`,
                    adminVendorId: VendorId(0xfff1),
                    fabricIndex: FabricIndex(index),
                },
                fabrics: fabrics ?? new FabricManager(),
            });

            const createFabric = authority.createFabric.bind(authority);
            authority.createFabric = () => forFabric(index ?? 1, createFabric);

            return authority;
        });
    }

    export interface Options {
        index?: number;
        fabrics?: FabricManager;
    }
}

async function forFabric<T>(index: number, actor: () => Promise<T>): Promise<T> {
    if (index < 1 || index > 254) {
        throw new ImplementationError("Test fabric indexes must be in the range 1-254");
    }

    return nonentropic(index, actor);
}
