[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / Session

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
| `args.messageCounter` | [`MessageCounter`](../../protocol/classes/MessageCounter.md) |
| `args.messageReceptionState` | [`MessageReceptionState`](../../protocol/classes/MessageReceptionState.md) |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.setActiveTimestamp` | `boolean` |

#### Returns

[`Session`](Session.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:40

## Properties

### activeIntervalMs

> `protected` `readonly` **activeIntervalMs**: `number`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:35

***

### activeThresholdMs

> `protected` `readonly` **activeThresholdMs**: `number`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:36

***

### activeTimestamp

> **activeTimestamp**: `number`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:33

***

### associatedFabric

> `abstract` **associatedFabric**: [`Fabric`](../../fabric/classes/Fabric.md)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:59

***

### closeCallback()

> `protected` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:37

***

### context

> `abstract` **context**: `T`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:54

***

### id

> `abstract` **id**: `number`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:55

***

### idleIntervalMs

> `protected` `readonly` **idleIntervalMs**: `number`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:34

***

### isPase

> `abstract` **isPase**: `boolean`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:53

***

### isSecure

> `abstract` **isSecure**: `boolean`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:52

***

### messageCounter

> `protected` `readonly` **messageCounter**: [`MessageCounter`](../../protocol/classes/MessageCounter.md)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:38

***

### messageReceptionState

> `protected` `readonly` **messageReceptionState**: [`MessageReceptionState`](../../protocol/classes/MessageReceptionState.md)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:39

***

### nodeId

> `abstract` **nodeId**: `undefined` \| [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:57

***

### peerNodeId

> `abstract` **peerNodeId**: `undefined` \| [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:58

***

### peerSessionId

> `abstract` **peerSessionId**: `number`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:56

***

### timestamp

> **timestamp**: `number`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### closingAfterExchangeFinished

> `get` `abstract` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:31

***

### name

> `get` `abstract` **name**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:30

## Methods

### decode()

> `abstract` **decode**(`packet`, `aad`?): [`DecodedMessage`](../../codec/interfaces/DecodedMessage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../../codec/interfaces/DecodedPacket.md) |
| `aad`? | `Uint8Array` |

#### Returns

[`DecodedMessage`](../../codec/interfaces/DecodedMessage.md)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:60

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

packages/matter.js/dist/esm/session/Session.d.ts:63

***

### encode()

> `abstract` **encode**(`message`): [`Packet`](../../codec/interfaces/Packet.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

[`Packet`](../../codec/interfaces/Packet.md)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:61

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

packages/matter.js/dist/esm/session/Session.d.ts:62

***

### getIncrementedMessageCounter()

> **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:49

***

### getSessionParameters()

> **getSessionParameters**(): [`SessionParameters`](../interfaces/SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/SessionParameters.md)

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:51

***

### isPeerActive()

> **isPeerActive**(): `boolean`

#### Returns

`boolean`

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

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:47

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

#### Source

packages/matter.js/dist/esm/session/Session.d.ts:50
