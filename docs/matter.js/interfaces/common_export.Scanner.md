[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / Scanner

# Interface: Scanner

[common/export](../modules/common_export.md).Scanner

## Implemented by

- [`MdnsScanner`](../classes/mdns_export.MdnsScanner.md)

## Table of contents

### Methods

- [cancelCommissionableDeviceDiscovery](common_export.Scanner.md#cancelcommissionabledevicediscovery)
- [close](common_export.Scanner.md#close)
- [findCommissionableDevices](common_export.Scanner.md#findcommissionabledevices)
- [findCommissionableDevicesContinuously](common_export.Scanner.md#findcommissionabledevicescontinuously)
- [findOperationalDevice](common_export.Scanner.md#findoperationaldevice)
- [getDiscoveredCommissionableDevices](common_export.Scanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredOperationalDevices](common_export.Scanner.md#getdiscoveredoperationaldevices)

## Methods

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Scanner.ts:136](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/Scanner.ts#L136)

___

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Scanner.ts:139](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/Scanner.ts#L139)

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Defined in

[packages/matter.js/src/common/Scanner.ts:112](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/Scanner.ts#L112)

___

### findCommissionableDevicesContinuously

▸ **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
called when it is discovered.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |
| `callback` | (`device`: [`CommissionableDevice`](../modules/common_export.md#commissionabledevice)) => `void` |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Defined in

[packages/matter.js/src/common/Scanner.ts:123](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/Scanner.ts#L123)

___

### findOperationalDevice

▸ **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/fabric_export.Fabric.md) |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

#### Defined in

[packages/matter.js/src/common/Scanner.ts:95](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/Scanner.ts#L95)

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

[packages/matter.js/src/common/Scanner.ts:130](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/Scanner.ts#L130)

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

[packages/matter.js/src/common/Scanner.ts:106](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/common/Scanner.ts#L106)
