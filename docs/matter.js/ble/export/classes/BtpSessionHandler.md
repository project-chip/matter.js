[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [ble/export](../README.md) / BtpSessionHandler

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

[packages/matter.js/src/ble/BtpSessionHandler.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L148)

## Properties

### ackReceiveTimer

> `private` `readonly` **ackReceiveTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L36)

***

### clientWindowSize

> `private` `readonly` **clientWindowSize**: `number`

The client window size to use

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L152)

***

### currentIncomingSegmentedMsgLength

> `private` **currentIncomingSegmentedMsgLength**: `undefined` \| `number`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:32](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L32)

***

### currentIncomingSegmentedPayload

> `private` **currentIncomingSegmentedPayload**: `undefined` \| `Uint8Array`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L33)

***

### disconnectBleCallback()

> `private` `readonly` **disconnectBleCallback**: () => `Promise`\<`void`\>

Callback to disconnect the BLE transport

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:154](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L154)

***

### fragmentSize

> `private` `readonly` **fragmentSize**: `number`

The fragment size to use for the messages

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L151)

***

### handleMatterMessagePayload()

> `private` `readonly` **handleMatterMessagePayload**: (`data`) => `Promise`\<`void`\>

Callback to handle a Matter message payload

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:155](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L155)

***

### isActive

> `private` **isActive**: `boolean` = `true`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L47)

***

### prevAckedSequenceNumber

> `private` **prevAckedSequenceNumber**: `number` = `-1`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L41)

***

### prevIncomingAckNumber

> `private` **prevIncomingAckNumber**: `number` = `-1`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L35)

***

### prevIncomingSequenceNumber

> `private` **prevIncomingSequenceNumber**: `number` = `255`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L34)

***

### queuedOutgoingMatterMessages

> `private` `readonly` **queuedOutgoingMatterMessages**: [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\>[]

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L42)

***

### sendAckTimer

> `private` `readonly` **sendAckTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L44)

***

### sendInProgress

> `private` **sendInProgress**: `boolean` = `false`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L43)

***

### sequenceNumber

> `private` **sequenceNumber**: `number` = `0`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L40)

***

### writeBleCallback()

> `private` `readonly` **writeBleCallback**: (`data`) => `Promise`\<`void`\>

Callback to write data to the BLE transport

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L153)

## Methods

### btpAckTimeoutTriggered()

> `private` **btpAckTimeoutTriggered**(): `Promise`\<`void`\>

If a peer’s acknowledgement-received timer expires, or if a peer receives an invalid acknowledgement,
the peer SHALL close the BTP session and report an error to the application.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:450](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L450)

***

### btpSendAckTimeoutTriggered()

> `private` **btpSendAckTimeoutTriggered**(): `Promise`\<`void`\>

If this timer expires and the peer has a pending acknowledgement, the peer SHALL immediately send that
acknowledgement

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:420](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L420)

***

### close()

> **close**(): `Promise`\<`void`\>

Close the BTP session. This method is called when the BLE transport is disconnected and so the BTP session gets closed.

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:406](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L406)

***

### exceedsWindowSize()

> `private` **exceedsWindowSize**(`prevIncomingAckNumber`, `currentSequenceNumber`): `boolean`

Checks if incoming ackNumber and sent sequence number exceeds the client window size or not.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `prevIncomingAckNumber` | `number` |
| `currentSequenceNumber` | `number` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:471](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L471)

***

### getNextSequenceNumber()

> **getNextSequenceNumber**(): `number`

Increments sequence number for the packets and round it off to 0 when it reaches the maximum limit.

#### Returns

`number`

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:460](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L460)

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

[packages/matter.js/src/ble/BtpSessionHandler.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L176)

***

### processSendQueue()

> `private` **processSendQueue**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/ble/BtpSessionHandler.ts:318](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L318)

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

[packages/matter.js/src/ble/BtpSessionHandler.ts:304](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L304)

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

[packages/matter.js/src/ble/BtpSessionHandler.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L115)

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

[packages/matter.js/src/ble/BtpSessionHandler.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/ble/BtpSessionHandler.ts#L50)
