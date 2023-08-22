[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ProxyConfiguration

# Namespace: ProxyConfiguration

[cluster/export](cluster_export.md).ProxyConfiguration

## Table of contents

### Variables

- [Cluster](cluster_export.ProxyConfiguration.md#cluster)
- [TlvConfigurationStruct](cluster_export.ProxyConfiguration.md#tlvconfigurationstruct)

## Variables

### Cluster

• `Const` **Cluster**: [`Cluster`](cluster_export.md#cluster)<[`BitSchema`](schema_export.md#bitschema), [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<[`BitSchema`](schema_export.md#bitschema)\>, [`Merge`](util_export.md#merge)<{ `configurationList`: [`WritableAttribute`](cluster_export.md#writableattribute)<[`TypeFromFields`](tlv_export.md#typefromfields)<{ `proxyAllNodes`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<`boolean`\> ; `sourceList`: [`FieldType`](../interfaces/tlv_export.FieldType.md)<[`NodeId`](datatype_export.md#nodeid)[]\>  }\>[], `any`\>  }, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<[`BitSchema`](schema_export.md#bitschema)\>\>, {}, {}\>

Proxy Configuration

This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.

**`See`**

[MatterCoreSpecificationV1_1](../interfaces/spec_export.MatterCoreSpecificationV1_1.md) § 9.15.14

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:42](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L42)

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

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:30](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L30)
