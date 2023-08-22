[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / DecodedBtpPacketPayload

# Interface: DecodedBtpPacketPayload

[codec/export](../modules/codec_export.md).DecodedBtpPacketPayload

## Hierarchy

- [`BtpPacketPayload`](codec_export.BtpPacketPayload.md)

  ↳ **`DecodedBtpPacketPayload`**

## Table of contents

### Properties

- [ackNumber](codec_export.DecodedBtpPacketPayload.md#acknumber)
- [messageLength](codec_export.DecodedBtpPacketPayload.md#messagelength)
- [segmentPayload](codec_export.DecodedBtpPacketPayload.md#segmentpayload)
- [sequenceNumber](codec_export.DecodedBtpPacketPayload.md#sequencenumber)

## Properties

### ackNumber

• `Optional` **ackNumber**: `number`

#### Inherited from

[BtpPacketPayload](codec_export.BtpPacketPayload.md).[ackNumber](codec_export.BtpPacketPayload.md#acknumber)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:27](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/BtpCodec.ts#L27)

___

### messageLength

• `Optional` **messageLength**: `number`

#### Inherited from

[BtpPacketPayload](codec_export.BtpPacketPayload.md).[messageLength](codec_export.BtpPacketPayload.md#messagelength)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:29](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/BtpCodec.ts#L29)

___

### segmentPayload

• **segmentPayload**: `Uint8Array`

#### Overrides

[BtpPacketPayload](codec_export.BtpPacketPayload.md).[segmentPayload](codec_export.BtpPacketPayload.md#segmentpayload)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:34](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/BtpCodec.ts#L34)

___

### sequenceNumber

• **sequenceNumber**: `number`

#### Inherited from

[BtpPacketPayload](codec_export.BtpPacketPayload.md).[sequenceNumber](codec_export.BtpPacketPayload.md#sequencenumber)

#### Defined in

[packages/matter.js/src/codec/BtpCodec.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/BtpCodec.ts#L28)
