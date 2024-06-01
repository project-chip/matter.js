[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / \<internal\>

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

[packages/matter.js/src/util/Array.ts:11](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Array.ts#L11)

***

### ExtendPublicHandlerMethods\<ParentClass, H\>

> **ExtendPublicHandlerMethods**\<`ParentClass`, `H`\>: `ParentClass` *extends* (...`args`) => infer T ? (...`args`) => `T` & `object` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `ParentClass` *extends* (...`args`) => `any` |
| `H` *extends* `Record`\<keyof `H`, [`HandlerFunction`](../README.md#handlerfunction)\> |

#### Source

[packages/matter.js/src/util/NamedHandler.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/NamedHandler.ts#L35)

***

### Next\<T\>

> **Next**\<`T`\>: `undefined` \| `object`

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

[packages/matter.js/src/util/Observable.ts:309](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Observable.ts#L309)
