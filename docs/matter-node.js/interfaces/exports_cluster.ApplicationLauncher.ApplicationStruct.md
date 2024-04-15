[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md) / ApplicationStruct

# Interface: ApplicationStruct

[exports/cluster](../modules/exports_cluster.md).[ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md).ApplicationStruct

This indicates a global identifier for an Application given a catalog.

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvApplicationStruct`](../modules/exports_cluster.ApplicationLauncher.md#tlvapplicationstruct)\>

  ↳ **`ApplicationStruct`**

## Table of contents

### Properties

- [applicationId](exports_cluster.ApplicationLauncher.ApplicationStruct.md#applicationid)
- [catalogVendorId](exports_cluster.ApplicationLauncher.ApplicationStruct.md#catalogvendorid)

## Properties

### applicationId

• **applicationId**: `string`

This shall indicate the application identifier, expressed as a string, such as "PruneVideo" or "Company X".
This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.2.2

#### Inherited from

TypeFromSchema.applicationId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:36

___

### catalogVendorId

• **catalogVendorId**: `number`

This shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use value 0x0000.

Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) and will
assign an ApplicationID to each Content App.

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.2.1

#### Inherited from

TypeFromSchema.catalogVendorId

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:27
