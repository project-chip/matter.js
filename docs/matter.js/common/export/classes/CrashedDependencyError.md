[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [common/export](../README.md) / CrashedDependencyError

# Class: CrashedDependencyError

Thrown for actions that cannot be performed because dependency crashed.

## Extends

- [`DependencyLifecycleError`](DependencyLifecycleError.md)

## Constructors

### new CrashedDependencyError()

> **new CrashedDependencyError**(`what`, `why`): [`CrashedDependencyError`](CrashedDependencyError.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `what` | `string` |
| `why` | `string` |

#### Returns

[`CrashedDependencyError`](CrashedDependencyError.md)

#### Inherited from

[`DependencyLifecycleError`](DependencyLifecycleError.md).[`constructor`](DependencyLifecycleError.md#constructors)

#### Source

[packages/matter.js/src/common/Lifecycle.ts:66](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L66)
