[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / [AsyncConstruction](../modules/exports_cluster._internal_.AsyncConstruction.md) / Options

# Interface: Options

[\<internal\>](../modules/exports_cluster._internal_.md).[AsyncConstruction](../modules/exports_cluster._internal_.AsyncConstruction.md).Options

## Table of contents

### Properties

- [cancel](exports_cluster._internal_.AsyncConstruction.Options.md#cancel)
- [onerror](exports_cluster._internal_.AsyncConstruction.Options.md#onerror)
- [parent](exports_cluster._internal_.AsyncConstruction.Options.md#parent)

## Properties

### cancel

• `Optional` **cancel**: () => `void`

Cancellation callback if the subject supports cancellation.

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:121

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

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:129

___

### parent

• `Optional` **parent**: [`AsyncConstruction`](exports_cluster._internal_.AsyncConstruction-1.md)\<`any`\>

If the subject contributes to a composite object, crashes propagate to parent indicated here.

#### Defined in

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:125
