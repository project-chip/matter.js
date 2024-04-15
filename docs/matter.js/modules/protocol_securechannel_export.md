[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / protocol/securechannel/export

# Module: protocol/securechannel/export

## Table of contents

### Enumerations

- [GeneralStatusCode](../enums/protocol_securechannel_export.GeneralStatusCode.md)
- [MessageType](../enums/protocol_securechannel_export.MessageType.md)
- [ProtocolStatusCode](../enums/protocol_securechannel_export.ProtocolStatusCode.md)

### Classes

- [ChannelStatusResponseError](../classes/protocol_securechannel_export.ChannelStatusResponseError.md)
- [SecureChannelMessenger](../classes/protocol_securechannel_export.SecureChannelMessenger.md)
- [SecureChannelProtocol](../classes/protocol_securechannel_export.SecureChannelProtocol.md)
- [SecureChannelStatusMessageSchema](../classes/protocol_securechannel_export.SecureChannelStatusMessageSchema.md)
- [StatusReportOnlySecureChannelProtocol](../classes/protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md)

### Type Aliases

- [StatusMessage](protocol_securechannel_export.md#statusmessage)

### Variables

- [SECURE\_CHANNEL\_PROTOCOL\_ID](protocol_securechannel_export.md#secure_channel_protocol_id)
- [TlvSecureChannelStatusMessage](protocol_securechannel_export.md#tlvsecurechannelstatusmessage)

## Type Aliases

### StatusMessage

Ƭ **StatusMessage**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `generalStatus` | [`GeneralStatusCode`](../enums/protocol_securechannel_export.GeneralStatusCode.md) |
| `protocolId` | `number` |
| `protocolStatus` | [`ProtocolStatusCode`](../enums/protocol_securechannel_export.ProtocolStatusCode.md) |

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L13)

## Variables

### SECURE\_CHANNEL\_PROTOCOL\_ID

• `Const` **SECURE\_CHANNEL\_PROTOCOL\_ID**: ``0``

**`License`**

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:7](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L7)

___

### TlvSecureChannelStatusMessage

• `Const` **TlvSecureChannelStatusMessage**: [`SecureChannelStatusMessageSchema`](../classes/protocol_securechannel_export.SecureChannelStatusMessageSchema.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L37)
