[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [RuntimeService](../modules/environment_export.RuntimeService.md) / Worker

# Interface: Worker

[environment/export](../modules/environment_export.md).[RuntimeService](../modules/environment_export.RuntimeService.md).Worker

The runtime tracks individual discrete tasks as "workers".

The state of the runtime is dependent on installed workers.  Any JS object may be a worker but the runtime's
interaction with workers varies as documented here.

If a worker is a PromiseLike the runtime will delete and/or destroy it on completion.

## Hierarchy

- `Partial`\<`PromiseLike`\<`any`\>\>

- `Partial`\<[`Startable`](common_export.Startable.md)\>

- `Partial`\<[`Cancellable`](common_export.Cancellable.md)\>

- `Partial`\<[`Destructable`](common_export.Destructable.md)\>

  ↳ **`Worker`**

## Table of contents

### Properties

- [[asyncDispose]](environment_export.RuntimeService.Worker.md#[asyncdispose])
- [[dispose]](environment_export.RuntimeService.Worker.md#[dispose])
- [[label]](environment_export.RuntimeService.Worker.md#[label])
- [[value]](environment_export.RuntimeService.Worker.md#[value])
- [construction](environment_export.RuntimeService.Worker.md#construction)
- [helper](environment_export.RuntimeService.Worker.md#helper)
- [start](environment_export.RuntimeService.Worker.md#start)

### Methods

- [cancel](environment_export.RuntimeService.Worker.md#cancel)
- [close](environment_export.RuntimeService.Worker.md#close)

## Properties

### [asyncDispose]

• `Optional` **[asyncDispose]**: () => `void` \| `Promise`\<`void`\>

If the worker supports Symbol.asyncDispose the runtime will invoke when the worker is no longer
needed.  This happens if:

  - The worker is a PromiseLike that resolves

  - The worker's [construction](environment_export.RuntimeService.Worker.md#construction) status changed as noted above

  - The runtime is canceled via [RuntimeService.cancel](../classes/environment_export.RuntimeService-1.md#cancel)

#### Type declaration

▸ (): `void` \| `Promise`\<`void`\>

##### Returns

`void` \| `Promise`\<`void`\>

#### Overrides

Partial.[asyncDispose]

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:310](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L310)

___

### [dispose]

• `Optional` **[dispose]**: () => `void`

Workers may implement Symbol.dispose to handle disposal.  Works the same as the async equivalent.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Overrides

Partial.[dispose]

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:315](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L315)

___

### [label]

• `Optional` **[label]**: `unknown`

If label is present, it will be presented in diagnostics.  This takes precedence over [Diagnostic.value].

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:320](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L320)

___

### [value]

• `Optional` **[value]**: `unknown`

In diagnostics workers render using toString() unless they provide explicit diagnostics.

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:325](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L325)

___

### construction

• `Optional` **construction**: [`AsyncConstruction`](behavior_cluster_export._internal_.AsyncConstruction-1.md)\<`any`\>

If the worker supports [AsyncConstruction](../modules/behavior_cluster_export._internal_.md#asyncconstruction), the runtime will monitor the worker's lifecycle:

  - If the worker crashed (e.g. experiences an error during initialization) the runtime will cancel all
    workers and exit

  - If the worker is destroyed the runtime deletes it from the set of known workers

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:298](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L298)

___

### helper

• `Optional` **helper**: `boolean`

If this is true, the worker is considered a "helper".  When the last non-helper worker departs the runtime
cancels helpers and emits [RuntimeService.stopped](../classes/environment_export.RuntimeService-1.md#stopped).

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:288](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L288)

___

### start

• `Optional` **start**: () => `void`

If present, [RuntimeService](../classes/environment_export.RuntimeService-1.md) will invoke when the worker is added.

If the worker also supports [construction](environment_export.RuntimeService.Worker.md#construction) the runtime will invoke once construction completes.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Overrides

Partial.start

#### Defined in

[packages/matter.js/src/environment/RuntimeService.ts:282](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/environment/RuntimeService.ts#L282)

## Methods

### cancel

▸ **cancel**(): `void`

Stop the object's primary activity.  This should result in termination as quickly as possible.

Cancellation have no effect if the object is cancelled or otherwise in a state where cancellation is irrelevant.

#### Returns

`void`

#### Inherited from

Partial.cancel

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:95](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L95)

___

### close

▸ **close**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

Partial.close

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:102](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L102)
