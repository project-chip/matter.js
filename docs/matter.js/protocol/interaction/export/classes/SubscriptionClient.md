[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / SubscriptionClient

# Class: SubscriptionClient

## Implements

- [`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md)\<[`MatterController`](../../../../export/-internal-/classes/MatterController.md)\>

## Constructors

### new SubscriptionClient()

> **new SubscriptionClient**(): [`SubscriptionClient`](SubscriptionClient.md)

#### Returns

[`SubscriptionClient`](SubscriptionClient.md)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L68)

## Properties

### subscriptionListeners

> `private` `readonly` **subscriptionListeners**: `Map`\<`number`, (`dataReport`) => `void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L65)

***

### subscriptionUpdateTimers

> `private` `readonly` **subscriptionUpdateTimers**: `Map`\<`number`, [`Timer`](../../../../time/export/interfaces/Timer.md)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L66)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`close`](../../../export/interfaces/ProtocolHandler.md#close)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:120](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L120)

***

### getId()

> **getId**(): `number`

#### Returns

`number`

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`getId`](../../../export/interfaces/ProtocolHandler.md#getid)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L70)

***

### onNewExchange()

> **onNewExchange**(`exchange`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../export/classes/MessageExchange.md)\<[`MatterController`](../../../../export/-internal-/classes/MatterController.md)\> |

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`ProtocolHandler`](../../../export/interfaces/ProtocolHandler.md).[`onNewExchange`](../../../export/interfaces/ProtocolHandler.md#onnewexchange)

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:91](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L91)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:74](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L74)

***

### registerSubscriptionUpdateTimer()

> **registerSubscriptionUpdateTimer**(`subscriptionId`, `timer`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `subscriptionId` | `number` |
| `timer` | [`Timer`](../../../../time/export/interfaces/Timer.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L82)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L78)

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

[packages/matter.js/src/protocol/interaction/InteractionClient.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionClient.ts#L86)
