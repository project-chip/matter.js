/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Network } from "@project-chip/matter.js-general";

export * from "./NetworkReactNative.js";

export async function closeNetwork() {
    return Network.get().close();
}
