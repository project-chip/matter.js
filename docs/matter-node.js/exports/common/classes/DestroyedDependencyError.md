[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / DestroyedDependencyError

# Class: DestroyedDependencyError

Thrown for actions that cannot be performed because a dependency has been destroyed.

## Extends

- [`DependencyLifecycleError`](DependencyLifecycleError.md)

## Constructors

### new DestroyedDependencyError()

> **new DestroyedDependencyError**(`what`, `why`): [`DestroyedDependencyError`](DestroyedDependencyError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`DestroyedDependencyError`](DestroyedDependencyError.md)

#### Inherited from

[`DependencyLifecycleError`](DependencyLifecycleError.md).[`constructor`](DependencyLifecycleError.md#constructors)

#### Source

packages/matter.js/dist/esm/common/Lifecycle.d.ts:34
