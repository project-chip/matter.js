[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [util/export](util_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [BuildArrayMinLength](util_export._internal_.md#buildarrayminlength)
- [ExtendPublicHandlerMethods](util_export._internal_.md#extendpublichandlermethods)

## Type Aliases

### BuildArrayMinLength

Ƭ **BuildArrayMinLength**\<`T`, `N`, `Current`\>: `Current`[``"length"``] extends `N` ? [...Current, ...T[]] : [`BuildArrayMinLength`](util_export._internal_.md#buildarrayminlength)\<`T`, `N`, [...Current, `T`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `N` | extends `number` |
| `Current` | extends `T`[] |

#### Defined in

[packages/matter.js/src/util/Array.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/Array.ts#L11)

___

### ExtendPublicHandlerMethods

Ƭ **ExtendPublicHandlerMethods**\<`ParentClass`, `H`\>: `ParentClass` extends (...`args`: infer TArgs) => infer T ? (...`args`: `TArgs`) => `T` & \{ `_executeHandler`: \<K\>(`action`: `K`, ...`args`: `Parameters`\<`H`[`K`]\>) => `Promise`\<`void`\> ; `addCommandHandler`: \<K\>(`action`: `K`, `handler`: `H`[`K`]) => `void` ; `removeCommandHandler`: \<K\>(`action`: `K`, `handler`: `H`[`K`]) => `void`  } : `never`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ParentClass` | extends (...`args`: `any`[]) => `any` |
| `H` | extends `Record`\<keyof `H`, [`HandlerFunction`](util_export.md#handlerfunction)\> |

#### Defined in

[packages/matter.js/src/util/NamedHandler.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/NamedHandler.ts#L35)
