/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimeNode } from "@project-chip/matter.js-nodejs";

export class TimeReactNative extends TimeNode {
    set utility(_value: boolean) {
        // Do nothing, Override utility function because React Native do not have ref/unref functionality
    }

    get utility(): boolean {
        return false; // React Native do not have ref/unref functionality
    }
}
