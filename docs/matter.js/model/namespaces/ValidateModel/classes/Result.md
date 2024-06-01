[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [model](../../../README.md) / [ValidateModel](../README.md) / Result

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

[packages/matter.js/src/model/logic/ValidateModel.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L93)

## Properties

### elementCount

> **elementCount**: `number` = `0`

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:84](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L84)

***

### errorCounts

> **errorCounts**: `object` = `{}`

#### Index signature

 \[`name`: `string`\]: `number`

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:86](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L86)

***

### errors

> **errors**: [`DefinitionError`](../../../README.md#definitionerror)[]

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:87](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L87)

***

### invalidElementCount

> **invalidElementCount**: `number` = `0`

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L85)

***

### model

> **model**: [`Model`](../../../classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:93](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L93)

## Accessors

### invalidElementPercent

> `get` **invalidElementPercent**(): `string`

#### Returns

`string`

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:89](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L89)

## Methods

### report()

> **report**(): `void`

#### Returns

`void`

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L95)
