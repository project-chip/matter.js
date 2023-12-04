[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/codec](../modules/exports_codec.md) / DecodedPacketHeader

# Interface: DecodedPacketHeader

[exports/codec](../modules/exports_codec.md).DecodedPacketHeader

## Hierarchy

- [`PacketHeader`](exports_codec.PacketHeader.md)

  ↳ **`DecodedPacketHeader`**

## Table of contents

### Properties

- [destGroupId](exports_codec.DecodedPacketHeader.md#destgroupid)
- [destNodeId](exports_codec.DecodedPacketHeader.md#destnodeid)
- [hasMessageExtensions](exports_codec.DecodedPacketHeader.md#hasmessageextensions)
- [hasPrivacyEnhancements](exports_codec.DecodedPacketHeader.md#hasprivacyenhancements)
- [isControlMessage](exports_codec.DecodedPacketHeader.md#iscontrolmessage)
- [messageId](exports_codec.DecodedPacketHeader.md#messageid)
- [securityFlags](exports_codec.DecodedPacketHeader.md#securityflags)
- [sessionId](exports_codec.DecodedPacketHeader.md#sessionid)
- [sessionType](exports_codec.DecodedPacketHeader.md#sessiontype)
- [sourceNodeId](exports_codec.DecodedPacketHeader.md#sourcenodeid)

## Properties

### destGroupId

• `Optional` **destGroupId**: `number`

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[destGroupId](exports_codec.PacketHeader.md#destgroupid)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:18

___

### destNodeId

• `Optional` **destNodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[destNodeId](exports_codec.PacketHeader.md#destnodeid)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:17

___

### hasMessageExtensions

• **hasMessageExtensions**: `boolean`

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[hasMessageExtensions](exports_codec.PacketHeader.md#hasmessageextensions)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:14

___

### hasPrivacyEnhancements

• **hasPrivacyEnhancements**: `boolean`

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[hasPrivacyEnhancements](exports_codec.PacketHeader.md#hasprivacyenhancements)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:12

___

### isControlMessage

• **isControlMessage**: `boolean`

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[isControlMessage](exports_codec.PacketHeader.md#iscontrolmessage)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:13

___

### messageId

• **messageId**: `number`

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[messageId](exports_codec.PacketHeader.md#messageid)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:15

___

### securityFlags

• **securityFlags**: `number`

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:21

___

### sessionId

• **sessionId**: `number`

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[sessionId](exports_codec.PacketHeader.md#sessionid)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:10

___

### sessionType

• **sessionType**: [`SessionType`](../enums/exports_codec.SessionType.md)

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[sessionType](exports_codec.PacketHeader.md#sessiontype)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:11

___

### sourceNodeId

• `Optional` **sourceNodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Inherited from

[PacketHeader](exports_codec.PacketHeader.md).[sourceNodeId](exports_codec.PacketHeader.md#sourcenodeid)

#### Defined in

packages/matter.js/dist/esm/codec/MessageCodec.d.ts:16
