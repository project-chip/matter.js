[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md) / SetRegulatoryConfigRequest

# Interface: SetRegulatoryConfigRequest

[exports/cluster](../modules/exports_cluster.md).[GeneralCommissioning](../modules/exports_cluster.GeneralCommissioning.md).SetRegulatoryConfigRequest

Input to the GeneralCommissioning setRegulatoryConfig command

**`See`**

MatterSpecification.v11.Core § 11.9.6.4

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvSetRegulatoryConfigRequest`](../modules/exports_cluster.GeneralCommissioning.md#tlvsetregulatoryconfigrequest)\>

  ↳ **`SetRegulatoryConfigRequest`**

## Table of contents

### Properties

- [breadcrumb](exports_cluster.GeneralCommissioning.SetRegulatoryConfigRequest.md#breadcrumb)
- [countryCode](exports_cluster.GeneralCommissioning.SetRegulatoryConfigRequest.md#countrycode)
- [newRegulatoryConfig](exports_cluster.GeneralCommissioning.SetRegulatoryConfigRequest.md#newregulatoryconfig)

## Properties

### breadcrumb

• **breadcrumb**: `number` \| `bigint`

#### Inherited from

TypeFromSchema.breadcrumb

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:142

___

### countryCode

• **countryCode**: `string`

#### Inherited from

TypeFromSchema.countryCode

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:141

___

### newRegulatoryConfig

• **newRegulatoryConfig**: [`RegulatoryLocationType`](../enums/exports_cluster.GeneralCommissioning.RegulatoryLocationType.md)

#### Inherited from

TypeFromSchema.newRegulatoryConfig

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:140
