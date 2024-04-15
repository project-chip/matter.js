[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / UninitializedDependencyError

# Class: UninitializedDependencyError

[common/export](../modules/common_export.md).UninitializedDependencyError

Thrown for actions that cannot be performed until further initialization occurs.

## Hierarchy

- [`DependencyLifecycleError`](common_export.DependencyLifecycleError.md)

  ↳ **`UninitializedDependencyError`**

## Table of contents

### Constructors

- [constructor](common_export.UninitializedDependencyError.md#constructor)

## Constructors

### constructor

• **new UninitializedDependencyError**(`what`, `why`): [`UninitializedDependencyError`](common_export.UninitializedDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`UninitializedDependencyError`](common_export.UninitializedDependencyError.md)

#### Inherited from

[DependencyLifecycleError](common_export.DependencyLifecycleError.md).[constructor](common_export.DependencyLifecycleError.md#constructor)

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L66)
