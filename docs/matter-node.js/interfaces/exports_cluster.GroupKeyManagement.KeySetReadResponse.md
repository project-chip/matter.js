[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md) / KeySetReadResponse

# Interface: KeySetReadResponse

[exports/cluster](../modules/exports_cluster.md).[GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md).KeySetReadResponse

This command shall be generated in response to the KeySetRead command, if a valid Group Key Set was found. It
shall contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key
contents replaced by null.

**`See`**

MatterSpecification.v11.Core § 11.2.8.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvKeySetReadResponse`](../modules/exports_cluster.GroupKeyManagement.md#tlvkeysetreadresponse)\>

  ↳ **`KeySetReadResponse`**

## Table of contents

### Properties

- [groupKeySet](exports_cluster.GroupKeyManagement.KeySetReadResponse.md#groupkeyset)

## Properties

### groupKeySet

• **groupKeySet**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `epochKey0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochKey2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `Uint8Array`\> ; `epochStartTime0`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime1`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `epochStartTime2`: [`FieldType`](exports_tlv.FieldType.md)\<``null`` \| `number` \| `bigint`\> ; `groupKeyMulticastPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeyMulticastPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeyMulticastPolicy.md)\> ; `groupKeySecurityPolicy`: [`FieldType`](exports_tlv.FieldType.md)\<[`GroupKeySecurityPolicy`](../enums/exports_cluster.GroupKeyManagement.GroupKeySecurityPolicy.md)\> ; `groupKeySetId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>

#### Inherited from

TypeFromSchema.groupKeySet

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:292
