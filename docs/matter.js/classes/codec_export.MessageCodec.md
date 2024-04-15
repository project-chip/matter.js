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

• **new MessageCodec**(): [`MessageCodec`](codec_export.MessageCodec.md)

#### Returns

[`MessageCodec`](codec_export.MessageCodec.md)

## Methods

### decodePacket

▸ **decodePacket**(`data`): [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:96](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L96)

___

### decodePacketHeader

▸ **decodePacketHeader**(`reader`): [`DecodedPacketHeader`](../interfaces/codec_export.DecodedPacketHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

[`DecodedPacketHeader`](../interfaces/codec_export.DecodedPacketHeader.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L148)

___

### decodePayload

▸ **decodePayload**(`«destructured»`): [`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`DecodedPacket`](../interfaces/codec_export.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/codec_export.DecodedMessage.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:114](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L114)

___

### decodePayloadHeader

▸ **decodePayloadHeader**(`reader`): [`PayloadHeader`](../interfaces/codec_export.PayloadHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)\<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

[`PayloadHeader`](../interfaces/codec_export.PayloadHeader.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:192](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L192)

___

### encodePacket

▸ **encodePacket**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/codec_export.Packet.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:141](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L141)

___

### encodePacketHeader

▸ **encodePacketHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PacketHeader`](../interfaces/codec_export.PacketHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L217)

___

### encodePayload

▸ **encodePayload**(`«destructured»`): [`Packet`](../interfaces/codec_export.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

[`Packet`](../interfaces/codec_export.Packet.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L130)

___

### encodePayloadHeader

▸ **encodePayloadHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PayloadHeader`](../interfaces/codec_export.PayloadHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:261](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L261)

___

### messageDiagnostics

▸ **messageDiagnostics**(`«destructured»`, `isDuplicate?`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/codec_export.Message.md) | `undefined` |
| `isDuplicate` | `boolean` | `false` |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:243](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/codec/MessageCodec.ts#L243)
