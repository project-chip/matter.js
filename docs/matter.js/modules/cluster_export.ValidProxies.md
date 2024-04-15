[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ValidProxies

# Namespace: ValidProxies

[cluster/export](cluster_export.md).ValidProxies

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.ValidProxies.Cluster.md)
- [ValidProxyStruct](../interfaces/cluster_export.ValidProxies.ValidProxyStruct.md)

### Variables

- [Cluster](cluster_export.ValidProxies.md#cluster)
- [ClusterInstance](cluster_export.ValidProxies.md#clusterinstance)
- [Complete](cluster_export.ValidProxies.md#complete)
- [TlvValidProxyStruct](cluster_export.ValidProxies.md#tlvvalidproxystruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ValidProxies.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:67](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L67)

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:69](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L69)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `validProxyList`: [`FixedAttribute`](../interfaces/cluster_export.FixedAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>[], `any`\>  } ; `commands`: \{ `getValidProxiesRequest`: [`Command`](../interfaces/cluster_export.Command.md)\<`void`, `void`, `any`\>  } ; `id`: ``68`` = 0x44; `name`: ``"ValidProxies"`` = "ValidProxies"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.ValidProxies.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L37)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.ValidProxies.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L70)

___

### TlvValidProxyStruct

• `Const` **TlvValidProxyStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `nodeId`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)\>  }\>

Encapsulates the Node ID of a Valid Proxy.

**`See`**

MatterSpecification.v11.Core § 9.15.15.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ValidProxiesCluster.ts#L25)
