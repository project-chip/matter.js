[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [util/export](../README.md) / IndexedSet

# Interface: IndexedSet\<T\>

An interface for index set lookup.

## Type parameters

| Type parameter |
| :------ |
| `T` |

## Methods

### get()

> **get**\<`F`\>(`field`, `value`): `undefined` \| `T`

#### Type parameters

| Type parameter |
| :------ |
| `F` *extends* `string` \| `number` \| `symbol` |

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `field` | `F` |
| `value` | `T`\[`F`\] |

#### Returns

`undefined` \| `T`

#### Source

[packages/matter.js/src/util/Set.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/util/Set.ts#L39)
