[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / DecodedMessage

# Interface: DecodedMessage

## Extends

- [`Message`](Message.md)

## Properties

### packetHeader

> **packetHeader**: [`DecodedPacketHeader`](DecodedPacketHeader.md)

#### Overrides

[`Message`](Message.md).[`packetHeader`](Message.md#packetheader)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:61](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L61)

***

### payload

> **payload**: `Uint8Array`

#### Inherited from

[`Message`](Message.md).[`payload`](Message.md#payload)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L57)

***

### payloadHeader

> **payloadHeader**: [`PayloadHeader`](PayloadHeader.md)

#### Inherited from

[`Message`](Message.md).[`payloadHeader`](Message.md#payloadheader)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L55)

***

### securityExtension?

> `optional` **securityExtension**: `Uint8Array`

#### Inherited from

[`Message`](Message.md).[`securityExtension`](Message.md#securityextension)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L56)
