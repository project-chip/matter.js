[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / SecureSession

# Class: SecureSession\<T\>

[exports/session](../modules/exports_session.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/exports_session.Session.md)\<`T`\>

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
- [messageCounter](exports_session.SecureSession.md#messagecounter)
- [messageReceptionState](exports_session.SecureSession.md#messagereceptionstate)
- [peerNodeId](exports_session.SecureSession.md#peernodeid)
- [peerSessionId](exports_session.SecureSession.md#peersessionid)
- [retransmissionRetries](exports_session.SecureSession.md#retransmissionretries)
- [subscriptionChangedCallback](exports_session.SecureSession.md#subscriptionchangedcallback)
- [subscriptions](exports_session.SecureSession.md#subscriptions)
- [timestamp](exports_session.SecureSession.md#timestamp)

### Accessors

- [caseAuthenticatedTags](exports_session.SecureSession.md#caseauthenticatedtags)
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
- [getIncrementedMessageCounter](exports_session.SecureSession.md#getincrementedmessagecounter)
- [getMrpParameters](exports_session.SecureSession.md#getmrpparameters)
- [getNodeId](exports_session.SecureSession.md#getnodeid)
- [getPeerNodeId](exports_session.SecureSession.md#getpeernodeid)
- [getPeerSessionId](exports_session.SecureSession.md#getpeersessionid)
- [isPase](exports_session.SecureSession.md#ispase)
- [isPeerActive](exports_session.SecureSession.md#ispeeractive)
- [isSecure](exports_session.SecureSession.md#issecure)
- [notifyActivity](exports_session.SecureSession.md#notifyactivity)
- [removeSubscription](exports_session.SecureSession.md#removesubscription)
- [updateMessageCounter](exports_session.SecureSession.md#updatemessagecounter)
- [create](exports_session.SecureSession.md#create)

## Constructors

### constructor

• **new SecureSession**\<`T`\>(`args`): [`SecureSession`](exports_session.SecureSession.md)\<`T`\>

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
| `args.closeCallback` | () => `Promise`\<`void`\> |
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

#### Returns

[`SecureSession`](exports_session.SecureSession.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:50

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:98

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

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:33

___

### messageReceptionState

• `Private` `Readonly` **messageReceptionState**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:34

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

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:65

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[closingAfterExchangeFinished](../interfaces/exports_session.Session.md#closingafterexchangefinished)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:66

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[name](../interfaces/exports_session.Session.md#name)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:79

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:91

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:67

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:77

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:90

___

### clearSubscriptions

▸ **clearSubscriptions**(`flushSubscriptions?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `flushSubscriptions?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:93

___

### close

▸ **close**(`closeAfterExchangeFinished?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:70

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:73

___

### destroy

▸ **destroy**(`sendClose?`, `closeAfterExchangeFinished?`): `Promise`\<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose?` | `boolean` |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[destroy](../interfaces/exports_session.Session.md#destroy)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:97

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:74

___

### end

▸ **end**(`sendClose`, `closeAfterExchangeFinished?`): `Promise`\<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[end](../interfaces/exports_session.Session.md#end)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:95

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getAssociatedFabric](../interfaces/exports_session.Session.md#getassociatedfabric)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:78

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:75

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getContext](../interfaces/exports_session.Session.md#getcontext)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:85

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:76

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getId](../interfaces/exports_session.Session.md#getid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:86

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getIncrementedMessageCounter](../interfaces/exports_session.Session.md#getincrementedmessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:99

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:80

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getNodeId](../interfaces/exports_session.Session.md#getnodeid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:88

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerNodeId](../interfaces/exports_session.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:89

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[getPeerSessionId](../interfaces/exports_session.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:87

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isPase](../interfaces/exports_session.Session.md#ispase)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:69

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isPeerActive](../interfaces/exports_session.Session.md#ispeeractive)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:72

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[isSecure](../interfaces/exports_session.Session.md#issecure)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:68

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:71

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:92

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |

#### Returns

`void`

#### Implementation of

[Session](../interfaces/exports_session.Session.md).[updateMessageCounter](../interfaces/exports_session.Session.md#updatemessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:100

___

### create

▸ **create**\<`T`\>(`args`): `Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<`T`\>\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
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

`Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<`T`\>\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:35
