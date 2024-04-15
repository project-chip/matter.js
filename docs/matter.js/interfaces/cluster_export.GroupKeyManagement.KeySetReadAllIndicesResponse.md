[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md) / KeySetReadAllIndicesResponse

# Interface: KeySetReadAllIndicesResponse

[cluster/export](../modules/cluster_export.md).[GroupKeyManagement](../modules/cluster_export.GroupKeyManagement.md).KeySetReadAllIndicesResponse

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

**`See`**

MatterSpecification.v11.Core § 11.2.8.6

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvKeySetReadAllIndicesResponse`](../modules/cluster_export.GroupKeyManagement.md#tlvkeysetreadallindicesresponse)\>

  ↳ **`KeySetReadAllIndicesResponse`**

## Table of contents

### Properties

- [groupKeySetIDs](cluster_export.GroupKeyManagement.KeySetReadAllIndicesResponse.md#groupkeysetids)

## Properties

### groupKeySetIDs

• **groupKeySetIDs**: `number`[]

#### Inherited from

TypeFromSchema.groupKeySetIDs

#### Defined in

[packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts:299](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/GroupKeyManagementCluster.ts#L299)
