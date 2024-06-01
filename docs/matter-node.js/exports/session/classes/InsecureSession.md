[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / InsecureSession

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
| `args.initiatorNodeId`? | [`NodeId`](../../datatype/README.md#nodeid) |
| `args.isInitiator`? | `boolean` |
| `args.messageCounter` | [`MessageCounter`](../../protocol/classes/MessageCounter.md) |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |

#### Returns

[`InsecureSession`](InsecureSession.md)\<`T`\>

#### Overrides

[`Session`](Session.md).[`constructor`](Session.md#constructors)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:15

## Properties

### #private

> `private` **#private**: `any`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:13

***

### activeIntervalMs

> `protected` `readonly` **activeIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeIntervalMs`](Session.md#activeintervalms)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:35

***

### activeThresholdMs

> `protected` `readonly` **activeThresholdMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeThresholdMs`](Session.md#activethresholdms)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:36

***

### activeTimestamp

> **activeTimestamp**: `number`

#### Inherited from

[`Session`](Session.md).[`activeTimestamp`](Session.md#activetimestamp)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:33

***

### closeCallback()

> `protected` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Session`](Session.md).[`closeCallback`](Session.md#closecallback)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:37

***

### closingAfterExchangeFinished

> `readonly` **closingAfterExchangeFinished**: `false` = `false`

#### Overrides

[`Session`](Session.md).[`closingAfterExchangeFinished`](Session.md#closingafterexchangefinished)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:14

***

### idleIntervalMs

> `protected` `readonly` **idleIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`idleIntervalMs`](Session.md#idleintervalms)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:34

***

### messageCounter

> `protected` `readonly` **messageCounter**: [`MessageCounter`](../../protocol/classes/MessageCounter.md)

#### Inherited from

[`Session`](Session.md).[`messageCounter`](Session.md#messagecounter)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:38

***

### messageReceptionState

> `protected` `readonly` **messageReceptionState**: [`MessageReceptionState`](../../protocol/classes/MessageReceptionState.md)

#### Inherited from

[`Session`](Session.md).[`messageReceptionState`](Session.md#messagereceptionstate)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:39

***

### timestamp

> **timestamp**: `number`

#### Inherited from

[`Session`](Session.md).[`timestamp`](Session.md#timestamp)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### associatedFabric

> `get` **associatedFabric**(): [`Fabric`](../../fabric/classes/Fabric.md)

#### Returns

[`Fabric`](../../fabric/classes/Fabric.md)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:35

***

### context

> `get` **context**(): `T`

#### Returns

`T`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:30

***

### id

> `get` **id**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:31

***

### isPase

> `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:24

***

### isSecure

> `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:23

***

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:29

***

### nodeId

> `get` **nodeId**(): [`NodeId`](../../datatype/README.md#nodeid)

#### Returns

[`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:33

***

### peerNodeId

> `get` **peerNodeId**(): `undefined`

#### Returns

`undefined`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:34

***

### peerSessionId

> `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:32

## Methods

### decode()

> **decode**(`packet`): [`DecodedMessage`](../../codec/interfaces/DecodedMessage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../../codec/interfaces/DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../../codec/interfaces/DecodedMessage.md)

#### Overrides

[`Session`](Session.md).[`decode`](Session.md#decode)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:25

***

### destroy()

> **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`destroy`](Session.md#destroy)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:36

***

### encode()

> **encode**(`message`): [`Packet`](../../codec/interfaces/Packet.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

[`Packet`](../../codec/interfaces/Packet.md)

#### Overrides

[`Session`](Session.md).[`encode`](Session.md#encode)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:26

***

### end()

> **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`end`](Session.md#end)

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:37

***

### getAttestationChallengeKey()

> **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:27

***

### getIncrementedMessageCounter()

> **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`Session`](Session.md).[`getIncrementedMessageCounter`](Session.md#getincrementedmessagecounter)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:49

***

### getSessionParameters()

> **getSessionParameters**(): [`SessionParameters`](../interfaces/SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/SessionParameters.md)

#### Inherited from

[`Session`](Session.md).[`getSessionParameters`](Session.md#getsessionparameters)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:51

***

### isPeerActive()

> **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Session`](Session.md).[`isPeerActive`](Session.md#ispeeractive)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:48

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

packages/matter.js/dist/esm/session/Session.d.ts:47

***

### setFabric()

> **setFabric**(`_fabric`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](../../fabric/classes/Fabric.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/session/InsecureSession.d.ts:28

***

### updateMessageCounter()

> **updateMessageCounter**(`messageCounter`, `_sourceNodeId`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId`? | [`NodeId`](../../datatype/README.md#nodeid) |

#### Returns

`void`

#### Inherited from

[`Session`](Session.md).[`updateMessageCounter`](Session.md#updatemessagecounter)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:50
