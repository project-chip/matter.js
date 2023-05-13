[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / InteractionMessenger

# Class: InteractionMessenger<ContextT\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).InteractionMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`InteractionMessenger`**

  ↳ [`InteractionServerMessenger`](exports_interaction.InteractionServerMessenger.md)

  ↳ [`IncomingInteractionClientMessenger`](exports_interaction.IncomingInteractionClientMessenger.md)

## Table of contents

### Constructors

- [constructor](index._internal_.InteractionMessenger.md#constructor)

### Properties

- [exchange](index._internal_.InteractionMessenger.md#exchange)

### Methods

- [close](index._internal_.InteractionMessenger.md#close)
- [nextMessage](index._internal_.InteractionMessenger.md#nextmessage)
- [send](index._internal_.InteractionMessenger.md#send)
- [sendStatus](index._internal_.InteractionMessenger.md#sendstatus)
- [throwIfErrorStatusMessage](index._internal_.InteractionMessenger.md#throwiferrorstatusmessage)
- [waitForSuccess](index._internal_.InteractionMessenger.md#waitforsuccess)

## Constructors

### constructor

• **new InteractionMessenger**<`ContextT`\>(`exchange`)

#### Type parameters

| Name |
| :------ |
| `ContextT` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `exchange` | [`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\> |

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:43

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](exports_protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:42

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:48

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/exports_codec.Message.md)\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:47

___

### send

▸ **send**(`messageType`, `payload`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageType` | `number` |
| `payload` | `Uint8Array` |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:44

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/exports_interaction.StatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:45

___

### throwIfErrorStatusMessage

▸ `Protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/exports_codec.Message.md) |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:49

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

packages/matter.js/dist/cjs/protocol/interaction/InteractionMessenger.d.ts:46
