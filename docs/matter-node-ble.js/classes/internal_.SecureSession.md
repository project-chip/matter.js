[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / SecureSession

# Class: SecureSession<T\>

[<internal>](../modules/internal_.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/internal_.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](internal_.SecureSession.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](internal_.SecureSession.md#activeretransmissiontimeoutms)
- [activeTimestamp](internal_.SecureSession.md#activetimestamp)
- [attestationKey](internal_.SecureSession.md#attestationkey)
- [closeCallback](internal_.SecureSession.md#closecallback)
- [context](internal_.SecureSession.md#context)
- [decryptKey](internal_.SecureSession.md#decryptkey)
- [encryptKey](internal_.SecureSession.md#encryptkey)
- [fabric](internal_.SecureSession.md#fabric)
- [generateNonce](internal_.SecureSession.md#generatenonce)
- [id](internal_.SecureSession.md#id)
- [idleRetransmissionTimeoutMs](internal_.SecureSession.md#idleretransmissiontimeoutms)
- [peerNodeId](internal_.SecureSession.md#peernodeid)
- [peerSessionId](internal_.SecureSession.md#peersessionid)
- [retransmissionRetries](internal_.SecureSession.md#retransmissionretries)
- [subscriptions](internal_.SecureSession.md#subscriptions)
- [timestamp](internal_.SecureSession.md#timestamp)

### Accessors

- [name](internal_.SecureSession.md#name)
- [numberOfActiveSubscriptions](internal_.SecureSession.md#numberofactivesubscriptions)

### Methods

- [addSubscription](internal_.SecureSession.md#addsubscription)
- [clearSubscriptions](internal_.SecureSession.md#clearsubscriptions)
- [decode](internal_.SecureSession.md#decode)
- [destroy](internal_.SecureSession.md#destroy)
- [encode](internal_.SecureSession.md#encode)
- [end](internal_.SecureSession.md#end)
- [getAssociatedFabric](internal_.SecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](internal_.SecureSession.md#getattestationchallengekey)
- [getContext](internal_.SecureSession.md#getcontext)
- [getFabric](internal_.SecureSession.md#getfabric)
- [getId](internal_.SecureSession.md#getid)
- [getMrpParameters](internal_.SecureSession.md#getmrpparameters)
- [getNodeId](internal_.SecureSession.md#getnodeid)
- [getPeerNodeId](internal_.SecureSession.md#getpeernodeid)
- [getPeerSessionId](internal_.SecureSession.md#getpeersessionid)
- [isPeerActive](internal_.SecureSession.md#ispeeractive)
- [isSecure](internal_.SecureSession.md#issecure)
- [notifyActivity](internal_.SecureSession.md#notifyactivity)
- [removeSubscription](internal_.SecureSession.md#removesubscription)
- [create](internal_.SecureSession.md#create)

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
| `fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `peerSessionId` | `number` |
| `_sharedSecret` | `Uint8Array` |
| `decryptKey` | `Uint8Array` |
| `encryptKey` | `Uint8Array` |
| `attestationKey` | `Uint8Array` |
| `closeCallback` | () => `Promise`<`void`\> |
| `idleRetransmissionTimeoutMs?` | `number` |
| `activeRetransmissionTimeoutMs?` | `number` |
| `retransmissionRetries?` | `number` |

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:31

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:25

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:29

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:22

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:23

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:15

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:20

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:21

___

### fabric

• `Private` `Readonly` **fabric**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:17

___

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:59

___

### id

• `Private` `Readonly` **id**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:16

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:24

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:18

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:19

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:26

___

### subscriptions

• `Private` `Readonly` **subscriptions**: `any`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:27

___

### timestamp

• **timestamp**: `number`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:28

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[name](../interfaces/internal_.Session.md#name)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:40

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:52

## Methods

### addSubscription

▸ **addSubscription**(`subscription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](internal_.SubscriptionHandler.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:51

___

### clearSubscriptions

▸ **clearSubscriptions**(`flushSubscriptions?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flushSubscriptions?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:54

___

### decode

▸ **decode**(`«destructured»`): [`Message`](../interfaces/internal_.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/internal_.Packet.md) |

#### Returns

[`Message`](../interfaces/internal_.Message.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[decode](../interfaces/internal_.Session.md#decode)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:35

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/internal_.Session.md).[destroy](../interfaces/internal_.Session.md#destroy)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:58

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

matter.js/dist/cjs/session/SecureSession.d.ts:36

___

### end

▸ **end**(): `Promise`<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/internal_.Session.md).[end](../interfaces/internal_.Session.md#end)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:56

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getAssociatedFabric](../interfaces/internal_.Session.md#getassociatedfabric)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:39

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:37

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getContext](../interfaces/internal_.Session.md#getcontext)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:46

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:38

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getId](../interfaces/internal_.Session.md#getid)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:47

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

matter.js/dist/cjs/session/SecureSession.d.ts:41

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getNodeId](../interfaces/internal_.Session.md#getnodeid)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:49

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerNodeId](../interfaces/internal_.Session.md#getpeernodeid)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:50

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerSessionId](../interfaces/internal_.Session.md#getpeersessionid)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:48

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isPeerActive](../interfaces/internal_.Session.md#ispeeractive)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:34

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isSecure](../interfaces/internal_.Session.md#issecure)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:32

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

[Session](../interfaces/internal_.Session.md).[notifyActivity](../interfaces/internal_.Session.md#notifyactivity)

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:33

___

### removeSubscription

▸ **removeSubscription**(`subscriptionId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:53

___

### create

▸ `Static` **create**<`T`\>(`context`, `id`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `closeCallback`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `Promise`<[`SecureSession`](internal_.SecureSession.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |
| `id` | `number` |
| `fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `closeCallback` | () => `Promise`<`void`\> |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](internal_.SecureSession.md)<`T`\>\>

#### Defined in

matter.js/dist/cjs/session/SecureSession.d.ts:30
