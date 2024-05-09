[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md) / LaunchAppRequest

# Interface: LaunchAppRequest

[exports/cluster](../modules/exports_cluster.md).[ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md).LaunchAppRequest

Input to the ApplicationLauncher launchApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLaunchAppRequest`](../modules/exports_cluster.ApplicationLauncher.md#tlvlaunchapprequest)\>

  ↳ **`LaunchAppRequest`**

## Table of contents

### Properties

- [application](exports_cluster.ApplicationLauncher.LaunchAppRequest.md#application)
- [data](exports_cluster.ApplicationLauncher.LaunchAppRequest.md#data)

## Properties

### application

• `Optional` **application**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>

This field shall specify the Application to launch.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.1.1

#### Inherited from

TypeFromSchema.application

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:91

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

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:121
