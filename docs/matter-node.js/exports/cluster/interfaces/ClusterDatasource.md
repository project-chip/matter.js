[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [exports/cluster](../README.md) / ClusterDatasource

# Interface: ClusterDatasource\<S\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](../../../storage/export/interfaces/Storage.md) | `any` |

## Properties

### eventHandler?

> `optional` `readonly` **eventHandler**: [`EventHandler`](../../interaction/classes/EventHandler.md)\<`S`\>

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:155

***

### version

> `readonly` **version**: `number`

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:154

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

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:157

***

### increaseVersion()

> **increaseVersion**(): `number`

#### Returns

`number`

#### Source

packages/matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:156
