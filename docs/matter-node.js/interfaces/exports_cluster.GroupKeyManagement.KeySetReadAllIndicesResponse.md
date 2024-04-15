[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md) / KeySetReadAllIndicesResponse

# Interface: KeySetReadAllIndicesResponse

[exports/cluster](../modules/exports_cluster.md).[GroupKeyManagement](../modules/exports_cluster.GroupKeyManagement.md).KeySetReadAllIndicesResponse

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

**`See`**

MatterSpecification.v11.Core § 11.2.8.6

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvKeySetReadAllIndicesResponse`](../modules/exports_cluster.GroupKeyManagement.md#tlvkeysetreadallindicesresponse)\>

  ↳ **`KeySetReadAllIndicesResponse`**

## Table of contents

### Properties

- [groupKeySetIDs](exports_cluster.GroupKeyManagement.KeySetReadAllIndicesResponse.md#groupkeysetids)

## Properties

### groupKeySetIDs

• **groupKeySetIDs**: `number`[]

#### Inherited from

TypeFromSchema.groupKeySetIDs

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:400
