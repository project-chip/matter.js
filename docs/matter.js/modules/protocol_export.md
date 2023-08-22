[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / protocol/export

# Module: protocol/export

## Table of contents

### Classes

- [ChannelManager](../classes/protocol_export.ChannelManager.md)
- [CommissioningError](../classes/protocol_export.CommissioningError.md)
- [ControllerCommissioner](../classes/protocol_export.ControllerCommissioner.md)
- [ExchangeCounter](../classes/protocol_export.ExchangeCounter.md)
- [ExchangeManager](../classes/protocol_export.ExchangeManager.md)
- [ExchangeProvider](../classes/protocol_export.ExchangeProvider.md)
- [MessageChannel](../classes/protocol_export.MessageChannel.md)
- [MessageCounter](../classes/protocol_export.MessageCounter.md)
- [MessageExchange](../classes/protocol_export.MessageExchange.md)
- [NoChannelError](../classes/protocol_export.NoChannelError.md)
- [RetransmissionLimitReachedError](../classes/protocol_export.RetransmissionLimitReachedError.md)
- [UnexpectedMessageError](../classes/protocol_export.UnexpectedMessageError.md)

### Interfaces

- [ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md)

### Type Aliases

- [CommissioningOptions](protocol_export.md#commissioningoptions)

## Type Aliases

### CommissioningOptions

Ƭ **CommissioningOptions**: `Object`

User specific options for the Commissioning process

#### Type declaration

| Name | Type |
| :------ | :------ |
| `adminVendorId?` | `number` |
| `regulatoryCountryCode` | `string` |
| `regulatoryLocation` | [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md) |
| `threadNetwork?` | { `networkName`: `string` ; `operationalDataset`: `string`  } |
| `threadNetwork.networkName` | `string` |
| `threadNetwork.operationalDataset` | `string` |
| `wifiNetwork?` | { `wifiCredentials`: `string` ; `wifiSsid`: `string`  } |
| `wifiNetwork.wifiCredentials` | `string` |
| `wifiNetwork.wifiSsid` | `string` |

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:39](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/ControllerCommissioner.ts#L39)
