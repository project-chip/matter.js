[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / ValidationError

# Class: ValidationError

Error thrown when Data validation fails. Please check the provided data.
We encode this as StatusResponseError because in most places we want to return a StatusResponseError anyway.

## Extends

- [`StatusResponseError`](../../interaction/classes/StatusResponseError.md)

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

[`StatusResponseError`](../../interaction/classes/StatusResponseError.md).[`constructor`](../../interaction/classes/StatusResponseError.md#constructors)

#### Source

packages/matter.js/dist/esm/common/ValidationError.d.ts:13

## Properties

### clusterCode?

> `optional` `readonly` **clusterCode**: `number`

#### Inherited from

[`StatusResponseError`](../../interaction/classes/StatusResponseError.md).[`clusterCode`](../../interaction/classes/StatusResponseError.md#clustercode)

#### Source

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:40

***

### code

> `readonly` **code**: [`StatusCode`](../../interaction/enumerations/StatusCode.md)

#### Inherited from

[`StatusResponseError`](../../interaction/classes/StatusResponseError.md).[`code`](../../interaction/classes/StatusResponseError.md#code)

#### Source

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:39

***

### fieldName?

> `optional` **fieldName**: `string`

#### Source

packages/matter.js/dist/esm/common/ValidationError.d.ts:12
