[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [protocol/export](../README.md) / ExchangeProvider

# Class: ExchangeProvider

## Constructors

### new ExchangeProvider()

> **new ExchangeProvider**(`exchangeManager`, `channel`, `reconnectChannelFunc`?): [`ExchangeProvider`](ExchangeProvider.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchangeManager` | [`ExchangeManager`](ExchangeManager.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |
| `channel` | [`MessageChannel`](MessageChannel.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |
| `reconnectChannelFunc`? | () => `Promise`\<[`MessageChannel`](MessageChannel.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\> |

#### Returns

[`ExchangeProvider`](ExchangeProvider.md)

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:338](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L338)

## Properties

### channel

> `private` **channel**: [`MessageChannel`](MessageChannel.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:340](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L340)

***

### exchangeManager

> `private` `readonly` **exchangeManager**: [`ExchangeManager`](ExchangeManager.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:339](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L339)

***

### reconnectChannelFunc()?

> `private` `optional` `readonly` **reconnectChannelFunc**: () => `Promise`\<[`MessageChannel`](MessageChannel.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Returns

`Promise`\<[`MessageChannel`](MessageChannel.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:341](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L341)

## Accessors

### session

> `get` **session**(): [`Session`](../../../session/export/classes/Session.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Returns

[`Session`](../../../session/export/classes/Session.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:366](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L366)

## Methods

### addProtocolHandler()

> **addProtocolHandler**(`handler`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `handler` | [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:352](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L352)

***

### getProtocolHandler()

> **getProtocolHandler**(`protocolId`): `undefined` \| [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`undefined` \| [`ProtocolHandler`](../interfaces/ProtocolHandler.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:348](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L348)

***

### hasProtocolHandler()

> **hasProtocolHandler**(`protocolId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `protocolId` | `number` |

#### Returns

`boolean`

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:344](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L344)

***

### initiateExchange()

> **initiateExchange**(): [`MessageExchange`](MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Returns

[`MessageExchange`](MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:356](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L356)

***

### reconnectChannel()

> **reconnectChannel**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Source

[packages/matter.js/src/protocol/ExchangeManager.ts:360](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/ExchangeManager.ts#L360)
