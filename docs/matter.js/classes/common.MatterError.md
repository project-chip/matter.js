[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common](../modules/common.md) / MatterError

# Class: MatterError

[common](../modules/common.md).MatterError

Error base class for all errors thrown by this library.

## Hierarchy

- `Error`

  ↳ **`MatterError`**

  ↳↳ [`FabricNotFoundError`](fabric.FabricNotFoundError.md)

  ↳↳ [`NoChannelError`](protocol.NoChannelError.md)

  ↳↳ [`RetransmissionLimitReachedError`](protocol.RetransmissionLimitReachedError.md)

  ↳↳ [`UnexpectedMessageError`](protocol.UnexpectedMessageError.md)

  ↳↳ [`StatusResponseError`](protocol_interaction.StatusResponseError.md)

  ↳↳ [`ChannelStatusResponseError`](protocol_securechannel.ChannelStatusResponseError.md)

  ↳↳ [`EndOfStreamError`](util.EndOfStreamError.md)

## Table of contents

### Constructors

- [constructor](common.MatterError.md#constructor)

## Constructors

### constructor

• **new MatterError**(`message?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1059
