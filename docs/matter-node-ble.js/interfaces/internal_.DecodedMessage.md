[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / DecodedMessage

# Interface: DecodedMessage

[\<internal\>](../modules/internal_.md).DecodedMessage

## Hierarchy

- [`Message`](internal_.Message.md)

  ↳ **`DecodedMessage`**

## Table of contents

### Properties

- [packetHeader](internal_.DecodedMessage.md#packetheader)
- [payload](internal_.DecodedMessage.md#payload)
- [payloadHeader](internal_.DecodedMessage.md#payloadheader)
- [securityExtension](internal_.DecodedMessage.md#securityextension)

## Properties

### packetHeader

• **packetHeader**: [`DecodedPacketHeader`](internal_.DecodedPacketHeader.md)

#### Overrides

[Message](internal_.Message.md).[packetHeader](internal_.Message.md#packetheader)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:49

___

### payload

• **payload**: `Uint8Array`

#### Inherited from

[Message](internal_.Message.md).[payload](internal_.Message.md#payload)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:46

___

### payloadHeader

• **payloadHeader**: [`PayloadHeader`](internal_.PayloadHeader.md)

#### Inherited from

[Message](internal_.Message.md).[payloadHeader](internal_.Message.md#payloadheader)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:44

___

### securityExtension

• `Optional` **securityExtension**: `Uint8Array`

#### Inherited from

[Message](internal_.Message.md).[securityExtension](internal_.Message.md#securityextension)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:45
