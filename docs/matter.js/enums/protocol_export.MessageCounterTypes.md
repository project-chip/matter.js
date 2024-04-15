[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/export](../modules/protocol_export.md) / MessageCounterTypes

# Enumeration: MessageCounterTypes

[protocol/export](../modules/protocol_export.md).MessageCounterTypes

## Table of contents

### Enumeration Members

- [GlobalEncryptedControl](protocol_export.MessageCounterTypes.md#globalencryptedcontrol)
- [GlobalEncryptedData](protocol_export.MessageCounterTypes.md#globalencrypteddata)
- [GlobalUnencrypted](protocol_export.MessageCounterTypes.md#globalunencrypted)
- [SecureSession](protocol_export.MessageCounterTypes.md#securesession)

## Enumeration Members

### GlobalEncryptedControl

• **GlobalEncryptedControl** = ``2``

Used for "Group" sessions to encode control messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L35)

___

### GlobalEncryptedData

• **GlobalEncryptedData** = ``1``

Used for "Group" sessions to encode regular data messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L29)

___

### GlobalUnencrypted

• **GlobalUnencrypted** = ``0``

Used for "Unsecure" sessions
Rollover allowed, Persistence: Optional

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L23)

___

### SecureSession

• **SecureSession** = ``3``

Used for "Unicast" sessions
Lifetime: Session Key, Rollover expires, Persistence: Optional

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L41)
