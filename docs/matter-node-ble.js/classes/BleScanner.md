[**@project-chip/matter-node-ble.js**](../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../globals.md) / BleScanner

# Class: BleScanner

## Implements

- [`Scanner`](../-internal-/interfaces/Scanner.md)

## Constructors

### new BleScanner()

> **new BleScanner**(`nobleClient`): [`BleScanner`](BleScanner.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `nobleClient` | [`NobleBleClient`](../-internal-/classes/NobleBleClient.md) |

#### Returns

[`BleScanner`](BleScanner.md)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L40)

## Properties

### discoveredMatterDevices

> `private` `readonly` **discoveredMatterDevices**: `Map`\<`string`, [`DiscoveredBleDevice`](../globals.md#discoveredbledevice)\>

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L38)

***

### nobleClient

> `private` `readonly` **nobleClient**: [`NobleBleClient`](../-internal-/classes/NobleBleClient.md)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L40)

***

### recordWaiters

> `private` `readonly` **recordWaiters**: `Map`\<`string`, `object`\>

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:30](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L30)

## Methods

### buildCommissionableQueryIdentifier()

> `private` **buildCommissionableQueryIdentifier**(`identifier`): `string`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../-internal-/README.md#commissionabledeviceidentifiers) |

#### Returns

`string`

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:167](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L167)

***

### cancelCommissionableDeviceDiscovery()

> **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../-internal-/README.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Implementation of

[`Scanner`](../-internal-/interfaces/Scanner.md).[`cancelCommissionableDeviceDiscovery`](../-internal-/interfaces/Scanner.md#cancelcommissionabledevicediscovery)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L89)

***

### close()

> **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Implementation of

[`Scanner`](../-internal-/interfaces/Scanner.md).[`close`](../-internal-/interfaces/Scanner.md#close)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:269](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L269)

***

### findCommissionableDevices()

> **findCommissionableDevices**(`identifier`, `timeoutSeconds`): `Promise`\<[`CommissionableDevice`](../-internal-/README.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../-internal-/README.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `10` |

#### Returns

`Promise`\<[`CommissionableDevice`](../-internal-/README.md#commissionabledevice)[]\>

#### Implementation of

[`Scanner`](../-internal-/interfaces/Scanner.md).[`findCommissionableDevices`](../-internal-/interfaces/Scanner.md#findcommissionabledevices)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:218](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L218)

***

### findCommissionableDevicesContinuously()

> **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds`): `Promise`\<[`CommissionableDevice`](../-internal-/README.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
called when it is discovered.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../-internal-/README.md#commissionabledeviceidentifiers) | `undefined` |
| `callback` | (`device`) => `void` | `undefined` |
| `timeoutSeconds` | `number` | `60` |

#### Returns

`Promise`\<[`CommissionableDevice`](../-internal-/README.md#commissionabledevice)[]\>

#### Implementation of

[`Scanner`](../-internal-/interfaces/Scanner.md).[`findCommissionableDevicesContinuously`](../-internal-/interfaces/Scanner.md#findcommissionabledevicescontinuously)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:235](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L235)

***

### findCommissionableQueryIdentifier()

> `private` **findCommissionableQueryIdentifier**(`record`): `undefined` \| `string`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `record` | [`CommissionableDeviceData`](../-internal-/README.md#commissionabledevicedata) |

#### Returns

`undefined` \| `string`

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:128](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L128)

***

### findOperationalDevice()

> **findOperationalDevice**(): `Promise`\<`undefined`\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Returns

`Promise`\<`undefined`\>

#### Implementation of

[`Scanner`](../-internal-/interfaces/Scanner.md).[`findOperationalDevice`](../-internal-/interfaces/Scanner.md#findoperationaldevice)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:208](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L208)

***

### finishWaiter()

> `private` **finishWaiter**(`queryId`, `resolvePromise`, `isUpdatedRecord`): `void`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `resolvePromise` | `boolean` | `undefined` |
| `isUpdatedRecord` | `boolean` | `false` |

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:76](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L76)

***

### getCommissionableDevices()

> `private` **getCommissionableDevices**(`identifier`): [`DiscoveredBleDevice`](../globals.md#discoveredbledevice)[]

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../-internal-/README.md#commissionabledeviceidentifiers) |

#### Returns

[`DiscoveredBleDevice`](../globals.md#discoveredbledevice)[]

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L180)

***

### getDiscoveredCommissionableDevices()

> **getDiscoveredCommissionableDevices**(`identifier`): [`CommissionableDevice`](../-internal-/README.md#commissionabledevice)[]

Return already discovered commissionable devices and return them. Does not send out new DNS-SD queries.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../-internal-/README.md#commissionabledeviceidentifiers) |

#### Returns

[`CommissionableDevice`](../-internal-/README.md#commissionabledevice)[]

#### Implementation of

[`Scanner`](../-internal-/interfaces/Scanner.md).[`getDiscoveredCommissionableDevices`](../-internal-/interfaces/Scanner.md#getdiscoveredcommissionabledevices)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L265)

***

### getDiscoveredDevice()

> **getDiscoveredDevice**(`address`): [`DiscoveredBleDevice`](../globals.md#discoveredbledevice)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`DiscoveredBleDevice`](../globals.md#discoveredbledevice)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L46)

***

### getDiscoveredOperationalDevice()

> **getDiscoveredOperationalDevice**(): `undefined`

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Returns

`undefined`

#### Implementation of

[`Scanner`](../-internal-/interfaces/Scanner.md).[`getDiscoveredOperationalDevice`](../-internal-/interfaces/Scanner.md#getdiscoveredoperationaldevice)

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:213](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L213)

***

### handleDiscoveredDevice()

> `private` **handleDiscoveredDevice**(`peripheral`, `manufacturerServiceData`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `peripheral` | `Peripheral` |
| `manufacturerServiceData` | `Uint8Array` |

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L94)

***

### registerWaiterPromise()

> `private` **registerWaiterPromise**(`queryId`, `timeoutSeconds`, `resolveOnUpdatedRecords`): `Promise`\<`void`\>

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `timeoutSeconds` | `number` | `undefined` |
| `resolveOnUpdatedRecords` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/BleScanner.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BleScanner.ts#L58)
