[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ClusterDatasource

# Interface: ClusterDatasource\<S\>

[exports/cluster](../modules/exports_cluster.md).ClusterDatasource

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](storage_export.Storage.md) = `any` |

## Table of contents

### Properties

- [eventHandler](exports_cluster.ClusterDatasource-1.md#eventhandler)
- [version](exports_cluster.ClusterDatasource-1.md#version)

### Methods

- [changed](exports_cluster.ClusterDatasource-1.md#changed)
- [increaseVersion](exports_cluster.ClusterDatasource-1.md#increaseversion)

## Properties

### eventHandler

• `Optional` `Readonly` **eventHandler**: [`EventHandler`](../classes/exports_interaction.EventHandler.md)\<`S`\>

#### Defined in

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:155

___

### version

• `Readonly` **version**: `number`

#### Defined in

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:154

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

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:157

___

### increaseVersion

▸ **increaseVersion**(): `number`

#### Returns

`number`

#### Defined in

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:156
