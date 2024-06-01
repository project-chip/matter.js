[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / MessageExchange

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
| `session` | [`Session`](../../session/classes/Session.md)\<`ContextT`\> |
| `channel` | [`MessageChannel`](MessageChannel.md)\<`ContextT`\> |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../../datatype/README.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../../datatype/README.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:60

## Properties

### activeIntervalMs

> `private` `readonly` **activeIntervalMs**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:47

***

### activeThresholdMs

> `private` `readonly` **activeThresholdMs**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:49

***

### channel

> `readonly` **channel**: [`MessageChannel`](MessageChannel.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:37

***

### closeCallback

> `private` `readonly` **closeCallback**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:44

***

### closeInternal

> `private` **closeInternal**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:76

***

### closeTimer

> `private` **closeTimer**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:58

***

### exchangeId

> `private` `readonly` **exchangeId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:42

***

### getResubmissionBackOffTime

> `private` **getResubmissionBackOffTime**: `any`

#### See

MatterSpecification.v10.Core, section 4.11.2.1

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:67

***

### idleIntervalMs

> `private` `readonly` **idleIntervalMs**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:48

***

### isInitiator

> `readonly` **isInitiator**: `boolean`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:38

***

### messagesQueue

> `private` `readonly` **messagesQueue**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:51

***

### nodeId

> `private` `readonly` **nodeId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:40

***

### peerNodeId

> `private` `readonly` **peerNodeId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:41

***

### peerSessionId

> `private` `readonly` **peerSessionId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:39

***

### protocolId

> `private` `readonly` **protocolId**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:43

***

### receivedMessageAckTimer

> `private` **receivedMessageAckTimer**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:53

***

### receivedMessageToAck

> `private` **receivedMessageToAck**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:52

***

### retransmissionRetries

> `private` `readonly` **retransmissionRetries**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:50

***

### retransmissionTimer

> `private` **retransmissionTimer**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:57

***

### retransmitMessage

> `private` **retransmitMessage**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:68

***

### sentMessageAckFailure

> `private` **sentMessageAckFailure**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:56

***

### sentMessageAckSuccess

> `private` **sentMessageAckSuccess**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:55

***

### sentMessageToAck

> `private` **sentMessageToAck**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:54

***

### session

> `readonly` **session**: [`Session`](../../session/classes/Session.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:36

***

### timedInteractionTimer

> `private` **timedInteractionTimer**: `any`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:59

## Methods

### clearTimedInteraction()

> **clearTimedInteraction**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:71

***

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:75

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:69

***

### hasActiveTimedInteraction()

> **hasActiveTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:73

***

### hasExpiredTimedInteraction()

> **hasExpiredTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:74

***

### hasTimedInteraction()

> **hasTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:72

***

### nextMessage()

> **nextMessage**(): `Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Returns

`Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:64

***

### onMessageReceived()

> **onMessageReceived**(`message`, `isDuplicate`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |
| `isDuplicate`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:62

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

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:63

***

### sendStandaloneAckForMessage()

> **sendStandaloneAckForMessage**(`message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:61

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

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:70

***

### waitFor()

> **waitFor**(`messageType`, `timeoutMs`?): `Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `timeoutMs`? | `number` |

#### Returns

`Promise`\<[`Message`](../../codec/interfaces/Message.md)\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:65

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
| `initialMessage` | [`Message`](../../codec/interfaces/Message.md) |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](MessageExchange.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:45

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

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:46
