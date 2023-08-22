[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / MatterError

# Class: MatterError

[common/export](../modules/common_export.md).MatterError

Error base class for all errors thrown by this library.

## Hierarchy

- `Error`

  ↳ **`MatterError`**

  ↳↳ [`BleError`](ble_export.BleError.md)

  ↳↳ [`BtpMatterError`](ble_export.BtpMatterError.md)

  ↳↳ [`CertificateError`](certificate_export.CertificateError.md)

  ↳↳ [`AttributeError`](cluster_export.AttributeError.md)

  ↳↳ [`EventError`](cluster_export.EventError.md)

  ↳↳ [`IllegalClusterError`](cluster_export.IllegalClusterError.md)

  ↳↳ [`FabricScopeError`](cluster_export.FabricScopeError.md)

  ↳↳ [`NoProviderError`](common_export.NoProviderError.md)

  ↳↳ [`ValidationError`](common_export.ValidationError.md)

  ↳↳ [`InternalError`](common_export.InternalError.md)

  ↳↳ [`MatterFlowError`](common_export.MatterFlowError.md)

  ↳↳ [`UnexpectedDataError`](common_export.UnexpectedDataError.md)

  ↳↳ [`ImplementationError`](common_export.ImplementationError.md)

  ↳↳ [`CryptoError`](crypto_export.CryptoError.md)

  ↳↳ [`FabricNotFoundError`](fabric_export.FabricNotFoundError.md)

  ↳↳ [`NetworkError`](net_export.NetworkError.md)

  ↳↳ [`NoChannelError`](protocol_export.NoChannelError.md)

  ↳↳ [`CommissioningError`](protocol_export.CommissioningError.md)

  ↳↳ [`RetransmissionLimitReachedError`](protocol_export.RetransmissionLimitReachedError.md)

  ↳↳ [`UnexpectedMessageError`](protocol_export.UnexpectedMessageError.md)

  ↳↳ [`StatusResponseError`](protocol_interaction_export.StatusResponseError.md)

  ↳↳ [`ChannelStatusResponseError`](protocol_securechannel_export.ChannelStatusResponseError.md)

  ↳↳ [`StorageError`](storage_export.StorageError.md)

  ↳↳ [`EndOfStreamError`](util_export.EndOfStreamError.md)

## Table of contents

### Constructors

- [constructor](common_export.MatterError.md#constructor)

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
