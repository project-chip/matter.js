[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session](../modules/session.md) / SecureSession

# Class: SecureSession<T\>

[session](../modules/session.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/session.Session.md)<`T`\>

## Table of contents

### Constructors

- [constructor](session.SecureSession.md#constructor)

### Properties

- [activeRetransmissionTimeoutMs](session.SecureSession.md#activeretransmissiontimeoutms)
- [activeTimestamp](session.SecureSession.md#activetimestamp)
- [attestationKey](session.SecureSession.md#attestationkey)
- [closeCallback](session.SecureSession.md#closecallback)
- [context](session.SecureSession.md#context)
- [decryptKey](session.SecureSession.md#decryptkey)
- [encryptKey](session.SecureSession.md#encryptkey)
- [fabric](session.SecureSession.md#fabric)
- [id](session.SecureSession.md#id)
- [idleRetransmissionTimeoutMs](session.SecureSession.md#idleretransmissiontimeoutms)
- [peerNodeId](session.SecureSession.md#peernodeid)
- [peerSessionId](session.SecureSession.md#peersessionid)
- [retransmissionRetries](session.SecureSession.md#retransmissionretries)
- [subscriptions](session.SecureSession.md#subscriptions)
- [timestamp](session.SecureSession.md#timestamp)

### Methods

- [addSubscription](session.SecureSession.md#addsubscription)
- [clearSubscriptions](session.SecureSession.md#clearsubscriptions)
- [decode](session.SecureSession.md#decode)
- [destroy](session.SecureSession.md#destroy)
- [encode](session.SecureSession.md#encode)
- [generateNonce](session.SecureSession.md#generatenonce)
- [getAttestationChallengeKey](session.SecureSession.md#getattestationchallengekey)
- [getContext](session.SecureSession.md#getcontext)
- [getFabric](session.SecureSession.md#getfabric)
- [getId](session.SecureSession.md#getid)
- [getMrpParameters](session.SecureSession.md#getmrpparameters)
- [getName](session.SecureSession.md#getname)
- [getNodeId](session.SecureSession.md#getnodeid)
- [getPeerNodeId](session.SecureSession.md#getpeernodeid)
- [getPeerSessionId](session.SecureSession.md#getpeersessionid)
- [isPeerActive](session.SecureSession.md#ispeeractive)
- [isSecure](session.SecureSession.md#issecure)
- [notifyActivity](session.SecureSession.md#notifyactivity)
- [create](session.SecureSession.md#create)

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
| `fabric` | `undefined` \| [`Fabric`](fabric.Fabric.md) | `undefined` |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) | `undefined` |
| `peerSessionId` | `number` | `undefined` |
| `_sharedSecret` | `Uint8Array` | `undefined` |
| `decryptKey` | `Uint8Array` | `undefined` |
| `encryptKey` | `Uint8Array` | `undefined` |
| `attestationKey` | `Uint8Array` | `undefined` |
| `closeCallback` | () => `void` | `undefined` |
| `idleRetransmissionTimeoutMs` | `number` | `DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS` |
| `activeRetransmissionTimeoutMs` | `number` | `DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS` |
| `retransmissionRetries` | `number` | `DEFAULT_RETRANSMISSION_RETRIES` |

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:37](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L37)

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `number` = `DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:49](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L49)

___

### activeTimestamp

• `Private` **activeTimestamp**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:27](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L27)

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:46](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L46)

___

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:47](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L47)

___

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:38](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L38)

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:44](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L44)

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L45)

___

### fabric

• `Private` `Readonly` **fabric**: `undefined` \| [`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:40](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L40)

___

### id

• `Private` `Readonly` **id**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L39)

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `number` = `DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L48)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: [`NodeId`](datatype.NodeId.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:41](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L41)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L42)

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number` = `DEFAULT_RETRANSMISSION_RETRIES`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:50](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L50)

___

### subscriptions

• `Private` `Readonly` **subscriptions**: [`SubscriptionHandler`](protocol_interaction.SubscriptionHandler.md)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:25](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L25)

___

### timestamp

• `Private` **timestamp**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L26)

## Methods

### addSubscription

▸ **addSubscription**(`subscription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](protocol_interaction.SubscriptionHandler.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:123](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L123)

___

### clearSubscriptions

▸ **clearSubscriptions**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:128](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L128)

___

### decode

▸ **decode**(`«destructured»`): [`Message`](../interfaces/codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/codec.Packet.md) |

#### Returns

[`Message`](../interfaces/codec.Message.md)

#### Implementation of

[Session](../interfaces/session.Session.md).[decode](../interfaces/session.Session.md#decode)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L70)

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Implementation of

[Session](../interfaces/session.Session.md).[destroy](../interfaces/session.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:133](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L133)

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

[packages/matter.js/src/session/SecureSession.ts:77](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L77)

___

### generateNonce

▸ `Private` **generateNonce**(`securityFlags`, `messageId`, `nodeId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `securityFlags` | `number` |
| `messageId` | `number` |
| `nodeId` | [`NodeId`](datatype.NodeId.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:139](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L139)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:86](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L86)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/session.Session.md).[getContext](../interfaces/session.Session.md#getcontext)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:103](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L103)

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:90](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L90)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session.Session.md).[getId](../interfaces/session.Session.md#getid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:107](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L107)

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

[packages/matter.js/src/session/SecureSession.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L98)

___

### getName

▸ **getName**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/session.Session.md).[getName](../interfaces/session.Session.md#getname)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:94](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L94)

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](datatype.NodeId.md)

#### Returns

[`NodeId`](datatype.NodeId.md)

#### Implementation of

[Session](../interfaces/session.Session.md).[getNodeId](../interfaces/session.Session.md#getnodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:115](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L115)

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](datatype.NodeId.md)

#### Returns

[`NodeId`](datatype.NodeId.md)

#### Implementation of

[Session](../interfaces/session.Session.md).[getPeerNodeId](../interfaces/session.Session.md#getpeernodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:119](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L119)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session.Session.md).[getPeerSessionId](../interfaces/session.Session.md#getpeersessionid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:111](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L111)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session.Session.md).[isPeerActive](../interfaces/session.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L66)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session.Session.md).[isSecure](../interfaces/session.Session.md#issecure)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:55](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L55)

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

[Session](../interfaces/session.Session.md).[notifyActivity](../interfaces/session.Session.md#notifyactivity)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:59](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L59)

___

### create

▸ `Static` **create**<`T`\>(`context`, `id`, `fabric`, `peerNodeId`, `peerSessionId`, `sharedSecret`, `salt`, `isInitiator`, `isResumption`, `closeCallback`, `idleRetransTimeoutMs?`, `activeRetransTimeoutMs?`): `Promise`<[`SecureSession`](session.SecureSession.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |
| `id` | `number` |
| `fabric` | `undefined` \| [`Fabric`](fabric.Fabric.md) |
| `peerNodeId` | [`NodeId`](datatype.NodeId.md) |
| `peerSessionId` | `number` |
| `sharedSecret` | `Uint8Array` |
| `salt` | `Uint8Array` |
| `isInitiator` | `boolean` |
| `isResumption` | `boolean` |
| `closeCallback` | () => `void` |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](session.SecureSession.md)<`T`\>\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:29](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/session/SecureSession.ts#L29)
