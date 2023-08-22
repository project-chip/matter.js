[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageExchange

# Class: MessageExchange<ContextT\>

[protocol/export](../modules/protocol_export.md).MessageExchange

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](protocol_export.MessageExchange.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](protocol_export.MessageExchange.md#activeretransmissiontimeoutms)
- [channel](protocol_export.MessageExchange.md#channel)
- [closeCallback](protocol_export.MessageExchange.md#closecallback)
- [closeTimer](protocol_export.MessageExchange.md#closetimer)
- [exchangeId](protocol_export.MessageExchange.md#exchangeid)
- [idleRetransmissionTimeoutMs](protocol_export.MessageExchange.md#idleretransmissiontimeoutms)
- [isInitiator](protocol_export.MessageExchange.md#isinitiator)
- [messageCounter](protocol_export.MessageExchange.md#messagecounter)
- [messagesQueue](protocol_export.MessageExchange.md#messagesqueue)
- [nodeId](protocol_export.MessageExchange.md#nodeid)
- [peerNodeId](protocol_export.MessageExchange.md#peernodeid)
- [peerSessionId](protocol_export.MessageExchange.md#peersessionid)
- [protocolId](protocol_export.MessageExchange.md#protocolid)
- [receivedMessageToAck](protocol_export.MessageExchange.md#receivedmessagetoack)
- [retransmissionRetries](protocol_export.MessageExchange.md#retransmissionretries)
- [retransmissionTimer](protocol_export.MessageExchange.md#retransmissiontimer)
- [sentMessageAckFailure](protocol_export.MessageExchange.md#sentmessageackfailure)
- [sentMessageAckSuccess](protocol_export.MessageExchange.md#sentmessageacksuccess)
- [sentMessageToAck](protocol_export.MessageExchange.md#sentmessagetoack)
- [session](protocol_export.MessageExchange.md#session)

### Methods

- [close](protocol_export.MessageExchange.md#close)
- [closeInternal](protocol_export.MessageExchange.md#closeinternal)
- [destroy](protocol_export.MessageExchange.md#destroy)
- [getResubmissionBackOffTime](protocol_export.MessageExchange.md#getresubmissionbackofftime)
- [nextMessage](protocol_export.MessageExchange.md#nextmessage)
- [onMessageReceived](protocol_export.MessageExchange.md#onmessagereceived)
- [retransmitMessage](protocol_export.MessageExchange.md#retransmitmessage)
- [send](protocol_export.MessageExchange.md#send)
- [waitFor](protocol_export.MessageExchange.md#waitfor)
- [fromInitialMessage](protocol_export.MessageExchange.md#frominitialmessage)
- [initiate](protocol_export.MessageExchange.md#initiate)

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
| `session` | [`Session`](../interfaces/session_export.Session.md)<`ContextT`\> |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](protocol_export.MessageCounter.md) |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `void` |

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:104](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L104)

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:93](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L93)

___

### channel

• `Readonly` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:106](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L106)

___

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:114](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L114)

___

### closeTimer

• `Private` **closeTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:102](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L102)

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:112](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L112)

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:94](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L94)

___

### isInitiator

• `Private` `Readonly` **isInitiator**: `boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:108](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L108)

___

### messageCounter

• `Private` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L107)

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: [`Queue`](util_export.Queue.md)<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:96](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L96)

___

### nodeId

• `Private` `Readonly` **nodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:110](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L110)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L111)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L109)

___

### protocolId

• `Private` `Readonly` **protocolId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:113](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L113)

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `undefined` \| [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:97](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L97)

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:95](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L95)

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:101](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L101)

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `undefined` \| (`error?`: `Error`) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:100](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L100)

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `undefined` \| (...`args`: `any`[]) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L99)

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `undefined` \| [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:98](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L98)

___

### session

• `Readonly` **session**: [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L105)

## Methods

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:327](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L327)

___

### closeInternal

▸ `Private` **closeInternal**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:340](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L340)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:316](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L316)

___

### getResubmissionBackOffTime

▸ `Private` **getResubmissionBackOffTime**(`retransmissionCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `retransmissionCount` | `number` |

#### Returns

`number`

**`See`**

[MatterCoreSpecificationV1_0](../interfaces/spec_export.MatterCoreSpecificationV1_0.md), section 4.11.2.1

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:272](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L272)

___

### nextMessage

▸ **nextMessage**(): `Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Returns

`Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:253](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L253)

___

### onMessageReceived

▸ **onMessageReceived**(`message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:133](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L133)

___

### retransmitMessage

▸ `Private` **retransmitMessage**(`message`, `retransmissionCount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |
| `retransmissionCount` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:284](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L284)

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

[packages/matter.js/src/protocol/MessageExchange.ts:193](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L193)

___

### waitFor

▸ **waitFor**(`messageType`): `Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:257](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L257)

___

### fromInitialMessage

▸ `Static` **fromInitialMessage**<`ContextT`\>(`channel`, `messageCounter`, `initialMessage`, `closeCallback`): [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](protocol_export.MessageCounter.md) |
| `initialMessage` | [`Message`](../interfaces/codec_export.Message.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:50](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L50)

___

### initiate

▸ `Static` **initiate**<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `messageCounter`, `closeCallback`): [`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `messageCounter` | [`MessageCounter`](protocol_export.MessageCounter.md) |
| `closeCallback` | () => `void` |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:71](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/MessageExchange.ts#L71)
