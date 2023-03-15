/**
 * @license
 * Copyright 2022 The node-matter Authors
 * SPDX-License-Identifier: Apache-2.0
 */

declare module "*package.json" {
    const npmPackage: {
        version: string
    };
    export default npmPackage;
}
