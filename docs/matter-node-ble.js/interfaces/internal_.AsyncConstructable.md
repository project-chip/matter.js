[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / AsyncConstructable

# Interface: AsyncConstructable\<T\>

[\<internal\>](../modules/internal_.md).AsyncConstructable

AsyncConstructable implements a pattern for asynchronous object initialization.

Async construction happens in the initializer parameter of [AsyncConstruction](../modules/internal_.md#asyncconstruction).  You invoke in your constructor
and place in a property called "construction".

If construction is not in fact asynchronous (does not return a Promise) AsyncConstruction will complete
synchronously.

To ensure an instance is initialized prior to use you may await construction, so e.g. `await new
MyConstructable().construction`. asyncNew is shorthand for this.

Public APIs should provide a static async create() that performs an asyncNew().  The class will then adhere to
Matter.js conventions and library users can ignore the complexities associated with async creation.

Methods that cannot be used prior to construction can use [AsyncConstruction.assert](internal_.AsyncConstruction-1.md#assert) to ensure construction has
completed. High-visibility public APIs can instead check [AsyncConstruction.ready](internal_.AsyncConstruction-1.md#ready) and throw a more specific
error.

Setup optionally supports cancellation of initialization.  To implement, provide a "cancel" function option to
[AsyncConstruction](../modules/internal_.md#asyncconstruction).  Then initialization can be canceled via [AsyncConstruction.cancel](internal_.AsyncConstruction-1.md#cancel).

To determine if initialization is complete synchronously you can check [AsyncConstruction.ready](internal_.AsyncConstruction-1.md#ready).

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Properties

- [construction](internal_.AsyncConstructable.md#construction)

## Properties

### construction

• `Readonly` **construction**: [`AsyncConstruction`](internal_.AsyncConstruction-1.md)\<`T`\>

#### Defined in

matter.js/dist/esm/util/AsyncConstruction.d.ts:38
