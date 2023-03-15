/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

export const SERVICE_DISCOVERY_QNAME = "_services._dns-sd._udp.local";
export const MATTER_COMMISSION_SERVICE_QNAME = "_matterc._udp.local";
export const MATTER_SERVICE_QNAME = "_matter._tcp.local";

export const getFabricQname = (operationalIdString: string) => `_I${operationalIdString}._sub.${MATTER_SERVICE_QNAME}`;
export const getDeviceMatterQname = (operationalIdString: string, nodeIdString: string) => `${operationalIdString}-${nodeIdString}.${MATTER_SERVICE_QNAME}`;
