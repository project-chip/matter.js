[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/model](../modules/exports_model.md) / ClusterElement

# Interface: ClusterElement

[exports/model](../modules/exports_model.md).ClusterElement

A cluster describes a set of related functionality.

## Hierarchy

- [`BaseElement`](exports_model.BaseElement-1.md)

  ↳ **`ClusterElement`**

## Table of contents

### Constructors

- [constructor](exports_model.ClusterElement-1.md#constructor)

### Properties

- [children](exports_model.ClusterElement-1.md#children)
- [classification](exports_model.ClusterElement-1.md#classification)
- [description](exports_model.ClusterElement-1.md#description)
- [details](exports_model.ClusterElement-1.md#details)
- [global](exports_model.ClusterElement-1.md#global)
- [id](exports_model.ClusterElement-1.md#id)
- [name](exports_model.ClusterElement-1.md#name)
- [singleton](exports_model.ClusterElement-1.md#singleton)
- [supportedFeatures](exports_model.ClusterElement-1.md#supportedfeatures)
- [tag](exports_model.ClusterElement-1.md#tag)
- [type](exports_model.ClusterElement-1.md#type)
- [xref](exports_model.ClusterElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[constructor](exports_model.BaseElement-1.md#constructor)

## Properties

### children

• `Optional` **children**: [`Child`](../modules/exports_model.ClusterElement.md#child)[]

Child elements.

#### Overrides

[BaseElement](exports_model.BaseElement-1.md).[children](exports_model.BaseElement-1.md#children)

#### Defined in

packages/matter.js/dist/esm/model/elements/ClusterElement.d.ts:32

___

### classification

• `Optional` **classification**: ``"node"`` \| ``"endpoint"`` \| ``"application"``

Encodes both classification and scope from the Matter specification.

#### Defined in

packages/matter.js/dist/esm/model/elements/ClusterElement.d.ts:26

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[description](exports_model.BaseElement-1.md#description)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:35

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[details](exports_model.BaseElement-1.md#details)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:39

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[global](exports_model.BaseElement-1.md#global)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:52

___

### id

• `Optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Overrides

[BaseElement](exports_model.BaseElement-1.md).[id](exports_model.BaseElement-1.md#id)

#### Defined in

packages/matter.js/dist/esm/model/elements/ClusterElement.d.ts:17

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[name](exports_model.BaseElement-1.md#name)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:26

___

### singleton

• `Optional` **singleton**: `boolean`

Marks a cluster as a singleton per the Matter specification.

#### Defined in

packages/matter.js/dist/esm/model/elements/ClusterElement.d.ts:22

___

### supportedFeatures

• `Optional` **supportedFeatures**: [`FeatureSet`](../classes/exports_model.FeatureSet-1.md)

Optional supported features.  This is for clusters used operationally
and is not present in the static data model.

#### Defined in

packages/matter.js/dist/esm/model/elements/ClusterElement.d.ts:31

___

### tag

• **tag**: ``"cluster"``

#### Defined in

packages/matter.js/dist/esm/model/elements/ClusterElement.d.ts:18

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[type](exports_model.BaseElement-1.md#type)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:31

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/exports_model.Specification.md#crossreference)

Reference to Matter specification document.

#### Inherited from

[BaseElement](exports_model.BaseElement-1.md).[xref](exports_model.BaseElement-1.md#xref)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:43
