[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/securechannel](../README.md) / SecureChannelProtocol

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

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:20

## Properties

### caseCommissioner

> `private` `readonly` **caseCommissioner**: `any`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:19

***

### commissioningCancelledCallback

> `private` **commissioningCancelledCallback**: `any`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:17

***

### paseCommissioner

> `private` **paseCommissioner**: `any`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:18

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`close`](StatusReportOnlySecureChannelProtocol.md#close)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:14

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Inherited from

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`getId`](StatusReportOnlySecureChannelProtocol.md#getid)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:11

***

### handleInitialStatusReport()

> **handleInitialStatusReport**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`handleInitialStatusReport`](StatusReportOnlySecureChannelProtocol.md#handleinitialstatusreport)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:13

***

### onNewExchange()

> **onNewExchange**(`exchange`, `message`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<`any`\> |
| `message` | [`Message`](../../codec/interfaces/Message.md) |

#### Returns

`Promise`\<`void`\>

#### Overrides

[`StatusReportOnlySecureChannelProtocol`](StatusReportOnlySecureChannelProtocol.md).[`onNewExchange`](StatusReportOnlySecureChannelProtocol.md#onnewexchange)

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:23

***

### removePaseCommissioner()

> **removePaseCommissioner**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:22

***

### setPaseCommissioner()

> **setPaseCommissioner**(`paseServer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `paseServer` | [`PaseServer`](../../session/classes/PaseServer.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:21

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

packages/matter.js/dist/esm/protocol/securechannel/SecureChannelProtocol.d.ts:24
