[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/model](../../../README.md) / [ValidateModel](../README.md) / Result

# Class: Result

## Constructors

### new Result()

> **new Result**(`model`): [`Result`](Result.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`Model`](../../../classes/Model.md) |

#### Returns

[`Result`](Result.md)

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:32

## Properties

### elementCount

> **elementCount**: `number`

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:25

***

### errorCounts

> **errorCounts**: `object`

#### Index signature

 \[`name`: `string`\]: `number`

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:27

***

### errors

> **errors**: [`DefinitionError`](../../../README.md#definitionerror)[]

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:30

***

### invalidElementCount

> **invalidElementCount**: `number`

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:26

***

### model

> **model**: [`Model`](../../../classes/Model.md)

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:24

## Accessors

### invalidElementPercent

> `get` **invalidElementPercent**(): `string`

#### Returns

`string`

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:31

## Methods

### report()

> **report**(): `void`

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:33
