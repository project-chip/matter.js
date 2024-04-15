[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / PacketHeader

# Interface: PacketHeader

[codec/export](../modules/codec_export.md).PacketHeader

## Hierarchy

- **`PacketHeader`**

  ↳ [`DecodedPacketHeader`](codec_export.DecodedPacketHeader.md)

## Table of contents

### Properties

- [destGroupId](codec_export.PacketHeader.md#destgroupid)
- [destNodeId](codec_export.PacketHeader.md#destnodeid)
- [hasMessageExtensions](codec_export.PacketHeader.md#hasmessageextensions)
- [hasPrivacyEnhancements](codec_export.PacketHeader.md#hasprivacyenhancements)
- [isControlMessage](codec_export.PacketHeader.md#iscontrolmessage)
- [messageId](codec_export.PacketHeader.md#messageid)
- [sessionId](codec_export.PacketHeader.md#sessionid)
- [sessionType](codec_export.PacketHeader.md#sessiontype)
- [sourceNodeId](codec_export.PacketHeader.md#sourcenodeid)

## Properties

### destGroupId

• `Optional` **destGroupId**: `number`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L27)

___

### destNodeId

• `Optional` **destNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L26)

___

### hasMessageExtensions

• **hasMessageExtensions**: `boolean`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L23)

___

### hasPrivacyEnhancements

• **hasPrivacyEnhancements**: `boolean`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L21)

___

### isControlMessage

• **isControlMessage**: `boolean`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L22)

___

### messageId

• **messageId**: `number`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L24)

___

### sessionId

• **sessionId**: `number`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L19)

___

### sessionType

• **sessionType**: [`SessionType`](../enums/codec_export.SessionType.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L20)

___

### sourceNodeId

• `Optional` **sourceNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L25)
