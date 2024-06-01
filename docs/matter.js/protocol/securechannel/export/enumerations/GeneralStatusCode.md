[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/securechannel/export](../README.md) / GeneralStatusCode

# Enumeration: GeneralStatusCode

## Enumeration Members

### Aborted

> **Aborted**: `11`

Failure, may be due to a concurrency error.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L66)

***

### AlreadyExists

> **AlreadyExists**: `14`

The sender attempted to create something that already exists.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L75)

***

### BadPrecondition

> **BadPrecondition**: `2`

Operation was rejected by the system because the system is in an invalid state.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L39)

***

### BadRequest

> **BadRequest**: `4`

A request was unrecognized or malformed

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L45)

***

### Busy

> **Busy**: `8`

Device is busy and cannot handle this request at this time.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L57)

***

### Continue

> **Continue**: `10`

Context-specific signal to proceed

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:63](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L63)

***

### DataLoss

> **DataLoss**: `16`

Unrecoverable data loss or corruption has occurred.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L81)

***

### Failure

> **Failure**: `1`

Generic failure, additional details may be included in the protocol specific status.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:36](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L36)

***

### InvalidArgument

> **InvalidArgument**: `12`

An invalid/unsupported argument was provided.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L69)

***

### NotFound

> **NotFound**: `13`

Some requested entity was not found.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:72](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L72)

***

### OutOfRange

> **OutOfRange**: `3`

A value was out of a required range

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L42)

***

### PermissionDenied

> **PermissionDenied**: `15`

The sender does not have sufficient permissions to execute the requested operations.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L78)

***

### ResourceExhausted

> **ResourceExhausted**: `7`

Insufficient resources to process the given request.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:54](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L54)

***

### Success

> **Success**: `0`

Operation completed successfully.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L33)

***

### Timeout

> **Timeout**: `9`

A timeout occurred.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L60)

***

### Unexpected

> **Unexpected**: `6`

A request was not expected at this time.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L51)

***

### Unsupported

> **Unsupported**: `5`

An unrecognized or unsupported request was received.

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L48)
