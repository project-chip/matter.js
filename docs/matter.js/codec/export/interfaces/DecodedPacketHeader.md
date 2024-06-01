[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [codec/export](../README.md) / DecodedPacketHeader

# Interface: DecodedPacketHeader

## Extends

- [`PacketHeader`](PacketHeader.md)

## Properties

### destGroupId?

> `optional` **destGroupId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`destGroupId`](PacketHeader.md#destgroupid)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L27)

***

### destNodeId?

> `optional` **destNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`destNodeId`](PacketHeader.md#destnodeid)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L26)

***

### hasMessageExtensions

> **hasMessageExtensions**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`hasMessageExtensions`](PacketHeader.md#hasmessageextensions)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L23)

***

### hasPrivacyEnhancements

> **hasPrivacyEnhancements**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`hasPrivacyEnhancements`](PacketHeader.md#hasprivacyenhancements)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L21)

***

### isControlMessage

> **isControlMessage**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`isControlMessage`](PacketHeader.md#iscontrolmessage)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L22)

***

### messageId

> **messageId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`messageId`](PacketHeader.md#messageid)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L24)

***

### securityFlags

> **securityFlags**: `number`

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L31)

***

### sessionId

> **sessionId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sessionId`](PacketHeader.md#sessionid)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L19)

***

### sessionType

> **sessionType**: [`SessionType`](../enumerations/SessionType.md)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sessionType`](PacketHeader.md#sessiontype)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L20)

***

### sourceNodeId?

> `optional` **sourceNodeId**: [`NodeId`](../../../datatype/export/README.md#nodeid)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sourceNodeId`](PacketHeader.md#sourcenodeid)

#### Source

[packages/matter.js/src/codec/MessageCodec.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/codec/MessageCodec.ts#L25)
