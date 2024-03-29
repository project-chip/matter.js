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

  ↳↳ [`CryptoError`](crypto_export.CryptoError.md)

  ↳↳ [`NoProviderError`](exports_common.NoProviderError.md)

  ↳↳ [`InternalError`](exports_common.InternalError.md)

  ↳↳ [`MatterFlowError`](exports_common.MatterFlowError.md)

  ↳↳ [`UnexpectedDataError`](exports_common.UnexpectedDataError.md)

  ↳↳ [`ImplementationError`](exports_common.ImplementationError.md)

  ↳↳ [`FabricNotFoundError`](exports_fabric.FabricNotFoundError.md)

  ↳↳ [`FabricTableFullError`](exports_fabric.FabricTableFullError.md)

  ↳↳ [`NetworkError`](net_export.NetworkError.md)

  ↳↳ [`NoChannelError`](exports_protocol.NoChannelError.md)

  ↳↳ [`CommissioningError`](exports_protocol.CommissioningError.md)

  ↳↳ [`DiscoveryError`](exports_protocol.DiscoveryError.md)

  ↳↳ [`ChannelNotConnectedError`](exports_protocol.ChannelNotConnectedError.md)

  ↳↳ [`RetransmissionLimitReachedError`](exports_protocol.RetransmissionLimitReachedError.md)

  ↳↳ [`UnexpectedMessageError`](exports_protocol.UnexpectedMessageError.md)

  ↳↳ [`DuplicateMessageError`](exports_protocol.DuplicateMessageError.md)

  ↳↳ [`StatusResponseError`](exports_interaction.StatusResponseError.md)

  ↳↳ [`ChannelStatusResponseError`](exports_securechannel.ChannelStatusResponseError.md)

  ↳↳ [`StorageError`](storage_export.StorageError.md)

  ↳↳ [`PromiseTimeoutError`](util_export.PromiseTimeoutError.md)

  ↳↳ [`EndOfStreamError`](util_export.EndOfStreamError.md)

  ↳↳ [`NoResponseTimeoutError`](util_export.NoResponseTimeoutError.md)

## Table of contents

### Constructors

- [constructor](exports_common.MatterError.md#constructor)

## Constructors

### constructor

• **new MatterError**(`message?`): [`MatterError`](exports_common.MatterError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`MatterError`](exports_common.MatterError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1082
