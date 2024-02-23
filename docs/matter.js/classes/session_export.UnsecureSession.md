[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / UnsecureSession

# Class: UnsecureSession\<T\>

[session/export](../modules/session_export.md).UnsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](session_export.Session.md)\<`T`\>

  ↳ **`UnsecureSession`**

## Table of contents

### Constructors

- [constructor](session_export.UnsecureSession.md#constructor)

### Properties

- [activeIntervalMs](session_export.UnsecureSession.md#activeintervalms)
- [activeThresholdMs](session_export.UnsecureSession.md#activethresholdms)
- [activeTimestamp](session_export.UnsecureSession.md#activetimestamp)
- [closeCallback](session_export.UnsecureSession.md#closecallback)
- [closingAfterExchangeFinished](session_export.UnsecureSession.md#closingafterexchangefinished)
- [context](session_export.UnsecureSession.md#context)
- [idleIntervalMs](session_export.UnsecureSession.md#idleintervalms)
- [initiatorNodeId](session_export.UnsecureSession.md#initiatornodeid)
- [messageCounter](session_export.UnsecureSession.md#messagecounter)
- [messageReceptionState](session_export.UnsecureSession.md#messagereceptionstate)
- [timestamp](session_export.UnsecureSession.md#timestamp)

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
- [getNodeId](session_export.UnsecureSession.md#getnodeid)
- [getPeerNodeId](session_export.UnsecureSession.md#getpeernodeid)
- [getPeerSessionId](session_export.UnsecureSession.md#getpeersessionid)
- [getSessionParameters](session_export.UnsecureSession.md#getsessionparameters)
- [isPase](session_export.UnsecureSession.md#ispase)
- [isPeerActive](session_export.UnsecureSession.md#ispeeractive)
- [isSecure](session_export.UnsecureSession.md#issecure)
- [notifyActivity](session_export.UnsecureSession.md#notifyactivity)
- [setFabric](session_export.UnsecureSession.md#setfabric)
- [updateMessageCounter](session_export.UnsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new UnsecureSession**\<`T`\>(`args`): [`UnsecureSession`](session_export.UnsecureSession.md)\<`T`\>

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
| `args.initiatorNodeId?` | [`NodeId`](../modules/datatype_export.md#nodeid) |
| `args.isInitiator?` | `boolean` |
| `args.messageCounter` | [`MessageCounter`](protocol_export.MessageCounter.md) |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |

#### Returns

[`UnsecureSession`](session_export.UnsecureSession.md)\<`T`\>

#### Overrides

[Session](session_export.Session.md).[constructor](session_export.Session.md#constructor)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:23](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L23)

## Properties

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

### closingAfterExchangeFinished

• `Readonly` **closingAfterExchangeFinished**: ``false``

#### Overrides

[Session](session_export.Session.md).[closingAfterExchangeFinished](session_export.Session.md#closingafterexchangefinished)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:20](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L20)

___

### context

• `Private` `Readonly` **context**: `T`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:21](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L21)

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[idleIntervalMs](session_export.Session.md#idleintervalms)

#### Defined in

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L43)

___

### initiatorNodeId

• `Private` `Readonly` **initiatorNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:19](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L19)

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

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](session_export.Session.md).[timestamp](session_export.Session.md#timestamp)

#### Defined in

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:65](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L65)

## Methods

### decode

▸ **decode**(`packet`): [`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Overrides

[Session](session_export.Session.md).[decode](session_export.Session.md#decode)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:49](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L49)

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](session_export.Session.md).[destroy](session_export.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:89](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L89)

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

[packages/matter.js/src/session/UnsecureSession.ts:53](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L53)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](session_export.Session.md).[end](session_export.Session.md#end)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:93](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L93)

___

### getAssociatedFabric

▸ **getAssociatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Overrides

[Session](session_export.Session.md).[getAssociatedFabric](session_export.Session.md#getassociatedfabric)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:97](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L97)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:57](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L57)

___

### getContext

▸ **getContext**(): `T`

#### Returns

`T`

#### Overrides

[Session](session_export.Session.md).[getContext](session_export.Session.md#getcontext)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:69](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L69)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Overrides

[Session](session_export.Session.md).[getId](session_export.Session.md#getid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:73](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L73)

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

[packages/matter.js/src/session/UnsecureSession.ts:81](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L81)

___

### getPeerNodeId

▸ **getPeerNodeId**(): `undefined`

#### Returns

`undefined`

#### Overrides

[Session](session_export.Session.md).[getPeerNodeId](session_export.Session.md#getpeernodeid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:85](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L85)

___

### getPeerSessionId

▸ **getPeerSessionId**(): `number`

#### Returns

`number`

#### Overrides

[Session](session_export.Session.md).[getPeerSessionId](session_export.Session.md#getpeersessionid)

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:77](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L77)

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

[packages/matter.js/src/session/UnsecureSession.ts:45](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L45)

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

[packages/matter.js/src/session/UnsecureSession.ts:41](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L41)

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

### setFabric

▸ **setFabric**(`_fabric`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_fabric` | [`Fabric`](fabric_export.Fabric.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/session/UnsecureSession.ts:61](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/session/UnsecureSession.ts#L61)

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
