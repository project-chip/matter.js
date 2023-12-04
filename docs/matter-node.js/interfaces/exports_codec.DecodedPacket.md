[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / DecodedPacket

# Interface: DecodedPacket

[exports/codec](../modules/exports_codec.md).DecodedPacket

## Hierarchy

- [`Packet`](exports_codec.Packet.md)

  ↳ **`DecodedPacket`**

## Table of contents

### Properties

- [applicationPayload](exports_codec.DecodedPacket.md#applicationpayload)
- [header](exports_codec.DecodedPacket.md#header)
- [messageExtension](exports_codec.DecodedPacket.md#messageextension)

## Properties

### applicationPayload

• **applicationPayload**: `Uint8Array`

#### Inherited from

[Packet](exports_codec.Packet.md).[applicationPayload](exports_codec.Packet.md#applicationpayload)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:35

___

### header

• **header**: [`DecodedPacketHeader`](exports_codec.DecodedPacketHeader.md)

#### Overrides

[Packet](exports_codec.Packet.md).[header](exports_codec.Packet.md#header)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:38

___

### messageExtension

• `Optional` **messageExtension**: `Uint8Array`

#### Inherited from

[Packet](exports_codec.Packet.md).[messageExtension](exports_codec.Packet.md#messageextension)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:34
