[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/interaction](../README.md) / StatusResponseError

# Class: StatusResponseError

Error base Class for all errors related to the status response messages.

## Extends

- [`MatterError`](../../common/classes/MatterError.md)

## Extended by

- [`ValidationError`](../../common/classes/ValidationError.md)
- [`NoAssociatedFabricError`](../../session/classes/NoAssociatedFabricError.md)

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

[`MatterError`](../../common/classes/MatterError.md).[`constructor`](../../common/classes/MatterError.md#constructors)

#### Source

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:41

## Properties

### clusterCode?

> `optional` `readonly` **clusterCode**: `number`

#### Source

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:40

***

### code

> `readonly` **code**: [`StatusCode`](../enumerations/StatusCode.md)

#### Source

packages/matter.js/dist/esm/protocol/interaction/StatusCode.d.ts:39
