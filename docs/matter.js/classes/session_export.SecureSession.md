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

- [addSubscription](session_export.SecureSession.md#addsubscription)
- [clearSubscriptions](session_export.SecureSession.md#clearsubscriptions)
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
| `closeCallback` | () => `Promise`<`void`\> | `undefined` |
| `idleRetransmissionTimeoutMs` | `number` | `DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS` |
| `activeRetransmissionTimeoutMs` | `number` | `DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS` |
| `retransmissionRetries` | `number` | `DEFAULT_RETRANSMISSION_RETRIES` |

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:77](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L77)

## Properties

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `number` = `DEFAULT_ACTIVE_RETRANSMISSION_TIMEOUT_MS`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L89)

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:36](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L36)

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:86](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L86)

___

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:87](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L87)

___

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:78](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L78)

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:84](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L84)

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:85](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L85)

___

### fabric

• `Private` `Readonly` **fabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:80](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L80)

___

### id

• `Private` `Readonly` **id**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L79)

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `number` = `DEFAULT_IDLE_RETRANSMISSION_TIMEOUT_MS`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:88](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L88)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:81](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L81)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:82](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L82)

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number` = `DEFAULT_RETRANSMISSION_RETRIES`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:90](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L90)

___

### subscriptions

• `Private` `Readonly` **subscriptions**: [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L34)

___

### timestamp

• **timestamp**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:35](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L35)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[name](../interfaces/session_export.Session.md#name)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:143](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L143)

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:177](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L177)

## Methods

### addSubscription

▸ **addSubscription**(`subscription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:172](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L172)

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

[packages/matter.js/src/session/SecureSession.ts:189](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L189)

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

[packages/matter.js/src/session/SecureSession.ts:111](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L111)

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[destroy](../interfaces/session_export.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:203](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L203)

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

[packages/matter.js/src/session/SecureSession.ts:121](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L121)

___

### end

▸ **end**(): `Promise`<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[end](../interfaces/session_export.Session.md#end)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:197](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L197)

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

[packages/matter.js/src/session/SecureSession.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L209)

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getAssociatedFabric](../interfaces/session_export.Session.md#getassociatedfabric)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:138](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L138)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:130](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L130)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getContext](../interfaces/session_export.Session.md#getcontext)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:152](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L152)

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:134](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L134)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getId](../interfaces/session_export.Session.md#getid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:156](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L156)

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

[packages/matter.js/src/session/SecureSession.ts:147](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L147)

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getNodeId](../interfaces/session_export.Session.md#getnodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:164](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L164)

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerNodeId](../interfaces/session_export.Session.md#getpeernodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:168](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L168)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerSessionId](../interfaces/session_export.Session.md#getpeersessionid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:160](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L160)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPeerActive](../interfaces/session_export.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:107](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L107)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isSecure](../interfaces/session_export.Session.md#issecure)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:95](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L95)

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

[packages/matter.js/src/session/SecureSession.ts:99](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L99)

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

[packages/matter.js/src/session/SecureSession.ts:181](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L181)

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
| `closeCallback` | () => `Promise`<`void`\> |
| `idleRetransTimeoutMs?` | `number` |
| `activeRetransTimeoutMs?` | `number` |

#### Returns

`Promise`<[`SecureSession`](session_export.SecureSession.md)<`T`\>\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:38](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/session/SecureSession.ts#L38)
