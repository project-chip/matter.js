[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](../modules/exports_common.md) / DestroyedDependencyError

# Class: DestroyedDependencyError

[exports/common](../modules/exports_common.md).DestroyedDependencyError

Thrown for actions that cannot be performed because a dependency has been destroyed.

## Hierarchy

- [`DependencyLifecycleError`](exports_common.DependencyLifecycleError.md)

  ↳ **`DestroyedDependencyError`**

## Table of contents

### Constructors

- [constructor](exports_common.DestroyedDependencyError.md#constructor)

## Constructors

### constructor

• **new DestroyedDependencyError**(`what`, `why`): [`DestroyedDependencyError`](exports_common.DestroyedDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`DestroyedDependencyError`](exports_common.DestroyedDependencyError.md)

#### Inherited from

[DependencyLifecycleError](exports_common.DependencyLifecycleError.md).[constructor](exports_common.DependencyLifecycleError.md#constructor)

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:34
