[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / ApplicationStruct

# Interface: ApplicationStruct

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).ApplicationStruct

This indicates a global identifier for an Application given a catalog.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvApplicationStruct`](../modules/cluster_export.ApplicationLauncher.md#tlvapplicationstruct)\>

  ↳ **`ApplicationStruct`**

## Table of contents

### Properties

- [applicationId](cluster_export.ApplicationLauncher.ApplicationStruct.md#applicationid)
- [catalogVendorId](cluster_export.ApplicationLauncher.ApplicationStruct.md#catalogvendorid)

## Properties

### applicationId

• **applicationId**: `string`

This shall indicate the application identifier, expressed as a string, such as "PruneVideo" or "Company X".
This field shall be unique within a catalog.

For the DIAL registry catalog, this value shall be the DIAL prefix (see [DIAL Registry]).

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.2.2

#### Inherited from

TypeFromSchema.applicationId

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:48](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L48)

___

### catalogVendorId

• **catalogVendorId**: `number`

This shall indicate the CSA-issued vendor ID for the catalog. The DIAL registry shall use value 0x0000.

Content App Platform providers will have their own catalog vendor ID (set to their own Vendor ID) and will
assign an ApplicationID to each Content App.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.5.2.1

#### Inherited from

TypeFromSchema.catalogVendorId

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:38](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L38)
