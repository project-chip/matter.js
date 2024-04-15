[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [common/export](common_export.md) / Lifecycle

# Namespace: Lifecycle

[common/export](common_export.md).Lifecycle

## Table of contents

### Enumerations

- [Status](../enums/common_export.Lifecycle.Status.md)

### Type Aliases

- [Map](common_export.Lifecycle.md#map)

### Functions

- [assertActive](common_export.Lifecycle.md#assertactive)

## Type Aliases

### Map

Ƭ **Map**\<`T`\>: `Record`\<`T`, [`Status`](../enums/common_export.Lifecycle.Status.md)\>

Lifecycle status for multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `any` |

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L28)

## Functions

### assertActive

▸ **assertActive**(`status`, `description?`): `void`

Assert subject is active.

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`Status`](../enums/common_export.Lifecycle.Status.md) |
| `description?` | `string` |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/common/Lifecycle.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/common/Lifecycle.ts#L33)
