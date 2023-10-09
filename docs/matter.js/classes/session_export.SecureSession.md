[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / SecureSession

# Class: SecureSession<T\>

[session/export](../modules/session_export.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/session_export.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](session_export.SecureSession.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](session_export.SecureSession.md#activeretransmissiontimeoutms)
- [activeTimestamp](session_export.SecureSession.md#activetimestamp)
- [attestationKey](session_export.SecureSession.md#attestationkey)
- [closeCallback](session_export.SecureSession.md#closecallback)
- [context](session_export.SecureSession.md#context)
- [decryptKey](session_export.SecureSession.md#decryptkey)
- [encryptKey](session_export.SecureSession.md#encryptkey)
- [fabric](session_export.SecureSession.md#fabric)
- [id](session_export.SecureSession.md#id)
- [idleRetransmissionTimeoutMs](session_export.SecureSession.md#idleretransmissiontimeoutms)
- [peerNodeId](session_export.SecureSession.md#peernodeid)
- [peerSessionId](session_export.SecureSession.md#peersessionid)
- [retransmissionRetries](session_export.SecureSession.md#retransmissionretries)
- [subscriptions](session_export.SecureSession.md#subscriptions)
- [timestamp](session_export.SecureSession.md#timestamp)

### Accessors

- [name](session_export.SecureSession.md#name)
- [numberOfActiveSubscriptions](session_export.SecureSession.md#numberofactivesubscriptions)

### Methods

- [addAssociatedFabric](session_export.SecureSession.md#addassociatedfabric)
- [addSubscription](session_export.SecureSession.md#addsubscription)
- [clearSubscriptions](session_export.SecureSession.md#clearsubscriptions)
- [close](session_export.SecureSession.md#close)
- [decode](session_export.SecureSession.md#decode)
- [destroy](session_export.SecureSession.md#destroy)
- [encode](session_export.SecureSession.md#encode)
- [end](session_export.SecureSession.md#end)
- [generateNonce](session_export.SecureSession.md#generatenonce)
- [getAssociatedFabric](session_export.SecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](session_export.SecureSession.md#getattestationchallengekey)
- [getContext](session_export.SecureSession.md#getcontext)
- [getFabric](session_export.SecureSession.md#getfabric)
- [getId](session_export.SecureSession.md#getid)
- [getMrpParameters](session_export.SecureSession.md#getmrpparameters)
- [getNodeId](session_export.SecureSession.md#getnodeid)
- [getPeerNodeId](session_export.SecureSession.md#getpeernodeid)
- [getPeerSessionId](session_export.SecureSession.md#getpeersessionid)
- [isPase](session_export.SecureSession.md#ispase)
- [isPeerActive](session_export.SecureSession.md#ispeeractive)
- [isSecure](session_export.SecureSession.md#issecure)
- [notifyActivity](session_export.SecureSession.md#notifyactivity)
- [removeSubscription](session_export.SecureSession.md#removesubscription)
- [create](session_export.SecureSession.md#create)

## Constructors

### constructor

• **new SecureSession**<`T`\>(`context`, `id`, `fabric`, `peerNodeId`, `peerSessionId`, `_sharedSecret`, `decryptKey`, `encryptKey`, `attestationKey`, `closeCallback`, `idleRetransmissionTimeoutMs?`, `activeRetransmissionTimeoutMs?`, `retransmissionRetries?`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `context` | `T` | `undefined` |
| `id` | `number` | `undefined` |
| `fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) | `undefined` |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) | `undefined` |
| `peerSessionId` | `number` | `undefined` |
| `_sharedSecret` | `Uint8Array` | `undefined` |
| `decryptKey` | `Uint8Array` | `undefined` |
| `encryptKey` | `Uint8Array` | `undefined` |
| `attestationKey` | `Uint8Array` | `undefined` |
| `closeCallback` | (`sendClose`: `boolean`) => `Promise`<`void`\> | `undefined` |
| `idleRetransmissionTimeoutMs` | `number` | `DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS` |
| `activeRetransmissionTimeoutMs` | `number` | `DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS` |
| `retransmissionRetries` | `number` | `DEFAULT_RETRANSMISSION_RETRIES` |

#### Defined in

packages/matter.js/src/session/SecureSession.ts:77

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `number` = `DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:89

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:36

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:86

___

### closeCallback

• `Private` `Readonly` **closeCallback**: (`sendClose`: `boolean`) => `Promise`<`void`\>

#### Type declaration

▸ (`sendClose`): `Promise`<`void`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

##### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/session/SecureSession.ts:87

___

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:78

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:84

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `Uint8Array`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:85

___

### fabric

• `Private` **fabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:80

___

### id

• `Private` `Readonly` **id**: `number`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:79

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `number` = `DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:88

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:81

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:82

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number` = `DEFAULT_RETRANSMISSION_RETRIES`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:90

___

### subscriptions

• `Private` `Readonly` **subscriptions**: [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)[]

#### Defined in

packages/matter.js/src/session/SecureSession.ts:34

___

### timestamp

• **timestamp**: `number`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:35

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[name](../interfaces/session_export.Session.md#name)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:166

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:200

## Methods

### addAssociatedFabric

▸ **addAssociatedFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:152

___

### addSubscription

▸ **addSubscription**(`subscription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:195

___

### clearSubscriptions

▸ **clearSubscriptions**(`flushSubscriptions?`): `Promise`<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `flushSubscriptions` | `boolean` | `false` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/session/SecureSession.ts:212

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/session/SecureSession.ts:108

___

### decode

▸ **decode**(`«destructured»`): [`Message`](../interfaces/codec_export.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/codec_export.Packet.md) |

#### Returns

[`Message`](../interfaces/codec_export.Message.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[decode](../interfaces/session_export.Session.md#decode)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:124

___

### destroy

▸ **destroy**(`sendClose`): `Promise`<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[destroy](../interfaces/session_export.Session.md#destroy)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:226

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

packages/matter.js/src/session/SecureSession.ts:134

___

### end

▸ **end**(`sendClose`): `Promise`<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[end](../interfaces/session_export.Session.md#end)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:220

___

### generateNonce

▸ `Private` **generateNonce**(`securityFlags`, `messageId`, `nodeId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `securityFlags` | `number` |
| `messageId` | `number` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:232

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getAssociatedFabric](../interfaces/session_export.Session.md#getassociatedfabric)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:159

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/src/session/SecureSession.ts:144

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getContext](../interfaces/session_export.Session.md#getcontext)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:175

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:148

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getId](../interfaces/session_export.Session.md#getid)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:179

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

packages/matter.js/src/session/SecureSession.ts:170

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getNodeId](../interfaces/session_export.Session.md#getnodeid)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:187

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerNodeId](../interfaces/session_export.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:191

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerSessionId](../interfaces/session_export.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:183

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPase](../interfaces/session_export.Session.md#ispase)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:104

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPeerActive](../interfaces/session_export.Session.md#ispeeractive)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:120

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isSecure](../interfaces/session_export.Session.md#issecure)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:100

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

[Session](../interfaces/session_export.Session.md).[notifyActivity](../interfaces/session_export.Session.md#notifyactivity)

#### Defined in

packages/matter.js/src/session/SecureSession.ts:112

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

packages/matter.js/src/session/SecureSession.ts:204

___

### create

▸ `Static` **create**<`T`\>(`context`, `id`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `closeCallback`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `Promise`<[`SecureSession`](session_export.SecureSession.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |
| `id` | `number` |
| `fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `closeCallback` | (`sendClose`: `boolean`) => `Promise`<`void`\> |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](session_export.SecureSession.md)<`T`\>\>

#### Defined in

packages/matter.js/src/session/SecureSession.ts:38
