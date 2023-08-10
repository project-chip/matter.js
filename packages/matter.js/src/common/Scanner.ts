/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { NodeId } from "../datatype/NodeId.js";
import { VendorId } from "../datatype/VendorId.js";
import { Fabric } from "../fabric/Fabric.js";
import { ServerAddress, ServerAddressIp } from "./ServerAddress.js";

/**
 * All information exposed by a commissionable device via announcements.
 * The properties are named identical as in the Matter specification.
 */
export type CommissionableDevice = {
    /** The device's addresses IP/port pairs */
    addresses: ServerAddress[];

    /** Sleep Idle Interval */
    SII?: number;

    /** Sleep Active Interval */
    SAI?: number;

    /** TCP supported */
    T?: number;

    /** Discriminator */
    D: number;

    /** VendorId + ProductId */
    VP?: string;

    /** Commissioning Mode */
    CM: number;

    /** Device type */
    DT?: number;

    /** Device advertising name */
    DN?: string;

    /** Rotating device identifier */
    RI?: string;

    /** Pairing hint */
    PH?: number;

    /** Pairing instructions */
    PI?: string;
};

/**
 * Identifier to use to discover a commissionable device.
 * Please decide for the best matching identifier that you have.
 */
export type CommissionableDeviceIdentifiers =
    | {
          /** Instance ID of the commissionable device. This is mainly used by UDC. */
          instanceId: string;
      }
    | {
          /** The Long Discriminator of the commissionable device that can be obtained from the QR code. */
          longDiscriminator: number;
      }
    | {
          /** The Short Discriminator of the commissionable device that can be obtained from the Pairing code. */
          shortDiscriminator: number;
      }
    | {
          /** The vendor ID of the commissionable device, if devices from a special vendor should be discovered. */
          vendorId: VendorId;
      }
    | {
          /** The device type of the commissionable device, if devices of a special type should be discovered. */
          deviceType: number;
      }
    | {
          /** The product ID of the commissionable device, if devices with a special product should be discovered. */
          productId: number;
      }
    | {
          /** Pass empty object to discover any commissionable device. */
          [K in any]: never; // aka "empty object" for just discovering any commisionable device
      };

export interface Scanner {
    /**
     * Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
     * and return them.
     */
    findOperationalDevice(fabric: Fabric, nodeId: NodeId, timeoutSeconds?: number): Promise<ServerAddressIp[]>;

    /**
     * Return already discovered addresses of an operational paired device and return them. Does not send out new
     * DNS-SD queries.
     */
    getDiscoveredOperationalDevices(fabric: Fabric, nodeId: NodeId): ServerAddressIp[];

    /**
     * Send DNS-SD queries to discover commissionable devices by an provided identifier (e.g. discriminator,
     * vendorId, etc.) and return them.
     */
    findCommissionableDevices(
        identifier: CommissionableDeviceIdentifiers,
        timeoutSeconds?: number,
    ): Promise<CommissionableDevice[]>;

    /** Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries. */
    getDiscoveredCommissionableDevices(identifier: CommissionableDeviceIdentifiers): CommissionableDevice[];

    /** Close the scanner server and free resources. */
    close(): void;
}
