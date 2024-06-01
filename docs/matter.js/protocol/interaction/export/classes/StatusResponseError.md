[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [protocol/interaction/export](../README.md) / StatusResponseError

# Class: StatusResponseError

Error base Class for all errors related to the status response messages.

## Extends

- [`MatterError`](../../../../common/export/classes/MatterError.md)

## Extended by

- [`ValidationError`](../../../../common/export/classes/ValidationError.md)
- [`NoAssociatedFabricError`](../../../../session/export/classes/NoAssociatedFabricError.md)

## Constructors

### new StatusResponseError()

> **new StatusResponseError**(`message`, `code`, `clusterCode`?): [`StatusResponseError`](StatusResponseError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |
| `code` | [`StatusCode`](../enumerations/StatusCode.md) |
| `clusterCode`? | `number` |

#### Returns

[`StatusResponseError`](StatusResponseError.md)

#### Overrides

[`MatterError`](../../../../common/export/classes/MatterError.md).[`constructor`](../../../../common/export/classes/MatterError.md#constructors)

#### Source

[packages/matter.js/src/protocol/interaction/StatusCode.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/StatusCode.ts#L42)

## Properties

### clusterCode?

> `optional` `readonly` **clusterCode**: `number`

#### Source

[packages/matter.js/src/protocol/interaction/StatusCode.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/StatusCode.ts#L45)

***

### code

> `readonly` **code**: [`StatusCode`](../enumerations/StatusCode.md)

#### Source

[packages/matter.js/src/protocol/interaction/StatusCode.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/protocol/interaction/StatusCode.ts#L44)
