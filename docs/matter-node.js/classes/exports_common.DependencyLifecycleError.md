[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / DependencyLifecycleError

# Class: DependencyLifecycleError

[exports/common](../modules/exports_common.md).DependencyLifecycleError

Base class for errors related to the lifecycle of a dependency.

## Hierarchy

- [`ImplementationError`](exports_common.ImplementationError.md)

  ↳ **`DependencyLifecycleError`**

  ↳↳ [`UnsupportedDependencyStatusError`](exports_common.UnsupportedDependencyStatusError.md)

  ↳↳ [`UninitializedDependencyError`](exports_common.UninitializedDependencyError.md)

  ↳↳ [`CrashedDependencyError`](exports_common.CrashedDependencyError.md)

  ↳↳ [`DestroyedDependencyError`](exports_common.DestroyedDependencyError.md)

  ↳↳ [`UnsupportedDependencyError`](exports_common.UnsupportedDependencyError.md)

## Table of contents

### Constructors

- [constructor](exports_common.DependencyLifecycleError.md#constructor)

## Constructors

### constructor

• **new DependencyLifecycleError**(`what`, `why`): [`DependencyLifecycleError`](exports_common.DependencyLifecycleError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`DependencyLifecycleError`](exports_common.DependencyLifecycleError.md)

#### Overrides

[ImplementationError](exports_common.ImplementationError.md).[constructor](exports_common.ImplementationError.md#constructor)

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:34
