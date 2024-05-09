[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / behavior/export

# Module: behavior/export

## Table of contents

### Modules

- [\<internal\>](behavior_export._internal_.md)

### Namespaces

- [AccessControl](behavior_export.AccessControl.md)
- [Behavior](behavior_export.Behavior.md)
- [Reactor](behavior_export.Reactor.md)

### Classes

- [Behavior](../classes/behavior_export.Behavior-1.md)

### Interfaces

- [AccessControl](../interfaces/behavior_export.AccessControl-1.md)

### Type Aliases

- [Reactor](behavior_export.md#reactor)

### Functions

- [AccessControl](behavior_export.md#accesscontrol)

## Type Aliases

### Reactor

Ƭ **Reactor**\<`T`, `R`\>: (...`args`: `T`) => [`MaybePromise`](util_export.md#maybepromise)\<`R`\>

A reactor is an [Observer](util_export.md#observer) managed by a [Behavior](../classes/behavior_export.Behavior-1.md).  You install reactors using [Behavior.reactTo](../classes/behavior_export.Behavior-1.md#reactto)
on the behavior that receives the event.

A reactor is similar to a normal handler installed with [Observable.on](../interfaces/util_export.Observable.md#on).  It provides several benefits over
installing an observer directly:

  - The behavior uninstalls reactor when the [Endpoint](../classes/endpoint_export.Endpoint-1.md) is destroyed

  - If reactor is asynchronous, the behavior tracks the resulting promise.  It provides error handling and
    ensures the promise completes before [Endpoint](../classes/endpoint_export.Endpoint-1.md) destruction

  - The behavior ensures reactors run serially even if they are asynchronous

  - Matter.js manages the context in which the reactor runs automatically, either joining the emitter's context or
    creating a dedicated offline context

  - Matter.js ensures that reactor only registers with [Observable](util_export.md#observable) once for a given [Endpoint](../classes/endpoint_export.Endpoint-1.md)

  - You may optionally designate resources (including [Behavior](../classes/behavior_export.Behavior-1.md)s) for locking prior to reaction

You should not use arrow functions for reactors as this will prevent you from accessing the Behavior in the correct
context.

If observable is a high-volume emitter, it would be better to implement synchronous or very fast asynchronous
reactors to avoid accumulating too many deferred reactions.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `any`[] = `any`[] |
| `R` | `any` |

#### Type declaration

▸ (`...args`): [`MaybePromise`](util_export.md#maybepromise)\<`R`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `T` |

##### Returns

[`MaybePromise`](util_export.md#maybepromise)\<`R`\>

#### Defined in

[packages/matter.js/src/behavior/Reactor.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Reactor.ts#L40)

[packages/matter.js/src/behavior/Reactor.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/Reactor.ts#L42)

## Functions

### AccessControl

▸ **AccessControl**(`schema`): [`AccessControl`](../interfaces/behavior_export.AccessControl-1.md)

Obtain an enforcer for specific schema.

This is central to security.  Implementation is explicit, all objects are involved are frozen and cache is stored as
module-private.

Pure function; returned value is cached.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schema` | [`Schema`](behavior_cluster_export._internal_.md#schema) |

#### Returns

[`AccessControl`](../interfaces/behavior_export.AccessControl-1.md)

#### Defined in

[packages/matter.js/src/behavior/AccessControl.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/AccessControl.ts#L69)
