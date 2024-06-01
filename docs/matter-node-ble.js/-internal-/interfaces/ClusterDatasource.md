[**@project-chip/matter-node-ble.js**](../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../globals.md) / [\<internal\>](../README.md) / ClusterDatasource

# Interface: ClusterDatasource\<S\>

## Type parameters

| Type parameter | Value |
| :------ | :------ |
| `S` *extends* [`Storage`](Storage.md) | `any` |

## Properties

### eventHandler?

> `optional` `readonly` **eventHandler**: [`EventHandler`](../classes/EventHandler.md)\<`S`\>

#### Source

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:155

***

### version

> `readonly` **version**: `number`

#### Source

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:154

## Methods

### changed()

> **changed**(`key`, `value`): `void`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | [`SupportedStorageTypes`](../README.md#supportedstoragetypes) |

#### Returns

`void`

#### Source

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:157

***

### increaseVersion()

> **increaseVersion**(): `number`

#### Returns

`number`

#### Source

matter.js/dist/esm/cluster/server/ClusterServerTypes.d.ts:156
