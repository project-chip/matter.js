[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/securechannel](../modules/exports_securechannel.md) / SecureChannelProtocol

# Class: SecureChannelProtocol

[exports/securechannel](../modules/exports_securechannel.md).SecureChannelProtocol

## Hierarchy

- [`StatusReportOnlySecureChannelProtocol`](exports_securechannel.StatusReportOnlySecureChannelProtocol.md)

  ↳ **`SecureChannelProtocol`**

## Table of contents

### Constructors

- [constructor](exports_securechannel.SecureChannelProtocol.md#constructor)

### Properties

- [caseCommissioner](exports_securechannel.SecureChannelProtocol.md#casecommissioner)
- [commissioningCancelledCallback](exports_securechannel.SecureChannelProtocol.md#commissioningcancelledcallback)
- [paseCommissioner](exports_securechannel.SecureChannelProtocol.md#pasecommissioner)

### Methods

- [close](exports_securechannel.SecureChannelProtocol.md#close)
- [getId](exports_securechannel.SecureChannelProtocol.md#getid)
- [handleInitialStatusReport](exports_securechannel.SecureChannelProtocol.md#handleinitialstatusreport)
- [onNewExchange](exports_securechannel.SecureChannelProtocol.md#onnewexchange)
- [removePaseCommissioner](exports_securechannel.SecureChannelProtocol.md#removepasecommissioner)
- [setPaseCommissioner](exports_securechannel.SecureChannelProtocol.md#setpasecommissioner)
- [isStandaloneAck](exports_securechannel.SecureChannelProtocol.md#isstandaloneack)

## Constructors

### constructor

• **new SecureChannelProtocol**(`commissioningCancelledCallback`): [`SecureChannelProtocol`](exports_securechannel.SecureChannelProtocol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningCancelledCallback` | () => `Promise`\<`void`\> |

#### Returns

[`SecureChannelProtocol`](exports_securechannel.SecureChannelProtocol.md)

#### Overrides

[StatusReportOnlySecureChannelProtocol](exports_securechannel.StatusReportOnlySecureChannelProtocol.md).[constructor](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#constructor)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:20

## Properties

### caseCommissioner

• `Private` `Readonly` **caseCommissioner**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:19

___

### commissioningCancelledCallback

• `Private` **commissioningCancelledCallback**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:17

___

### paseCommissioner

• `Private` **paseCommissioner**: `any`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:18

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[StatusReportOnlySecureChannelProtocol](exports_securechannel.StatusReportOnlySecureChannelProtocol.md).[close](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#close)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:14

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[StatusReportOnlySecureChannelProtocol](exports_securechannel.StatusReportOnlySecureChannelProtocol.md).[getId](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#getid)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:11

___

### handleInitialStatusReport

▸ **handleInitialStatusReport**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[StatusReportOnlySecureChannelProtocol](exports_securechannel.StatusReportOnlySecureChannelProtocol.md).[handleInitialStatusReport](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#handleinitialstatusreport)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:13

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[StatusReportOnlySecureChannelProtocol](exports_securechannel.StatusReportOnlySecureChannelProtocol.md).[onNewExchange](exports_securechannel.StatusReportOnlySecureChannelProtocol.md#onnewexchange)

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:23

___

### removePaseCommissioner

▸ **removePaseCommissioner**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:22

___

### setPaseCommissioner

▸ **setPaseCommissioner**(`paseServer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `paseServer` | [`PaseServer`](exports_session.PaseServer.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:21

___

### isStandaloneAck

▸ **isStandaloneAck**(`protocolId`, `messageType`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `protocolId` | `number` |
| `messageType` | `number` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:24
