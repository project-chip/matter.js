[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/securechannel/export](../README.md) / SecureChannelProtocol

# Class: SecureChannelProtocol

## Extends

- [`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md)

## Constructors

### new SecureChannelProtocol()

> **new SecureChannelProtocol**(`commissioningCancelledCallback`): [`SecureChannelProtocol`](SecureChannelProtocol.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `commissioningCancelledCallback` | () => `Promise`\<`void`\> |

#### Returns

[`SecureChannelProtocol`](SecureChannelProtocol.md)

#### Overrides

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`constructor`](StatusReportOnlySecureChannelProtocol.md#constructors)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L90)

## Properties

### caseCommissioner

> `private` `readonly` **caseCommissioner**: [`CaseServer`](../../../../session/export/classes/CaseServer.md)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:88](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L88)

***

### commissioningCancelledCallback()

> `private` **commissioningCancelledCallback**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L90)

***

### paseCommissioner

> `private` **paseCommissioner**: `undefined` \| [`PaseServer`](../../../../session/export/classes/PaseServer.md)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L87)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`close`](StatusReportOnlySecureChannelProtocol.md#close)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L81)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Inherited from

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`getId`](StatusReportOnlySecureChannelProtocol.md#getid)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L27)

***

### handleInitialStatusReport()

> **handleInitialStatusReport**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`handleInitialStatusReport`](StatusReportOnlySecureChannelProtocol.md#handleinitialstatusreport)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L45)

***

### onNewExchange()

> **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../../../codec/export/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`onNewExchange`](StatusReportOnlySecureChannelProtocol.md#onnewexchange)

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L102)

***

### removePaseCommissioner()

> **removePaseCommissioner**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:98](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L98)

***

### setPaseCommissioner()

> **setPaseCommissioner**(`paseServer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `paseServer` | [`PaseServer`](../../../../session/export/classes/PaseServer.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L94)

***

### isStandaloneAck()

> `static` **isStandaloneAck**(`protocolId`, `messageType`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocolId` | `number` |
| `messageType` | `number` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/securechannel/SecureChannelProtocol.ts#L134)
