[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](../modules/util_export.md) / NamedHandler

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

• `Private` **handler**: \{ `action`: keyof `H` ; `handler`: `H`[keyof `H`]  }[] = `[]`

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:10](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L10)

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

[packages/matter.js/src/util/NamedHandler.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L16)

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

[packages/matter.js/src/util/NamedHandler.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L20)

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

[packages/matter.js/src/util/NamedHandler.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L12)

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

[packages/matter.js/src/util/NamedHandler.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L28)
