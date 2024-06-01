[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / AnnounceOtaProviderRequest

# Interface: AnnounceOtaProviderRequest

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

## See

MatterSpecification.v11.Core § 11.19.7.6.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvAnnounceOtaProviderRequest`](../README.md#tlvannounceotaproviderrequest)\>

## Properties

### announcementReason

> **announcementReason**: [`AnnouncementReason`](../enumerations/AnnouncementReason.md)

#### Inherited from

`TypeFromSchema.announcementReason`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:132](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L132)

***

### endpoint

> **endpoint**: [`EndpointNumber`](../../../../../datatype/export/README.md#endpointnumber)

#### Inherited from

`TypeFromSchema.endpoint`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:134](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L134)

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../../datatype/export/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:135](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L135)

***

### metadataForNode?

> `optional` **metadataForNode**: `Uint8Array`

#### Inherited from

`TypeFromSchema.metadataForNode`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:133](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L133)

***

### providerNodeId

> **providerNodeId**: [`NodeId`](../../../../../datatype/export/README.md#nodeid)

#### Inherited from

`TypeFromSchema.providerNodeId`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:130](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L130)

***

### vendorId

> **vendorId**: [`VendorId`](../../../../../datatype/export/README.md#vendorid)

#### Inherited from

`TypeFromSchema.vendorId`

#### Source

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts:131](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateRequestorCluster.ts#L131)
