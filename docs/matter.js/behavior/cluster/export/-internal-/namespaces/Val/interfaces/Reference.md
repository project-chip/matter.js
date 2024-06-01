[**@project-chip/matter.js**](../../../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../../../modules.md) / [behavior/cluster/export](../../../../README.md) / [\<internal\>](../../../README.md) / [Val](../README.md) / Reference

# Interface: Reference\<T\>

A Reference offers a simple mechanism for referring to properties by reference.

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `T` *extends* [`Val`](../../../README.md#val) | [`Val`](../../../README.md#val) |

## Properties

### expired

> `readonly` **expired**: `boolean`

When true, the reference is no longer usable because the owning context has exited.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L48)

***

### location

> **location**: [`Location`](../../../../../../export/namespaces/AccessControl/interfaces/Location.md)

Diagnostic path to the referenced value.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L53)

***

### original

> `readonly` **original**: `T`

The current canonical value of the referenced property.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L43)

***

### owner?

> `optional` **owner**: `T`

The managed value that owns the reference.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:78](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L78)

***

### rootOwner?

> `optional` **rootOwner**: `any`

The object that owns the root managed value.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:83](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L83)

***

### subrefs?

> `optional` **subrefs**: `Record`\<`string` \| `number`, [`Reference`](Reference.md)\<`unknown`\>\>

Active references to child properties.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:58](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L58)

***

### value

> **value**: `T`

The current value of the referenced property.  Cleared when the reference is no longer functional.

#### Source

[packages/matter.js/src/behavior/state/Val.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L38)

## Methods

### change()

> **change**(`mutator`): `void`

Mutates data.  Clones the container and updates metadata when called on an unmodified transactional
reference.

Then runs the specified mutator to make the actual changes.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `mutator` | () => `void` | the mutation logic, may freely modify [value](Reference.md#value) |

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/Val.ts:68](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L68)

***

### refresh()

> **refresh**(): `void`

Refresh any internal cache from the referenced container.

#### Returns

`void`

#### Source

[packages/matter.js/src/behavior/state/Val.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/behavior/state/Val.ts#L73)
