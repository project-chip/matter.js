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

  ↳↳ [`InternalError`](common_export.InternalError.md)

  ↳↳ [`MatterFlowError`](common_export.MatterFlowError.md)

  ↳↳ [`UnexpectedDataError`](common_export.UnexpectedDataError.md)

  ↳↳ [`ImplementationError`](common_export.ImplementationError.md)

  ↳↳ [`CryptoError`](crypto_export.CryptoError.md)

  ↳↳ [`FabricNotFoundError`](fabric_export.FabricNotFoundError.md)

  ↳↳ [`FabricTableFullError`](fabric_export.FabricTableFullError.md)

  ↳↳ [`NetworkError`](net_export.NetworkError.md)

  ↳↳ [`NoChannelError`](protocol_export.NoChannelError.md)

  ↳↳ [`CommissioningError`](protocol_export.CommissioningError.md)

  ↳↳ [`DiscoveryError`](protocol_export.DiscoveryError.md)

  ↳↳ [`ChannelNotConnectedError`](protocol_export.ChannelNotConnectedError.md)

  ↳↳ [`RetransmissionLimitReachedError`](protocol_export.RetransmissionLimitReachedError.md)

  ↳↳ [`UnexpectedMessageError`](protocol_export.UnexpectedMessageError.md)

  ↳↳ [`DuplicateMessageError`](protocol_export.DuplicateMessageError.md)

  ↳↳ [`StatusResponseError`](protocol_interaction_export.StatusResponseError.md)

  ↳↳ [`ChannelStatusResponseError`](protocol_securechannel_export.ChannelStatusResponseError.md)

  ↳↳ [`StorageError`](storage_export.StorageError.md)

  ↳↳ [`PromiseTimeoutError`](util_export.PromiseTimeoutError.md)

  ↳↳ [`EndOfStreamError`](util_export.EndOfStreamError.md)

  ↳↳ [`NoResponseTimeoutError`](util_export.NoResponseTimeoutError.md)

## Table of contents

### Constructors

- [constructor](common_export.MatterError.md#constructor)

## Constructors

### constructor

• **new MatterError**(`message?`): [`MatterError`](common_export.MatterError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |

#### Returns

[`MatterError`](common_export.MatterError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1082

• **new MatterError**(`message?`, `options?`): [`MatterError`](common_export.MatterError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `string` |
| `options?` | `ErrorOptions` |

#### Returns

[`MatterError`](common_export.MatterError.md)

#### Inherited from

Error.constructor

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1082
