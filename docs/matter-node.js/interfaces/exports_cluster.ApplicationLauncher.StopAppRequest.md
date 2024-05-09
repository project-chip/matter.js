[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md) / StopAppRequest

# Interface: StopAppRequest

[exports/cluster](../modules/exports_cluster.md).[ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md).StopAppRequest

Input to the ApplicationLauncher stopApp command

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.2

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvStopAppRequest`](../modules/exports_cluster.ApplicationLauncher.md#tlvstopapprequest)\>

  ↳ **`StopAppRequest`**

## Table of contents

### Properties

- [application](exports_cluster.ApplicationLauncher.StopAppRequest.md#application)

## Properties

### application

• `Optional` **application**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>

This field shall specify the Application to stop.

**`See`**

MatterSpecification.v11.Cluster § 6.4.4.2.1

#### Inherited from

TypeFromSchema.application

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:184
