[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/model

# Module: exports/model

## Table of contents

### Modules

- [\<internal\>](exports_model._internal_.md)

### Namespaces

- [Access](exports_model.Access.md)
- [AttributeElement](exports_model.AttributeElement.md)
- [BaseElement](exports_model.BaseElement.md)
- [ClusterElement](exports_model.ClusterElement.md)
- [ClusterModel](exports_model.ClusterModel.md)
- [CommandElement](exports_model.CommandElement.md)
- [Conformance](exports_model.Conformance.md)
- [Constraint](exports_model.Constraint.md)
- [DatatypeElement](exports_model.DatatypeElement.md)
- [DeviceTypeElement](exports_model.DeviceTypeElement.md)
- [EndpointElement](exports_model.EndpointElement.md)
- [EventElement](exports_model.EventElement.md)
- [FabricElement](exports_model.FabricElement.md)
- [FeatureSet](exports_model.FeatureSet.md)
- [FieldElement](exports_model.FieldElement.md)
- [FieldValue](exports_model.FieldValue.md)
- [MatterElement](exports_model.MatterElement.md)
- [MatterModel](exports_model.MatterModel.md)
- [MergedModel](exports_model.MergedModel.md)
- [Metatype](exports_model.Metatype.md)
- [Model](exports_model.Model.md)
- [NodeElement](exports_model.NodeElement.md)
- [Quality](exports_model.Quality.md)
- [RequirementElement](exports_model.RequirementElement.md)
- [Specification](exports_model.Specification.md)
- [ValidateModel](exports_model.ValidateModel.md)
- [ValueElement](exports_model.ValueElement.md)

### Enumerations

- [ElementTag](../enums/exports_model.ElementTag.md)
- [Metatype](../enums/exports_model.Metatype-1.md)
- [Specification](../enums/exports_model.Specification-1.md)
- [StatusCode](../enums/exports_model.StatusCode.md)

### Classes

- [Access](../classes/exports_model.Access-1.md)
- [Aspect](../classes/exports_model.Aspect.md)
- [AttributeModel](../classes/exports_model.AttributeModel.md)
- [ClusterModel](../classes/exports_model.ClusterModel-1.md)
- [CommandModel](../classes/exports_model.CommandModel.md)
- [Conformance](../classes/exports_model.Conformance-1.md)
- [Constraint](../classes/exports_model.Constraint-1.md)
- [DatatypeModel](../classes/exports_model.DatatypeModel.md)
- [DeviceTypeModel](../classes/exports_model.DeviceTypeModel.md)
- [EndpointModel](../classes/exports_model.EndpointModel.md)
- [EventModel](../classes/exports_model.EventModel.md)
- [FabricModel](../classes/exports_model.FabricModel.md)
- [FeatureSet](../classes/exports_model.FeatureSet-1.md)
- [FieldModel](../classes/exports_model.FieldModel.md)
- [MatterModel](../classes/exports_model.MatterModel-1.md)
- [Model](../classes/exports_model.Model-1.md)
- [ModelVariantTraversal](../classes/exports_model.ModelVariantTraversal.md)
- [NodeModel](../classes/exports_model.NodeModel.md)
- [PropertyModel](../classes/exports_model.PropertyModel.md)
- [Quality](../classes/exports_model.Quality-1.md)
- [RequirementModel](../classes/exports_model.RequirementModel.md)
- [ValueModel](../classes/exports_model.ValueModel.md)

### Interfaces

- [AttributeElement](../interfaces/exports_model.AttributeElement-1.md)
- [BaseElement](../interfaces/exports_model.BaseElement-1.md)
- [ClusterElement](../interfaces/exports_model.ClusterElement-1.md)
- [CommandElement](../interfaces/exports_model.CommandElement-1.md)
- [DatatypeElement](../interfaces/exports_model.DatatypeElement-1.md)
- [DeviceTypeElement](../interfaces/exports_model.DeviceTypeElement-1.md)
- [EndpointElement](../interfaces/exports_model.EndpointElement-1.md)
- [EventElement](../interfaces/exports_model.EventElement-1.md)
- [FabricElement](../interfaces/exports_model.FabricElement-1.md)
- [FieldElement](../interfaces/exports_model.FieldElement-1.md)
- [VariantDetail](../interfaces/exports_model.VariantDetail.md)

### Type Aliases

- [AnyElement](exports_model.md#anyelement)
- [AnyValueElement](exports_model.md#anyvalueelement)
- [ClusterVariance](exports_model.md#clustervariance)
- [DefinitionError](exports_model.md#definitionerror)
- [FeatureBitmap](exports_model.md#featurebitmap)
- [FeatureFlags](exports_model.md#featureflags)
- [FeatureNames](exports_model.md#featurenames)
- [FieldValue](exports_model.md#fieldvalue)
- [IllegalFeatureCombinations](exports_model.md#illegalfeaturecombinations)
- [InferredComponent](exports_model.md#inferredcomponent)
- [InferredComponents](exports_model.md#inferredcomponents)
- [ManufacturerExtensibleIdentifier](exports_model.md#manufacturerextensibleidentifier)
- [MatterElement](exports_model.md#matterelement)
- [Mei](exports_model.md#mei)
- [NamedComponent](exports_model.md#namedcomponent)
- [NamedComponents](exports_model.md#namedcomponents)
- [NodeElement](exports_model.md#nodeelement)
- [RequirementElement](exports_model.md#requirementelement)
- [TraverseMap](exports_model.md#traversemap)
- [ValueElement](exports_model.md#valueelement)
- [VarianceCondition](exports_model.md#variancecondition)
- [VariantMap](exports_model.md#variantmap)

### Variables

- [Critical](exports_model.md#critical)
- [Debug](exports_model.md#debug)
- [ENUM8](exports_model.md#enum8)
- [Globals](exports_model.md#globals)
- [Info](exports_model.md#info)
- [Matter](exports_model.md#matter)
- [OCTSTR](exports_model.md#octstr)
- [STRUCT](exports_model.md#struct)
- [UINT16](exports_model.md#uint16)
- [UINT32](exports_model.md#uint32)
- [UINT64](exports_model.md#uint64)
- [UINT8](exports_model.md#uint8)

### Functions

- [AttributeElement](exports_model.md#attributeelement)
- [BaseElement](exports_model.md#baseelement)
- [ClusterElement](exports_model.md#clusterelement)
- [ClusterVariance](exports_model.md#clustervariance-1)
- [CommandElement](exports_model.md#commandelement)
- [DatatypeElement](exports_model.md#datatypeelement)
- [DefaultValue](exports_model.md#defaultvalue)
- [DeviceTypeElement](exports_model.md#devicetypeelement)
- [EndpointElement](exports_model.md#endpointelement)
- [EventElement](exports_model.md#eventelement)
- [FabricElement](exports_model.md#fabricelement)
- [FeatureBitmap](exports_model.md#featurebitmap-1)
- [FieldElement](exports_model.md#fieldelement)
- [IllegalFeatureCombinations](exports_model.md#illegalfeaturecombinations-1)
- [InferredComponents](exports_model.md#inferredcomponents-1)
- [MatterElement](exports_model.md#matterelement-1)
- [MergedModel](exports_model.md#mergedmodel)
- [NamedComponents](exports_model.md#namedcomponents-1)
- [NodeElement](exports_model.md#nodeelement-1)
- [RequirementElement](exports_model.md#requirementelement-1)
- [ValidateModel](exports_model.md#validatemodel)
- [ValueElement](exports_model.md#valueelement-1)
- [conditionToBitmaps](exports_model.md#conditiontobitmaps)
- [translateBitmap](exports_model.md#translatebitmap)

## Type Aliases

### AnyElement

Ƭ **AnyElement**: [`AnyValueElement`](exports_model.md#anyvalueelement) \| [`ClusterElement`](../interfaces/exports_model.ClusterElement-1.md) \| [`DeviceTypeElement`](../interfaces/exports_model.DeviceTypeElement-1.md) \| [`RequirementElement`](exports_model.md#requirementelement) \| [`EndpointElement`](../interfaces/exports_model.EndpointElement-1.md) \| [`FabricElement`](../interfaces/exports_model.FabricElement-1.md) \| [`NodeElement`](exports_model.md#nodeelement) \| [`MatterElement`](exports_model.md#matterelement)

Any Matter element.

#### Defined in

packages/matter.js/dist/esm/model/elements/AnyElement.d.ts:17

___

### AnyValueElement

Ƭ **AnyValueElement**: [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md) \| [`CommandElement`](../interfaces/exports_model.CommandElement-1.md) \| [`EventElement`](../interfaces/exports_model.EventElement-1.md) \| [`FieldElement`](../interfaces/exports_model.FieldElement-1.md) \| [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md)

All Matter data elements.

#### Defined in

packages/matter.js/dist/esm/model/elements/AnyValueElement.d.ts:14

___

### ClusterVariance

Ƭ **ClusterVariance**: `Object`

Defines different variants of clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `base` | [`InferredComponent`](exports_model.md#inferredcomponent) | The base component. |
| `components` | [`NamedComponents`](exports_model.md#namedcomponents) | Optional components. |
| `illegal` | [`IllegalFeatureCombinations`](exports_model.md#illegalfeaturecombinations) | Illegal feature combinations as bit flags. |
| `requiresFeatures` | `boolean` | If this is false, the cluster cannot be used without features. |

#### Defined in

packages/matter.js/dist/esm/model/logic/ClusterVariance.d.ts:35

packages/matter.js/dist/esm/model/logic/ClusterVariance.d.ts:13

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

packages/matter.js/dist/esm/model/definitions/DefinitionError.d.ts:9

___

### FeatureBitmap

Ƭ **FeatureBitmap**: `Object`

#### Index signature

▪ [name: `string`]: `boolean`

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/FeatureBitmap.d.ts:14

packages/matter.js/dist/esm/model/logic/cluster-variance/FeatureBitmap.d.ts:8

___

### FeatureFlags

Ƭ **FeatureFlags**: `string`[]

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/FeatureBitmap.d.ts:7

___

### FeatureNames

Ƭ **FeatureNames**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/FeatureBitmap.d.ts:11

___

### FieldValue

Ƭ **FieldValue**: ``null`` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| [`Properties`](exports_model.FieldValue.md#properties) \| [`Reference`](exports_model.FieldValue.md#reference) \| [`Percent`](exports_model.FieldValue.md#percent) \| [`Celsius`](exports_model.FieldValue.md#celsius)

A FieldValue represents a concrete value for a datatype.  Most values are
primitives but some values we encode with specialized typed objects so we
can capture the original semantic meaning.

#### Defined in

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:11

packages/matter.js/dist/esm/model/definitions/FieldValue.d.ts:12

___

### IllegalFeatureCombinations

Ƭ **IllegalFeatureCombinations**: [`FeatureBitmap`](exports_model.md#featurebitmap)[]

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/IllegalFeatureCombinations.d.ts:18

packages/matter.js/dist/esm/model/logic/cluster-variance/IllegalFeatureCombinations.d.ts:8

___

### InferredComponent

Ƭ **InferredComponent**: `Object`

Lists mandatory and optional elements for a specific context.

#### Type declaration

| Name | Type |
| :------ | :------ |
| `condition?` | [`VarianceCondition`](exports_model.md#variancecondition) |
| `mandatory` | [`ValueModel`](../classes/exports_model.ValueModel.md)[] |
| `optional` | [`ValueModel`](../classes/exports_model.ValueModel.md)[] |

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/InferredComponents.d.ts:11

___

### InferredComponents

Ƭ **InferredComponents**: [`InferredComponent`](exports_model.md#inferredcomponent)[]

A list of component definitions.

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/InferredComponents.d.ts:23

packages/matter.js/dist/esm/model/logic/cluster-variance/InferredComponents.d.ts:19

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

packages/matter.js/dist/esm/model/definitions/identifiers.d.ts:19

___

### MatterElement

Ƭ **MatterElement**: [`BaseElement`](../interfaces/exports_model.BaseElement-1.md) & \{ `children`: [`Child`](exports_model.MatterElement.md#child)[] ; `tag`: \`$\{Matter}\` ; `version?`: `string`  }

The root model element.

#### Defined in

packages/matter.js/dist/esm/model/elements/MatterElement.d.ts:23

packages/matter.js/dist/esm/model/elements/MatterElement.d.ts:18

packages/matter.js/dist/esm/model/elements/MatterElement.d.ts:24

___

### Mei

Ƭ **Mei**: [`ManufacturerExtensibleIdentifier`](exports_model.md#manufacturerextensibleidentifier)

#### Defined in

packages/matter.js/dist/esm/model/definitions/identifiers.d.ts:20

___

### NamedComponent

Ƭ **NamedComponent**: [`InferredComponent`](exports_model.md#inferredcomponent) & \{ `documentation`: `string` ; `name`: `string`  }

An inferred component with generated name and documentation.

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/NamedComponents.d.ts:11

___

### NamedComponents

Ƭ **NamedComponents**: [`NamedComponent`](exports_model.md#namedcomponent)[]

A set of components keyed by generated names.

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/NamedComponents.d.ts:22

packages/matter.js/dist/esm/model/logic/cluster-variance/NamedComponents.d.ts:18

___

### NodeElement

Ƭ **NodeElement**: [`BaseElement`](../interfaces/exports_model.BaseElement-1.md) & \{ `children?`: [`EndpointElement`](../interfaces/exports_model.EndpointElement-1.md)[] ; `id`: `number` ; `tag`: \`$\{Tag}\`  }

Runtime representation of a node.

#### Defined in

packages/matter.js/dist/esm/model/elements/NodeElement.d.ts:17

packages/matter.js/dist/esm/model/elements/NodeElement.d.ts:12

packages/matter.js/dist/esm/model/elements/NodeElement.d.ts:18

___

### RequirementElement

Ƭ **RequirementElement**: [`BaseElement`](../interfaces/exports_model.BaseElement-1.md) & \{ `access?`: [`Definition`](exports_model.Access.md#definition) ; `children?`: ([`RequirementElement`](exports_model.md#requirementelement) \| [`FieldElement`](../interfaces/exports_model.FieldElement-1.md))[] ; `conformance?`: [`Definition`](exports_model.Conformance.md#definition) ; `constraint?`: [`Definition`](exports_model.Constraint.md#definition) ; `default?`: `any` ; `element`: \`$\{ElementType}\` ; `quality?`: [`Definition`](exports_model.Quality.md#definition) ; `tag`: \`$\{Tag}\`  }

Describes a cluster or cluster element requirement for a device.

#### Defined in

packages/matter.js/dist/esm/model/elements/RequirementElement.d.ts:25

packages/matter.js/dist/esm/model/elements/RequirementElement.d.ts:12

packages/matter.js/dist/esm/model/elements/RequirementElement.d.ts:26

___

### TraverseMap

Ƭ **TraverseMap**: `Object`

Input to traverse().

#### Index signature

▪ [sourceName: `string`]: [`Model`](../classes/exports_model.Model-1.md) \| [`AnyElement`](exports_model.md#anyelement)

#### Defined in

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:19

___

### ValueElement

Ƭ **ValueElement**: [`BaseElement`](../interfaces/exports_model.BaseElement-1.md) & \{ `access?`: [`Definition`](exports_model.Access.md#definition) ; `byteSize?`: [`Size`](exports_model.ValueElement.md#size) ; `children?`: [`AnyValueElement`](exports_model.md#anyvalueelement)[] ; `conformance?`: [`Definition`](exports_model.Conformance.md#definition) ; `constraint?`: [`Definition`](exports_model.Constraint.md#definition) ; `default?`: [`FieldValue`](exports_model.md#fieldvalue) ; `quality?`: [`Definition`](exports_model.Quality.md#definition) ; `type?`: `string`  }

A base element for all elements that represent data values.

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:52

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:13

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:53

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

packages/matter.js/dist/esm/model/logic/cluster-variance/VarianceCondition.d.ts:12

___

### VariantMap

Ƭ **VariantMap**: `Object`

This is a map of equivalent models keyed by "source name".  The source name is a string that identifies the source of
the variant, such as "chip", "spec" or "local".

#### Index signature

▪ [sourceName: `string`]: [`Model`](../classes/exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/esm/model/logic/ModelVariantTraversal.d.ts:13

## Variables

### Critical

• `Const` **Critical**: [`Critical`](../enums/exports_model.EventElement.Priority.md#critical) = `EventElement.Priority.Critical`

#### Defined in

packages/matter.js/dist/esm/model/elements/EventElement.d.ts:41

___

### Debug

• `Const` **Debug**: [`Debug`](../enums/exports_model.EventElement.Priority.md#debug) = `EventElement.Priority.Debug`

#### Defined in

packages/matter.js/dist/esm/model/elements/EventElement.d.ts:39

___

### ENUM8

• `Const` **ENUM8**: ``"enum8"``

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:11

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
| `AcceptedCommandList` | [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md) | - |
| `AttributeList` | [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md) | - |
| `ClusterRevision` | [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md) | - |
| `EventList` | [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md) | - |
| `FabricIndex` | [`FieldElement`](../interfaces/exports_model.FieldElement-1.md) | - |
| `FeatureMap` | [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md) | - |
| `GeneratedCommandList` | [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md) | - |
| `SubjectId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `actionId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `any` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `attributeId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `bool` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `clusterId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `commandId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `dataVer` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `date` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `deviceTypeId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `double` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `endpointNo` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `entryIdx` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `enum16` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `enum8` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `epochS` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `epochUs` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `eui64` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | **`Deprecated`** by Matter specification |
| `eventId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `eventNo` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `fabricId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `fabricIdx` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `fieldId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `groupId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `hwadr` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int16` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int24` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int32` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int40` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int48` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int56` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int64` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `int8` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `ipadr` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `ipv4adr` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `ipv6adr` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `ipv6pre` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `list` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `map16` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `map32` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `map64` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `map8` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `nodeId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `octstr` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `percent` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `percent100ths` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `posixMs` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `priority` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `single` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `status` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `string` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `struct` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `systimeMs` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `systimeUs` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `tod` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `transactionId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint16` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint24` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint32` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint40` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint48` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint56` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint64` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `uint8` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |
| `utc` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | **`Deprecated`** by Matter specification |
| `vendorId` | [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md) | - |

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:25

___

### Info

• `Const` **Info**: [`Info`](../enums/exports_model.EventElement.Priority.md#info) = `EventElement.Priority.Info`

#### Defined in

packages/matter.js/dist/esm/model/elements/EventElement.d.ts:40

___

### Matter

• `Const` **Matter**: [`MatterElement`](exports_model.md#matterelement)

Canonical instance of the Matter Object Model.

#### Defined in

packages/matter.js/dist/esm/model/standard/Matter.d.ts:10

___

### OCTSTR

• `Const` **OCTSTR**: ``"octstr"``

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:9

___

### STRUCT

• `Const` **STRUCT**: ``"struct"``

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:10

___

### UINT16

• `Const` **UINT16**: ``"uint16"``

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:13

___

### UINT32

• `Const` **UINT32**: ``"uint32"``

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:14

___

### UINT64

• `Const` **UINT64**: ``"uint64"``

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:15

___

### UINT8

• `Const` **UINT8**: ``"uint8"``

#### Defined in

packages/matter.js/dist/esm/model/elements/Globals.d.ts:12

## Functions

### AttributeElement

▸ **AttributeElement**(`definition`): [`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.AttributeElement.md#properties) |

#### Returns

[`AttributeElement`](../interfaces/exports_model.AttributeElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/AttributeElement.d.ts:16

___

### BaseElement

▸ **BaseElement**(`tag`, `definition`): [`BaseElement`](../interfaces/exports_model.BaseElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`ElementTag`](../enums/exports_model.ElementTag.md) |
| `definition` | [`BaseElement`](../interfaces/exports_model.BaseElement-1.md) |

#### Returns

[`BaseElement`](../interfaces/exports_model.BaseElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/BaseElement.d.ts:54

___

### ClusterElement

▸ **ClusterElement**(`definition`): [`ClusterElement`](../interfaces/exports_model.ClusterElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.ClusterElement.md#properties) |

#### Returns

[`ClusterElement`](../interfaces/exports_model.ClusterElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/ClusterElement.d.ts:34

___

### ClusterVariance

▸ **ClusterVariance**(`cluster`): [`ClusterVariance`](exports_model.md#clustervariance)

Analyzes a cluster to determine components, component names and feature
flag -> component mapping.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](../classes/exports_model.ClusterModel-1.md) |

#### Returns

[`ClusterVariance`](exports_model.md#clustervariance)

#### Defined in

packages/matter.js/dist/esm/model/logic/ClusterVariance.d.ts:35

___

### CommandElement

▸ **CommandElement**(`definition`): [`CommandElement`](../interfaces/exports_model.CommandElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.CommandElement.md#properties) |

#### Returns

[`CommandElement`](../interfaces/exports_model.CommandElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/CommandElement.d.ts:18

___

### DatatypeElement

▸ **DatatypeElement**(`definition`): [`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.DatatypeElement.md#properties) |

#### Returns

[`DatatypeElement`](../interfaces/exports_model.DatatypeElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/DatatypeElement.d.ts:28

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
| `model` | [`ValueModel`](../classes/exports_model.ValueModel.md) |

#### Returns

`any`

#### Defined in

packages/matter.js/dist/esm/model/logic/DefaultValue.d.ts:15

___

### DeviceTypeElement

▸ **DeviceTypeElement**(`definition`): [`DeviceTypeElement`](../interfaces/exports_model.DeviceTypeElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.DeviceTypeElement.md#properties) |

#### Returns

[`DeviceTypeElement`](../interfaces/exports_model.DeviceTypeElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/DeviceTypeElement.d.ts:22

___

### EndpointElement

▸ **EndpointElement**(`definition`): [`EndpointElement`](../interfaces/exports_model.EndpointElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.EndpointElement.md#properties) |

#### Returns

[`EndpointElement`](../interfaces/exports_model.EndpointElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/EndpointElement.d.ts:17

___

### EventElement

▸ **EventElement**(`definition`): [`EventElement`](../interfaces/exports_model.EventElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.EventElement.md#properties) |

#### Returns

[`EventElement`](../interfaces/exports_model.EventElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/EventElement.d.ts:17

___

### FabricElement

▸ **FabricElement**(`definition`): [`BaseElement`](../interfaces/exports_model.BaseElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.FabricElement.md#properties) |

#### Returns

[`BaseElement`](../interfaces/exports_model.BaseElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/FabricElement.d.ts:17

___

### FeatureBitmap

▸ **FeatureBitmap**(`bitmap?`): [`FeatureBitmap`](exports_model.md#featurebitmap)

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap?` | [`FeatureBitmap`](exports_model.md#featurebitmap) \| [`FeatureFlags`](exports_model.md#featureflags) |

#### Returns

[`FeatureBitmap`](exports_model.md#featurebitmap)

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/FeatureBitmap.d.ts:14

___

### FieldElement

▸ **FieldElement**(`definition`): [`FieldElement`](../interfaces/exports_model.FieldElement-1.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.FieldElement.md#properties) |

#### Returns

[`FieldElement`](../interfaces/exports_model.FieldElement-1.md)

#### Defined in

packages/matter.js/dist/esm/model/elements/FieldElement.d.ts:21

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
| `cluster` | [`ClusterModel`](../classes/exports_model.ClusterModel-1.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `illegal` | [`IllegalFeatureCombinations`](exports_model.md#illegalfeaturecombinations) |
| `requiresFeatures` | `boolean` |

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/IllegalFeatureCombinations.d.ts:18

___

### InferredComponents

▸ **InferredComponents**(`cluster`): [`InferredComponents`](exports_model.md#inferredcomponents)

Details components generated by analyzing variance of cluster elements.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](../classes/exports_model.ClusterModel-1.md) |

#### Returns

[`InferredComponents`](exports_model.md#inferredcomponents)

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/InferredComponents.d.ts:23

___

### MatterElement

▸ **MatterElement**(`definition`): [`MatterElement`](exports_model.md#matterelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.MatterElement.md#properties) |

#### Returns

[`MatterElement`](exports_model.md#matterelement)

#### Defined in

packages/matter.js/dist/esm/model/elements/MatterElement.d.ts:23

___

### MergedModel

▸ **MergedModel**(`variants`, `priorities?`): [`Model`](../classes/exports_model.Model-1.md)

Merge multiple variants of an element into a single element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`TraverseMap`](exports_model.md#traversemap) |
| `priorities?` | [`Priorities`](exports_model.MergedModel.md#priorities) |

#### Returns

[`Model`](../classes/exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/esm/model/logic/MergedModel.d.ts:11

___

### NamedComponents

▸ **NamedComponents**(`cluster`, `inferredComponents`): `Object`

Compute name and documentation a set of inferred components.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](../classes/exports_model.ClusterModel-1.md) |
| `inferredComponents` | [`InferredComponents`](exports_model.md#inferredcomponents) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `base` | [`InferredComponent`](exports_model.md#inferredcomponent) |
| `components` | [`NamedComponents`](exports_model.md#namedcomponents) |

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/NamedComponents.d.ts:22

___

### NodeElement

▸ **NodeElement**(`definition`): [`NodeElement`](exports_model.md#nodeelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.NodeElement.md#properties) |

#### Returns

[`NodeElement`](exports_model.md#nodeelement)

#### Defined in

packages/matter.js/dist/esm/model/elements/NodeElement.d.ts:17

___

### RequirementElement

▸ **RequirementElement**(`definition`): [`RequirementElement`](exports_model.md#requirementelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.RequirementElement.md#properties) |

#### Returns

[`RequirementElement`](exports_model.md#requirementelement)

#### Defined in

packages/matter.js/dist/esm/model/elements/RequirementElement.d.ts:25

___

### ValidateModel

▸ **ValidateModel**(`model`): [`Result`](../classes/exports_model.ValidateModel.Result.md)

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
| `model` | [`Model`](../classes/exports_model.Model-1.md) |

#### Returns

[`Result`](../classes/exports_model.ValidateModel.Result.md)

#### Defined in

packages/matter.js/dist/esm/model/logic/ValidateModel.d.ts:21

___

### ValueElement

▸ **ValueElement**(`tag`, `definition`): [`ValueElement`](exports_model.md#valueelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`ElementTag`](../enums/exports_model.ElementTag.md) |
| `definition` | [`ValueElement`](exports_model.md#valueelement) |

#### Returns

[`ValueElement`](exports_model.md#valueelement)

#### Defined in

packages/matter.js/dist/esm/model/elements/ValueElement.d.ts:52

___

### conditionToBitmaps

▸ **conditionToBitmaps**(`condition`, `cluster`): [`FeatureBitmap`](exports_model.md#featurebitmap)[]

Convert a VarianceCondition to an array of FeatureBitmaps.

#### Parameters

| Name | Type |
| :------ | :------ |
| `condition` | [`VarianceCondition`](exports_model.md#variancecondition) |
| `cluster` | [`ClusterModel`](../classes/exports_model.ClusterModel-1.md) |

#### Returns

[`FeatureBitmap`](exports_model.md#featurebitmap)[]

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/VarianceCondition.d.ts:20

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
| `bitmap` | [`FeatureBitmap`](exports_model.md#featurebitmap) |
| `cluster` | [`ClusterModel`](../classes/exports_model.ClusterModel-1.md) |

#### Returns

`Object`

#### Defined in

packages/matter.js/dist/esm/model/logic/cluster-variance/FeatureBitmap.d.ts:23
