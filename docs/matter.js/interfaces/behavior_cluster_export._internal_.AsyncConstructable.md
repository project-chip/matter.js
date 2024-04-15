[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / AsyncConstructable

# Interface: AsyncConstructable\<T\>

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).AsyncConstructable

AsyncConstructable implements a pattern for asynchronous object initialization.

Async construction happens in the initializer parameter of [AsyncConstruction](../modules/behavior_cluster_export._internal_.md#asyncconstruction).  You invoke in your constructor
and place in a property called "construction".

If construction is not in fact asynchronous (does not return a Promise) AsyncConstruction will complete
synchronously.

To ensure an instance is initialized prior to use you may await construction, so e.g. `await new
MyConstructable().construction`. asyncNew is shorthand for this.

Public APIs should provide a static async create() that performs an asyncNew().  The class will then adhere to
Matter.js conventions and library users can ignore the complexities associated with async creation.

Methods that cannot be used prior to construction can use [AsyncConstruction.assert](behavior_cluster_export._internal_.AsyncConstruction-1.md#assert) to ensure construction has
completed. High-visibility public APIs can instead check [AsyncConstruction.ready](behavior_cluster_export._internal_.AsyncConstruction-1.md#ready) and throw a more specific
error.

Setup optionally supports cancellation of initialization.  To implement, provide a "cancel" function option to
[AsyncConstruction](../modules/behavior_cluster_export._internal_.md#asyncconstruction).  Then initialization can be canceled via [AsyncConstruction.cancel](behavior_cluster_export._internal_.AsyncConstruction-1.md#cancel).

To determine if initialization is complete synchronously you can check [AsyncConstruction.ready](behavior_cluster_export._internal_.AsyncConstruction-1.md#ready).

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [construction](behavior_cluster_export._internal_.AsyncConstructable.md#construction)

## Properties

### construction

• `Readonly` **construction**: [`AsyncConstruction`](behavior_cluster_export._internal_.AsyncConstruction-1.md)\<`T`\>

#### Defined in

[packages/matter.js/src/util/AsyncConstruction.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/util/AsyncConstruction.ts#L48)
