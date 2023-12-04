[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [<internal\>](../modules/internal_.md) / Message

# Interface: Message

[<internal>](../modules/internal_.md).Message

## Hierarchy

- **`Message`**

  ↳ [`DecodedMessage`](internal_.DecodedMessage.md)

## Table of contents

### Properties

- [packetHeader](internal_.Message.md#packetheader)
- [payload](internal_.Message.md#payload)
- [payloadHeader](internal_.Message.md#payloadheader)
- [securityExtension](internal_.Message.md#securityextension)

## Properties

### packetHeader

• **packetHeader**: [`PacketHeader`](internal_.PacketHeader.md)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:41

___

### payload

• **payload**: `Uint8Array`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:44

___

### payloadHeader

• **payloadHeader**: [`PayloadHeader`](internal_.PayloadHeader.md)

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:42

___

### securityExtension

• `Optional` **securityExtension**: `Uint8Array`

#### Defined in

matter.js/dist/esm/codec/MessageCodec.d.ts:43
