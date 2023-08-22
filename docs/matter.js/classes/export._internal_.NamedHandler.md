[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [export](../modules/export.md) / [<internal\>](../modules/export._internal_.md) / NamedHandler

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

• `Private` **handler**: { `action`: keyof `H` ; `handler`: `H`[keyof `H`]  }[] = `[]`

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:10](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L10)

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

[packages/matter.js/src/util/NamedHandler.ts:16](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L16)

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

[packages/matter.js/src/util/NamedHandler.ts:20](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L20)

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

[packages/matter.js/src/util/NamedHandler.ts:12](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L12)

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

[packages/matter.js/src/util/NamedHandler.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/util/NamedHandler.ts#L28)
