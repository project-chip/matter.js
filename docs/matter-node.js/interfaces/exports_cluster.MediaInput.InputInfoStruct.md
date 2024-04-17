[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](../modules/exports_cluster.md) / [MediaInput](../modules/exports_cluster.MediaInput.md) / InputInfoStruct

# Interface: InputInfoStruct

[exports/cluster](../modules/exports_cluster.md).[MediaInput](../modules/exports_cluster.MediaInput.md).InputInfoStruct

This contains information about an input.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/exports_tlv.md#typefromschema)\<typeof [`TlvInputInfoStruct`](../modules/exports_cluster.MediaInput.md#tlvinputinfostruct)\>

  ↳ **`InputInfoStruct`**

## Table of contents

### Properties

- [description](exports_cluster.MediaInput.InputInfoStruct.md#description)
- [index](exports_cluster.MediaInput.InputInfoStruct.md#index)
- [inputType](exports_cluster.MediaInput.InputInfoStruct.md#inputtype)
- [name](exports_cluster.MediaInput.InputInfoStruct.md#name)

## Properties

### description

• **description**: `string`

This shall indicate the user editable input description, such as “Living room Playstation”. This field may
be blank, but SHOULD be provided when known.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.4

#### Inherited from

TypeFromSchema.description

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:82

___

### index

• **index**: `number`

This shall indicate the unique index into the list of Inputs.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.1

#### Inherited from

TypeFromSchema.index

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:62

___

### inputType

• **inputType**: [`InputType`](../enums/exports_cluster.MediaInput.InputType.md)

This shall indicate the type of input

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.2

#### Inherited from

TypeFromSchema.inputType

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:68

___

### name

• **name**: `string`

This shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when
known.

**`See`**

MatterSpecification.v11.Cluster § 6.9.5.1.3

#### Inherited from

TypeFromSchema.name

#### Defined in

packages/matter.js/dist/esm/cluster/definitions/MediaInputCluster.d.ts:75
