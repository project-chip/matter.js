[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / [AsyncConstruction](../modules/behavior_cluster_export._internal_.AsyncConstruction.md) / Options

# Interface: Options

[\<internal\>](../modules/behavior_cluster_export._internal_.md).[AsyncConstruction](../modules/behavior_cluster_export._internal_.AsyncConstruction.md).Options

## Table of contents

### Properties

- [cancel](behavior_cluster_export._internal_.AsyncConstruction.Options.md#cancel)
- [onerror](behavior_cluster_export._internal_.AsyncConstruction.Options.md#onerror)
- [parent](behavior_cluster_export._internal_.AsyncConstruction.Options.md#parent)

## Properties

### cancel

• `Optional` **cancel**: () => `void`

Cancellation callback if the subject supports cancellation.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:503](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L503)

___

### onerror

• `Optional` **onerror**: (`error`: `Error`) => `void`

By default unhandled initialization errors are logged.  You can override by supplying an error handler here.

#### Type declaration

▸ (`error`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |

##### Returns

`void`

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:513](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L513)

___

### parent

• `Optional` **parent**: [`AsyncConstruction`](behavior_cluster_export._internal_.AsyncConstruction-1.md)\<`any`\>

If the subject contributes to a composite object, crashes propagate to parent indicated here.

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:508](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L508)
