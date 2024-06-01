[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / ControllerDiscovery

# Class: ControllerDiscovery

## Constructors

### new ControllerDiscovery()

> **new ControllerDiscovery**(): [`ControllerDiscovery`](ControllerDiscovery.md)

#### Returns

[`ControllerDiscovery`](ControllerDiscovery.md)

## Methods

### cancelCommissionableDeviceDiscovery()

> `static` **cancelCommissionableDeviceDiscovery**(`scanner`, `identifier`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanner` | [`Scanner`](../../../common/export/interfaces/Scanner.md) |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ControllerDiscovery.ts:136](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerDiscovery.ts#L136)

***

### cancelOperationalDeviceDiscovery()

> `static` **cancelOperationalDeviceDiscovery**(`fabric`, `peerNodeId`, `scanner`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `scanner` | [`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ControllerDiscovery.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerDiscovery.ts#L132)

***

### discoverCommissionableDevices()

> `static` **discoverCommissionableDevices**(`scanners`, `timeoutSeconds`, `identifier`, `discoveredCallback`?): `Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `scanners` | [`Scanner`](../../../common/export/interfaces/Scanner.md)[] |
| `timeoutSeconds` | `number` |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) |
| `discoveredCallback`? | (`device`) => `void` |

#### Returns

`Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

#### Source

[packages/matter.js/src/protocol/ControllerDiscovery.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerDiscovery.ts#L68)

***

### discoverDeviceAddressesByIdentifier()

> `static` **discoverDeviceAddressesByIdentifier**(`scanners`, `identifier`, `timeoutSeconds`): `Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

Discovers devices by a provided identifier and a list of scanners (e.g. IP and BLE in parallel).
It returns after the timeout or if at least one device was found.
The method returns a list of addresses of the discovered devices.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `scanners` | [`Scanner`](../../../common/export/interfaces/Scanner.md)[] | `undefined` |
| `identifier` | [`CommissionableDeviceIdentifiers`](../../../common/export/README.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `30` |

#### Returns

`Promise`\<[`CommissionableDevice`](../../../common/export/README.md#commissionabledevice)[]\>

#### Source

[packages/matter.js/src/protocol/ControllerDiscovery.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerDiscovery.ts#L36)

***

### discoverOperationalDevice()

> `static` **discoverOperationalDevice**(`fabric`, `peerNodeId`, `scanner`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<[`OperationalDevice`](../../../common/export/README.md#operationaldevice)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `scanner` | [`MdnsScanner`](../../../mdns/export/classes/MdnsScanner.md) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<[`OperationalDevice`](../../../common/export/README.md#operationaldevice)\>

#### Source

[packages/matter.js/src/protocol/ControllerDiscovery.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerDiscovery.ts#L111)

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
| `DD` *extends* [`DiscoverableDevice`](../../../common/export/README.md#discoverabledevicesa)\<`any`\> |
| `T` |
| `E` *extends* `Error` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `devices` | `DD`[] |
| `errorType` | [`ClassExtends`](../../../util/export/README.md#classextendsc)\<`E`\> |
| `updateDevicesFunc` | () => `Promise`\<`DD`[]\> |
| `func` | (`address`, `device`?) => `Promise`\<`T`\> |
| `lastKnownAddress`? | [`AddressTypeFromDevice`](../../../common/export/README.md#addresstypefromdeviced)\<`DD`\> |

#### Returns

`Promise`\<`object`\>

##### result

> **result**: `T`

##### resultAddress

> **resultAddress**: [`AddressTypeFromDevice`](../../../common/export/README.md#addresstypefromdeviced)\<`DD`\>

##### resultDevice?

> `optional` **resultDevice**: `DD`

#### Source

[packages/matter.js/src/protocol/ControllerDiscovery.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerDiscovery.ts#L146)
