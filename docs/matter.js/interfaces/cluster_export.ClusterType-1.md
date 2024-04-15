[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / ClusterType

# Interface: ClusterType

[cluster/export](../modules/cluster_export.md).ClusterType

A "cluster" is a grouping of related functionality that a Matter endpoint supports.

ClusterType describes the functionality of a specific type of cluster.

## Hierarchy

- [`Identity`](cluster_export.ClusterType.Identity.md)

- [`Features`](cluster_export.ClusterType.Features.md)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>

- [`Elements`](cluster_export.ClusterType.Elements.md)

  ↳ **`ClusterType`**

## Table of contents

### Constructors

- [constructor](cluster_export.ClusterType-1.md#constructor)

### Properties

- [attributes](cluster_export.ClusterType-1.md#attributes)
- [base](cluster_export.ClusterType-1.md#base)
- [commands](cluster_export.ClusterType-1.md#commands)
- [events](cluster_export.ClusterType-1.md#events)
- [extensions](cluster_export.ClusterType-1.md#extensions)
- [features](cluster_export.ClusterType-1.md#features)
- [id](cluster_export.ClusterType-1.md#id)
- [name](cluster_export.ClusterType-1.md#name)
- [revision](cluster_export.ClusterType-1.md#revision)
- [supportedFeatures](cluster_export.ClusterType-1.md#supportedfeatures)
- [unknown](cluster_export.ClusterType-1.md#unknown)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ClusterType.Identity.constructor

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/cluster_export.ClusterType.md#elementset)\<[`Attribute`](../modules/cluster_export.ClusterType.md#attribute)\>

Attributes supported by the cluster.

#### Inherited from

[Elements](cluster_export.ClusterType.Elements.md).[attributes](cluster_export.ClusterType.Elements.md#attributes)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:128](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L128)

___

### base

• `Optional` `Readonly` **base**: [`ClusterType`](cluster_export.ClusterType-1.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Inherited from

[Features](cluster_export.ClusterType.Features.md).[base](cluster_export.ClusterType.Features.md#base)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:163](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L163)

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/cluster_export.ClusterType.md#elementset)\<[`Command`](../modules/cluster_export.ClusterType.md#command)\>

Commands supported by the cluster.

#### Inherited from

[Elements](cluster_export.ClusterType.Elements.md).[commands](cluster_export.ClusterType.Elements.md#commands)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:133](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L133)

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/cluster_export.ClusterType.md#elementset)\<[`Event`](../modules/cluster_export.ClusterType.md#event)\>

Events supported by the cluster.

#### Inherited from

[Elements](cluster_export.ClusterType.Elements.md).[events](cluster_export.ClusterType.Elements.md#events)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:138](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L138)

___

### extensions

• `Optional` `Readonly` **extensions**: readonly [`Extension`](cluster_export.ClusterType.Extension.md)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>[]

Metadata controlling how enabled features affect cluster structure.

#### Inherited from

[Features](cluster_export.ClusterType.Features.md).[extensions](cluster_export.ClusterType.Features.md#extensions)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:158](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L158)

___

### features

• `Readonly` **features**: [`BitSchema`](../modules/schema_export.md#bitschema)

Features the cluster may support.

#### Inherited from

[Features](cluster_export.ClusterType.Features.md).[features](cluster_export.ClusterType.Features.md#features)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:148](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L148)

___

### id

• `Readonly` **id**: [`ClusterId`](../modules/datatype_export.md#clusterid)

#### Inherited from

[Identity](cluster_export.ClusterType.Identity.md).[id](cluster_export.ClusterType.Identity.md#id)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:111](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L111)

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Identity](cluster_export.ClusterType.Identity.md).[name](cluster_export.ClusterType.Identity.md#name)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:112](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L112)

___

### revision

• `Readonly` **revision**: `number`

#### Inherited from

[Identity](cluster_export.ClusterType.Identity.md).[revision](cluster_export.ClusterType.Identity.md#revision)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:113](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L113)

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/schema_export.md#typefrompartialbitschema)\<[`BitSchema`](../modules/schema_export.md#bitschema)\>

Features the cluster does support.

#### Inherited from

[Features](cluster_export.ClusterType.Features.md).[supportedFeatures](cluster_export.ClusterType.Features.md#supportedfeatures)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:153](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L153)

___

### unknown

• `Readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Inherited from

[Features](cluster_export.ClusterType.Features.md).[unknown](cluster_export.ClusterType.Features.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:172](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L172)
