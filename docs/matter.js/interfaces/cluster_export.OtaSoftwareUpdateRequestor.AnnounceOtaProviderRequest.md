[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md) / AnnounceOtaProviderRequest

# Interface: AnnounceOtaProviderRequest

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateRequestor](../modules/cluster_export.OtaSoftwareUpdateRequestor.md).AnnounceOtaProviderRequest

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

**`See`**

MatterSpecification.v11.Core § 11.19.7.6.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvAnnounceOtaProviderRequest`](../modules/cluster_export.OtaSoftwareUpdateRequestor.md#tlvannounceotaproviderrequest)\>

  ↳ **`AnnounceOtaProviderRequest`**

## Table of contents

### Properties

- [announcementReason](cluster_export.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#announcementreason)
- [endpoint](cluster_export.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#endpoint)
- [fabricIndex](cluster_export.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#fabricindex)
- [metadataForNode](cluster_export.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#metadatafornode)
- [providerNodeId](cluster_export.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#providernodeid)
- [vendorId](cluster_export.OtaSoftwareUpdateRequestor.AnnounceOtaProviderRequest.md#vendorid)

## Properties

### announcementReason

• **announcementReason**: [`AnnouncementReason`](../enums/cluster_export.OtaSoftwareUpdateRequestor.AnnouncementReason.md)

#### Inherited from

TypeFromSchema.announcementReason

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:132](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L132)

___

### endpoint

• **endpoint**: [`EndpointNumber`](../modules/datatype_export.md#endpointnumber)

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:134](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L134)

___

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:135](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L135)

___

### metadataForNode

• `Optional` **metadataForNode**: `Uint8Array`

#### Inherited from

TypeFromSchema.metadataForNode

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L133)

___

### providerNodeId

• **providerNodeId**: [`NodeId`](../modules/datatype_export.md#nodeid)

#### Inherited from

TypeFromSchema.providerNodeId

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:130](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L130)

___

### vendorId

• **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Inherited from

TypeFromSchema.vendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:131](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L131)
