[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Scanner

# Interface: Scanner

[<internal>](../modules/internal_.md).Scanner

## Implemented by

- [`BleScanner`](../classes/BleScanner.md)

## Table of contents

### Methods

- [close](internal_.Scanner.md#close)
- [findCommissionableDevices](internal_.Scanner.md#findcommissionabledevices)
- [findOperationalDevice](internal_.Scanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](internal_.Scanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](internal_.Scanner.md#getdiscoveredoperationaldevices)

## Methods

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/common/Scanner.d.ts:84

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`): `Promise`<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by an provided identifier (e.g. discriminator,
vendorId, etc.) and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Defined in

matter.js/dist/cjs/common/Scanner.d.ts:80

___

### findOperationalDevice

▸ **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds?`): `Promise`<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

#### Defined in

matter.js/dist/cjs/common/Scanner.d.ts:70

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]

#### Defined in

matter.js/dist/cjs/common/Scanner.d.ts:82

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`fabric`, `nodeId`): [`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/internal_.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

#### Defined in

matter.js/dist/cjs/common/Scanner.d.ts:75
