[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / model

# Module: model

## Table of contents

### Modules

- [\<internal\>](model._internal_.md)

### Namespaces

- [Access](model.Access.md)
- [AttributeElement](model.AttributeElement.md)
- [BaseElement](model.BaseElement.md)
- [ClusterElement](model.ClusterElement.md)
- [ClusterModel](model.ClusterModel.md)
- [CommandElement](model.CommandElement.md)
- [Conformance](model.Conformance.md)
- [Constraint](model.Constraint.md)
- [DatatypeElement](model.DatatypeElement.md)
- [DeviceTypeElement](model.DeviceTypeElement.md)
- [EndpointElement](model.EndpointElement.md)
- [EventElement](model.EventElement.md)
- [FabricElement](model.FabricElement.md)
- [FeatureSet](model.FeatureSet.md)
- [FieldElement](model.FieldElement.md)
- [FieldValue](model.FieldValue.md)
- [MatterElement](model.MatterElement.md)
- [MatterModel](model.MatterModel.md)
- [MergedModel](model.MergedModel.md)
- [Metatype](model.Metatype.md)
- [Model](model.Model.md)
- [NodeElement](model.NodeElement.md)
- [Quality](model.Quality.md)
- [RequirementElement](model.RequirementElement.md)
- [Specification](model.Specification.md)
- [ValidateModel](model.ValidateModel.md)
- [ValueElement](model.ValueElement.md)

### Enumerations

- [ElementTag](../enums/model.ElementTag.md)
- [Metatype](../enums/model.Metatype-1.md)
- [Specification](../enums/model.Specification-1.md)
- [StatusCode](../enums/model.StatusCode.md)

### Classes

- [Access](../classes/model.Access-1.md)
- [Aspect](../classes/model.Aspect.md)
- [AttributeModel](../classes/model.AttributeModel.md)
- [ClusterModel](../classes/model.ClusterModel-1.md)
- [CommandModel](../classes/model.CommandModel.md)
- [Conformance](../classes/model.Conformance-1.md)
- [Constraint](../classes/model.Constraint-1.md)
- [DatatypeModel](../classes/model.DatatypeModel.md)
- [DeviceTypeModel](../classes/model.DeviceTypeModel.md)
- [EndpointModel](../classes/model.EndpointModel.md)
- [EventModel](../classes/model.EventModel.md)
- [FabricModel](../classes/model.FabricModel.md)
- [FeatureSet](../classes/model.FeatureSet-1.md)
- [FieldModel](../classes/model.FieldModel.md)
- [MatterModel](../classes/model.MatterModel-1.md)
- [Model](../classes/model.Model-1.md)
- [ModelVariantTraversal](../classes/model.ModelVariantTraversal.md)
- [NodeModel](../classes/model.NodeModel.md)
- [PropertyModel](../classes/model.PropertyModel.md)
- [Quality](../classes/model.Quality-1.md)
- [RequirementModel](../classes/model.RequirementModel.md)
- [ValueModel](../classes/model.ValueModel.md)

### Interfaces

- [AttributeElement](../interfaces/model.AttributeElement-1.md)
- [BaseElement](../interfaces/model.BaseElement-1.md)
- [ClusterElement](../interfaces/model.ClusterElement-1.md)
- [CommandElement](../interfaces/model.CommandElement-1.md)
- [DatatypeElement](../interfaces/model.DatatypeElement-1.md)
- [DeviceTypeElement](../interfaces/model.DeviceTypeElement-1.md)
- [EndpointElement](../interfaces/model.EndpointElement-1.md)
- [EventElement](../interfaces/model.EventElement-1.md)
- [FabricElement](../interfaces/model.FabricElement-1.md)
- [FieldElement](../interfaces/model.FieldElement-1.md)
- [VariantDetail](../interfaces/model.VariantDetail.md)

### Type Aliases

- [AnyElement](model.md#anyelement)
- [AnyValueElement](model.md#anyvalueelement)
- [ClusterVariance](model.md#clustervariance)
- [DefinitionError](model.md#definitionerror)
- [FeatureBitmap](model.md#featurebitmap)
- [FeatureFlags](model.md#featureflags)
- [FeatureNames](model.md#featurenames)
- [FieldValue](model.md#fieldvalue)
- [IllegalFeatureCombinations](model.md#illegalfeaturecombinations)
- [InferredComponent](model.md#inferredcomponent)
- [InferredComponents](model.md#inferredcomponents)
- [ManufacturerExtensibleIdentifier](model.md#manufacturerextensibleidentifier)
- [MatterElement](model.md#matterelement)
- [Mei](model.md#mei)
- [NamedComponent](model.md#namedcomponent)
- [NamedComponents](model.md#namedcomponents)
- [NodeElement](model.md#nodeelement)
- [RequirementElement](model.md#requirementelement)
- [TraverseMap](model.md#traversemap)
- [ValueElement](model.md#valueelement)
- [VarianceCondition](model.md#variancecondition)
- [VariantMap](model.md#variantmap)

### Variables

- [Critical](model.md#critical)
- [Debug](model.md#debug)
- [ENUM8](model.md#enum8)
- [Globals](model.md#globals)
- [Info](model.md#info)
- [Matter](model.md#matter)
- [OCTSTR](model.md#octstr)
- [STRUCT](model.md#struct)
- [UINT16](model.md#uint16)
- [UINT32](model.md#uint32)
- [UINT64](model.md#uint64)
- [UINT8](model.md#uint8)

### Functions

- [AttributeElement](model.md#attributeelement)
- [BaseElement](model.md#baseelement)
- [ClusterElement](model.md#clusterelement)
- [ClusterVariance](model.md#clustervariance-1)
- [CommandElement](model.md#commandelement)
- [DatatypeElement](model.md#datatypeelement)
- [DefaultValue](model.md#defaultvalue)
- [DeviceTypeElement](model.md#devicetypeelement)
- [EndpointElement](model.md#endpointelement)
- [EventElement](model.md#eventelement)
- [FabricElement](model.md#fabricelement)
- [FeatureBitmap](model.md#featurebitmap-1)
- [FieldElement](model.md#fieldelement)
- [IllegalFeatureCombinations](model.md#illegalfeaturecombinations-1)
- [InferredComponents](model.md#inferredcomponents-1)
- [MatterElement](model.md#matterelement-1)
- [MergedModel](model.md#mergedmodel)
- [NamedComponents](model.md#namedcomponents-1)
- [NodeElement](model.md#nodeelement-1)
- [RequirementElement](model.md#requirementelement-1)
- [ValidateModel](model.md#validatemodel)
- [ValueElement](model.md#valueelement-1)
- [conditionToBitmaps](model.md#conditiontobitmaps)
- [translateBitmap](model.md#translatebitmap)

## Type Aliases

### AnyElement

Ƭ **AnyElement**: [`AnyValueElement`](model.md#anyvalueelement) \| [`ClusterElement`](../interfaces/model.ClusterElement-1.md) \| [`DeviceTypeElement`](../interfaces/model.DeviceTypeElement-1.md) \| [`RequirementElement`](model.md#requirementelement) \| [`EndpointElement`](../interfaces/model.EndpointElement-1.md) \| [`FabricElement`](../interfaces/model.FabricElement-1.md) \| [`NodeElement`](model.md#nodeelement) \| [`MatterElement`](model.md#matterelement)

Any Matter element.

#### Defined in

[packages/matter.js/src/model/elements/AnyElement.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/AnyElement.ts#L19)

___

### AnyValueElement

Ƭ **AnyValueElement**: [`AttributeElement`](../interfaces/model.AttributeElement-1.md) \| [`CommandElement`](../interfaces/model.CommandElement-1.md) \| [`EventElement`](../interfaces/model.EventElement-1.md) \| [`FieldElement`](../interfaces/model.FieldElement-1.md) \| [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md)

All Matter data elements.

#### Defined in

[packages/matter.js/src/model/elements/AnyValueElement.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/AnyValueElement.ts#L16)

___

### ClusterVariance

Ƭ **ClusterVariance**: `Object`

Defines different variants of clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `base` | [`InferredComponent`](model.md#inferredcomponent) | The base component. |
| `components` | [`NamedComponents`](model.md#namedcomponents) | Optional components. |
| `illegal` | [`IllegalFeatureCombinations`](model.md#illegalfeaturecombinations) | Illegal feature combinations as bit flags. |
| `requiresFeatures` | `boolean` | If this is false, the cluster cannot be used without features. |

#### Defined in

[packages/matter.js/src/model/logic/ClusterVariance.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ClusterVariance.ts#L41)

[packages/matter.js/src/model/logic/ClusterVariance.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ClusterVariance.ts#L15)

___

### DefinitionError

Ƭ **DefinitionError**: `Object`

Describes an error in model construction.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `code` | `string` |
| `message` | `string` |
| `source` | `string` |
| `xref?` | `string` |

#### Defined in

[packages/matter.js/src/model/definitions/DefinitionError.ts:10](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/DefinitionError.ts#L10)

___

### FeatureBitmap

Ƭ **FeatureBitmap**: `Object`

#### Index signature

▪ [name: `string`]: `boolean`

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L14)

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:11](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L11)

___

### FeatureFlags

Ƭ **FeatureFlags**: `string`[]

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:10](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L10)

___

### FeatureNames

Ƭ **FeatureNames**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L12)

___

### FieldValue

Ƭ **FieldValue**: ``null`` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| [`Properties`](model.FieldValue.md#properties) \| [`Reference`](model.FieldValue.md#reference) \| [`Percent`](model.FieldValue.md#percent) \| [`Celsius`](model.FieldValue.md#celsius)

A FieldValue represents a concrete value for a datatype.  Most values are
primitives but some values we encode with specialized typed objects so we
can capture the original semantic meaning.

#### Defined in

[packages/matter.js/src/model/definitions/FieldValue.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L15)

[packages/matter.js/src/model/definitions/FieldValue.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/FieldValue.ts#L28)

___

### IllegalFeatureCombinations

Ƭ **IllegalFeatureCombinations**: [`FeatureBitmap`](model.md#featurebitmap)[]

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts#L31)

[packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts:13](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts#L13)

___

### InferredComponent

Ƭ **InferredComponent**: `Object`

Lists mandatory and optional elements for a specific context.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`VarianceCondition`](model.md#variancecondition) |
| `mandatory` | [`ValueModel`](../classes/model.ValueModel.md)[] |
| `optional` | [`ValueModel`](../classes/model.ValueModel.md)[] |

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts#L15)

___

### InferredComponents

Ƭ **InferredComponents**: [`InferredComponent`](model.md#inferredcomponent)[]

A list of component definitions.

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts#L29)

[packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts#L24)

___

### ManufacturerExtensibleIdentifier

Ƭ **ManufacturerExtensibleIdentifier**: `number`

Base type for semantic identifiers per Matter specification.  Formally a
32-bit unsigned integer with assigned bit functions:

    Bits 0-15 are the identifier's scope:
        0x0000: Standard (global) or scoped (within cluster) ID
        0x0001 - 0xfff0: Manufacturer code as defined by CSA group
        0xfff1 - 0xfff4: Test manufacturer codes
    Bits 16-31 are the actual identifier

For this and following types, the specification defines restrictions that
we do not express statically with TypeScript.

#### Defined in

[packages/matter.js/src/model/definitions/identifiers.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/identifiers.ts#L20)

___

### MatterElement

Ƭ **MatterElement**: [`BaseElement`](../interfaces/model.BaseElement-1.md) & \{ `children`: [`Child`](model.MatterElement.md#child)[] ; `tag`: \`$\{Matter}\` ; `version?`: `string`  }

The root model element.

#### Defined in

[packages/matter.js/src/model/elements/MatterElement.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/MatterElement.ts#L26)

[packages/matter.js/src/model/elements/MatterElement.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/MatterElement.ts#L20)

[packages/matter.js/src/model/elements/MatterElement.ts:30](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/MatterElement.ts#L30)

___

### Mei

Ƭ **Mei**: [`ManufacturerExtensibleIdentifier`](model.md#manufacturerextensibleidentifier)

#### Defined in

[packages/matter.js/src/model/definitions/identifiers.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/definitions/identifiers.ts#L21)

___

### NamedComponent

Ƭ **NamedComponent**: [`InferredComponent`](model.md#inferredcomponent) & \{ `documentation`: `string` ; `name`: `string`  }

An inferred component with generated name and documentation.

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts#L14)

___

### NamedComponents

Ƭ **NamedComponents**: [`NamedComponent`](model.md#namedcomponent)[]

A set of components keyed by generated names.

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts#L27)

[packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts#L22)

___

### NodeElement

Ƭ **NodeElement**: [`BaseElement`](../interfaces/model.BaseElement-1.md) & \{ `children?`: [`EndpointElement`](../interfaces/model.EndpointElement-1.md)[] ; `id`: `number` ; `tag`: \`$\{Tag}\`  }

Runtime representation of a node.

#### Defined in

[packages/matter.js/src/model/elements/NodeElement.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/NodeElement.ts#L20)

[packages/matter.js/src/model/elements/NodeElement.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/NodeElement.ts#L14)

[packages/matter.js/src/model/elements/NodeElement.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/NodeElement.ts#L24)

___

### RequirementElement

Ƭ **RequirementElement**: [`BaseElement`](../interfaces/model.BaseElement-1.md) & \{ `access?`: [`Definition`](model.Access.md#definition) ; `children?`: ([`RequirementElement`](model.md#requirementelement) \| [`FieldElement`](../interfaces/model.FieldElement-1.md))[] ; `conformance?`: [`Definition`](model.Conformance.md#definition) ; `constraint?`: [`Definition`](model.Constraint.md#definition) ; `default?`: `any` ; `element`: \`$\{ElementType}\` ; `quality?`: [`Definition`](model.Quality.md#definition) ; `tag`: \`$\{Tag}\`  }

Describes a cluster or cluster element requirement for a device.

#### Defined in

[packages/matter.js/src/model/elements/RequirementElement.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/RequirementElement.ts#L31)

[packages/matter.js/src/model/elements/RequirementElement.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/RequirementElement.ts#L14)

[packages/matter.js/src/model/elements/RequirementElement.ts:38](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/RequirementElement.ts#L38)

___

### TraverseMap

Ƭ **TraverseMap**: `Object`

Input to traverse().

#### Index signature

▪ [sourceName: `string`]: [`Model`](../classes/model.Model-1.md) \| [`AnyElement`](model.md#anyelement)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L25)

___

### ValueElement

Ƭ **ValueElement**: [`BaseElement`](../interfaces/model.BaseElement-1.md) & \{ `access?`: [`Definition`](model.Access.md#definition) ; `byteSize?`: [`Size`](model.ValueElement.md#size) ; `children?`: [`AnyValueElement`](model.md#anyvalueelement)[] ; `conformance?`: [`Definition`](model.Conformance.md#definition) ; `constraint?`: [`Definition`](model.Constraint.md#definition) ; `default?`: [`FieldValue`](model.md#fieldvalue) ; `quality?`: [`Definition`](model.Quality.md#definition) ; `type?`: `string`  }

A base element for all elements that represent data values.

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L62)

[packages/matter.js/src/model/elements/ValueElement.ts:15](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L15)

[packages/matter.js/src/model/elements/ValueElement.ts:78](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L78)

___

### VarianceCondition

Ƭ **VarianceCondition**: `Object`

The condition for supported patterns of complex variance on Cluster
Attributes, Commands and Events.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `allOf?` | `string`[] |
| `anyOf?` | `string`[] |
| `not?` | `string` |

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts#L14)

___

### VariantMap

Ƭ **VariantMap**: `Object`

This is a map of equivalent models keyed by "source name".  The source name is a string that identifies the source of
the variant, such as "chip", "spec" or "local".

#### Index signature

▪ [sourceName: `string`]: [`Model`](../classes/model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L20)

## Variables

### Critical

• `Const` **Critical**: [`Critical`](../enums/model.EventElement.Priority.md#critical) = `EventElement.Priority.Critical`

#### Defined in

[packages/matter.js/src/model/elements/EventElement.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EventElement.ts#L52)

___

### Debug

• `Const` **Debug**: [`Debug`](../enums/model.EventElement.Priority.md#debug) = `EventElement.Priority.Debug`

#### Defined in

[packages/matter.js/src/model/elements/EventElement.ts:50](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EventElement.ts#L50)

___

### ENUM8

• `Const` **ENUM8**: ``"enum8"``

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:18](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L18)

___

### Globals

• `Const` **Globals**: `Object`

These are all of the global elements defined in the Matter Specification.
This includes types from the "data types" section and other elements from
the "global elements" section.

According to the specification, any type that is used by more than one
cluster should be defined here.  Various cluster-specific elements reference
these types or derive new types.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `AcceptedCommandList` | [`AttributeElement`](../interfaces/model.AttributeElement-1.md) | - |
| `AttributeList` | [`AttributeElement`](../interfaces/model.AttributeElement-1.md) | - |
| `ClusterRevision` | [`AttributeElement`](../interfaces/model.AttributeElement-1.md) | - |
| `EventList` | [`AttributeElement`](../interfaces/model.AttributeElement-1.md) | - |
| `FabricIndex` | [`FieldElement`](../interfaces/model.FieldElement-1.md) | - |
| `FeatureMap` | [`AttributeElement`](../interfaces/model.AttributeElement-1.md) | - |
| `GeneratedCommandList` | [`AttributeElement`](../interfaces/model.AttributeElement-1.md) | - |
| `SubjectId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `actionId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `any` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `attributeId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `bool` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `clusterId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `commandId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `dataVer` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `date` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `deviceTypeId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `double` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `endpointNo` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `entryIdx` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `enum16` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `enum8` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `epochS` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `epochUs` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `eui64` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | **`Deprecated`** by Matter specification |
| `eventId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `eventNo` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `fabricId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `fabricIdx` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `fieldId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `groupId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `hwadr` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int16` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int24` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int32` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int40` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int48` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int56` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int64` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `int8` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `ipadr` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `ipv4adr` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `ipv6adr` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `ipv6pre` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `list` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `map16` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `map32` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `map64` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `map8` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `nodeId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `octstr` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `percent` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `percent100ths` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `posixMs` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `priority` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `single` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `status` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `string` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `struct` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `systimeMs` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `systimeUs` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `tod` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `transactionId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint16` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint24` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint32` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint40` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint48` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint56` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint64` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `uint8` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |
| `utc` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | **`Deprecated`** by Matter specification |
| `vendorId` | [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md) | - |

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:73](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L73)

___

### Info

• `Const` **Info**: [`Info`](../enums/model.EventElement.Priority.md#info) = `EventElement.Priority.Info`

#### Defined in

[packages/matter.js/src/model/elements/EventElement.ts:51](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EventElement.ts#L51)

___

### Matter

• `Const` **Matter**: [`MatterElement`](model.md#matterelement)

Canonical instance of the Matter Object Model.

#### Defined in

[packages/matter.js/src/model/standard/Matter.ts:12](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/standard/Matter.ts#L12)

___

### OCTSTR

• `Const` **OCTSTR**: ``"octstr"``

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:16](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L16)

___

### STRUCT

• `Const` **STRUCT**: ``"struct"``

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L17)

___

### UINT16

• `Const` **UINT16**: ``"uint16"``

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L20)

___

### UINT32

• `Const` **UINT32**: ``"uint32"``

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L21)

___

### UINT64

• `Const` **UINT64**: ``"uint64"``

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L22)

___

### UINT8

• `Const` **UINT8**: ``"uint8"``

#### Defined in

[packages/matter.js/src/model/elements/Globals.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/Globals.ts#L19)

## Functions

### AttributeElement

▸ **AttributeElement**(`definition`): [`AttributeElement`](../interfaces/model.AttributeElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.AttributeElement.md#properties) |

#### Returns

[`AttributeElement`](../interfaces/model.AttributeElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/AttributeElement.ts:19](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/AttributeElement.ts#L19)

___

### BaseElement

▸ **BaseElement**(`tag`, `definition`): [`BaseElement`](../interfaces/model.BaseElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`ElementTag`](../enums/model.ElementTag.md) |
| `definition` | [`BaseElement`](../interfaces/model.BaseElement-1.md) |

#### Returns

[`BaseElement`](../interfaces/model.BaseElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/BaseElement.ts:64](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/BaseElement.ts#L64)

___

### ClusterElement

▸ **ClusterElement**(`definition`): [`ClusterElement`](../interfaces/model.ClusterElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.ClusterElement.md#properties) |

#### Returns

[`ClusterElement`](../interfaces/model.ClusterElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/ClusterElement.ts:42](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ClusterElement.ts#L42)

___

### ClusterVariance

▸ **ClusterVariance**(`cluster`): [`ClusterVariance`](model.md#clustervariance)

Analyzes a cluster to determine components, component names and feature
flag -> component mapping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](../classes/model.ClusterModel-1.md) |

#### Returns

[`ClusterVariance`](model.md#clustervariance)

#### Defined in

[packages/matter.js/src/model/logic/ClusterVariance.ts:41](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ClusterVariance.ts#L41)

___

### CommandElement

▸ **CommandElement**(`definition`): [`CommandElement`](../interfaces/model.CommandElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.CommandElement.md#properties) |

#### Returns

[`CommandElement`](../interfaces/model.CommandElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/CommandElement.ts:24](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/CommandElement.ts#L24)

___

### DatatypeElement

▸ **DatatypeElement**(`definition`): [`DatatypeElement`](../interfaces/model.DatatypeElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.DatatypeElement.md#properties) |

#### Returns

[`DatatypeElement`](../interfaces/model.DatatypeElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/DatatypeElement.ts:34](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DatatypeElement.ts#L34)

___

### DefaultValue

▸ **DefaultValue**(`model`): `any`

Obtain a native JS default value for a ValueModel.

This code assumes defaults have been previously validated (e.g. by model
validator).  It throws errors for a few structural issues but generally
returns undefined if the model's default value cannot be converted to the
correct type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`ValueModel`](../classes/model.ValueModel.md) |

#### Returns

`any`

#### Defined in

[packages/matter.js/src/model/logic/DefaultValue.ts:21](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/DefaultValue.ts#L21)

___

### DeviceTypeElement

▸ **DeviceTypeElement**(`definition`): [`DeviceTypeElement`](../interfaces/model.DeviceTypeElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.DeviceTypeElement.md#properties) |

#### Returns

[`DeviceTypeElement`](../interfaces/model.DeviceTypeElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/DeviceTypeElement.ts:25](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/DeviceTypeElement.ts#L25)

___

### EndpointElement

▸ **EndpointElement**(`definition`): [`EndpointElement`](../interfaces/model.EndpointElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.EndpointElement.md#properties) |

#### Returns

[`EndpointElement`](../interfaces/model.EndpointElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/EndpointElement.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EndpointElement.ts#L20)

___

### EventElement

▸ **EventElement**(`definition`): [`EventElement`](../interfaces/model.EventElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.EventElement.md#properties) |

#### Returns

[`EventElement`](../interfaces/model.EventElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/EventElement.ts:22](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/EventElement.ts#L22)

___

### FabricElement

▸ **FabricElement**(`definition`): [`BaseElement`](../interfaces/model.BaseElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.FabricElement.md#properties) |

#### Returns

[`BaseElement`](../interfaces/model.BaseElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/FabricElement.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/FabricElement.ts#L20)

___

### FeatureBitmap

▸ **FeatureBitmap**(`bitmap?`): [`FeatureBitmap`](model.md#featurebitmap)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap` | [`FeatureBitmap`](model.md#featurebitmap) \| [`FeatureFlags`](model.md#featureflags) |

#### Returns

[`FeatureBitmap`](model.md#featurebitmap)

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:14](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L14)

___

### FieldElement

▸ **FieldElement**(`definition`): [`FieldElement`](../interfaces/model.FieldElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.FieldElement.md#properties) |

#### Returns

[`FieldElement`](../interfaces/model.FieldElement-1.md)

#### Defined in

[packages/matter.js/src/model/elements/FieldElement.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/FieldElement.ts#L26)

___

### IllegalFeatureCombinations

▸ **IllegalFeatureCombinations**(`cluster`): `Object`

Analyzes feature conformance to ascertain feature combinations that are unsupported.  Uses rules to match the
conformance AST.

Rule matching is not exhaustive but supports a significant subset of the conformance dialect that is inclusive of all
feature conformances used by the 1.1 specifications.

Throws an error if conformance does not adhere to supported rules.  This indicates the ruleset needs augmentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](../classes/model.ClusterModel-1.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `illegal` | [`IllegalFeatureCombinations`](model.md#illegalfeaturecombinations) |
| `requiresFeatures` | `boolean` |

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts#L31)

___

### InferredComponents

▸ **InferredComponents**(`cluster`): [`InferredComponents`](model.md#inferredcomponents)

Details components generated by analyzing variance of cluster elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](../classes/model.ClusterModel-1.md) |

#### Returns

[`InferredComponents`](model.md#inferredcomponents)

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts#L29)

___

### MatterElement

▸ **MatterElement**(`definition`): [`MatterElement`](model.md#matterelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.MatterElement.md#properties) |

#### Returns

[`MatterElement`](model.md#matterelement)

#### Defined in

[packages/matter.js/src/model/elements/MatterElement.ts:26](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/MatterElement.ts#L26)

___

### MergedModel

▸ **MergedModel**(`variants`, `priorities?`): [`Model`](../classes/model.Model-1.md)

Merge multiple variants of an element into a single element.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variants` | [`TraverseMap`](model.md#traversemap) | `undefined` |
| `priorities` | [`Priorities`](model.MergedModel.md#priorities) | `MergedModel.DefaultPriorities` |

#### Returns

[`Model`](../classes/model.Model-1.md)

#### Defined in

[packages/matter.js/src/model/logic/MergedModel.ts:17](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/MergedModel.ts#L17)

___

### NamedComponents

▸ **NamedComponents**(`cluster`, `inferredComponents`): `Object`

Compute name and documentation a set of inferred components.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](../classes/model.ClusterModel-1.md) |
| `inferredComponents` | [`InferredComponents`](model.md#inferredcomponents) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `base` | [`InferredComponent`](model.md#inferredcomponent) |
| `components` | [`NamedComponents`](model.md#namedcomponents) |

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts:27](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts#L27)

___

### NodeElement

▸ **NodeElement**(`definition`): [`NodeElement`](model.md#nodeelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.NodeElement.md#properties) |

#### Returns

[`NodeElement`](model.md#nodeelement)

#### Defined in

[packages/matter.js/src/model/elements/NodeElement.ts:20](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/NodeElement.ts#L20)

___

### RequirementElement

▸ **RequirementElement**(`definition`): [`RequirementElement`](model.md#requirementelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](model.RequirementElement.md#properties) |

#### Returns

[`RequirementElement`](model.md#requirementelement)

#### Defined in

[packages/matter.js/src/model/elements/RequirementElement.ts:31](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/RequirementElement.ts#L31)

___

### ValidateModel

▸ **ValidateModel**(`model`): [`Result`](../classes/model.ValidateModel.Result.md)

Ensures that a model's definition is correct.  Places errors into the error
array of invalid models.

Makes a few minor modifications to the model as a side effect:

- Default values are cast to the correct type if possible
- Cross-references are deleted if they're redundant with the parent

Note that we run validation against model classes rather than element
datatypes.  The classes implement type resolution, error handling and other
logic we rely on for validation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](../classes/model.Model-1.md) |

#### Returns

[`Result`](../classes/model.ValidateModel.Result.md)

#### Defined in

[packages/matter.js/src/model/logic/ValidateModel.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/ValidateModel.ts#L28)

___

### ValueElement

▸ **ValueElement**(`tag`, `definition`): [`ValueElement`](model.md#valueelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`ElementTag`](../enums/model.ElementTag.md) |
| `definition` | [`ValueElement`](model.md#valueelement) |

#### Returns

[`ValueElement`](model.md#valueelement)

#### Defined in

[packages/matter.js/src/model/elements/ValueElement.ts:62](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/elements/ValueElement.ts#L62)

___

### conditionToBitmaps

▸ **conditionToBitmaps**(`condition`, `cluster`): [`FeatureBitmap`](model.md#featurebitmap)[]

Convert a VarianceCondition to an array of FeatureBitmaps.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`VarianceCondition`](model.md#variancecondition) |
| `cluster` | [`ClusterModel`](../classes/model.ClusterModel-1.md) |

#### Returns

[`FeatureBitmap`](model.md#featurebitmap)[]

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts:23](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts#L23)

___

### translateBitmap

▸ **translateBitmap**(`bitmap`, `cluster`): `Object`

Map the names in a feature bitmap to different names.  Used to convert from
a feature code bitmap to a feature name bitmap.

E.g. { F: true } -> { foo: true }

If a name isn't present leaves the feature code intact.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap` | [`FeatureBitmap`](model.md#featurebitmap) |
| `cluster` | [`ClusterModel`](../classes/model.ClusterModel-1.md) |

#### Returns

`Object`

#### Defined in

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:29](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L29)
