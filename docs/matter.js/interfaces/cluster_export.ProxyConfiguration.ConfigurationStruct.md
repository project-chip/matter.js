[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ProxyConfiguration](../modules/cluster_export.ProxyConfiguration.md) / ConfigurationStruct

# Interface: ConfigurationStruct

[cluster/export](../modules/cluster_export.md).[ProxyConfiguration](../modules/cluster_export.ProxyConfiguration.md).ConfigurationStruct

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

**`See`**

MatterSpecification.v11.Core § 9.15.14.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvConfigurationStruct`](../modules/cluster_export.ProxyConfiguration.md#tlvconfigurationstruct)\>

  ↳ **`ConfigurationStruct`**

## Table of contents

### Properties

- [proxyAllNodes](cluster_export.ProxyConfiguration.ConfigurationStruct.md#proxyallnodes)
- [sourceList](cluster_export.ProxyConfiguration.ConfigurationStruct.md#sourcelist)

## Properties

### proxyAllNodes

• **proxyAllNodes**: `boolean`

#### Inherited from

TypeFromSchema.proxyAllNodes

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L34)

___

### sourceList

• **sourceList**: [`NodeId`](../modules/datatype_export.md#nodeid)[]

#### Inherited from

TypeFromSchema.sourceList

#### Defined in

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L35)
