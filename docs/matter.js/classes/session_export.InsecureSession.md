[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / InsecureSession

# Class: InsecureSession\<T\>

[session/export](../modules/session_export.md).InsecureSession

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`Session`](session_export.Session.md)\<`T`\>

  ↳ **`InsecureSession`**

## Table of contents

### Constructors

- [constructor](session_export.InsecureSession.md#constructor)

### Properties

- [#context](session_export.InsecureSession.md##context)
- [#initiatorNodeId](session_export.InsecureSession.md##initiatornodeid)
- [activeIntervalMs](session_export.InsecureSession.md#activeintervalms)
- [activeThresholdMs](session_export.InsecureSession.md#activethresholdms)
- [activeTimestamp](session_export.InsecureSession.md#activetimestamp)
- [closeCallback](session_export.InsecureSession.md#closecallback)
- [closingAfterExchangeFinished](session_export.InsecureSession.md#closingafterexchangefinished)
- [idleIntervalMs](session_export.InsecureSession.md#idleintervalms)
- [messageCounter](session_export.InsecureSession.md#messagecounter)
- [messageReceptionState](session_export.InsecureSession.md#messagereceptionstate)
- [timestamp](session_export.InsecureSession.md#timestamp)

### Accessors

- [associatedFabric](session_export.InsecureSession.md#associatedfabric)
- [context](session_export.InsecureSession.md#context)
- [id](session_export.InsecureSession.md#id)
- [isPase](session_export.InsecureSession.md#ispase)
- [isSecure](session_export.InsecureSession.md#issecure)
- [name](session_export.InsecureSession.md#name)
- [nodeId](session_export.InsecureSession.md#nodeid)
- [peerNodeId](session_export.InsecureSession.md#peernodeid)
- [peerSessionId](session_export.InsecureSession.md#peersessionid)

### Methods

- [decode](session_export.InsecureSession.md#decode)
- [destroy](session_export.InsecureSession.md#destroy)
- [encode](session_export.InsecureSession.md#encode)
- [end](session_export.InsecureSession.md#end)
- [getAttestationChallengeKey](session_export.InsecureSession.md#getattestationchallengekey)
- [getIncrementedMessageCounter](session_export.InsecureSession.md#getincrementedmessagecounter)
- [getSessionParameters](session_export.InsecureSession.md#getsessionparameters)
- [isPeerActive](session_export.InsecureSession.md#ispeeractive)
- [notifyActivity](session_export.InsecureSession.md#notifyactivity)
- [setFabric](session_export.InsecureSession.md#setfabric)
- [updateMessageCounter](session_export.InsecureSession.md#updatemessagecounter)

## Constructors

### constructor

• **new InsecureSession**\<`T`\>(`args`): [`InsecureSession`](session_export.InsecureSession.md)\<`T`\>

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

[`InsecureSession`](session_export.InsecureSession.md)\<`T`\>

#### Overrides

[Session](session_export.Session.md).[constructor](session_export.Session.md#constructor)

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L23)

## Properties

### #context

• `Private` `Readonly` **#context**: `T`

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L21)

___

### #initiatorNodeId

• `Private` `Readonly` **#initiatorNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L19)

___

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[activeIntervalMs](session_export.Session.md#activeintervalms)

#### Defined in

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L44)

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[activeThresholdMs](session_export.Session.md#activethresholdms)

#### Defined in

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L45)

___

### activeTimestamp

• **activeTimestamp**: `number` = `0`

#### Inherited from

[Session](session_export.Session.md).[activeTimestamp](session_export.Session.md#activetimestamp)

#### Defined in

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L42)

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

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L46)

___

### closingAfterExchangeFinished

• `Readonly` **closingAfterExchangeFinished**: ``false``

#### Overrides

[Session](session_export.Session.md).[closingAfterExchangeFinished](session_export.Session.md#closingafterexchangefinished)

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L20)

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Inherited from

[Session](session_export.Session.md).[idleIntervalMs](session_export.Session.md#idleintervalms)

#### Defined in

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L43)

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Inherited from

[Session](session_export.Session.md).[messageCounter](session_export.Session.md#messagecounter)

#### Defined in

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L47)

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](protocol_export.MessageReceptionState.md)

#### Inherited from

[Session](session_export.Session.md).[messageReceptionState](session_export.Session.md#messagereceptionstate)

#### Defined in

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L48)

___

### timestamp

• **timestamp**: `number`

#### Inherited from

[Session](session_export.Session.md).[timestamp](session_export.Session.md#timestamp)

#### Defined in

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### associatedFabric

• `get` **associatedFabric**(): [`Fabric`](fabric_export.Fabric.md)

#### Returns

[`Fabric`](fabric_export.Fabric.md)

#### Overrides

Session.associatedFabric

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:89](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L89)

___

### context

• `get` **context**(): `T`

#### Returns

`T`

#### Overrides

Session.context

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L69)

___

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Overrides

Session.id

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L73)

___

### isPase

• `get` **isPase**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isPase

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L45)

___

### isSecure

• `get` **isSecure**(): `boolean`

#### Returns

`boolean`

#### Overrides

Session.isSecure

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L41)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Overrides

Session.name

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L65)

___

### nodeId

• `get` **nodeId**(): [`NodeId`](../modules/datatype_export.md#nodeid)

#### Returns

[`NodeId`](../modules/datatype_export.md#nodeid)

#### Overrides

Session.nodeId

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L81)

___

### peerNodeId

• `get` **peerNodeId**(): `undefined`

#### Returns

`undefined`

#### Overrides

Session.peerNodeId

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L85)

___

### peerSessionId

• `get` **peerSessionId**(): `number`

#### Returns

`number`

#### Overrides

Session.peerSessionId

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:77](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L77)

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

[packages/matter.js/src/session/InsecureSession.ts:49](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L49)

___

### destroy

▸ **destroy**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](session_export.Session.md).[destroy](session_export.Session.md#destroy)

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:93](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L93)

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

[packages/matter.js/src/session/InsecureSession.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L53)

___

### end

▸ **end**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Overrides

[Session](session_export.Session.md).[end](session_export.Session.md#end)

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L97)

___

### getAttestationChallengeKey

▸ **getAttestationChallengeKey**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/session/InsecureSession.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L57)

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Inherited from

[Session](session_export.Session.md).[getIncrementedMessageCounter](session_export.Session.md#getincrementedmessagecounter)

#### Defined in

[packages/matter.js/src/session/Session.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L91)

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Inherited from

[Session](session_export.Session.md).[getSessionParameters](session_export.Session.md#getsessionparameters)

#### Defined in

[packages/matter.js/src/session/Session.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L99)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Session](session_export.Session.md).[isPeerActive](session_export.Session.md#ispeeractive)

#### Defined in

[packages/matter.js/src/session/Session.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L87)

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

[packages/matter.js/src/session/Session.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L79)

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

[packages/matter.js/src/session/InsecureSession.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/InsecureSession.ts#L61)

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

[packages/matter.js/src/session/Session.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L95)
