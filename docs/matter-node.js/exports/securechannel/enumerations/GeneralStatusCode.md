[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/securechannel](../README.md) / GeneralStatusCode

# Enumeration: GeneralStatusCode

## Enumeration Members

### Aborted

> **Aborted**: `11`

Failure, may be due to a concurrency error.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:51

***

### AlreadyExists

> **AlreadyExists**: `14`

The sender attempted to create something that already exists.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:57

***

### BadPrecondition

> **BadPrecondition**: `2`

Operation was rejected by the system because the system is in an invalid state.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:33

***

### BadRequest

> **BadRequest**: `4`

A request was unrecognized or malformed

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:37

***

### Busy

> **Busy**: `8`

Device is busy and cannot handle this request at this time.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:45

***

### Continue

> **Continue**: `10`

Context-specific signal to proceed

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:49

***

### DataLoss

> **DataLoss**: `16`

Unrecoverable data loss or corruption has occurred.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:61

***

### Failure

> **Failure**: `1`

Generic failure, additional details may be included in the protocol specific status.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:31

***

### InvalidArgument

> **InvalidArgument**: `12`

An invalid/unsupported argument was provided.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:53

***

### NotFound

> **NotFound**: `13`

Some requested entity was not found.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:55

***

### OutOfRange

> **OutOfRange**: `3`

A value was out of a required range

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:35

***

### PermissionDenied

> **PermissionDenied**: `15`

The sender does not have sufficient permissions to execute the requested operations.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:59

***

### ResourceExhausted

> **ResourceExhausted**: `7`

Insufficient resources to process the given request.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:43

***

### Success

> **Success**: `0`

Operation completed successfully.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:29

***

### Timeout

> **Timeout**: `9`

A timeout occurred.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:47

***

### Unexpected

> **Unexpected**: `6`

A request was not expected at this time.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:41

***

### Unsupported

> **Unsupported**: `5`

An unrecognized or unsupported request was received.

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:39
