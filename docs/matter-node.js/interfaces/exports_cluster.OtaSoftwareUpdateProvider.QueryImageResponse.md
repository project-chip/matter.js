[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md) / QueryImageResponse

# Interface: QueryImageResponse

[exports/cluster](../modules/exports_cluster.md).[OtaSoftwareUpdateProvider](../modules/exports_cluster.OtaSoftwareUpdateProvider.md).QueryImageResponse

**`See`**

MatterSpecification.v11.Core § 11.19.6.5.10

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvQueryImageResponse`](../modules/exports_cluster.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)\>

  ↳ **`QueryImageResponse`**

## Table of contents

### Properties

- [delayedActionTime](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#delayedactiontime)
- [imageUri](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#imageuri)
- [metadataForRequestor](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#metadataforrequestor)
- [softwareVersion](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#softwareversion)
- [softwareVersionString](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#softwareversionstring)
- [status](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#status)
- [updateToken](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#updatetoken)
- [userConsentNeeded](exports_cluster.OtaSoftwareUpdateProvider.QueryImageResponse.md#userconsentneeded)

## Properties

### delayedActionTime

• `Optional` **delayedActionTime**: `number`

#### Inherited from

TypeFromSchema.delayedActionTime

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:87

___

### imageUri

• `Optional` **imageUri**: `string`

#### Inherited from

TypeFromSchema.imageUri

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:88

___

### metadataForRequestor

• `Optional` **metadataForRequestor**: `Uint8Array`

#### Inherited from

TypeFromSchema.metadataForRequestor

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:93

___

### softwareVersion

• `Optional` **softwareVersion**: `number`

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:89

___

### softwareVersionString

• `Optional` **softwareVersionString**: `string`

#### Inherited from

TypeFromSchema.softwareVersionString

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:90

___

### status

• **status**: [`Status`](../enums/exports_cluster.OtaSoftwareUpdateProvider.Status.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:86

___

### updateToken

• `Optional` **updateToken**: `Uint8Array`

#### Inherited from

TypeFromSchema.updateToken

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:91

___

### userConsentNeeded

• `Optional` **userConsentNeeded**: `boolean`

#### Inherited from

TypeFromSchema.userConsentNeeded

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/OtaSoftwareUpdateProviderCluster.d.ts:92
