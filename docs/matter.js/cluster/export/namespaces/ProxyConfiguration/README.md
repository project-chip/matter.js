[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [ConfigurationStruct](interfaces/ConfigurationStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:82](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L82)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.configurationList

> `readonly` **configurationList**: [`WritableAttribute`](../../interfaces/WritableAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.

###### See

MatterSpecification.v11.Core § 9.15.14.5.1

##### id

> `readonly` **id**: `66` = `0x42`

##### name

> `readonly` **name**: `"ProxyConfiguration"` = `"ProxyConfiguration"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:56](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L56)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L85)

***

### TlvConfigurationStruct

> `const` **TlvConfigurationStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

#### See

MatterSpecification.v11.Core § 9.15.14.4.1

#### Type declaration

##### proxyAllNodes

> **proxyAllNodes**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<`boolean`\>

##### sourceList

> **sourceList**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)[]\>

#### Source

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:33](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L33)
