[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / NamedHandler

# Class: NamedHandler\<H\>

[util/export](../modules/util_export.md).NamedHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Record`\<keyof `H`, [`HandlerFunction`](../modules/util_export.md#handlerfunction)\> |

## Table of contents

### Constructors

- [constructor](util_export.NamedHandler.md#constructor)

### Properties

- [handler](util_export.NamedHandler.md#handler)

### Methods

- [addHandler](util_export.NamedHandler.md#addhandler)
- [executeHandler](util_export.NamedHandler.md#executehandler)
- [hasHandler](util_export.NamedHandler.md#hashandler)
- [removeHandler](util_export.NamedHandler.md#removehandler)

## Constructors

### constructor

• **new NamedHandler**\<`H`\>(): [`NamedHandler`](util_export.NamedHandler.md)\<`H`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Record`\<keyof `H`, [`HandlerFunction`](../modules/util_export.md#handlerfunction)\> |

#### Returns

[`NamedHandler`](util_export.NamedHandler.md)\<`H`\>

## Properties

### handler

• `Private` **handler**: `any`

#### Defined in

packages/matter.js/dist/esm/util/NamedHandler.d.ts:8

## Methods

### addHandler

▸ **addHandler**\<`K`\>(`action`, `handler`): `void`

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

packages/matter.js/dist/esm/util/NamedHandler.d.ts:10

___

### executeHandler

▸ **executeHandler**\<`K`\>(`action`, `...args`): `Promise`\<`any`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `K` |
| `...args` | `Parameters`\<`H`[`K`]\> |

#### Returns

`Promise`\<`any`\>

#### Defined in

packages/matter.js/dist/esm/util/NamedHandler.d.ts:11

___

### hasHandler

▸ **hasHandler**\<`K`\>(`action`): `boolean`

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

packages/matter.js/dist/esm/util/NamedHandler.d.ts:9

___

### removeHandler

▸ **removeHandler**\<`K`\>(`action`, `handler`): `void`

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

packages/matter.js/dist/esm/util/NamedHandler.d.ts:12
