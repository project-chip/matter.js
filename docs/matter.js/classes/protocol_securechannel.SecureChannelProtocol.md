[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel](../modules/protocol_securechannel.md) / SecureChannelProtocol

# Class: SecureChannelProtocol

[protocol/securechannel](../modules/protocol_securechannel.md).SecureChannelProtocol

## Implements

- [`ProtocolHandler`](../interfaces/protocol.ProtocolHandler.md)<[`MatterDevice`](index.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](protocol_securechannel.SecureChannelProtocol.md#constructor)

### Properties

- [caseCommissioner](protocol_securechannel.SecureChannelProtocol.md#casecommissioner)
- [paseCommissioner](protocol_securechannel.SecureChannelProtocol.md#pasecommissioner)

### Methods

- [getId](protocol_securechannel.SecureChannelProtocol.md#getid)
- [onNewExchange](protocol_securechannel.SecureChannelProtocol.md#onnewexchange)
- [updatePaseCommissioner](protocol_securechannel.SecureChannelProtocol.md#updatepasecommissioner)
- [isStandaloneAck](protocol_securechannel.SecureChannelProtocol.md#isstandaloneack)

## Constructors

### constructor

• **new SecureChannelProtocol**(`paseCommissioner`, `caseCommissioner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseCommissioner` | [`PaseServer`](session.PaseServer.md) |
| `caseCommissioner` | [`CaseServer`](session.CaseServer.md) |

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:17](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L17)

## Properties

### caseCommissioner

• `Private` `Readonly` **caseCommissioner**: [`CaseServer`](session.CaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:19](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L19)

___

### paseCommissioner

• `Private` **paseCommissioner**: [`PaseServer`](session.PaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:18](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L18)

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[getId](../interfaces/protocol.ProtocolHandler.md#getid)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:22](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L22)

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<[`MatterDevice`](index.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/protocol.ProtocolHandler.md).[onNewExchange](../interfaces/protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:30](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L30)

___

### updatePaseCommissioner

▸ **updatePaseCommissioner**(`paseServer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseServer` | [`PaseServer`](session.PaseServer.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:26](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L26)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:45](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L45)
