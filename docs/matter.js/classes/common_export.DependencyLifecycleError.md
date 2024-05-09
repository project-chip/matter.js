[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / DependencyLifecycleError

# Class: DependencyLifecycleError

[common/export](../modules/common_export.md).DependencyLifecycleError

Base class for errors related to the lifecycle of a dependency.

## Hierarchy

- [`ImplementationError`](common_export.ImplementationError.md)

  ↳ **`DependencyLifecycleError`**

  ↳↳ [`UnsupportedDependencyStatusError`](common_export.UnsupportedDependencyStatusError.md)

  ↳↳ [`UninitializedDependencyError`](common_export.UninitializedDependencyError.md)

  ↳↳ [`CrashedDependencyError`](common_export.CrashedDependencyError.md)

  ↳↳ [`DestroyedDependencyError`](common_export.DestroyedDependencyError.md)

  ↳↳ [`UnsupportedDependencyError`](common_export.UnsupportedDependencyError.md)

## Table of contents

### Constructors

- [constructor](common_export.DependencyLifecycleError.md#constructor)

## Constructors

### constructor

• **new DependencyLifecycleError**(`what`, `why`): [`DependencyLifecycleError`](common_export.DependencyLifecycleError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`DependencyLifecycleError`](common_export.DependencyLifecycleError.md)

#### Overrides

[ImplementationError](common_export.ImplementationError.md).[constructor](common_export.ImplementationError.md#constructor)

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L66)
