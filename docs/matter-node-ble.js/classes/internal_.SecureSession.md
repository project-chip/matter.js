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

- [#private](internal_.SecureSession.md##private)
- [activeIntervalMs](internal_.SecureSession.md#activeintervalms)
- [activeThresholdMs](internal_.SecureSession.md#activethresholdms)
- [activeTimestamp](internal_.SecureSession.md#activetimestamp)
- [closeCallback](internal_.SecureSession.md#closecallback)
- [generateNonce](internal_.SecureSession.md#generatenonce)
- [idleIntervalMs](internal_.SecureSession.md#idleintervalms)
- [messageCounter](internal_.SecureSession.md#messagecounter)
- [messageReceptionState](internal_.SecureSession.md#messagereceptionstate)
- [timestamp](internal_.SecureSession.md#timestamp)

### Accessors

- [associatedFabric](internal_.SecureSession.md#associatedfabric)
- [caseAuthenticatedTags](internal_.SecureSession.md#caseauthenticatedtags)
- [closingAfterExchangeFinished](internal_.SecureSession.md#closingafterexchangefinished)
- [context](internal_.SecureSession.md#context)
- [fabric](internal_.SecureSession.md#fabric)
- [id](internal_.SecureSession.md#id)
- [isPase](internal_.SecureSession.md#ispase)
- [isSecure](internal_.SecureSession.md#issecure)
- [name](internal_.SecureSession.md#name)
- [nodeId](internal_.SecureSession.md#nodeid)
- [numberOfActiveSubscriptions](internal_.SecureSession.md#numberofactivesubscriptions)
- [peerNodeId](internal_.SecureSession.md#peernodeid)
- [peerSessionId](internal_.SecureSession.md#peersessionid)
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
- [getAttestationChallengeKey](internal_.SecureSession.md#getattestationchallengekey)
- [getIncrementedMessageCounter](internal_.SecureSession.md#getincrementedmessagecounter)
- [getSessionParameters](internal_.SecureSession.md#getsessionparameters)
- [isPeerActive](internal_.SecureSession.md#ispeeractive)
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

matter.js/dist/esm/session/SecureSession.d.ts:30

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:15

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

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:70

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

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](internal_.Session.md).[timestamp](internal_.Session.md#timestamp)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### associatedFabric

• `get` **associatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Overrides

Session.associatedFabric

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:62

___

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/internal_.md#caseauthenticatedtag)[]

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:44

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.closingAfterExchangeFinished

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:45

___

### context

• `get` **context**(): `T`

#### Returns

`T`

#### Overrides

Session.context

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:57

___

### fabric

• `get` **fabric**(): `undefined` \| [`Fabric`](internal_.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](internal_.Fabric.md)

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:53

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Overrides

Session.id

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:55

___

### isPase

• `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isPase

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:48

___

### isSecure

• `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isSecure

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:47

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:56

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Overrides

Session.nodeId

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:59

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:61

___

### peerNodeId

• `get` **peerNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Overrides

Session.peerNodeId

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:60

___

### peerSessionId

• `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Overrides

Session.peerSessionId

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:58

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:46

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

matter.js/dist/esm/session/SecureSession.d.ts:54

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

matter.js/dist/esm/session/SecureSession.d.ts:63

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

matter.js/dist/esm/session/SecureSession.d.ts:65

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

matter.js/dist/esm/session/SecureSession.d.ts:49

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

matter.js/dist/esm/session/SecureSession.d.ts:50

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

matter.js/dist/esm/session/SecureSession.d.ts:69

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

matter.js/dist/esm/session/SecureSession.d.ts:51

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

matter.js/dist/esm/session/SecureSession.d.ts:67

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/session/SecureSession.d.ts:52

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[Session](internal_.Session.md).[getIncrementedMessageCounter](internal_.Session.md#getincrementedmessagecounter)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:49

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

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](internal_.Session.md).[isPeerActive](internal_.Session.md#ispeeractive)

#### Defined in

matter.js/dist/esm/session/Session.d.ts:48

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

matter.js/dist/esm/session/SecureSession.d.ts:64

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

matter.js/dist/esm/session/SecureSession.d.ts:16
