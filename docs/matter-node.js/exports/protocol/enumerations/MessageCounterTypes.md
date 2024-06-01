[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / MessageCounterTypes

# Enumeration: MessageCounterTypes

## Enumeration Members

### GlobalEncryptedControl

> **GlobalEncryptedControl**: `2`

Used for "Group" sessions to encode control messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:25

***

### GlobalEncryptedData

> **GlobalEncryptedData**: `1`

Used for "Group" sessions to encode regular data messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:20

***

### GlobalUnencrypted

> **GlobalUnencrypted**: `0`

Used for "Unsecure" sessions
Rollover allowed, Persistence: Optional

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:15

***

### SecureSession

> **SecureSession**: `3`

Used for "Unicast" sessions
Lifetime: Session Key, Rollover expires, Persistence: Optional

#### Source

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:30
