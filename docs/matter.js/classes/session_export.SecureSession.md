[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / SecureSession

# Class: SecureSession\<T\>

[session/export](../modules/session_export.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](session_export.Session.md)\<`T`\>

  ↳ **`SecureSession`**

## Table of contents

### Constructors

- [constructor](session_export.SecureSession.md#constructor)

### Properties

- [\_closingAfterExchangeFinished](session_export.SecureSession.md#_closingafterexchangefinished)
- [\_sendCloseMessageWhenClosing](session_export.SecureSession.md#_sendclosemessagewhenclosing)
- [activeIntervalMs](session_export.SecureSession.md#activeintervalms)
- [activeThresholdMs](session_export.SecureSession.md#activethresholdms)
- [activeTimestamp](session_export.SecureSession.md#activetimestamp)
- [attestationKey](session_export.SecureSession.md#attestationkey)
- [closeCallback](session_export.SecureSession.md#closecallback)
- [context](session_export.SecureSession.md#context)
- [decryptKey](session_export.SecureSession.md#decryptkey)
- [encryptKey](session_export.SecureSession.md#encryptkey)
- [fabric](session_export.SecureSession.md#fabric)
- [id](session_export.SecureSession.md#id)
- [idleIntervalMs](session_export.SecureSession.md#idleintervalms)
- [messageCounter](session_export.SecureSession.md#messagecounter)
- [messageReceptionState](session_export.SecureSession.md#messagereceptionstate)
- [peerNodeId](session_export.SecureSession.md#peernodeid)
- [peerSessionId](session_export.SecureSession.md#peersessionid)
- [subscriptionChangedCallback](session_export.SecureSession.md#subscriptionchangedcallback)
- [subscriptions](session_export.SecureSession.md#subscriptions)
- [timestamp](session_export.SecureSession.md#timestamp)

### Accessors

- [caseAuthenticatedTags](session_export.SecureSession.md#caseauthenticatedtags)
- [closingAfterExchangeFinished](session_export.SecureSession.md#closingafterexchangefinished)
- [name](session_export.SecureSession.md#name)
- [numberOfActiveSubscriptions](session_export.SecureSession.md#numberofactivesubscriptions)
- [sendCloseMessageWhenClosing](session_export.SecureSession.md#sendclosemessagewhenclosing)

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
- [getIncrementedMessageCounter](session_export.SecureSession.md#getincrementedmessagecounter)
- [getNodeId](session_export.SecureSession.md#getnodeid)
- [getPeerNodeId](session_export.SecureSession.md#getpeernodeid)
- [getPeerSessionId](session_export.SecureSession.md#getpeersessionid)
- [getSessionParameters](session_export.SecureSession.md#getsessionparameters)
- [isPase](session_export.SecureSession.md#ispase)
- [isPeerActive](session_export.SecureSession.md#ispeeractive)
- [isSecure](session_export.SecureSession.md#issecure)
- [notifyActivity](session_export.SecureSession.md#notifyactivity)
- [removeSubscription](session_export.SecureSession.md#removesubscription)
- [updateMessageCounter](session_export.SecureSession.md#updatemessagecounter)
- [create](session_export.SecureSession.md#create)

## Constructors

### constructor

• **new SecureSession**\<`T`\>(`args`): [`SecureSession`](session_export.SecureSession.md)\<`T`\>

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
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`T`\>

#### Overrides

[Session](session_export.Session.md).[constructor](session_export.Session.md#constructor)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:94](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L94)

## Properties

### \_closingAfterExchangeFinished

• `Private` **\_closingAfterExchangeFinished**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:29](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L29)

___

### \_sendCloseMessageWhenClosing

• `Private` **\_sendCloseMessageWhenClosing**: `boolean` = `true`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:30](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L30)

___

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[activeIntervalMs](session_export.Session.md#activeintervalms)

#### Defined in

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L44)

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[activeThresholdMs](session_export.Session.md#activethresholdms)

#### Defined in

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L45)

___

### activeTimestamp

• **activeTimestamp**: `number` = `0`

#### Inherited from

[Session](session_export.Session.md).[activeTimestamp](session_export.Session.md#activetimestamp)

#### Defined in

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L42)

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:38](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L38)

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Inherited from

[Session](session_export.Session.md).[closeCallback](session_export.Session.md#closecallback)

#### Defined in

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L46)

___

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:31](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L31)

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:36](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L36)

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:37](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L37)

___

### fabric

• `Private` **fabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:33](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L33)

___

### id

• `Private` `Readonly` **id**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:32](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L32)

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[idleIntervalMs](session_export.Session.md#idleintervalms)

#### Defined in

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L43)

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Inherited from

[Session](session_export.Session.md).[messageCounter](session_export.Session.md#messagecounter)

#### Defined in

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L47)

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](protocol_export.MessageReceptionState.md)

#### Inherited from

[Session](session_export.Session.md).[messageReceptionState](session_export.Session.md#messagereceptionstate)

#### Defined in

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L48)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:34](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L34)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:35](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L35)

___

### subscriptionChangedCallback

• `Private` `Readonly` **subscriptionChangedCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:39](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L39)

___

### subscriptions

• `Private` `Readonly` **subscriptions**: [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:28](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L28)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](session_export.Session.md).[timestamp](session_export.Session.md#timestamp)

#### Defined in

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:154](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L154)

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.closingAfterExchangeFinished

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:158](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L158)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:232](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L232)

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:262](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L262)

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:162](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L162)

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

[packages/matter.js/src/session/SecureSession.ts:218](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L218)

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

[packages/matter.js/src/session/SecureSession.ts:256](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L256)

___

### clearSubscriptions

▸ **clearSubscriptions**(`flushSubscriptions?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `flushSubscriptions` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:275](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L275)

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

[packages/matter.js/src/session/SecureSession.ts:174](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L174)

___

### decode

▸ **decode**(`«destructured»`, `aad`): [`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md) |
| `aad` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Overrides

[Session](session_export.Session.md).[decode](session_export.Session.md#decode)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:181](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L181)

___

### destroy

▸ **destroy**(`sendClose?`, `closeAfterExchangeFinished?`): `Promise`\<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sendClose` | `boolean` | `false` |
| `closeAfterExchangeFinished` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](session_export.Session.md).[destroy](session_export.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:289](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L289)

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/codec_export.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

[`Packet`](../interfaces/codec_export.Packet.md)

#### Overrides

[Session](session_export.Session.md).[encode](session_export.Session.md#encode)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:198](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L198)

___

### end

▸ **end**(`sendClose`, `closeAfterExchangeFinished?`): `Promise`\<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `sendClose` | `boolean` | `undefined` |
| `closeAfterExchangeFinished` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](session_export.Session.md).[end](session_export.Session.md#end)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:283](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L283)

___

### generateNonce

▸ **generateNonce**(`securityFlags`, `messageId`, `nodeId`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `securityFlags` | `number` |
| `messageId` | `number` |
| `nodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:304](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L304)

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Overrides

[Session](session_export.Session.md).[getAssociatedFabric](session_export.Session.md#getassociatedfabric)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:225](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L225)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:210](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L210)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Overrides

[Session](session_export.Session.md).[getContext](session_export.Session.md#getcontext)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:236](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L236)

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:214](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L214)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Overrides

[Session](session_export.Session.md).[getId](session_export.Session.md#getid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:240](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L240)

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Inherited from

[Session](session_export.Session.md).[getIncrementedMessageCounter](session_export.Session.md#getincrementedmessagecounter)

#### Defined in

[packages/matter.js/src/session/Session.ts:91](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L91)

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Overrides

[Session](session_export.Session.md).[getNodeId](session_export.Session.md#getnodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:248](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L248)

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Overrides

[Session](session_export.Session.md).[getPeerNodeId](session_export.Session.md#getpeernodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:252](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L252)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Overrides

[Session](session_export.Session.md).[getPeerSessionId](session_export.Session.md#getpeersessionid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:244](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L244)

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Inherited from

[Session](session_export.Session.md).[getSessionParameters](session_export.Session.md#getsessionparameters)

#### Defined in

[packages/matter.js/src/session/Session.ts:99](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L99)

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](session_export.Session.md).[isPase](session_export.Session.md#ispase)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:170](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L170)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](session_export.Session.md).[isPeerActive](session_export.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/Session.ts:87](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L87)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

[Session](session_export.Session.md).[isSecure](session_export.Session.md#issecure)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:166](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L166)

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

[Session](session_export.Session.md).[notifyActivity](session_export.Session.md#notifyactivity)

#### Defined in

[packages/matter.js/src/session/Session.ts:79](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L79)

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

[packages/matter.js/src/session/SecureSession.ts:266](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L266)

___

### updateMessageCounter

▸ **updateMessageCounter**(`messageCounter`, `_sourceNodeId?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

`void`

#### Inherited from

[Session](session_export.Session.md).[updateMessageCounter](session_export.Session.md#updatemessagecounter)

#### Defined in

[packages/matter.js/src/session/Session.ts:95](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L95)

___

### create

▸ **create**\<`T`\>(`args`): `Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`T`\>\>

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
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:41](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/SecureSession.ts#L41)
