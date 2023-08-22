[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / UnsecureSession

# Class: UnsecureSession<T\>

[exports/session](../modules/exports_session.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/exports_session.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](exports_session.UnsecureSession.md#constructor)

### Properties

- [context](exports_session.UnsecureSession.md#context)
- [initiatorNodeId](exports_session.UnsecureSession.md#initiatornodeid)

### Accessors

- [name](exports_session.UnsecureSession.md#name)

### Methods

- [decode](exports_session.UnsecureSession.md#decode)
- [destroy](exports_session.UnsecureSession.md#destroy)
- [encode](exports_session.UnsecureSession.md#encode)
- [end](exports_session.UnsecureSession.md#end)
- [getAssociatedFabric](exports_session.UnsecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](exports_session.UnsecureSession.md#getattestationchallengekey)
- [getContext](exports_session.UnsecureSession.md#getcontext)
- [getId](exports_session.UnsecureSession.md#getid)
- [getMrpParameters](exports_session.UnsecureSession.md#getmrpparameters)
- [getNodeId](exports_session.UnsecureSession.md#getnodeid)
- [getPeerNodeId](exports_session.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](exports_session.UnsecureSession.md#getpeersessionid)
- [isPeerActive](exports_session.UnsecureSession.md#ispeeractive)
- [isSecure](exports_session.UnsecureSession.md#issecure)
- [notifyActivity](exports_session.UnsecureSession.md#notifyactivity)
- [setFabric](exports_session.UnsecureSession.md#setfabric)

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

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:14

## Properties

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:12

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:13

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[name](../interfaces/exports_session.Session.md#name)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:22

## Methods

### decode

▸ **decode**(`packet`): [`Message`](../interfaces/exports_codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](../interfaces/exports_codec.Packet.md) |

#### Returns

[`Message`](../interfaces/exports_codec.Message.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[decode](../interfaces/exports_session.Session.md#decode)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:18

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[destroy](../interfaces/exports_session.Session.md#destroy)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:33

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`Packet`](../interfaces/exports_codec.Packet.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[encode](../interfaces/exports_session.Session.md#encode)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:19

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[end](../interfaces/exports_session.Session.md#end)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:34

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getAssociatedFabric](../interfaces/exports_session.Session.md#getassociatedfabric)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:35

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:20

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getContext](../interfaces/exports_session.Session.md#getcontext)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:28

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getId](../interfaces/exports_session.Session.md#getid)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:29

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

[Session](../interfaces/exports_session.Session.md).[getMrpParameters](../interfaces/exports_session.Session.md#getmrpparameters)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:23

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getNodeId](../interfaces/exports_session.Session.md#getnodeid)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:31

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerNodeId](../interfaces/exports_session.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:32

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerSessionId](../interfaces/exports_session.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:30

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isPeerActive](../interfaces/exports_session.Session.md#ispeeractive)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:17

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isSecure](../interfaces/exports_session.Session.md#issecure)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:15

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

[Session](../interfaces/exports_session.Session.md).[notifyActivity](../interfaces/exports_session.Session.md#notifyactivity)

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:16

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/session/UnsecureSession.d.ts:21
