[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / ValidProxies

# Namespace: ValidProxies

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [ValidProxyStruct](interfaces/ValidProxyStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:67](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L67)

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.validProxyList

> `readonly` **validProxyList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`TypeFromFields`](../../../../tlv/export/README.md#typefromfieldsf)\<`object`\>[], `any`\>

List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.

###### See

MatterSpecification.v11.Core § 9.15.15.5.1

##### commands

> `readonly` **commands**: `object`

##### commands.getValidProxiesRequest

> `readonly` **getValidProxiesRequest**: [`Command`](../../interfaces/Command.md)\<`void`, `void`, `any`\>

###### See

MatterSpecification.v11.Core § 9.15.15.6

##### id

> `readonly` **id**: `68` = `0x44`

##### name

> `readonly` **name**: `"ValidProxies"` = `"ValidProxies"`

##### revision

> `readonly` **revision**: `1` = `1`

#### Source

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L37)

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md) = `Cluster`

#### Source

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:70](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L70)

***

### TlvValidProxyStruct

> `const` **TlvValidProxyStruct**: [`ObjectSchema`](../../../../tlv/export/classes/ObjectSchema.md)\<`object`\>

Encapsulates the Node ID of a Valid Proxy.

#### See

MatterSpecification.v11.Core § 9.15.15.4.1

#### Type declaration

##### nodeId

> **nodeId**: [`FieldType`](../../../../tlv/export/interfaces/FieldType.md)\<[`NodeId`](../../../../datatype/export/README.md#nodeid)\>

#### Source

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L25)
