[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / MessageExchange

# Class: MessageExchange\<ContextT\>

[\<internal\>](../modules/internal_.md).MessageExchange

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Table of contents

### Constructors

- [constructor](internal_.MessageExchange.md#constructor)

### Properties

- [activeIntervalMs](internal_.MessageExchange.md#activeintervalms)
- [activeThresholdMs](internal_.MessageExchange.md#activethresholdms)
- [channel](internal_.MessageExchange.md#channel)
- [closeCallback](internal_.MessageExchange.md#closecallback)
- [closeInternal](internal_.MessageExchange.md#closeinternal)
- [closeTimer](internal_.MessageExchange.md#closetimer)
- [exchangeId](internal_.MessageExchange.md#exchangeid)
- [getResubmissionBackOffTime](internal_.MessageExchange.md#getresubmissionbackofftime)
- [idleIntervalMs](internal_.MessageExchange.md#idleintervalms)
- [isInitiator](internal_.MessageExchange.md#isinitiator)
- [messagesQueue](internal_.MessageExchange.md#messagesqueue)
- [nodeId](internal_.MessageExchange.md#nodeid)
- [peerNodeId](internal_.MessageExchange.md#peernodeid)
- [peerSessionId](internal_.MessageExchange.md#peersessionid)
- [protocolId](internal_.MessageExchange.md#protocolid)
- [receivedMessageAckTimer](internal_.MessageExchange.md#receivedmessageacktimer)
- [receivedMessageToAck](internal_.MessageExchange.md#receivedmessagetoack)
- [retransmissionRetries](internal_.MessageExchange.md#retransmissionretries)
- [retransmissionTimer](internal_.MessageExchange.md#retransmissiontimer)
- [retransmitMessage](internal_.MessageExchange.md#retransmitmessage)
- [sentMessageAckFailure](internal_.MessageExchange.md#sentmessageackfailure)
- [sentMessageAckSuccess](internal_.MessageExchange.md#sentmessageacksuccess)
- [sentMessageToAck](internal_.MessageExchange.md#sentmessagetoack)
- [session](internal_.MessageExchange.md#session)
- [timedInteractionTimer](internal_.MessageExchange.md#timedinteractiontimer)

### Methods

- [clearTimedInteraction](internal_.MessageExchange.md#cleartimedinteraction)
- [close](internal_.MessageExchange.md#close)
- [destroy](internal_.MessageExchange.md#destroy)
- [hasActiveTimedInteraction](internal_.MessageExchange.md#hasactivetimedinteraction)
- [hasExpiredTimedInteraction](internal_.MessageExchange.md#hasexpiredtimedinteraction)
- [hasTimedInteraction](internal_.MessageExchange.md#hastimedinteraction)
- [nextMessage](internal_.MessageExchange.md#nextmessage)
- [onMessageReceived](internal_.MessageExchange.md#onmessagereceived)
- [send](internal_.MessageExchange.md#send)
- [sendStandaloneAckForMessage](internal_.MessageExchange.md#sendstandaloneackformessage)
- [startTimedInteraction](internal_.MessageExchange.md#starttimedinteraction)
- [waitFor](internal_.MessageExchange.md#waitfor)
- [fromInitialMessage](internal_.MessageExchange.md#frominitialmessage)
- [initiate](internal_.MessageExchange.md#initiate)

## Constructors

### constructor

• **new MessageExchange**\<`ContextT`\>(`session`, `channel`, `isInitiator`, `peerSessionId`, `nodeId`, `peerNodeId`, `exchangeId`, `protocolId`, `closeCallback`): [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `session` | [`Session`](internal_.Session.md)\<`ContextT`\> |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)\<`ContextT`\> |
| `isInitiator` | `boolean` |
| `peerSessionId` | `number` |
| `nodeId` | `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) |
| `peerNodeId` | `undefined` \| [`NodeId`](../modules/internal_.md#nodeid) |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:60

## Properties

### activeIntervalMs

• `Private` `Readonly` **activeIntervalMs**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:47

___

### activeThresholdMs

• `Private` `Readonly` **activeThresholdMs**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:49

___

### channel

• `Readonly` **channel**: [`MessageChannel`](internal_.MessageChannel.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:37

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:44

___

### closeInternal

• `Private` **closeInternal**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:76

___

### closeTimer

• `Private` **closeTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:58

___

### exchangeId

• `Private` `Readonly` **exchangeId**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:42

___

### getResubmissionBackOffTime

• `Private` **getResubmissionBackOffTime**: `any`

**`See`**

MatterSpecification.v10.Core, section 4.11.2.1

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:67

___

### idleIntervalMs

• `Private` `Readonly` **idleIntervalMs**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:48

___

### isInitiator

• `Readonly` **isInitiator**: `boolean`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:38

___

### messagesQueue

• `Private` `Readonly` **messagesQueue**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:51

___

### nodeId

• `Private` `Readonly` **nodeId**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:40

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:41

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:39

___

### protocolId

• `Private` `Readonly` **protocolId**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:43

___

### receivedMessageAckTimer

• `Private` **receivedMessageAckTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:53

___

### receivedMessageToAck

• `Private` **receivedMessageToAck**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:52

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:50

___

### retransmissionTimer

• `Private` **retransmissionTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:57

___

### retransmitMessage

• `Private` **retransmitMessage**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:68

___

### sentMessageAckFailure

• `Private` **sentMessageAckFailure**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:56

___

### sentMessageAckSuccess

• `Private` **sentMessageAckSuccess**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:55

___

### sentMessageToAck

• `Private` **sentMessageToAck**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:54

___

### session

• `Readonly` **session**: [`Session`](internal_.Session.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:36

___

### timedInteractionTimer

• `Private` **timedInteractionTimer**: `any`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:59

## Methods

### clearTimedInteraction

▸ **clearTimedInteraction**(): `void`

#### Returns

`void`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:71

___

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:75

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:69

___

### hasActiveTimedInteraction

▸ **hasActiveTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:73

___

### hasExpiredTimedInteraction

▸ **hasExpiredTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:74

___

### hasTimedInteraction

▸ **hasTimedInteraction**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:72

___

### nextMessage

▸ **nextMessage**(): `Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Returns

`Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:64

___

### onMessageReceived

▸ **onMessageReceived**(`message`, `isDuplicate?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |
| `isDuplicate?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:62

___

### send

▸ **send**(`messageType`, `payload`, `options?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options?` | [`ExchangeSendOptions`](../modules/internal_.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:63

___

### sendStandaloneAckForMessage

▸ **sendStandaloneAckForMessage**(`message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:61

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

matter.js/dist/esm/protocol/MessageExchange.d.ts:70

___

### waitFor

▸ **waitFor**(`messageType`, `timeoutMs?`): `Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `timeoutMs?` | `number` |

#### Returns

`Promise`\<[`Message`](../interfaces/internal_.Message.md)\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:65

___

### fromInitialMessage

▸ **fromInitialMessage**\<`ContextT`\>(`channel`, `initialMessage`, `closeCallback`): [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)\<`ContextT`\> |
| `initialMessage` | [`Message`](../interfaces/internal_.Message.md) |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:45

___

### initiate

▸ **initiate**\<`ContextT`\>(`channel`, `exchangeId`, `protocolId`, `closeCallback`): [`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | [`MessageChannel`](internal_.MessageChannel.md)\<`ContextT`\> |
| `exchangeId` | `number` |
| `protocolId` | `number` |
| `closeCallback` | () => `Promise`\<`void`\> |

#### Returns

[`MessageExchange`](internal_.MessageExchange.md)\<`ContextT`\>

#### Defined in

matter.js/dist/esm/protocol/MessageExchange.d.ts:46
