[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / SecureSession

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
| `args.caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[] |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.decryptKey` | `Uint8Array` |
| `args.encryptKey` | `Uint8Array` |
| `args.fabric` | `undefined` \| [`Fabric`](Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../README.md#nodeid-5) |
| `args.peerSessionId` | `number` |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.subscriptionChangedCallback`? | () => `void` |

#### Returns

[`SecureSession`](SecureSession.md)\<`T`\>

#### Overrides

[`Session`](Session.md).[`constructor`](Session.md#constructors)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:34

## Properties

### #private

> `private` **#private**: `any`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:18

***

### activeIntervalMs

> `protected` `readonly` **activeIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeIntervalMs`](Session.md#activeintervalms)

#### Source

matter.js/dist/esm/session/Session.d.ts:35

***

### activeThresholdMs

> `protected` `readonly` **activeThresholdMs**: `number`

#### Inherited from

[`Session`](Session.md).[`activeThresholdMs`](Session.md#activethresholdms)

#### Source

matter.js/dist/esm/session/Session.d.ts:36

***

### activeTimestamp

> **activeTimestamp**: `number`

#### Inherited from

[`Session`](Session.md).[`activeTimestamp`](Session.md#activetimestamp)

#### Source

matter.js/dist/esm/session/Session.d.ts:33

***

### closeCallback()

> `protected` `readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`Session`](Session.md).[`closeCallback`](Session.md#closecallback)

#### Source

matter.js/dist/esm/session/Session.d.ts:37

***

### generateNonce

> `private` **generateNonce**: `any`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:75

***

### idleIntervalMs

> `protected` `readonly` **idleIntervalMs**: `number`

#### Inherited from

[`Session`](Session.md).[`idleIntervalMs`](Session.md#idleintervalms)

#### Source

matter.js/dist/esm/session/Session.d.ts:34

***

### messageCounter

> `protected` `readonly` **messageCounter**: [`MessageCounter`](MessageCounter.md)

#### Inherited from

[`Session`](Session.md).[`messageCounter`](Session.md#messagecounter)

#### Source

matter.js/dist/esm/session/Session.d.ts:38

***

### messageReceptionState

> `protected` `readonly` **messageReceptionState**: [`MessageReceptionState`](MessageReceptionState.md)

#### Inherited from

[`Session`](Session.md).[`messageReceptionState`](Session.md#messagereceptionstate)

#### Source

matter.js/dist/esm/session/Session.d.ts:39

***

### timestamp

> **timestamp**: `number`

#### Inherited from

[`Session`](Session.md).[`timestamp`](Session.md#timestamp)

#### Source

matter.js/dist/esm/session/Session.d.ts:32

## Accessors

### associatedFabric

> `get` **associatedFabric**(): [`Fabric`](Fabric.md)

#### Returns

[`Fabric`](Fabric.md)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:67

***

### caseAuthenticatedTags

> `get` **caseAuthenticatedTags**(): [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[]

#### Returns

[`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[]

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:49

***

### closingAfterExchangeFinished

> `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:50

***

### context

> `get` **context**(): `T`

#### Returns

`T`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:62

***

### fabric

> `get` **fabric**(): `undefined` \| [`Fabric`](Fabric.md)

#### Returns

`undefined` \| [`Fabric`](Fabric.md)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:58

***

### id

> `get` **id**(): `number`

#### Returns

`number`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:60

***

### isPase

> `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:53

***

### isSecure

> `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:52

***

### name

> `get` **name**(): `string`

#### Returns

`string`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:61

***

### nodeId

> `get` **nodeId**(): [`NodeId`](../README.md#nodeid-5)

#### Returns

[`NodeId`](../README.md#nodeid-5)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:64

***

### numberOfActiveSubscriptions

> `get` **numberOfActiveSubscriptions**(): `number`

#### Returns

`number`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:66

***

### peerNodeId

> `get` **peerNodeId**(): [`NodeId`](../README.md#nodeid-5)

#### Returns

[`NodeId`](../README.md#nodeid-5)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:65

***

### peerSessionId

> `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:63

***

### sendCloseMessageWhenClosing

> `get` **sendCloseMessageWhenClosing**(): `boolean`

#### Returns

`boolean`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:51

## Methods

### addAssociatedFabric()

> **addAssociatedFabric**(`fabric`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `fabric` | [`Fabric`](Fabric.md) |

#### Returns

`void`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:59

***

### addSubscription()

> **addSubscription**(`subscription`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscription` | [`SubscriptionHandler`](SubscriptionHandler.md) |

#### Returns

`void`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:68

***

### clearSubscriptions()

> **clearSubscriptions**(`flushSubscriptions`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `flushSubscriptions`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:70

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

matter.js/dist/esm/session/SecureSession.d.ts:54

***

### decode()

> **decode**(`__namedParameters`, `aad`): [`DecodedMessage`](../interfaces/DecodedMessage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`DecodedPacket`](../interfaces/DecodedPacket.md) |
| `aad` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../interfaces/DecodedMessage.md)

#### Overrides

[`Session`](Session.md).[`decode`](Session.md#decode)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:55

***

### destroy()

> **destroy**(`sendClose`?, `closeAfterExchangeFinished`?): `Promise`\<`void`\>

Destroys a session. Outstanding subscription data will be discarded.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sendClose`? | `boolean` |
| `closeAfterExchangeFinished`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`destroy`](Session.md#destroy)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:74

***

### encode()

> **encode**(`message`): [`Packet`](../interfaces/Packet.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/Message.md) |

#### Returns

[`Packet`](../interfaces/Packet.md)

#### Overrides

[`Session`](Session.md).[`encode`](Session.md#encode)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:56

***

### end()

> **end**(`sendClose`, `closeAfterExchangeFinished`?): `Promise`\<`void`\>

Ends a session. Outstanding subscription data will be flushed before the session is destroyed.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `sendClose` | `boolean` |
| `closeAfterExchangeFinished`? | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`Session`](Session.md).[`end`](Session.md#end)

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:72

***

### getAttestationChallengeKey()

> **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:57

***

### getIncrementedMessageCounter()

> **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[`Session`](Session.md).[`getIncrementedMessageCounter`](Session.md#getincrementedmessagecounter)

#### Source

matter.js/dist/esm/session/Session.d.ts:49

***

### getSessionParameters()

> **getSessionParameters**(): [`SessionParameters`](../interfaces/SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/SessionParameters.md)

#### Inherited from

[`Session`](Session.md).[`getSessionParameters`](Session.md#getsessionparameters)

#### Source

matter.js/dist/esm/session/Session.d.ts:51

***

### isPeerActive()

> **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[`Session`](Session.md).[`isPeerActive`](Session.md#ispeeractive)

#### Source

matter.js/dist/esm/session/Session.d.ts:48

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

matter.js/dist/esm/session/Session.d.ts:47

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

matter.js/dist/esm/session/SecureSession.d.ts:69

***

### updateMessageCounter()

> **updateMessageCounter**(`messageCounter`, `_sourceNodeId`?): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageCounter` | `number` |
| `_sourceNodeId`? | [`NodeId`](../README.md#nodeid-5) |

#### Returns

`void`

#### Inherited from

[`Session`](Session.md).[`updateMessageCounter`](Session.md#updatemessagecounter)

#### Source

matter.js/dist/esm/session/Session.d.ts:50

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
| `args.caseAuthenticatedTags`? | [`CaseAuthenticatedTag`](../README.md#caseauthenticatedtag)[] |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.context` | `T` |
| `args.fabric` | `undefined` \| [`Fabric`](Fabric.md) |
| `args.id` | `number` |
| `args.isInitiator` | `boolean` |
| `args.isResumption` | `boolean` |
| `args.peerNodeId` | [`NodeId`](../README.md#nodeid-5) |
| `args.peerSessionId` | `number` |
| `args.salt` | `Uint8Array` |
| `args.sessionParameters`? | `Partial`\<[`SessionParameters`](../interfaces/SessionParameters.md)\> |
| `args.sharedSecret` | `Uint8Array` |
| `args.subscriptionChangedCallback`? | () => `void` |

#### Returns

`Promise`\<[`SecureSession`](SecureSession.md)\<`T`\>\>

#### Source

matter.js/dist/esm/session/SecureSession.d.ts:19
