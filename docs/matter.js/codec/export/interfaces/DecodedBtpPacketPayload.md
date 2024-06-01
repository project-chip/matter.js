[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / DecodedBtpPacketPayload

# Interface: DecodedBtpPacketPayload

## Extends

- [`BtpPacketPayload`](BtpPacketPayload.md)

## Properties

### ackNumber?

> `optional` **ackNumber**: `number`

#### Inherited from

[`BtpPacketPayload`](BtpPacketPayload.md).[`ackNumber`](BtpPacketPayload.md#acknumber)

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L27)

***

### messageLength?

> `optional` **messageLength**: `number`

#### Inherited from

[`BtpPacketPayload`](BtpPacketPayload.md).[`messageLength`](BtpPacketPayload.md#messagelength)

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L29)

***

### segmentPayload

> **segmentPayload**: `Uint8Array`

#### Overrides

[`BtpPacketPayload`](BtpPacketPayload.md).[`segmentPayload`](BtpPacketPayload.md#segmentpayload)

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L34)

***

### sequenceNumber

> **sequenceNumber**: `number`

#### Inherited from

[`BtpPacketPayload`](BtpPacketPayload.md).[`sequenceNumber`](BtpPacketPayload.md#sequencenumber)

#### Source

[packages/matter.js/src/codec/BtpCodec.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/BtpCodec.ts#L28)
