[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel](../modules/protocol_securechannel.md) / GeneralStatusCode

# Enumeration: GeneralStatusCode

[protocol/securechannel](../modules/protocol_securechannel.md).GeneralStatusCode

## Table of contents

### Enumeration Members

- [Aborted](protocol_securechannel.GeneralStatusCode.md#aborted)
- [AlreadyExists](protocol_securechannel.GeneralStatusCode.md#alreadyexists)
- [BadPrecondition](protocol_securechannel.GeneralStatusCode.md#badprecondition)
- [BadRequest](protocol_securechannel.GeneralStatusCode.md#badrequest)
- [Busy](protocol_securechannel.GeneralStatusCode.md#busy)
- [Continue](protocol_securechannel.GeneralStatusCode.md#continue)
- [DataLoss](protocol_securechannel.GeneralStatusCode.md#dataloss)
- [Error](protocol_securechannel.GeneralStatusCode.md#error)
- [InvalidArgument](protocol_securechannel.GeneralStatusCode.md#invalidargument)
- [NotFound](protocol_securechannel.GeneralStatusCode.md#notfound)
- [OutOfRange](protocol_securechannel.GeneralStatusCode.md#outofrange)
- [PermissionDenied](protocol_securechannel.GeneralStatusCode.md#permissiondenied)
- [ResourceExhausted](protocol_securechannel.GeneralStatusCode.md#resourceexhausted)
- [Success](protocol_securechannel.GeneralStatusCode.md#success)
- [Timeout](protocol_securechannel.GeneralStatusCode.md#timeout)
- [Unexpected](protocol_securechannel.GeneralStatusCode.md#unexpected)
- [Unsupported](protocol_securechannel.GeneralStatusCode.md#unsupported)

## Enumeration Members

### Aborted

• **Aborted** = ``11``

Failure, may be due to a concurrency error.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L66)

___

### AlreadyExists

• **AlreadyExists** = ``14``

The sender attempted to create something that already exists.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:75](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L75)

___

### BadPrecondition

• **BadPrecondition** = ``2``

Operation was rejected by the system because the system is in an invalid state.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:39](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L39)

___

### BadRequest

• **BadRequest** = ``4``

A request was unrecognized or malformed

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L45)

___

### Busy

• **Busy** = ``8``

Device is busy and cannot handle this request at this time.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:57](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L57)

___

### Continue

• **Continue** = ``10``

Context-specific signal to proceed

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L63)

___

### DataLoss

• **DataLoss** = ``16``

Unrecoverable data loss or corruption has occurred.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:81](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L81)

___

### Error

• **Error** = ``1``

Generic failure, additional details may be included in the protocol specific status.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:36](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L36)

___

### InvalidArgument

• **InvalidArgument** = ``12``

An invalid/unsupported argument was provided.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:69](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L69)

___

### NotFound

• **NotFound** = ``13``

Some requested entity was not found.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:72](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L72)

___

### OutOfRange

• **OutOfRange** = ``3``

A value was out of a required range

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:42](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L42)

___

### PermissionDenied

• **PermissionDenied** = ``15``

The sender does not have sufficient permissions to execute the requested operations.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:78](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L78)

___

### ResourceExhausted

• **ResourceExhausted** = ``7``

Insufficient resources to process the given request.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:54](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L54)

___

### Success

• **Success** = ``0``

Operation completed successfully.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:33](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L33)

___

### Timeout

• **Timeout** = ``9``

A timeout occurred.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:60](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L60)

___

### Unexpected

• **Unexpected** = ``6``

A request was not expected at this time.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:51](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L51)

___

### Unsupported

• **Unsupported** = ``5``

An unrecognized or unsupported request was received.

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:48](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L48)
