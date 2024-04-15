[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / ControllerDiscovery

# Class: ControllerDiscovery

[protocol/export](../modules/protocol_export.md).ControllerDiscovery

## Table of contents

### Constructors

- [constructor](protocol_export.ControllerDiscovery.md#constructor)

### Methods

- [cancelCommissionableDeviceDiscovery](protocol_export.ControllerDiscovery.md#cancelcommissionabledevicediscovery)
- [cancelOperationalDeviceDiscovery](protocol_export.ControllerDiscovery.md#canceloperationaldevicediscovery)
- [discoverCommissionableDevices](protocol_export.ControllerDiscovery.md#discovercommissionabledevices)
- [discoverDeviceAddressesByIdentifier](protocol_export.ControllerDiscovery.md#discoverdeviceaddressesbyidentifier)
- [discoverOperationalDevice](protocol_export.ControllerDiscovery.md#discoveroperationaldevice)
- [iterateServerAddresses](protocol_export.ControllerDiscovery.md#iterateserveraddresses)

## Constructors

### constructor

• **new ControllerDiscovery**(): [`ControllerDiscovery`](protocol_export.ControllerDiscovery.md)

#### Returns

[`ControllerDiscovery`](protocol_export.ControllerDiscovery.md)

## Methods

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`scanner`, `identifier?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:136](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerDiscovery.ts#L136)

___

### cancelOperationalDeviceDiscovery

▸ **cancelOperationalDeviceDiscovery**(`fabric`, `peerNodeId`, `scanner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `scanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerDiscovery.ts#L132)

___

### discoverCommissionableDevices

▸ **discoverCommissionableDevices**(`scanners`, `timeoutSeconds`, `identifier?`, `discoveredCallback?`): `Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanners` | [`Scanner`](../interfaces/common_export.Scanner.md)[] |
| `timeoutSeconds` | `number` |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |
| `discoveredCallback?` | (`device`: [`CommissionableDevice`](../modules/common_export.md#commissionabledevice)) => `void` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerDiscovery.ts#L68)

___

### discoverDeviceAddressesByIdentifier

▸ **discoverDeviceAddressesByIdentifier**(`scanners`, `identifier`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

Discovers devices by a provided identifier and a list of scanners (e.g. IP and BLE in parallel).
It returns after the timeout or if at least one device was found.
The method returns a list of addresses of the discovered devices.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `scanners` | [`Scanner`](../interfaces/common_export.Scanner.md)[] | `undefined` |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `30` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:36](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerDiscovery.ts#L36)

___

### discoverOperationalDevice

▸ **discoverOperationalDevice**(`fabric`, `peerNodeId`, `scanner`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`OperationalDevice`](../modules/common_export.md#operationaldevice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `scanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`OperationalDevice`](../modules/common_export.md#operationaldevice)\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerDiscovery.ts#L111)

___

### iterateServerAddresses

▸ **iterateServerAddresses**\<`DD`, `T`, `E`\>(`devices`, `errorType`, `updateDevicesFunc`, `func`, `lastKnownAddress?`): `Promise`\<\{ `result`: `T` ; `resultAddress`: [`AddressTypeFromDevice`](../modules/common_export.md#addresstypefromdevice)\<`DD`\> ; `resultDevice?`: `DD`  }\>

Helper method to iterate through a list of server addresses and try to execute a method on each of them. If the
method throws a configurable error (or EHOSTUNREACH), the server address list is updated (to also add later
discovered addresses or devices) and then next server address is tried.The result of the first successful method
call is returned. The logic makes sure to only try each unique address (IP/port) once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DD` | extends [`DiscoverableDevice`](../modules/common_export.md#discoverabledevice)\<`any`\> |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `devices` | `DD`[] |
| `errorType` | [`ClassExtends`](../modules/util_export.md#classextends)\<`E`\> |
| `updateDevicesFunc` | () => `Promise`\<`DD`[]\> |
| `func` | (`address`: [`AddressTypeFromDevice`](../modules/common_export.md#addresstypefromdevice)\<`DD`\>, `device?`: `DD`) => `Promise`\<`T`\> |
| `lastKnownAddress?` | [`AddressTypeFromDevice`](../modules/common_export.md#addresstypefromdevice)\<`DD`\> |

#### Returns

`Promise`\<\{ `result`: `T` ; `resultAddress`: [`AddressTypeFromDevice`](../modules/common_export.md#addresstypefromdevice)\<`DD`\> ; `resultDevice?`: `DD`  }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerDiscovery.ts#L146)
