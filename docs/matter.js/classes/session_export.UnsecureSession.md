[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / UnsecureSession

# Class: UnsecureSession<T\>

[session/export](../modules/session_export.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/session_export.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](session_export.UnsecureSession.md#constructor)

### Properties

- [context](session_export.UnsecureSession.md#context)
- [initiatorNodeId](session_export.UnsecureSession.md#initiatornodeid)

### Accessors

- [name](session_export.UnsecureSession.md#name)

### Methods

- [decode](session_export.UnsecureSession.md#decode)
- [destroy](session_export.UnsecureSession.md#destroy)
- [encode](session_export.UnsecureSession.md#encode)
- [end](session_export.UnsecureSession.md#end)
- [getAssociatedFabric](session_export.UnsecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](session_export.UnsecureSession.md#getattestationchallengekey)
- [getContext](session_export.UnsecureSession.md#getcontext)
- [getId](session_export.UnsecureSession.md#getid)
- [getMrpParameters](session_export.UnsecureSession.md#getmrpparameters)
- [getNodeId](session_export.UnsecureSession.md#getnodeid)
- [getPeerNodeId](session_export.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](session_export.UnsecureSession.md#getpeersessionid)
- [isPase](session_export.UnsecureSession.md#ispase)
- [isPeerActive](session_export.UnsecureSession.md#ispeeractive)
- [isSecure](session_export.UnsecureSession.md#issecure)
- [notifyActivity](session_export.UnsecureSession.md#notifyactivity)
- [setFabric](session_export.UnsecureSession.md#setfabric)

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

packages/matter.js/src/session/UnsecureSession.ts:24

## Properties

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:24

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:22

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[name](../interfaces/session_export.Session.md#name)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:58

## Methods

### decode

▸ **decode**(`packet`): [`Message`](../interfaces/codec_export.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](../interfaces/codec_export.Packet.md) |

#### Returns

[`Message`](../interfaces/codec_export.Message.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[decode](../interfaces/session_export.Session.md#decode)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:42

___

### destroy

▸ **destroy**(`_sendClose`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sendClose` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[destroy](../interfaces/session_export.Session.md#destroy)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:90

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/codec_export.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

[`Packet`](../interfaces/codec_export.Packet.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[encode](../interfaces/session_export.Session.md#encode)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:46

___

### end

▸ **end**(`_sendClose`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `_sendClose` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[end](../interfaces/session_export.Session.md#end)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:94

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getAssociatedFabric](../interfaces/session_export.Session.md#getassociatedfabric)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:98

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:50

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getContext](../interfaces/session_export.Session.md#getcontext)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:70

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getId](../interfaces/session_export.Session.md#getid)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:74

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

[Session](../interfaces/session_export.Session.md).[getMrpParameters](../interfaces/session_export.Session.md#getmrpparameters)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:62

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getNodeId](../interfaces/session_export.Session.md#getnodeid)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:82

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerNodeId](../interfaces/session_export.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:86

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerSessionId](../interfaces/session_export.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:78

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPase](../interfaces/session_export.Session.md#ispase)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:30

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPeerActive](../interfaces/session_export.Session.md#ispeeractive)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:38

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isSecure](../interfaces/session_export.Session.md#issecure)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:26

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

[Session](../interfaces/session_export.Session.md).[notifyActivity](../interfaces/session_export.Session.md#notifyactivity)

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:34

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/session/UnsecureSession.ts:54
