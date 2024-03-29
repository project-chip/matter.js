[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/protocol

# Module: exports/protocol

## Table of contents

### Modules

- [\<internal\>](exports_protocol._internal_.md)

### Enumerations

- [MessageCounterTypes](../enums/exports_protocol.MessageCounterTypes.md)

### Classes

- [ChannelManager](../classes/exports_protocol.ChannelManager.md)
- [ChannelNotConnectedError](../classes/exports_protocol.ChannelNotConnectedError.md)
- [CommissioningError](../classes/exports_protocol.CommissioningError.md)
- [ControllerCommissioner](../classes/exports_protocol.ControllerCommissioner.md)
- [ControllerDiscovery](../classes/exports_protocol.ControllerDiscovery.md)
- [DiscoveryError](../classes/exports_protocol.DiscoveryError.md)
- [DuplicateMessageError](../classes/exports_protocol.DuplicateMessageError.md)
- [ExchangeCounter](../classes/exports_protocol.ExchangeCounter.md)
- [ExchangeManager](../classes/exports_protocol.ExchangeManager.md)
- [ExchangeProvider](../classes/exports_protocol.ExchangeProvider.md)
- [MessageChannel](../classes/exports_protocol.MessageChannel.md)
- [MessageCounter](../classes/exports_protocol.MessageCounter.md)
- [MessageExchange](../classes/exports_protocol.MessageExchange.md)
- [MessageReceptionState](../classes/exports_protocol.MessageReceptionState.md)
- [MessageReceptionStateEncryptedWithRollover](../classes/exports_protocol.MessageReceptionStateEncryptedWithRollover.md)
- [MessageReceptionStateEncryptedWithoutRollover](../classes/exports_protocol.MessageReceptionStateEncryptedWithoutRollover.md)
- [MessageReceptionStateUnencryptedWithRollover](../classes/exports_protocol.MessageReceptionStateUnencryptedWithRollover.md)
- [NoChannelError](../classes/exports_protocol.NoChannelError.md)
- [PersistedMessageCounter](../classes/exports_protocol.PersistedMessageCounter.md)
- [RetransmissionLimitReachedError](../classes/exports_protocol.RetransmissionLimitReachedError.md)
- [UnexpectedMessageError](../classes/exports_protocol.UnexpectedMessageError.md)

### Interfaces

- [ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md)

### Type Aliases

- [CommissioningOptions](exports_protocol.md#commissioningoptions)
- [ExchangeSendOptions](exports_protocol.md#exchangesendoptions)

### Variables

- [MAX\_COUNTER\_VALUE\_32BIT](exports_protocol.md#max_counter_value_32bit)

## Type Aliases

### CommissioningOptions

Ƭ **CommissioningOptions**: `Object`

User specific options for the Commissioning process

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `nodeId?` | [`NodeId`](exports_datatype.md#nodeid) | - |
| `regulatoryCountryCode` | `string` | Country Code where the device is used. |
| `regulatoryLocation` | [`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md) | Regulatory Location (Indoor/Outdoor) where the device is used. |
| `threadNetwork?` | \{ `networkName`: `string` ; `operationalDataset`: `string`  } | Thread network credentials to commission the device to. |
| `threadNetwork.networkName` | `string` | - |
| `threadNetwork.operationalDataset` | `string` | - |
| `wifiNetwork?` | \{ `wifiCredentials`: `string` ; `wifiSsid`: `string`  } | Wifi network credentials to commission the device to. |
| `wifiNetwork.wifiCredentials` | `string` | - |
| `wifiNetwork.wifiSsid` | `string` | - |

#### Defined in

packages/matter.js/dist/esm/protocol/ControllerCommissioner.d.ts:16

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

packages/matter.js/dist/esm/protocol/MessageExchange.d.ts:18

## Variables

### MAX\_COUNTER\_VALUE\_32BIT

• `Const` **MAX\_COUNTER\_VALUE\_32BIT**: ``4294967294``

Maximum 32 bit counter value.

#### Defined in

packages/matter.js/dist/esm/protocol/MessageCounter.d.ts:9
