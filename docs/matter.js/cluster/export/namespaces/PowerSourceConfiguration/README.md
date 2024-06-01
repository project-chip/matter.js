[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / PowerSourceConfiguration

# Namespace: PowerSourceConfiguration

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts#L51)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.sources

> `readonly` **sources**: [`Attribute`](../../interfaces/Attribute.md)\<[`EndpointNumber`](../../../../datatype/export/README.md#endpointnumber)[], `any`\>

This list shall contain the set of all power sources capable of participating in the power system of
this Node. Each entry in the list shall be the endpoint number of an endpoint having a Power Source
cluster, which corresponds to a physical power source. The endpoint number shall be unique within the
list.

The order of power sources on a Node is defined by the Order attribute of its associated Power Source
cluster provided on the endpoint. List entries shall be sorted in increasing order, that is, an entry
with a lower order shall have a lower index than any entry with a higher order. Multiple entries may
have the same order, there are no restrictions on their relative sorting.

###### See

MatterSpecification.v11.Core § 11.6.4.1

##### id

> `readonly` **id**: `46` = `0x2e`

##### name

> `readonly` **name**: `"PowerSourceConfiguration"` = `"PowerSourceConfiguration"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts#L20)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts:55](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/PowerSourceConfigurationCluster.ts#L55)
