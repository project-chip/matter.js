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

• **new ControllerDiscovery**()

## Methods

### cancelCommissionableDeviceDiscovery

▸ `Static` **cancelCommissionableDeviceDiscovery**(`scanner`, `identifier?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../interfaces/common_export.Scanner.md) |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:130](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/ControllerDiscovery.ts#L130)

___

### cancelOperationalDeviceDiscovery

▸ `Static` **cancelOperationalDeviceDiscovery**(`fabric`, `peerNodeId`, `scanner`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `scanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:126](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/ControllerDiscovery.ts#L126)

___

### discoverCommissionableDevices

▸ `Static` **discoverCommissionableDevices**(`scanners`, `timeoutSeconds`, `identifier?`, `discoveredCallback?`): `Promise`<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scanners` | [`Scanner`](../interfaces/common_export.Scanner.md)[] |
| `timeoutSeconds` | `number` |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/common_export.md#commissionabledeviceidentifiers) |
| `discoveredCallback?` | (`device`: [`CommissionableDevice`](../modules/common_export.md#commissionabledevice)) => `void` |

#### Returns

`Promise`<[`CommissionableDevice`](../modules/common_export.md#commissionabledevice)[]\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:62](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/ControllerDiscovery.ts#L62)

___

### discoverDeviceAddressesByIdentifier

▸ `Static` **discoverDeviceAddressesByIdentifier**(`scanners`, `identifier`, `timeoutSeconds?`): `Promise`<[`ServerAddress`](../modules/common_export.md#serveraddress)[]\>

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

`Promise`<[`ServerAddress`](../modules/common_export.md#serveraddress)[]\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:30](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/ControllerDiscovery.ts#L30)

___

### discoverOperationalDevice

▸ `Static` **discoverOperationalDevice**(`fabric`, `peerNodeId`, `scanner`, `timeoutSeconds?`, `ignoreExistingRecords?`): `Promise`<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `scanner` | [`MdnsScanner`](mdns_export.MdnsScanner.md) |
| `timeoutSeconds?` | `number` |
| `ignoreExistingRecords?` | `boolean` |

#### Returns

`Promise`<[`ServerAddressIp`](../modules/common_export.md#serveraddressip)[]\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:105](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/ControllerDiscovery.ts#L105)

___

### iterateServerAddresses

▸ `Static` **iterateServerAddresses**<`SA`, `T`, `E`\>(`servers`, `errorType`, `updateNetworkInterfaceFunc`, `func`, `lastKnownServer?`): `Promise`<{ `result`: `T` ; `resultAddress`: `SA`  }\>

Helper method to iterate through a list of server addresses and try to execute a method on each of them. If the
method throws a configurable error (or EHOSTUNREACH), the server address list is updated (to also add later
discovered addresses or devices) and then next server address is tried.The result of the first successful method
call is returned. The logic makes sure to only try each unique address (IP/port) once.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SA` | extends [`ServerAddress`](../modules/common_export.md#serveraddress) |
| `T` | `T` |
| `E` | extends `Error` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `servers` | `SA`[] |
| `errorType` | [`ClassExtends`](../modules/util_export.md#classextends)<`E`\> |
| `updateNetworkInterfaceFunc` | () => `Promise`<`SA`[]\> |
| `func` | (`server`: `SA`) => `Promise`<`T`\> |
| `lastKnownServer?` | `SA` |

#### Returns

`Promise`<{ `result`: `T` ; `resultAddress`: `SA`  }\>

#### Defined in

[packages/matter.js/src/protocol/ControllerDiscovery.ts:140](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/ControllerDiscovery.ts#L140)
