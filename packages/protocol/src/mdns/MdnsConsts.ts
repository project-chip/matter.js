/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { VendorId } from "#types";

export const SERVICE_DISCOVERY_QNAME = "_services._dns-sd._udp.local";
export const MATTER_COMMISSION_SERVICE_QNAME = "_matterc._udp.local";
export const MATTER_COMMISSIONER_SERVICE_QNAME = "_matterd._udp.local";
export const MATTER_SERVICE_QNAME = "_matter._tcp.local";

export const getFabricQname = (operationalIdString: string) => `_I${operationalIdString}._sub.${MATTER_SERVICE_QNAME}`;
export const getDeviceMatterQname = (operationalIdString: string, nodeIdString: string) =>
    `${operationalIdString}-${nodeIdString}.${MATTER_SERVICE_QNAME}`;
export const getVendorQname = (vendorId: VendorId) => `_V${vendorId}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
export const getDeviceTypeQname = (deviceType: number) => `_T${deviceType}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
export const getShortDiscriminatorQname = (shortDiscriminator: number) =>
    `_S${shortDiscriminator}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
export const getLongDiscriminatorQname = (longDiscriminator: number) =>
    `_L${longDiscriminator}._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
export const getCommissioningModeQname = () => `_CM._sub.${MATTER_COMMISSION_SERVICE_QNAME}`;
export const getDeviceInstanceQname = (instanceId: string) => `${instanceId}.${MATTER_COMMISSION_SERVICE_QNAME}`;
