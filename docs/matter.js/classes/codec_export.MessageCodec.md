[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec/export](../modules/codec_export.md) / MessageCodec

# Class: MessageCodec

[codec/export](../modules/codec_export.md).MessageCodec

## Table of contents

### Constructors

- [constructor](codec_export.MessageCodec.md#constructor)

### Methods

- [decodePacket](codec_export.MessageCodec.md#decodepacket)
- [decodePacketHeader](codec_export.MessageCodec.md#decodepacketheader)
- [decodePayload](codec_export.MessageCodec.md#decodepayload)
- [decodePayloadHeader](codec_export.MessageCodec.md#decodepayloadheader)
- [encodePacket](codec_export.MessageCodec.md#encodepacket)
- [encodePacketHeader](codec_export.MessageCodec.md#encodepacketheader)
- [encodePayload](codec_export.MessageCodec.md#encodepayload)
- [encodePayloadHeader](codec_export.MessageCodec.md#encodepayloadheader)
- [messageDiagnostics](codec_export.MessageCodec.md#messagediagnostics)

## Constructors

### constructor

• **new MessageCodec**()

## Methods

### decodePacket

▸ `Static` **decodePacket**(`data`): [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:94](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L94)

___

### decodePacketHeader

▸ `Static` `Private` **decodePacketHeader**(`reader`): [`DecodedPacketHeader`](../interfaces/codec_export.DecodedPacketHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

[`DecodedPacketHeader`](../interfaces/codec_export.DecodedPacketHeader.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:146](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L146)

___

### decodePayload

▸ `Static` **decodePayload**(`«destructured»`): [`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:112](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L112)

___

### decodePayloadHeader

▸ `Static` `Private` **decodePayloadHeader**(`reader`): [`PayloadHeader`](../interfaces/codec_export.PayloadHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

[`PayloadHeader`](../interfaces/codec_export.PayloadHeader.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:190](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L190)

___

### encodePacket

▸ `Static` **encodePacket**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/codec_export.Packet.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:139](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L139)

___

### encodePacketHeader

▸ `Static` **encodePacketHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PacketHeader`](../interfaces/codec_export.PacketHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:215](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L215)

___

### encodePayload

▸ `Static` **encodePayload**(`«destructured»`): [`Packet`](../interfaces/codec_export.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

[`Packet`](../interfaces/codec_export.Packet.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:128](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L128)

___

### encodePayloadHeader

▸ `Static` `Private` **encodePayloadHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PayloadHeader`](../interfaces/codec_export.PayloadHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:255](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L255)

___

### messageDiagnostics

▸ `Static` **messageDiagnostics**(`«destructured»`): [`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

[`DiagnosticDictionary`](log_export.DiagnosticDictionary.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:241](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/codec/MessageCodec.ts#L241)
