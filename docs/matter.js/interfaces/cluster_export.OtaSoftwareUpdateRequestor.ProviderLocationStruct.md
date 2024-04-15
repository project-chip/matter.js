[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / ProviderLocationStruct

# Interface: ProviderLocationStruct

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).ProviderLocationStruct

This structure encodes a fabric-scoped location of an OTA provider on a given fabric.

**`See`**

MatterSpecification.v11.Core § 11.19.7.4.20

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvProviderLocationStruct`](../modules/cluster_export.OtaSoftwareUpdateRequestor.md#tlvproviderlocationstruct)\>

  ↳ **`ProviderLocationStruct`**

## Table of contents

### Properties

- [endpoint](cluster_export.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md#endpoint)
- [fabricIndex](cluster_export.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md#fabricindex)
- [providerNodeId](cluster_export.OtaSoftwareUpdateRequestor.ProviderLocationStruct.md#providernodeid)

## Properties

### endpoint

• **endpoint**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L41)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L42)

___

### providerNodeId

• **providerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Inherited from

TypeFromSchema.providerNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L40)
