[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [protocol/securechannel/export](../modules/protocol_securechannel_export.md) / SecureChannelProtocol

# Class: SecureChannelProtocol

[protocol/securechannel/export](../modules/protocol_securechannel_export.md).SecureChannelProtocol

## Hierarchy

- [`StatusReportOnlySecureChannelProtocol`](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md)

  ↳ **`SecureChannelProtocol`**

## Table of contents

### Constructors

- [constructor](protocol_securechannel_export.SecureChannelProtocol.md#constructor)

### Properties

- [caseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#casecommissioner)
- [commissioningCancelledCallback](protocol_securechannel_export.SecureChannelProtocol.md#commissioningcancelledcallback)
- [paseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#pasecommissioner)

### Methods

- [close](protocol_securechannel_export.SecureChannelProtocol.md#close)
- [getId](protocol_securechannel_export.SecureChannelProtocol.md#getid)
- [handleInitialStatusReport](protocol_securechannel_export.SecureChannelProtocol.md#handleinitialstatusreport)
- [onNewExchange](protocol_securechannel_export.SecureChannelProtocol.md#onnewexchange)
- [removePaseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#removepasecommissioner)
- [setPaseCommissioner](protocol_securechannel_export.SecureChannelProtocol.md#setpasecommissioner)
- [isStandaloneAck](protocol_securechannel_export.SecureChannelProtocol.md#isstandaloneack)

## Constructors

### constructor

• **new SecureChannelProtocol**(`commissioningCancelledCallback`): [`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `commissioningCancelledCallback` | () => `Promise`\<`void`\> |

#### Returns

[`SecureChannelProtocol`](protocol_securechannel_export.SecureChannelProtocol.md)

#### Overrides

[StatusReportOnlySecureChannelProtocol](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md).[constructor](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#constructor)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L90)

## Properties

### caseCommissioner

• `Private` `Readonly` **caseCommissioner**: [`CaseServer`](session_export.CaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:88](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L88)

___

### commissioningCancelledCallback

• `Private` **commissioningCancelledCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:90](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L90)

___

### paseCommissioner

• `Private` **paseCommissioner**: `undefined` \| [`PaseServer`](session_export.PaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:87](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L87)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[StatusReportOnlySecureChannelProtocol](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md).[close](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#close)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:81](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L81)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[StatusReportOnlySecureChannelProtocol](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md).[getId](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#getid)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L27)

___

### handleInitialStatusReport

▸ **handleInitialStatusReport**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[StatusReportOnlySecureChannelProtocol](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md).[handleInitialStatusReport](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#handleinitialstatusreport)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L45)

___

### onNewExchange

▸ **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](protocol_export.MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../interfaces/codec_export.Message.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[StatusReportOnlySecureChannelProtocol](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md).[onNewExchange](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#onnewexchange)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L102)

___

### removePaseCommissioner

▸ **removePaseCommissioner**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:98](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L98)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:94](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L94)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L134)
