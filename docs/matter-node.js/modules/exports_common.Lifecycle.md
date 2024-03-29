[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/common](exports_common.md) / Lifecycle

# Namespace: Lifecycle

[exports/common](exports_common.md).Lifecycle

## Table of contents

### Enumerations

- [Status](../enums/exports_common.Lifecycle.Status.md)

### Type Aliases

- [Map](exports_common.Lifecycle.md#map)

### Functions

- [assertActive](exports_common.Lifecycle.md#assertactive)

## Type Aliases

### Map

Ƭ **Map**\<`T`\>: `Record`\<`T`, [`Status`](../enums/exports_common.Lifecycle.Status.md)\>

Lifecycle status for multiple items.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof `any` |

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:24

## Functions

### assertActive

▸ **assertActive**(`status`, `description?`): `void`

Assert subject is active.

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | [`Status`](../enums/exports_common.Lifecycle.Status.md) |
| `description?` | `string` |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/common/Lifecycle.d.ts:28
