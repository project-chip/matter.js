[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / MatterError

# Class: MatterError

[exports/common](../modules/exports_common.md).MatterError

Error base class for all errors thrown by this library.

## Hierarchy

- `Error`

  ↳ **`MatterError`**

  ↳↳ [`FabricNotFoundError`](exports_fabric.FabricNotFoundError.md)

  ↳↳ [`NoChannelError`](exports_protocol.NoChannelError.md)

  ↳↳ [`RetransmissionLimitReachedError`](exports_protocol.RetransmissionLimitReachedError.md)

  ↳↳ [`UnexpectedMessageError`](exports_protocol.UnexpectedMessageError.md)

  ↳↳ [`StatusResponseError`](exports_interaction.StatusResponseError.md)

  ↳↳ [`ChannelStatusResponseError`](exports_securechannel.ChannelStatusResponseError.md)

  ↳↳ [`EndOfStreamError`](util.EndOfStreamError.md)

## Table of contents

### Constructors

- [constructor](exports_common.MatterError.md#constructor)

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
