[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / MessageCodec

# Class: MessageCodec

## Constructors

### new MessageCodec()

> **new MessageCodec**(): [`MessageCodec`](MessageCodec.md)

#### Returns

[`MessageCodec`](MessageCodec.md)

## Methods

### decodePacket()

> `static` **decodePacket**(`data`): [`DecodedPacket`](../interfaces/DecodedPacket.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `data` | `Uint8Array` |

#### Returns

[`DecodedPacket`](../interfaces/DecodedPacket.md)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:96](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L96)

***

### decodePacketHeader()

> `static` `private` **decodePacketHeader**(`reader`): [`DecodedPacketHeader`](../interfaces/DecodedPacketHeader.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |

#### Returns

[`DecodedPacketHeader`](../interfaces/DecodedPacketHeader.md)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:148](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L148)

***

### decodePayload()

> `static` **decodePayload**(`__namedParameters`): [`DecodedMessage`](../interfaces/DecodedMessage.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`DecodedPacket`](../interfaces/DecodedPacket.md) |

#### Returns

[`DecodedMessage`](../interfaces/DecodedMessage.md)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L114)

***

### decodePayloadHeader()

> `static` `private` **decodePayloadHeader**(`reader`): [`PayloadHeader`](../interfaces/PayloadHeader.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `reader` | [`DataReader`](../../../util/export/classes/DataReader.md)\<[`Little`](../../../util/export/enumerations/Endian.md#little)\> |

#### Returns

[`PayloadHeader`](../interfaces/PayloadHeader.md)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:192](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L192)

***

### encodePacket()

> `static` **encodePacket**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Packet`](../interfaces/Packet.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:141](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L141)

***

### encodePacketHeader()

> `static` **encodePacketHeader**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`PacketHeader`](../interfaces/PacketHeader.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:217](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L217)

***

### encodePayload()

> `static` **encodePayload**(`__namedParameters`): [`Packet`](../interfaces/Packet.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Message`](../interfaces/Message.md) |

#### Returns

[`Packet`](../interfaces/Packet.md)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L130)

***

### encodePayloadHeader()

> `static` `private` **encodePayloadHeader**(`__namedParameters`): `Uint8Array`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`PayloadHeader`](../interfaces/PayloadHeader.md) |

#### Returns

`Uint8Array`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:261](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L261)

***

### messageDiagnostics()

> `static` **messageDiagnostics**(`__namedParameters`, `isDuplicate`): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | [`Message`](../interfaces/Message.md) | `undefined` |
| `isDuplicate` | `boolean` | `false` |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:243](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L243)
