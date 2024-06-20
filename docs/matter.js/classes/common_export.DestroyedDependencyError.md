[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / DestroyedDependencyError

# Class: DestroyedDependencyError

[common/export](../modules/common_export.md).DestroyedDependencyError

Thrown for actions that cannot be performed because a dependency has been destroyed.

## Hierarchy

- [`DependencyLifecycleError`](common_export.DependencyLifecycleError.md)

  ↳ **`DestroyedDependencyError`**

## Table of contents

### Constructors

- [constructor](common_export.DestroyedDependencyError.md#constructor)

## Constructors

### constructor

• **new DestroyedDependencyError**(`what`, `why`): [`DestroyedDependencyError`](common_export.DestroyedDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`DestroyedDependencyError`](common_export.DestroyedDependencyError.md)

#### Inherited from

[DependencyLifecycleError](common_export.DependencyLifecycleError.md).[constructor](common_export.DependencyLifecycleError.md#constructor)

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:66](https://github.com/project-chip/matter.js/blob/6d3b6a5d957d88a9231d6ecab4bb41f8133112be/packages/matter.js/src/common/Lifecycle.ts#L66)
