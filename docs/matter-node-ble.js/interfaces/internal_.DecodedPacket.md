[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / DecodedPacket

# Interface: DecodedPacket

[\<internal\>](../modules/internal_.md).DecodedPacket

## Hierarchy

- [`Packet`](internal_.Packet.md)

  ↳ **`DecodedPacket`**

## Table of contents

### Properties

- [applicationPayload](internal_.DecodedPacket.md#applicationpayload)
- [header](internal_.DecodedPacket.md#header)
- [messageExtension](internal_.DecodedPacket.md#messageextension)

## Properties

### applicationPayload

• **applicationPayload**: `Uint8Array`

#### Inherited from

[Packet](internal_.Packet.md).[applicationPayload](internal_.Packet.md#applicationpayload)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:37

___

### header

• **header**: [`DecodedPacketHeader`](internal_.DecodedPacketHeader.md)

#### Overrides

[Packet](internal_.Packet.md).[header](internal_.Packet.md#header)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:40

___

### messageExtension

• `Optional` **messageExtension**: `Uint8Array`

#### Inherited from

[Packet](internal_.Packet.md).[messageExtension](internal_.Packet.md#messageextension)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:36
