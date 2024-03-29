[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [\<internal\>](../modules/exports_cluster._internal_.md) / AsyncConstructable

# Interface: AsyncConstructable\<T\>

[exports/cluster](../modules/exports_cluster.md).[\<internal\>](../modules/exports_cluster._internal_.md).AsyncConstructable

AsyncConstructable implements a pattern for asynchronous object initialization.

Async construction happens in the initializer parameter of [AsyncConstruction](../modules/exports_cluster._internal_.md#asyncconstruction).  You invoke in your constructor
and place in a property called "construction".

If construction is not in fact asynchronous (does not return a Promise) AsyncConstruction will complete
synchronously.

To ensure an instance is initialized prior to use you may await construction, so e.g. `await new
MyConstructable().construction`. asyncNew is shorthand for this.

Public APIs should provide a static async create() that performs an asyncNew().  The class will then adhere to
Matter.js conventions and library users can ignore the complexities associated with async creation.

Methods that cannot be used prior to construction can use [AsyncConstruction.assert](exports_cluster._internal_.AsyncConstruction-1.md#assert) to ensure construction has
completed. High-visibility public APIs can instead check [AsyncConstruction.ready](exports_cluster._internal_.AsyncConstruction-1.md#ready) and throw a more specific
error.

Setup optionally supports cancellation of initialization.  To implement, provide a "cancel" function option to
[AsyncConstruction](../modules/exports_cluster._internal_.md#asyncconstruction).  Then initialization can be canceled via [AsyncConstruction.cancel](exports_cluster._internal_.AsyncConstruction-1.md#cancel).

To determine if initialization is complete synchronously you can check [AsyncConstruction.ready](exports_cluster._internal_.AsyncConstruction-1.md#ready).

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [construction](exports_cluster._internal_.AsyncConstructable.md#construction)

## Properties

### construction

• `Readonly` **construction**: [`AsyncConstruction`](exports_cluster._internal_.AsyncConstruction-1.md)\<`T`\>

#### Defined in

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:38
