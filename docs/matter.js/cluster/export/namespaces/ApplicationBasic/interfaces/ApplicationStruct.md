[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ApplicationBasic](../README.md) / ApplicationStruct

# Interface: ApplicationStruct

This indicates a global identifier for an Application given a catalog.

## See

MatterSpecification.v11.Cluster § 6.3.4.1

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvApplicationStruct`](../README.md#tlvapplicationstruct)\>

## Properties

### applicationId

> **applicationId**: `string`

This shall indicate the application identifier, expressed as a string, such as "123456-5433", "PruneVideo"
or "Company X". This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix.

#### See

MatterSpecification.v11.Cluster § 6.3.4.1.2

#### Inherited from

`TypeFromSchema.applicationId`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L47)

***

### catalogVendorId

> **catalogVendorId**: `number`

This shall indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL registry
shall use value 0x0000.

It is assumed that Content App Platform providers (see Video Player Architecture section in [MatterDevLib] )
will have their own catalog vendor ID (set to their own Vendor ID) and will assign an ApplicationID to each
Content App.

#### See

MatterSpecification.v11.Cluster § 6.3.4.1.1

#### Inherited from

`TypeFromSchema.catalogVendorId`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationBasicCluster.ts#L37)
