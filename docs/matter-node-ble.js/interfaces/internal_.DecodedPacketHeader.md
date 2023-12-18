[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / DecodedPacketHeader

# Interface: DecodedPacketHeader

[\<internal\>](../modules/internal_.md).DecodedPacketHeader

## Hierarchy

- [`PacketHeader`](internal_.PacketHeader.md)

  ↳ **`DecodedPacketHeader`**

## Table of contents

### Properties

- [destGroupId](internal_.DecodedPacketHeader.md#destgroupid)
- [destNodeId](internal_.DecodedPacketHeader.md#destnodeid)
- [hasMessageExtensions](internal_.DecodedPacketHeader.md#hasmessageextensions)
- [hasPrivacyEnhancements](internal_.DecodedPacketHeader.md#hasprivacyenhancements)
- [isControlMessage](internal_.DecodedPacketHeader.md#iscontrolmessage)
- [messageId](internal_.DecodedPacketHeader.md#messageid)
- [securityFlags](internal_.DecodedPacketHeader.md#securityflags)
- [sessionId](internal_.DecodedPacketHeader.md#sessionid)
- [sessionType](internal_.DecodedPacketHeader.md#sessiontype)
- [sourceNodeId](internal_.DecodedPacketHeader.md#sourcenodeid)

## Properties

### destGroupId

• `Optional` **destGroupId**: `number`

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[destGroupId](internal_.PacketHeader.md#destgroupid)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:20

___

### destNodeId

• `Optional` **destNodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[destNodeId](internal_.PacketHeader.md#destnodeid)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:19

___

### hasMessageExtensions

• **hasMessageExtensions**: `boolean`

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[hasMessageExtensions](internal_.PacketHeader.md#hasmessageextensions)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:16

___

### hasPrivacyEnhancements

• **hasPrivacyEnhancements**: `boolean`

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[hasPrivacyEnhancements](internal_.PacketHeader.md#hasprivacyenhancements)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:14

___

### isControlMessage

• **isControlMessage**: `boolean`

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[isControlMessage](internal_.PacketHeader.md#iscontrolmessage)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:15

___

### messageId

• **messageId**: `number`

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[messageId](internal_.PacketHeader.md#messageid)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:17

___

### securityFlags

• **securityFlags**: `number`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:23

___

### sessionId

• **sessionId**: `number`

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[sessionId](internal_.PacketHeader.md#sessionid)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:12

___

### sessionType

• **sessionType**: [`SessionType`](../enums/internal_.SessionType.md)

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[sessionType](internal_.PacketHeader.md#sessiontype)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:13

___

### sourceNodeId

• `Optional` **sourceNodeId**: [`NodeId`](../modules/internal_.md#nodeid)

#### Inherited from

[PacketHeader](internal_.PacketHeader.md).[sourceNodeId](internal_.PacketHeader.md#sourcenodeid)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:18
