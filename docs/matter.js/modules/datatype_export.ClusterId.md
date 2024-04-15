[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [datatype/export](datatype_export.md) / ClusterId

# Namespace: ClusterId

[datatype/export](datatype_export.md).ClusterId

## Table of contents

### Functions

- [buildVendorSpecific](datatype_export.ClusterId.md#buildvendorspecific)
- [isVendorSpecific](datatype_export.ClusterId.md#isvendorspecific)

## Functions

### buildVendorSpecific

▸ **buildVendorSpecific**(`vendorPrefix`, `clusterSuffix`): [`ClusterId`](datatype_export.md#clusterid)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorPrefix` | [`VendorId`](datatype_export.md#vendorid) |
| `clusterSuffix` | `number` |

#### Returns

[`ClusterId`](datatype_export.md#clusterid)\<`number`\>

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/ClusterId.ts#L29)

___

### isVendorSpecific

▸ **isVendorSpecific**(`clusterId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](datatype_export.md#clusterid)\<`number`\> |

#### Returns

`boolean`

#### Defined in

[packages/matter.js/src/datatype/ClusterId.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/datatype/ClusterId.ts#L25)
