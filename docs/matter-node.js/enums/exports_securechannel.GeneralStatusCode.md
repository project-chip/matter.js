[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/securechannel](../modules/exports_securechannel.md) / GeneralStatusCode

# Enumeration: GeneralStatusCode

[exports/securechannel](../modules/exports_securechannel.md).GeneralStatusCode

## Table of contents

### Enumeration Members

- [Aborted](exports_securechannel.GeneralStatusCode.md#aborted)
- [AlreadyExists](exports_securechannel.GeneralStatusCode.md#alreadyexists)
- [BadPrecondition](exports_securechannel.GeneralStatusCode.md#badprecondition)
- [BadRequest](exports_securechannel.GeneralStatusCode.md#badrequest)
- [Busy](exports_securechannel.GeneralStatusCode.md#busy)
- [Continue](exports_securechannel.GeneralStatusCode.md#continue)
- [DataLoss](exports_securechannel.GeneralStatusCode.md#dataloss)
- [Error](exports_securechannel.GeneralStatusCode.md#error)
- [InvalidArgument](exports_securechannel.GeneralStatusCode.md#invalidargument)
- [NotFound](exports_securechannel.GeneralStatusCode.md#notfound)
- [OutOfRange](exports_securechannel.GeneralStatusCode.md#outofrange)
- [PermissionDenied](exports_securechannel.GeneralStatusCode.md#permissiondenied)
- [ResourceExhausted](exports_securechannel.GeneralStatusCode.md#resourceexhausted)
- [Success](exports_securechannel.GeneralStatusCode.md#success)
- [Timeout](exports_securechannel.GeneralStatusCode.md#timeout)
- [Unexpected](exports_securechannel.GeneralStatusCode.md#unexpected)
- [Unsupported](exports_securechannel.GeneralStatusCode.md#unsupported)

## Enumeration Members

### Aborted

• **Aborted** = ``11``

Failure, may be due to a concurrency error.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:51

___

### AlreadyExists

• **AlreadyExists** = ``14``

The sender attempted to create something that already exists.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:57

___

### BadPrecondition

• **BadPrecondition** = ``2``

Operation was rejected by the system because the system is in an invalid state.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:33

___

### BadRequest

• **BadRequest** = ``4``

A request was unrecognized or malformed

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:37

___

### Busy

• **Busy** = ``8``

Device is busy and cannot handle this request at this time.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:45

___

### Continue

• **Continue** = ``10``

Context-specific signal to proceed

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:49

___

### DataLoss

• **DataLoss** = ``16``

Unrecoverable data loss or corruption has occurred.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:61

___

### Error

• **Error** = ``1``

Generic failure, additional details may be included in the protocol specific status.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:31

___

### InvalidArgument

• **InvalidArgument** = ``12``

An invalid/unsupported argument was provided.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:53

___

### NotFound

• **NotFound** = ``13``

Some requested entity was not found.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:55

___

### OutOfRange

• **OutOfRange** = ``3``

A value was out of a required range

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:35

___

### PermissionDenied

• **PermissionDenied** = ``15``

The sender does not have sufficient permissions to execute the requested operations.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:59

___

### ResourceExhausted

• **ResourceExhausted** = ``7``

Insufficient resources to process the given request.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:43

___

### Success

• **Success** = ``0``

Operation completed successfully.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:29

___

### Timeout

• **Timeout** = ``9``

A timeout occurred.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:47

___

### Unexpected

• **Unexpected** = ``6``

A request was not expected at this time.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:41

___

### Unsupported

• **Unsupported** = ``5``

An unrecognized or unsupported request was received.

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:39
