[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/codec](../README.md) / PacketHeader

# Interface: PacketHeader

## Extended by

- [`DecodedPacketHeader`](DecodedPacketHeader.md)

## Properties

### destGroupId?

> `optional` **destGroupId**: `number`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:20

***

### destNodeId?

> `optional` **destNodeId**: [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:19

***

### hasMessageExtensions

> **hasMessageExtensions**: `boolean`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:16

***

### hasPrivacyEnhancements

> **hasPrivacyEnhancements**: `boolean`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:14

***

### isControlMessage

> **isControlMessage**: `boolean`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:15

***

### messageId

> **messageId**: `number`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:17

***

### sessionId

> **sessionId**: `number`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:12

***

### sessionType

> **sessionType**: [`SessionType`](../enumerations/SessionType.md)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:13

***

### sourceNodeId?

> `optional` **sourceNodeId**: [`NodeId`](../../datatype/README.md#nodeid)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:18
