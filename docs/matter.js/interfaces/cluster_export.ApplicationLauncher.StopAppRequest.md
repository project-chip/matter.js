[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / StopAppRequest

# Interface: StopAppRequest

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).StopAppRequest

Input to the ApplicationLauncher stopApp command

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvStopAppRequest`](../modules/cluster_export.ApplicationLauncher.md#tlvstopapprequest)\>

  ↳ **`StopAppRequest`**

## Table of contents

### Properties

- [application](cluster_export.ApplicationLauncher.StopAppRequest.md#application)

## Properties

### application

• `Optional` **application**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

This field shall specify the Application to stop.

**`See`**

[MatterApplicationClusterSpecificationV1_1](spec_export.MatterApplicationClusterSpecificationV1_1.md) § 6.4.4.2.1

#### Inherited from

TypeFromSchema.application

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:167](https://github.com/project-chip/matter.js/blob/3adaded6/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L167)
