[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [GeneralCommissioning](../README.md) / SetRegulatoryConfigRequest

# Interface: SetRegulatoryConfigRequest

Input to the GeneralCommissioning setRegulatoryConfig command

## See

MatterSpecification.v11.Core § 11.9.6.4

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvSetRegulatoryConfigRequest`](../README.md#tlvsetregulatoryconfigrequest)\>

## Properties

### breadcrumb

> **breadcrumb**: `number` \| `bigint`

#### Inherited from

`TypeFromSchema.breadcrumb`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:164](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L164)

***

### countryCode

> **countryCode**: `string`

#### Inherited from

`TypeFromSchema.countryCode`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:163](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L163)

***

### newRegulatoryConfig

> **newRegulatoryConfig**: [`RegulatoryLocationType`](../enumerations/RegulatoryLocationType.md)

#### Inherited from

`TypeFromSchema.newRegulatoryConfig`

#### Source

[packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts:162](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/GeneralCommissioningCluster.ts#L162)
