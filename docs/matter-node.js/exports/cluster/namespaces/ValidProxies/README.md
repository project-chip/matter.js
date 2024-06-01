[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ValidProxies

# Namespace: ValidProxies

## Index

### Interfaces

- [Cluster](interfaces/Cluster.md)
- [ValidProxyStruct](interfaces/ValidProxyStruct.md)

## Variables

### Cluster

> **Cluster**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:59

***

### ClusterInstance

> `const` **ClusterInstance**: [`MutableCluster`](../../interfaces/MutableCluster.md)\<`object`\>

#### See

[Cluster](README.md#cluster)

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### attributes.validProxyList

> `readonly` **validProxyList**: [`FixedAttribute`](../../interfaces/FixedAttribute.md)\<[`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)[], `any`\>

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

> `readonly` **id**: `68`

##### name

> `readonly` **name**: `"ValidProxies"`

##### revision

> `readonly` **revision**: `1`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:30

***

### Complete

> `const` **Complete**: [`Cluster`](interfaces/Cluster.md)

#### Source

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:62

***

### TlvValidProxyStruct

> `const` **TlvValidProxyStruct**: [`"/Users/ingof/Dev/GitHub/official-matter.js/packages/matter.js/dist/esm/tlv/TlvObject"`](../../../certificate/-internal-/namespaces/Users_ingof_Dev_GitHub_official-matter.js_packages_matter.js_dist_esm_tlv_TlvObject/README.md)

Encapsulates the Node ID of a Valid Proxy.

#### See

MatterSpecification.v11.Core § 9.15.15.4.1

#### Source

packages/matter.js/dist/esm/cluster/definitions/ValidProxiesCluster.d.ts:17
