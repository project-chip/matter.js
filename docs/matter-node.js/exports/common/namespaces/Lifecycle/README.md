[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/common](../../README.md) / Lifecycle

# Namespace: Lifecycle

## Index

### Enumerations

- [Status](enumerations/Status.md)

## Type Aliases

### Map\<T\>

> **Map**\<`T`\>: `Record`\<`T`, [`Status`](enumerations/Status.md)\>

Lifecycle status for multiple items.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* keyof `any` |

#### Source

packages/matter.js/dist/esm/common/Lifecycle.d.ts:24

## Functions

### assertActive()

> **assertActive**(`status`, `description`?): `void`

Assert subject is active.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `status` | [`Status`](enumerations/Status.md) |
| `description`? | `string` |

#### Returns

`void`

#### Source

packages/matter.js/dist/esm/common/Lifecycle.d.ts:28
