[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageExchange

# Class: MessageExchange\<ContextT\>

[protocol/export](../modules/protocol_export.md).MessageExchange

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](protocol_export.MessageExchange.md#constructor)

### Properties

- [activeIntervalMs](protocol_export.MessageExchange.md#activeintervalms)
- [activeThresholdMs](protocol_export.MessageExchange.md#activethresholdms)
- [channel](protocol_export.MessageExchange.md#channel)
- [closeCallback](protocol_export.MessageExchange.md#closecallback)
- [closeTimer](protocol_export.MessageExchange.md#closetimer)
- [exchangeId](protocol_export.MessageExchange.md#exchangeid)
- [idleIntervalMs](protocol_export.MessageExchange.md#idleintervalms)
- [isInitiator](protocol_export.MessageExchange.md#isinitiator)
- [messagesQueue](protocol_export.MessageExchange.md#messagesqueue)
- [nodeId](protocol_export.MessageExchange.md#nodeid)
- [peerNodeId](protocol_export.MessageExchange.md#peernodeid)
- [peerSessionId](protocol_export.MessageExchange.md#peersessionid)
- [protocolId](protocol_export.MessageExchange.md#protocolid)
- [receivedMessageAckTimer](protocol_export.MessageExchange.md#receivedmessageacktimer)
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
- [sendStandaloneAckForMessage](protocol_export.MessageExchange.md#sendstandaloneackformessage)
- [startTimedInteraction](protocol_export.MessageExchange.md#starttimedinteraction)
- [waitFor](protocol_export.MessageExchange.md#waitfor)
- [fromInitialMessage](protocol_export.MessageExchange.md#frominitialmessage)
- [initiate](protocol_export.MessageExchange.md#initiate)

## Constructors

### constructor

• **new MessageExchange**\<`ContextT`\>(`session`, `channel`, `isInitiator`, `peerSessionId`, `nodeId`, `peerNodeId`, `exchangeId`, `protocolId`, `closeCallback`): [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](session_export.Session.md)\<`ContextT`\> |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\> |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:144](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L144)

## Properties

### activeIntervalMs

• `Private` `Readonly` **activeIntervalMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:121](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L121)

___

### activeThresholdMs

• `Private` `Readonly` **activeThresholdMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:123](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L123)

___

### channel

• `Readonly` **channel**: [`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:146](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L146)

___

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L153)

___

### closeTimer

• `Private` **closeTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L141)

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:151](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L151)

___

### idleIntervalMs

• `Private` `Readonly` **idleIntervalMs**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:122](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L122)

___

### isInitiator

• `Readonly` **isInitiator**: `boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:147](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L147)

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: [`Queue`](util_export.Queue.md)\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:125](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L125)

___

### nodeId

• `Private` `Readonly` **nodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:149](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L149)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:150](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L150)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L148)

___

### protocolId

• `Private` `Readonly` **protocolId**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:152](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L152)

___

### receivedMessageAckTimer

• `Private` **receivedMessageAckTimer**: [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:127](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L127)

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `undefined` \| [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:126](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L126)

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:124](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L124)

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:140](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L140)

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `undefined` \| (`error?`: `Error`) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:139](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L139)

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `undefined` \| (...`args`: `any`[]) => `void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L138)

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `undefined` \| [`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:137](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L137)

___

### session

• `Readonly` **session**: [`Session`](session_export.Session.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:145](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L145)

___

### timedInteractionTimer

• `Private` **timedInteractionTimer**: `undefined` \| [`Timer`](../interfaces/time_export.Timer.md)

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:142](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L142)

## Methods

### clearTimedInteraction

▸ **clearTimedInteraction**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:441](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L441)

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:461](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L461)

___

### closeInternal

▸ **closeInternal**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:484](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L484)

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:409](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L409)

___

### getResubmissionBackOffTime

▸ **getResubmissionBackOffTime**(`retransmissionCount`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `retransmissionCount` | `number` |

#### Returns

`number`

**`See`**

MatterSpecification.v10.Core, section 4.11.2.1

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:353](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L353)

___

### hasActiveTimedInteraction

▸ **hasActiveTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:453](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L453)

___

### hasExpiredTimedInteraction

▸ **hasExpiredTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:457](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L457)

___

### hasTimedInteraction

▸ **hasTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:449](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L449)

___

### nextMessage

▸ **nextMessage**(): `Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Returns

`Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:334](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L334)

___

### onMessageReceived

▸ **onMessageReceived**(`message`, `isDuplicate?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `isDuplicate` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:185](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L185)

___

### retransmitMessage

▸ **retransmitMessage**(`message`, `retransmissionCount`, `notTimeoutBeforeTimeMs?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |
| `retransmissionCount` | `number` |
| `notTimeoutBeforeTimeMs?` | `number` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:363](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L363)

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/protocol_export.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:252](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L252)

___

### sendStandaloneAckForMessage

▸ **sendStandaloneAckForMessage**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:175](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L175)

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

[packages/matter.js/src/protocol/MessageExchange.ts:423](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L423)

___

### waitFor

▸ **waitFor**(`messageType`, `timeoutMs?`): `Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `messageType` | `number` | `undefined` |
| `timeoutMs` | `number` | `180_000` |

#### Returns

`Promise`\<[`Message`](../interfaces/codec_export.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:338](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L338)

___

### fromInitialMessage

▸ **fromInitialMessage**\<`ContextT`\>(`channel`, `initialMessage`, `closeCallback`): [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\> |
| `initialMessage` | [`Message`](../interfaces/codec_export.Message.md) |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L82)

___

### initiate

▸ **initiate**\<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `closeCallback`): [`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](protocol_export.MessageChannel.md)\<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](protocol_export.MessageExchange.md)\<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:101](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L101)
