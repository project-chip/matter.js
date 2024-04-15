[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [ContentLauncher](../modules/exports_cluster.ContentLauncher.md) / LaunchContentRequest

# Interface: LaunchContentRequest

[exports/cluster](../modules/exports_cluster.md).[ContentLauncher](../modules/exports_cluster.ContentLauncher.md).LaunchContentRequest

Input to the ContentLauncher launchContent command

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvLaunchContentRequest`](../modules/exports_cluster.ContentLauncher.md#tlvlaunchcontentrequest)\>

  ↳ **`LaunchContentRequest`**

## Table of contents

### Properties

- [autoPlay](exports_cluster.ContentLauncher.LaunchContentRequest.md#autoplay)
- [data](exports_cluster.ContentLauncher.LaunchContentRequest.md#data)
- [search](exports_cluster.ContentLauncher.LaunchContentRequest.md#search)

## Properties

### autoPlay

• **autoPlay**: `boolean`

This shall indicate whether to automatically start playing content, where: * TRUE means best match should
start playing automatically. * FALSE means matches should be displayed on screen for user selection.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.1.2

#### Inherited from

TypeFromSchema.autoPlay

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1038

___

### data

• `Optional` **data**: `Uint8Array`

This shall indicate Optional app-specific data.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.1.3

#### Inherited from

TypeFromSchema.data

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:1044

___

### search

• **search**: [`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `parameterList`: [`FieldType`](exports_tlv.FieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `externalIdList`: [`OptionalFieldType`](exports_tlv.OptionalFieldType.md)\<[`TypeFromFields`](../modules/exports_tlv.md#typefromfields)\<\{ `name`: [`FieldType`](exports_tlv.FieldType.md)\<...\> ; `value`: [`FieldType`](exports_tlv.FieldType.md)\<...\>  }\>[]\> ; `type`: [`FieldType`](exports_tlv.FieldType.md)\<[`Parameter`](../enums/exports_cluster.ContentLauncher.Parameter.md)\> ; `value`: [`FieldType`](exports_tlv.FieldType.md)\<`string`\>  }\>[]\>  }\>

This shall indicate the content to launch.

**`See`**

MatterSpecification.v11.Cluster § 6.7.4.1.1

#### Inherited from

TypeFromSchema.search

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/ContentLauncherCluster.d.ts:990
