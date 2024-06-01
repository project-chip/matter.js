[**@project-chip/matter-node-ble.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node-ble.js](../../../globals.md) / [\<internal\>](../../README.md) / ClusterId

# Namespace: ClusterId

## Functions

### buildVendorSpecific()

> **buildVendorSpecific**(`vendorPrefix`, `clusterSuffix`): [`ClusterId`](../../README.md#clusterid)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `vendorPrefix` | [`VendorId`](../../README.md#vendorid-1) |
| `clusterSuffix` | `number` |

#### Returns

[`ClusterId`](../../README.md#clusterid)

#### Source

matter.js/dist/esm/datatype/ClusterId.d.ts:20

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

matter.js/dist/esm/datatype/ClusterId.d.ts:19

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

matter.js/dist/esm/datatype/ClusterId.d.ts:18
