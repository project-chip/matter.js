[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / HideAppRequest

# Interface: HideAppRequest

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).HideAppRequest

Input to the ApplicationLauncher hideApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvHideAppRequest`](../modules/cluster_export.ApplicationLauncher.md#tlvhideapprequest)\>

  ↳ **`HideAppRequest`**

## Table of contents

### Properties

- [application](cluster_export.ApplicationLauncher.HideAppRequest.md#application)

## Properties

### application

• `Optional` **application**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

This field shall specify the Application to hide.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3.1

#### Inherited from

TypeFromSchema.application

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:187](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L187)
