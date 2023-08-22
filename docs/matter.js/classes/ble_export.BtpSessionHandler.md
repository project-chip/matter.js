[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [ble/export](../modules/ble_export.md) / BtpSessionHandler

# Class: BtpSessionHandler

[ble/export](../modules/ble_export.md).BtpSessionHandler

## Table of contents

### Constructors

- [constructor](ble_export.BtpSessionHandler.md#constructor)

### Properties

- [ackReceiveTimer](ble_export.BtpSessionHandler.md#ackreceivetimer)
- [clientWindowSize](ble_export.BtpSessionHandler.md#clientwindowsize)
- [currentIncomingSegmentedMsgLength](ble_export.BtpSessionHandler.md#currentincomingsegmentedmsglength)
- [currentIncomingSegmentedPayload](ble_export.BtpSessionHandler.md#currentincomingsegmentedpayload)
- [disconnectBleCallback](ble_export.BtpSessionHandler.md#disconnectblecallback)
- [fragmentSize](ble_export.BtpSessionHandler.md#fragmentsize)
- [handleMatterMessagePayload](ble_export.BtpSessionHandler.md#handlemattermessagepayload)
- [isActive](ble_export.BtpSessionHandler.md#isactive)
- [prevAckedSequenceNumber](ble_export.BtpSessionHandler.md#prevackedsequencenumber)
- [prevIncomingAckNumber](ble_export.BtpSessionHandler.md#previncomingacknumber)
- [prevIncomingSequenceNumber](ble_export.BtpSessionHandler.md#previncomingsequencenumber)
- [queuedOutgoingMatterMessages](ble_export.BtpSessionHandler.md#queuedoutgoingmattermessages)
- [sendAckTimer](ble_export.BtpSessionHandler.md#sendacktimer)
- [sendInProgress](ble_export.BtpSessionHandler.md#sendinprogress)
- [sequenceNumber](ble_export.BtpSessionHandler.md#sequencenumber)
- [writeBleCallback](ble_export.BtpSessionHandler.md#writeblecallback)

### Methods

- [btpAckTimeoutTriggered](ble_export.BtpSessionHandler.md#btpacktimeouttriggered)
- [btpSendAckTimeoutTriggered](ble_export.BtpSessionHandler.md#btpsendacktimeouttriggered)
- [close](ble_export.BtpSessionHandler.md#close)
- [exceedsWindowSize](ble_export.BtpSessionHandler.md#exceedswindowsize)
- [getNextSequenceNumber](ble_export.BtpSessionHandler.md#getnextsequencenumber)
- [handleIncomingBleData](ble_export.BtpSessionHandler.md#handleincomingbledata)
- [processSendQueue](ble_export.BtpSessionHandler.md#processsendqueue)
- [sendMatterMessage](ble_export.BtpSessionHandler.md#sendmattermessage)
- [createAsCentral](ble_export.BtpSessionHandler.md#createascentral)
- [createFromHandshakeRequest](ble_export.BtpSessionHandler.md#createfromhandshakerequest)

## Constructors

### constructor

• **new BtpSessionHandler**(`role`, `btpVersion`, `fragmentSize`, `clientWindowSize`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`)

Creates a new BTP session handler

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `role` | ``"central"`` \| ``"peripheral"`` | The role of the BTP session handler |
| `btpVersion` | `number` | The BTP protocol version to use |
| `fragmentSize` | `number` | The fragment size to use for the messages |
| `clientWindowSize` | `number` | The client window size to use |
| `writeBleCallback` | (`data`: `Uint8Array`) => `Promise`<`void`\> | Callback to write data to the BLE transport |
| `disconnectBleCallback` | () => `Promise`<`void`\> | Callback to disconnect the BLE transport |
| `handleMatterMessagePayload` | (`data`: `Uint8Array`) => `Promise`<`void`\> | Callback to handle a Matter message payload |

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:143](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L143)

## Properties

### ackReceiveTimer

• `Private` `Readonly` **ackReceiveTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L35)

___

### clientWindowSize

• `Private` `Readonly` **clientWindowSize**: `number`

The client window size to use

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:147](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L147)

___

### currentIncomingSegmentedMsgLength

• `Private` **currentIncomingSegmentedMsgLength**: `undefined` \| `number`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:31](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L31)

___

### currentIncomingSegmentedPayload

• `Private` **currentIncomingSegmentedPayload**: `undefined` \| `Uint8Array`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:32](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L32)

___

### disconnectBleCallback

• `Private` `Readonly` **disconnectBleCallback**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

Callback to disconnect the BLE transport

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:149](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L149)

___

### fragmentSize

• `Private` `Readonly` **fragmentSize**: `number`

The fragment size to use for the messages

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:146](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L146)

___

### handleMatterMessagePayload

• `Private` `Readonly` **handleMatterMessagePayload**: (`data`: `Uint8Array`) => `Promise`<`void`\>

#### Type declaration

▸ (`data`): `Promise`<`void`\>

Callback to handle a Matter message payload

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:150](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L150)

___

### isActive

• `Private` **isActive**: `boolean` = `true`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L42)

___

### prevAckedSequenceNumber

• `Private` **prevAckedSequenceNumber**: `number` = `-1`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L38)

___

### prevIncomingAckNumber

• `Private` **prevIncomingAckNumber**: `number` = `-1`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L34)

___

### prevIncomingSequenceNumber

• `Private` **prevIncomingSequenceNumber**: `number` = `255`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:33](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L33)

___

### queuedOutgoingMatterMessages

• `Private` `Readonly` **queuedOutgoingMatterMessages**: [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\>[]

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L39)

___

### sendAckTimer

• `Private` `Readonly` **sendAckTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:41](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L41)

___

### sendInProgress

• `Private` **sendInProgress**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:40](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L40)

___

### sequenceNumber

• `Private` **sequenceNumber**: `number` = `0`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:37](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L37)

___

### writeBleCallback

• `Private` `Readonly` **writeBleCallback**: (`data`: `Uint8Array`) => `Promise`<`void`\>

#### Type declaration

▸ (`data`): `Promise`<`void`\>

Callback to write data to the BLE transport

##### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:148](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L148)

## Methods

### btpAckTimeoutTriggered

▸ `Private` **btpAckTimeoutTriggered**(): `Promise`<`void`\>

If a peer’s acknowledgement-received timer expires, or if a peer receives an invalid acknowledgement,
the peer SHALL close the BTP session and report an error to the application.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:444](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L444)

___

### btpSendAckTimeoutTriggered

▸ `Private` **btpSendAckTimeoutTriggered**(): `Promise`<`void`\>

If this timer expires and the peer has a pending acknowledgement, the peer SHALL immediately send that
acknowledgement

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:414](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L414)

___

### close

▸ **close**(): `Promise`<`void`\>

Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:400](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L400)

___

### exceedsWindowSize

▸ `Private` **exceedsWindowSize**(`prevIncomingAckNumber`, `currentSequenceNumber`): `boolean`

Checks if incoming ackNumber and sent sequence number exceeds the client window size or not.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevIncomingAckNumber` | `number` |
| `currentSequenceNumber` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:465](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L465)

___

### getNextSequenceNumber

▸ **getNextSequenceNumber**(): `number`

Increments sequence number for the packets and round it off to 0 when it reaches the maximum limit.

#### Returns

`number`

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:454](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L454)

___

### handleIncomingBleData

▸ **handleIncomingBleData**(`data`): `Promise`<`void`\>

Handle incoming data from the transport layer and hand over completely received matter messages to the
ExchangeManager layer

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | ByteArray containing the data |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:171](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L171)

___

### processSendQueue

▸ `Private` **processSendQueue**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:313](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L313)

___

### sendMatterMessage

▸ **sendMatterMessage**(`data`): `Promise`<`void`\>

Send a Matter message to the transport layer, but before that encode it into a BTP packet and potentially split
it into multiple segments. This Method is indirectly called by the ExchangeManager layer when a Matter message
should be sent.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | ByteArray containing the Matter message |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:299](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L299)

___

### createAsCentral

▸ `Static` **createAsCentral**(`handshakeResponsePayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`<[`BtpSessionHandler`](ble_export.BtpSessionHandler.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handshakeResponsePayload` | `Uint8Array` |
| `writeBleCallback` | (`data`: `Uint8Array`) => `Promise`<`void`\> |
| `disconnectBleCallback` | () => `Promise`<`void`\> |
| `handleMatterMessagePayload` | (`data`: `Uint8Array`) => `Promise`<`void`\> |

#### Returns

`Promise`<[`BtpSessionHandler`](ble_export.BtpSessionHandler.md)\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L110)

___

### createFromHandshakeRequest

▸ `Static` **createFromHandshakeRequest**(`maxDataSize`, `handshakeRequestPayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`<[`BtpSessionHandler`](ble_export.BtpSessionHandler.md)\>

Factory method to create a new BTPSessionHandler from a received handshake request

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxDataSize` | `undefined` \| `number` |
| `handshakeRequestPayload` | `Uint8Array` |
| `writeBleCallback` | (`data`: `Uint8Array`) => `Promise`<`void`\> |
| `disconnectBleCallback` | () => `Promise`<`void`\> |
| `handleMatterMessagePayload` | (`data`: `Uint8Array`) => `Promise`<`void`\> |

#### Returns

`Promise`<[`BtpSessionHandler`](ble_export.BtpSessionHandler.md)\>

#### Defined in

[packages/matter.js/src/ble/BtpSessionHandler.ts:45](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/ble/BtpSessionHandler.ts#L45)
