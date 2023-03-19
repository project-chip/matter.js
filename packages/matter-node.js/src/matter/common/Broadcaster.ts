/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { VendorId } from "./VendorId";
import { Fabric } from "../fabric/Fabric";

export interface Broadcaster {
    setCommissionMode(mode: number, deviceName: string, deviceType: number, vendorId: VendorId, productId: number, discriminator: number): void;
    setFabrics(fabrics: Fabric[]): void;
    announce(): void;
    close(): void;
}
