[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / DecodedPacketHeader

# Interface: DecodedPacketHeader

## Extends

- [`PacketHeader`](PacketHeader.md)

## Properties

### destGroupId?

> `optional` **destGroupId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`destGroupId`](PacketHeader.md#destgroupid)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:20

***

### destNodeId?

> `optional` **destNodeId**: [`NodeId`](../README.md#nodeid-5)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`destNodeId`](PacketHeader.md#destnodeid)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:19

***

### hasMessageExtensions

> **hasMessageExtensions**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`hasMessageExtensions`](PacketHeader.md#hasmessageextensions)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:16

***

### hasPrivacyEnhancements

> **hasPrivacyEnhancements**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`hasPrivacyEnhancements`](PacketHeader.md#hasprivacyenhancements)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:14

***

### isControlMessage

> **isControlMessage**: `boolean`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`isControlMessage`](PacketHeader.md#iscontrolmessage)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:15

***

### messageId

> **messageId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`messageId`](PacketHeader.md#messageid)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:17

***

### securityFlags

> **securityFlags**: `number`

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:23

***

### sessionId

> **sessionId**: `number`

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sessionId`](PacketHeader.md#sessionid)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:12

***

### sessionType

> **sessionType**: [`SessionType`](../enumerations/SessionType.md)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sessionType`](PacketHeader.md#sessiontype)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:13

***

### sourceNodeId?

> `optional` **sourceNodeId**: [`NodeId`](../README.md#nodeid-5)

#### Inherited from

[`PacketHeader`](PacketHeader.md).[`sourceNodeId`](PacketHeader.md#sourcenodeid)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:18
