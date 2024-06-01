[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [model](../../README.md) / BaseElement

# Namespace: BaseElement

## Type Aliases

### ElementForProperties\<P\>

> **ElementForProperties**\<`P`\>: `P` *extends* [`Properties`](README.md#propertiest)\<infer T\> ? `T` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `P` |

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:75](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L75)

***

### Properties\<T\>

> **Properties**\<`T`\>: `Omit`\<`T`, `"tag"`\> & `Partial`\<`Pick`\<`T`, `"tag"`\>\>

Element with optional type; used for factory functions and constructors.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `object` |

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:80](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L80)
