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

- [#attestationKey](session_export.SecureSession.md##attestationkey)
- [#caseAuthenticatedTags](session_export.SecureSession.md##caseauthenticatedtags)
- [#closingAfterExchangeFinished](session_export.SecureSession.md##closingafterexchangefinished)
- [#context](session_export.SecureSession.md##context)
- [#decryptKey](session_export.SecureSession.md##decryptkey)
- [#encryptKey](session_export.SecureSession.md##encryptkey)
- [#fabric](session_export.SecureSession.md##fabric)
- [#id](session_export.SecureSession.md##id)
- [#peerNodeId](session_export.SecureSession.md##peernodeid)
- [#peerSessionId](session_export.SecureSession.md##peersessionid)
- [#sendCloseMessageWhenClosing](session_export.SecureSession.md##sendclosemessagewhenclosing)
- [#subscriptionChangedCallback](session_export.SecureSession.md##subscriptionchangedcallback)
- [#subscriptions](session_export.SecureSession.md##subscriptions)
- [activeIntervalMs](session_export.SecureSession.md#activeintervalms)
- [activeThresholdMs](session_export.SecureSession.md#activethresholdms)
- [activeTimestamp](session_export.SecureSession.md#activetimestamp)
- [closeCallback](session_export.SecureSession.md#closecallback)
- [idleIntervalMs](session_export.SecureSession.md#idleintervalms)
- [messageCounter](session_export.SecureSession.md#messagecounter)
- [messageReceptionState](session_export.SecureSession.md#messagereceptionstate)
- [timestamp](session_export.SecureSession.md#timestamp)

### Accessors

- [associatedFabric](session_export.SecureSession.md#associatedfabric)
- [caseAuthenticatedTags](session_export.SecureSession.md#caseauthenticatedtags)
- [closingAfterExchangeFinished](session_export.SecureSession.md#closingafterexchangefinished)
- [context](session_export.SecureSession.md#context)
- [fabric](session_export.SecureSession.md#fabric)
- [id](session_export.SecureSession.md#id)
- [isPase](session_export.SecureSession.md#ispase)
- [isSecure](session_export.SecureSession.md#issecure)
- [name](session_export.SecureSession.md#name)
- [nodeId](session_export.SecureSession.md#nodeid)
- [numberOfActiveSubscriptions](session_export.SecureSession.md#numberofactivesubscriptions)
- [peerNodeId](session_export.SecureSession.md#peernodeid)
- [peerSessionId](session_export.SecureSession.md#peersessionid)
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
- [getAttestationChallengeKey](session_export.SecureSession.md#getattestationchallengekey)
- [getIncrementedMessageCounter](session_export.SecureSession.md#getincrementedmessagecounter)
- [getSessionParameters](session_export.SecureSession.md#getsessionparameters)
- [isPeerActive](session_export.SecureSession.md#ispeeractive)
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
| `args.caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[] |
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

[packages/matter.js/src/session/SecureSession.ts:105](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L105)

## Properties

### #attestationKey

• `Private` `Readonly` **#attestationKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:45](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L45)

___

### #caseAuthenticatedTags

• `Private` **#caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:47](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L47)

___

### #closingAfterExchangeFinished

• `Private` **#closingAfterExchangeFinished**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:36](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L36)

___

### #context

• `Private` `Readonly` **#context**: `T`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:38](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L38)

___

### #decryptKey

• `Private` `Readonly` **#decryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:43](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L43)

___

### #encryptKey

• `Private` `Readonly` **#encryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:44](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L44)

___

### #fabric

• `Private` **#fabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:40](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L40)

___

### #id

• `Private` `Readonly` **#id**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:39](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L39)

___

### #peerNodeId

• `Private` `Readonly` **#peerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:41](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L41)

___

### #peerSessionId

• `Private` `Readonly` **#peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:42](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L42)

___

### #sendCloseMessageWhenClosing

• `Private` **#sendCloseMessageWhenClosing**: `boolean` = `true`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:37](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L37)

___

### #subscriptionChangedCallback

• `Private` `Readonly` **#subscriptionChangedCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:46](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L46)

___

### #subscriptions

• `Private` `Readonly` **#subscriptions**: [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:35](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L35)

___

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[activeIntervalMs](session_export.Session.md#activeintervalms)

#### Defined in

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L44)

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[activeThresholdMs](session_export.Session.md#activethresholdms)

#### Defined in

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L45)

___

### activeTimestamp

• **activeTimestamp**: `number` = `0`

#### Inherited from

[Session](session_export.Session.md).[activeTimestamp](session_export.Session.md#activetimestamp)

#### Defined in

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L42)

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

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L46)

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[idleIntervalMs](session_export.Session.md#idleintervalms)

#### Defined in

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L43)

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Inherited from

[Session](session_export.Session.md).[messageCounter](session_export.Session.md#messagecounter)

#### Defined in

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L47)

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](protocol_export.MessageReceptionState.md)

#### Inherited from

[Session](session_export.Session.md).[messageReceptionState](session_export.Session.md#messagereceptionstate)

#### Defined in

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L48)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](session_export.Session.md).[timestamp](session_export.Session.md#timestamp)

#### Defined in

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### associatedFabric

• `get` **associatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Overrides

Session.associatedFabric

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:268](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L268)

___

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:168](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L168)

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.closingAfterExchangeFinished

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:172](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L172)

___

### context

• `get` **context**(): `T`

#### Returns

`T`

#### Overrides

Session.context

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:248](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L248)

___

### fabric

• `get` **fabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:228](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L228)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Overrides

Session.id

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:240](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L240)

___

### isPase

• `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isPase

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:184](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L184)

___

### isSecure

• `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isSecure

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:180](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L180)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:244](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L244)

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Overrides

Session.nodeId

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:256](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L256)

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:264](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L264)

___

### peerNodeId

• `get` **peerNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Overrides

Session.peerNodeId

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:260](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L260)

___

### peerSessionId

• `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Overrides

Session.peerSessionId

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:252](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L252)

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:176](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L176)

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

[packages/matter.js/src/session/SecureSession.ts:232](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L232)

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

[packages/matter.js/src/session/SecureSession.ts:277](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L277)

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

[packages/matter.js/src/session/SecureSession.ts:292](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L292)

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

[packages/matter.js/src/session/SecureSession.ts:188](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L188)

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

[packages/matter.js/src/session/SecureSession.ts:195](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L195)

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

[packages/matter.js/src/session/SecureSession.ts:307](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L307)

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

[packages/matter.js/src/session/SecureSession.ts:212](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L212)

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

[packages/matter.js/src/session/SecureSession.ts:301](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L301)

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

[packages/matter.js/src/session/SecureSession.ts:322](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L322)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:224](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L224)

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[Session](session_export.Session.md).[getIncrementedMessageCounter](session_export.Session.md#getincrementedmessagecounter)

#### Defined in

[packages/matter.js/src/session/Session.ts:91](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L91)

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Inherited from

[Session](session_export.Session.md).[getSessionParameters](session_export.Session.md#getsessionparameters)

#### Defined in

[packages/matter.js/src/session/Session.ts:99](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L99)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](session_export.Session.md).[isPeerActive](session_export.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/Session.ts:87](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L87)

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

[packages/matter.js/src/session/Session.ts:79](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L79)

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

[packages/matter.js/src/session/SecureSession.ts:283](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L283)

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

[packages/matter.js/src/session/Session.ts:95](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/Session.ts#L95)

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
| `args.caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[] |
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

[packages/matter.js/src/session/SecureSession.ts:49](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/session/SecureSession.ts#L49)
