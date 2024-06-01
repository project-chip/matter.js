[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [session/export](../README.md) / NoAssociatedFabricError

# Class: NoAssociatedFabricError

Error base Class for all errors related to the status response messages.

## Extends

- [`StatusResponseError`](../../../protocol/interaction/export/classes/StatusResponseError.md)

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

[`StatusResponseError`](../../../protocol/interaction/export/classes/StatusResponseError.md).[`constructor`](../../../protocol/interaction/export/classes/StatusResponseError.md#constructors)

#### Source

[packages/matter.js/src/session/SecureSession.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/session/SecureSession.ts#L29)

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
