[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/model](../../README.md) / BaseElement

# Namespace: BaseElement

## Type Aliases

### ElementForProperties\<P\>

> **ElementForProperties**\<`P`\>: `P` *extends* [`Properties`](README.md#propertiest)\<infer T\> ? `T` : `never`

#### Type parameters

| Type parameter |
| :------ |
| `P` |

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:56

***

### Properties\<T\>

> **Properties**\<`T`\>: `Omit`\<`T`, `"tag"`\> & `Partial`\<`Pick`\<`T`, `"tag"`\>\>

Element with optional type; used for factory functions and constructors.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* `object` |

#### Source

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:60
