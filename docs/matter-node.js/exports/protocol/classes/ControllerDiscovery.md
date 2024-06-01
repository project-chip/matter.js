[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / ControllerDiscovery

# Class: ControllerDiscovery

## Constructors

### new ControllerDiscovery()

> **new ControllerDiscovery**(): [`ControllerDiscovery`](ControllerDiscovery.md)

#### Returns

[`ControllerDiscovery`](ControllerDiscovery.md)

## Methods

### cancelCommissionableDeviceDiscovery()

> `static` **cancelCommissionableDeviceDiscovery**(`scanner`, `identifier`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../../common/interfaces/Scanner.md) |
| `identifier`? | [`CommissionableDeviceIdentifiers`](../../common/README.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:24

***

### cancelOperationalDeviceDiscovery()

> `static` **cancelOperationalDeviceDiscovery**(`fabric`, `peerNodeId`, `scanner`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `peerNodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `scanner` | [`MdnsScanner`](../../mdns/classes/MdnsScanner.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:23

***

### discoverCommissionableDevices()

> `static` **discoverCommissionableDevices**(`scanners`, `timeoutSeconds`, `identifier`?, `discoveredCallback`?): `Promise`\<[`CommissionableDevice`](../../common/README.md#commissionabledevice)[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanners` | [`Scanner`](../../common/interfaces/Scanner.md)[] |
| `timeoutSeconds` | `number` |
| `identifier`? | [`CommissionableDeviceIdentifiers`](../../common/README.md#commissionabledeviceidentifiers) |
| `discoveredCallback`? | (`device`) => `void` |

#### Returns

`Promise`\<[`CommissionableDevice`](../../common/README.md#commissionabledevice)[]\>

#### Source

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:21

***

### discoverDeviceAddressesByIdentifier()

> `static` **discoverDeviceAddressesByIdentifier**(`scanners`, `identifier`, `timeoutSeconds`?): `Promise`\<[`CommissionableDevice`](../../common/README.md#commissionabledevice)[]\>

Discovers devices by a provided identifier and a list of scanners (e.g. IP and BLE in parallel).
It returns after the timeout or if at least one device was found.
The method returns a list of addresses of the discovered devices.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanners` | [`Scanner`](../../common/interfaces/Scanner.md)[] |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../common/README.md#commissionabledeviceidentifiers) |
| `timeoutSeconds`? | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../../common/README.md#commissionabledevice)[]\>

#### Source

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:20

***

### discoverOperationalDevice()

> `static` **discoverOperationalDevice**(`fabric`, `peerNodeId`, `scanner`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<[`OperationalDevice`](../../common/README.md#operationaldevice)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |
| `peerNodeId` | [`NodeId`](../../datatype/README.md#nodeid) |
| `scanner` | [`MdnsScanner`](../../mdns/classes/MdnsScanner.md) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<[`OperationalDevice`](../../common/README.md#operationaldevice)\>

#### Source

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:22

***

### iterateServerAddresses()

> `static` **iterateServerAddresses**\<`DD`, `T`, `E`\>(`devices`, `errorType`, `updateDevicesFunc`, `func`, `lastKnownAddress`?): `Promise`\<`object`\>

Helper method to iterate through a list of server addresses and try to execute a method on each of them. If the
method throws a configurable error (or EHOSTUNREACH), the server address list is updated (to also add later
discovered addresses or devices) and then next server address is tried.The result of the first successful method
call is returned. The logic makes sure to only try each unique address (IP/port) once.

#### Type parameters

| Type parameter |
| :------ |
| `DD` *extends* [`DiscoverableDevice`](../../common/README.md#discoverabledevicesa)\<`any`\> |
| `T` |
| `E` *extends* `Error` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `devices` | `DD`[] |
| `errorType` | [`ClassExtends`](../../../util/export/README.md#classextendsc)\<`E`\> |
| `updateDevicesFunc` | () => `Promise`\<`DD`[]\> |
| `func` | (`address`, `device`?) => `Promise`\<`T`\> |
| `lastKnownAddress`? | [`AddressTypeFromDevice`](../../common/README.md#addresstypefromdeviced)\<`DD`\> |

#### Returns

`Promise`\<`object`\>

##### result

> **result**: `T`

##### resultAddress

> **resultAddress**: [`AddressTypeFromDevice`](../../common/README.md#addresstypefromdeviced)\<`DD`\>

##### resultDevice?

> `optional` **resultDevice**: `DD`

#### Source

packages/matter.js/dist/esm/protocol/ControllerDiscovery.d.ts:31
