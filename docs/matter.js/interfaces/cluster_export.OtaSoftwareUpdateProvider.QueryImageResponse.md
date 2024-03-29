[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md) / QueryImageResponse

# Interface: QueryImageResponse

[cluster/export](../modules/cluster_export.md).[OtaSoftwareUpdateProvider](../modules/cluster_export.OtaSoftwareUpdateProvider.md).QueryImageResponse

**`See`**

[MatterCoreSpecificationV1_1](spec_export.MatterCoreSpecificationV1_1.md) § 11.19.6.5.10

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvQueryImageResponse`](../modules/cluster_export.OtaSoftwareUpdateProvider.md#tlvqueryimageresponse)\>

  ↳ **`QueryImageResponse`**

## Table of contents

### Properties

- [delayedActionTime](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#delayedactiontime)
- [imageUri](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#imageuri)
- [metadataForRequestor](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#metadataforrequestor)
- [softwareVersion](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#softwareversion)
- [softwareVersionString](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#softwareversionstring)
- [status](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#status)
- [updateToken](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#updatetoken)
- [userConsentNeeded](cluster_export.OtaSoftwareUpdateProvider.QueryImageResponse.md#userconsentneeded)

## Properties

### delayedActionTime

• `Optional` **delayedActionTime**: `number`

#### Inherited from

TypeFromSchema.delayedActionTime

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:107](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L107)

___

### imageUri

• `Optional` **imageUri**: `string`

#### Inherited from

TypeFromSchema.imageUri

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:108](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L108)

___

### metadataForRequestor

• `Optional` **metadataForRequestor**: `Uint8Array`

#### Inherited from

TypeFromSchema.metadataForRequestor

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:113](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L113)

___

### softwareVersion

• `Optional` **softwareVersion**: `number`

#### Inherited from

TypeFromSchema.softwareVersion

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:109](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L109)

___

### softwareVersionString

• `Optional` **softwareVersionString**: `string`

#### Inherited from

TypeFromSchema.softwareVersionString

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:110](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L110)

___

### status

• **status**: [`Status`](../enums/cluster_export.OtaSoftwareUpdateProvider.Status.md)

#### Inherited from

TypeFromSchema.status

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:106](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L106)

___

### updateToken

• `Optional` **updateToken**: `Uint8Array`

#### Inherited from

TypeFromSchema.updateToken

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:111](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L111)

___

### userConsentNeeded

• `Optional` **userConsentNeeded**: `boolean`

#### Inherited from

TypeFromSchema.userConsentNeeded

#### Defined in

[packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts:112](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/OtaSoftwareUpdateProviderCluster.ts#L112)
