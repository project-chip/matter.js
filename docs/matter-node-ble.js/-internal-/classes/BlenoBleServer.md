[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / BlenoBleServer

# Class: BlenoBleServer

Implements the Matter over BLE server using Bleno as Peripheral.

Note: Bleno is only supporting a single connection at a time right now - mainly because it also only can announce
one BLE device at a time!

## Implements

- [`Channel`](../interfaces/Channel.md)\<[`ByteArray`](../README.md#bytearray)\>

## Constructors

### new BlenoBleServer()

> **new BlenoBleServer**(`options`?): [`BlenoBleServer`](BlenoBleServer.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `options`? | [`BleOptions`](../../globals.md#bleoptions) |

#### Returns

[`BlenoBleServer`](BlenoBleServer.md)

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L147)

## Properties

### additionalAdvertisingData

> `private` **additionalAdvertisingData**: `Buffer`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L131)

***

### advertisingData

> `private` **advertisingData**: `undefined` \| `Buffer`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L132)

***

### btpHandshakeTimeout

> `private` **btpHandshakeTimeout**: [`Timer`](../interfaces/Timer.md)

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L141)

***

### btpSession

> `private` **btpSession**: `undefined` \| [`BtpSessionHandler`](BtpSessionHandler.md)

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L135)

***

### clientAddress

> `private` **clientAddress**: `undefined` \| `string`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L140)

***

### isAdvertising

> **isAdvertising**: `boolean` = `false`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L130)

***

### latestHandshakePayload

> `private` **latestHandshakePayload**: `undefined` \| `Buffer`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L134)

***

### matterBleService

> `private` `readonly` **matterBleService**: [`BtpService`](BtpService.md)

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L145)

***

### onMatterMessageListener

> `private` **onMatterMessageListener**: `undefined` \| (`socket`, `data`) => `void`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L137)

***

### state

> `private` **state**: `string` = `"unknown"`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:129](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L129)

***

### writeConformationResolver

> `private` **writeConformationResolver**: `undefined` \| (`value`) => `void`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L138)

## Accessors

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:401](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L401)

## Methods

### advertise()

> **advertise**(`advertiseData`, `additionalAdvertisementData`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `advertiseData` | `Uint8Array` |
| `additionalAdvertisementData`? | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:316](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L316)

***

### btpHandshakeTimeoutTriggered()

> **btpHandshakeTimeoutTriggered**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L360)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../interfaces/Channel.md).[`close`](../interfaces/Channel.md#close)

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:365](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L365)

***

### disconnect()

> **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:375](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L375)

***

### handleC1WriteRequest()

> **handleC1WriteRequest**(`data`, `offset`, `withoutResponse`): `void`

Process a Write request on characteristic C1 from the Matter service.
The data are checked if it might be a handshake request and stored until the subscribe request comes in.
Otherwise, the data are forwarded to the BTP session handler to be decoded and processed.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Buffer` |  |
| `offset` | `number` |  |
| `withoutResponse` | `boolean` |  |

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:220](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L220)

***

### handleC2Indicate()

> **handleC2Indicate**(): `void`

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:293](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L293)

***

### handleC2SubscribeRequest()

> **handleC2SubscribeRequest**(`maxValueSize`, `updateValueCallback`): `Promise`\<`void`\>

Process a Subscribe request on characteristic C2 from the Matter service.
This is expected directly after a handshake request and initializes the BTP session handler with the stored
handshake payload.
The BtpSessionHandler instance is wired with the bleno instance for sending data and disconnecting.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `maxValueSize` | `number` |  |
| `updateValueCallback` | (`data`) => `void` |  |

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:255](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L255)

***

### handleC3ReadRequest()

> **handleC3ReadRequest**(`offset`): `Buffer`

Process a Read request on characteristic C3 from the Matter service.
The relevant data needs optionally to be set before advertising, else empty data are used.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `offset` | `number` |  |

#### Returns

`Buffer`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:308](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L308)

***

### send()

> **send**(`data`): `Promise`\<`void`\>

Send a Matter message to the connected device - need to do BTP assembly first.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` |  |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`Channel`](../interfaces/Channel.md).[`send`](../interfaces/Channel.md#send)

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:393](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L393)

***

### setMatterMessageListener()

> **setMatterMessageListener**(`listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `listener` | (`socket`, `data`) => `void` |

#### Returns

`void`

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:353](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L353)

***

### stopAdvertising()

> **stopAdvertising**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[matter-node-ble.js/src/ble/BlenoBleServer.ts:341](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L341)
