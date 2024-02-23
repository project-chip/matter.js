[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / ControllerDiscovery

# Class: ControllerDiscovery

[exports/protocol](../modules/exports_protocol.md).ControllerDiscovery

## Table of contents

### Constructors

- [constructor](exports_protocol.ControllerDiscovery.md#constructor)

### Methods

- [cancelCommissionableDeviceDiscovery](exports_protocol.ControllerDiscovery.md#cancelcommissionabledevicediscovery)
- [cancelOperationalDeviceDiscovery](exports_protocol.ControllerDiscovery.md#canceloperationaldevicediscovery)
- [discoverCommissionableDevices](exports_protocol.ControllerDiscovery.md#discovercommissionabledevices)
- [discoverDeviceAddressesByIdentifier](exports_protocol.ControllerDiscovery.md#discoverdeviceaddressesbyidentifier)
- [discoverOperationalDevice](exports_protocol.ControllerDiscovery.md#discoveroperationaldevice)
- [iterateServerAddresses](exports_protocol.ControllerDiscovery.md#iterateserveraddresses)

## Constructors

### constructor

• **new ControllerDiscovery**(): [`ControllerDiscovery`](exports_protocol.ControllerDiscovery.md)

#### Returns

[`ControllerDiscovery`](exports_protocol.ControllerDiscovery.md)

## Methods

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`scanner`, `identifier?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/exports_common.Scanner.md) |
| `identifier?` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:24

___

### cancelOperationalDeviceDiscovery

▸ **cancelOperationalDeviceDiscovery**(`fabric`, `peerNodeId`, `scanner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `scanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:23

___

### discoverCommissionableDevices

▸ **discoverCommissionableDevices**(`scanners`, `timeoutSeconds`, `identifier?`, `discoveredCallback?`): `Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanners` | [`Scanner`](../interfaces/exports_common.Scanner.md)[] |
| `timeoutSeconds` | `number` |
| `identifier?` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `discoveredCallback?` | (`device`: [`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)) => `void` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:21

___

### discoverDeviceAddressesByIdentifier

▸ **discoverDeviceAddressesByIdentifier**(`scanners`, `identifier`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

Discovers devices by a provided identifier and a list of scanners (e.g. IP and BLE in parallel).
It returns after the timeout or if at least one device was found.
The method returns a list of addresses of the discovered devices.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanners` | [`Scanner`](../interfaces/exports_common.Scanner.md)[] |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/exports_common.md#commissionabledeviceidentifiers) |
| `timeoutSeconds?` | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/exports_common.md#commissionabledevice)[]\>

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:20

___

### discoverOperationalDevice

▸ **discoverOperationalDevice**(`fabric`, `peerNodeId`, `scanner`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`\<[`OperationalDevice`](../modules/exports_common.md#operationaldevice)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `scanner` | [`MdnsScanner`](exports_mdns.MdnsScanner.md) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`\<[`OperationalDevice`](../modules/exports_common.md#operationaldevice)\>

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:22

___

### iterateServerAddresses

▸ **iterateServerAddresses**\<`DD`, `T`, `E`\>(`devices`, `errorType`, `updateDevicesFunc`, `func`, `lastKnownAddress?`): `Promise`\<\{ `result`: `T` ; `resultAddress`: [`AddressTypeFromDevice`](../modules/exports_common.md#addresstypefromdevice)\<`DD`\> ; `resultDevice?`: `DD`  }\>

Helper method to iterate through a list of server addresses and try to execute a method on each of them. If the
method throws a configurable error (or EHOSTUNREACH), the server address list is updated (to also add later
discovered addresses or devices) and then next server address is tried.The result of the first successful method
call is returned. The logic makes sure to only try each unique address (IP/port) once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DD` | extends [`DiscoverableDevice`](../modules/exports_common.md#discoverabledevice)\<`any`\> |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `devices` | `DD`[] |
| `errorType` | [`ClassExtends`](../modules/util_export.md#classextends)\<`E`\> |
| `updateDevicesFunc` | () => `Promise`\<`DD`[]\> |
| `func` | (`address`: [`AddressTypeFromDevice`](../modules/exports_common.md#addresstypefromdevice)\<`DD`\>, `device?`: `DD`) => `Promise`\<`T`\> |
| `lastKnownAddress?` | [`AddressTypeFromDevice`](../modules/exports_common.md#addresstypefromdevice)\<`DD`\> |

#### Returns

`Promise`\<\{ `result`: `T` ; `resultAddress`: [`AddressTypeFromDevice`](../modules/exports_common.md#addresstypefromdevice)\<`DD`\> ; `resultDevice?`: `DD`  }\>

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:31
