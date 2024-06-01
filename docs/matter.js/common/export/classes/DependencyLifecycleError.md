[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / DependencyLifecycleError

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

[packages/matter.js/src/common/Lifecycle.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L66)
