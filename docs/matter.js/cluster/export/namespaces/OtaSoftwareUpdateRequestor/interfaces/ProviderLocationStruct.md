[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / ProviderLocationStruct

# Interface: ProviderLocationStruct

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

## See

MatterSpecification.v11.Core § 11.19.7.4.21

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvProviderLocationStruct`](../README.md#tlvproviderlocationstruct)\>

## Properties

### endpoint

> **endpoint**: [`EndpointNumber`](../../../../../datatype/export/README.md#endpointnumber)

#### Inherited from

`TypeFromSchema.endpoint`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L41)

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L42)

***

### providerNodeId

> **providerNodeId**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)

#### Inherited from

`TypeFromSchema.providerNodeId`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L40)
