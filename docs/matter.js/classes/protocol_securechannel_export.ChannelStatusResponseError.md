[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel/export](../modules/protocol_securechannel_export.md) / ChannelStatusResponseError

# Class: ChannelStatusResponseError

[protocol/securechannel/export](../modules/protocol_securechannel_export.md).ChannelStatusResponseError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`MatterError`](common_export.MatterError.md)

  ↳ **`ChannelStatusResponseError`**

## Table of contents

### Constructors

- [constructor](protocol_securechannel_export.ChannelStatusResponseError.md#constructor)

### Properties

- [generalStatusCode](protocol_securechannel_export.ChannelStatusResponseError.md#generalstatuscode)
- [protocolStatusCode](protocol_securechannel_export.ChannelStatusResponseError.md#protocolstatuscode)

## Constructors

### constructor

• **new ChannelStatusResponseError**(`message`, `generalStatusCode`, `protocolStatusCode`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `generalStatusCode` | [`GeneralStatusCode`](../enums/protocol_securechannel_export.GeneralStatusCode.md) |
| `protocolStatusCode` | [`ProtocolStatusCode`](../enums/protocol_securechannel_export.ProtocolStatusCode.md) |

#### Overrides

[MatterError](common_export.MatterError.md).[constructor](common_export.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:21](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L21)

## Properties

### generalStatusCode

• `Readonly` **generalStatusCode**: [`GeneralStatusCode`](../enums/protocol_securechannel_export.GeneralStatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:23](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L23)

___

### protocolStatusCode

• `Readonly` **protocolStatusCode**: [`ProtocolStatusCode`](../enums/protocol_securechannel_export.ProtocolStatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:24](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L24)
