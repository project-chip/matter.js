[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/protocol](../README.md) / ExchangeProvider

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:60

## Properties

### channel

> `private` **channel**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:58

***

### exchangeManager

> `private` `readonly` **exchangeManager**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:57

***

### reconnectChannelFunc?

> `private` `optional` `readonly` **reconnectChannelFunc**: `any`

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:59

## Accessors

### session

> `get` **session**(): [`Session`](../../session/classes/Session.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Returns

[`Session`](../../session/classes/Session.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:66

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:63

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:62

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

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:61

***

### initiateExchange()

> **initiateExchange**(): [`MessageExchange`](MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Returns

[`MessageExchange`](MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:64

***

### reconnectChannel()

> **reconnectChannel**(): `Promise`\<`boolean`\>

#### Returns

`Promise`\<`boolean`\>

#### Source

packages/matter.js/dist/esm/protocol/ExchangeManager.d.ts:65
