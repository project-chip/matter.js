[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](model.md) / BaseElement

# Namespace: BaseElement

[model](model.md).BaseElement

## Table of contents

### Type Aliases

- [ElementForProperties](model.BaseElement.md#elementforproperties)
- [Properties](model.BaseElement.md#properties)

## Type Aliases

### ElementForProperties

Ƭ **ElementForProperties**\<`P`\>: `P` extends [`Properties`](model.BaseElement.md#properties)\<infer T\> ? `T` : `never`

#### Type parameters

| Name |
| :------ |
| `P` |

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L75)

___

### Properties

Ƭ **Properties**\<`T`\>: `Omit`\<`T`, ``"tag"``\> & `Partial`\<`Pick`\<`T`, ``"tag"``\>\>

Element with optional type; used for factory functions and constructors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Object` |

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:80](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L80)
