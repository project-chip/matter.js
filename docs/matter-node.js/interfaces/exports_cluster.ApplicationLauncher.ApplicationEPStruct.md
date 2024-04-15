[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md) / ApplicationEPStruct

# Interface: ApplicationEPStruct

[exports/cluster](../modules/exports_cluster.md).[ApplicationLauncher](../modules/exports_cluster.ApplicationLauncher.md).ApplicationEPStruct

This specifies an app along with its corresponding endpoint.

**`See`**

MatterSpecification.v11.Cluster § 6.4.5.3

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvApplicationEPStruct`](../modules/exports_cluster.ApplicationLauncher.md#tlvapplicationepstruct)\>

  ↳ **`ApplicationEPStruct`**

## Table of contents

### Properties

- [application](exports_cluster.ApplicationLauncher.ApplicationEPStruct.md#application)
- [endpoint](exports_cluster.ApplicationLauncher.ApplicationEPStruct.md#endpoint)

## Properties

### application

• **application**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `applicationId`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\> ; `catalogVendorId`: [`FieldType`](exports_tlv.FieldType.md)\<`number`\>  }\>

#### Inherited from

TypeFromSchema.application

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:51

___

### endpoint

• `Optional` **endpoint**: [`EndpointNumber`](../modules/exports_datatype.md#endpointnumber)

#### Inherited from

TypeFromSchema.endpoint

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ApplicationLauncherCluster.d.ts:71
