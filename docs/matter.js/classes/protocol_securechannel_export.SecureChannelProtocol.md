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
- [commissioningCancelledCallback](protocol_securechannel_export.SecureChannelProtocol.md#commissioningcancelledcallback)
- [paseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#pasecommissioner)

### Methods

- [getId](protocol_securechannel_export.SecureChannelProtocol.md#getid)
- [handleInitialStatusReport](protocol_securechannel_export.SecureChannelProtocol.md#handleinitialstatusreport)
- [onNewExchange](protocol_securechannel_export.SecureChannelProtocol.md#onnewexchange)
- [removePaseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#removepasecommissioner)
- [setPaseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#setpasecommissioner)
- [isStandaloneAck](protocol_securechannel_export.SecureChannelProtocol.md#isstandaloneack)

## Constructors

### constructor

• **new SecureChannelProtocol**(`commissioningCancelledCallback`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningCancelledCallback` | () => `Promise`<`void`\> |

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:31

## Properties

### caseCommissioner

• `Private` `Readonly` **caseCommissioner**: [`CaseServer`](session_export.CaseServer.md)

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:29

___

### commissioningCancelledCallback

• `Private` **commissioningCancelledCallback**: () => `Promise`<`void`\>

#### Type declaration

▸ (): `Promise`<`void`\>

##### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:31

___

### paseCommissioner

• `Private` **paseCommissioner**: `undefined` \| [`PaseServer`](session_export.PaseServer.md)

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:28

## Methods

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Implementation of

[ProtocolHandler](../interfaces/protocol_export.ProtocolHandler.md).[getId](../interfaces/protocol_export.ProtocolHandler.md#getid)

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:33

___

### handleInitialStatusReport

▸ **handleInitialStatusReport**(`exchange`, `message`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)<[`MatterDevice`](export._internal_.MatterDevice.md)\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:82

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

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:45

___

### removePaseCommissioner

▸ **removePaseCommissioner**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:41

___

### setPaseCommissioner

▸ **setPaseCommissioner**(`paseServer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseServer` | [`PaseServer`](session_export.PaseServer.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:37

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

packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:118
