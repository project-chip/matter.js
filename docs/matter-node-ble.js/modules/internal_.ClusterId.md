[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](internal_.md) / ClusterId

# Namespace: ClusterId

[\<internal\>](internal_.md).ClusterId

## Table of contents

### Functions

- [buildVendorSpecific](internal_.ClusterId.md#buildvendorspecific)
- [isVendorSpecific](internal_.ClusterId.md#isvendorspecific)

## Functions

### buildVendorSpecific

▸ **buildVendorSpecific**(`vendorPrefix`, `clusterSuffix`): [`ClusterId`](internal_.md#clusterid)\<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `vendorPrefix` | [`VendorId`](internal_.md#vendorid) |
| `clusterSuffix` | `number` |

#### Returns

[`ClusterId`](internal_.md#clusterid)\<`number`\>

#### Defined in

matter.js/dist/esm/datatype/ClusterId.d.ts:19

___

### isVendorSpecific

▸ **isVendorSpecific**(`clusterId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clusterId` | [`ClusterId`](internal_.md#clusterid)\<`number`\> |

#### Returns

`boolean`

#### Defined in

matter.js/dist/esm/datatype/ClusterId.d.ts:18
