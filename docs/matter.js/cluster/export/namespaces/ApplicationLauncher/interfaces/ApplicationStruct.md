[**@project-chip/matter.js**](../../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../../modules.md) / [cluster/export](../../../README.md) / [ApplicationLauncher](../README.md) / ApplicationStruct

# Interface: ApplicationStruct

This indicates a global identifier for an Application given a catalog.

## See

MatterSpecification.v11.Cluster § 6.4.5.2

## Extends

- [`TypeFromSchema`](../../../../../tlv/export/README.md#typefromschemas)\<*typeof* [`TlvApplicationStruct`](../README.md#tlvapplicationstruct)\>

## Properties

### applicationId

> **applicationId**: `string`

This shall indicate the application identifier, expressed as a string, such as "PruneVideo" or "Company X".
This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).

#### See

MatterSpecification.v11.Cluster § 6.4.5.2.2

#### Inherited from

`TypeFromSchema.applicationId`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L47)

***

### catalogVendorId

> **catalogVendorId**: `number`

This shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use value 0x0000.

Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) and will
assign an ApplicationID to each Content App.

#### See

MatterSpecification.v11.Cluster § 6.4.5.2.1

#### Inherited from

`TypeFromSchema.catalogVendorId`

#### Source

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L37)
