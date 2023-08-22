[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / MatterError

# Class: MatterError

[exports/common](../modules/exports_common.md).MatterError

Error base class for all errors thrown by this library.

## Hierarchy

- `Error`

  ↳ **`MatterError`**

  ↳↳ [`BleError`](exports_ble.BleError.md)

  ↳↳ [`BtpMatterError`](exports_ble.BtpMatterError.md)

  ↳↳ [`CertificateError`](exports_certificate.CertificateError.md)

  ↳↳ [`AttributeError`](exports_cluster.AttributeError.md)

  ↳↳ [`EventError`](exports_cluster.EventError.md)

  ↳↳ [`IllegalClusterError`](exports_cluster.IllegalClusterError.md)

  ↳↳ [`FabricScopeError`](exports_cluster.FabricScopeError.md)

  ↳↳ [`NoProviderError`](exports_common.NoProviderError.md)

  ↳↳ [`ValidationError`](exports_common.ValidationError.md)

  ↳↳ [`InternalError`](exports_common.InternalError.md)

  ↳↳ [`MatterFlowError`](exports_common.MatterFlowError.md)

  ↳↳ [`UnexpectedDataError`](exports_common.UnexpectedDataError.md)

  ↳↳ [`ImplementationError`](exports_common.ImplementationError.md)

  ↳↳ [`CryptoError`](crypto_export.CryptoError.md)

  ↳↳ [`FabricNotFoundError`](exports_fabric.FabricNotFoundError.md)

  ↳↳ [`NetworkError`](net_export.NetworkError.md)

  ↳↳ [`NoChannelError`](exports_protocol.NoChannelError.md)

  ↳↳ [`CommissioningError`](exports_protocol.CommissioningError.md)

  ↳↳ [`RetransmissionLimitReachedError`](exports_protocol.RetransmissionLimitReachedError.md)

  ↳↳ [`UnexpectedMessageError`](exports_protocol.UnexpectedMessageError.md)

  ↳↳ [`StatusResponseError`](exports_interaction.StatusResponseError.md)

  ↳↳ [`ChannelStatusResponseError`](exports_securechannel.ChannelStatusResponseError.md)

  ↳↳ [`StorageError`](storage_export.StorageError.md)

  ↳↳ [`EndOfStreamError`](util_export.EndOfStreamError.md)

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
