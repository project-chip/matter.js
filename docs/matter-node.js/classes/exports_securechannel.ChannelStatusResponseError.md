[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/securechannel](../modules/exports_securechannel.md) / ChannelStatusResponseError

# Class: ChannelStatusResponseError

[exports/securechannel](../modules/exports_securechannel.md).ChannelStatusResponseError

Error base Class for all errors related to the status response messages.

## Hierarchy

- [`MatterError`](exports_common.MatterError.md)

  ↳ **`ChannelStatusResponseError`**

## Table of contents

### Constructors

- [constructor](exports_securechannel.ChannelStatusResponseError.md#constructor)

### Properties

- [generalStatusCode](exports_securechannel.ChannelStatusResponseError.md#generalstatuscode)
- [protocolStatusCode](exports_securechannel.ChannelStatusResponseError.md#protocolstatuscode)

## Constructors

### constructor

• **new ChannelStatusResponseError**(`message`, `generalStatusCode`, `protocolStatusCode`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `string` |
| `generalStatusCode` | [`GeneralStatusCode`](../enums/exports_securechannel.GeneralStatusCode.md) |
| `protocolStatusCode` | [`ProtocolStatusCode`](../enums/exports_securechannel.ProtocolStatusCode.md) |

#### Overrides

[MatterError](exports_common.MatterError.md).[constructor](exports_common.MatterError.md#constructor)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:15

## Properties

### generalStatusCode

• `Readonly` **generalStatusCode**: [`GeneralStatusCode`](../enums/exports_securechannel.GeneralStatusCode.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:13

___

### protocolStatusCode

• `Readonly` **protocolStatusCode**: [`ProtocolStatusCode`](../enums/exports_securechannel.ProtocolStatusCode.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessenger.d.ts:14
