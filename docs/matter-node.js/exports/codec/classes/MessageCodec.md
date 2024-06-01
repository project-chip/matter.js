[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/codec](../README.md) / MessageCodec

# Class: MessageCodec

## Constructors

### new MessageCodec()

> **new MessageCodec**(): [`MessageCodec`](MessageCodec.md)

#### Returns

[`MessageCodec`](MessageCodec.md)

## Properties

### decodePacketHeader

> `static` `private` **decodePacketHeader**: `any`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:60

***

### decodePayloadHeader

> `static` `private` **decodePayloadHeader**: `any`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:61

***

### encodePayloadHeader

> `static` `private` **encodePayloadHeader**: `any`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:64

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

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:56

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

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:57

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

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:59

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

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:62

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

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:58

***

### messageDiagnostics()

> `static` **messageDiagnostics**(`__namedParameters`, `isDuplicate`?): `Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `__namedParameters` | [`Message`](../interfaces/Message.md) |
| `isDuplicate`? | `boolean` |

#### Returns

`Record`\<`string`, `unknown`\> & [`Diagnostic`](../../../log/export/interfaces/Diagnostic.md)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:63
