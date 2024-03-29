[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / ClusterType

# Interface: ClusterType

[exports/cluster](../modules/exports_cluster.md).ClusterType

A "cluster" is a grouping of related functionality that a Matter endpoint supports.

ClusterType describes the functionality of a specific type of cluster.

## Hierarchy

- [`Identity`](exports_cluster.ClusterType.Identity.md)

- [`Features`](exports_cluster.ClusterType.Features.md)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>

- [`Elements`](exports_cluster.ClusterType.Elements.md)

  ↳ **`ClusterType`**

## Table of contents

### Constructors

- [constructor](exports_cluster.ClusterType-1.md#constructor)

### Properties

- [attributes](exports_cluster.ClusterType-1.md#attributes)
- [base](exports_cluster.ClusterType-1.md#base)
- [commands](exports_cluster.ClusterType-1.md#commands)
- [events](exports_cluster.ClusterType-1.md#events)
- [extensions](exports_cluster.ClusterType-1.md#extensions)
- [features](exports_cluster.ClusterType-1.md#features)
- [id](exports_cluster.ClusterType-1.md#id)
- [name](exports_cluster.ClusterType-1.md#name)
- [revision](exports_cluster.ClusterType-1.md#revision)
- [supportedFeatures](exports_cluster.ClusterType-1.md#supportedfeatures)
- [unknown](exports_cluster.ClusterType-1.md#unknown)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ClusterType.Identity.constructor

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/exports_cluster.ClusterType.md#elementset)\<[`Attribute`](../modules/exports_cluster.ClusterType.md#attribute)\>

Attributes supported by the cluster.

#### Inherited from

[Elements](exports_cluster.ClusterType.Elements.md).[attributes](exports_cluster.ClusterType.Elements.md#attributes)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:81

___

### base

• `Optional` `Readonly` **base**: [`ClusterType`](exports_cluster.ClusterType-1.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Inherited from

[Features](exports_cluster.ClusterType.Features.md).[base](exports_cluster.ClusterType.Features.md#base)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:110

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/exports_cluster.ClusterType.md#elementset)\<[`Command`](../modules/exports_cluster.ClusterType.md#command)\>

Commands supported by the cluster.

#### Inherited from

[Elements](exports_cluster.ClusterType.Elements.md).[commands](exports_cluster.ClusterType.Elements.md#commands)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:85

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/exports_cluster.ClusterType.md#elementset)\<[`Event`](../modules/exports_cluster.ClusterType.md#event)\>

Events supported by the cluster.

#### Inherited from

[Elements](exports_cluster.ClusterType.Elements.md).[events](exports_cluster.ClusterType.Elements.md#events)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:89

___

### extensions

• `Optional` `Readonly` **extensions**: readonly [`Extension`](exports_cluster.ClusterType.Extension.md)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>[]

Metadata controlling how enabled features affect cluster structure.

#### Inherited from

[Features](exports_cluster.ClusterType.Features.md).[extensions](exports_cluster.ClusterType.Features.md#extensions)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:106

___

### features

• `Readonly` **features**: [`BitSchema`](../modules/exports_schema.md#bitschema)

Features the cluster may support.

#### Inherited from

[Features](exports_cluster.ClusterType.Features.md).[features](exports_cluster.ClusterType.Features.md#features)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:98

___

### id

• `Readonly` **id**: [`ClusterId`](../modules/exports_datatype.md#clusterid)

#### Inherited from

[Identity](exports_cluster.ClusterType.Identity.md).[id](exports_cluster.ClusterType.Identity.md#id)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:66

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Identity](exports_cluster.ClusterType.Identity.md).[name](exports_cluster.ClusterType.Identity.md#name)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:67

___

### revision

• `Readonly` **revision**: `number`

#### Inherited from

[Identity](exports_cluster.ClusterType.Identity.md).[revision](exports_cluster.ClusterType.Identity.md#revision)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:68

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/exports_schema.md#typefrompartialbitschema)\<[`BitSchema`](../modules/exports_schema.md#bitschema)\>

Features the cluster does support.

#### Inherited from

[Features](exports_cluster.ClusterType.Features.md).[supportedFeatures](exports_cluster.ClusterType.Features.md#supportedfeatures)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:102

___

### unknown

• `Readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Inherited from

[Features](exports_cluster.ClusterType.Features.md).[unknown](exports_cluster.ClusterType.Features.md#unknown)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:118
