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

▸ `Static` **decodePacket**(`data`): [`Packet`](../interfaces/codec_export.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`Packet`](../interfaces/codec_export.Packet.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:79](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L79)

___

### decodePacketHeader

▸ `Static` `Private` **decodePacketHeader**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util_export.DataReader.md)<[`Little`](../enums/util_export.Endian.md#little)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `destGroupId` | `undefined` \| [`GroupId`](../modules/datatype_export.md#groupid) |
| `destNodeId` | `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) |
| `hasMessageExtensions` | ``false`` |
| `hasPrivacyEnhancements` | ``false`` |
| `isControlMessage` | ``false`` |
| `messageId` | `number` |
| `sessionId` | `number` |
| `sessionType` | [`SessionType`](../enums/codec_export.SessionType.md) |
| `sourceNodeId` | `undefined` \| [`NodeId`](../modules/datatype_export.md#nodeid) |

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:109](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L109)

___

### decodePayload

▸ `Static` **decodePayload**(`«destructured»`): [`Message`](../interfaces/codec_export.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/codec_export.Packet.md) |

#### Returns

[`Message`](../interfaces/codec_export.Message.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:89](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L89)

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

[packages/matter.js/src/codec/MessageCodec.ts:151](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L151)

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

[packages/matter.js/src/codec/MessageCodec.ts:105](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L105)

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

[packages/matter.js/src/codec/MessageCodec.ts:169](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L169)

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

[packages/matter.js/src/codec/MessageCodec.ts:98](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L98)

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

[packages/matter.js/src/codec/MessageCodec.ts:209](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L209)

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

[packages/matter.js/src/codec/MessageCodec.ts:195](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/codec/MessageCodec.ts#L195)
