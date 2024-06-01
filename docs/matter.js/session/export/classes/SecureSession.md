[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / SecureSession

# Class: SecureSession\<T\>

## Extends

- [`Session`](Session.md)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Constructors

### new SecureSession()

> **new SecureSession**\<`T`\>(`args`): [`SecureSession`](SecureSession.md)\<`T`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `object` |
| `args.attestationKey` | `Uint8Array` |
| `args.caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[] |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.decryptKey` | `Uint8Array` |
| `args.encryptKey` | `Uint8Array` |
| `args.fabric` | `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.subscriptionChangedCallback`? | () => `void` |

#### Returns

[`SecureSession`](SecureSession.md)\<`T`\>

#### Overrides

[`Session`](Session.md).[`constructor`](Session.md#constructors)

#### Source

[packages/matter.js/src/session/SecureSession.ts:105](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L105)

## Properties

### #attestationKey

> `private` `readonly` **#attestationKey**: `Uint8Array`

#### Source

[packages/matter.js/src/session/SecureSession.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L45)

***

### #caseAuthenticatedTags

> `private` **#caseAuthenticatedTags**: [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[]

#### Source

[packages/matter.js/src/session/SecureSession.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L47)

***

### #closingAfterExchangeFinished

> `private` **#closingAfterExchangeFinished**: `boolean` = `false`

#### Source

[packages/matter.js/src/session/SecureSession.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L36)

***

### #context

> `private` `readonly` **#context**: `T`

#### Source

[packages/matter.js/src/session/SecureSession.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L38)

***

### #decryptKey

> `private` `readonly` **#decryptKey**: `Uint8Array`

#### Source

[packages/matter.js/src/session/SecureSession.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L43)

***

### #encryptKey

> `private` `readonly` **#encryptKey**: `Uint8Array`

#### Source

[packages/matter.js/src/session/SecureSession.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L44)

***

### #fabric

> `private` **#fabric**: `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/session/SecureSession.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L40)

***

### #id

> `private` `readonly` **#id**: `number`

#### Source

[packages/matter.js/src/session/SecureSession.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L39)

***

### #peerNodeId

> `private` `readonly` **#peerNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/session/SecureSession.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L41)

***

### #peerSessionId

> `private` `readonly` **#peerSessionId**: `number`

#### Source

[packages/matter.js/src/session/SecureSession.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L42)

***

### #sendCloseMessageWhenClosing

> `private` **#sendCloseMessageWhenClosing**: `boolean` = `true`

#### Source

[packages/matter.js/src/session/SecureSession.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L37)

***

### #subscriptionChangedCallback()

> `private` `readonly` **#subscriptionChangedCallback**: () => `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/session/SecureSession.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L46)

***

### #subscriptions

> `private` `readonly` **#subscriptions**: [`SubscriptionHandler`](../../../protocol/interaction/export/classes/SubscriptionHandler.md)[]

#### Source

[packages/matter.js/src/session/SecureSession.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L35)

***

### activeIntervalMs

> `protected` `readonly` **activeIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeIntervalMs`](Session.md#activeintervalms)

#### Source

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L44)

***

### activeThresholdMs

> `protected` `readonly` **activeThresholdMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeThresholdMs`](Session.md#activethresholdms)

#### Source

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L45)

***

### activeTimestamp

> **activeTimestamp**: `number` = `0`

#### Inherited from

[`Session`](Session.md).[`activeTimestamp`](Session.md#activetimestamp)

#### Source

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L42)

***

### closeCallback()

> `protected` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Session`](Session.md).[`closeCallback`](Session.md#closecallback)

#### Source

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L46)

***

### idleIntervalMs

> `protected` `readonly` **idleIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`idleIntervalMs`](Session.md#idleintervalms)

#### Source

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L43)

***

### messageCounter

> `protected` `readonly` **messageCounter**: [`MessageCounter`](../../../protocol/export/classes/MessageCounter.md)

#### Inherited from

[`Session`](Session.md).[`messageCounter`](Session.md#messagecounter)

#### Source

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L47)

***

### messageReceptionState

> `protected` `readonly` **messageReceptionState**: [`MessageReceptionState`](../../../protocol/export/classes/MessageReceptionState.md)

#### Inherited from

[`Session`](Session.md).[`messageReceptionState`](Session.md#messagereceptionstate)

#### Source

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L48)

***

### timestamp

> **timestamp**: `number`

#### Inherited from

[`Session`](Session.md).[`timestamp`](Session.md#timestamp)

#### Source

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### associatedFabric

> `get` **associatedFabric**(): [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Returns

[`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/session/SecureSession.ts:268](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L268)

***

### caseAuthenticatedTags

> `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[]

#### Source

[packages/matter.js/src/session/SecureSession.ts:168](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L168)

***

### closingAfterExchangeFinished

> `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/SecureSession.ts:172](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L172)

***

### context

> `get` **context**(): `T`

#### Returns

`T`

#### Source

[packages/matter.js/src/session/SecureSession.ts:248](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L248)

***

### fabric

> `get` **fabric**(): `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Returns

`undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md)

#### Source

[packages/matter.js/src/session/SecureSession.ts:228](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L228)

***

### id

> `get` **id**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/session/SecureSession.ts:240](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L240)

***

### isPase

