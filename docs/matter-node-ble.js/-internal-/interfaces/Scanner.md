[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / Scanner

# Interface: Scanner

## Methods

### cancelCommissionableDeviceDiscovery()

> **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Source

matter.js/dist/esm/common/Scanner.d.ts:106

***

### close()

> **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Source

matter.js/dist/esm/common/Scanner.d.ts:108

***

### findCommissionableDevices()

> **findCommissionableDevices**(`identifier`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

#### Source

matter.js/dist/esm/common/Scanner.d.ts:93

***

### findCommissionableDevicesContinuously()

> **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds`?): `Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
called when it is discovered.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |
| `callback` | (`device`) => `void` |
| `timeoutSeconds`? | `number` |

#### Returns

`Promise`\<[`CommissionableDevice`](../README.md#commissionabledevice)[]\>

#### Source

matter.js/dist/esm/common/Scanner.d.ts:99

***

### findOperationalDevice()

> **findOperationalDevice**(`fabric`, `nodeId`, `timeoutSeconds`?, `ignoreExistingRecords`?): `Promise`\<`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |
| `timeoutSeconds`? | `number` |
| `ignoreExistingRecords`? | `boolean` |

#### Returns

`Promise`\<`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)\>

#### Source

matter.js/dist/esm/common/Scanner.d.ts:83

***

### getDiscoveredCommissionableDevices()

> **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../README.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../README.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../README.md#commissionabledevice)[]

#### Source

matter.js/dist/esm/common/Scanner.d.ts:101

***

### getDiscoveredOperationalDevice()

> **getDiscoveredOperationalDevice**(`fabric`, `nodeId`): `undefined` \| [`OperationalDevice`](../README.md#operationaldevice)

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../classes/Fabric.md) |
| `nodeId` | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`undefined` \| [`OperationalDevice`](../README.md#operationaldevice)

#### Source

matter.js/dist/esm/common/Scanner.d.ts:88
