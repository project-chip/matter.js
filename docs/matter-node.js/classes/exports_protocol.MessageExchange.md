[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageExchange

# Class: MessageExchange<ContextT\>

[exports/protocol](../modules/exports_protocol.md).MessageExchange

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](exports_protocol.MessageExchange.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](exports_protocol.MessageExchange.md#activeretransmissiontimeoutms)
- [channel](exports_protocol.MessageExchange.md#channel)
- [closeCallback](exports_protocol.MessageExchange.md#closecallback)
- [closeInternal](exports_protocol.MessageExchange.md#closeinternal)
- [closeTimer](exports_protocol.MessageExchange.md#closetimer)
- [exchangeId](exports_protocol.MessageExchange.md#exchangeid)
- [getResubmissionBackOffTime](exports_protocol.MessageExchange.md#getresubmissionbackofftime)
- [idleRetransmissionTimeoutMs](exports_protocol.MessageExchange.md#idleretransmissiontimeoutms)
- [isInitiator](exports_protocol.MessageExchange.md#isinitiator)
- [messageCounter](exports_protocol.MessageExchange.md#messagecounter)
- [messagesQueue](exports_protocol.MessageExchange.md#messagesqueue)
- [nodeId](exports_protocol.MessageExchange.md#nodeid)
- [peerNodeId](exports_protocol.MessageExchange.md#peernodeid)
- [peerSessionId](exports_protocol.MessageExchange.md#peersessionid)
- [protocolId](exports_protocol.MessageExchange.md#protocolid)
- [receivedMessageToAck](exports_protocol.MessageExchange.md#receivedmessagetoack)
- [retransmissionRetries](exports_protocol.MessageExchange.md#retransmissionretries)
- [retransmissionTimer](exports_protocol.MessageExchange.md#retransmissiontimer)
- [retransmitMessage](exports_protocol.MessageExchange.md#retransmitmessage)
- [sentMessageAckFailure](exports_protocol.MessageExchange.md#sentmessageackfailure)
- [sentMessageAckSuccess](exports_protocol.MessageExchange.md#sentmessageacksuccess)
- [sentMessageToAck](exports_protocol.MessageExchange.md#sentmessagetoack)
- [session](exports_protocol.MessageExchange.md#session)

### Methods

- [close](exports_protocol.MessageExchange.md#close)
- [destroy](exports_protocol.MessageExchange.md#destroy)
- [nextMessage](exports_protocol.MessageExchange.md#nextmessage)
- [onMessageReceived](exports_protocol.MessageExchange.md#onmessagereceived)
- [send](exports_protocol.MessageExchange.md#send)
- [waitFor](exports_protocol.MessageExchange.md#waitfor)
- [fromInitialMessage](exports_protocol.MessageExchange.md#frominitialmessage)
- [initiate](exports_protocol.MessageExchange.md#initiate)

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
| `session` | [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\> |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `void` |

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:41

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:31

___

### channel

• `Readonly` **channel**: [`MessageChannel`](exports_protocol.MessageChannel.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:20

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:28

___

### closeInternal

• `Private` **closeInternal**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:51

___

### closeTimer

• `Private` **closeTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:40

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:26

___

### getResubmissionBackOffTime

• `Private` **getResubmissionBackOffTime**: `any`

**`See`**

MatterCoreSpecificationV1_0, section 4.11.2.1

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:47

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:32

___

### isInitiator

• `Private` `Readonly` **isInitiator**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:22

___

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:21

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:34

___

### nodeId

• `Private` `Readonly` **nodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:24

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:25

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:23

___

### protocolId

• `Private` `Readonly` **protocolId**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:27

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:35

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:33

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:39

___

### retransmitMessage

• `Private` **retransmitMessage**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:48

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:38

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:37

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:36

___

### session

• `Readonly` **session**: [`Session`](../interfaces/exports_session.Session.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:19

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:50

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:49

___

### nextMessage

▸ **nextMessage**(): `Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Returns

`Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:44

___

### onMessageReceived

▸ **onMessageReceived**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:42

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

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:43

___

### waitFor

▸ **waitFor**(`messageType`): `Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:45

___

### fromInitialMessage

▸ `Static` **fromInitialMessage**<`ContextT`\>(`channel`, `messageCounter`, `initialMessage`, `closeCallback`): [`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `initialMessage` | [`Message`](../interfaces/exports_codec.Message.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:29

___

### initiate

▸ `Static` **initiate**<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `messageCounter`, `closeCallback`): [`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/MessageExchange.d.ts:30
