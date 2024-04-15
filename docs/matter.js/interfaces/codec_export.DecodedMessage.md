[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / DecodedMessage

# Interface: DecodedMessage

[codec/export](../modules/codec_export.md).DecodedMessage

## Hierarchy

- [`Message`](codec_export.Message.md)

  ↳ **`DecodedMessage`**

## Table of contents

### Properties

- [packetHeader](codec_export.DecodedMessage.md#packetheader)
- [payload](codec_export.DecodedMessage.md#payload)
- [payloadHeader](codec_export.DecodedMessage.md#payloadheader)
- [securityExtension](codec_export.DecodedMessage.md#securityextension)

## Properties

### packetHeader

• **packetHeader**: [`DecodedPacketHeader`](codec_export.DecodedPacketHeader.md)

#### Overrides

[Message](codec_export.Message.md).[packetHeader](codec_export.Message.md#packetheader)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L61)

___

### payload

• **payload**: `Uint8Array`

#### Inherited from

[Message](codec_export.Message.md).[payload](codec_export.Message.md#payload)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L57)

___

### payloadHeader

• **payloadHeader**: [`PayloadHeader`](codec_export.PayloadHeader.md)

#### Inherited from

[Message](codec_export.Message.md).[payloadHeader](codec_export.Message.md#payloadheader)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:55](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L55)

___

### securityExtension

• `Optional` **securityExtension**: `Uint8Array`

#### Inherited from

[Message](codec_export.Message.md).[securityExtension](codec_export.Message.md#securityextension)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L56)
