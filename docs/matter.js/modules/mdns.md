[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / mdns

# Module: mdns

## Table of contents

### Classes

- [MdnsBroadcaster](../classes/mdns.MdnsBroadcaster.md)
- [MdnsScanner](../classes/mdns.MdnsScanner.md)
- [MdnsServer](../classes/mdns.MdnsServer.md)

### Variables

- [MATTER\_COMMISSION\_SERVICE\_QNAME](mdns.md#matter_commission_service_qname)
- [MATTER\_SERVICE\_QNAME](mdns.md#matter_service_qname)
- [MDNS\_BROADCAST\_IPV4](mdns.md#mdns_broadcast_ipv4)
- [MDNS\_BROADCAST\_IPV6](mdns.md#mdns_broadcast_ipv6)
- [MDNS\_BROADCAST\_PORT](mdns.md#mdns_broadcast_port)
- [SERVICE\_DISCOVERY\_QNAME](mdns.md#service_discovery_qname)

### Functions

- [getDeviceMatterQname](mdns.md#getdevicematterqname)
- [getFabricQname](mdns.md#getfabricqname)

## Variables

### MATTER\_COMMISSION\_SERVICE\_QNAME

• `Const` **MATTER\_COMMISSION\_SERVICE\_QNAME**: ``"_matterc._udp.local"``

#### Defined in

[packages/matter.js/src/mdns/MdnsConsts.ts:8](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsConsts.ts#L8)

___

### MATTER\_SERVICE\_QNAME

• `Const` **MATTER\_SERVICE\_QNAME**: ``"_matter._tcp.local"``

#### Defined in

[packages/matter.js/src/mdns/MdnsConsts.ts:9](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsConsts.ts#L9)

___

### MDNS\_BROADCAST\_IPV4

• `Const` **MDNS\_BROADCAST\_IPV4**: ``"224.0.0.251"``

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:13](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L13)

___

### MDNS\_BROADCAST\_IPV6

• `Const` **MDNS\_BROADCAST\_IPV6**: ``"ff02::fb"``

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:14](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L14)

___

### MDNS\_BROADCAST\_PORT

• `Const` **MDNS\_BROADCAST\_PORT**: ``5353``

#### Defined in

[packages/matter.js/src/mdns/MdnsServer.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsServer.ts#L15)

___

### SERVICE\_DISCOVERY\_QNAME

• `Const` **SERVICE\_DISCOVERY\_QNAME**: ``"_services._dns-sd._udp.local"``

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

[packages/matter.js/src/mdns/MdnsConsts.ts:7](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsConsts.ts#L7)

## Functions

### getDeviceMatterQname

▸ **getDeviceMatterQname**(`operationalIdString`, `nodeIdString`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalIdString` | `string` |
| `nodeIdString` | `string` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsConsts.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsConsts.ts#L12)

___

### getFabricQname

▸ **getFabricQname**(`operationalIdString`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalIdString` | `string` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/mdns/MdnsConsts.ts:11](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/mdns/MdnsConsts.ts#L11)
