[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / DecodedPacketHeader

# Interface: DecodedPacketHeader

[codec/export](../modules/codec_export.md).DecodedPacketHeader

## Hierarchy

- [`PacketHeader`](codec_export.PacketHeader.md)

  ↳ **`DecodedPacketHeader`**

## Table of contents

### Properties

- [destGroupId](codec_export.DecodedPacketHeader.md#destgroupid)
- [destNodeId](codec_export.DecodedPacketHeader.md#destnodeid)
- [hasMessageExtensions](codec_export.DecodedPacketHeader.md#hasmessageextensions)
- [hasPrivacyEnhancements](codec_export.DecodedPacketHeader.md#hasprivacyenhancements)
- [isControlMessage](codec_export.DecodedPacketHeader.md#iscontrolmessage)
- [messageId](codec_export.DecodedPacketHeader.md#messageid)
- [securityFlags](codec_export.DecodedPacketHeader.md#securityflags)
- [sessionId](codec_export.DecodedPacketHeader.md#sessionid)
- [sessionType](codec_export.DecodedPacketHeader.md#sessiontype)
- [sourceNodeId](codec_export.DecodedPacketHeader.md#sourcenodeid)

## Properties

### destGroupId

• `Optional` **destGroupId**: `number`

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[destGroupId](codec_export.PacketHeader.md#destgroupid)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L27)

___

### destNodeId

• `Optional` **destNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[destNodeId](codec_export.PacketHeader.md#destnodeid)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L26)

___

### hasMessageExtensions

• **hasMessageExtensions**: `boolean`

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[hasMessageExtensions](codec_export.PacketHeader.md#hasmessageextensions)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L23)

___

### hasPrivacyEnhancements

• **hasPrivacyEnhancements**: `boolean`

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[hasPrivacyEnhancements](codec_export.PacketHeader.md#hasprivacyenhancements)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L21)

___

### isControlMessage

• **isControlMessage**: `boolean`

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[isControlMessage](codec_export.PacketHeader.md#iscontrolmessage)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L22)

___

### messageId

• **messageId**: `number`

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[messageId](codec_export.PacketHeader.md#messageid)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L24)

___

### securityFlags

• **securityFlags**: `number`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L31)

___

### sessionId

• **sessionId**: `number`

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[sessionId](codec_export.PacketHeader.md#sessionid)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L19)

___

### sessionType

• **sessionType**: [`SessionType`](../enums/codec_export.SessionType.md)

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[sessionType](codec_export.PacketHeader.md#sessiontype)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L20)

___

### sourceNodeId

• `Optional` **sourceNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Inherited from

[PacketHeader](codec_export.PacketHeader.md).[sourceNodeId](codec_export.PacketHeader.md#sourcenodeid)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L25)
