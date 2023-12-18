[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / DecodedMessage

# Interface: DecodedMessage

[exports/codec](../modules/exports_codec.md).DecodedMessage

## Hierarchy

- [`Message`](exports_codec.Message.md)

  ↳ **`DecodedMessage`**

## Table of contents

### Properties

- [packetHeader](exports_codec.DecodedMessage.md#packetheader)
- [payload](exports_codec.DecodedMessage.md#payload)
- [payloadHeader](exports_codec.DecodedMessage.md#payloadheader)
- [securityExtension](exports_codec.DecodedMessage.md#securityextension)

## Properties

### packetHeader

• **packetHeader**: [`DecodedPacketHeader`](exports_codec.DecodedPacketHeader.md)

#### Overrides

[Message](exports_codec.Message.md).[packetHeader](exports_codec.Message.md#packetheader)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:49

___

### payload

• **payload**: `Uint8Array`

#### Inherited from

[Message](exports_codec.Message.md).[payload](exports_codec.Message.md#payload)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:46

___

### payloadHeader

• **payloadHeader**: [`PayloadHeader`](exports_codec.PayloadHeader.md)

#### Inherited from

[Message](exports_codec.Message.md).[payloadHeader](exports_codec.Message.md#payloadheader)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:44

___

### securityExtension

• `Optional` **securityExtension**: `Uint8Array`

#### Inherited from

[Message](exports_codec.Message.md).[securityExtension](exports_codec.Message.md#securityextension)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:45
