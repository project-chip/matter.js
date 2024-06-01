[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / SubscriptionClient

# Class: SubscriptionClient

## Implements

- [`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\>

## Constructors

### new SubscriptionClient()

> **new SubscriptionClient**(): [`SubscriptionClient`](SubscriptionClient.md)

#### Returns

[`SubscriptionClient`](SubscriptionClient.md)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:36

## Properties

### subscriptionListeners

> `private` `readonly` **subscriptionListeners**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:34

***

### subscriptionUpdateTimers

> `private` `readonly` **subscriptionUpdateTimers**: `any`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:35

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`close`](../../protocol/interfaces/ProtocolHandler.md#close)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:43

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`getId`](../../protocol/interfaces/ProtocolHandler.md#getid)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:37

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../protocol/classes/MessageExchange.md)\<[`MatterController`](../../../export/-internal-/classes/MatterController.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../protocol/interfaces/ProtocolHandler.md).[`onNewExchange`](../../protocol/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:42

***

### registerSubscriptionListener()

> **registerSubscriptionListener**(`subscriptionId`, `listener`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `listener` | (`dataReport`) => `void` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:38

***

### registerSubscriptionUpdateTimer()

> **registerSubscriptionUpdateTimer**(`subscriptionId`, `timer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `timer` | [`Timer`](../../../time/export/interfaces/Timer.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:40

***

### removeSubscriptionListener()

> **removeSubscriptionListener**(`subscriptionId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:39

***

### removeSubscriptionUpdateTimer()

> **removeSubscriptionUpdateTimer**(`subscriptionId`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionClient.d.ts:41
