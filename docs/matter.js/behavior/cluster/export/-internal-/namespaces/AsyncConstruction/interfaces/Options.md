[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/cluster/export](../../../../README.md) / [\<internal\>](../../../README.md) / [AsyncConstruction](../README.md) / Options

# Interface: Options

## Properties

### cancel()?

> `optional` **cancel**: () => `void`

Cancellation callback if the subject supports cancellation.

#### Returns

`void`

#### Source

[packages/matter.js/src/util/AsyncConstruction.ts:503](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/AsyncConstruction.ts#L503)

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

[packages/matter.js/src/util/AsyncConstruction.ts:513](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/AsyncConstruction.ts#L513)

***

### parent?

> `optional` **parent**: [`AsyncConstruction`](../../../interfaces/AsyncConstruction.md)\<`any`\>

If the subject contributes to a composite object, crashes propagate to parent indicated here.

#### Source

[packages/matter.js/src/util/AsyncConstruction.ts:508](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/AsyncConstruction.ts#L508)
