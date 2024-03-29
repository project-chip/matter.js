[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / MessageCodec

# Class: MessageCodec

[exports/codec](../modules/exports_codec.md).MessageCodec

## Table of contents

### Constructors

- [constructor](exports_codec.MessageCodec.md#constructor)

### Properties

- [decodePacketHeader](exports_codec.MessageCodec.md#decodepacketheader)
- [decodePayloadHeader](exports_codec.MessageCodec.md#decodepayloadheader)
- [encodePayloadHeader](exports_codec.MessageCodec.md#encodepayloadheader)

### Methods

- [decodePacket](exports_codec.MessageCodec.md#decodepacket)
- [decodePayload](exports_codec.MessageCodec.md#decodepayload)
- [encodePacket](exports_codec.MessageCodec.md#encodepacket)
- [encodePacketHeader](exports_codec.MessageCodec.md#encodepacketheader)
- [encodePayload](exports_codec.MessageCodec.md#encodepayload)
- [messageDiagnostics](exports_codec.MessageCodec.md#messagediagnostics)

## Constructors

### constructor

• **new MessageCodec**(): [`MessageCodec`](exports_codec.MessageCodec.md)

#### Returns

[`MessageCodec`](exports_codec.MessageCodec.md)

## Properties

### decodePacketHeader

▪ `Static` `Private` **decodePacketHeader**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:60

___

### decodePayloadHeader

▪ `Static` `Private` **decodePayloadHeader**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:61

___

### encodePayloadHeader

▪ `Static` `Private` **encodePayloadHeader**: `any`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:64

## Methods

### decodePacket

▸ **decodePacket**(`data`): [`DecodedPacket`](../interfaces/exports_codec.DecodedPacket.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DecodedPacket`](../interfaces/exports_codec.DecodedPacket.md)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:56

___

### decodePayload

▸ **decodePayload**(`«destructured»`): [`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`DecodedPacket`](../interfaces/exports_codec.DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/exports_codec.DecodedMessage.md)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:57

___

### encodePacket

▸ **encodePacket**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/exports_codec.Packet.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:59

___

### encodePacketHeader

▸ **encodePacketHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PacketHeader`](../interfaces/exports_codec.PacketHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:62

___

### encodePayload

▸ **encodePayload**(`«destructured»`): [`Packet`](../interfaces/exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`Packet`](../interfaces/exports_codec.Packet.md)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:58

___

### messageDiagnostics

▸ **messageDiagnostics**(`«destructured»`, `isDuplicate?`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/exports_codec.Message.md) |
| `isDuplicate?` | `boolean` |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../interfaces/log_export.Diagnostic-1.md)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:63
