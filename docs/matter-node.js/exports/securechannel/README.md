[**@project-chip/matter-node.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../modules.md) / exports/securechannel

# exports/securechannel

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

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:9

## Variables

### SECURE\_CHANNEL\_PROTOCOL\_ID

> `const` **SECURE\_CHANNEL\_PROTOCOL\_ID**: `0` = `0`

#### License

Copyright 2022-2024 Matter.js Authors
SPDX-License-Identifier: Apache-2.0

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelMessages.d.ts:6

***

### TlvSecureChannelStatusMessage

> `const` **TlvSecureChannelStatusMessage**: [`SecureChannelStatusMessageSchema`](classes/SecureChannelStatusMessageSchema.md)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelStatusMessageSchema.d.ts:22
