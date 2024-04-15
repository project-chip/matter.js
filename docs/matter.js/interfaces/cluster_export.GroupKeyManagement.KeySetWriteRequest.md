[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / KeySetWriteRequest

# Interface: KeySetWriteRequest

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).KeySetWriteRequest

Input to the GroupKeyManagement keySetWrite command

**`See`**

MatterSpecification.v11.Core § 11.2.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvKeySetWriteRequest`](../modules/cluster_export.GroupKeyManagement.md#tlvkeysetwriterequest)\>

  ↳ **`KeySetWriteRequest`**

## Table of contents

### Properties

- [groupKeySet](cluster_export.GroupKeyManagement.KeySetWriteRequest.md#groupkeyset)

## Properties

### groupKeySet

• **groupKeySet**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](tlv_export.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](tlv_export.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/cluster_export.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

#### Inherited from

TypeFromSchema.groupKeySet

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L231)
