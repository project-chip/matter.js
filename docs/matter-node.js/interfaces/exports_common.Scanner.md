[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / Scanner

# Interface: Scanner

[exports/common](../modules/exports_common.md).Scanner

## Implemented by

- [`MdnsScanner`](../classes/exports_mdns.MdnsScanner.md)

## Table of contents

### Methods

- [close](exports_common.Scanner.md#close)
- [findCommissionableDevices](exports_common.Scanner.md#findcommissionabledevices)
- [findOperationalDevice](exports_common.Scanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](exports_common.Scanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](exports_common.Scanner.md#getdiscoveredoperationaldevices)

## Methods

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:84

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`): `Promise`<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by an provided identifier (e.g. discriminator,
vendorId, etc.) and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:80

___

### findOperationalDevice

▸ **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds?`): `Promise`<[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]\>

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:70

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:82

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`fabric`, `nodeId`): [`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/exports_fabric.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/exports_common.md#serveraddressip)[]

#### Defined in

packages/matter.js/dist/cjs/common/Scanner.d.ts:75
