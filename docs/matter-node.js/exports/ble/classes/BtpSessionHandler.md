[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/ble](../README.md) / BtpSessionHandler

# Class: BtpSessionHandler

## Constructors

### new BtpSessionHandler()

> **new BtpSessionHandler**(`role`, `btpVersion`, `fragmentSize`, `clientWindowSize`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): [`BtpSessionHandler`](BtpSessionHandler.md)

Creates a new BTP session handler

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `role` | `"central"` \| `"peripheral"` | The role of the BTP session handler |
| `btpVersion` | `number` | The BTP protocol version to use |
| `fragmentSize` | `number` | The fragment size to use for the messages |
| `clientWindowSize` | `number` | The client window size to use |
| `writeBleCallback` | (`data`) => `Promise`\<`void`\> | Callback to write data to the BLE transport |
| `disconnectBleCallback` | () => `Promise`\<`void`\> | Callback to disconnect the BLE transport |
| `handleMatterMessagePayload` | (`data`) => `Promise`\<`void`\> | Callback to handle a Matter message payload |

#### Returns

[`BtpSessionHandler`](BtpSessionHandler.md)

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:46

## Properties

### ackReceiveTimer

> `private` `readonly` **ackReceiveTimer**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:25

***

### btpAckTimeoutTriggered

> `private` **btpAckTimeoutTriggered**: `any`

If a peer’s acknowledgement-received timer expires, or if a peer receives an invalid acknowledgement,
the peer SHALL close the BTP session and report an error to the application.

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:76

***

### btpSendAckTimeoutTriggered

> `private` **btpSendAckTimeoutTriggered**: `any`

If this timer expires and the peer has a pending acknowledgement, the peer SHALL immediately send that
acknowledgement

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:71

***

### clientWindowSize

> `private` `readonly` **clientWindowSize**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:17

***

### currentIncomingSegmentedMsgLength

> `private` **currentIncomingSegmentedMsgLength**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:21

***

### currentIncomingSegmentedPayload

> `private` **currentIncomingSegmentedPayload**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:22

***

### disconnectBleCallback

> `private` `readonly` **disconnectBleCallback**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:19

***

### exceedsWindowSize

> `private` **exceedsWindowSize**: `any`

Checks if incoming ackNumber and sent sequence number exceeds the client window size or not.

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:84

***

### fragmentSize

> `private` `readonly` **fragmentSize**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:16

***

### handleMatterMessagePayload

> `private` `readonly` **handleMatterMessagePayload**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:20

***

### isActive

> `private` **isActive**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:31

***

### prevAckedSequenceNumber

> `private` **prevAckedSequenceNumber**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:27

***

### prevIncomingAckNumber

> `private` **prevIncomingAckNumber**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:24

***

### prevIncomingSequenceNumber

> `private` **prevIncomingSequenceNumber**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:23

***

### processSendQueue

> `private` **processSendQueue**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:62

***

### queuedOutgoingMatterMessages

> `private` `readonly` **queuedOutgoingMatterMessages**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:28

***

### sendAckTimer

> `private` `readonly` **sendAckTimer**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:30

***

### sendInProgress

> `private` **sendInProgress**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:29

***

### sequenceNumber

> `private` **sequenceNumber**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:26

***

### writeBleCallback

> `private` `readonly` **writeBleCallback**: `any`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:18

## Methods

### close()

> **close**(): `Promise`\<`void`\>

Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:66

***

### getNextSequenceNumber()

> **getNextSequenceNumber**(): `number`

Increments sequence number for the packets and round it off to 0 when it reaches the maximum limit.

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:80

***

### handleIncomingBleData()

> **handleIncomingBleData**(`data`): `Promise`\<`void`\>

Handle incoming data from the transport layer and hand over completely received matter messages to the
ExchangeManager layer

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | ByteArray containing the data |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:53

***

### sendMatterMessage()

> **sendMatterMessage**(`data`): `Promise`\<`void`\>

Send a Matter message to the transport layer, but before that encode it into a BTP packet and potentially split
it into multiple segments. This Method is indirectly called by the ExchangeManager layer when a Matter message
should be sent.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `data` | `Uint8Array` | ByteArray containing the Matter message |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:61

***

### createAsCentral()

> `static` **createAsCentral**(`handshakeResponsePayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`\<[`BtpSessionHandler`](BtpSessionHandler.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handshakeResponsePayload` | `Uint8Array` |
| `writeBleCallback` | (`data`) => `Promise`\<`void`\> |
| `disconnectBleCallback` | () => `Promise`\<`void`\> |
| `handleMatterMessagePayload` | (`data`) => `Promise`\<`void`\> |

#### Returns

`Promise`\<[`BtpSessionHandler`](BtpSessionHandler.md)\>

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:34

***

### createFromHandshakeRequest()

> `static` **createFromHandshakeRequest**(`maxDataSize`, `handshakeRequestPayload`, `writeBleCallback`, `disconnectBleCallback`, `handleMatterMessagePayload`): `Promise`\<[`BtpSessionHandler`](BtpSessionHandler.md)\>

Factory method to create a new BTPSessionHandler from a received handshake request

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `maxDataSize` | `undefined` \| `number` |
| `handshakeRequestPayload` | `Uint8Array` |
| `writeBleCallback` | (`data`) => `Promise`\<`void`\> |
| `disconnectBleCallback` | () => `Promise`\<`void`\> |
| `handleMatterMessagePayload` | (`data`) => `Promise`\<`void`\> |

#### Returns

`Promise`\<[`BtpSessionHandler`](BtpSessionHandler.md)\>

#### Source

packages/matter.js/dist/esm/ble/BtpSessionHandler.d.ts:33
