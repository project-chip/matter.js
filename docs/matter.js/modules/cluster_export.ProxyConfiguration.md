[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

[cluster/export](cluster_export.md).ProxyConfiguration

## Table of contents

### Variables

- [Cluster](cluster_export.ProxyConfiguration.md#cluster)
- [TlvConfigurationStruct](cluster_export.ProxyConfiguration.md#tlvconfigurationstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Definition`](cluster_export.ClusterFactory.md#definition)<{ `attributes`: { `configurationList`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `proxyAllNodes`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `sourceList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)[]\>  }\>[], `any`\>  } ; `id`: ``66`` = 0x42; `name`: ``"ProxyConfiguration"`` = "ProxyConfiguration"; `revision`: ``1`` = 1 }\>

Proxy Configuration

This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.15.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:43](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L43)

___

### TlvConfigurationStruct

• `Const` **TlvConfigurationStruct**: [`ObjectSchema`](../classes/tlv_export.ObjectSchema.md)<{ `proxyAllNodes`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `sourceList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)[]\>  }\>

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.15.14.4.1

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:31](https://github.com/project-chip/matter.js/blob/be83914/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L31)
