[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/interaction](../../README.md) / [\<internal\>](../README.md) / InteractionMessenger

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
| `exchange` | [`MessageExchange`](../../../protocol/classes/MessageExchange.md)\<`ContextT`\> |

#### Returns

[`InteractionMessenger`](InteractionMessenger.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:39

## Properties

### exchange

> `protected` **exchange**: [`MessageExchange`](../../../protocol/classes/MessageExchange.md)\<`ContextT`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:38

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:44

***

### getExchangeChannelName()

> **getExchangeChannelName**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:46

***

### nextMessage()

> **nextMessage**(`expectedMessageType`?): `Promise`\<[`Message`](../../../codec/interfaces/Message.md)\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `expectedMessageType`? | `number` |

#### Returns

`Promise`\<[`Message`](../../../codec/interfaces/Message.md)\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:43

***

### send()

> **send**(`messageType`, `payload`, `options`?): `Promise`\<`void`\>

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |
| `options`? | [`ExchangeSendOptions`](../../../protocol/README.md#exchangesendoptions) |

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:40

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

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:41

***

### throwIfErrorStatusMessage()

> `protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | [`Message`](../../../codec/interfaces/Message.md) |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:45

***

### waitForSuccess()

> **waitForSuccess**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Source

packages/matter.js/dist/esm/protocol/interaction/InteractionMessenger.d.ts:42
