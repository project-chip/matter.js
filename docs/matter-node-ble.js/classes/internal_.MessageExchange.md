[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / MessageExchange

# Class: MessageExchange<ContextT\>

[<internal>](../modules/internal_.md).MessageExchange

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](internal_.MessageExchange.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](internal_.MessageExchange.md#activeretransmissiontimeoutms)
- [channel](internal_.MessageExchange.md#channel)
- [closeCallback](internal_.MessageExchange.md#closecallback)
- [closeInternal](internal_.MessageExchange.md#closeinternal)
- [closeTimer](internal_.MessageExchange.md#closetimer)
- [exchangeId](internal_.MessageExchange.md#exchangeid)
- [getResubmissionBackOffTime](internal_.MessageExchange.md#getresubmissionbackofftime)
- [idleRetransmissionTimeoutMs](internal_.MessageExchange.md#idleretransmissiontimeoutms)
- [isInitiator](internal_.MessageExchange.md#isinitiator)
- [messageCounter](internal_.MessageExchange.md#messagecounter)
- [messagesQueue](internal_.MessageExchange.md#messagesqueue)
- [nodeId](internal_.MessageExchange.md#nodeid)
- [peerNodeId](internal_.MessageExchange.md#peernodeid)
- [peerSessionId](internal_.MessageExchange.md#peersessionid)
- [protocolId](internal_.MessageExchange.md#protocolid)
- [receivedMessageToAck](internal_.MessageExchange.md#receivedmessagetoack)
- [retransmissionRetries](internal_.MessageExchange.md#retransmissionretries)
- [retransmissionTimer](internal_.MessageExchange.md#retransmissiontimer)
- [retransmitMessage](internal_.MessageExchange.md#retransmitmessage)
- [sentMessageAckFailure](internal_.MessageExchange.md#sentmessageackfailure)
- [sentMessageAckSuccess](internal_.MessageExchange.md#sentmessageacksuccess)
- [sentMessageToAck](internal_.MessageExchange.md#sentmessagetoack)
- [session](internal_.MessageExchange.md#session)

### Methods

- [close](internal_.MessageExchange.md#close)
- [destroy](internal_.MessageExchange.md#destroy)
- [nextMessage](internal_.MessageExchange.md#nextmessage)
- [onMessageReceived](internal_.MessageExchange.md#onmessagereceived)
- [send](internal_.MessageExchange.md#send)
- [waitFor](internal_.MessageExchange.md#waitfor)
- [fromInitialMessage](internal_.MessageExchange.md#frominitialmessage)
- [initiate](internal_.MessageExchange.md#initiate)

## Constructors

### constructor

• **new MessageExchange**<`ContextT`\>(`session`, `channel`, `messageCounter`, `isInitiator`, `peerSessionId`, `nodeId`, `peerNodeId`, `exchangeId`, `protocolId`, `closeCallback`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/internal_.Session.md)<`ContextT`\> |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](internal_.MessageCounter.md) |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `void` |

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:41

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:31

___

### channel

• `Readonly` **channel**: [`MessageChannel`](internal_.MessageChannel.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:20

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:28

___

### closeInternal

• `Private` **closeInternal**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:51

___

### closeTimer

• `Private` **closeTimer**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:40

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:26

___

### getResubmissionBackOffTime

• `Private` **getResubmissionBackOffTime**: `any`

**`See`**

MatterCoreSpecificationV1_0, section 4.11.2.1

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:47

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:32

___

### isInitiator

• `Private` `Readonly` **isInitiator**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:22

___

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:21

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:34

___

### nodeId

• `Private` `Readonly` **nodeId**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:24

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:25

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:23

___

### protocolId

• `Private` `Readonly` **protocolId**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:27

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:35

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:33

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:39

___

### retransmitMessage

• `Private` **retransmitMessage**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:48

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:38

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:37

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `any`

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:36

___

### session

• `Readonly` **session**: [`Session`](../interfaces/internal_.Session.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:19

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:50

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:49

___

### nextMessage

▸ **nextMessage**(): `Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Returns

`Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:44

___

### onMessageReceived

▸ **onMessageReceived**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:42

___

### send

▸ **send**(`messageType`, `payload`, `expectAckOnly?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `expectAckOnly?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:43

___

### waitFor

▸ **waitFor**(`messageType`): `Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/internal_.Message.md)\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:45

___

### fromInitialMessage

▸ `Static` **fromInitialMessage**<`ContextT`\>(`channel`, `messageCounter`, `initialMessage`, `closeCallback`): [`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](internal_.MessageCounter.md) |
| `initialMessage` | [`Message`](../interfaces/internal_.Message.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:29

___

### initiate

▸ `Static` **initiate**<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `messageCounter`, `closeCallback`): [`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `messageCounter` | [`MessageCounter`](internal_.MessageCounter.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)<`ContextT`\>

#### Defined in

matter.js/dist/cjs/protocol/MessageExchange.d.ts:30
