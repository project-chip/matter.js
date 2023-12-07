[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / Message

# Interface: Message

[exports/codec](../modules/exports_codec.md).Message

## Hierarchy

- **`Message`**

  ↳ [`DecodedMessage`](exports_codec.DecodedMessage.md)

## Table of contents

### Properties

- [packetHeader](exports_codec.Message.md#packetheader)
- [payload](exports_codec.Message.md#payload)
- [payloadHeader](exports_codec.Message.md#payloadheader)
- [securityExtension](exports_codec.Message.md#securityextension)

## Properties

### packetHeader

• **packetHeader**: [`PacketHeader`](exports_codec.PacketHeader.md)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:41

___

### payload

• **payload**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:44

___

### payloadHeader

• **payloadHeader**: [`PayloadHeader`](exports_codec.PayloadHeader.md)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:42

___

### securityExtension

• `Optional` **securityExtension**: `Uint8Array`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:43
