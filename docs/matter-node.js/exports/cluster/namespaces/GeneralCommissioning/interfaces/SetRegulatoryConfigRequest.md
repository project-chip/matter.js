[**@project-chip/matter-node.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../../modules.md) / [exports/cluster](../../../README.md) / [GeneralCommissioning](../README.md) / SetRegulatoryConfigRequest

# Interface: SetRegulatoryConfigRequest

Input to the GeneralCommissioning setRegulatoryConfig command

## See

MatterSpecification.v11.Core § 11.9.6.4

## Extends

- [`TypeFromSchema`](../../../../tlv/README.md#typefromschemas)\<*typeof* [`TlvSetRegulatoryConfigRequest`](../README.md#tlvsetregulatoryconfigrequest)\>

## Properties

### breadcrumb

> **breadcrumb**: `number` \| `bigint`

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:142

***

### countryCode

> **countryCode**: `string`

#### Inherited from

`TypeFromSchema.countryCode`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:141

***

### newRegulatoryConfig

> **newRegulatoryConfig**: [`RegulatoryLocationType`](../enumerations/RegulatoryLocationType.md)

#### Inherited from

`TypeFromSchema.newRegulatoryConfig`

#### Source

packages/matter.js/dist/esm/cluster/definitions/GeneralCommissioningCluster.d.ts:140
