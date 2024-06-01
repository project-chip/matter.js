[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/datatype](exports_datatype.md) / ClusterId

# Namespace: ClusterId

[exports/datatype](exports_datatype.md).ClusterId

## Table of contents

### Functions

- [buildVendorSpecific](exports_datatype.ClusterId.md#buildvendorspecific)
- [isValid](exports_datatype.ClusterId.md#isvalid)
- [isVendorSpecific](exports_datatype.ClusterId.md#isvendorspecific)

## Functions

### buildVendorSpecific

▸ **buildVendorSpecific**(`vendorPrefix`, `clusterSuffix`): [`ClusterId`](exports_datatype.md#clusterid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorPrefix` | [`VendorId`](exports_datatype.md#vendorid) |
| `clusterSuffix` | `number` |

#### Returns

[`ClusterId`](exports_datatype.md#clusterid)

#### Defined in

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:20

___

### isValid

▸ **isValid**(`clusterId`): clusterId is ClusterId

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | `number` |

#### Returns

clusterId is ClusterId

#### Defined in

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:19

___

### isVendorSpecific

▸ **isVendorSpecific**(`clusterId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](exports_datatype.md#clusterid) |

#### Returns

`boolean`

#### Defined in

packages/matter.js/dist/esm/datatype/ClusterId.d.ts:18
