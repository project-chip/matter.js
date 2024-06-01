[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [ProxyConfiguration](../README.md) / ConfigurationStruct

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

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvConfigurationStruct`](../README.md#tlvconfigurationstruct)\>

## Properties

### proxyAllNodes

> **proxyAllNodes**: `boolean`

#### Inherited from

`TypeFromSchema.proxyAllNodes`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:26

***

### sourceList

> **sourceList**: [`NodeId`](../../../../datatype/README.md#nodeid)[]

#### Inherited from

`TypeFromSchema.sourceList`

#### Source

packages/matter.js/dist/esm/cluster/definitions/ProxyConfigurationCluster.d.ts:27
