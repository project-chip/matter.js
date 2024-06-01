[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [protocol/interaction/export](../../README.md) / [\<internal\>](../README.md) / InteractionMessenger

# Class: InteractionMessenger\<ContextT\>

## Extended by

- [`InteractionServerMessenger`](../../classes/InteractionServerMessenger.md)
- [`IncomingInteractionClientMessenger`](../../classes/IncomingInteractionClientMessenger.md)

## Type parameters

| Type parameter |
| :------ |
| `ContextT` |

## Constructors

### new InteractionMessenger()

> **new InteractionMessenger**\<`ContextT`\>(`exchange`): [`InteractionMessenger`](InteractionMessenger.md)\<`ContextT`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](../../../../export/classes/MessageExchange.md)\<`ContextT`\> |

#### Returns

[`InteractionMessenger`](InteractionMessenger.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Properties

### exchange

> `protected` **exchange**: [`MessageExchange`](../../../../export/classes/MessageExchange.md)\<`ContextT`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L81)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:111](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L111)

***

### getExchangeChannelName()

> **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:126](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L126)

***

### nextMessage()

> **nextMessage**(`expectedMessageType`?): `Promise`\<[`Message`](../../../../../codec/export/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../../../../codec/export/interfaces/Message.md)\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:99](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L99)

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../../../../export/README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L83)

***

### sendStatus()

> **sendStatus**(`status`): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../../enumerations/StatusCode.md) |

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

***

### throwIfErrorStatusMessage()

> `protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../../../codec/export/interfaces/Message.md) |

#### Returns

`void`

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L115)

***

### waitForSuccess()

> **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:94](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L94)
