/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { MatterCoreSpecificationV1_1 } from "../spec/Specifications.js";

/** @see {@link MatterCoreSpecificationV1_1} § 4.17.3.2 */
export const BLE_MATTER_SERVICE_UUID = "fff6";
export const BLE_MATTER_C1_CHARACTERISTIC_UUID = "18EE2EF5-263D-4559-959F-4F9C429F9D11";
export const BLE_MATTER_C2_CHARACTERISTIC_UUID = "18EE2EF5-263D-4559-959F-4F9C429F9D12";
export const BLE_MATTER_C3_CHARACTERISTIC_UUID = "64630238-8772-45F2-B87D-748A83218F04";

export const BLE_MINIMUM_ATT_MTU = 23; // 23-byte minimum ATT_MTU - 3 bytes for ATT operation header
export const BLE_MAXIMUM_BTP_MTU = 247; // Maximum size of BTP segment

export const BTP_MAXIMUM_WINDOW_SIZE = 255; // Server maximum window size

export const BTP_CONN_RSP_TIMEOUT_MS = 5000; // timer starts when receives handshake request & waits for a subscription request on c2
export const BTP_ACK_TIMEOUT_MS = 15000; // timer in ms before ack should be sent for a segment
export const BTP_SEND_ACK_TIMEOUT_MS = BTP_ACK_TIMEOUT_MS / 3; // timer starts when we receive a packet and stops when we sends its ack
