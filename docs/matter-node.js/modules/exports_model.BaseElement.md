[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](exports_model.md) / BaseElement

# Namespace: BaseElement

[exports/model](exports_model.md).BaseElement

## Table of contents

### Type Aliases

- [ElementForProperties](exports_model.BaseElement.md#elementforproperties)
- [Properties](exports_model.BaseElement.md#properties)

## Type Aliases

### ElementForProperties

Ƭ **ElementForProperties**<`P`\>: `P` extends [`Properties`](exports_model.BaseElement.md#properties)<infer T\> ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Defined in

packages/matter.js/dist/cjs/model/elements/BaseElement.d.ts:56

___

### Properties

Ƭ **Properties**<`T`\>: `Omit`<`T`, ``"tag"``\> & `Partial`<`Pick`<`T`, ``"tag"``\>\>

Element with optional type; used for factory functions and constructors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

packages/matter.js/dist/cjs/model/elements/BaseElement.d.ts:60
