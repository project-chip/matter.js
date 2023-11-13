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
- [timedInteractionTimer](protocol_export.MessageExchange.md#timedinteractiontimer)

### Methods

- [clearTimedInteraction](protocol_export.MessageExchange.md#cleartimedinteraction)
- [close](protocol_export.MessageExchange.md#close)
- [closeInternal](protocol_export.MessageExchange.md#closeinternal)
- [destroy](protocol_export.MessageExchange.md#destroy)
- [getResubmissionBackOffTime](protocol_export.MessageExchange.md#getresubmissionbackofftime)
- [hasActiveTimedInteraction](protocol_export.MessageExchange.md#hasactivetimedinteraction)
- [hasExpiredTimedInteraction](protocol_export.MessageExchange.md#hasexpiredtimedinteraction)
- [hasTimedInteraction](protocol_export.MessageExchange.md#hastimedinteraction)
- [nextMessage](protocol_export.MessageExchange.md#nextmessage)
- [onMessageReceived](protocol_export.MessageExchange.md#onmessagereceived)
- [retransmitMessage](protocol_export.MessageExchange.md#retransmitmessage)
- [send](protocol_export.MessageExchange.md#send)
- [startTimedInteraction](protocol_export.MessageExchange.md#starttimedinteraction)
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
| `closeCallback` | () => `Promise`<`void`\> |

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:125](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L125)

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:113](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L113)

___

### channel

• `Readonly` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:127](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L127)

___

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:135](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L135)

___

### closeTimer

• `Private` **closeTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:122](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L122)

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:133](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L133)

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:114](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L114)

___

### isInitiator

• `Private` `Readonly` **isInitiator**: `boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:129](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L129)

___

### messageCounter

• `Private` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:128](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L128)

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: [`Queue`](util_export.Queue.md)<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:116](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L116)

___

### nodeId

• `Private` `Readonly` **nodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:131](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L131)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:132](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L132)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:130](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L130)

___

### protocolId

• `Private` `Readonly` **protocolId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:134](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L134)

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `undefined` \| [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:117](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L117)

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:115](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L115)

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:121](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L121)

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `undefined` \| (`error?`: `Error`) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:120](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L120)

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `undefined` \| (...`args`: `any`[]) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:119](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L119)

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `undefined` \| [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:118](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L118)

___

### session

• `Readonly` **session**: [`Session`](../interfaces/session_export.Session.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:126](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L126)

___

### timedInteractionTimer

• `Private` **timedInteractionTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:123](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L123)

## Methods

### clearTimedInteraction

▸ **clearTimedInteraction**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:376](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L376)

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:396](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L396)

___

### closeInternal

▸ `Private` **closeInternal**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:411](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L411)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:347](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L347)

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

[packages/matter.js/src/protocol/MessageExchange.ts:300](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L300)

___

### hasActiveTimedInteraction

▸ **hasActiveTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:388](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L388)

___

### hasExpiredTimedInteraction

▸ **hasExpiredTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:392](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L392)

___

### hasTimedInteraction

▸ **hasTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:384](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L384)

___

### nextMessage

▸ **nextMessage**(): `Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Returns

`Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:281](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L281)

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

[packages/matter.js/src/protocol/MessageExchange.ts:156](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L156)

___

### retransmitMessage

▸ `Private` **retransmitMessage**(`message`, `retransmissionCount`, `notTimeoutBeforeTimeMs?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |
| `retransmissionCount` | `number` |
| `notTimeoutBeforeTimeMs?` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:312](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L312)

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/protocol_export.md#exchangesendoptions) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:216](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L216)

___

### startTimedInteraction

▸ **startTimedInteraction**(`timeoutMs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `timeoutMs` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:358](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L358)

___

### waitFor

▸ **waitFor**(`messageType`, `timeoutMs?`): `Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `messageType` | `number` | `undefined` |
| `timeoutMs` | `number` | `60_000` |

#### Returns

`Promise`<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:285](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L285)

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
| `closeCallback` | () => `Promise`<`void`\> |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:70](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L70)

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
| `closeCallback` | () => `Promise`<`void`\> |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:91](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/protocol/MessageExchange.ts#L91)
