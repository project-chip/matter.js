[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel](../modules/protocol_securechannel.md) / ChannelStatusResponseError

# Class: ChannelStatusResponseError

[protocol/securechannel](../modules/protocol_securechannel.md).ChannelStatusResponseError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`MatterError`](common.MatterError.md)

  ↳ **`ChannelStatusResponseError`**

## Table of contents

### Constructors

- [constructor](protocol_securechannel.ChannelStatusResponseError.md#constructor)

### Properties

- [generalStatusCode](protocol_securechannel.ChannelStatusResponseError.md#generalstatuscode)
- [protocolStatusCode](protocol_securechannel.ChannelStatusResponseError.md#protocolstatuscode)

## Constructors

### constructor

• **new ChannelStatusResponseError**(`message`, `generalStatusCode`, `protocolStatusCode`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `generalStatusCode` | [`GeneralStatusCode`](../enums/protocol_securechannel.GeneralStatusCode.md) |
| `protocolStatusCode` | [`ProtocolStatusCode`](../enums/protocol_securechannel.ProtocolStatusCode.md) |

#### Overrides

[MatterError](common.MatterError.md).[constructor](common.MatterError.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L16)

## Properties

### generalStatusCode

• `Readonly` **generalStatusCode**: [`GeneralStatusCode`](../enums/protocol_securechannel.GeneralStatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L18)

___

### protocolStatusCode

• `Readonly` **protocolStatusCode**: [`ProtocolStatusCode`](../enums/protocol_securechannel.ProtocolStatusCode.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelMessenger.ts#L19)
