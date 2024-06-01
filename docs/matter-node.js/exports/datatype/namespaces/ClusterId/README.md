[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/datatype](../../README.md) / ClusterId

# Namespace: ClusterId

## Functions

### buildVendorSpecific()

> **buildVendorSpecific**(`vendorPrefix`, `clusterSuffix`): [`ClusterId`](../../README.md#clusterid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorPrefix` | [`VendorId`](../../README.md#vendorid) |
| `clusterSuffix` | `number` |

#### Returns

[`ClusterId`](../../README.md#clusterid)

#### Source

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:20

***

### isValid()

> **isValid**(`clusterId`): `clusterId is ClusterId`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

`clusterId is ClusterId`

#### Source

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:19

***

### isVendorSpecific()

> **isVendorSpecific**(`clusterId`): `boolean`

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](../../README.md#clusterid) |

#### Returns

`boolean`

#### Source

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:18
