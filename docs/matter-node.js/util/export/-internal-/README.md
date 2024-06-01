[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [util/export](../README.md) / \<internal\>

# \<internal\>

## Type Aliases

### BuildArrayMinLength\<T, N, Current\>

> **BuildArrayMinLength**\<`T`, `N`, `Current`\>: `Current`\[`"length"`\] *extends* `N` ? [`...Current`, `...T[]`] : [`BuildArrayMinLength`](README.md#buildarrayminlengthtncurrent)\<`T`, `N`, [`...Current`, `T`]\>

#### Type parameters

| Type parameter |
| :------ |
| `T` |
| `N` *extends* `number` |
| `Current` *extends* `T`[] |

#### Source

packages/matter.js/dist/esm/util/Array.d.ts:9

***

### ExtendPublicHandlerMethods\<ParentClass, H\>

> **ExtendPublicHandlerMethods**\<`ParentClass`, `H`\>: `ParentClass` *extends* (...`args`) => infer T ? (...`args`) => `T` & `object` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `ParentClass` *extends* (...`args`) => `any` |
| `H` *extends* `Record`\<keyof `H`, [`HandlerFunction`](../README.md#handlerfunction)\> |

#### Source

packages/matter.js/dist/esm/util/NamedHandler.d.ts:14
