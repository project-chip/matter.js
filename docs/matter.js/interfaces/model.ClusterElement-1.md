[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [model](../modules/model.md) / ClusterElement

# Interface: ClusterElement

[model](../modules/model.md).ClusterElement

A cluster describes a set of related functionality.

## Hierarchy

- [`BaseElement`](model.BaseElement-1.md)

  ↳ **`ClusterElement`**

## Table of contents

### Constructors

- [constructor](model.ClusterElement-1.md#constructor)

### Properties

- [children](model.ClusterElement-1.md#children)
- [classification](model.ClusterElement-1.md#classification)
- [description](model.ClusterElement-1.md#description)
- [details](model.ClusterElement-1.md#details)
- [global](model.ClusterElement-1.md#global)
- [id](model.ClusterElement-1.md#id)
- [name](model.ClusterElement-1.md#name)
- [singleton](model.ClusterElement-1.md#singleton)
- [supportedFeatures](model.ClusterElement-1.md#supportedfeatures)
- [tag](model.ClusterElement-1.md#tag)
- [type](model.ClusterElement-1.md#type)
- [xref](model.ClusterElement-1.md#xref)

## Constructors

### constructor

• **constructor**: `Object`

#### Inherited from

[BaseElement](model.BaseElement-1.md).[constructor](model.BaseElement-1.md#constructor)

## Properties

### children

• `Optional` **children**: [`Child`](../modules/model.ClusterElement.md#child)[]

Child elements.

#### Overrides

[BaseElement](model.BaseElement-1.md).[children](model.BaseElement-1.md#children)

#### Defined in

[packages/matter.js/src/model/elements/ClusterElement.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ClusterElement.ts#L39)

___

### classification

• `Optional` **classification**: ``"node"`` \| ``"endpoint"`` \| ``"application"``

Encodes both classification and scope from the Matter specification.

#### Defined in

[packages/matter.js/src/model/elements/ClusterElement.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ClusterElement.ts#L31)

___

### description

• `Optional` **description**: `string`

A short summary of the element.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[description](model.BaseElement-1.md#description)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:40](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L40)

___

### details

• `Optional` **details**: `string`

A paragraph summary of the element.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[details](model.BaseElement-1.md#details)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:45](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L45)

___

### global

• `Optional` **global**: `boolean`

Is this a global element?  Global elements are defined in Globals.ts
and are available in-scope for every cluster.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[global](model.BaseElement-1.md#global)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:61](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L61)

___

### id

• `Optional` **id**: `number`

The ID of the element per Matter specification, either global or
context-specific.  A "machine appropriate" semantic differentiator.

#### Overrides

[BaseElement](model.BaseElement-1.md).[id](model.BaseElement-1.md#id)

#### Defined in

[packages/matter.js/src/model/elements/ClusterElement.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ClusterElement.ts#L19)

___

### name

• **name**: `string`

The key used for storing this element.  A "human appropriate" semantic
differentiator.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[name](model.BaseElement-1.md#name)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L29)

___

### singleton

• `Optional` **singleton**: `boolean`

Marks a cluster as a singleton per the Matter specification.

#### Defined in

[packages/matter.js/src/model/elements/ClusterElement.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ClusterElement.ts#L26)

___

### supportedFeatures

• `Optional` **supportedFeatures**: [`FeatureSet`](../classes/model.FeatureSet-1.md)

Optional supported features.  This is for clusters used operationally
and is not present in the static data model.

#### Defined in

[packages/matter.js/src/model/elements/ClusterElement.ts:37](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ClusterElement.ts#L37)

___

### tag

• **tag**: ``"cluster"``

#### Defined in

[packages/matter.js/src/model/elements/ClusterElement.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ClusterElement.ts#L21)

___

### type

• `Optional` **type**: `string`

If an element derives from another element, the name of the parent
element goes here.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[type](model.BaseElement-1.md#type)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:35](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L35)

___

### xref

• `Optional` **xref**: [`CrossReference`](../modules/model.Specification.md#crossreference)

Reference to Matter specification document.

#### Inherited from

[BaseElement](model.BaseElement-1.md).[xref](model.BaseElement-1.md#xref)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L50)
