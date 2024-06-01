[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / Session

# Class: `abstract` Session\<T\>

## Extended by

- [`InsecureSession`](InsecureSession.md)
- [`SecureSession`](SecureSession.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new Session()

> **new Session**\<`T`\>(`args`): [`Session`](Session.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `object` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.messageCounter` | [`MessageCounter`](../../../protocol/export/classes/MessageCounter.md) |
| `args.messageReceptionState` | [`MessageReceptionState`](../../../protocol/export/classes/MessageReceptionState.md) |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.setActiveTimestamp` | `boolean` |

#### Returns

[`Session`](Session.md)\<`T`\>

#### Source

[packages/matter.js/src/session/Session.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L50)

## Properties

### activeIntervalMs

> `protected` `readonly` **activeIntervalMs**: `number`

#### Source

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L44)

***

### activeThresholdMs

> `protected` `readonly` **activeThresholdMs**: `number`

#### Source

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L45)

***

### activeTimestamp

> **activeTimestamp**: `number` = `0`

#### Source

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L42)

***

### associatedFabric

> `abstract` **associatedFabric**: [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/session/Session.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L115)

***

### closeCallback()

> `protected` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L46)

***

### context

> `abstract` **context**: `T`

#### Source

[packages/matter.js/src/session/Session.ts:110](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L110)

***

### id

> `abstract` **id**: `number`

#### Source

[packages/matter.js/src/session/Session.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L111)

***

### idleIntervalMs

> `protected` `readonly` **idleIntervalMs**: `number`

#### Source

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L43)

***

### isPase

> `abstract` **isPase**: `boolean`

#### Source

[packages/matter.js/src/session/Session.ts:109](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L109)

***

### isSecure

> `abstract` **isSecure**: `boolean`

#### Source

[packages/matter.js/src/session/Session.ts:108](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L108)

***

### messageCounter

> `protected` `readonly` **messageCounter**: [`MessageCounter`](../../../protocol/export/classes/MessageCounter.md)

#### Source

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L47)

***

### messageReceptionState

> `protected` `readonly` **messageReceptionState**: [`MessageReceptionState`](../../../protocol/export/classes/MessageReceptionState.md)

#### Source

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L48)

***

### nodeId

> `abstract` **nodeId**: `undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/session/Session.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L113)

***

### peerNodeId

> `abstract` **peerNodeId**: `undefined` \| [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/session/Session.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L114)

***

### peerSessionId

> `abstract` **peerSessionId**: `number`

#### Source

[packages/matter.js/src/session/Session.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L112)

***

### timestamp

> **timestamp**: `number`

#### Source

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### closingAfterExchangeFinished

> `get` `abstract` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/Session.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L40)

***

### name

> `get` `abstract` **name**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/session/Session.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L39)

## Methods

### decode()

> `abstract` **decode**(`packet`, `aad`?): [`DecodedMessage`](../../../codec/export/interfaces/DecodedMessage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../../../codec/export/interfaces/DecodedPacket.md) |
| `aad`? | `Uint8Array` |

#### Returns

[`DecodedMessage`](../../../codec/export/interfaces/DecodedMessage.md)

#### Source

[packages/matter.js/src/session/Session.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L117)

***

### destroy()

> `abstract` **destroy**(`sendClose`?, `closeAfterExchangeFinished`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sendClose`? | `boolean` |
| `closeAfterExchangeFinished`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/Session.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L120)

***

### encode()

> `abstract` **encode**(`message`): [`Packet`](../../../codec/export/interfaces/Packet.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

[`Packet`](../../../codec/export/interfaces/Packet.md)

#### Source

[packages/matter.js/src/session/Session.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L118)

***

### end()

> `abstract` **end**(`sendClose`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/Session.ts:119](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L119)

***

### getIncrementedMessageCounter()

> **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

[packages/matter.js/src/session/Session.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L91)

***

### getSessionParameters()

> **getSessionParameters**(): [`SessionParameters`](../interfaces/SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/SessionParameters.md)

#### Source

[packages/matter.js/src/session/Session.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L99)

***

### isPeerActive()

> **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/Session.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L87)

***

### notifyActivity()

> **notifyActivity**(`messageReceived`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageReceived` | `boolean` |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/Session.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L79)

***

### updateMessageCounter()

> **updateMessageCounter**(`messageCounter`, `_sourceNodeId`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId`? | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/Session.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L95)
