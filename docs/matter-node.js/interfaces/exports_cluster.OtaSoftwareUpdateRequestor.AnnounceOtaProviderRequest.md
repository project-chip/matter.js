[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md) / AnnounceOtaProviderRequest

# Interface: AnnounceOtaProviderRequest

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateRequestor](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md).AnnounceOtaProviderRequest

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

**`See`**

MatterSpecification.v11.Core § 11.19.7.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvAnnounceOtaProviderRequest`](../modules/exports_cluster.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)\>

  ↳ **`AnnounceOtaProviderRequest`**

## Table of contents

### Properties

- [announcementReason](exports_cluster.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#announcementreason)
- [endpoint](exports_cluster.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#endpoint)
- [fabricIndex](exports_cluster.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#fabricindex)
- [metadataForNode](exports_cluster.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#metadatafornode)
- [providerNodeId](exports_cluster.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#providernodeid)
- [vendorId](exports_cluster.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#vendorid)

## Properties

### announcementReason

• **announcementReason**: [`AnnouncementReason`](../enums/exports_cluster.OtaSoftwareUpdateRequestor.AnnouncementReason.md)

#### Inherited from

TypeFromSchema.announcementReason

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:97

___

### endpoint

• **endpoint**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:99

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/exports_datatype.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:100

___

### metadataForNode

• `Optional` **metadataForNode**: `Uint8Array`

#### Inherited from

TypeFromSchema.metadataForNode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:98

___

### providerNodeId

• **providerNodeId**: [`NodeId`](../modules/exports_datatype.md#nodeid)

#### Inherited from

TypeFromSchema.providerNodeId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:95

___

### vendorId

• **vendorId**: [`VendorId`](../modules/exports_datatype.md#vendorid)

#### Inherited from

TypeFromSchema.vendorId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:96
