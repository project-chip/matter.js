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

[packages/matter.js/src/codec/MessageCodec.ts:62](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/codec/MessageCodec.ts#L62)

___

### payload

• **payload**: `Uint8Array`

#### Inherited from

[Message](codec_export.Message.md).[payload](codec_export.Message.md#payload)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:58](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/codec/MessageCodec.ts#L58)

___

### payloadHeader

• **payloadHeader**: [`PayloadHeader`](codec_export.PayloadHeader.md)

#### Inherited from

[Message](codec_export.Message.md).[payloadHeader](codec_export.Message.md#payloadheader)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:56](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/codec/MessageCodec.ts#L56)

___

### securityExtension

• `Optional` **securityExtension**: `Uint8Array`

#### Inherited from

[Message](codec_export.Message.md).[securityExtension](codec_export.Message.md#securityextension)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:57](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/codec/MessageCodec.ts#L57)
