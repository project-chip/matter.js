[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / PowerSourceConfiguration

# Namespace: PowerSourceConfiguration

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceConfigurationCluster.d.ts:43

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.sources

> `readonly` **sources**: [`Attribute`](../../interfaces/Attribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/datatype/EndpointNumber"`](../../-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_datatype_EndpointNumber/README.md)[], `any`\>

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

> `readonly` **id**: `46`

##### name

> `readonly` **name**: `"PowerSourceConfiguration"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceConfigurationCluster.d.ts:14

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/PowerSourceConfigurationCluster.d.ts:46
