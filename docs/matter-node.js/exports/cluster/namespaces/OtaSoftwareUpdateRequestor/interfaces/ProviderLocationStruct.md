[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / ProviderLocationStruct

# Interface: ProviderLocationStruct

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

## See

MatterSpecification.v11.Core § 11.19.7.4.21

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvProviderLocationStruct`](../README.md#tlvproviderlocationstruct)\>

## Properties

### endpoint

> **endpoint**: [`EndpointNumber`](../../../../datatype/README.md#endpointnumber)

#### Inherited from

`TypeFromSchema.endpoint`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:19

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:20

***

### providerNodeId

> **providerNodeId**: [`NodeId`](../../../../datatype/README.md#nodeid)

#### Inherited from

`TypeFromSchema.providerNodeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:18
