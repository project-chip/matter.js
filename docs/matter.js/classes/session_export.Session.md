[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [session/export](../modules/session_export.md) / Session

# Class: Session\<T\>

[session/export](../modules/session_export.md).Session

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Session`**

  ↳ [`InsecureSession`](session_export.InsecureSession.md)

  ↳ [`SecureSession`](session_export.SecureSession.md)

## Table of contents

### Constructors

- [constructor](session_export.Session.md#constructor)

### Properties

- [activeIntervalMs](session_export.Session.md#activeintervalms)
- [activeThresholdMs](session_export.Session.md#activethresholdms)
- [activeTimestamp](session_export.Session.md#activetimestamp)
- [associatedFabric](session_export.Session.md#associatedfabric)
- [closeCallback](session_export.Session.md#closecallback)
- [context](session_export.Session.md#context)
- [id](session_export.Session.md#id)
- [idleIntervalMs](session_export.Session.md#idleintervalms)
- [isPase](session_export.Session.md#ispase)
- [isSecure](session_export.Session.md#issecure)
- [messageCounter](session_export.Session.md#messagecounter)
- [messageReceptionState](session_export.Session.md#messagereceptionstate)
- [nodeId](session_export.Session.md#nodeid)
- [peerNodeId](session_export.Session.md#peernodeid)
- [peerSessionId](session_export.Session.md#peersessionid)
- [timestamp](session_export.Session.md#timestamp)

### Accessors

- [closingAfterExchangeFinished](session_export.Session.md#closingafterexchangefinished)
- [name](session_export.Session.md#name)

### Methods

- [decode](session_export.Session.md#decode)
- [destroy](session_export.Session.md#destroy)
- [encode](session_export.Session.md#encode)
- [end](session_export.Session.md#end)
- [getIncrementedMessageCounter](session_export.Session.md#getincrementedmessagecounter)
- [getSessionParameters](session_export.Session.md#getsessionparameters)
- [isPeerActive](session_export.Session.md#ispeeractive)
- [notifyActivity](session_export.Session.md#notifyactivity)
- [updateMessageCounter](session_export.Session.md#updatemessagecounter)

## Constructors

### constructor

• **new Session**\<`T`\>(`args`): [`Session`](session_export.Session.md)\<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `Object` |
| `args.closeCallback` | () => `Promise`\<`void`\> |
| `args.messageCounter` | [`MessageCounter`](protocol_export.MessageCounter.md) |
| `args.messageReceptionState` | [`MessageReceptionState`](protocol_export.MessageReceptionState.md) |
| `args.sessionParameters?` | `Partial`\<[`SessionParameters`](../interfaces/session_export.SessionParameters.md)\> |
| `args.setActiveTimestamp` | `boolean` |

#### Returns

[`Session`](session_export.Session.md)\<`T`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L50)

## Properties

### activeIntervalMs

• `Protected` `Readonly` **activeIntervalMs**: `number`

#### Defined in

[packages/matter.js/src/session/Session.ts:44](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L44)

___

### activeThresholdMs

• `Protected` `Readonly` **activeThresholdMs**: `number`

#### Defined in

[packages/matter.js/src/session/Session.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L45)

___

### activeTimestamp

• **activeTimestamp**: `number` = `0`

#### Defined in

[packages/matter.js/src/session/Session.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L42)

___

### associatedFabric

• `Abstract` **associatedFabric**: [`Fabric`](fabric_export.Fabric.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:115](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L115)

___

### closeCallback

• `Protected` `Readonly` **closeCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L46)

___

### context

• `Abstract` **context**: `T`

#### Defined in

[packages/matter.js/src/session/Session.ts:110](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L110)

___

### id

• `Abstract` **id**: `number`

#### Defined in

[packages/matter.js/src/session/Session.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L111)

___

### idleIntervalMs

• `Protected` `Readonly` **idleIntervalMs**: `number`

#### Defined in

[packages/matter.js/src/session/Session.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L43)

___

### isPase

• `Abstract` **isPase**: `boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:109](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L109)

___

### isSecure

• `Abstract` **isSecure**: `boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:108](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L108)

___

### messageCounter

• `Protected` `Readonly` **messageCounter**: [`MessageCounter`](protocol_export.MessageCounter.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L47)

___

### messageReceptionState

• `Protected` `Readonly` **messageReceptionState**: [`MessageReceptionState`](protocol_export.MessageReceptionState.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L48)

___

### nodeId

• `Abstract` **nodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/Session.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L113)

___

### peerNodeId

• `Abstract` **peerNodeId**: `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/session/Session.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L114)

___

### peerSessionId

• `Abstract` **peerSessionId**: `number`

#### Defined in

[packages/matter.js/src/session/Session.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L112)

___

### timestamp

• **timestamp**: `number`

#### Defined in

[packages/matter.js/src/session/Session.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L41)

## Accessors

### closingAfterExchangeFinished

• `get` **closingAfterExchangeFinished**(): `boolean`

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/session/Session.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L40)

___

### name

• `get` **name**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/session/Session.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L39)

## Methods

### decode

▸ **decode**(`packet`, `aad?`): [`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `packet` | [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md) |
| `aad?` | `Uint8Array` |

#### Returns

[`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:117](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L117)

___

### destroy

▸ **destroy**(`sendClose?`, `closeAfterExchangeFinished?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose?` | `boolean` |
| `closeAfterExchangeFinished?` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:120](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L120)

___

### encode

▸ **encode**(`message`): [`Packet`](../interfaces/codec_export.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

[`Packet`](../interfaces/codec_export.Packet.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:118](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L118)

___

### end

▸ **end**(`sendClose`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sendClose` | `boolean` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L119)

___

### getIncrementedMessageCounter

▸ **getIncrementedMessageCounter**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Defined in

[packages/matter.js/src/session/Session.ts:91](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L91)

___

### getSessionParameters

▸ **getSessionParameters**(): [`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Returns

[`SessionParameters`](../interfaces/session_export.SessionParameters.md)

#### Defined in

[packages/matter.js/src/session/Session.ts:99](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L99)

___

### isPeerActive

▸ **isPeerActive**(): `boolean`

#### Returns

`boolean`

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

#### Defined in

[packages/matter.js/src/session/Session.ts:79](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L79)

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

#### Defined in

[packages/matter.js/src/session/Session.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/session/Session.ts#L95)
