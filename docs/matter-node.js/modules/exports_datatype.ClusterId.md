[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](exports_datatype.md) / ClusterId

# Namespace: ClusterId

[exports/datatype](exports_datatype.md).ClusterId

## Table of contents

### Functions

- [buildVendorSpecific](exports_datatype.ClusterId.md#buildvendorspecific)
- [isVendorSpecific](exports_datatype.ClusterId.md#isvendorspecific)

## Functions

### buildVendorSpecific

▸ **buildVendorSpecific**(`vendorPrefix`, `clusterSuffix`): [`ClusterId`](exports_datatype.md#clusterid)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorPrefix` | [`VendorId`](exports_datatype.md#vendorid) |
| `clusterSuffix` | `number` |

#### Returns

[`ClusterId`](exports_datatype.md#clusterid)\<`number`\>

#### Defined in

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:19

___

### isVendorSpecific

▸ **isVendorSpecific**(`clusterId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](exports_datatype.md#clusterid)\<`number`\> |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:18
