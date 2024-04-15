[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ClusterDatasource

# Interface: ClusterDatasource\<S\>

[cluster/export](../modules/cluster_export.md).ClusterDatasource

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](storage_export.Storage.md) = `any` |

## Table of contents

### Properties

- [eventHandler](cluster_export.ClusterDatasource-1.md#eventhandler)
- [version](cluster_export.ClusterDatasource-1.md#version)

### Methods

- [changed](cluster_export.ClusterDatasource-1.md#changed)
- [increaseVersion](cluster_export.ClusterDatasource-1.md#increaseversion)

## Properties

### eventHandler

• `Optional` `Readonly` **eventHandler**: [`EventHandler`](../classes/protocol_interaction_export.EventHandler.md)\<`S`\>

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:264](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L264)

___

### version

• `Readonly` **version**: `number`

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:263](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L263)

## Methods

### changed

▸ **changed**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/storage_export.md#supportedstoragetypes) |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:266](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L266)

___

### increaseVersion

▸ **increaseVersion**(): `number`

#### Returns

`number`

#### Defined in

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:265](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L265)
