[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / BtpSessionHandler

# Class: BtpSessionHandler

[<internal>](../modules/internal_.md).BtpSessionHandler

## Table of contents

### Constructors

- [constructor](internal_.BtpSessionHandler.md#constructor)

### Properties

- [ackReceiveTimer](internal_.BtpSessionHandler.md#ackreceivetimer)
- [btpAckTimeoutTriggered](internal_.BtpSessionHandler.md#btpacktimeouttriggered)
- [btpSendAckTimeoutTriggered](internal_.BtpSessionHandler.md#btpsendacktimeouttriggered)
- [clientWindowSize](internal_.BtpSessionHandler.md#clientwindowsize)
- [currentIncomingSegmentedMsgLength](internal_.BtpSessionHandler.md#currentincomingsegmentedmsglength)
- [currentIncomingSegmentedPayload](internal_.BtpSessionHandler.md#currentincomingsegmentedpayload)
- [disconnectBleCallback](internal_.BtpSessionHandler.md#disconnectblecallback)
- [exceedsWindowSize](internal_.BtpSessionHandler.md#exceedswindowsize)
- [fragmentSize](internal_.BtpSessionHandler.md#fragmentsize)
- [handleMatterMessagePayload](internal_.BtpSessionHandler.md#handlemattermessagepayload)
- [isActive](internal_.BtpSessionHandler.md#isactive)
- [prevAckedSequenceNumber](internal_.BtpSessionHandler.md#prevackedsequencenumber)
- [prevIncomingAckNumber](internal_.BtpSessionHandler.md#previncomingacknumber)
- [prevIncomingSequenceNumber](internal_.BtpSessionHandler.md#previncomingsequencenumber)
- [processSendQueue](internal_.BtpSessionHandler.md#processsendqueue)
- [queuedOutgoingMatterMessages](internal_.BtpSessionHandler.md#queuedoutgoingmattermessages)
- [sendAckTimer](internal_.BtpSessionHandler.md#sendacktimer)
- [sendInProgress](internal_.BtpSessionHandler.md#sendinprogress)
- [sequenceNumber](internal_.BtpSessionHandler.md#sequencenumber)
- [writeBleCallback](internal_.BtpSessionHandler.md#writeblecallback)

### Methods

- [close](internal_.BtpSessionHandler.md#close)
- [getNextSequenceNumber](internal_.BtpSessionHandler.md#getnextsequencenumber)
- [handleIncomingBleData](internal_.BtpSessionHandler.md#handleincomingbledata)
- [sendMatterMessage](internal_.BtpSessionHandler.md#sendmattermessage)
- [createAsCentral](internal_.BtpSessionHandler.md#createascentral)
- [createFromHandshakeRequest](internal_.BtpSessionHandler.md#createfromhandshakerequest)

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

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:46

## Properties

### ackReceiveTimer

• `Private` `Readonly` **ackReceiveTimer**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:25

___

### btpAckTimeoutTriggered

• `Private` **btpAckTimeoutTriggered**: `any`

If a peer’s acknowledgement-received timer expires, or if a peer receives an invalid acknowledgement,
the peer SHALL close the BTP session and report an error to the application.

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:76

___

### btpSendAckTimeoutTriggered

• `Private` **btpSendAckTimeoutTriggered**: `any`

If this timer expires and the peer has a pending acknowledgement, the peer SHALL immediately send that
acknowledgement

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:71

___

### clientWindowSize

• `Private` `Readonly` **clientWindowSize**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:17

___

### currentIncomingSegmentedMsgLength

• `Private` **currentIncomingSegmentedMsgLength**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:21

___

### currentIncomingSegmentedPayload

• `Private` **currentIncomingSegmentedPayload**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:22

___

### disconnectBleCallback

• `Private` `Readonly` **disconnectBleCallback**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:19

___

### exceedsWindowSize

• `Private` **exceedsWindowSize**: `any`

Checks if incoming ackNumber and sent sequence number exceeds the client window size or not.

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:84

___

### fragmentSize

• `Private` `Readonly` **fragmentSize**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:16

___

### handleMatterMessagePayload

• `Private` `Readonly` **handleMatterMessagePayload**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:20

___

### isActive

• `Private` **isActive**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:31

___

### prevAckedSequenceNumber

• `Private` **prevAckedSequenceNumber**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:27

___

### prevIncomingAckNumber

• `Private` **prevIncomingAckNumber**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:24

___

### prevIncomingSequenceNumber

• `Private` **prevIncomingSequenceNumber**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:23

___

### processSendQueue

• `Private` **processSendQueue**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:62

___

### queuedOutgoingMatterMessages

• `Private` `Readonly` **queuedOutgoingMatterMessages**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:28

___

### sendAckTimer

• `Private` `Readonly` **sendAckTimer**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:30

___

### sendInProgress

• `Private` **sendInProgress**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:29

___

### sequenceNumber

• `Private` **sequenceNumber**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:26

___

### writeBleCallback

• `Private` `Readonly` **writeBleCallback**: `any`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:18

## Methods

### close

▸ **close**(): `Promise`<`void`\>

Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:66

___

### getNextSequenceNumber

▸ **getNextSequenceNumber**(): `number`

Increments sequence number for the packets and round it off to 0 when it reaches the maximum limit.

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:80

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

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:53

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

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:61

___

### createAsCentral

▸ `Static` **createAsCentral**(`handshakeResponsePayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`<[`BtpSessionHandler`](internal_.BtpSessionHandler.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `handshakeResponsePayload` | `Uint8Array` |
| `writeBleCallback` | (`data`: `Uint8Array`) => `Promise`<`void`\> |
| `disconnectBleCallback` | () => `Promise`<`void`\> |
| `handleMatterMessagePayload` | (`data`: `Uint8Array`) => `Promise`<`void`\> |

#### Returns

`Promise`<[`BtpSessionHandler`](internal_.BtpSessionHandler.md)\>

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:34

___

### createFromHandshakeRequest

▸ `Static` **createFromHandshakeRequest**(`maxDataSize`, `handshakeRequestPayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`<[`BtpSessionHandler`](internal_.BtpSessionHandler.md)\>

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

`Promise`<[`BtpSessionHandler`](internal_.BtpSessionHandler.md)\>

#### Defined in

matter.js/dist/cjs/ble/BtpSessionHandler.d.ts:33
