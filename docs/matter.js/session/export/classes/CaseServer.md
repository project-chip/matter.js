[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / CaseServer

# Class: CaseServer

## Implements

- [`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\>

## Constructors

### new CaseServer()

> **new CaseServer**(): [`CaseServer`](CaseServer.md)

#### Returns

[`CaseServer`](CaseServer.md)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md).[`close`](../../../protocol/export/interfaces/ProtocolHandler.md#close)

#### Source

[packages/matter.js/src/session/case/CaseServer.ts:256](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseServer.ts#L256)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md).[`getId`](../../../protocol/export/interfaces/ProtocolHandler.md#getid)

#### Source

[packages/matter.js/src/session/case/CaseServer.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseServer.ts#L58)

***

### handleSigma1()

> `private` **handleSigma1**(`server`, `messenger`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `server` | [`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md) |
| `messenger` | [`CaseServerMessenger`](CaseServerMessenger.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/session/case/CaseServer.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseServer.ts#L62)

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../protocol/export/classes/MessageExchange.md)\<[`MatterDevice`](../../../behavior/cluster/export/-internal-/classes/MatterDevice.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../protocol/export/interfaces/ProtocolHandler.md).[`onNewExchange`](../../../protocol/export/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

[packages/matter.js/src/session/case/CaseServer.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/case/CaseServer.ts#L38)
