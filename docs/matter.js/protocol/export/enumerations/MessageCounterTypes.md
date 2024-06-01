[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / MessageCounterTypes

# Enumeration: MessageCounterTypes

## Enumeration Members

### GlobalEncryptedControl

> **GlobalEncryptedControl**: `2`

Used for "Group" sessions to encode control messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L35)

***

### GlobalEncryptedData

> **GlobalEncryptedData**: `1`

Used for "Group" sessions to encode regular data messages encrypted with a group key.
Lifetime: Operational Group Key, Rollover allowed, Persistence: Mandatory

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L29)

***

### GlobalUnencrypted

> **GlobalUnencrypted**: `0`

Used for "Unsecure" sessions
Rollover allowed, Persistence: Optional

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L23)

***

### SecureSession

> **SecureSession**: `3`

Used for "Unicast" sessions
Lifetime: Session Key, Rollover expires, Persistence: Optional

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L41)
