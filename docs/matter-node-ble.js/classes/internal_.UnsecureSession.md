[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / UnsecureSession

# Class: UnsecureSession<T\>

[<internal>](../modules/internal_.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/internal_.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](internal_.UnsecureSession.md#constructor)

### Properties

- [context](internal_.UnsecureSession.md#context)
- [initiatorNodeId](internal_.UnsecureSession.md#initiatornodeid)

### Accessors

- [name](internal_.UnsecureSession.md#name)

### Methods

- [decode](internal_.UnsecureSession.md#decode)
- [destroy](internal_.UnsecureSession.md#destroy)
- [encode](internal_.UnsecureSession.md#encode)
- [end](internal_.UnsecureSession.md#end)
- [getAssociatedFabric](internal_.UnsecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](internal_.UnsecureSession.md#getattestationchallengekey)
- [getContext](internal_.UnsecureSession.md#getcontext)
- [getId](internal_.UnsecureSession.md#getid)
- [getMrpParameters](internal_.UnsecureSession.md#getmrpparameters)
- [getNodeId](internal_.UnsecureSession.md#getnodeid)
- [getPeerNodeId](internal_.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](internal_.UnsecureSession.md#getpeersessionid)
- [isPeerActive](internal_.UnsecureSession.md#ispeeractive)
- [isSecure](internal_.UnsecureSession.md#issecure)
- [notifyActivity](internal_.UnsecureSession.md#notifyactivity)
- [setFabric](internal_.UnsecureSession.md#setfabric)

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

matter.js/dist/cjs/session/UnsecureSession.d.ts:14

## Properties

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:12

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: `any`

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:13

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[name](../interfaces/internal_.Session.md#name)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:22

## Methods

### decode

▸ **decode**(`packet`): [`Message`](../interfaces/internal_.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`Packet`](../interfaces/internal_.Packet.md) |

#### Returns

[`Message`](../interfaces/internal_.Message.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[decode](../interfaces/internal_.Session.md#decode)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:18

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/internal_.Session.md).[destroy](../interfaces/internal_.Session.md#destroy)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:33

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/internal_.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

[`Packet`](../interfaces/internal_.Packet.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[encode](../interfaces/internal_.Session.md#encode)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:19

___

### end

▸ **end**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/internal_.Session.md).[end](../interfaces/internal_.Session.md#end)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:34

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getAssociatedFabric](../interfaces/internal_.Session.md#getassociatedfabric)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:35

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:20

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getContext](../interfaces/internal_.Session.md#getcontext)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:28

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getId](../interfaces/internal_.Session.md#getid)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:29

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

[Session](../interfaces/internal_.Session.md).[getMrpParameters](../interfaces/internal_.Session.md#getmrpparameters)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:23

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getNodeId](../interfaces/internal_.Session.md#getnodeid)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:31

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerNodeId](../interfaces/internal_.Session.md#getpeernodeid)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:32

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerSessionId](../interfaces/internal_.Session.md#getpeersessionid)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:30

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isPeerActive](../interfaces/internal_.Session.md#ispeeractive)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:17

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isSecure](../interfaces/internal_.Session.md#issecure)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:15

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

[Session](../interfaces/internal_.Session.md).[notifyActivity](../interfaces/internal_.Session.md#notifyactivity)

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:16

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/session/UnsecureSession.d.ts:21
