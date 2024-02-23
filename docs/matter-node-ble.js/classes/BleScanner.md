[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / BleScanner

# Class: BleScanner

## Implements

- [`Scanner`](../interfaces/internal_.Scanner.md)

## Table of contents

### Constructors

- [constructor](BleScanner.md#constructor)

### Properties

- [discoveredMatterDevices](BleScanner.md#discoveredmatterdevices)
- [nobleClient](BleScanner.md#nobleclient)
- [recordWaiters](BleScanner.md#recordwaiters)

### Methods

- [buildCommissionableQueryIdentifier](BleScanner.md#buildcommissionablequeryidentifier)
- [cancelCommissionableDeviceDiscovery](BleScanner.md#cancelcommissionabledevicediscovery)
- [close](BleScanner.md#close)
- [findCommissionableDevices](BleScanner.md#findcommissionabledevices)
- [findCommissionableDevicesContinuously](BleScanner.md#findcommissionabledevicescontinuously)
- [findCommissionableQueryIdentifier](BleScanner.md#findcommissionablequeryidentifier)
- [findOperationalDevice](BleScanner.md#findoperationaldevice)
- [finishWaiter](BleScanner.md#finishwaiter)
- [getCommissionableDevices](BleScanner.md#getcommissionabledevices)
- [getDiscoveredCommissionableDevices](BleScanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredDevice](BleScanner.md#getdiscovereddevice)
- [getDiscoveredOperationalDevice](BleScanner.md#getdiscoveredoperationaldevice)
- [handleDiscoveredDevice](BleScanner.md#handlediscovereddevice)
- [registerWaiterPromise](BleScanner.md#registerwaiterpromise)

## Constructors

### constructor

• **new BleScanner**(`nobleClient`): [`BleScanner`](BleScanner.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nobleClient` | [`NobleBleClient`](internal_.NobleBleClient.md) |

#### Returns

[`BleScanner`](BleScanner.md)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:40](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L40)

## Properties

### discoveredMatterDevices

• `Private` `Readonly` **discoveredMatterDevices**: `Map`\<`string`, [`DiscoveredBleDevice`](../modules.md#discoveredbledevice)\>

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:38](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L38)

___

### nobleClient

• `Private` `Readonly` **nobleClient**: [`NobleBleClient`](internal_.NobleBleClient.md)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:40](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L40)

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `Map`\<`string`, \{ `resolveOnUpdatedRecords`: `boolean` ; `resolver`: () => `void` ; `timer`: [`Timer`](../interfaces/internal_.Timer.md)  }\>

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:30](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L30)

## Methods

### buildCommissionableQueryIdentifier

▸ **buildCommissionableQueryIdentifier**(`identifier`): `string`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

`string`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:165](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L165)

___

### cancelCommissionableDeviceDiscovery

▸ **cancelCommissionableDeviceDiscovery**(`identifier`): `void`

Cancel a running discovery of commissionable devices. The waiter promises are resolved as if the timeout would
be over.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

`void`

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[cancelCommissionableDeviceDiscovery](../interfaces/internal_.Scanner.md#cancelcommissionabledevicediscovery)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:87](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L87)

___

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[close](../interfaces/internal_.Scanner.md#close)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:267](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L267)

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns as soon as minimum one was found or the timeout is over.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `10` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findCommissionableDevices](../interfaces/internal_.Scanner.md#findcommissionabledevices)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:216](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L216)

___

### findCommissionableDevicesContinuously

▸ **findCommissionableDevicesContinuously**(`identifier`, `callback`, `timeoutSeconds?`): `Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by a provided identifier (e.g. discriminator,
vendorId, etc.) and returns after the timeout is over. For each new discovered device the provided callback is
called when it is discovered.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) | `undefined` |
| `callback` | (`device`: [`CommissionableDevice`](../modules/internal_.md#commissionabledevice)) => `void` | `undefined` |
| `timeoutSeconds` | `number` | `60` |

#### Returns

`Promise`\<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findCommissionableDevicesContinuously](../interfaces/internal_.Scanner.md#findcommissionabledevicescontinuously)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:233](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L233)

___

### findCommissionableQueryIdentifier

▸ **findCommissionableQueryIdentifier**(`record`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`CommissionableDeviceData`](../modules/internal_.md#commissionabledevicedata) |

#### Returns

`undefined` \| `string`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:126](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L126)

___

### findOperationalDevice

▸ **findOperationalDevice**(): `Promise`\<`undefined`\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Returns

`Promise`\<`undefined`\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findOperationalDevice](../interfaces/internal_.Scanner.md#findoperationaldevice)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:206](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L206)

___

### finishWaiter

▸ **finishWaiter**(`queryId`, `resolvePromise`, `isUpdatedRecord?`): `void`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `resolvePromise` | `boolean` | `undefined` |
| `isUpdatedRecord` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:74](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L74)

___

### getCommissionableDevices

▸ **getCommissionableDevices**(`identifier`): [`DiscoveredBleDevice`](../modules.md#discoveredbledevice)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

[`DiscoveredBleDevice`](../modules.md#discoveredbledevice)[]

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:178](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L178)

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

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[getDiscoveredCommissionableDevices](../interfaces/internal_.Scanner.md#getdiscoveredcommissionabledevices)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:263](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L263)

___

### getDiscoveredDevice

▸ **getDiscoveredDevice**(`address`): [`DiscoveredBleDevice`](../modules.md#discoveredbledevice)

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

[`DiscoveredBleDevice`](../modules.md#discoveredbledevice)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:46](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L46)

___

### getDiscoveredOperationalDevice

▸ **getDiscoveredOperationalDevice**(): `undefined`

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Returns

`undefined`

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[getDiscoveredOperationalDevice](../interfaces/internal_.Scanner.md#getdiscoveredoperationaldevice)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:211](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L211)

___

### handleDiscoveredDevice

▸ **handleDiscoveredDevice**(`peripheral`, `manufacturerServiceData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peripheral` | `Peripheral` |
| `manufacturerServiceData` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:92](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L92)

___

### registerWaiterPromise

▸ **registerWaiterPromise**(`queryId`, `timeoutSeconds`, `resolveOnUpdatedRecords?`): `Promise`\<`void`\>

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `timeoutSeconds` | `number` | `undefined` |
| `resolveOnUpdatedRecords` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:58](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter-node-ble.js/src/ble/BleScanner.ts#L58)
