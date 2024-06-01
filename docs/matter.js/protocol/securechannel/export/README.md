[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / protocol/securechannel/export

# protocol/securechannel/export

## Index

### Enumerations

- [GeneralStatusCode](enumerations/GeneralStatusCode.md)
- [MessageType](enumerations/MessageType.md)
- [ProtocolStatusCode](enumerations/ProtocolStatusCode.md)

### Classes

- [ChannelStatusResponseError](classes/ChannelStatusResponseError.md)
- [SecureChannelMessenger](classes/SecureChannelMessenger.md)
- [SecureChannelProtocol](classes/SecureChannelProtocol.md)
- [SecureChannelStatusMessageSchema](classes/SecureChannelStatusMessageSchema.md)
- [StatusReportOnlySecureChannelProtocol](classes/StatusReportOnlySecureChannelProtocol.md)

## Type Aliases

### StatusMessage

> **StatusMessage**: `object`

#### Type declaration

##### generalStatus

> **generalStatus**: [`GeneralStatusCode`](enumerations/GeneralStatusCode.md)

##### protocolId

> **protocolId**: `number`

##### protocolStatus

> **protocolStatus**: [`ProtocolStatusCode`](enumerations/ProtocolStatusCode.md)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:13](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L13)

## Variables

### SECURE\_CHANNEL\_PROTOCOL\_ID

> `const` **SECURE\_CHANNEL\_PROTOCOL\_ID**: `0` = `0x00000000`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts:7](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelMessages.ts#L7)

***

### TlvSecureChannelStatusMessage

> `const` **TlvSecureChannelStatusMessage**: [`SecureChannelStatusMessageSchema`](classes/SecureChannelStatusMessageSchema.md)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelStatusMessageSchema.ts#L37)
