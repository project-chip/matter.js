[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / [ValidateModel](../modules/exports_model.ValidateModel.md) / Result

# Class: Result

[exports/model](../modules/exports_model.md).[ValidateModel](../modules/exports_model.ValidateModel.md).Result

## Table of contents

### Constructors

- [constructor](exports_model.ValidateModel.Result.md#constructor)

### Properties

- [elementCount](exports_model.ValidateModel.Result.md#elementcount)
- [errorCounts](exports_model.ValidateModel.Result.md#errorcounts)
- [errors](exports_model.ValidateModel.Result.md#errors)
- [invalidElementCount](exports_model.ValidateModel.Result.md#invalidelementcount)
- [model](exports_model.ValidateModel.Result.md#model)

### Accessors

- [invalidElementPercent](exports_model.ValidateModel.Result.md#invalidelementpercent)

### Methods

- [report](exports_model.ValidateModel.Result.md#report)

## Constructors

### constructor

• **new Result**(`model`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](exports_model.Model-1.md) |

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:32

## Properties

### elementCount

• **elementCount**: `number`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:25

___

### errorCounts

• **errorCounts**: `Object`

#### Index signature

▪ [name: `string`]: `number`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:27

___

### errors

• **errors**: [`DefinitionError`](../modules/exports_model.md#definitionerror)[]

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:30

___

### invalidElementCount

• **invalidElementCount**: `number`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:26

___

### model

• **model**: [`Model`](exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:24

## Accessors

### invalidElementPercent

• `get` **invalidElementPercent**(): `string`

#### Returns

`string`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:31

## Methods

### report

▸ **report**(): `void`

#### Returns

`void`

#### Defined in

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:33
