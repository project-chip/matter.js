[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / MatterError

# Class: MatterError

Error base class for all errors thrown by this library.

## Extends

- `Error`

## Extended by

- [`BleError`](../../ble/classes/BleError.md)
- [`BtpMatterError`](../../ble/classes/BtpMatterError.md)
- [`CertificateError`](../../certificate/classes/CertificateError.md)
- [`AttributeError`](../../cluster/classes/AttributeError.md)
- [`EventError`](../../cluster/classes/EventError.md)
- [`IllegalClusterError`](../../cluster/classes/IllegalClusterError.md)
- [`FabricScopeError`](../../cluster/classes/FabricScopeError.md)
- [`CryptoError`](../../../crypto/export/classes/CryptoError.md)
- [`NoProviderError`](NoProviderError.md)
- [`InternalError`](InternalError.md)
- [`MatterFlowError`](MatterFlowError.md)
- [`UnexpectedDataError`](UnexpectedDataError.md)
- [`ImplementationError`](ImplementationError.md)
- [`PublicKeyError`](../../fabric/classes/PublicKeyError.md)
- [`FabricNotFoundError`](../../fabric/classes/FabricNotFoundError.md)
- [`FabricTableFullError`](../../fabric/classes/FabricTableFullError.md)
- [`NetworkError`](../../../net/export/classes/NetworkError.md)
- [`NoChannelError`](../../protocol/classes/NoChannelError.md)
- [`CommissioningError`](../../protocol/classes/CommissioningError.md)
- [`DiscoveryError`](../../protocol/classes/DiscoveryError.md)
- [`ChannelNotConnectedError`](../../protocol/classes/ChannelNotConnectedError.md)
- [`RetransmissionLimitReachedError`](../../protocol/classes/RetransmissionLimitReachedError.md)
- [`UnexpectedMessageError`](../../protocol/classes/UnexpectedMessageError.md)
- [`DuplicateMessageError`](../../protocol/classes/DuplicateMessageError.md)
- [`StatusResponseError`](../../interaction/classes/StatusResponseError.md)
- [`ChannelStatusResponseError`](../../securechannel/classes/ChannelStatusResponseError.md)
- [`StorageError`](../../../storage/export/classes/StorageError.md)
- [`PromiseTimeoutError`](../../../util/export/classes/PromiseTimeoutError.md)
- [`EndOfStreamError`](../../../util/export/classes/EndOfStreamError.md)
- [`NoResponseTimeoutError`](../../../util/export/classes/NoResponseTimeoutError.md)

## Constructors

### new MatterError()

> **new MatterError**(`message`?): [`MatterError`](MatterError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message`? | `string` |

#### Returns

[`MatterError`](MatterError.md)

#### Inherited from

`Error.constructor`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1082
