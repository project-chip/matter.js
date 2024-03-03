/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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
export type DiscoveryData = {
    /** VendorId + ProductId */
    VP?: string;

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

    /** Sleep Idle Interval */
    SII?: number;

    /** Sleep Active Interval */
    SAI?: number;

    /** Session active threshold */
    SAT?: number;

    /** TCP supported */
    T?: number;

    /** ICD Long Idle Time operating mode supported */
    ICD?: number;
};

export type DiscoverableDevice<SA extends ServerAddress> = DiscoveryData & {
    /** The device's addresses IP/port pairs */
    addresses: SA[];
};

export type AddressTypeFromDevice<D extends DiscoverableDevice<any>> =
    D extends DiscoverableDevice<infer SA> ? SA : never;

export type OperationalDevice = DiscoverableDevice<ServerAddressIp> & {
    deviceIdentifier: string;
};

export type CommissionableDevice = DiscoverableDevice<ServerAddress> & {
    deviceIdentifier: string;

    /** Discriminator */
    D: number;

    /** Commissioning Mode */
    CM: number;
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
    findOperationalDevice(
        fabric: Fabric,
        nodeId: NodeId,
        timeoutSeconds?: number,
        ignoreExistingRecords?: boolean,
    ): Promise<OperationalDevice | undefined>;

    /**
     * Return already discovered addresses of an operational paired device and return them. Does not send out new
     * DNS-SD queries.
     */
    getDiscoveredOperationalDevice(fabric: Fabric, nodeId: NodeId): OperationalDevice | undefined;

    /**
     * Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
     * vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.
     */
    findCommissionableDevices(
        identifier: CommissionableDeviceIdentifiers,
        timeoutSeconds?: number,
        ignoreExistingRecords?: boolean,
    ): Promise<CommissionableDevice[]>;

    /**
     * Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
     * vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
     * called when it is discovered.
     */
    findCommissionableDevicesContinuously(
        identifier: CommissionableDeviceIdentifiers,
        callback: (device: CommissionableDevice) => void,
        timeoutSeconds?: number,
    ): Promise<CommissionableDevice[]>;

    /** Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries. */
    getDiscoveredCommissionableDevices(identifier: CommissionableDeviceIdentifiers): CommissionableDevice[];

    /**
     * Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
     * be over.
     */
    cancelCommissionableDeviceDiscovery(identifier: CommissionableDeviceIdentifiers): void;

    /** Close the scanner server and free resources. */
    close(): void;
}
