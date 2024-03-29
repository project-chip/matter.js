[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ClusterDatasource

# Interface: ClusterDatasource\<S\>

[\<internal\>](../modules/internal_.md).ClusterDatasource

## Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends [`Storage`](internal_.Storage.md) = `any` |

## Table of contents

### Properties

- [eventHandler](internal_.ClusterDatasource-1.md#eventhandler)
- [version](internal_.ClusterDatasource-1.md#version)

### Methods

- [changed](internal_.ClusterDatasource-1.md#changed)
- [increaseVersion](internal_.ClusterDatasource-1.md#increaseversion)

## Properties

### eventHandler

• `Optional` `Readonly` **eventHandler**: [`EventHandler`](../classes/internal_.EventHandler.md)\<`S`\>

#### Defined in

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:155

___

### version

• `Readonly` **version**: `number`

#### Defined in

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:154

## Methods

### changed

▸ **changed**(`key`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../modules/internal_.md#supportedstoragetypes) |

#### Returns

`void`

#### Defined in

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:157

___

### increaseVersion

▸ **increaseVersion**(): `number`

#### Returns

`number`

#### Defined in

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:156
