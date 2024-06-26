[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / UnsupportedDependencyError

# Class: UnsupportedDependencyError

[common/export](../modules/common_export.md).UnsupportedDependencyError

Thrown for actions that cannot be performed because a dependency is not supported.

## Hierarchy

- [`DependencyLifecycleError`](common_export.DependencyLifecycleError.md)

  ↳ **`UnsupportedDependencyError`**

## Table of contents

### Constructors

- [constructor](common_export.UnsupportedDependencyError.md#constructor)

## Constructors

### constructor

• **new UnsupportedDependencyError**(`what`, `why`): [`UnsupportedDependencyError`](common_export.UnsupportedDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`UnsupportedDependencyError`](common_export.UnsupportedDependencyError.md)

#### Inherited from

[DependencyLifecycleError](common_export.DependencyLifecycleError.md).[constructor](common_export.DependencyLifecycleError.md#constructor)

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:66](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/common/Lifecycle.ts#L66)
