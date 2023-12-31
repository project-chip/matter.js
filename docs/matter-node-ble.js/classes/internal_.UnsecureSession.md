[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / UnsecureSession

# Class: UnsecureSession\<T\>

[\<internal\>](../modules/internal_.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/internal_.Session.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](internal_.UnsecureSession.md#constructor)

### Properties

- [closeCallback](internal_.UnsecureSession.md#closecallback)
- [closingAfterExchangeFinished](internal_.UnsecureSession.md#closingafterexchangefinished)
- [context](internal_.UnsecureSession.md#context)
- [initiatorNodeId](internal_.UnsecureSession.md#initiatornodeid)
- [messageCounter](internal_.UnsecureSession.md#messagecounter)
- [messageReceptionState](internal_.UnsecureSession.md#messagereceptionstate)

### Accessors

- [name](internal_.UnsecureSession.md#name)

### Methods

- [decode](internal_.UnsecureSession.md#decode)
- [destroy](internal_.UnsecureSession.md#destroy)
- [encode](internal_.UnsecureSession.md#encode)
- [end](internal_.UnsecureSession.md#end)
- [getAssociatedFabric](internal_.UnsecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](internal_.UnsecureSession.md#getattestationchallengekey)
- [getContext](internal_.UnsecureSession.md#getcontext)
- [getId](internal_.UnsecureSession.md#getid)
- [getIncrementedMessageCounter](internal_.UnsecureSession.md#getincrementedmessagecounter)
- [getMrpParameters](internal_.UnsecureSession.md#getmrpparameters)
- [getNodeId](internal_.UnsecureSession.md#getnodeid)
- [getPeerNodeId](internal_.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](internal_.UnsecureSession.md#getpeersessionid)
- [isPase](internal_.UnsecureSession.md#ispase)
- [isPeerActive](internal_.UnsecureSession.md#ispeeractive)
- [isSecure](internal_.UnsecureSession.md#issecure)
- [notifyActivity](internal_.UnsecureSession.md#notifyactivity)
- [setFabric](internal_.UnsecureSession.md#setfabric)
- [updateMessageCounter](internal_.UnsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new UnsecureSession**\<`T`\>(`context`, `messageCounter`, `closeCallback`, `initiatorNodeId?`): [`UnsecureSession`](internal_.UnsecureSession.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |
| `messageCounter` | [`MessageCounter`](internal_.MessageCounter.md) |
| `closeCallback` | () => `void` |
| `initiatorNodeId?` | [`NodeId`](../modules/internal_.md#nodeid) |

#### Returns

[`UnsecureSession`](internal_.UnsecureSession.md)\<`T`\>

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:19

## Properties

### closeCallback

• `Private` `Readonly` **closeCallback**: `any`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:15

___

### closingAfterExchangeFinished

• `Readonly` **closingAfterExchangeFinished**: ``false``

#### Implementation of

[Session](../interfaces/internal_.Session.md).[closingAfterExchangeFinished](../interfaces/internal_.Session.md#closingafterexchangefinished)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:17

___

### context

• `Private` `Readonly` **context**: `any`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:13

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: `any`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:16

___

### messageCounter

• `Private` `Readonly` **messageCounter**: `any`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:14

___

### messageReceptionState

• `Private` `Readonly` **messageReceptionState**: `any`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:18

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[name](../interfaces/internal_.Session.md#name)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:28

## Methods

### decode

▸ **decode**(`packet`): [`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/internal_.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/internal_.DecodedMessage.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[decode](../interfaces/internal_.Session.md#decode)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:24

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Session](../interfaces/internal_.Session.md).[destroy](../interfaces/internal_.Session.md#destroy)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:39

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/internal_.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/internal_.Message.md) |

#### Returns

[`Packet`](../interfaces/internal_.Packet.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[encode](../interfaces/internal_.Session.md#encode)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:25

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Session](../interfaces/internal_.Session.md).[end](../interfaces/internal_.Session.md#end)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:40

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](internal_.Fabric.md)

#### Returns

[`Fabric`](internal_.Fabric.md)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getAssociatedFabric](../interfaces/internal_.Session.md#getassociatedfabric)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:41

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:26

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getContext](../interfaces/internal_.Session.md#getcontext)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:34

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getId](../interfaces/internal_.Session.md#getid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:35

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getIncrementedMessageCounter](../interfaces/internal_.Session.md#getincrementedmessagecounter)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:42

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

[Session](../interfaces/internal_.Session.md).[getMrpParameters](../interfaces/internal_.Session.md#getmrpparameters)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:29

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/internal_.md#nodeid)

#### Returns

[`NodeId`](../modules/internal_.md#nodeid)

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getNodeId](../interfaces/internal_.Session.md#getnodeid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:37

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerNodeId](../interfaces/internal_.Session.md#getpeernodeid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:38

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[getPeerSessionId](../interfaces/internal_.Session.md#getpeersessionid)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:36

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isPase](../interfaces/internal_.Session.md#ispase)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:21

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isPeerActive](../interfaces/internal_.Session.md#ispeeractive)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:23

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[isSecure](../interfaces/internal_.Session.md#issecure)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:20

___

### notifyActivity

▸ **notifyActivity**(`_messageReceived`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_messageReceived` | `boolean` |

#### Returns

`void`

#### Implementation of

[Session](../interfaces/internal_.Session.md).[notifyActivity](../interfaces/internal_.Session.md#notifyactivity)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:22

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](internal_.Fabric.md) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:27

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

[Session](../interfaces/internal_.Session.md).[updateMessageCounter](../interfaces/internal_.Session.md#updatemessagecounter)

#### Defined in

matter.js/dist/esm/session/UnsecureSession.d.ts:43
