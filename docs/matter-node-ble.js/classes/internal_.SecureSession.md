[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / SecureSession

# Class: SecureSession\<T\>

[\<internal\>](../modules/internal_.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](internal_.Session.md)\<`T`\>

  ↳ **`SecureSession`**

## Table of contents

### Constructors

- [constructor](internal_.SecureSession.md#constructor)

### Properties

- [\_closingAfterExchangeFinished](internal_.SecureSession.md#_closingafterexchangefinished)
- [\_sendCloseMessageWhenClosing](internal_.SecureSession.md#_sendclosemessagewhenclosing)
- [activeIntervalMs](internal_.SecureSession.md#activeintervalms)
- [activeThresholdMs](internal_.SecureSession.md#activethresholdms)
- [activeTimestamp](internal_.SecureSession.md#activetimestamp)
- [attestationKey](internal_.SecureSession.md#attestationkey)
- [closeCallback](internal_.SecureSession.md#closecallback)
- [context](internal_.SecureSession.md#context)
- [decryptKey](internal_.SecureSession.md#decryptkey)
- [encryptKey](internal_.SecureSession.md#encryptkey)
- [fabric](internal_.SecureSession.md#fabric)
- [generateNonce](internal_.SecureSession.md#generatenonce)
- [id](internal_.SecureSession.md#id)
- [idleIntervalMs](internal_.SecureSession.md#idleintervalms)
- [messageCounter](internal_.SecureSession.md#messagecounter)
- [messageReceptionState](internal_.SecureSession.md#messagereceptionstate)
- [peerNodeId](internal_.SecureSession.md#peernodeid)
- [peerSessionId](internal_.SecureSession.md#peersessionid)
- [subscriptionChangedCallback](internal_.SecureSession.md#subscriptionchangedcallback)
- [subscriptions](internal_.SecureSession.md#subscriptions)
- [timestamp](internal_.SecureSession.md#timestamp)

### Accessors

- [caseAuthenticatedTags](internal_.SecureSession.md#caseauthenticatedtags)
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
- [getIncrementedMessageCounter](internal_.SecureSession.md#getincrementedmessagecounter)
- [getNodeId](internal_.SecureSession.md#getnodeid)
- [getPeerNodeId](internal_.SecureSession.md#getpeernodeid)
- [getPeerSessionId](internal_.SecureSession.md#getpeersessionid)
- [getSessionParameters](internal_.SecureSession.md#getsessionparameters)
- [isPase](internal_.SecureSession.md#ispase)
- [isPeerActive](internal_.SecureSession.md#ispeeractive)
- [isSecure](internal_.SecureSession.md#issecure)
- [notifyActivity](internal_.SecureSession.md#notifyactivity)
- [removeSubscription](internal_.SecureSession.md#removesubscription)
- [updateMessageCounter](internal_.SecureSession.md#updatemessagecounter)
- [create](internal_.SecureSession.md#create)

## Constructors

### constructor

• **new SecureSession**\<`T`\>(`args`): [`SecureSession`](internal_.SecureSession.md)\<`T`\>

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
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

[`SecureSession`](internal_.SecureSession.md)\<`T`\>

#### Overrides

[Session](internal_.Session.md).[constructor](internal_.Session.md#constructor)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:41

## Properties

### \_closingAfterExchangeFinished

• `Private` **\_closingAfterExchangeFinished**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:16

___

### \_sendCloseMessageWhenClosing

• `Private` **\_sendCloseMessageWhenClosing**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:17

___

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Inherited from

[Session](internal_.Session.md).[activeIntervalMs](internal_.Session.md#activeintervalms)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:35

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Inherited from

[Session](internal_.Session.md).[activeThresholdMs](internal_.Session.md#activethresholdms)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:36

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Inherited from

[Session](internal_.Session.md).[activeTimestamp](internal_.Session.md#activetimestamp)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:33

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:25

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Inherited from

[Session](internal_.Session.md).[closeCallback](internal_.Session.md#closecallback)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:37

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:18

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:23

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:24

___

### fabric

• `Private` **fabric**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:20

___

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:81

___

### id

• `Private` `Readonly` **id**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:19

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](internal_.Session.md).[idleIntervalMs](internal_.Session.md#idleintervalms)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:34

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](internal_.MessageCounter.md)

#### Inherited from

[Session](internal_.Session.md).[messageCounter](internal_.Session.md#messagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:38

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](internal_.MessageReceptionState.md)

#### Inherited from

[Session](internal_.Session.md).[messageReceptionState](internal_.Session.md#messagereceptionstate)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:39

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:21

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:22

___

### subscriptionChangedCallback

• `Private` `Readonly` **subscriptionChangedCallback**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:26

___

### subscriptions

• `Private` `Readonly` **subscriptions**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:15

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](internal_.Session.md).[timestamp](internal_.Session.md#timestamp)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[]

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:55

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.closingAfterExchangeFinished

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:56

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:67

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:74

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:57

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

matter.js/dist/esm/session/SecureSession.d.ts:65

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

matter.js/dist/esm/session/SecureSession.d.ts:73

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

matter.js/dist/esm/session/SecureSession.d.ts:76

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

matter.js/dist/esm/session/SecureSession.d.ts:60

___

### decode

▸ **decode**(`«destructured»`, `aad`): [`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`DecodedPacket`](../interfaces/internal_.DecodedPacket.md) |
| `aad` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Overrides

[Session](internal_.Session.md).[decode](internal_.Session.md#decode)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:61

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

[Session](internal_.Session.md).[destroy](internal_.Session.md#destroy)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:80

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/internal_.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

[`Packet`](../interfaces/internal_.Packet.md)

#### Overrides

[Session](internal_.Session.md).[encode](internal_.Session.md#encode)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:62

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

[Session](internal_.Session.md).[end](internal_.Session.md#end)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:78

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Overrides

[Session](internal_.Session.md).[getAssociatedFabric](internal_.Session.md#getassociatedfabric)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:66

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:63

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Overrides

[Session](internal_.Session.md).[getContext](internal_.Session.md#getcontext)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:68

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:64

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Overrides

[Session](internal_.Session.md).[getId](internal_.Session.md#getid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:69

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Inherited from

[Session](internal_.Session.md).[getIncrementedMessageCounter](internal_.Session.md#getincrementedmessagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:49

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Overrides

[Session](internal_.Session.md).[getNodeId](internal_.Session.md#getnodeid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:71

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Overrides

[Session](internal_.Session.md).[getPeerNodeId](internal_.Session.md#getpeernodeid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:72

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Overrides

[Session](internal_.Session.md).[getPeerSessionId](internal_.Session.md#getpeersessionid)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:70

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/internal_.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/internal_.SessionParameters.md)

#### Inherited from

[Session](internal_.Session.md).[getSessionParameters](internal_.Session.md#getsessionparameters)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:51

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](internal_.Session.md).[isPase](internal_.Session.md#ispase)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:59

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](internal_.Session.md).[isPeerActive](internal_.Session.md#ispeeractive)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:48

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](internal_.Session.md).[isSecure](internal_.Session.md#issecure)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:58

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

[Session](internal_.Session.md).[notifyActivity](internal_.Session.md#notifyactivity)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:47

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

matter.js/dist/esm/session/SecureSession.d.ts:75

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`, `_sourceNodeId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

`void`

#### Inherited from

[Session](internal_.Session.md).[updateMessageCounter](internal_.Session.md#updatemessagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:50

___

### create

▸ **create**\<`T`\>(`args`): `Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`T`\>\>

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
| `args.fabric` | `undefined` \| [`Fabric`](internal_.Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/internal_.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/internal_.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](internal_.SecureSession.md)\<`T`\>\>

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:27
