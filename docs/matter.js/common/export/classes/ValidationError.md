[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / ValidationError

# Class: ValidationError

Error thrown when Data validation fails. Please check the provided data.
We encode this as StatusResponseError because in most places we want to return a StatusResponseError anyway.

## Extends

- [`StatusResponseError`](../../../protocol/interaction/export/classes/StatusResponseError.md)

## Constructors

### new ValidationError()

> **new ValidationError**(`message`, `fieldName`?): [`ValidationError`](ValidationError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `fieldName`? | `string` |

#### Returns

[`ValidationError`](ValidationError.md)

#### Overrides

[`StatusResponseError`](../../../protocol/interaction/export/classes/StatusResponseError.md).[`constructor`](../../../protocol/interaction/export/classes/StatusResponseError.md#constructors)

#### Source

[packages/matter.js/src/common/ValidationError.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/ValidationError.ts#L14)

## Properties

### clusterCode?

> `optional` `readonly` **clusterCode**: `number`

#### Inherited from

[`StatusResponseError`](../../../protocol/interaction/export/classes/StatusResponseError.md).[`clusterCode`](../../../protocol/interaction/export/classes/StatusResponseError.md#clustercode)

#### Source

[packages/matter.js/src/protocol/interaction/StatusCode.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/StatusCode.ts#L45)

***

### code

> `readonly` **code**: [`StatusCode`](../../../protocol/interaction/export/enumerations/StatusCode.md)

#### Inherited from

[`StatusResponseError`](../../../protocol/interaction/export/classes/StatusResponseError.md).[`code`](../../../protocol/interaction/export/classes/StatusResponseError.md#code)

#### Source

[packages/matter.js/src/protocol/interaction/StatusCode.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/StatusCode.ts#L44)

***

### fieldName?

> `optional` **fieldName**: `string`

#### Source

[packages/matter.js/src/common/ValidationError.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/ValidationError.ts#L16)
