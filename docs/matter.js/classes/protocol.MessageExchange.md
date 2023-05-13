[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol](../modules/protocol.md) / MessageExchange

# Class: MessageExchange<ContextT\>

[protocol](../modules/protocol.md).MessageExchange

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](protocol.MessageExchange.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](protocol.MessageExchange.md#activeretransmissiontimeoutms)
- [channel](protocol.MessageExchange.md#channel)
- [closeCallback](protocol.MessageExchange.md#closecallback)
- [exchangeId](protocol.MessageExchange.md#exchangeid)
- [idleRetransmissionTimeoutMs](protocol.MessageExchange.md#idleretransmissiontimeoutms)
- [isInitiator](protocol.MessageExchange.md#isinitiator)
- [messageCounter](protocol.MessageExchange.md#messagecounter)
- [messagesQueue](protocol.MessageExchange.md#messagesqueue)
- [nodeId](protocol.MessageExchange.md#nodeid)
- [peerNodeId](protocol.MessageExchange.md#peernodeid)
- [peerSessionId](protocol.MessageExchange.md#peersessionid)
- [protocolId](protocol.MessageExchange.md#protocolid)
- [receivedMessageToAck](protocol.MessageExchange.md#receivedmessagetoack)
- [retransmissionRetries](protocol.MessageExchange.md#retransmissionretries)
- [retransmissionTimer](protocol.MessageExchange.md#retransmissiontimer)
- [sentMessageAckFailure](protocol.MessageExchange.md#sentmessageackfailure)
- [sentMessageAckSuccess](protocol.MessageExchange.md#sentmessageacksuccess)
- [sentMessageToAck](protocol.MessageExchange.md#sentmessagetoack)
- [session](protocol.MessageExchange.md#session)

### Methods

- [close](protocol.MessageExchange.md#close)
- [closeInternal](protocol.MessageExchange.md#closeinternal)
- [getResubmissionBackOffTime](protocol.MessageExchange.md#getresubmissionbackofftime)
- [nextMessage](protocol.MessageExchange.md#nextmessage)
- [onMessageReceived](protocol.MessageExchange.md#onmessagereceived)
- [retransmitMessage](protocol.MessageExchange.md#retransmitmessage)
- [send](protocol.MessageExchange.md#send)
- [waitFor](protocol.MessageExchange.md#waitfor)
- [fromInitialMessage](protocol.MessageExchange.md#frominitialmessage)
- [initiate](protocol.MessageExchange.md#initiate)

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
| `session` | [`Session`](../interfaces/session.Session.md)<`ContextT`\> |
| `channel` | [`MessageChannel`](protocol.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](protocol.MessageCounter.md) |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](datatype.NodeId.md) |
| `peerNodeId` | `undefined` \| [`NodeId`](datatype.NodeId.md) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `void` |

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:104](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L104)

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:94](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L94)

___

### channel

• `Readonly` **channel**: [`MessageChannel`](protocol.MessageChannel.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:106](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L106)

___

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:114](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L114)

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:112](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L112)

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:95](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L95)

___

### isInitiator

• `Private` `Readonly` **isInitiator**: `boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:108](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L108)

___

### messageCounter

• `Private` `Readonly` **messageCounter**: [`MessageCounter`](protocol.MessageCounter.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L107)

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: [`Queue`](util.Queue.md)<[`Message`](../interfaces/codec.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:97](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L97)

___

### nodeId

• `Private` `Readonly` **nodeId**: `undefined` \| [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:110](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L110)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `undefined` \| [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:111](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L111)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:109](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L109)

___

### protocolId

• `Private` `Readonly` **protocolId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:113](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L113)

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `undefined` \| [`Message`](../interfaces/codec.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L98)

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:96](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L96)

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `undefined` \| [`Timer`](../interfaces/time.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:102](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L102)

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `undefined` \| (`error?`: `Error`) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:101](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L101)

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `undefined` \| (...`args`: `any`[]) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:100](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L100)

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `undefined` \| [`Message`](../interfaces/codec.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:99](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L99)

___

### session

• `Readonly` **session**: [`Session`](../interfaces/session.Session.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:105](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L105)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:280](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L280)

___

### closeInternal

▸ `Private` **closeInternal**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:290](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L290)

___

### getResubmissionBackOffTime

▸ `Private` **getResubmissionBackOffTime**(`retransmissionCount`): `number`

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec.MatterCoreSpecificationV1_0.md), section 4.11.2.1

#### Parameters

| Name | Type |
| :------ | :------ |
| `retransmissionCount` | `number` |

#### Returns

`number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:247](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L247)

___

### nextMessage

▸ **nextMessage**(): `Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Returns

`Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:234](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L234)

___

### onMessageReceived

▸ **onMessageReceived**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:129](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L129)

___

### retransmitMessage

▸ `Private` **retransmitMessage**(`message`, `retransmissionCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec.Message.md) |
| `retransmissionCount` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:252](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L252)

___

### send

▸ **send**(`messageType`, `payload`, `expectAckOnly?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `messageType` | `number` | `undefined` |
| `payload` | `Uint8Array` | `undefined` |
| `expectAckOnly` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:182](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L182)

___

### waitFor

▸ **waitFor**(`messageType`): `Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:238](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L238)

___

### fromInitialMessage

▸ `Static` **fromInitialMessage**<`ContextT`\>(`channel`, `messageCounter`, `initialMessage`, `closeCallback`): [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](protocol.MessageCounter.md) |
| `initialMessage` | [`Message`](../interfaces/codec.Message.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L50)

___

### initiate

▸ `Static` **initiate**<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `messageCounter`, `closeCallback`): [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol.MessageChannel.md)<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `messageCounter` | [`MessageCounter`](protocol.MessageCounter.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/MessageExchange.ts#L72)
