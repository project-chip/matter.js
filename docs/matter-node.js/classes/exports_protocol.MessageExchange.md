[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageExchange

# Class: MessageExchange\<ContextT\>

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
- [timedInteractionTimer](exports_protocol.MessageExchange.md#timedinteractiontimer)

### Methods

- [clearTimedInteraction](exports_protocol.MessageExchange.md#cleartimedinteraction)
- [close](exports_protocol.MessageExchange.md#close)
- [destroy](exports_protocol.MessageExchange.md#destroy)
- [hasActiveTimedInteraction](exports_protocol.MessageExchange.md#hasactivetimedinteraction)
- [hasExpiredTimedInteraction](exports_protocol.MessageExchange.md#hasexpiredtimedinteraction)
- [hasTimedInteraction](exports_protocol.MessageExchange.md#hastimedinteraction)
- [nextMessage](exports_protocol.MessageExchange.md#nextmessage)
- [onMessageReceived](exports_protocol.MessageExchange.md#onmessagereceived)
- [send](exports_protocol.MessageExchange.md#send)
- [startTimedInteraction](exports_protocol.MessageExchange.md#starttimedinteraction)
- [waitFor](exports_protocol.MessageExchange.md#waitfor)
- [fromInitialMessage](exports_protocol.MessageExchange.md#frominitialmessage)
- [initiate](exports_protocol.MessageExchange.md#initiate)

## Constructors

### constructor

• **new MessageExchange**\<`ContextT`\>(`session`, `channel`, `messageCounter`, `isInitiator`, `peerSessionId`, `nodeId`, `peerNodeId`, `exchangeId`, `protocolId`, `closeCallback`): [`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](../interfaces/exports_session.Session.md)\<`ContextT`\> |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)\<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:57

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:46

___

### channel

• `Readonly` **channel**: [`MessageChannel`](exports_protocol.MessageChannel.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:35

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:43

___

### closeInternal

• `Private` **closeInternal**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:72

___

### closeTimer

• `Private` **closeTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:55

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:41

___

### getResubmissionBackOffTime

• `Private` **getResubmissionBackOffTime**: `any`

**`See`**

MatterCoreSpecificationV1_0, section 4.11.2.1

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:63

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:47

___

### isInitiator

• `Private` `Readonly` **isInitiator**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:37

___

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:36

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:49

___

### nodeId

• `Private` `Readonly` **nodeId**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:39

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:40

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:38

___

### protocolId

• `Private` `Readonly` **protocolId**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:42

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:50

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:48

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:54

___

### retransmitMessage

• `Private` **retransmitMessage**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:64

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:53

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:52

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:51

___

### session

• `Readonly` **session**: [`Session`](../interfaces/exports_session.Session.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:34

___

### timedInteractionTimer

• `Private` **timedInteractionTimer**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:56

## Methods

### clearTimedInteraction

▸ **clearTimedInteraction**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:67

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:71

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:65

___

### hasActiveTimedInteraction

▸ **hasActiveTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:69

___

### hasExpiredTimedInteraction

▸ **hasExpiredTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:70

___

### hasTimedInteraction

▸ **hasTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:68

___

### nextMessage

▸ **nextMessage**(): `Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Returns

`Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:60

___

### onMessageReceived

▸ **onMessageReceived**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:58

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/exports_protocol.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:59

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

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:66

___

### waitFor

▸ **waitFor**(`messageType`, `timeoutMs?`): `Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `timeoutMs?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:61

___

### fromInitialMessage

▸ **fromInitialMessage**\<`ContextT`\>(`channel`, `messageCounter`, `initialMessage`, `closeCallback`): [`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)\<`ContextT`\> |
| `messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `initialMessage` | [`Message`](../interfaces/exports_codec.Message.md) |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:44

___

### initiate

▸ **initiate**\<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `messageCounter`, `closeCallback`): [`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](exports_protocol.MessageChannel.md)\<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `messageCounter` | [`MessageCounter`](exports_protocol.MessageCounter.md) |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](exports_protocol.MessageExchange.md)\<`ContextT`\>

#### Defined in

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:45
