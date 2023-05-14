[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / SecureSession

# Class: SecureSession<T\>

[exports/session](../modules/exports_session.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/exports_session.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](exports_session.SecureSession.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](exports_session.SecureSession.md#activeretransmissiontimeoutms)
- [activeTimestamp](exports_session.SecureSession.md#activetimestamp)
- [attestationKey](exports_session.SecureSession.md#attestationkey)
- [closeCallback](exports_session.SecureSession.md#closecallback)
- [context](exports_session.SecureSession.md#context)
- [decryptKey](exports_session.SecureSession.md#decryptkey)
- [encryptKey](exports_session.SecureSession.md#encryptkey)
- [fabric](exports_session.SecureSession.md#fabric)
- [generateNonce](exports_session.SecureSession.md#generatenonce)
- [id](exports_session.SecureSession.md#id)
- [idleRetransmissionTimeoutMs](exports_session.SecureSession.md#idleretransmissiontimeoutms)
- [peerNodeId](exports_session.SecureSession.md#peernodeid)
- [peerSessionId](exports_session.SecureSession.md#peersessionid)
- [retransmissionRetries](exports_session.SecureSession.md#retransmissionretries)
- [subscriptions](exports_session.SecureSession.md#subscriptions)
- [timestamp](exports_session.SecureSession.md#timestamp)

### Methods

- [addSubscription](exports_session.SecureSession.md#addsubscription)
- [clearSubscriptions](exports_session.SecureSession.md#clearsubscriptions)
- [decode](exports_session.SecureSession.md#decode)
- [destroy](exports_session.SecureSession.md#destroy)
- [encode](exports_session.SecureSession.md#encode)
- [getAttestationChallengeKey](exports_session.SecureSession.md#getattestationchallengekey)
- [getContext](exports_session.SecureSession.md#getcontext)
- [getFabric](exports_session.SecureSession.md#getfabric)
- [getId](exports_session.SecureSession.md#getid)
- [getMrpParameters](exports_session.SecureSession.md#getmrpparameters)
- [getName](exports_session.SecureSession.md#getname)
- [getNodeId](exports_session.SecureSession.md#getnodeid)
- [getPeerNodeId](exports_session.SecureSession.md#getpeernodeid)
- [getPeerSessionId](exports_session.SecureSession.md#getpeersessionid)
- [isPeerActive](exports_session.SecureSession.md#ispeeractive)
- [isSecure](exports_session.SecureSession.md#issecure)
- [notifyActivity](exports_session.SecureSession.md#notifyactivity)
- [create](exports_session.SecureSession.md#create)

## Constructors

### constructor

• **new SecureSession**<`T`\>(`context`, `id`, `fabric`, `peerNodeId`, `peerSessionId`, `_sharedSecret`, `decryptKey`, `encryptKey`, `attestationKey`, `closeCallback`, `idleRetransmissionTimeoutMs?`, `activeRetransmissionTimeoutMs?`, `retransmissionRetries?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |
| `id` | `number` |
| `fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `peerSessionId` | `number` |
| `_sharedSecret` | `Uint8Array` |
| `decryptKey` | `Uint8Array` |
| `encryptKey` | `Uint8Array` |
| `attestationKey` | `Uint8Array` |
| `closeCallback` | () => `void` |
| `idleRetransmissionTimeoutMs?` | `number` |
| `activeRetransmissionTimeoutMs?` | `number` |
| `retransmissionRetries?` | `number` |

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:29

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:23

___

### activeTimestamp

• `Private` **activeTimestamp**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:27

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:20

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:21

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:13

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:18

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:19

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:15

___

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:51

___

### id

• `Private` `Readonly` **id**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:14

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:22

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:16

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:17

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:24

___

### subscriptions

• `Private` `Readonly` **subscriptions**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:25

___

### timestamp

• `Private` **timestamp**: `any`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:26

## Methods

### addSubscription

▸ **addSubscription**(`subscription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](exports_interaction.SubscriptionHandler.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:48

___

### clearSubscriptions

▸ **clearSubscriptions**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:49

___

### decode

▸ **decode**(`«destructured»`): [`Message`](../interfaces/exports_codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/exports_codec.Packet.md) |

#### Returns

[`Message`](../interfaces/exports_codec.Message.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[decode](../interfaces/exports_session.Session.md#decode)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:33

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[destroy](../interfaces/exports_session.Session.md#destroy)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:50

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

packages/matter.js/dist/cjs/session/SecureSession.d.ts:34

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:35

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getContext](../interfaces/exports_session.Session.md#getcontext)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:43

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:36

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getId](../interfaces/exports_session.Session.md#getid)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:44

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

packages/matter.js/dist/cjs/session/SecureSession.d.ts:38

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getName](../interfaces/exports_session.Session.md#getname)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:37

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](exports_datatype.NodeId.md)

#### Returns

[`NodeId`](exports_datatype.NodeId.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getNodeId](../interfaces/exports_session.Session.md#getnodeid)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:46

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](exports_datatype.NodeId.md)

#### Returns

[`NodeId`](exports_datatype.NodeId.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerNodeId](../interfaces/exports_session.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:47

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerSessionId](../interfaces/exports_session.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:45

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isPeerActive](../interfaces/exports_session.Session.md#ispeeractive)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:32

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isSecure](../interfaces/exports_session.Session.md#issecure)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:30

___

### notifyActivity

▸ **notifyActivity**(`messageReceived`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageReceived` | `boolean` |

#### Returns

`void`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[notifyActivity](../interfaces/exports_session.Session.md#notifyactivity)

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:31

___

### create

▸ `Static` **create**<`T`\>(`context`, `id`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `closeCallback`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `Promise`<[`SecureSession`](exports_session.SecureSession.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |
| `id` | `number` |
| `fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](exports_datatype.NodeId.md) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `closeCallback` | () => `void` |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](exports_session.SecureSession.md)<`T`\>\>

#### Defined in

packages/matter.js/dist/cjs/session/SecureSession.d.ts:28
