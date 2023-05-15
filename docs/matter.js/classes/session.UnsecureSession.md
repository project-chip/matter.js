[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / UnsecureSession

# Class: UnsecureSession<T\>

[session](../modules/session.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/session.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](session.UnsecureSession.md#constructor)

### Properties

- [context](session.UnsecureSession.md#context)
- [initiatorNodeId](session.UnsecureSession.md#initiatornodeid)

### Methods

- [decode](session.UnsecureSession.md#decode)
- [destroy](session.UnsecureSession.md#destroy)
- [encode](session.UnsecureSession.md#encode)
- [getAttestationChallengeKey](session.UnsecureSession.md#getattestationchallengekey)
- [getContext](session.UnsecureSession.md#getcontext)
- [getId](session.UnsecureSession.md#getid)
- [getMrpParameters](session.UnsecureSession.md#getmrpparameters)
- [getName](session.UnsecureSession.md#getname)
- [getNodeId](session.UnsecureSession.md#getnodeid)
- [getPeerNodeId](session.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](session.UnsecureSession.md#getpeersessionid)
- [isPeerActive](session.UnsecureSession.md#ispeeractive)
- [isSecure](session.UnsecureSession.md#issecure)
- [notifyActivity](session.UnsecureSession.md#notifyactivity)
- [setFabric](session.UnsecureSession.md#setfabric)

## Constructors

### constructor

• **new UnsecureSession**<`T`\>(`context`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L17)

## Properties

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L18)

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:15](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L15)

## Methods

### decode

▸ **decode**(`packet`): [`Message`](../interfaces/codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](../interfaces/codec.Packet.md) |

#### Returns

[`Message`](../interfaces/codec.Message.md)

#### Implementation of

[Session](../interfaces/session.Session.md).[decode](../interfaces/session.Session.md#decode)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L33)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[Session](../interfaces/session.Session.md).[destroy](../interfaces/session.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L81)

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

[`Packet`](../interfaces/codec.Packet.md)

#### Implementation of

[Session](../interfaces/session.Session.md).[encode](../interfaces/session.Session.md#encode)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L37)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L41)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/session.Session.md).[getContext](../interfaces/session.Session.md#getcontext)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:61](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L61)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session.Session.md).[getId](../interfaces/session.Session.md#getid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:65](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L65)

___

### getMrpParameters

▸ **getMrpParameters**(): `Object`

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `activeRetransmissionTimeoutMs` | `number` |
| `idleRetransmissionTimeoutMs` | `number` |
| `retransmissionRetries` | `number` |

#### Implementation of

[Session](../interfaces/session.Session.md).[getMrpParameters](../interfaces/session.Session.md#getmrpparameters)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:53](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L53)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/session.Session.md).[getName](../interfaces/session.Session.md#getname)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L49)

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](datatype.NodeId.md)

#### Returns

[`NodeId`](datatype.NodeId.md)

#### Implementation of

[Session](../interfaces/session.Session.md).[getNodeId](../interfaces/session.Session.md#getnodeid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:73](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L73)

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Implementation of

[Session](../interfaces/session.Session.md).[getPeerNodeId](../interfaces/session.Session.md#getpeernodeid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L77)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session.Session.md).[getPeerSessionId](../interfaces/session.Session.md#getpeersessionid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L69)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session.Session.md).[isPeerActive](../interfaces/session.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L29)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session.Session.md).[isSecure](../interfaces/session.Session.md#issecure)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:21](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L21)

___

### notifyActivity

▸ **notifyActivity**(`_messageReceived`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_messageReceived` | `boolean` |

#### Returns

`void`

#### Implementation of

[Session](../interfaces/session.Session.md).[notifyActivity](../interfaces/session.Session.md#notifyactivity)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L25)

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/UnsecureSession.ts#L45)
