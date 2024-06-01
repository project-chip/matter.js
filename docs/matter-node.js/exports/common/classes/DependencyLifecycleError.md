[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/common](../README.md) / DependencyLifecycleError

# Class: DependencyLifecycleError

Base class for errors related to the lifecycle of a dependency.

## Extends

- [`ImplementationError`](ImplementationError.md)

## Extended by

- [`UnsupportedDependencyStatusError`](UnsupportedDependencyStatusError.md)
- [`UninitializedDependencyError`](UninitializedDependencyError.md)
- [`CrashedDependencyError`](CrashedDependencyError.md)
- [`DestroyedDependencyError`](DestroyedDependencyError.md)
- [`UnsupportedDependencyError`](UnsupportedDependencyError.md)

## Constructors

### new DependencyLifecycleError()

> **new DependencyLifecycleError**(`what`, `why`): [`DependencyLifecycleError`](DependencyLifecycleError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`DependencyLifecycleError`](DependencyLifecycleError.md)

#### Overrides

[`ImplementationError`](ImplementationError.md).[`constructor`](ImplementationError.md#constructors)

#### Source

packages/matter.js/dist/esm/common/Lifecycle.d.ts:34
