[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / DecodedMessage

# Interface: DecodedMessage

## Extends

- [`Message`](Message.md)

## Properties

### packetHeader

> **packetHeader**: [`DecodedPacketHeader`](DecodedPacketHeader.md)

#### Overrides

[`Message`](Message.md).[`packetHeader`](Message.md#packetheader)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:49

***

### payload

> **payload**: `Uint8Array`

#### Inherited from

[`Message`](Message.md).[`payload`](Message.md#payload)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:46

***

### payloadHeader

> **payloadHeader**: [`PayloadHeader`](PayloadHeader.md)

#### Inherited from

[`Message`](Message.md).[`payloadHeader`](Message.md#payloadheader)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:44

***

### securityExtension?

> `optional` **securityExtension**: `Uint8Array`

#### Inherited from

[`Message`](Message.md).[`securityExtension`](Message.md#securityextension)

#### Source

matter.js/dist/esm/codec/MessageCodec.d.ts:45
