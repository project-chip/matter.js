[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / UserLabel

# Namespace: UserLabel

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/UserLabelCluster.d.ts:38

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.labelList

> `readonly` **labelList**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

An implementation shall support at least 4 list entries per node for all User Label cluster instances on
the node.

###### See

MatterSpecification.v11.Core § 9.9.4.1

##### id

> `readonly` **id**: `65`

##### name

> `readonly` **name**: `"UserLabel"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/UserLabelCluster.d.ts:14

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/UserLabelCluster.d.ts:41
