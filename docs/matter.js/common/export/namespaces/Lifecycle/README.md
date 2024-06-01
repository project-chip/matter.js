[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [common/export](../../README.md) / Lifecycle

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

[packages/matter.js/src/common/Lifecycle.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L28)

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

[packages/matter.js/src/common/Lifecycle.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/common/Lifecycle.ts#L33)
