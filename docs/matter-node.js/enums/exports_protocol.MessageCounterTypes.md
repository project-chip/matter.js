[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/protocol](../modules/exports_protocol.md) / MessageCounterTypes

# Enumeration: MessageCounterTypes

[exports/protocol](../modules/exports_protocol.md).MessageCounterTypes

## Table of contents

### Enumeration Members

- [GlobalEncryptedControl](exports_protocol.MessageCounterTypes.md#globalencryptedcontrol)
- [GlobalEncryptedData](exports_protocol.MessageCounterTypes.md#globalencrypteddata)
- [GlobalUnencrypted](exports_protocol.MessageCounterTypes.md#globalunencrypted)
- [SecureSession](exports_protocol.MessageCounterTypes.md#securesession)

## Enumeration Members

### GlobalEncryptedControl

• **GlobalEncryptedControl** = ``2``

Used for "Group" sessions to encode control messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:25

___

### GlobalEncryptedData

• **GlobalEncryptedData** = ``1``

Used for "Group" sessions to encode regular data messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:20

___

### GlobalUnencrypted

• **GlobalUnencrypted** = ``0``

Used for "Unsecure" sessions
Rollover allowed, Persistence: Optional

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:15

___

### SecureSession

• **SecureSession** = ``3``

Used for "Unicast" sessions
Lifetime: Session Key, Rollover expires, Persistence: Optional

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:30
