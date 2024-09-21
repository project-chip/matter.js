[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [datatype/export](datatype_export.md) / ClusterId

# Namespace: ClusterId

[datatype/export](datatype_export.md).ClusterId

## Table of contents

### Functions

- [buildVendorSpecific](datatype_export.ClusterId.md#buildvendorspecific)
- [isValid](datatype_export.ClusterId.md#isvalid)
- [isVendorSpecific](datatype_export.ClusterId.md#isvendorspecific)

## Functions

### buildVendorSpecific

▸ **buildVendorSpecific**(`vendorPrefix`, `clusterSuffix`): [`ClusterId`](datatype_export.md#clusterid)

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorPrefix` | [`VendorId`](datatype_export.md#vendorid) |
| `clusterSuffix` | `number` |

#### Returns

[`ClusterId`](datatype_export.md#clusterid)

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:60](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/ClusterId.ts#L60)

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

[packages/matter.js/src/datatype/ClusterId.ts:49](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/ClusterId.ts#L49)

___

### isVendorSpecific

▸ **isVendorSpecific**(`clusterId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](datatype_export.md#clusterid) |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:38](https://github.com/project-chip/matter.js/blob/0c058ae17fdba4c0b89b8b13c309011d51782299/packages/matter.js/src/datatype/ClusterId.ts#L38)
