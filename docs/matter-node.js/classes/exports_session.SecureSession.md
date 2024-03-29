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

- [#private](exports_session.SecureSession.md##private)
- [activeIntervalMs](exports_session.SecureSession.md#activeintervalms)
- [activeThresholdMs](exports_session.SecureSession.md#activethresholdms)
- [activeTimestamp](exports_session.SecureSession.md#activetimestamp)
- [closeCallback](exports_session.SecureSession.md#closecallback)
- [generateNonce](exports_session.SecureSession.md#generatenonce)
- [idleIntervalMs](exports_session.SecureSession.md#idleintervalms)
- [messageCounter](exports_session.SecureSession.md#messagecounter)
- [messageReceptionState](exports_session.SecureSession.md#messagereceptionstate)
- [timestamp](exports_session.SecureSession.md#timestamp)

### Accessors

- [associatedFabric](exports_session.SecureSession.md#associatedfabric)
- [caseAuthenticatedTags](exports_session.SecureSession.md#caseauthenticatedtags)
- [closingAfterExchangeFinished](exports_session.SecureSession.md#closingafterexchangefinished)
- [context](exports_session.SecureSession.md#context)
- [fabric](exports_session.SecureSession.md#fabric)
- [id](exports_session.SecureSession.md#id)
- [isPase](exports_session.SecureSession.md#ispase)
- [isSecure](exports_session.SecureSession.md#issecure)
- [name](exports_session.SecureSession.md#name)
- [nodeId](exports_session.SecureSession.md#nodeid)
- [numberOfActiveSubscriptions](exports_session.SecureSession.md#numberofactivesubscriptions)
- [peerNodeId](exports_session.SecureSession.md#peernodeid)
- [peerSessionId](exports_session.SecureSession.md#peersessionid)
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
- [getAttestationChallengeKey](exports_session.SecureSession.md#getattestationchallengekey)
- [getIncrementedMessageCounter](exports_session.SecureSession.md#getincrementedmessagecounter)
- [getSessionParameters](exports_session.SecureSession.md#getsessionparameters)
- [isPeerActive](exports_session.SecureSession.md#ispeeractive)
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

packages/matter.js/dist/esm/session/SecureSession.d.ts:30

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:15

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

### generateNonce

• `Private` **generateNonce**: `any`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:70

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

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](exports_session.Session.md).[timestamp](exports_session.Session.md#timestamp)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### associatedFabric

• `get` **associatedFabric**(): [`Fabric`](exports_fabric.Fabric.md)

#### Returns

[`Fabric`](exports_fabric.Fabric.md)

#### Overrides

Session.associatedFabric

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:62

___

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/exports_datatype.md#caseauthenticatedtag)[]

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:44

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.closingAfterExchangeFinished

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:45

___

### context

• `get` **context**(): `T`

#### Returns

`T`

#### Overrides

Session.context

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:57

___

### fabric

• `get` **fabric**(): `undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](exports_fabric.Fabric.md)

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:53

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Overrides

Session.id

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:55

___

### isPase

• `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isPase

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:48

___

### isSecure

• `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isSecure

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:47

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:56

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Overrides

Session.nodeId

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:59

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:61

___

### peerNodeId

• `get` **peerNodeId**(): [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Returns

[`NodeId`](../modules/exports_datatype.md#nodeid)

#### Overrides

Session.peerNodeId

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:60

___

### peerSessionId

• `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Overrides

Session.peerSessionId

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:58

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:46

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:54

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:63

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:65

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:49

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:50

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:69

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:51

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:67

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/session/SecureSession.d.ts:52

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[Session](exports_session.Session.md).[getIncrementedMessageCounter](exports_session.Session.md#getincrementedmessagecounter)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:49

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

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](exports_session.Session.md).[isPeerActive](exports_session.Session.md#ispeeractive)

#### Defined in

packages/matter.js/dist/esm/session/Session.d.ts:48

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:64

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

packages/matter.js/dist/esm/session/SecureSession.d.ts:16
