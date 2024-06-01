[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [ConfigurationStruct](interfaces/ConfigurationStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:70

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.configurationList

> `readonly` **configurationList**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.

###### See

MatterSpecification.v11.Core § 9.15.14.5.1

##### id

> `readonly` **id**: `66`

##### name

> `readonly` **name**: `"ProxyConfiguration"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:47

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:73

***

### TlvConfigurationStruct

> `const` **TlvConfigurationStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

#### See

MatterSpecification.v11.Core § 9.15.14.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:25
