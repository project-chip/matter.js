[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / [ValidateModel](../modules/model.ValidateModel.md) / Result

# Class: Result

[model](../modules/model.md).[ValidateModel](../modules/model.ValidateModel.md).Result

## Table of contents

### Constructors

- [constructor](model.ValidateModel.Result.md#constructor)

### Properties

- [elementCount](model.ValidateModel.Result.md#elementcount)
- [errorCounts](model.ValidateModel.Result.md#errorcounts)
- [errors](model.ValidateModel.Result.md#errors)
- [invalidElementCount](model.ValidateModel.Result.md#invalidelementcount)
- [model](model.ValidateModel.Result.md#model)

### Accessors

- [invalidElementPercent](model.ValidateModel.Result.md#invalidelementpercent)

### Methods

- [report](model.ValidateModel.Result.md#report)

## Constructors

### constructor

• **new Result**(`model`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](model.Model-1.md) |

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:92](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L92)

## Properties

### elementCount

• **elementCount**: `number` = `0`

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:83](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L83)

___

### errorCounts

• **errorCounts**: `Object` = `{}`

#### Index signature

▪ [name: `string`]: `number`

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:85](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L85)

___

### errors

• **errors**: [`DefinitionError`](../modules/model.md#definitionerror)[]

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:86](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L86)

___

### invalidElementCount

• **invalidElementCount**: `number` = `0`

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:84](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L84)

___

### model

• **model**: [`Model`](model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:92](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L92)

## Accessors

### invalidElementPercent

• `get` **invalidElementPercent**(): `string`

#### Returns

`string`

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:88](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L88)

## Methods

### report

▸ **report**(): `void`

#### Returns

`void`

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:94](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/model/logic/ValidateModel.ts#L94)
