[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [index](../modules/index.md) / [<internal\>](../modules/index._internal_.md) / NamedHandler

# Class: NamedHandler<H\>

[index](../modules/index.md).[<internal>](../modules/index._internal_.md).NamedHandler

## Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Record`<keyof `H`, [`HandlerFunction`](../modules/index._internal_.md#handlerfunction)\> |

## Table of contents

### Constructors

- [constructor](index._internal_.NamedHandler.md#constructor)

### Properties

- [handler](index._internal_.NamedHandler.md#handler)

### Methods

- [addHandler](index._internal_.NamedHandler.md#addhandler)
- [executeHandler](index._internal_.NamedHandler.md#executehandler)
- [removeHandler](index._internal_.NamedHandler.md#removehandler)

## Constructors

### constructor

• **new NamedHandler**<`H`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `H` | extends `Record`<keyof `H`, [`HandlerFunction`](../modules/index._internal_.md#handlerfunction)\> |

## Properties

### handler

• `Private` **handler**: { `action`: keyof `H` ; `handler`: `H`[keyof `H`]  }[] = `[]`

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:10](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L10)

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

[packages/matter.js/src/util/NamedHandler.ts:12](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L12)

___

### executeHandler

▸ **executeHandler**<`K`\>(`action`, `...args`): `Promise`<`void`\>

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

`Promise`<`void`\>

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:16](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L16)

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

[packages/matter.js/src/util/NamedHandler.ts:24](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/util/NamedHandler.ts#L24)
