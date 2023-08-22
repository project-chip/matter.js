[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel/export](../modules/protocol_securechannel_export.md) / SecureChannelProtocol

# Class: SecureChannelProtocol

[protocol/securechannel/export](../modules/protocol_securechannel_export.md).SecureChannelProtocol

## Implements

- [`ProtocolHandler`](../interfaces/protocol_export.ProtocolHandler.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](protocol_securechannel_export.SecureChannelProtocol.md#constructor)

### Properties

- [caseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#casecommissioner)
- [paseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#pasecommissioner)

### Methods

- [getId](protocol_securechannel_export.SecureChannelProtocol.md#getid)
- [onNewExchange](protocol_securechannel_export.SecureChannelProtocol.md#onnewexchange)
- [updatePaseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#updatepasecommissioner)
- [isStandaloneAck](protocol_securechannel_export.SecureChannelProtocol.md#isstandaloneack)

## Constructors

### constructor

• **new SecureChannelProtocol**(`paseCommissioner`, `caseCommissioner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseCommissioner` | [`PaseServer`](session_export.PaseServer.md) |
| `caseCommissioner` | [`CaseServer`](session_export.CaseServer.md) |

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:17](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L17)

## Properties

### caseCommissioner

• `Private` `Readonly` **caseCommissioner**: [`CaseServer`](session_export.CaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:19](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L19)

___

### paseCommissioner

• `Private` **paseCommissioner**: [`PaseServer`](session_export.PaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:18](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L18)

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:22](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L22)

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[onNewExchange](../interfaces/protocol_export.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L30)

___

### updatePaseCommissioner

▸ **updatePaseCommissioner**(`paseServer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseServer` | [`PaseServer`](session_export.PaseServer.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:26](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L26)

___

### isStandaloneAck

▸ `Static` **isStandaloneAck**(`protocolId`, `messageType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |
| `messageType` | `number` |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:47](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L47)
