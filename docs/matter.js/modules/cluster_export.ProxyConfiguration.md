[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

[cluster/export](cluster_export.md).ProxyConfiguration

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.ProxyConfiguration.Cluster.md)
- [ConfigurationStruct](../interfaces/cluster_export.ProxyConfiguration.ConfigurationStruct.md)

### Variables

- [Cluster](cluster_export.ProxyConfiguration.md#cluster)
- [ClusterInstance](cluster_export.ProxyConfiguration.md#clusterinstance)
- [Complete](cluster_export.ProxyConfiguration.md#complete)
- [TlvConfigurationStruct](cluster_export.ProxyConfiguration.md#tlvconfigurationstruct)

## Variables

### Cluster

• **Cluster**: [`Cluster`](../interfaces/cluster_export.ProxyConfiguration.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:82](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L82)

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:84](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L84)

___

### ClusterInstance

• `Const` **ClusterInstance**: [`MutableCluster`](../interfaces/cluster_export.MutableCluster-1.md)\<\{ `attributes`: \{ `configurationList`: [`WritableAttribute`](../interfaces/cluster_export.WritableAttribute.md)\<[`TypeFromFields`](tlv_export.md#typefromfields)\<\{ `proxyAllNodes`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `sourceList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)[]\>  }\>[], `any`\>  } ; `id`: ``66`` = 0x42; `name`: ``"ProxyConfiguration"`` = "ProxyConfiguration"; `revision`: ``1`` = 1 }\>

**`See`**

[Cluster](cluster_export.ProxyConfiguration.md#cluster)

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:56](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L56)

___

### Complete

• `Const` **Complete**: [`Cluster`](../interfaces/cluster_export.ProxyConfiguration.Cluster.md) = `Cluster`

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L85)

___

### TlvConfigurationStruct

• `Const` **TlvConfigurationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)\<\{ `proxyAllNodes`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<`boolean`\> ; `sourceList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)\<[`NodeId`](datatype_export.md#nodeid)[]\>  }\>

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

**`See`**

MatterSpecification.v11.Core § 9.15.14.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:33](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L33)
