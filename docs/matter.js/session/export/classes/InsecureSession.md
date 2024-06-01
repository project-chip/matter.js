[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / InsecureSession

# Class: InsecureSession\<T\>

## Extends

- [`Session`](Session.md)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new InsecureSession()

> **new InsecureSession**\<`T`\>(`args`): [`InsecureSession`](InsecureSession.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `object` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.initiatorNodeId`? | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `args.isInitiator`? | `boolean` |
| `args.messageCounter` | [`MessageCounter`](../../../protocol/export/classes/MessageCounter.md) |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |

#### Returns

[`InsecureSession`](InsecureSession.md)\<`T`\>

#### Overrides

[`Session`](Session.md).[`constructor`](Session.md#constructors)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L23)

## Properties

### #context

> `private` `readonly` **#context**: `T`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L21)

***

### #initiatorNodeId

> `private` `readonly` **#initiatorNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L19)

***

### activeIntervalMs

> `protected` `readonly` **activeIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeIntervalMs`](Session.md#activeintervalms)

#### Source

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L44)

***

### activeThresholdMs

> `protected` `readonly` **activeThresholdMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeThresholdMs`](Session.md#activethresholdms)

#### Source

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L45)

***

### activeTimestamp

> **activeTimestamp**: `number` = `0`

#### Inherited from

[`Session`](Session.md).[`activeTimestamp`](Session.md#activetimestamp)

#### Source

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L42)

***

### closeCallback()

> `protected` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Session`](Session.md).[`closeCallback`](Session.md#closecallback)

#### Source

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L46)

***

### closingAfterExchangeFinished

> `readonly` **closingAfterExchangeFinished**: `false` = `false`

#### Overrides

[`Session`](Session.md).[`closingAfterExchangeFinished`](Session.md#closingafterexchangefinished)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L20)

***

### idleIntervalMs

> `protected` `readonly` **idleIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`idleIntervalMs`](Session.md#idleintervalms)

#### Source

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L43)

***

### messageCounter

> `protected` `readonly` **messageCounter**: [`MessageCounter`](../../../protocol/export/classes/MessageCounter.md)

#### Inherited from

[`Session`](Session.md).[`messageCounter`](Session.md#messagecounter)

#### Source

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L47)

***

### messageReceptionState

> `protected` `readonly` **messageReceptionState**: [`MessageReceptionState`](../../../protocol/export/classes/MessageReceptionState.md)

#### Inherited from

[`Session`](Session.md).[`messageReceptionState`](Session.md#messagereceptionstate)

#### Source

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L48)

***

### timestamp

> **timestamp**: `number`

#### Inherited from

[`Session`](Session.md).[`timestamp`](Session.md#timestamp)

#### Source

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### associatedFabric

> `get` **associatedFabric**(): [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Returns

[`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L89)

***

### context

> `get` **context**(): `T`

#### Returns

`T`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L69)

***

### id

> `get` **id**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L73)

***

### isPase

> `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L45)

***

### isSecure

> `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L41)

***

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L65)

***

### nodeId

> `get` **nodeId**(): [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Returns

[`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L81)

***

### peerNodeId

> `get` **peerNodeId**(): `undefined`

#### Returns

`undefined`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L85)

***

### peerSessionId

> `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:77](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L77)

## Methods

### decode()

> **decode**(`packet`): [`DecodedMessage`](../../../codec/export/interfaces/DecodedMessage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../../../codec/export/interfaces/DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../../../codec/export/interfaces/DecodedMessage.md)

#### Overrides

[`Session`](Session.md).[`decode`](Session.md#decode)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L49)

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`destroy`](Session.md#destroy)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L93)

***

### encode()

> **encode**(`message`): [`Packet`](../../../codec/export/interfaces/Packet.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

[`Packet`](../../../codec/export/interfaces/Packet.md)

#### Overrides

[`Session`](Session.md).[`encode`](Session.md#encode)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L53)

***

### end()

> **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`end`](Session.md#end)

#### Source

[packages/matter.js/src/session/InsecureSession.ts:97](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L97)

***

### getAttestationChallengeKey()

> **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L57)

***

### getIncrementedMessageCounter()

> **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`Session`](Session.md).[`getIncrementedMessageCounter`](Session.md#getincrementedmessagecounter)

#### Source

[packages/matter.js/src/session/Session.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L91)

***

### getSessionParameters()

> **getSessionParameters**(): [`SessionParameters`](../interfaces/SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/SessionParameters.md)

#### Inherited from

[`Session`](Session.md).[`getSessionParameters`](Session.md#getsessionparameters)

#### Source

[packages/matter.js/src/session/Session.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L99)

***

### isPeerActive()

> **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Session`](Session.md).[`isPeerActive`](Session.md#ispeeractive)

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

#### Inherited from

[`Session`](Session.md).[`notifyActivity`](Session.md#notifyactivity)

#### Source

[packages/matter.js/src/session/Session.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L79)

***

### setFabric()

> **setFabric**(`_fabric`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/InsecureSession.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/InsecureSession.ts#L61)

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

#### Inherited from

[`Session`](Session.md).[`updateMessageCounter`](Session.md#updatemessagecounter)

#### Source

[packages/matter.js/src/session/Session.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L95)
