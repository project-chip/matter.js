[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md) / LaunchAppRequest

# Interface: LaunchAppRequest

[cluster/export](../modules/cluster_export.md).[ApplicationLauncher](../modules/cluster_export.ApplicationLauncher.md).LaunchAppRequest

Input to the ApplicationLauncher launchApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvLaunchAppRequest`](../modules/cluster_export.ApplicationLauncher.md#tlvlaunchapprequest)\>

  ↳ **`LaunchAppRequest`**

## Table of contents

### Properties

- [application](cluster_export.ApplicationLauncher.LaunchAppRequest.md#application)
- [data](cluster_export.ApplicationLauncher.LaunchAppRequest.md#data)

## Properties

### application

• `Optional` **application**: [`TypeFromFields`](../modules/tlv_export.md#typefromfields)\<\{ `applicationId`: [`FieldType`](tlv_export.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](tlv_export.FieldType.md)\<`number`\>  }\>

This field shall specify the Application to launch.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1.1

#### Inherited from

TypeFromSchema.application

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:85](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L85)

___

### data

• `Optional` **data**: `Uint8Array`

This field shall specify optional app-specific data to be sent to the app.

Note: This format and meaning of this value is proprietary and outside the specification. It provides a
transition path for device makers that use other protocols (like DIAL) which allow for proprietary data.
Apps that are not yet Matter aware can be launched via Matter, while retaining the existing ability to
launch with proprietary data.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1.2

#### Inherited from

TypeFromSchema.data

#### Defined in

[packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts:97](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/ApplicationLauncherCluster.ts#L97)
