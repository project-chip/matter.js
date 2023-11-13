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

- [\_closingAfterExchangeFinished](internal_.SecureSession.md#_closingafterexchangefinished)
- [\_sendCloseMessageWhenClosing](internal_.SecureSession.md#_sendclosemessagewhenclosing)
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
- [subscriptionChangedCallback](internal_.SecureSession.md#subscriptionchangedcallback)
- [subscriptions](internal_.SecureSession.md#subscriptions)
- [timestamp](internal_.SecureSession.md#timestamp)

### Accessors

- [closingAfterExchangeFinished](internal_.SecureSession.md#closingafterexchangefinished)
- [name](internal_.SecureSession.md#name)
- [numberOfActiveSubscriptions](internal_.SecureSession.md#numberofactivesubscriptions)
- [sendCloseMessageWhenClosing](internal_.SecureSession.md#sendclosemessagewhenclosing)

### Methods

- [addAssociatedFabric](internal_.SecureSession.md#addassociatedfabric)
- [addSubscription](internal_.SecureSession.md#addsubscription)
- [clearSubscriptions](internal_.SecureSession.md#clearsubscriptions)
- [close](internal_.SecureSession.md#close)
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
- [isPase](internal_.SecureSession.md#ispase)
- [isPeerActive](internal_.SecureSession.md#ispeeractive)
- [isSecure](internal_.SecureSession.md#issecure)
- [notifyActivity](internal_.SecureSession.md#notifyactivity)
- [removeSubscription](internal_.SecureSession.md#removesubscription)
- [create](internal_.SecureSession.md#create)

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
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.id` | `number` |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.retransmissionRetries?` | `number` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:48

## Properties

### \_closingAfterExchangeFinished

• `Private` **\_closingAfterExchangeFinished**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:18

___

### \_sendCloseMessageWhenClosing

• `Private` **\_sendCloseMessageWhenClosing**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:19

___

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:31

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:17

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:27

___

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:28

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:20

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:25

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:26

___

### fabric

• `Private` **fabric**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:22

___

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:95

___

### id

• `Private` `Readonly` **id**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:21

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:30

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:23

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:24

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:32

___

### subscriptionChangedCallback

• `Private` `Readonly` **subscriptionChangedCallback**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:29

___

### subscriptions

• `Private` `Readonly` **subscriptions**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:15

___

### timestamp

• **timestamp**: `number`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:16

## Accessors

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[closingAfterExchangeFinished](../interfaces/internal_.Session.md#closingafterexchangefinished)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:63

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[name](../interfaces/internal_.Session.md#name)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:76

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:88

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:64

## Methods

### addAssociatedFabric

▸ **addAssociatedFabric**(`fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:74

___

### addSubscription

▸ **addSubscription**(`subscription`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](internal_.SubscriptionHandler.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:87

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

matter.js/dist/esm/session/SecureSession.d.ts:90

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

matter.js/dist/esm/session/SecureSession.d.ts:67

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

matter.js/dist/esm/session/SecureSession.d.ts:70

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

[Session](../interfaces/internal_.Session.md).[destroy](../interfaces/internal_.Session.md#destroy)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:94

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

matter.js/dist/esm/session/SecureSession.d.ts:71

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

[Session](../interfaces/internal_.Session.md).[end](../interfaces/internal_.Session.md#end)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:92

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getAssociatedFabric](../interfaces/internal_.Session.md#getassociatedfabric)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:75

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:72

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getContext](../interfaces/internal_.Session.md#getcontext)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:82

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:73

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getId](../interfaces/internal_.Session.md#getid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:83

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

matter.js/dist/esm/session/SecureSession.d.ts:77

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getNodeId](../interfaces/internal_.Session.md#getnodeid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:85

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerNodeId](../interfaces/internal_.Session.md#getpeernodeid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:86

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerSessionId](../interfaces/internal_.Session.md#getpeersessionid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:84

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isPase](../interfaces/internal_.Session.md#ispase)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:66

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isPeerActive](../interfaces/internal_.Session.md#ispeeractive)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:69

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isSecure](../interfaces/internal_.Session.md#issecure)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:65

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

matter.js/dist/esm/session/SecureSession.d.ts:68

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

matter.js/dist/esm/session/SecureSession.d.ts:89

___

### create

▸ `Static` **create**<`T`\>(`args`): `Promise`<[`SecureSession`](internal_.SecureSession.md)<`T`\>\>

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
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.id` | `number` |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`<[`SecureSession`](internal_.SecureSession.md)<`T`\>\>

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:33
