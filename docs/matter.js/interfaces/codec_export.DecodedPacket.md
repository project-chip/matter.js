[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / DecodedPacket

# Interface: DecodedPacket

[codec/export](../modules/codec_export.md).DecodedPacket

## Hierarchy

- [`Packet`](codec_export.Packet.md)

  ↳ **`DecodedPacket`**

## Table of contents

### Properties

- [applicationPayload](codec_export.DecodedPacket.md#applicationpayload)
- [header](codec_export.DecodedPacket.md#header)
- [messageExtension](codec_export.DecodedPacket.md#messageextension)

## Properties

### applicationPayload

• **applicationPayload**: `Uint8Array`

#### Inherited from

[Packet](codec_export.Packet.md).[applicationPayload](codec_export.Packet.md#applicationpayload)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:47](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L47)

___

### header

• **header**: [`DecodedPacketHeader`](codec_export.DecodedPacketHeader.md)

#### Overrides

[Packet](codec_export.Packet.md).[header](codec_export.Packet.md#header)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L51)

___

### messageExtension

• `Optional` **messageExtension**: `Uint8Array`

#### Inherited from

[Packet](codec_export.Packet.md).[messageExtension](codec_export.Packet.md#messageextension)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:46](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L46)
