[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / MatterError

# Class: MatterError

Error base class for all errors thrown by this library.

## Extends

- `Error`

## Extended by

- [`BleError`](../../../ble/export/classes/BleError.md)
- [`BtpMatterError`](../../../ble/export/classes/BtpMatterError.md)
- [`CertificateError`](../../../certificate/export/classes/CertificateError.md)
- [`AttributeError`](../../../cluster/export/classes/AttributeError.md)
- [`EventError`](../../../cluster/export/classes/EventError.md)
- [`IllegalClusterError`](../../../cluster/export/classes/IllegalClusterError.md)
- [`FabricScopeError`](../../../cluster/export/classes/FabricScopeError.md)
- [`NoProviderError`](NoProviderError.md)
- [`InternalError`](InternalError.md)
- [`MatterFlowError`](MatterFlowError.md)
- [`UnexpectedDataError`](UnexpectedDataError.md)
- [`ImplementationError`](ImplementationError.md)
- [`CryptoError`](../../../crypto/export/classes/CryptoError.md)
- [`PublicKeyError`](../../../fabric/export/classes/PublicKeyError.md)
- [`FabricNotFoundError`](../../../fabric/export/classes/FabricNotFoundError.md)
- [`FabricTableFullError`](../../../fabric/export/classes/FabricTableFullError.md)
- [`NetworkError`](../../../net/export/classes/NetworkError.md)
- [`NoChannelError`](../../../protocol/export/classes/NoChannelError.md)
- [`CommissioningError`](../../../protocol/export/classes/CommissioningError.md)
- [`DiscoveryError`](../../../protocol/export/classes/DiscoveryError.md)
- [`ChannelNotConnectedError`](../../../protocol/export/classes/ChannelNotConnectedError.md)
- [`RetransmissionLimitReachedError`](../../../protocol/export/classes/RetransmissionLimitReachedError.md)
- [`UnexpectedMessageError`](../../../protocol/export/classes/UnexpectedMessageError.md)
- [`DuplicateMessageError`](../../../protocol/export/classes/DuplicateMessageError.md)
- [`StatusResponseError`](../../../protocol/interaction/export/classes/StatusResponseError.md)
- [`ChannelStatusResponseError`](../../../protocol/securechannel/export/classes/ChannelStatusResponseError.md)
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

### new MatterError()

> **new MatterError**(`message`?, `options`?): [`MatterError`](MatterError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message`? | `string` |
| `options`? | `ErrorOptions` |

#### Returns

[`MatterError`](MatterError.md)

#### Inherited from

`Error.constructor`

#### Source

node\_modules/typescript/lib/lib.es5.d.ts:1082
