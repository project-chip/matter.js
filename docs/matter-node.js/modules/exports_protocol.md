[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/protocol

# Module: exports/protocol

## Table of contents

### Classes

- [ChannelManager](../classes/exports_protocol.ChannelManager.md)
- [CommissioningError](../classes/exports_protocol.CommissioningError.md)
- [ControllerCommissioner](../classes/exports_protocol.ControllerCommissioner.md)
- [ExchangeCounter](../classes/exports_protocol.ExchangeCounter.md)
- [ExchangeManager](../classes/exports_protocol.ExchangeManager.md)
- [ExchangeProvider](../classes/exports_protocol.ExchangeProvider.md)
- [MessageChannel](../classes/exports_protocol.MessageChannel.md)
- [MessageCounter](../classes/exports_protocol.MessageCounter.md)
- [MessageExchange](../classes/exports_protocol.MessageExchange.md)
- [NoChannelError](../classes/exports_protocol.NoChannelError.md)
- [RetransmissionLimitReachedError](../classes/exports_protocol.RetransmissionLimitReachedError.md)
- [UnexpectedMessageError](../classes/exports_protocol.UnexpectedMessageError.md)

### Interfaces

- [ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md)

### Type Aliases

- [CommissioningOptions](exports_protocol.md#commissioningoptions)

## Type Aliases

### CommissioningOptions

Ƭ **CommissioningOptions**: `Object`

User specific options for the Commissioning process

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adminVendorId?` | `number` |
| `regulatoryCountryCode` | `string` |
| `regulatoryLocation` | [`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md) |
| `threadNetwork?` | { `networkName`: `string` ; `operationalDataset`: `string`  } |
| `threadNetwork.networkName` | `string` |
| `threadNetwork.operationalDataset` | `string` |
| `wifiNetwork?` | { `wifiCredentials`: `string` ; `wifiSsid`: `string`  } |
| `wifiNetwork.wifiCredentials` | `string` |
| `wifiNetwork.wifiSsid` | `string` |

#### Defined in

packages/matter.js/dist/cjs/protocol/ControllerCommissioner.d.ts:15
