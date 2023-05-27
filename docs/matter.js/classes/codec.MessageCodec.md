[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [codec](../modules/codec.md) / MessageCodec

# Class: MessageCodec

[codec](../modules/codec.md).MessageCodec

## Table of contents

### Constructors

- [constructor](codec.MessageCodec.md#constructor)

### Methods

- [decodePacket](codec.MessageCodec.md#decodepacket)
- [decodePacketHeader](codec.MessageCodec.md#decodepacketheader)
- [decodePayload](codec.MessageCodec.md#decodepayload)
- [decodePayloadHeader](codec.MessageCodec.md#decodepayloadheader)
- [encodePacket](codec.MessageCodec.md#encodepacket)
- [encodePacketHeader](codec.MessageCodec.md#encodepacketheader)
- [encodePayload](codec.MessageCodec.md#encodepayload)
- [encodePayloadHeader](codec.MessageCodec.md#encodepayloadheader)
- [messageDiagnostics](codec.MessageCodec.md#messagediagnostics)

## Constructors

### constructor

• **new MessageCodec**()

## Methods

### decodePacket

▸ `Static` **decodePacket**(`data`): [`Packet`](../interfaces/codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`Packet`](../interfaces/codec.Packet.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L69)

___

### decodePacketHeader

▸ `Static` `Private` **decodePacketHeader**(`reader`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Little`](../enums/util.Endian.md#little)\> |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `destGroupId` | `undefined` \| `number` |
| `destNodeId` | `undefined` \| [`NodeId`](datatype.NodeId.md) |
| `messageId` | `number` |
| `sessionId` | `number` |
| `sessionType` | [`SessionType`](../enums/codec.SessionType.md) |
| `sourceNodeId` | `undefined` \| [`NodeId`](datatype.NodeId.md) |

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:105](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L105)

___

### decodePayload

▸ `Static` **decodePayload**(`«destructured»`): [`Message`](../interfaces/codec.Message.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/codec.Packet.md) |

#### Returns

[`Message`](../interfaces/codec.Message.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:79](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L79)

___

### decodePayloadHeader

▸ `Static` `Private` **decodePayloadHeader**(`reader`): [`PayloadHeader`](../interfaces/codec.PayloadHeader.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `reader` | [`DataReader`](util.DataReader.md)<[`Little`](../enums/util.Endian.md#little)\> |

#### Returns

[`PayloadHeader`](../interfaces/codec.PayloadHeader.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:129](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L129)

___

### encodePacket

▸ `Static` **encodePacket**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Packet`](../interfaces/codec.Packet.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:98](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L98)

___

### encodePacketHeader

▸ `Static` **encodePacketHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PacketHeader`](../interfaces/codec.PacketHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:147](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L147)

___

### encodePayload

▸ `Static` **encodePayload**(`«destructured»`): [`Packet`](../interfaces/codec.Packet.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

[`Packet`](../interfaces/codec.Packet.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:88](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L88)

___

### encodePayloadHeader

▸ `Static` `Private` **encodePayloadHeader**(`«destructured»`): `Uint8Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`PayloadHeader`](../interfaces/codec.PayloadHeader.md) |

#### Returns

`Uint8Array`

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:175](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L175)

___

### messageDiagnostics

▸ `Static` **messageDiagnostics**(`«destructured»`): [`DiagnosticDictionary`](log.DiagnosticDictionary.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

[`DiagnosticDictionary`](log.DiagnosticDictionary.md)

#### Defined in

[packages/matter.js/src/codec/MessageCodec.ts:165](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/codec/MessageCodec.ts#L165)
