[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / protocol/export

# Module: protocol/export

## Table of contents

### Modules

- [\<internal\>](protocol_export._internal_.md)

### Enumerations

- [MessageCounterTypes](../enums/protocol_export.MessageCounterTypes.md)

### Classes

- [ChannelManager](../classes/protocol_export.ChannelManager.md)
- [ChannelNotConnectedError](../classes/protocol_export.ChannelNotConnectedError.md)
- [CommissioningError](../classes/protocol_export.CommissioningError.md)
- [ControllerCommissioner](../classes/protocol_export.ControllerCommissioner.md)
- [ControllerDiscovery](../classes/protocol_export.ControllerDiscovery.md)
- [DiscoveryError](../classes/protocol_export.DiscoveryError.md)
- [DuplicateMessageError](../classes/protocol_export.DuplicateMessageError.md)
- [ExchangeCounter](../classes/protocol_export.ExchangeCounter.md)
- [ExchangeManager](../classes/protocol_export.ExchangeManager.md)
- [ExchangeProvider](../classes/protocol_export.ExchangeProvider.md)
- [MessageChannel](../classes/protocol_export.MessageChannel.md)
- [MessageCounter](../classes/protocol_export.MessageCounter.md)
- [MessageExchange](../classes/protocol_export.MessageExchange.md)
- [MessageReceptionState](../classes/protocol_export.MessageReceptionState.md)
- [MessageReceptionStateEncryptedWithRollover](../classes/protocol_export.MessageReceptionStateEncryptedWithRollover.md)
- [MessageReceptionStateEncryptedWithoutRollover](../classes/protocol_export.MessageReceptionStateEncryptedWithoutRollover.md)
- [MessageReceptionStateUnencryptedWithRollover](../classes/protocol_export.MessageReceptionStateUnencryptedWithRollover.md)
- [NoChannelError](../classes/protocol_export.NoChannelError.md)
- [PersistedMessageCounter](../classes/protocol_export.PersistedMessageCounter.md)
- [RetransmissionLimitReachedError](../classes/protocol_export.RetransmissionLimitReachedError.md)
- [UnexpectedMessageError](../classes/protocol_export.UnexpectedMessageError.md)

### Interfaces

- [ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md)

### Type Aliases

- [CommissioningOptions](protocol_export.md#commissioningoptions)
- [ExchangeSendOptions](protocol_export.md#exchangesendoptions)

### Variables

- [MAX\_COUNTER\_VALUE\_32BIT](protocol_export.md#max_counter_value_32bit)

## Type Aliases

### CommissioningOptions

Ƭ **CommissioningOptions**: `Object`

User specific options for the Commissioning process

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId?` | [`NodeId`](datatype_export.md#nodeid) | - |
| `regulatoryCountryCode` | `string` | Country Code where the device is used. |
| `regulatoryLocation` | [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md) | Regulatory Location (Indoor/Outdoor) where the device is used. |
| `threadNetwork?` | \{ `networkName`: `string` ; `operationalDataset`: `string`  } | Thread network credentials to commission the device to. |
| `threadNetwork.networkName` | `string` | - |
| `threadNetwork.operationalDataset` | `string` | - |
| `wifiNetwork?` | \{ `wifiCredentials`: `string` ; `wifiSsid`: `string`  } | Wifi network credentials to commission the device to. |
| `wifiNetwork.wifiCredentials` | `string` | - |
| `wifiNetwork.wifiSsid` | `string` | - |

#### Defined in

[packages/matter.js/src/protocol/ControllerCommissioner.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/ControllerCommissioner.ts#L39)

___

### ExchangeSendOptions

Ƭ **ExchangeSendOptions**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `expectAckOnly?` | `boolean` | The response to this send should be an ack only and no StatusResponse or such. If a StatusResponse is returned then this is handled as error. |
| `includeAcknowledgeMessageId?` | `number` | Use the provided acknowledge MessageId instead checking the latest to send one |
| `minimumResponseTimeoutMs?` | `number` | Define a minimum Response Timeout. This setting only increases the response timeout! The minimum four resubmissions are always done regardless of what is specified here. The logic will check if the timeout is reached after each resubmission, so it is not checked exact at the given timeout. |
| `requiresAck?` | `boolean` | Allows to specify if the send message requires to be acknowledged by the receiver or not. |

#### Defined in

[packages/matter.js/src/protocol/MessageExchange.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageExchange.ts#L41)

## Variables

### MAX\_COUNTER\_VALUE\_32BIT

• `Const` **MAX\_COUNTER\_VALUE\_32BIT**: ``4294967294``

Maximum 32 bit counter value.

#### Defined in

[packages/matter.js/src/protocol/MessageCounter.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/MessageCounter.ts#L13)
