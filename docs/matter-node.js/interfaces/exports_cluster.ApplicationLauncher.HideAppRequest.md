[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md) / HideAppRequest

# Interface: HideAppRequest

[exports/cluster](../modules/exports_cluster.md).[ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md).HideAppRequest

Input to the ApplicationLauncher hideApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvHideAppRequest`](../modules/exports_cluster.ApplicationLauncher.md#tlvhideapprequest)\>

  ↳ **`HideAppRequest`**

## Table of contents

### Properties

- [application](exports_cluster.ApplicationLauncher.HideAppRequest.md#application)

## Properties

### application

• `Optional` **application**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>

This field shall specify the Application to hide.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.3.1

#### Inherited from

TypeFromSchema.application

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:223
