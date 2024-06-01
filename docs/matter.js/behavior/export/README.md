[**@project-chip/matter.js**](../../README.md) • **Docs**

***

[@project-chip/matter.js](../../modules.md) / behavior/export

# behavior/export

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [AccessControl](namespaces/AccessControl/README.md)
- [Behavior](namespaces/Behavior/README.md)
- [Reactor](namespaces/Reactor/README.md)

### Classes

- [Behavior](classes/Behavior.md)

### Interfaces

- [AccessControl](interfaces/AccessControl.md)

## Type Aliases

### Reactor()\<T, R\>

> **Reactor**\<`T`, `R`\>: (...`args`) => [`MaybePromise`](../../util/export/README.md#maybepromiset)\<`R`\>

A reactor is an [Observer](../../util/export/interfaces/Observer.md) managed by a [Behavior](classes/Behavior.md).  You install reactors using [Behavior.reactTo](classes/Behavior.md#reactto)
on the behavior that receives the event.

A reactor is similar to a normal handler installed with [Observable.on](../../util/export/interfaces/Observable.md#on).  It provides several benefits over
installing an observer directly:

  - The behavior uninstalls reactor when the [Endpoint](../../endpoint/export/classes/Endpoint.md) is destroyed

  - If reactor is asynchronous, the behavior tracks the resulting promise.  It provides error handling and
    ensures the promise completes before [Endpoint](../../endpoint/export/classes/Endpoint.md) destruction

  - The behavior ensures reactors run serially even if they are asynchronous

  - Matter.js manages the context in which the reactor runs automatically, either joining the emitter's context or
    creating a dedicated offline context

  - Matter.js ensures that reactor only registers with [Observable](../../util/export/README.md#observable) once for a given [Endpoint](../../endpoint/export/classes/Endpoint.md)

  - You may optionally designate resources (including [Behavior](classes/Behavior.md)s) for locking prior to reaction

You should not use arrow functions for reactors as this will prevent you from accessing the Behavior in the correct
context.

If observable is a high-volume emitter, it would be better to implement synchronous or very fast asynchronous
reactors to avoid accumulating too many deferred reactions.

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* `any`[] | `any`[] |
| `R` | `any` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| ...`args` | `T` |

#### Returns

[`MaybePromise`](../../util/export/README.md#maybepromiset)\<`R`\>

#### Source

[packages/matter.js/src/behavior/Reactor.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/Reactor.ts#L40)

## Functions

### AccessControl()

> **AccessControl**(`schema`): [`AccessControl`](interfaces/AccessControl.md)

Obtain an enforcer for specific schema.

This is central to security.  Implementation is explicit, all objects are involved are frozen and cache is stored as
module-private.

Pure function; returned value is cached.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `schema` | [`Schema`](../cluster/export/-internal-/README.md#schema) |

#### Returns

[`AccessControl`](interfaces/AccessControl.md)

#### Source

[packages/matter.js/src/behavior/AccessControl.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/AccessControl.ts#L69)
