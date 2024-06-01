[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [environment/export](../../../README.md) / [RuntimeService](../README.md) / Worker

# Interface: Worker

The runtime tracks individual discrete tasks as "workers".

The state of the runtime is dependent on installed workers.  Any JS object may be a worker but the runtime's
interaction with workers varies as documented here.

If a worker is a PromiseLike the runtime will delete and/or destroy it on completion.

## Extends

- `Partial`\<`PromiseLike`\<`any`\>\>.`Partial`\<[`Startable`](../../../../../common/export/interfaces/Startable.md)\>.`Partial`\<[`Cancellable`](../../../../../common/export/interfaces/Cancellable.md)\>.`Partial`\<[`Destructable`](../../../../../common/export/interfaces/Destructable.md)\>

## Properties

### \[asyncDispose\]()?

> `optional` **\[asyncDispose\]**: () => `void` \| `Promise`\<`void`\>

If the worker supports Symbol.asyncDispose the runtime will invoke when the worker is no longer
needed.  This happens if:

  - The worker is a PromiseLike that resolves

  - The worker's [construction](Worker.md#construction) status changed as noted above

  - The runtime is canceled via [RuntimeService.cancel](../../../classes/RuntimeService.md#cancel)

#### Returns

`void` \| `Promise`\<`void`\>

#### Overrides

`Partial.[asyncDispose]`

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:310](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L310)

***

### \[dispose\]()?

> `optional` **\[dispose\]**: () => `void`

Workers may implement Symbol.dispose to handle disposal.  Works the same as the async equivalent.

#### Returns

`void`

#### Overrides

`Partial.[dispose]`

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:315](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L315)

***

### \[label\]?

> `optional` **\[label\]**: `unknown`

If label is present, it will be presented in diagnostics.  This takes precedence over [Diagnostic.value].

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:320](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L320)

***

### \[value\]?

> `optional` **\[value\]**: `unknown`

In diagnostics workers render using toString() unless they provide explicit diagnostics.

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:325](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L325)

***

### construction?

> `optional` **construction**: [`AsyncConstruction`](../../../../../behavior/cluster/export/-internal-/interfaces/AsyncConstruction.md)\<`any`\>

If the worker supports [AsyncConstruction](../../../../../behavior/cluster/export/-internal-/README.md#asyncconstruction), the runtime will monitor the worker's lifecycle:

  - If the worker crashed (e.g. experiences an error during initialization) the runtime will cancel all
    workers and exit

  - If the worker is destroyed the runtime deletes it from the set of known workers

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:298](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L298)

***

### helper?

> `optional` **helper**: `boolean`

If this is true, the worker is considered a "helper".  When the last non-helper worker departs the runtime
cancels helpers and emits [RuntimeService.stopped](../../../classes/RuntimeService.md#stopped).

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:288](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L288)

***

### start()?

> `optional` **start**: () => `void`

If present, [RuntimeService](../../../classes/RuntimeService.md) will invoke when the worker is added.

If the worker also supports [construction](Worker.md#construction) the runtime will invoke once construction completes.

#### Returns

`void`

#### Overrides

`Partial.start`

#### Source

[packages/matter.js/src/environment/RuntimeService.ts:282](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/environment/RuntimeService.ts#L282)

## Methods

### cancel()?

> `optional` **cancel**(): `void`

Stop the object's primary activity.  This should result in termination as quickly as possible.

Cancellation have no effect if the object is cancelled or otherwise in a state where cancellation is irrelevant.

#### Returns

`void`

#### Inherited from

`Partial.cancel`

#### Source

[packages/matter.js/src/common/Lifecycle.ts:95](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L95)

***

### close()?

> `optional` **close**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

`Partial.close`

#### Source

[packages/matter.js/src/common/Lifecycle.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L102)
