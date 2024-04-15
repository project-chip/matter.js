[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [behavior/cluster/export](../modules/behavior_cluster_export.md) / [\<internal\>](../modules/behavior_cluster_export._internal_.md) / DataModelPath

# Interface: DataModelPath

[behavior/cluster/export](../modules/behavior_cluster_export.md).[\<internal\>](../modules/behavior_cluster_export._internal_.md).DataModelPath

Utility for tracking location in the Matter data model used for diagnostics.

The path consists of a sequence of IDs, optionally with type information.

## Table of contents

### Constructors

- [constructor](behavior_cluster_export._internal_.DataModelPath.md#constructor)

### Properties

- [id](behavior_cluster_export._internal_.DataModelPath.md#id)
- [parent](behavior_cluster_export._internal_.DataModelPath.md#parent)
- [type](behavior_cluster_export._internal_.DataModelPath.md#type)

### Methods

- [at](behavior_cluster_export._internal_.DataModelPath.md#at)
- [toArray](behavior_cluster_export._internal_.DataModelPath.md#toarray)
- [toString](behavior_cluster_export._internal_.DataModelPath.md#tostring)

## Constructors

### constructor

• **constructor**: `Object`

## Properties

### id

• **id**: `string` \| `number`

#### Defined in

[packages/matter.js/src/endpoint/DataModelPath.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/DataModelPath.ts#L15)

___

### parent

• `Optional` **parent**: [`DataModelPath`](behavior_cluster_export._internal_.DataModelPath.md)

#### Defined in

[packages/matter.js/src/endpoint/DataModelPath.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/DataModelPath.ts#L13)

___

### type

• `Optional` **type**: `string`

#### Defined in

[packages/matter.js/src/endpoint/DataModelPath.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/DataModelPath.ts#L17)

## Methods

### at

▸ **at**(`name`, `type?`): [`DataModelPath`](behavior_cluster_export._internal_.DataModelPath.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` \| `number` |
| `type?` | `string` |

#### Returns

[`DataModelPath`](behavior_cluster_export._internal_.DataModelPath.md)

#### Defined in

[packages/matter.js/src/endpoint/DataModelPath.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/DataModelPath.ts#L19)

___

### toArray

▸ **toArray**(): (`string` \| `number`)[]

#### Returns

(`string` \| `number`)[]

#### Defined in

[packages/matter.js/src/endpoint/DataModelPath.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/DataModelPath.ts#L23)

___

### toString

▸ **toString**(`includeType?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `includeType?` | `boolean` |

#### Returns

`string`

#### Defined in

[packages/matter.js/src/endpoint/DataModelPath.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/endpoint/DataModelPath.ts#L21)
