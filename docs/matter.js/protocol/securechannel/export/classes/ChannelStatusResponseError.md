[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/securechannel/export](../README.md) / ChannelStatusResponseError

# Class: ChannelStatusResponseError

Error base Class for all errors related to the status response messages.

## Extends

- [`MatterError`](../../../../common/export/classes/MatterError.md)

## Constructors

### new ChannelStatusResponseError()

> **new ChannelStatusResponseError**(`message`, `generalStatusCode`, `protocolStatusCode`): [`ChannelStatusResponseError`](ChannelStatusResponseError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `generalStatusCode` | [`GeneralStatusCode`](../enumerations/GeneralStatusCode.md) |
| `protocolStatusCode` | [`ProtocolStatusCode`](../enumerations/ProtocolStatusCode.md) |

#### Returns

[`ChannelStatusResponseError`](ChannelStatusResponseError.md)

#### Overrides

[`MatterError`](../../../../common/export/classes/MatterError.md).[`constructor`](../../../../common/export/classes/MatterError.md#constructors)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L21)

## Properties

### generalStatusCode

> `readonly` **generalStatusCode**: [`GeneralStatusCode`](../enumerations/GeneralStatusCode.md)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L23)

***

### protocolStatusCode

> `readonly` **protocolStatusCode**: [`ProtocolStatusCode`](../enumerations/ProtocolStatusCode.md)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:24](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L24)