> `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/SecureSession.ts:184](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L184)

***

### isSecure

> `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/SecureSession.ts:180](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L180)

***

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/session/SecureSession.ts:244](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L244)

***

### nodeId

> `get` **nodeId**(): [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Returns

[`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/session/SecureSession.ts:256](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L256)

***

### numberOfActiveSubscriptions

> `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/session/SecureSession.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L264)

***

### peerNodeId

> `get` **peerNodeId**(): [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Returns

[`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/session/SecureSession.ts:260](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L260)

***

### peerSessionId

> `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/session/SecureSession.ts:252](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L252)

***

### sendCloseMessageWhenClosing

> `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Source

[packages/matter.js/src/session/SecureSession.ts:176](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L176)

## Methods

### addAssociatedFabric()

> **addAssociatedFabric**(`fabric`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](../../../fabric/export/classes/Fabric.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/SecureSession.ts:232](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L232)

***

### addSubscription()

> **addSubscription**(`subscription`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](../../../protocol/interaction/export/classes/SubscriptionHandler.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/SecureSession.ts:277](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L277)

***

### clearSubscriptions()

> **clearSubscriptions**(`flushSubscriptions`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `flushSubscriptions` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SecureSession.ts:292](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L292)

***

### close()

> **close**(`closeAfterExchangeFinished`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `closeAfterExchangeFinished`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/SecureSession.ts:188](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L188)

***

### decode()

> **decode**(`__namedParameters`, `aad`): [`DecodedMessage`](../../../codec/export/interfaces/DecodedMessage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`DecodedPacket`](../../../codec/export/interfaces/DecodedPacket.md) |
| `aad` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../../../codec/export/interfaces/DecodedMessage.md)

#### Overrides

[`Session`](Session.md).[`decode`](Session.md#decode)

#### Source

[packages/matter.js/src/session/SecureSession.ts:195](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L195)

***

### destroy()

> **destroy**(`sendClose`, `closeAfterExchangeFinished`): `Promise`\<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `sendClose` | `boolean` | `false` |
| `closeAfterExchangeFinished` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`destroy`](Session.md#destroy)

#### Source

[packages/matter.js/src/session/SecureSession.ts:306](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L306)

***

### encode()

> **encode**(`message`): [`Packet`](../../../codec/export/interfaces/Packet.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/export/interfaces/Message.md) |

#### Returns

[`Packet`](../../../codec/export/interfaces/Packet.md)

#### Overrides

[`Session`](Session.md).[`encode`](Session.md#encode)

#### Source

[packages/matter.js/src/session/SecureSession.ts:212](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L212)

***

### end()

> **end**(`sendClose`, `closeAfterExchangeFinished`): `Promise`\<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `sendClose` | `boolean` | `undefined` |
| `closeAfterExchangeFinished` | `boolean` | `false` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`end`](Session.md#end)

#### Source

[packages/matter.js/src/session/SecureSession.ts:300](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L300)

***

### generateNonce()

> `private` **generateNonce**(`securityFlags`, `messageId`, `nodeId`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `securityFlags` | `number` |
| `messageId` | `number` |
| `nodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/session/SecureSession.ts:321](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L321)

***

### getAttestationChallengeKey()

> **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/session/SecureSession.ts:224](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L224)

***

### getIncrementedMessageCounter()

> **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`Session`](Session.md).[`getIncrementedMessageCounter`](Session.md#getincrementedmessagecounter)

#### Source

[packages/matter.js/src/session/Session.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L91)

***

### getSessionParameters()

> **getSessionParameters**(): [`SessionParameters`](../interfaces/SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/SessionParameters.md)

#### Inherited from

[`Session`](Session.md).[`getSessionParameters`](Session.md#getsessionparameters)

#### Source

[packages/matter.js/src/session/Session.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L99)

***

### isPeerActive()

> **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Session`](Session.md).[`isPeerActive`](Session.md#ispeeractive)

#### Source

[packages/matter.js/src/session/Session.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L87)

***

### notifyActivity()

> **notifyActivity**(`messageReceived`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageReceived` | `boolean` |

#### Returns

`void`

#### Inherited from

[`Session`](Session.md).[`notifyActivity`](Session.md#notifyactivity)

#### Source

[packages/matter.js/src/session/Session.ts:79](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L79)

***

### removeSubscription()

> **removeSubscription**(`subscriptionId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Source

[packages/matter.js/src/session/SecureSession.ts:283](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L283)

***

### updateMessageCounter()

> **updateMessageCounter**(`messageCounter`, `_sourceNodeId`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId`? | [`NodeId`](../../../datatype/export/README.md#nodeid) |

#### Returns

`void`

#### Inherited from

[`Session`](Session.md).[`updateMessageCounter`](Session.md#updatemessagecounter)

#### Source

[packages/matter.js/src/session/Session.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/Session.ts#L95)

***

### create()

> `static` **create**\<`T`\>(`args`): `Promise`\<[`SecureSession`](SecureSession.md)\<`T`\>\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `args` | `object` |
| `args.caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag)[] |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.fabric` | `undefined` \| [`Fabric`](../../../fabric/export/classes/Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../../../datatype/export/README.md#nodeid) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback`? | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<`T`\>\>

#### Source

[packages/matter.js/src/session/SecureSession.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L49)
