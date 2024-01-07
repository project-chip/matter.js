[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / UnsecureSession

# Class: UnsecureSession\<T\>

[session/export](../modules/session_export.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Implements

- [`Session`](../interfaces/session_export.Session.md)\<`T`\>

## Table of contents

### Constructors

- [constructor](session_export.UnsecureSession.md#constructor)

### Properties

- [closeCallback](session_export.UnsecureSession.md#closecallback)
- [closingAfterExchangeFinished](session_export.UnsecureSession.md#closingafterexchangefinished)
- [context](session_export.UnsecureSession.md#context)
- [initiatorNodeId](session_export.UnsecureSession.md#initiatornodeid)
- [messageCounter](session_export.UnsecureSession.md#messagecounter)
- [messageReceptionState](session_export.UnsecureSession.md#messagereceptionstate)

### Accessors

- [name](session_export.UnsecureSession.md#name)

### Methods

- [decode](session_export.UnsecureSession.md#decode)
- [destroy](session_export.UnsecureSession.md#destroy)
- [encode](session_export.UnsecureSession.md#encode)
- [end](session_export.UnsecureSession.md#end)
- [getAssociatedFabric](session_export.UnsecureSession.md#getassociatedfabric)
- [getAttestationChallengeKey](session_export.UnsecureSession.md#getattestationchallengekey)
- [getContext](session_export.UnsecureSession.md#getcontext)
- [getId](session_export.UnsecureSession.md#getid)
- [getIncrementedMessageCounter](session_export.UnsecureSession.md#getincrementedmessagecounter)
- [getMrpParameters](session_export.UnsecureSession.md#getmrpparameters)
- [getNodeId](session_export.UnsecureSession.md#getnodeid)
- [getPeerNodeId](session_export.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](session_export.UnsecureSession.md#getpeersessionid)
- [isPase](session_export.UnsecureSession.md#ispase)
- [isPeerActive](session_export.UnsecureSession.md#ispeeractive)
- [isSecure](session_export.UnsecureSession.md#issecure)
- [notifyActivity](session_export.UnsecureSession.md#notifyactivity)
- [setFabric](session_export.UnsecureSession.md#setfabric)
- [updateMessageCounter](session_export.UnsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new UnsecureSession**\<`T`\>(`context`, `messageCounter`, `closeCallback`, `initiatorNodeId?`): [`UnsecureSession`](session_export.UnsecureSession.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `T` |
| `messageCounter` | [`MessageCounter`](protocol_export.MessageCounter.md) |
| `closeCallback` | () => `void` |
| `initiatorNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Returns

[`UnsecureSession`](session_export.UnsecureSession.md)\<`T`\>

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:28](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L28)

## Properties

### closeCallback

• `Private` `Readonly` **closeCallback**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:31](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L31)

___

### closingAfterExchangeFinished

• `Readonly` **closingAfterExchangeFinished**: ``false``

#### Implementation of

[Session](../interfaces/session_export.Session.md).[closingAfterExchangeFinished](../interfaces/session_export.Session.md#closingafterexchangefinished)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:25](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L25)

___

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:29](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L29)

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:24](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L24)

___

### messageCounter

• `Private` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:30](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L30)

___

### messageReceptionState

• `Private` `Readonly` **messageReceptionState**: [`MessageReceptionStateUnencryptedWithRollover`](protocol_export.MessageReceptionStateUnencryptedWithRollover.md)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:26](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L26)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[name](../interfaces/session_export.Session.md#name)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:70](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L70)

## Methods

### decode

▸ **decode**(`packet`): [`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[decode](../interfaces/session_export.Session.md#decode)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:54](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L54)

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[destroy](../interfaces/session_export.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:102](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L102)

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

[packages/matter.js/src/session/UnsecureSession.ts:58](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L58)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[Session](../interfaces/session_export.Session.md).[end](../interfaces/session_export.Session.md#end)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:106](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L106)

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getAssociatedFabric](../interfaces/session_export.Session.md#getassociatedfabric)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:110](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L110)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:62](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L62)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getContext](../interfaces/session_export.Session.md#getcontext)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:82](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L82)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getId](../interfaces/session_export.Session.md#getid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:86](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L86)

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getIncrementedMessageCounter](../interfaces/session_export.Session.md#getincrementedmessagecounter)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:114](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L114)

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

[packages/matter.js/src/session/UnsecureSession.ts:74](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L74)

___

### getNodeId

▸ **getNodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getNodeId](../interfaces/session_export.Session.md#getnodeid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:94](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L94)

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerNodeId](../interfaces/session_export.Session.md#getpeernodeid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:98](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L98)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[getPeerSessionId](../interfaces/session_export.Session.md#getpeersessionid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:90](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L90)

___

### isPase

▸ **isPase**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPase](../interfaces/session_export.Session.md#ispase)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:42](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L42)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isPeerActive](../interfaces/session_export.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:50](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L50)

___

### isSecure

▸ **isSecure**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[Session](../interfaces/session_export.Session.md).[isSecure](../interfaces/session_export.Session.md#issecure)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:38](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L38)

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

[Session](../interfaces/session_export.Session.md).[notifyActivity](../interfaces/session_export.Session.md#notifyactivity)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:46](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L46)

___

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:66](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L66)

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

[packages/matter.js/src/session/UnsecureSession.ts:118](https://github.com/project-chip/matter.js/blob/e87b236f/packages/matter.js/src/session/UnsecureSession.ts#L118)
