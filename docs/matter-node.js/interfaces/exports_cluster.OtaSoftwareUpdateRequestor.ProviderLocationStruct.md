[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / ProviderLocationStruct

# Interface: ProviderLocationStruct

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).ProviderLocationStruct

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

**`See`**

MatterSpecification.v11.Core § 11.19.7.4.20

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvProviderLocationStruct`](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md#tlvproviderlocationstruct)\>

  ↳ **`ProviderLocationStruct`**

## Table of contents

### Properties

- [endpoint](exports_cluster.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md#endpoint)
- [fabricIndex](exports_cluster.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md#fabricindex)
- [providerNodeId](exports_cluster.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md#providernodeid)

## Properties

### endpoint

• **endpoint**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:19

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:20

___

### providerNodeId

• **providerNodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Inherited from

TypeFromSchema.providerNodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:18
