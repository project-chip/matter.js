[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](../modules/common_export.md) / CrashedDependencyError

# Class: CrashedDependencyError

[common/export](../modules/common_export.md).CrashedDependencyError

Thrown for actions that cannot be performed because dependency crashed.

## Hierarchy

- [`DependencyLifecycleError`](common_export.DependencyLifecycleError.md)

  ↳ **`CrashedDependencyError`**

## Table of contents

### Constructors

- [constructor](common_export.CrashedDependencyError.md#constructor)

## Constructors

### constructor

• **new CrashedDependencyError**(`what`, `why`): [`CrashedDependencyError`](common_export.CrashedDependencyError.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`CrashedDependencyError`](common_export.CrashedDependencyError.md)

#### Inherited from

[DependencyLifecycleError](common_export.DependencyLifecycleError.md).[constructor](common_export.DependencyLifecycleError.md#constructor)

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:66](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L66)
