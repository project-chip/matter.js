[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/securechannel](../modules/exports_securechannel.md) / SecureChannelProtocol

# Class: SecureChannelProtocol

[exports/securechannel](../modules/exports_securechannel.md).SecureChannelProtocol

## Implements

- [`ProtocolHandler`](../interfaces/exports_protocol.ProtocolHandler.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\>

## Table of contents

### Constructors

- [constructor](exports_securechannel.SecureChannelProtocol.md#constructor)

### Properties

- [caseCommissioner](exports_securechannel.SecureChannelProtocol.md#casecommissioner)
- [paseCommissioner](exports_securechannel.SecureChannelProtocol.md#pasecommissioner)

### Methods

- [getId](exports_securechannel.SecureChannelProtocol.md#getid)
- [onNewExchange](exports_securechannel.SecureChannelProtocol.md#onnewexchange)
- [updatePaseCommissioner](exports_securechannel.SecureChannelProtocol.md#updatepasecommissioner)
- [isStandaloneAck](exports_securechannel.SecureChannelProtocol.md#isstandaloneack)

## Constructors

### constructor

• **new SecureChannelProtocol**(`paseCommissioner`, `caseCommissioner`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseCommissioner` | [`PaseServer`](exports_session.PaseServer.md) |
| `caseCommissioner` | [`CaseServer`](exports_session.CaseServer.md) |

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelProtocol.d.ts:15

## Properties

### caseCommissioner

• `Private` `Readonly` **caseCommissioner**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelProtocol.d.ts:14

___

### paseCommissioner

• `Private` **paseCommissioner**: `any`

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelProtocol.d.ts:13

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[getId](../interfaces/exports_protocol.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelProtocol.d.ts:16

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`<`void`\>

#### Implementation of

[ProtocolHandler](../interfaces/exports_protocol.ProtocolHandler.md).[onNewExchange](../interfaces/exports_protocol.ProtocolHandler.md#onnewexchange)

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelProtocol.d.ts:18

___

### updatePaseCommissioner

▸ **updatePaseCommissioner**(`paseServer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseServer` | [`PaseServer`](exports_session.PaseServer.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelProtocol.d.ts:17

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

packages/matter.js/dist/cjs/protocol/securechannel/SecureChannelProtocol.d.ts:19
