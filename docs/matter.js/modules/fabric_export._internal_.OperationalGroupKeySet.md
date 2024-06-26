[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [fabric/export](fabric_export.md) / [\<internal\>](fabric_export._internal_.md) / OperationalGroupKeySet

# Namespace: OperationalGroupKeySet

[fabric/export](fabric_export.md).[\<internal\>](fabric_export._internal_.md).OperationalGroupKeySet

## Table of contents

### Functions

- [asTlvGroupSet](fabric_export._internal_.OperationalGroupKeySet.md#astlvgroupset)

## Functions

### asTlvGroupSet

▸ **asTlvGroupSet**(`operationalGroupSet`): [`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `operationalGroupSet` | [`OperationalGroupKeySet`](fabric_export._internal_.md#operationalgroupkeyset) |

#### Returns

[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`OptionalFieldType`](../interfaces/tlv_export.OptionalFieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`number`\>  }\>

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:67](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/fabric/Fabric.ts#L67)
