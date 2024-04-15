[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / QueryImageRequest

# Interface: QueryImageRequest

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).QueryImageRequest

Input to the OtaSoftwareUpdateProvider queryImage command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvQueryImageRequest`](../modules/exports_cluster.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)\>

  ↳ **`QueryImageRequest`**

## Table of contents

### Properties

- [hardwareVersion](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#hardwareversion)
- [location](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#location)
- [metadataForProvider](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#metadataforprovider)
- [productId](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#productid)
- [protocolsSupported](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#protocolssupported)
- [requestorCanConsent](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#requestorcanconsent)
- [softwareVersion](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#softwareversion)
- [vendorId](exports_cluster.OtaSoftwareUpdateProvider.QueryImageRequest.md#vendorid)

## Properties

### hardwareVersion

• `Optional` **hardwareVersion**: `number`

#### Inherited from

TypeFromSchema.hardwareVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:47

___

### location

• `Optional` **location**: `string`

#### Inherited from

TypeFromSchema.location

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:48

___

### metadataForProvider

• `Optional` **metadataForProvider**: `Uint8Array`

#### Inherited from

TypeFromSchema.metadataForProvider

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:50

___

### productId

• **productId**: `number`

#### Inherited from

TypeFromSchema.productId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:44

___

### protocolsSupported

• **protocolsSupported**: [`DownloadProtocol`](../enums/exports_cluster.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]

#### Inherited from

TypeFromSchema.protocolsSupported

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:46

___

### requestorCanConsent

• `Optional` **requestorCanConsent**: `boolean`

#### Inherited from

TypeFromSchema.requestorCanConsent

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:49

___

### softwareVersion

• **softwareVersion**: `number`

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:45

___

### vendorId

• **vendorId**: [`VendorId`](../modules/exports_datatype.md#vendorid)

#### Inherited from

TypeFromSchema.vendorId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:43
