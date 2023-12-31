[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / SecureSession

# Class: SecureSession\<T\>

[session/export](../modules/session_export.md).SecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/session_export.Session.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](session_export.SecureSession.md#constructor)

### Properties

- [\_closingAfterExchangeFinished](session_export.SecureSession.md#_closingafterexchangefinished)
- [\_sendCloseMessageWhenClosing](session_export.SecureSession.md#_sendclosemessagewhenclosing)
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
- [messageCounter](session_export.SecureSession.md#messagecounter)
- [messageReceptionState](session_export.SecureSession.md#messagereceptionstate)
- [peerNodeId](session_export.SecureSession.md#peernodeid)
- [peerSessionId](session_export.SecureSession.md#peersessionid)
- [retransmissionRetries](session_export.SecureSession.md#retransmissionretries)
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
- [getMrpParameters](session_export.SecureSession.md#getmrpparameters)
- [getNodeId](session_export.SecureSession.md#getnodeid)
- [getPeerNodeId](session_export.SecureSession.md#getpeernodeid)
- [getPeerSessionId](session_export.SecureSession.md#getpeersessionid)
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
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.attestationKey` | `Uint8Array` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.decryptKey` | `Uint8Array` |
| `args.encryptKey` | `Uint8Array` |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.id` | `number` |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.retransmissionRetries?` | `number` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

[`SecureSession`](session_export.SecureSession.md)\<`T`\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:115](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L115)

## Properties

### \_closingAfterExchangeFinished

• `Private` **\_closingAfterExchangeFinished**: `boolean` = `false`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:38](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L38)

___

### \_sendCloseMessageWhenClosing

• `Private` **\_sendCloseMessageWhenClosing**: `boolean` = `true`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:39](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L39)

___

### activeRetransmissionTimeoutMs

• `Private` `Readonly` **activeRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:51](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L51)

___

### activeTimestamp

• **activeTimestamp**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:37](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L37)

___

### attestationKey

• `Private` `Readonly` **attestationKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:47](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L47)

___

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:48](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L48)

___

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:40](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L40)

___

### decryptKey

• `Private` `Readonly` **decryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:45](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L45)

___

### encryptKey

• `Private` `Readonly` **encryptKey**: `Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:46](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L46)

___

### fabric

• `Private` **fabric**: `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:42](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L42)

___

### id

• `Private` `Readonly` **id**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:41](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L41)

___

### idleRetransmissionTimeoutMs

• `Private` `Readonly` **idleRetransmissionTimeoutMs**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:50](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L50)

___

### messageCounter

• `Private` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:53](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L53)

___

### messageReceptionState

• `Private` `Readonly` **messageReceptionState**: [`MessageReceptionStateEncryptedWithoutRollover`](protocol_export.MessageReceptionStateEncryptedWithoutRollover.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:58](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L58)

___

### peerNodeId

• `Private` `Readonly` **peerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:43](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L43)

___

### peerSessionId

• `Private` `Readonly` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:44](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L44)

___

### retransmissionRetries

• `Private` `Readonly` **retransmissionRetries**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:52](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L52)

___

### subscriptionChangedCallback

• `Private` `Readonly` **subscriptionChangedCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:49](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L49)

___

### subscriptions

• `Private` `Readonly` **subscriptions**: [`SubscriptionHandler`](protocol_interaction_export.SubscriptionHandler.md)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:35](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L35)

___

### timestamp

• **timestamp**: `number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:36](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L36)

## Accessors

### caseAuthenticatedTags

• `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../modules/datatype_export.md#caseauthenticatedtag)[]

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:168](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L168)

___

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[closingAfterExchangeFinished](../interfaces/session_export.Session.md#closingafterexchangefinished)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:172](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L172)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[name](../interfaces/session_export.Session.md#name)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:258](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L258)

___

### numberOfActiveSubscriptions

• `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:293](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L293)

___

### sendCloseMessageWhenClosing

• `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:176](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L176)

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

[packages/matter.js/src/session/SecureSession.ts:244](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L244)

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

[packages/matter.js/src/session/SecureSession.ts:287](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L287)

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

[packages/matter.js/src/session/SecureSession.ts:306](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L306)

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

[packages/matter.js/src/session/SecureSession.ts:188](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L188)

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

#### Implementation of

[Session](../interfaces/session_export.Session.md).[decode](../interfaces/session_export.Session.md#decode)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:207](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L207)

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

#### Implementation of

[Session](../interfaces/session_export.Session.md).[destroy](../interfaces/session_export.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:320](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L320)

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

[packages/matter.js/src/session/SecureSession.ts:224](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L224)

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

#### Implementation of

[Session](../interfaces/session_export.Session.md).[end](../interfaces/session_export.Session.md#end)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:314](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L314)

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

[packages/matter.js/src/session/SecureSession.ts:335](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L335)

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getAssociatedFabric](../interfaces/session_export.Session.md#getassociatedfabric)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:251](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L251)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:236](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L236)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getContext](../interfaces/session_export.Session.md#getcontext)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:267](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L267)

___

### getFabric

▸ **getFabric**(): `undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Returns

`undefined` \| [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:240](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L240)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getId](../interfaces/session_export.Session.md#getid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:271](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L271)

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getIncrementedMessageCounter](../interfaces/session_export.Session.md#getincrementedmessagecounter)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:343](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L343)

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

[packages/matter.js/src/session/SecureSession.ts:262](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L262)

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getNodeId](../interfaces/session_export.Session.md#getnodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:279](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L279)

___

### getPeerNodeId

▸ **getPeerNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerNodeId](../interfaces/session_export.Session.md#getpeernodeid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:283](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L283)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerSessionId](../interfaces/session_export.Session.md#getpeersessionid)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:275](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L275)

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPase](../interfaces/session_export.Session.md#ispase)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:184](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L184)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPeerActive](../interfaces/session_export.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:203](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L203)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isSecure](../interfaces/session_export.Session.md#issecure)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:180](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L180)

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

[packages/matter.js/src/session/SecureSession.ts:195](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L195)

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

[packages/matter.js/src/session/SecureSession.ts:297](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L297)

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

[Session](../interfaces/session_export.Session.md).[updateMessageCounter](../interfaces/session_export.Session.md#updatemessagecounter)

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:347](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L347)

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
| `args.activeRetransmissionTimeoutMs?` | `number` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.fabric` | `undefined` \| [`Fabric`](fabric_export.Fabric.md) |
| `args.id` | `number` |
| `args.idleRetransmissionTimeoutMs?` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback?` | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](session_export.SecureSession.md)\<`T`\>\>

#### Defined in

[packages/matter.js/src/session/SecureSession.ts:60](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/SecureSession.ts#L60)
