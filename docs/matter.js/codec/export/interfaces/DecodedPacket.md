[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / DecodedPacket

# Interface: DecodedPacket

## Extends

- [`Packet`](Packet.md)

## Properties

### applicationPayload

> **applicationPayload**: `Uint8Array`

#### Inherited from

[`Packet`](Packet.md).[`applicationPayload`](Packet.md#applicationpayload)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L47)

***

### header

> **header**: [`DecodedPacketHeader`](DecodedPacketHeader.md)

#### Overrides

[`Packet`](Packet.md).[`header`](Packet.md#header)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L51)

***

### messageExtension?

> `optional` **messageExtension**: `Uint8Array`

#### Inherited from

[`Packet`](Packet.md).[`messageExtension`](Packet.md#messageextension)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L46)
