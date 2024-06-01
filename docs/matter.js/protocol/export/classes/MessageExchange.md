[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / MessageExchange

# Class: MessageExchange\<ContextT\>

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Constructors

### new MessageExchange()

> **new MessageExchange**\<`ContextT`\>(`session`, `channel`, `isInitiator`, `peerSessionId`, `nodeId`, `peerNodeId`, `exchangeId`, `protocolId`, `closeCallback`): [`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `session` | [`Session`](../../../session/export/classes/Session.md)\<`ContextT`\> |
| `channel` | [`MessageChannel`](MessageChannel.md)\<`ContextT`\> |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:144](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L144)

## Properties

### activeIntervalMs

> `private` `readonly` **activeIntervalMs**: `number`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:121](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L121)

***

### activeThresholdMs

> `private` `readonly` **activeThresholdMs**: `number`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L123)

***

### channel

> `readonly` **channel**: [`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:146](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L146)

***

### closeCallback()

> `private` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:153](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L153)

***

### closeTimer

> `private` **closeTimer**: `undefined` \| [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L141)

***

### exchangeId

> `private` `readonly` **exchangeId**: `number`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:151](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L151)

***

### idleIntervalMs

> `private` `readonly` **idleIntervalMs**: `number`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L122)

***

### isInitiator

> `readonly` **isInitiator**: `boolean`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:147](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L147)

***

### messagesQueue

> `private` `readonly` **messagesQueue**: [`Queue`](../../../util/export/classes/Queue.md)\<[`Message`](../../../codec/export/interfaces/Message.md)\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:125](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L125)

***

### nodeId

> `private` `readonly` **nodeId**: `undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:149](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L149)

***

### peerNodeId

> `private` `readonly` **peerNodeId**: `undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:150](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L150)

***

### peerSessionId

> `private` `readonly` **peerSessionId**: `number`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L148)

***

### protocolId

> `private` `readonly` **protocolId**: `number`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:152](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L152)

***

### receivedMessageAckTimer

> `private` **receivedMessageAckTimer**: [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:127](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L127)

***

### receivedMessageToAck

> `private` **receivedMessageToAck**: `undefined` \| [`Message`](../../../codec/export/interfaces/Message.md)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L126)

***

### retransmissionRetries

> `private` `readonly` **retransmissionRetries**: `number`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:124](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L124)

***

### retransmissionTimer

> `private` **retransmissionTimer**: `undefined` \| [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:140](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L140)

***

### sentMessageAckFailure

> `private` **sentMessageAckFailure**: `undefined` \| (`error`?) => `void`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:139](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L139)

***

### sentMessageAckSuccess

> `private` **sentMessageAckSuccess**: `undefined` \| (...`args`) => `void`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:138](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L138)

***

### sentMessageToAck

> `private` **sentMessageToAck**: `undefined` \| [`Message`](../../../codec/export/interfaces/Message.md)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:137](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L137)

***

### session

> `readonly` **session**: [`Session`](../../../session/export/classes/Session.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:145](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L145)

***

### timedInteractionTimer

> `private` **timedInteractionTimer**: `undefined` \| [`Timer`](../../../time/export/interfaces/Timer.md)

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:142](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L142)

## Methods

### clearTimedInteraction()

> **clearTimedInteraction**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:445](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L445)

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:465](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L465)

***

### closeInternal()

> `private` **closeInternal**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:491](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L491)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:413](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L413)

***

### getResubmissionBackOffTime()

> `private` **getResubmissionBackOffTime**(`retransmissionCount`): `number`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `retransmissionCount` | `number` |

#### Returns

`number`

#### See

MatterSpecification.v10.Core, section 4.11.2.1

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:357](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L357)

***

### hasActiveTimedInteraction()

> **hasActiveTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:457](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L457)

***

### hasExpiredTimedInteraction()

> **hasExpiredTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:461](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L461)

***

### hasTimedInteraction()

> **hasTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:453](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L453)

***

### nextMessage()

> **nextMessage**(): `Promise`\<[`Message`](../../../codec/export/interfaces/Message.md)\>

#### Returns

`Promise`\<[`Message`](../../../codec/export/interfaces/Message.md)\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:338](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L338)

***

### onMessageReceived()

> **onMessageReceived**(`message`, `isDuplicate`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) | `undefined` |
| `isDuplicate` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:185](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L185)

***

### retransmitMessage()

> `private` **retransmitMessage**(`message`, `retransmissionCount`, `notTimeoutBeforeTimeMs`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `retransmissionCount` | `number` |
| `notTimeoutBeforeTimeMs`? | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:367](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L367)

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:256](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L256)

***

### sendStandaloneAckForMessage()

> **sendStandaloneAckForMessage**(`message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:175](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L175)

***

### startTimedInteraction()

> **startTimedInteraction**(`timeoutMs`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `timeoutMs` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:427](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L427)

***

### waitFor()

> **waitFor**(`messageType`, `timeoutMs`): `Promise`\<[`Message`](../../../codec/export/interfaces/Message.md)\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `messageType` | `number` | `undefined` |
| `timeoutMs` | `number` | `180_000` |

#### Returns

`Promise`\<[`Message`](../../../codec/export/interfaces/Message.md)\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:342](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L342)

***

### fromInitialMessage()

> `static` **fromInitialMessage**\<`ContextT`\>(`channel`, `initialMessage`, `closeCallback`): [`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Type parameter |
| :------ |
| `ContextT` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](MessageChannel.md)\<`ContextT`\> |
| `initialMessage` | [`Message`](../../../codec/export/interfaces/Message.md) |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L82)

***

### initiate()

> `static` **initiate**\<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `closeCallback`): [`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Type parameter |
| :------ |
| `ContextT` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](MessageChannel.md)\<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:101](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L101)
