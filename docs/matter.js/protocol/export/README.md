[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / protocol/export

# protocol/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Enumerations

- [MessageCounterTypes](enumerations/MessageCounterTypes.md)

### Classes

- [ChannelManager](classes/ChannelManager.md)
- [ChannelNotConnectedError](classes/ChannelNotConnectedError.md)
- [CommissioningError](classes/CommissioningError.md)
- [ControllerCommissioner](classes/ControllerCommissioner.md)
- [ControllerDiscovery](classes/ControllerDiscovery.md)
- [DiscoveryError](classes/DiscoveryError.md)
- [DuplicateMessageError](classes/DuplicateMessageError.md)
- [ExchangeCounter](classes/ExchangeCounter.md)
- [ExchangeManager](classes/ExchangeManager.md)
- [ExchangeProvider](classes/ExchangeProvider.md)
- [MessageChannel](classes/MessageChannel.md)
- [MessageCounter](classes/MessageCounter.md)
- [MessageExchange](classes/MessageExchange.md)
- [MessageReceptionState](classes/MessageReceptionState.md)
- [MessageReceptionStateEncryptedWithRollover](classes/MessageReceptionStateEncryptedWithRollover.md)
- [MessageReceptionStateEncryptedWithoutRollover](classes/MessageReceptionStateEncryptedWithoutRollover.md)
- [MessageReceptionStateUnencryptedWithRollover](classes/MessageReceptionStateUnencryptedWithRollover.md)
- [NoChannelError](classes/NoChannelError.md)
- [PersistedMessageCounter](classes/PersistedMessageCounter.md)
- [RetransmissionLimitReachedError](classes/RetransmissionLimitReachedError.md)
- [UnexpectedMessageError](classes/UnexpectedMessageError.md)

### Interfaces

- [ProtocolHandler](interfaces/ProtocolHandler.md)

## Type Aliases

### CommissioningOptions

> **CommissioningOptions**: `object`

User specific options for the Commissioning process

#### Type declaration

##### nodeId?

> `optional` **nodeId**: [`NodeId`](../../datatype/export/README.md#nodeid)

##### regulatoryCountryCode

> **regulatoryCountryCode**: `string`

Country Code where the device is used.

##### regulatoryLocation

> **regulatoryLocation**: [`RegulatoryLocationType`](../../cluster/export/namespaces/GeneralCommissioning/enumerations/RegulatoryLocationType.md)

Regulatory Location (Indoor/Outdoor) where the device is used.

##### threadNetwork?

> `optional` **threadNetwork**: `object`

Thread network credentials to commission the device to.

##### threadNetwork.networkName

> **networkName**: `string`

##### threadNetwork.operationalDataset

> **operationalDataset**: `string`

##### wifiNetwork?

> `optional` **wifiNetwork**: `object`

Wifi network credentials to commission the device to.

##### wifiNetwork.wifiCredentials

> **wifiCredentials**: `string`

##### wifiNetwork.wifiSsid

> **wifiSsid**: `string`

#### Source

[packages/matter.js/src/protocol/ControllerCommissioner.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ControllerCommissioner.ts#L39)

***

### ExchangeSendOptions

> **ExchangeSendOptions**: `object`

#### Type declaration

##### expectAckOnly?

> `optional` **expectAckOnly**: `boolean`

The response to this send should be an ack only and no StatusResponse or such. If a StatusResponse is returned
then this is handled as error.

##### includeAcknowledgeMessageId?

> `optional` **includeAcknowledgeMessageId**: `number`

Use the provided acknowledge MessageId instead checking the latest to send one

##### minimumResponseTimeoutMs?

> `optional` **minimumResponseTimeoutMs**: `number`

Define a minimum Response Timeout. This setting only increases the response timeout! The minimum four
resubmissions are always done regardless of what is specified here. The logic will check if the timeout is
reached after each resubmission, so it is not checked exact at the given timeout.

##### requiresAck?

> `optional` **requiresAck**: `boolean`

Allows to specify if the send message requires to be acknowledged by the receiver or not.

#### Source

[packages/matter.js/src/protocol/MessageExchange.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageExchange.ts#L41)

## Variables

### MAX\_COUNTER\_VALUE\_32BIT

> `const` **MAX\_COUNTER\_VALUE\_32BIT**: `4294967294` = `0xfffffffe`

Maximum 32 bit counter value.

#### Source

[packages/matter.js/src/protocol/MessageCounter.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/MessageCounter.ts#L13)
