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

- [\_closingAfterExchangeFinished](exports_session.SecureSession.md#_closingafterexchangefinished)
- [\_sendCloseMessageWhenClosing](exports_session.SecureSession.md#_sendclosemessagewhenclosing)
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
- [subscriptionChangedCallback](exports_session.SecureSession.md#subscriptionchangedcallback)
- [subscriptions](exports_session.SecureSession.md#subscriptions)
- [timestamp](exports_session.SecureSession.md#timestamp)

### Accessors

- [closingAfterExchangeFinished](exports_session.SecureSession.md#closingafterexchangefinished)
- [name](exports_session.SecureSession.md#name)
- [numberOfActiveSubscriptions](exports_session.SecureSession.md#numberofactivesubscriptions)
- [sendCloseMessageWhenClosing](exports_session.SecureSession.md#sendclosemessagewhenclosing)

### Methods

- [addAssociatedFabric](exports_session.SecureSession.md#addassociatedfabric)
- [addSubscription](exports_session.SecureSession.md#addsubscription)
- [clearSubscriptions](exports_session.SecureSession.md#clearsubscriptions)
- [close](exports_session.SecureSession.md#close)
- [decode](exports_session.SecureSession.md#decode)
- [destroy](exports_session.SecureSession.md#destroy)
- [encode](exports_session.SecureSession.md#encode)
- [end](exports_session.SecureSession.md#end)
- [getAssociatedFabric](exports_session.SecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](exports_session.SecureSession.md#getattestationchallengekey)
- [getContext](exports_session.SecureSession.md#getcontext)
- [getFabric](exports_session.SecureSession.md#getfabric)
- [getId](exports_session.SecureSession.md#getid)
- [getMrpParameters](exports_session.SecureSession.md#getmrpparameters)
- [getNodeId](exports_session.SecureSession.md#getnodeid)
- [getPeerNodeId](exports_session.SecureSession.md#getpeernodeid)
- [getPeerSessionId](exports_session.SecureSession.md#getpeersessionid)
- [isPase](exports_session.SecureSession.md#ispase)
- [isPeerActive](exports_session.SecureSession.md#ispeeractive)
- [isSecure](exports_session.SecureSession.md#issecure)
- [notifyActivity](exports_session.SecureSession.md#notifyactivity)
- [removeSubscription](exports_session.SecureSession.md#removesubscription)
- [create](exports_session.SecureSession.md#create)

## Constructors

### constructor

• **new SecureSession**<`T`\>(`args`)

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.attestationKey` | `Uint8Array` |
| `args.closeCallback` | () => `Promise`<`void`\> |
| `args.context` | `T` |
| `args.decryptKey` | `Uint8Array` |
| `args.encryptKey` | `Uint8Array` |
| `args.fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `args.id` | `number` |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.retransmissionRetries?` | `number` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:48

## Properties

### \_closingAfterExchangeFinished

• `Private` **\_closingAfterExchangeFinished**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:18

___

### \_sendCloseMessageWhenClosing

• `Private` **\_sendCloseMessageWhenClosing**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:19

___

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:31

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:17

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:27

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:28

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:20

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:25

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:26

___

### fabric

• `Private` **fabric**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:22

___

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:95

___

### id

• `Private` `Readonly` **id**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:21

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:30

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:23

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:24

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:32

___

### subscriptionChangedCallback

• `Private` `Readonly` **subscriptionChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:29

___

### subscriptions

• `Private` `Readonly` **subscriptions**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:15

___

### timestamp

• **timestamp**: `number`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:16

## Accessors

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[closingAfterExchangeFinished](../interfaces/exports_session.Session.md#closingafterexchangefinished)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:63

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[name](../interfaces/exports_session.Session.md#name)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:76

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:88

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:64

## Methods

### addAssociatedFabric

▸ **addAssociatedFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](exports_fabric.Fabric.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:74

___

### addSubscription

▸ **addSubscription**(`subscription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](exports_interaction.SubscriptionHandler.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:87

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:90

___

### close

▸ **close**(`closeAfterExchangeFinished?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:67

___

### decode

▸ **decode**(`«destructured»`, `aad`): [`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`DecodedPacket`](../interfaces/exports_codec.DecodedPacket.md) |
| `aad` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[decode](../interfaces/exports_session.Session.md#decode)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:70

___

### destroy

▸ **destroy**(`sendClose`, `closeAfterExchangeFinished?`): `Promise`<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[destroy](../interfaces/exports_session.Session.md#destroy)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:94

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:71

___

### end

▸ **end**(`sendClose`, `closeAfterExchangeFinished?`): `Promise`<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`<`void`\>

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[end](../interfaces/exports_session.Session.md#end)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:92

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getAssociatedFabric](../interfaces/exports_session.Session.md#getassociatedfabric)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:75

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:72

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getContext](../interfaces/exports_session.Session.md#getcontext)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:82

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:73

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getId](../interfaces/exports_session.Session.md#getid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:83

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:77

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getNodeId](../interfaces/exports_session.Session.md#getnodeid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:85

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerNodeId](../interfaces/exports_session.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:86

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerSessionId](../interfaces/exports_session.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:84

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isPase](../interfaces/exports_session.Session.md#ispase)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:66

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isPeerActive](../interfaces/exports_session.Session.md#ispeeractive)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:69

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isSecure](../interfaces/exports_session.Session.md#issecure)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:65

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:68

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:89

___

### create

▸ `Static` **create**<`T`\>(`args`): `Promise`<[`SecureSession`](exports_session.SecureSession.md)<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.closeCallback` | () => `Promise`<`void`\> |
| `args.context` | `T` |
| `args.fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `args.id` | `number` |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`<[`SecureSession`](exports_session.SecureSession.md)<`T`\>\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:33
