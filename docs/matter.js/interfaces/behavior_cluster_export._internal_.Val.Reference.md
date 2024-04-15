[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / [Val](../modules/behavior_cluster_export._internal_.Val.md) / Reference

# Interface: Reference\<T\>

[\<internal\>](../modules/behavior_cluster_export._internal_.md).[Val](../modules/behavior_cluster_export._internal_.Val.md).Reference

A Reference offers a simple mechanism for referring to properties by reference.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Val`](../modules/behavior_cluster_export._internal_.md#val) = [`Val`](../modules/behavior_cluster_export._internal_.md#val) |

## Table of contents

### Properties

- [expired](behavior_cluster_export._internal_.Val.Reference.md#expired)
- [location](behavior_cluster_export._internal_.Val.Reference.md#location)
- [original](behavior_cluster_export._internal_.Val.Reference.md#original)
- [owner](behavior_cluster_export._internal_.Val.Reference.md#owner)
- [rootOwner](behavior_cluster_export._internal_.Val.Reference.md#rootowner)
- [subrefs](behavior_cluster_export._internal_.Val.Reference.md#subrefs)
- [value](behavior_cluster_export._internal_.Val.Reference.md#value)

### Methods

- [change](behavior_cluster_export._internal_.Val.Reference.md#change)
- [refresh](behavior_cluster_export._internal_.Val.Reference.md#refresh)

## Properties

### expired

• `Readonly` **expired**: `boolean`

When true, the reference is no longer usable because the owning context has exited.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:48](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L48)

___

### location

• **location**: [`Location`](behavior_export.AccessControl.Location.md)

Diagnostic path to the referenced value.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:53](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L53)

___

### original

• `Readonly` **original**: `T`

The current canonical value of the referenced property.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:43](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L43)

___

### owner

• `Optional` **owner**: `T`

The managed value that owns the reference.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L78)

___

### rootOwner

• `Optional` **rootOwner**: `any`

The object that owns the root managed value.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:83](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L83)

___

### subrefs

• `Optional` **subrefs**: `Record`\<`string` \| `number`, [`Reference`](behavior_cluster_export._internal_.Val.Reference.md)\<`unknown`\>\>

Active references to child properties.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L58)

___

### value

• **value**: `T`

The current value of the referenced property.  Cleared when the reference is no longer functional.

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L38)

## Methods

### change

▸ **change**(`mutator`): `void`

Mutates data.  Clones the container and updates metadata when called on an unmodified transactional
reference.

Then runs the specified mutator to make the actual changes.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mutator` | () => `void` | the mutation logic, may freely modify [value](behavior_cluster_export._internal_.Val.Reference.md#value) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:68](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L68)

___

### refresh

▸ **refresh**(): `void`

Refresh any internal cache from the referenced container.

#### Returns

`void`

#### Defined in

[packages/matter.js/src/behavior/state/Val.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/behavior/state/Val.ts#L73)
