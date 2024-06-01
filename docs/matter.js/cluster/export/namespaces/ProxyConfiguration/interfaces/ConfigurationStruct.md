[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ProxyConfiguration](../README.md) / ConfigurationStruct

# Interface: ConfigurationStruct

ProxyAllNodes

This field shall be set to to 'true' to indicate to the proxy that it shall proxy all nodes. When 'true', the
SourceList attribute is ignored.

SourceList

When ProxyAllNodes is 'false', this list contains the set of NodeIds of sources that this proxy shall
specifically proxy.

## See

MatterSpecification.v11.Core § 9.15.14.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvConfigurationStruct`](../README.md#tlvconfigurationstruct)\>

## Properties

### proxyAllNodes

> **proxyAllNodes**: `boolean`

#### Inherited from

`TypeFromSchema.proxyAllNodes`

#### Source

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L34)

***

### sourceList

> **sourceList**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)[]

#### Inherited from

`TypeFromSchema.sourceList`

#### Source

[packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts:35](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ProxyConfigurationCluster.ts#L35)
