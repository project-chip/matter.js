[**@project-chip/matter-node.js**](../../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../../modules.md) / [exports/cluster](../../../../README.md) / [\<internal\>](../../../README.md) / [AsyncConstruction](../README.md) / Options

# Interface: Options

## Properties

### cancel()?

> `optional` **cancel**: () => `void`

Cancellation callback if the subject supports cancellation.

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:121

***

### onerror()?

> `optional` **onerror**: (`error`) => `void`

By default unhandled initialization errors are logged.  You can override by supplying an error handler here.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `error` | `Error` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:129

***

### parent?

> `optional` **parent**: [`AsyncConstruction`](../../../interfaces/AsyncConstruction.md)\<`any`\>

If the subject contributes to a composite object, crashes propagate to parent indicated here.

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:125
