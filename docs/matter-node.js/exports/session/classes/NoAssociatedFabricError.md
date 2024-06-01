[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/session](../README.md) / NoAssociatedFabricError

# Class: NoAssociatedFabricError

Error base Class for all errors related to the status response messages.

## Extends

- [`StatusResponseError`](../../interaction/classes/StatusResponseError.md)

## Constructors

### new NoAssociatedFabricError()

> **new NoAssociatedFabricError**(`message`): [`NoAssociatedFabricError`](NoAssociatedFabricError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `message` | `string` |

#### Returns

[`NoAssociatedFabricError`](NoAssociatedFabricError.md)

#### Overrides

[`StatusResponseError`](../../interaction/classes/StatusResponseError.md).[`constructor`](../../interaction/classes/StatusResponseError.md#constructors)

#### Source

packages/matter.js/dist/esm/session/SecureSession.d.ts:15

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
