[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](../modules/internal_.md) / ClusterType

# Interface: ClusterType

[\<internal\>](../modules/internal_.md).ClusterType

A "cluster" is a grouping of related functionality that a Matter endpoint supports.

ClusterType describes the functionality of a specific type of cluster.

## Hierarchy

- [`Identity`](internal_.ClusterType.Identity.md)

- [`Features`](internal_.ClusterType.Features.md)\<[`BitSchema`](../modules/internal_.md#bitschema)\>

- [`Elements`](internal_.ClusterType.Elements.md)

  ↳ **`ClusterType`**

## Table of contents

### Constructors

- [constructor](internal_.ClusterType-1.md#constructor)

### Properties

- [attributes](internal_.ClusterType-1.md#attributes)
- [base](internal_.ClusterType-1.md#base)
- [commands](internal_.ClusterType-1.md#commands)
- [events](internal_.ClusterType-1.md#events)
- [extensions](internal_.ClusterType-1.md#extensions)
- [features](internal_.ClusterType-1.md#features)
- [id](internal_.ClusterType-1.md#id)
- [name](internal_.ClusterType-1.md#name)
- [revision](internal_.ClusterType-1.md#revision)
- [supportedFeatures](internal_.ClusterType-1.md#supportedfeatures)
- [unknown](internal_.ClusterType-1.md#unknown)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

ClusterType.Identity.constructor

## Properties

### attributes

• `Readonly` **attributes**: [`ElementSet`](../modules/internal_.ClusterType.md#elementset)\<[`Attribute`](../modules/internal_.ClusterType.md#attribute)\>

Attributes supported by the cluster.

#### Inherited from

[Elements](internal_.ClusterType.Elements.md).[attributes](internal_.ClusterType.Elements.md#attributes)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:81

___

### base

• `Optional` `Readonly` **base**: [`ClusterType`](internal_.ClusterType-1.md)

If you enable features, this property tracks the shape of the cluster with no features enabled.

#### Inherited from

[Features](internal_.ClusterType.Features.md).[base](internal_.ClusterType.Features.md#base)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:110

___

### commands

• `Readonly` **commands**: [`ElementSet`](../modules/internal_.ClusterType.md#elementset)\<[`Command`](../modules/internal_.ClusterType.md#command)\>

Commands supported by the cluster.

#### Inherited from

[Elements](internal_.ClusterType.Elements.md).[commands](internal_.ClusterType.Elements.md#commands)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:85

___

### events

• `Readonly` **events**: [`ElementSet`](../modules/internal_.ClusterType.md#elementset)\<[`Event`](../modules/internal_.ClusterType.md#event)\>

Events supported by the cluster.

#### Inherited from

[Elements](internal_.ClusterType.Elements.md).[events](internal_.ClusterType.Elements.md#events)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:89

___

### extensions

• `Optional` `Readonly` **extensions**: readonly [`Extension`](internal_.ClusterType.Extension.md)\<[`BitSchema`](../modules/internal_.md#bitschema)\>[]

Metadata controlling how enabled features affect cluster structure.

#### Inherited from

[Features](internal_.ClusterType.Features.md).[extensions](internal_.ClusterType.Features.md#extensions)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:106

___

### features

• `Readonly` **features**: [`BitSchema`](../modules/internal_.md#bitschema)

Features the cluster may support.

#### Inherited from

[Features](internal_.ClusterType.Features.md).[features](internal_.ClusterType.Features.md#features)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:98

___

### id

• `Readonly` **id**: [`ClusterId`](../modules/internal_.md#clusterid)

#### Inherited from

[Identity](internal_.ClusterType.Identity.md).[id](internal_.ClusterType.Identity.md#id)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:66

___

### name

• `Readonly` **name**: `string`

#### Inherited from

[Identity](internal_.ClusterType.Identity.md).[name](internal_.ClusterType.Identity.md#name)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:67

___

### revision

• `Readonly` **revision**: `number`

#### Inherited from

[Identity](internal_.ClusterType.Identity.md).[revision](internal_.ClusterType.Identity.md#revision)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:68

___

### supportedFeatures

• `Readonly` **supportedFeatures**: [`TypeFromPartialBitSchema`](../modules/internal_.md#typefrompartialbitschema)\<[`BitSchema`](../modules/internal_.md#bitschema)\>

Features the cluster does support.

#### Inherited from

[Features](internal_.ClusterType.Features.md).[supportedFeatures](internal_.ClusterType.Features.md#supportedfeatures)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:102

___

### unknown

• `Readonly` **unknown**: `boolean`

If true, this flag indicates that the cluster is not known to matter.js.  This implies a cluster ID for which
we do not have a cluster definition.

Some functionality is available for unknown clusters but an official Matter definition is generally required
for full functionality.

#### Inherited from

[Features](internal_.ClusterType.Features.md).[unknown](internal_.ClusterType.Features.md#unknown)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:118
