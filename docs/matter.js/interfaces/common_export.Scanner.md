[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / Scanner

# Interface: Scanner

[common/export](../modules/common_export.md).Scanner

## Implemented by

- [`MdnsScanner`](../classes/mdns_export.MdnsScanner.md)

## Table of contents

### Methods

- [close](common_export.Scanner.md#close)
- [findCommissionableDevices](common_export.Scanner.md#findcommissionabledevices)
- [findOperationalDevice](common_export.Scanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](common_export.Scanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](common_export.Scanner.md#getdiscoveredoperationaldevices)

## Methods

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Scanner.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Scanner.ts#L114)

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`): `Promise`<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by an provided identifier (e.g. discriminator,
vendorId, etc.) and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Defined in

[packages/matter.js/src/common/Scanner.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Scanner.ts#L105)

___

### findOperationalDevice

▸ **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds?`): `Promise`<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

#### Defined in

[packages/matter.js/src/common/Scanner.ts:93](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Scanner.ts#L93)

___

### getDiscoveredCommissionableDevices

▸ **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]

#### Defined in

[packages/matter.js/src/common/Scanner.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Scanner.ts#L111)

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(`fabric`, `nodeId`): [`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]

#### Defined in

[packages/matter.js/src/common/Scanner.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/common/Scanner.ts#L99)
