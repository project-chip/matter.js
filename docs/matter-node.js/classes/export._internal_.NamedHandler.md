[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / NamedHandler

# Class: NamedHandler<H\>

[export](../modules/export.md).[<internal>](../modules/export._internal_.md).NamedHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Record`<keyof `H`, [`HandlerFunction`](../modules/export._internal_.md#handlerfunction)\> |

## Table of contents

### Constructors

- [constructor](export._internal_.NamedHandler.md#constructor)

### Properties

- [handler](export._internal_.NamedHandler.md#handler)

### Methods

- [addHandler](export._internal_.NamedHandler.md#addhandler)
- [executeHandler](export._internal_.NamedHandler.md#executehandler)
- [hasHandler](export._internal_.NamedHandler.md#hashandler)
- [removeHandler](export._internal_.NamedHandler.md#removehandler)

## Constructors

### constructor

• **new NamedHandler**<`H`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Record`<keyof `H`, [`HandlerFunction`](../modules/export._internal_.md#handlerfunction)\> |

## Properties

### handler

• `Private` **handler**: `any`

#### Defined in

packages/matter.js/dist/cjs/util/NamedHandler.d.ts:8

## Methods

### addHandler

▸ **addHandler**<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | `H`[`K`] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/NamedHandler.d.ts:10

___

### executeHandler

▸ **executeHandler**<`K`\>(`action`, `...args`): `Promise`<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `...args` | `Parameters`<`H`[`K`]\> |

#### Returns

`Promise`<`any`\>

#### Defined in

packages/matter.js/dist/cjs/util/NamedHandler.d.ts:11

___

### hasHandler

▸ **hasHandler**<`K`\>(`action`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/cjs/util/NamedHandler.d.ts:9

___

### removeHandler

▸ **removeHandler**<`K`\>(`action`, `handler`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `handler` | `H`[`K`] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/util/NamedHandler.d.ts:12
