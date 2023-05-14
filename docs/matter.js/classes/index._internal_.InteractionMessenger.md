[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / InteractionMessenger

# Class: InteractionMessenger<ContextT\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).InteractionMessenger

## Type parameters

| Name |
| :------ |
| `ContextT` |

## Hierarchy

- **`InteractionMessenger`**

  ↳ [`InteractionServerMessenger`](protocol_interaction.InteractionServerMessenger.md)

  ↳ [`IncomingInteractionClientMessenger`](protocol_interaction.IncomingInteractionClientMessenger.md)

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
| `exchange` | [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\> |

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:62](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L62)

## Properties

### exchange

• `Protected` **exchange**: [`MessageExchange`](protocol.MessageExchange.md)<`ContextT`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:63](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L63)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:87](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L87)

___

### nextMessage

▸ **nextMessage**(`expectedMessageType?`): `Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `expectedMessageType?` | `number` |

#### Returns

`Promise`<[`Message`](../interfaces/codec.Message.md)\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:79](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L79)

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

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:66](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L66)

___

### sendStatus

▸ **sendStatus**(`status`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`StatusCode`](../enums/protocol_interaction.StatusCode.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:70](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L70)

___

### throwIfErrorStatusMessage

▸ `Protected` **throwIfErrorStatusMessage**(`message`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | [`Message`](../interfaces/codec.Message.md) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:91](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L91)

___

### waitForSuccess

▸ **waitForSuccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/protocol/interaction/InteractionMessenger.ts:74](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/protocol/interaction/InteractionMessenger.ts#L74)
