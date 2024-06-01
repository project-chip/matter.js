[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/securechannel](../README.md) / ChannelStatusResponseError

# Class: ChannelStatusResponseError

Error base Class for all errors related to the status response messages.

## Extends

- [`MatterError`](../../common/classes/MatterError.md)

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

[`MatterError`](../../common/classes/MatterError.md).[`constructor`](../../common/classes/MatterError.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:15

## Properties

### generalStatusCode

> `readonly` **generalStatusCode**: [`GeneralStatusCode`](../enumerations/GeneralStatusCode.md)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:13

***

### protocolStatusCode

> `readonly` **protocolStatusCode**: [`ProtocolStatusCode`](../enumerations/ProtocolStatusCode.md)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessenger.d.ts:14
