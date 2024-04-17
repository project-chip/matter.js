[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ProxyConfiguration](../modules/exports_cluster.ProxyConfiguration.md) / ConfigurationStruct

# Interface: ConfigurationStruct

[exports/cluster](../modules/exports_cluster.md).[ProxyConfiguration](../modules/exports_cluster.ProxyConfiguration.md).ConfigurationStruct

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

**`See`**

MatterSpecification.v11.Core § 9.15.14.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvConfigurationStruct`](../modules/exports_cluster.ProxyConfiguration.md#tlvconfigurationstruct)\>

  ↳ **`ConfigurationStruct`**

## Table of contents

### Properties

- [proxyAllNodes](exports_cluster.ProxyConfiguration.ConfigurationStruct.md#proxyallnodes)
- [sourceList](exports_cluster.ProxyConfiguration.ConfigurationStruct.md#sourcelist)

## Properties

### proxyAllNodes

• **proxyAllNodes**: `boolean`

#### Inherited from

TypeFromSchema.proxyAllNodes

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:26

___

### sourceList

• **sourceList**: [`NodeId`](../modules/exports_datatype.md#nodeid)[]

#### Inherited from

TypeFromSchema.sourceList

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:27
