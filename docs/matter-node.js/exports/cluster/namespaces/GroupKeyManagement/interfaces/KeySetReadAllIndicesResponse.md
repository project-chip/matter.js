[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GroupKeyManagement](../README.md) / KeySetReadAllIndicesResponse

# Interface: KeySetReadAllIndicesResponse

This command shall be generated in response to KeySetReadAllIndices and it shall contain the list of
GroupKeySetID for all Group Key Sets associated with the scoped Fabric.

GroupKeySetIDs

This field references the set of group keys that generate operational group keys for use with the accessing
fabric.

Each entry in GroupKeySetIDs is a GroupKeySetID field.

## See

MatterSpecification.v11.Core § 11.2.8.6

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvKeySetReadAllIndicesResponse`](../README.md#tlvkeysetreadallindicesresponse)\>

## Properties

### groupKeySetIDs

> **groupKeySetIDs**: `number`[]

#### Inherited from

`TypeFromSchema.groupKeySetIDs`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GroupKeyManagementCluster.d.ts:413
