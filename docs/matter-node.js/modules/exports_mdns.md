[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/mdns

# Module: exports/mdns

## Table of contents

### Classes

- [MdnsBroadcaster](../classes/exports_mdns.MdnsBroadcaster.md)
- [MdnsScanner](../classes/exports_mdns.MdnsScanner.md)
- [MdnsServer](../classes/exports_mdns.MdnsServer.md)

### Variables

- [MATTER\_COMMISSIONER\_SERVICE\_QNAME](exports_mdns.md#matter_commissioner_service_qname)
- [MATTER\_COMMISSION\_SERVICE\_QNAME](exports_mdns.md#matter_commission_service_qname)
- [MATTER\_SERVICE\_QNAME](exports_mdns.md#matter_service_qname)
- [MDNS\_BROADCAST\_IPV4](exports_mdns.md#mdns_broadcast_ipv4)
- [MDNS\_BROADCAST\_IPV6](exports_mdns.md#mdns_broadcast_ipv6)
- [MDNS\_BROADCAST\_PORT](exports_mdns.md#mdns_broadcast_port)
- [SERVICE\_DISCOVERY\_QNAME](exports_mdns.md#service_discovery_qname)

### Functions

- [getCommissioningModeQname](exports_mdns.md#getcommissioningmodeqname)
- [getDeviceInstanceQname](exports_mdns.md#getdeviceinstanceqname)
- [getDeviceMatterQname](exports_mdns.md#getdevicematterqname)
- [getDeviceTypeQname](exports_mdns.md#getdevicetypeqname)
- [getFabricQname](exports_mdns.md#getfabricqname)
- [getLongDiscriminatorQname](exports_mdns.md#getlongdiscriminatorqname)
- [getShortDiscriminatorQname](exports_mdns.md#getshortdiscriminatorqname)
- [getVendorQname](exports_mdns.md#getvendorqname)

## Variables

### MATTER\_COMMISSIONER\_SERVICE\_QNAME

• `Const` **MATTER\_COMMISSIONER\_SERVICE\_QNAME**: ``"_matterd._udp.local"``

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:9

___

### MATTER\_COMMISSION\_SERVICE\_QNAME

• `Const` **MATTER\_COMMISSION\_SERVICE\_QNAME**: ``"_matterc._udp.local"``

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:8

___

### MATTER\_SERVICE\_QNAME

• `Const` **MATTER\_SERVICE\_QNAME**: ``"_matter._tcp.local"``

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:10

___

### MDNS\_BROADCAST\_IPV4

• `Const` **MDNS\_BROADCAST\_IPV4**: ``"224.0.0.251"``

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:8

___

### MDNS\_BROADCAST\_IPV6

• `Const` **MDNS\_BROADCAST\_IPV6**: ``"ff02::fb"``

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:9

___

### MDNS\_BROADCAST\_PORT

• `Const` **MDNS\_BROADCAST\_PORT**: ``5353``

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsServer.d.ts:10

___

### SERVICE\_DISCOVERY\_QNAME

• `Const` **SERVICE\_DISCOVERY\_QNAME**: ``"_services._dns-sd._udp.local"``

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:7

## Functions

### getCommissioningModeQname

▸ **getCommissioningModeQname**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:17

___

### getDeviceInstanceQname

▸ **getDeviceInstanceQname**(`instanceId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `instanceId` | `string` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:18

___

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

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:12

___

### getDeviceTypeQname

▸ **getDeviceTypeQname**(`deviceType`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `deviceType` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:14

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

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:11

___

### getLongDiscriminatorQname

▸ **getLongDiscriminatorQname**(`longDiscriminator`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `longDiscriminator` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:16

___

### getShortDiscriminatorQname

▸ **getShortDiscriminatorQname**(`shortDiscriminator`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `shortDiscriminator` | `number` |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:15

___

### getVendorQname

▸ **getVendorQname**(`vendorId`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorId` | [`VendorId`](exports_datatype.md#vendorid) |

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/mdns/MdnsConsts.d.ts:13
