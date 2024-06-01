[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ClusterDatasource

# Interface: ClusterDatasource\<S\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](../../../storage/export/interfaces/Storage.md) | `any` |

## Properties

### eventHandler?

> `optional` `readonly` **eventHandler**: [`EventHandler`](../../../protocol/interaction/export/classes/EventHandler.md)\<`S`\>

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:264](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L264)

***

### version

> `readonly` **version**: `number`

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:263](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L263)

## Methods

### changed()

> **changed**(`key`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../../../storage/export/README.md#supportedstoragetypes) |

#### Returns

`void`

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:266](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L266)

***

### increaseVersion()

> **increaseVersion**(): `number`

#### Returns

`number`

#### Source

[packages/matter.js/src/cluster/server/ClusterServerTypes.ts:265](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/server/ClusterServerTypes.ts#L265)
