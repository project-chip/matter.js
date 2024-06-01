[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/codec](../README.md) / DecodedPacketHeader

# Interface: DecodedPacketHeader

## Extends

- [`PacketHeader`](PacketHeader.md)

## Properties

### destGroupId?

> `optional` **destGroupId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`destGroupId`](PacketHeader.md#destgroupid)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:20

***

### destNodeId?

> `optional` **destNodeId**: [`NodeId`](../../datatype/README.md#nodeid)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`destNodeId`](PacketHeader.md#destnodeid)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:19

***

### hasMessageExtensions

> **hasMessageExtensions**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`hasMessageExtensions`](PacketHeader.md#hasmessageextensions)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:16

***

### hasPrivacyEnhancements

> **hasPrivacyEnhancements**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`hasPrivacyEnhancements`](PacketHeader.md#hasprivacyenhancements)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:14

***

### isControlMessage

> **isControlMessage**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`isControlMessage`](PacketHeader.md#iscontrolmessage)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:15

***

### messageId

> **messageId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`messageId`](PacketHeader.md#messageid)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:17

***

### securityFlags

> **securityFlags**: `number`

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:23

***

### sessionId

> **sessionId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sessionId`](PacketHeader.md#sessionid)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:12

***

### sessionType

> **sessionType**: [`SessionType`](../enumerations/SessionType.md)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sessionType`](PacketHeader.md#sessiontype)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:13

***

### sourceNodeId?

> `optional` **sourceNodeId**: [`NodeId`](../../datatype/README.md#nodeid)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sourceNodeId`](PacketHeader.md#sourcenodeid)

#### Source

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:18
