[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BlenoBleServer

# Class: BlenoBleServer

[<internal>](../modules/internal_.md).BlenoBleServer

Implements the Matter over BLE server using Bleno as Peripheral.

Note: Bleno is only supporting a single connection at a time right now - mainly because it also only can announce
one BLE device at a time!

## Implements

- [`Channel`](../interfaces/internal_.Channel.md)<[`ByteArray`](../modules/internal_.md#bytearray-1)\>

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

• **new BlenoBleServer**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`BleOptions`](../modules.md#bleoptions) |

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L133)

## Properties

### additionalAdvertisingData

• `Private` **additionalAdvertisingData**: `Buffer`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:119](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L119)

___

### advertisingData

• `Private` **advertisingData**: `undefined` \| `Buffer`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:120](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L120)

___

### btpHandshakeTimeout

• `Private` **btpHandshakeTimeout**: [`Timer`](../interfaces/internal_.Timer.md)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:129](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L129)

___

### btpSession

• `Private` **btpSession**: `undefined` \| [`BtpSessionHandler`](internal_.BtpSessionHandler.md)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:123](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L123)

___

### clientAddress

• `Private` **clientAddress**: `undefined` \| `string`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:128](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L128)

___

### isAdvertising

• **isAdvertising**: `boolean` = `false`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:118](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L118)

___

### latestHandshakePayload

• `Private` **latestHandshakePayload**: `undefined` \| `Buffer`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:122](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L122)

___

### matterBleService

• `Private` `Readonly` **matterBleService**: [`BtpService`](internal_.BtpService.md)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:131](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L131)

___

### onMatterMessageListener

• `Private` **onMatterMessageListener**: `undefined` \| (`socket`: [`Channel`](../interfaces/internal_.Channel.md)<`Uint8Array`\>, `data`: `Uint8Array`) => `void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:125](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L125)

___

### state

• `Private` **state**: `string` = `"unknown"`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:117](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L117)

___

### writeConformationResolver

• `Private` **writeConformationResolver**: `undefined` \| (`value`: `void`) => `void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:126](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L126)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[name](../interfaces/internal_.Channel.md#name)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:384](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L384)

## Methods

### advertise

▸ **advertise**(`advertiseData`, `additionalAdvertisementData?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `advertiseData` | `Uint8Array` |
| `additionalAdvertisementData?` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:305](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L305)

___

### btpHandshakeTimeoutTriggered

▸ **btpHandshakeTimeoutTriggered**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:349](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L349)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[close](../interfaces/internal_.Channel.md#close)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:354](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L354)

___

### disconnect

▸ **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:363](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L363)

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

[matter-node-ble.js/src/ble/BlenoBleServer.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L209)

___

### handleC2Indicate

▸ **handleC2Indicate**(): `void`

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:282](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L282)

___

### handleC2SubscribeRequest

▸ **handleC2SubscribeRequest**(`maxValueSize`, `updateValueCallback`): `Promise`<`void`\>

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

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:244](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L244)

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

[matter-node-ble.js/src/ble/BlenoBleServer.ts:297](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L297)

___

### send

▸ **send**(`data`): `Promise`<`void`\>

Send a Matter message to the connected device - need to do BTP assembly first.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Channel](../interfaces/internal_.Channel.md).[send](../interfaces/internal_.Channel.md#send)

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:376](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L376)

___

### setMatterMessageListener

▸ **setMatterMessageListener**(`listener`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`socket`: [`Channel`](../interfaces/internal_.Channel.md)<`Uint8Array`\>, `data`: `Uint8Array`) => `void` |

#### Returns

`void`

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:342](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L342)

___

### stopAdvertising

▸ **stopAdvertising**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[matter-node-ble.js/src/ble/BlenoBleServer.ts:330](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter-node-ble.js/src/ble/BlenoBleServer.ts#L330)
