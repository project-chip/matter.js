[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/ble](../modules/exports_ble.md) / BtpSessionHandler

# Class: BtpSessionHandler

[exports/ble](../modules/exports_ble.md).BtpSessionHandler

## Table of contents

### Constructors

- [constructor](exports_ble.BtpSessionHandler.md#constructor)

### Properties

- [ackReceiveTimer](exports_ble.BtpSessionHandler.md#ackreceivetimer)
- [btpAckTimeoutTriggered](exports_ble.BtpSessionHandler.md#btpacktimeouttriggered)
- [btpSendAckTimeoutTriggered](exports_ble.BtpSessionHandler.md#btpsendacktimeouttriggered)
- [clientWindowSize](exports_ble.BtpSessionHandler.md#clientwindowsize)
- [currentIncomingSegmentedMsgLength](exports_ble.BtpSessionHandler.md#currentincomingsegmentedmsglength)
- [currentIncomingSegmentedPayload](exports_ble.BtpSessionHandler.md#currentincomingsegmentedpayload)
- [disconnectBleCallback](exports_ble.BtpSessionHandler.md#disconnectblecallback)
- [exceedsWindowSize](exports_ble.BtpSessionHandler.md#exceedswindowsize)
- [fragmentSize](exports_ble.BtpSessionHandler.md#fragmentsize)
- [handleMatterMessagePayload](exports_ble.BtpSessionHandler.md#handlemattermessagepayload)
- [isActive](exports_ble.BtpSessionHandler.md#isactive)
- [prevAckedSequenceNumber](exports_ble.BtpSessionHandler.md#prevackedsequencenumber)
- [prevIncomingAckNumber](exports_ble.BtpSessionHandler.md#previncomingacknumber)
- [prevIncomingSequenceNumber](exports_ble.BtpSessionHandler.md#previncomingsequencenumber)
- [processSendQueue](exports_ble.BtpSessionHandler.md#processsendqueue)
- [queuedOutgoingMatterMessages](exports_ble.BtpSessionHandler.md#queuedoutgoingmattermessages)
- [sendAckTimer](exports_ble.BtpSessionHandler.md#sendacktimer)
- [sendInProgress](exports_ble.BtpSessionHandler.md#sendinprogress)
- [sequenceNumber](exports_ble.BtpSessionHandler.md#sequencenumber)
- [writeBleCallback](exports_ble.BtpSessionHandler.md#writeblecallback)

### Methods

- [close](exports_ble.BtpSessionHandler.md#close)
- [getNextSequenceNumber](exports_ble.BtpSessionHandler.md#getnextsequencenumber)
- [handleIncomingBleData](exports_ble.BtpSessionHandler.md#handleincomingbledata)
- [sendMatterMessage](exports_ble.BtpSessionHandler.md#sendmattermessage)
- [createAsCentral](exports_ble.BtpSessionHandler.md#createascentral)
- [createFromHandshakeRequest](exports_ble.BtpSessionHandler.md#createfromhandshakerequest)

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

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:46

## Properties

### ackReceiveTimer

• `Private` `Readonly` **ackReceiveTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:25

___

### btpAckTimeoutTriggered

• `Private` **btpAckTimeoutTriggered**: `any`

If a peer’s acknowledgement-received timer expires, or if a peer receives an invalid acknowledgement,
the peer SHALL close the BTP session and report an error to the application.

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:76

___

### btpSendAckTimeoutTriggered

• `Private` **btpSendAckTimeoutTriggered**: `any`

If this timer expires and the peer has a pending acknowledgement, the peer SHALL immediately send that
acknowledgement

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:71

___

### clientWindowSize

• `Private` `Readonly` **clientWindowSize**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:17

___

### currentIncomingSegmentedMsgLength

• `Private` **currentIncomingSegmentedMsgLength**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:21

___

### currentIncomingSegmentedPayload

• `Private` **currentIncomingSegmentedPayload**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:22

___

### disconnectBleCallback

• `Private` `Readonly` **disconnectBleCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:19

___

### exceedsWindowSize

• `Private` **exceedsWindowSize**: `any`

Checks if incoming ackNumber and sent sequence number exceeds the client window size or not.

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:84

___

### fragmentSize

• `Private` `Readonly` **fragmentSize**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:16

___

### handleMatterMessagePayload

• `Private` `Readonly` **handleMatterMessagePayload**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:20

___

### isActive

• `Private` **isActive**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:31

___

### prevAckedSequenceNumber

• `Private` **prevAckedSequenceNumber**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:27

___

### prevIncomingAckNumber

• `Private` **prevIncomingAckNumber**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:24

___

### prevIncomingSequenceNumber

• `Private` **prevIncomingSequenceNumber**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:23

___

### processSendQueue

• `Private` **processSendQueue**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:62

___

### queuedOutgoingMatterMessages

• `Private` `Readonly` **queuedOutgoingMatterMessages**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:28

___

### sendAckTimer

• `Private` `Readonly` **sendAckTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:30

___

### sendInProgress

• `Private` **sendInProgress**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:29

___

### sequenceNumber

• `Private` **sequenceNumber**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:26

___

### writeBleCallback

• `Private` `Readonly` **writeBleCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:18

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:66

___

### getNextSequenceNumber

▸ **getNextSequenceNumber**(): `number`

Increments sequence number for the packets and round it off to 0 when it reaches the maximum limit.

#### Returns

`number`

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:80

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

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:53

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

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:61

___

### createAsCentral

▸ `Static` **createAsCentral**(`handshakeResponsePayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`<[`BtpSessionHandler`](exports_ble.BtpSessionHandler.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handshakeResponsePayload` | `Uint8Array` |
| `writeBleCallback` | (`data`: `Uint8Array`) => `Promise`<`void`\> |
| `disconnectBleCallback` | () => `Promise`<`void`\> |
| `handleMatterMessagePayload` | (`data`: `Uint8Array`) => `Promise`<`void`\> |

#### Returns

`Promise`<[`BtpSessionHandler`](exports_ble.BtpSessionHandler.md)\>

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:34

___

### createFromHandshakeRequest

▸ `Static` **createFromHandshakeRequest**(`maxDataSize`, `handshakeRequestPayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`<[`BtpSessionHandler`](exports_ble.BtpSessionHandler.md)\>

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

`Promise`<[`BtpSessionHandler`](exports_ble.BtpSessionHandler.md)\>

#### Defined in

packages/matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:33
