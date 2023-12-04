[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / Message

# Interface: Message

[codec/export](../modules/codec_export.md).Message

## Hierarchy

- **`Message`**

  ↳ [`DecodedMessage`](codec_export.DecodedMessage.md)

## Table of contents

### Properties

- [packetHeader](codec_export.Message.md#packetheader)
- [payload](codec_export.Message.md#payload)
- [payloadHeader](codec_export.Message.md#payloadheader)
- [securityExtension](codec_export.Message.md#securityextension)

## Properties

### packetHeader

• **packetHeader**: [`PacketHeader`](codec_export.PacketHeader.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:52](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L52)

___

### payload

• **payload**: `Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:55](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L55)

___

### payloadHeader

• **payloadHeader**: [`PayloadHeader`](codec_export.PayloadHeader.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:53](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L53)

___

### securityExtension

• `Optional` **securityExtension**: `Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:54](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L54)
