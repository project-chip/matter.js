[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / PacketHeader

# Interface: PacketHeader

## Extended by

- [`DecodedPacketHeader`](DecodedPacketHeader.md)

## Properties

### destGroupId?

> `optional` **destGroupId**: `number`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L27)

***

### destNodeId?

> `optional` **destNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L26)

***

### hasMessageExtensions

> **hasMessageExtensions**: `boolean`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L23)

***

### hasPrivacyEnhancements

> **hasPrivacyEnhancements**: `boolean`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L21)

***

### isControlMessage

> **isControlMessage**: `boolean`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L22)

***

### messageId

> **messageId**: `number`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L24)

***

### sessionId

> **sessionId**: `number`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L19)

***

### sessionType

> **sessionType**: [`SessionType`](../enumerations/SessionType.md)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L20)

***

### sourceNodeId?

> `optional` **sourceNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L25)
