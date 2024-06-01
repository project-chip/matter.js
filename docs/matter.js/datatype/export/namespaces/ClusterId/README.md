[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [datatype/export](../../README.md) / ClusterId

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

[packages/matter.js/src/datatype/ClusterId.ts:60](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/ClusterId.ts#L60)

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

[packages/matter.js/src/datatype/ClusterId.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/ClusterId.ts#L49)

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

[packages/matter.js/src/datatype/ClusterId.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/datatype/ClusterId.ts#L38)
