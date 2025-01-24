/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Network } from "@matter/general";

export * from "./NetworkReactNative.js";

export async function closeNetwork() {
    return Network.get().close();
}
