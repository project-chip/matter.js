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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:92](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L92)

## Properties

### caseCommissioner

• `Private` `Readonly` **caseCommissioner**: [`CaseServer`](session_export.CaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:90](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L90)

___

### commissioningCancelledCallback

• `Private` **commissioningCancelledCallback**: () => `Promise`\<`void`\>

#### Type declaration

▸ (): `Promise`\<`void`\>

##### Returns

`Promise`\<`void`\>

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:92](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L92)

___

### paseCommissioner

• `Private` **paseCommissioner**: `undefined` \| [`PaseServer`](session_export.PaseServer.md)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:89](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L89)

## Methods

### close

▸ **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[StatusReportOnlySecureChannelProtocol](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md).[close](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#close)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:83](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L83)

___

### getId

▸ **getId**(): `number`

#### Returns

`number`

#### Inherited from

[StatusReportOnlySecureChannelProtocol](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md).[getId](protocol_securechannel_export.StatusReportOnlySecureChannelProtocol.md#getid)

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:28](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L28)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:47](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L47)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:104](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L104)

___

### removePaseCommissioner

▸ **removePaseCommissioner**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:100](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L100)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:96](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L96)

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

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:136](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L136)
