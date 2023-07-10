/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Fabric } from "../fabric/Fabric.js";
import { VendorId } from "../datatype/VendorId.js";

export interface Broadcaster {
    setCommissionMode(mode: number, deviceName: string, deviceType: number, vendorId: VendorId, productId: number, discriminator: number, announcedNetPort: number): void;
    setFabrics(fabrics: Fabric[], announcedNetPort: number): void;
    setCommissionerInfo(deviceName: string, vendorId: VendorId, productId: number, announcedNetPort: number, deviceType?: number): void;
    announce(): void;
    close(): void;
}
