/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ImplementationError } from "#MatterError.js";
import { MaybePromise } from "#util/Promises.js";
import { Crypto, ec } from "./Crypto.js";
import { CurveType, Key, KeyType, PrivateKey } from "./Key.js";

/**
 * WARNING: ONLY FOR USE IN PROTECTED TESTING ENVIRONMENTS WHERE SECURITY IS NOT A CONCERN
 *
 * Execute {@link actor} with sources of entropy replaced to produce stable values based on an input index.
 *
 * This is useful in testing environments where Matter logic is difficult to test with true entropy.
 *
 * I believe there are some crypto functions that are not fully mocked here but this covers current test cases.
 */
export function nonentropic<T>(index: number, actor: () => T): T {
    if (index < 0 || index > 255) {
        throw new ImplementationError(`Index for stable crypto must be 0-255`);
    }

    const crypto = Crypto.default;
    const { getRandomData, createKeyPair } = crypto;
    let isAsync = false;

    try {
        // Create random data consisting of index repeated
        crypto.getRandomData = function getRandomDataNONENTROPIC(length) {
            const result = new Uint8Array(length);
            result.fill(index);
            return result;
        };

        // Ensure EC key generation uses our own "entropy" source rather than the platform's
        crypto.createKeyPair = function getRandomDataNONENTROPIC() {
            const privateBits = ec.mapHashToField(crypto.getRandomData(48), ec.p256.CURVE.n);
            return Key({
                kty: KeyType.EC,
                crv: CurveType.p256,
                privateBits,
            }) as PrivateKey;
        };

        let result = actor();
        if (MaybePromise.is(result)) {
            isAsync = true;
            result = Promise.resolve(result).finally(revert) as T;
        }

        return result;
    } finally {
        if (!isAsync) {
            revert();
        }
    }

    function revert() {
        crypto.getRandomData = getRandomData;
        crypto.createKeyPair = createKeyPair;
    }
}
