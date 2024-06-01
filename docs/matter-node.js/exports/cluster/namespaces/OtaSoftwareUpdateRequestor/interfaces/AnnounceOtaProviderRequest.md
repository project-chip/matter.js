[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [OtaSoftwareUpdateRequestor](../README.md) / AnnounceOtaProviderRequest

# Interface: AnnounceOtaProviderRequest

Input to the OtaSoftwareUpdateRequestor announceOtaProvider command

## See

MatterSpecification.v11.Core § 11.19.7.6.1

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvAnnounceOtaProviderRequest`](../README.md#tlvannounceotaproviderrequest)\>

## Properties

### announcementReason

> **announcementReason**: [`AnnouncementReason`](../enumerations/AnnouncementReason.md)

#### Inherited from

`TypeFromSchema.announcementReason`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:97

***

### endpoint

> **endpoint**: [`EndpointNumber`](../../../../datatype/README.md#endpointnumber)

#### Inherited from

`TypeFromSchema.endpoint`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:99

***

### fabricIndex

> **fabricIndex**: [`FabricIndex`](../../../../datatype/README.md#fabricindex)

#### Inherited from

`TypeFromSchema.fabricIndex`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:100

***

### metadataForNode?

> `optional` **metadataForNode**: `Uint8Array`

#### Inherited from

`TypeFromSchema.metadataForNode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:98

***

### providerNodeId

> **providerNodeId**: [`NodeId`](../../../../datatype/README.md#nodeid)

#### Inherited from

`TypeFromSchema.providerNodeId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:95

***

### vendorId

> **vendorId**: [`VendorId`](../../../../datatype/README.md#vendorid)

#### Inherited from

`TypeFromSchema.vendorId`

#### Source

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateRequestorCluster.d.ts:96
