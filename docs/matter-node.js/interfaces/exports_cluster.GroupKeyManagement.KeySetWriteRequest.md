[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md) / KeySetWriteRequest

# Interface: KeySetWriteRequest

[exports/cluster](../modules/exports_cluster.md).[GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md).KeySetWriteRequest

Input to the GroupKeyManagement keySetWrite command

**`See`**

MatterSpecification.v11.Core § 11.2.8.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvKeySetWriteRequest`](../modules/exports_cluster.GroupKeyManagement.md#tlvkeysetwriterequest)\>

  ↳ **`KeySetWriteRequest`**

## Table of contents

### Properties

- [groupKeySet](exports_cluster.GroupKeyManagement.KeySetWriteRequest.md#groupkeyset)

## Properties

### groupKeySet

• **groupKeySet**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>

#### Inherited from

TypeFromSchema.groupKeySet

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:192
