[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / BlenoBleServer

# Class: BlenoBleServer

[\<internal\>](../modules/internal_.md).BlenoBleServer

Implements the Matter over BLE server using Bleno as Peripheral.

Note: Bleno is only supporting a single connection at a time right now - mainly because it also only can announce
one BLE device at a time!

## Implements

- [`Channel`](../interfaces/internal_.Channel.md)\<[`ByteArray`](../modules/internal_.md#bytearray)\>

## Table of contents

### Constructors

- [constructor](internal_.BlenoBleServer.md#constructor)

### Properties

- [additionalAdvertisingData](internal_.BlenoBleServer.md#additionaladvertisingdata)
- [advertisingData](internal_.BlenoBleServer.md#advertisingdata)
- [btpHandshakeTimeout](internal_.BlenoBleServer.md#btphandshaketimeout)
- [btpSession](internal_.BlenoBleServer.md#btpsession)
- [clientAddress](internal_.BlenoBleServer.md#clientaddress)
- [isAdvertising](internal_.BlenoBleServer.md#isadvertising)
- [latestHandshakePayload](internal_.BlenoBleServer.md#latesthandshakepayload)
- [matterBleService](internal_.BlenoBleServer.md#matterbleservice)
- [onMatterMessageListener](internal_.BlenoBleServer.md#onmattermessagelistener)
- [state](internal_.BlenoBleServer.md#state)
- [writeConformationResolver](internal_.BlenoBleServer.md#writeconformationresolver)

### Accessors

- [name](internal_.BlenoBleServer.md#name)

### Methods

- [advertise](internal_.BlenoBleServer.md#advertise)
- [btpHandshakeTimeoutTriggered](internal_.BlenoBleServer.md#btphandshaketimeouttriggered)
- [close](internal_.BlenoBleServer.md#close)
- [disconnect](internal_.BlenoBleServer.md#disconnect)
- [handleC1WriteRequest](internal_.BlenoBleServer.md#handlec1writerequest)
- [handleC2Indicate](internal_.BlenoBleServer.md#handlec2indicate)
- [handleC2SubscribeRequest](internal_.BlenoBleServer.md#handlec2subscriberequest)
- [handleC3ReadRequest](internal_.BlenoBleServer.md#handlec3readrequest)
- [send](internal_.BlenoBleServer.md#send)
- [setMatterMessageListener](internal_.BlenoBleServer.md#setmattermessagelistener)
- [stopAdvertising](internal_.BlenoBleServer.md#stopadvertising)

## Constructors

### constructor

• **new BlenoBleServer**(`options?`): [`BlenoBleServer`](internal_.BlenoBleServer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BleOptions`](../modules.md#bleoptions) |

#### Returns

[`BlenoBleServer`](internal_.BlenoBleServer.md)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L147)

## Properties

### additionalAdvertisingData

• `Private` **additionalAdvertisingData**: `Buffer`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L131)

___

### advertisingData

• `Private` **advertisingData**: `undefined` \| `Buffer`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L132)

___

### btpHandshakeTimeout

• `Private` **btpHandshakeTimeout**: [`Timer`](../interfaces/internal_.Timer.md)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L141)

___

### btpSession

• `Private` **btpSession**: `undefined` \| [`BtpSessionHandler`](internal_.BtpSessionHandler.md)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L135)

___

### clientAddress

• `Private` **clientAddress**: `undefined` \| `string`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L140)

___

### isAdvertising

• **isAdvertising**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L130)

___

### latestHandshakePayload

• `Private` **latestHandshakePayload**: `undefined` \| `Buffer`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L134)

___

### matterBleService

• `Private` `Readonly` **matterBleService**: [`BtpService`](internal_.BtpService.md)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L145)

___

### onMatterMessageListener

• `Private` **onMatterMessageListener**: `undefined` \| (`socket`: [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\>, `data`: `Uint8Array`) => `void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L137)

___

### state

• `Private` **state**: `string` = `"unknown"`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:129](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L129)

___

### writeConformationResolver

• `Private` **writeConformationResolver**: `undefined` \| (`value`: `void`) => `void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L138)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[name](../interfaces/internal_.Channel.md#name)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:401](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L401)

## Methods

### advertise

▸ **advertise**(`advertiseData`, `additionalAdvertisementData?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `advertiseData` | `Uint8Array` |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:316](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L316)

___

### btpHandshakeTimeoutTriggered

▸ **btpHandshakeTimeoutTriggered**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:360](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L360)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[close](../interfaces/internal_.Channel.md#close)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:365](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L365)

___

### disconnect

▸ **disconnect**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:375](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L375)

___

### handleC1WriteRequest

▸ **handleC1WriteRequest**(`data`, `offset`, `withoutResponse`): `void`

Process a Write request on characteristic C1 from the Matter service.
The data are checked if it might be a handshake request and stored until the subscribe request comes in.
Otherwise, the data are forwarded to the BTP session handler to be decoded and processed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Buffer` |
| `offset` | `number` |
| `withoutResponse` | `boolean` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:220](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L220)

___

### handleC2Indicate

▸ **handleC2Indicate**(): `void`

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L293)

___

### handleC2SubscribeRequest

▸ **handleC2SubscribeRequest**(`maxValueSize`, `updateValueCallback`): `Promise`\<`void`\>

Process a Subscribe request on characteristic C2 from the Matter service.
This is expected directly after a handshake request and initializes the BTP session handler with the stored
handshake payload.
The BtpSessionHandler instance is wired with the bleno instance for sending data and disconnecting.

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxValueSize` | `number` |
| `updateValueCallback` | (`data`: `Buffer`) => `void` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:255](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L255)

___

### handleC3ReadRequest

▸ **handleC3ReadRequest**(`offset`): `Buffer`

Process a Read request on characteristic C3 from the Matter service.
The relevant data needs optionally to be set before advertising, else empty data are used.

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |

#### Returns

`Buffer`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:308](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L308)

___

### send

▸ **send**(`data`): `Promise`\<`void`\>

Send a Matter message to the connected device - need to do BTP assembly first.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[send](../interfaces/internal_.Channel.md#send)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:393](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L393)

___

### setMatterMessageListener

▸ **setMatterMessageListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`socket`: [`Channel`](../interfaces/internal_.Channel.md)\<`Uint8Array`\>, `data`: `Uint8Array`) => `void` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:353](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L353)

___

### stopAdvertising

▸ **stopAdvertising**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:341](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L341)
