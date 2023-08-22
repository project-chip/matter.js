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

• **new MessageCodec**()

## Properties

### decodePacketHeader

▪ `Static` `Private` **decodePacketHeader**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:46

___

### decodePayloadHeader

▪ `Static` `Private` **decodePayloadHeader**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:47

___

### encodePayloadHeader

▪ `Static` `Private` **encodePayloadHeader**: `any`

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:50

## Methods

### decodePacket

▸ `Static` **decodePacket**(`data`): [`Packet`](../interfaces/exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`Packet`](../interfaces/exports_codec.Packet.md)

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:42

___

### decodePayload

▸ `Static` **decodePayload**(`«destructured»`): [`Message`](../interfaces/exports_codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/exports_codec.Packet.md) |

#### Returns

[`Message`](../interfaces/exports_codec.Message.md)

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:43

___

### encodePacket

▸ `Static` **encodePacket**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/exports_codec.Packet.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:45

___

### encodePacketHeader

▸ `Static` **encodePacketHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PacketHeader`](../interfaces/exports_codec.PacketHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:48

___

### encodePayload

▸ `Static` **encodePayload**(`«destructured»`): [`Packet`](../interfaces/exports_codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`Packet`](../interfaces/exports_codec.Packet.md)

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:44

___

### messageDiagnostics

▸ `Static` **messageDiagnostics**(`«destructured»`): [`DiagnosticDictionary`](exports_log.DiagnosticDictionary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

[`DiagnosticDictionary`](exports_log.DiagnosticDictionary.md)

#### Defined in

packages/matter.js/dist/cjs/codec/MessageCodec.d.ts:49
