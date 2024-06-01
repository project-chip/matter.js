[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / [\<internal\>](../README.md) / AsyncConstructable

# Interface: AsyncConstructable\<T\>

AsyncConstructable implements a pattern for asynchronous object initialization.

Async construction happens in the initializer parameter of [AsyncConstruction](../README.md#asyncconstruction).  You invoke in your constructor
and place in a property called "construction".

If construction is not in fact asynchronous (does not return a Promise) AsyncConstruction will complete
synchronously.

To ensure an instance is initialized prior to use you may await construction, so e.g. `await new
MyConstructable().construction`. asyncNew is shorthand for this.

Public APIs should provide a static async create() that performs an asyncNew().  The class will then adhere to
Matter.js conventions and library users can ignore the complexities associated with async creation.

Methods that cannot be used prior to construction can use [AsyncConstruction.assert](AsyncConstruction.md#assert) to ensure construction has
completed. High-visibility public APIs can instead check [AsyncConstruction.ready](AsyncConstruction.md#ready) and throw a more specific
error.

Setup optionally supports cancellation of initialization.  To implement, provide a "cancel" function option to
[AsyncConstruction](../README.md#asyncconstruction).  Then initialization can be canceled via [AsyncConstruction.cancel](AsyncConstruction.md#cancel).

To determine if initialization is complete synchronously you can check [AsyncConstruction.ready](AsyncConstruction.md#ready).

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Properties

### construction

> `readonly` **construction**: [`AsyncConstruction`](AsyncConstruction.md)\<`T`\>

#### Source

packages/matter.js/dist/esm/util/AsyncConstruction.d.ts:38
