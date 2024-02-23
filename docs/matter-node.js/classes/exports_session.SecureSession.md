[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/session](../modules/exports_session.md) / SecureSession

# Class: SecureSession\<T\>

[exports/session](../modules/exports_session.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](exports_session.Session.md)\<`T`\>

  ↳ **`SecureSession`**

## Table of contents

### Constructors

- [constructor](exports_session.SecureSession.md#constructor)

### Properties

- [\_closingAfterExchangeFinished](exports_session.SecureSession.md#_closingafterexchangefinished)
- [\_sendCloseMessageWhenClosing](exports_session.SecureSession.md#_sendclosemessagewhenclosing)
- [activeIntervalMs](exports_session.SecureSession.md#activeintervalms)
- [activeThresholdMs](exports_session.SecureSession.md#activethresholdms)
- [activeTimestamp](exports_session.SecureSession.md#activetimestamp)
- [attestationKey](exports_session.SecureSession.md#attestationkey)
- [closeCallback](exports_session.SecureSession.md#closecallback)
- [context](exports_session.SecureSession.md#context)
- [decryptKey](exports_session.SecureSession.md#decryptkey)
- [encryptKey](exports_session.SecureSession.md#encryptkey)
- [fabric](exports_session.SecureSession.md#fabric)
- [generateNonce](exports_session.SecureSession.md#generatenonce)
- [id](exports_session.SecureSession.md#id)
- [idleIntervalMs](exports_session.SecureSession.md#idleintervalms)
- [messageCounter](exports_session.SecureSession.md#messagecounter)
- [messageReceptionState](exports_session.SecureSession.md#messagereceptionstate)
- [peerNodeId](exports_session.SecureSession.md#peernodeid)
- [peerSessionId](exports_session.SecureSession.md#peersessionid)
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
- [getNodeId](exports_session.SecureSession.md#getnodeid)
- [getPeerNodeId](exports_session.SecureSession.md#getpeernodeid)
- [getPeerSessionId](exports_session.SecureSession.md#getpeersessionid)
- [getSessionParameters](exports_session.SecureSession.md#getsessionparameters)
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
| `args.attestationKey` | `Uint8Array` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.decryptKey` | `Uint8Array` |
| `args.encryptKey` | `Uint8Array` |
| `args.fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\> |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

[`SecureSession`](exports_session.SecureSession.md)\<`T`\>

#### Overrides

[Session](exports_session.Session.md).[constructor](exports_session.Session.md#constructor)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:41

## Properties

### \_closingAfterExchangeFinished

• `Private` **\_closingAfterExchangeFinished**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:16

___

### \_sendCloseMessageWhenClosing

• `Private` **\_sendCloseMessageWhenClosing**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:17

___

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Inherited from

[Session](exports_session.Session.md).[activeIntervalMs](exports_session.Session.md#activeintervalms)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:35

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Inherited from

[Session](exports_session.Session.md).[activeThresholdMs](exports_session.Session.md#activethresholdms)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:36

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Inherited from

[Session](exports_session.Session.md).[activeTimestamp](exports_session.Session.md#activetimestamp)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:33

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:25

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Inherited from

[Session](exports_session.Session.md).[closeCallback](exports_session.Session.md#closecallback)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:37

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:18

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:23

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:24

___

### fabric

• `Private` **fabric**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:20

___

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:81

___

### id

• `Private` `Readonly` **id**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:19

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](exports_session.Session.md).[idleIntervalMs](exports_session.Session.md#idleintervalms)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:34

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](exports_protocol.MessageCounter.md)

#### Inherited from

[Session](exports_session.Session.md).[messageCounter](exports_session.Session.md#messagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:38

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](exports_protocol.MessageReceptionState.md)

#### Inherited from

[Session](exports_session.Session.md).[messageReceptionState](exports_session.Session.md#messagereceptionstate)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:39

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:21

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:22

___

### subscriptionChangedCallback

• `Private` `Readonly` **subscriptionChangedCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:26

___

### subscriptions

• `Private` `Readonly` **subscriptions**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:15

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](exports_session.Session.md).[timestamp](exports_session.Session.md#timestamp)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:55

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.closingAfterExchangeFinished

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:56

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:67

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:74

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:57

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:65

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:73

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:76

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:60

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

#### Overrides

[Session](exports_session.Session.md).[decode](exports_session.Session.md#decode)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:61

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

#### Overrides

[Session](exports_session.Session.md).[destroy](exports_session.Session.md#destroy)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:80

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`Packet`](../interfaces/exports_codec.Packet.md)

#### Overrides

[Session](exports_session.Session.md).[encode](exports_session.Session.md#encode)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:62

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

#### Overrides

[Session](exports_session.Session.md).[end](exports_session.Session.md#end)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:78

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Overrides

[Session](exports_session.Session.md).[getAssociatedFabric](exports_session.Session.md#getassociatedfabric)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:66

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:63

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Overrides

[Session](exports_session.Session.md).[getContext](exports_session.Session.md#getcontext)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:68

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:64

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Overrides

[Session](exports_session.Session.md).[getId](exports_session.Session.md#getid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:69

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Inherited from

[Session](exports_session.Session.md).[getIncrementedMessageCounter](exports_session.Session.md#getincrementedmessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:49

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Overrides

[Session](exports_session.Session.md).[getNodeId](exports_session.Session.md#getnodeid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:71

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Overrides

[Session](exports_session.Session.md).[getPeerNodeId](exports_session.Session.md#getpeernodeid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:72

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Overrides

[Session](exports_session.Session.md).[getPeerSessionId](exports_session.Session.md#getpeersessionid)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:70

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/exports_session.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)

#### Inherited from

[Session](exports_session.Session.md).[getSessionParameters](exports_session.Session.md#getsessionparameters)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:51

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](exports_session.Session.md).[isPase](exports_session.Session.md#ispase)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:59

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](exports_session.Session.md).[isPeerActive](exports_session.Session.md#ispeeractive)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:48

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](exports_session.Session.md).[isSecure](exports_session.Session.md#issecure)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:58

___

### notifyActivity

▸ **notifyActivity**(`messageReceived`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageReceived` | `boolean` |

#### Returns

`void`

#### Inherited from

[Session](exports_session.Session.md).[notifyActivity](exports_session.Session.md#notifyactivity)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:47

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:75

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`, `_sourceNodeId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId?` | [`NodeId`](../modules/exports_datatype.md#nodeid) |

#### Returns

`void`

#### Inherited from

[Session](exports_session.Session.md).[updateMessageCounter](exports_session.Session.md#updatemessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:50

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
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.fabric` | `undefined` \| [`Fabric`](exports_fabric.Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/exports_datatype.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/exports_session.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](exports_session.SecureSession.md)\<`T`\>\>

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:27
