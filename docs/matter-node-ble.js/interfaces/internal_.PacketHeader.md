[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / PacketHeader

# Interface: PacketHeader

[\<internal\>](../modules/internal_.md).PacketHeader

## Hierarchy

- **`PacketHeader`**

  ↳ [`DecodedPacketHeader`](internal_.DecodedPacketHeader.md)

## Table of contents

### Properties

- [destGroupId](internal_.PacketHeader.md#destgroupid)
- [destNodeId](internal_.PacketHeader.md#destnodeid)
- [hasMessageExtensions](internal_.PacketHeader.md#hasmessageextensions)
- [hasPrivacyEnhancements](internal_.PacketHeader.md#hasprivacyenhancements)
- [isControlMessage](internal_.PacketHeader.md#iscontrolmessage)
- [messageId](internal_.PacketHeader.md#messageid)
- [sessionId](internal_.PacketHeader.md#sessionid)
- [sessionType](internal_.PacketHeader.md#sessiontype)
- [sourceNodeId](internal_.PacketHeader.md#sourcenodeid)

## Properties

### destGroupId

• `Optional` **destGroupId**: `number`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:20

___

### destNodeId

• `Optional` **destNodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:19

___

### hasMessageExtensions

• **hasMessageExtensions**: `boolean`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:16

___

### hasPrivacyEnhancements

• **hasPrivacyEnhancements**: `boolean`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:14

___

### isControlMessage

• **isControlMessage**: `boolean`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:15

___

### messageId

• **messageId**: `number`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:17

___

### sessionId

• **sessionId**: `number`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:12

___

### sessionType

• **sessionType**: [`SessionType`](../enums/internal_.SessionType.md)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:13

___

### sourceNodeId

• `Optional` **sourceNodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:18
