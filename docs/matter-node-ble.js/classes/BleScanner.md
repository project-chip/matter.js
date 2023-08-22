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
- [close](BleScanner.md#close)
- [findCommissionableDevices](BleScanner.md#findcommissionabledevices)
- [findCommissionableQueryIdentifier](BleScanner.md#findcommissionablequeryidentifier)
- [findOperationalDevice](BleScanner.md#findoperationaldevice)
- [finishWaiter](BleScanner.md#finishwaiter)
- [getCommissionableDevices](BleScanner.md#getcommissionabledevices)
- [getDiscoveredCommissionableDevices](BleScanner.md#getdiscoveredcommissionabledevices)
- [getDiscoveredDevice](BleScanner.md#getdiscovereddevice)
- [getDiscoveredOperationalDevices](BleScanner.md#getdiscoveredoperationaldevices)
- [handleDiscoveredDevice](BleScanner.md#handlediscovereddevice)
- [registerWaiterPromise](BleScanner.md#registerwaiterpromise)

## Constructors

### constructor

• **new BleScanner**(`nobleClient`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nobleClient` | [`NobleBleClient`](internal_.NobleBleClient.md) |

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L38)

## Properties

### discoveredMatterDevices

• `Private` `Readonly` **discoveredMatterDevices**: `Map`<`string`, [`DiscoveredBleDevice`](../modules.md#discoveredbledevice)\>

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L36)

___

### nobleClient

• `Private` `Readonly` **nobleClient**: [`NobleBleClient`](internal_.NobleBleClient.md)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L38)

___

### recordWaiters

• `Private` `Readonly` **recordWaiters**: `Map`<`string`, { `resolver`: () => `void` ; `timer`: [`Timer`](../interfaces/internal_.Timer.md)  }\>

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L35)

## Methods

### buildCommissionableQueryIdentifier

▸ `Private` **buildCommissionableQueryIdentifier**(`identifier`): `string`

Builds an identifier string for commissionable queries based on the given identifier object.
Some identifiers are identical to the official DNS-SD identifiers, others are custom.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

`string`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:150](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L150)

___

### close

▸ **close**(): `void`

Close the scanner server and free resources.

#### Returns

`void`

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[close](../interfaces/internal_.Scanner.md#close)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:224](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L224)

___

### findCommissionableDevices

▸ **findCommissionableDevices**(`identifier`, `timeoutSeconds?`): `Promise`<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

Send DNS-SD queries to discover commissionable devices by an provided identifier (e.g. discriminator,
vendorId, etc.) and return them.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) | `undefined` |
| `timeoutSeconds` | `number` | `10` |

#### Returns

`Promise`<[`CommissionableDevice`](../modules/internal_.md#commissionabledevice)[]\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findCommissionableDevices](../interfaces/internal_.Scanner.md#findcommissionabledevices)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:201](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L201)

___

### findCommissionableQueryIdentifier

▸ `Private` **findCommissionableQueryIdentifier**(`record`): `undefined` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`CommissionableDeviceData`](../modules/internal_.md#commissionabledevicedata) |

#### Returns

`undefined` \| `string`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L111)

___

### findOperationalDevice

▸ **findOperationalDevice**(): `Promise`<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

Send DNS-SD queries to discover the current addresses of an operational paired device by its operational ID
and return them.

#### Returns

`Promise`<[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]\>

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[findOperationalDevice](../interfaces/internal_.Scanner.md#findoperationaldevice)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:191](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L191)

___

### finishWaiter

▸ `Private` **finishWaiter**(`queryId`, `resolvePromise?`): `void`

Remove a waiter promise for a specific queryId and stop the connected timer. If required also resolve the
promise.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `queryId` | `string` | `undefined` |
| `resolvePromise` | `boolean` | `false` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:68](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L68)

___

### getCommissionableDevices

▸ `Private` **getCommissionableDevices**(`identifier`): [`DiscoveredBleDevice`](../modules.md#discoveredbledevice)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `identifier` | [`CommissionableDeviceIdentifiers`](../modules/internal_.md#commissionabledeviceidentifiers) |

#### Returns

[`DiscoveredBleDevice`](../modules.md#discoveredbledevice)[]

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:163](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L163)

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

[matter-node-ble.js/src/ble/BleScanner.ts:220](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L220)

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

[matter-node-ble.js/src/ble/BleScanner.ts:44](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L44)

___

### getDiscoveredOperationalDevices

▸ **getDiscoveredOperationalDevices**(): [`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

Return already discovered addresses of an operational paired device and return them. Does not send out new
DNS-SD queries.

#### Returns

[`ServerAddressIp`](../modules/internal_.md#serveraddressip)[]

#### Implementation of

[Scanner](../interfaces/internal_.Scanner.md).[getDiscoveredOperationalDevices](../interfaces/internal_.Scanner.md#getdiscoveredoperationaldevices)

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:196](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L196)

___

### handleDiscoveredDevice

▸ `Private` **handleDiscoveredDevice**(`peripheral`, `manufacturerServiceData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `peripheral` | `Peripheral` |
| `manufacturerServiceData` | `Uint8Array` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L80)

___

### registerWaiterPromise

▸ `Private` **registerWaiterPromise**(`queryId`, `timeoutSeconds`): `Promise`<{ `promise`: `Promise`<`void`\>  }\>

Registers a deferred promise for a specific queryId together with a timeout and return the promise.
The promise will be resolved when the timer runs out latest.

#### Parameters

| Name | Type |
| :------ | :------ |
| `queryId` | `string` |
| `timeoutSeconds` | `number` |

#### Returns

`Promise`<{ `promise`: `Promise`<`void`\>  }\>

#### Defined in

[matter-node-ble.js/src/ble/BleScanner.ts:56](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BleScanner.ts#L56)
