[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / QueryImageRequest

# Interface: QueryImageRequest

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).QueryImageRequest

Input to the OtaSoftwareUpdateProvider queryImage command

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvQueryImageRequest`](../modules/cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimagerequest)\>

  ↳ **`QueryImageRequest`**

## Table of contents

### Properties

- [hardwareVersion](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#hardwareversion)
- [location](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#location)
- [metadataForProvider](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#metadataforprovider)
- [productId](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#productid)
- [protocolsSupported](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#protocolssupported)
- [requestorCanConsent](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#requestorcanconsent)
- [softwareVersion](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#softwareversion)
- [vendorId](cluster_export.OtaSoftwareUpdateProvider.QueryImageRequest.md#vendorid)

## Properties

### hardwareVersion

• `Optional` **hardwareVersion**: `number`

#### Inherited from

TypeFromSchema.hardwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L61)

___

### location

• `Optional` **location**: `string`

#### Inherited from

TypeFromSchema.location

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L62)

___

### metadataForProvider

• `Optional` **metadataForProvider**: `Uint8Array`

#### Inherited from

TypeFromSchema.metadataForProvider

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L64)

___

### productId

• **productId**: `number`

#### Inherited from

TypeFromSchema.productId

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:58](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L58)

___

### protocolsSupported

• **protocolsSupported**: [`DownloadProtocol`](../enums/cluster_export.OtaSoftwareUpdateProvider.DownloadProtocol.md)[]

#### Inherited from

TypeFromSchema.protocolsSupported

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:60](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L60)

___

### requestorCanConsent

• `Optional` **requestorCanConsent**: `boolean`

#### Inherited from

TypeFromSchema.requestorCanConsent

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:63](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L63)

___

### softwareVersion

• **softwareVersion**: `number`

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:59](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L59)

___

### vendorId

• **vendorId**: [`VendorId`](../modules/datatype_export.md#vendorid)

#### Inherited from

TypeFromSchema.vendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:57](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L57)
