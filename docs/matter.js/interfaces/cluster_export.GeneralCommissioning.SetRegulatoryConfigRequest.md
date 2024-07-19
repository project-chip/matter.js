[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md) / SetRegulatoryConfigRequest

# Interface: SetRegulatoryConfigRequest

[cluster/export](../modules/cluster_export.md).[GeneralCommissioning](../modules/cluster_export.GeneralCommissioning.md).SetRegulatoryConfigRequest

Input to the GeneralCommissioning setRegulatoryConfig command

**`See`**

MatterSpecification.v11.Core § 11.9.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvSetRegulatoryConfigRequest`](../modules/cluster_export.GeneralCommissioning.md#tlvsetregulatoryconfigrequest)\>

  ↳ **`SetRegulatoryConfigRequest`**

## Table of contents

### Properties

- [breadcrumb](cluster_export.GeneralCommissioning.SetRegulatoryConfigRequest.md#breadcrumb)
- [countryCode](cluster_export.GeneralCommissioning.SetRegulatoryConfigRequest.md#countrycode)
- [newRegulatoryConfig](cluster_export.GeneralCommissioning.SetRegulatoryConfigRequest.md#newregulatoryconfig)

## Properties

### breadcrumb

• **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:164](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L164)

___

### countryCode

• **countryCode**: `string`

#### Inherited from

TypeFromSchema.countryCode

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:163](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L163)

___

### newRegulatoryConfig

• **newRegulatoryConfig**: [`RegulatoryLocationType`](../enums/cluster_export.GeneralCommissioning.RegulatoryLocationType.md)

#### Inherited from

TypeFromSchema.newRegulatoryConfig

#### Defined in

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:162](https://github.com/project-chip/matter.js/blob/904d0c9b952b91f28a21803759c5e5c66ee4d272/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L162)
