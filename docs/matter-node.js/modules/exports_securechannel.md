[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/securechannel

# Module: exports/securechannel

## Table of contents

### Enumerations

- [GeneralStatusCode](../enums/exports_securechannel.GeneralStatusCode.md)
- [MessageType](../enums/exports_securechannel.MessageType.md)
- [ProtocolStatusCode](../enums/exports_securechannel.ProtocolStatusCode.md)

### Classes

- [ChannelStatusResponseError](../classes/exports_securechannel.ChannelStatusResponseError.md)
- [SecureChannelMessenger](../classes/exports_securechannel.SecureChannelMessenger.md)
- [SecureChannelProtocol](../classes/exports_securechannel.SecureChannelProtocol.md)
- [SecureChannelStatusMessageSchema](../classes/exports_securechannel.SecureChannelStatusMessageSchema.md)

### Type Aliases

- [StatusMessage](exports_securechannel.md#statusmessage)

### Variables

- [SECURE\_CHANNEL\_PROTOCOL\_ID](exports_securechannel.md#secure_channel_protocol_id)
- [TlvSecureChannelStatusMessage](exports_securechannel.md#tlvsecurechannelstatusmessage)

## Type Aliases

### StatusMessage

Ƭ **StatusMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generalStatus` | [`GeneralStatusCode`](../enums/exports_securechannel.GeneralStatusCode.md) |
| `protocolId` | `number` |
| `protocolStatus` | [`ProtocolStatusCode`](../enums/exports_securechannel.ProtocolStatusCode.md) |

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:9

## Variables

### SECURE\_CHANNEL\_PROTOCOL\_ID

• `Const` **SECURE\_CHANNEL\_PROTOCOL\_ID**: ``0``

**`License`**

Copyright 2022-2023 Project CHIP Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelMessages.d.ts:6

___

### TlvSecureChannelStatusMessage

• `Const` **TlvSecureChannelStatusMessage**: [`SecureChannelStatusMessageSchema`](../classes/exports_securechannel.SecureChannelStatusMessageSchema.md)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:22
