[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [environment/export](../modules/environment_export.md) / [\<internal\>](../modules/environment_export._internal_.md) / [RuntimeService](../modules/environment_export._internal_.RuntimeService.md) / Worker

# Interface: Worker

[\<internal\>](../modules/environment_export._internal_.md).[RuntimeService](../modules/environment_export._internal_.RuntimeService.md).Worker

The runtime tracks individual discrete tasks as "workers".

The state of the runtime is dependent on installed workers.  Any JS object may be a worker but the runtime's
interaction with workers varies as documented here.

If a worker is a PromiseLike the runtime will delete and/or destroy it on completion.

## Hierarchy

- `Partial`\<`PromiseLike`\<`any`\>\>

- `Partial`\<[`Startable`](exports_common.Startable.md)\>

- `Partial`\<[`Cancellable`](exports_common.Cancellable.md)\>

- `Partial`\<[`Destructable`](exports_common.Destructable.md)\>

  ↳ **`Worker`**

## Table of contents

### Properties

- [[asyncDispose]](environment_export._internal_.RuntimeService.Worker.md#[asyncdispose])
- [[dispose]](environment_export._internal_.RuntimeService.Worker.md#[dispose])
- [[label]](environment_export._internal_.RuntimeService.Worker.md#[label])
- [[value]](environment_export._internal_.RuntimeService.Worker.md#[value])
- [construction](environment_export._internal_.RuntimeService.Worker.md#construction)
- [helper](environment_export._internal_.RuntimeService.Worker.md#helper)
- [start](environment_export._internal_.RuntimeService.Worker.md#start)

### Methods

- [cancel](environment_export._internal_.RuntimeService.Worker.md#cancel)
- [close](environment_export._internal_.RuntimeService.Worker.md#close)

## Properties

### [asyncDispose]

• `Optional` **[asyncDispose]**: () => `void` \| `Promise`\<`void`\>

If the worker supports Symbol.asyncDispose the runtime will invoke when the worker is no longer
needed.  This happens if:

  - The worker is a PromiseLike that resolves

  - The worker's [construction](environment_export._internal_.RuntimeService.Worker.md#construction) status changed as noted above

  - The runtime is canceled via [RuntimeService.cancel](../classes/environment_export._internal_.RuntimeService-1.md#cancel)

#### Type declaration

▸ (): `void` \| `Promise`\<`void`\>

##### Returns

`void` \| `Promise`\<`void`\>

#### Overrides

Partial.[asyncDispose]

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:96

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

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:100

___

### [label]

• `Optional` **[label]**: `unknown`

If label is present, it will be presented in diagnostics.  This takes precedence over [Diagnostic.value].

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:104

___

### [value]

• `Optional` **[value]**: `unknown`

In diagnostics workers render using toString() unless they provide explicit diagnostics.

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:108

___

### construction

• `Optional` **construction**: [`AsyncConstruction`](exports_cluster._internal_.AsyncConstruction-1.md)\<`any`\>

If the worker supports [AsyncConstruction](../modules/exports_cluster._internal_.md#asyncconstruction), the runtime will monitor the worker's lifecycle:

  - If the worker crashed (e.g. experiences an error during initialization) the runtime will cancel all
    workers and exit

  - If the worker is destroyed the runtime deletes it from the set of known workers

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:85

___

### helper

• `Optional` **helper**: `boolean`

If this is true, the worker is considered a "helper".  When the last non-helper worker departs the runtime
cancels helpers and emits [RuntimeService.stopped](../classes/environment_export._internal_.RuntimeService-1.md#stopped).

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:76

___

### start

• `Optional` **start**: () => `void`

If present, [RuntimeService](../classes/environment_export._internal_.RuntimeService-1.md) will invoke when the worker is added.

If the worker also supports [construction](environment_export._internal_.RuntimeService.Worker.md#construction) the runtime will invoke once construction completes.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Overrides

Partial.start

#### Defined in

packages/matter.js/dist/esm/environment/RuntimeService.d.ts:71

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

packages/matter.js/dist/esm/common/Lifecycle.d.ts:56

___

### close

▸ **close**(): `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

#### Inherited from

Partial.close

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:62
