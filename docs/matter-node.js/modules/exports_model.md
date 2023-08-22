[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/model

# Module: exports/model

## Table of contents

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
- [FieldValue](exports_model.FieldValue.md)
- [MatterElement](exports_model.MatterElement.md)
- [MatterModel](exports_model.MatterModel.md)
- [MergeModels](exports_model.MergeModels.md)
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
- [MatterModel](../classes/exports_model.MatterModel-1.md)
- [Model](../classes/exports_model.Model-1.md)
- [ModelVariantTraversal](../classes/exports_model.ModelVariantTraversal.md)
- [NodeModel](../classes/exports_model.NodeModel.md)
- [Quality](../classes/exports_model.Quality-1.md)
- [RequirementModel](../classes/exports_model.RequirementModel.md)
- [ValueModel](../classes/exports_model.ValueModel.md)

### Interfaces

- [VariantDetail](../interfaces/exports_model.VariantDetail.md)

### Type Aliases

- [AnyElement](exports_model.md#anyelement)
- [AnyValueElement](exports_model.md#anyvalueelement)
- [AttributeElement](exports_model.md#attributeelement)
- [BaseElement](exports_model.md#baseelement)
- [ClusterElement](exports_model.md#clusterelement)
- [ClusterVariance](exports_model.md#clustervariance)
- [CommandElement](exports_model.md#commandelement)
- [DatatypeElement](exports_model.md#datatypeelement)
- [DefinitionError](exports_model.md#definitionerror)
- [DeviceTypeElement](exports_model.md#devicetypeelement)
- [EndpointElement](exports_model.md#endpointelement)
- [EventElement](exports_model.md#eventelement)
- [FabricElement](exports_model.md#fabricelement)
- [FeatureBitmap](exports_model.md#featurebitmap)
- [FeatureFlags](exports_model.md#featureflags)
- [FeatureNames](exports_model.md#featurenames)
- [FieldValue](exports_model.md#fieldvalue)
- [ManufacturerExtensibleIdentifier](exports_model.md#manufacturerextensibleidentifier)
- [MatterElement](exports_model.md#matterelement)
- [Mei](exports_model.md#mei)
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

- [AttributeElement](exports_model.md#attributeelement-1)
- [BaseElement](exports_model.md#baseelement-1)
- [ClusterElement](exports_model.md#clusterelement-1)
- [ClusterVariance](exports_model.md#clustervariance-1)
- [CommandElement](exports_model.md#commandelement-1)
- [DatatypeElement](exports_model.md#datatypeelement-1)
- [DefaultValue](exports_model.md#defaultvalue)
- [DeviceTypeElement](exports_model.md#devicetypeelement-1)
- [EndpointElement](exports_model.md#endpointelement-1)
- [EventElement](exports_model.md#eventelement-1)
- [FabricElement](exports_model.md#fabricelement-1)
- [FeatureBitmap](exports_model.md#featurebitmap-1)
- [MatterElement](exports_model.md#matterelement-1)
- [MergeModels](exports_model.md#mergemodels)
- [NodeElement](exports_model.md#nodeelement-1)
- [RecordValidator](exports_model.md#recordvalidator)
- [RequirementElement](exports_model.md#requirementelement-1)
- [ValidateModel](exports_model.md#validatemodel)
- [ValueElement](exports_model.md#valueelement-1)
- [conditionToBitmaps](exports_model.md#conditiontobitmaps)
- [translateBitmap](exports_model.md#translatebitmap)

## Type Aliases

### AnyElement

Ƭ **AnyElement**: [`AnyValueElement`](exports_model.md#anyvalueelement) \| [`ClusterElement`](exports_model.md#clusterelement) \| [`DeviceTypeElement`](exports_model.md#devicetypeelement) \| [`RequirementElement`](exports_model.md#requirementelement) \| [`EndpointElement`](exports_model.md#endpointelement) \| [`FabricElement`](exports_model.md#fabricelement) \| [`NodeElement`](exports_model.md#nodeelement) \| [`MatterElement`](exports_model.md#matterelement)

Any Matter element.

#### Defined in

packages/matter.js/dist/cjs/model/elements/AnyElement.d.ts:17

___

### AnyValueElement

Ƭ **AnyValueElement**: [`AttributeElement`](exports_model.md#attributeelement) \| [`CommandElement`](exports_model.md#commandelement) \| [`EventElement`](exports_model.md#eventelement) \| [`DatatypeElement`](exports_model.md#datatypeelement)

All Matter data elements.

#### Defined in

packages/matter.js/dist/cjs/model/elements/AnyValueElement.d.ts:13

___

### AttributeElement

Ƭ **AttributeElement**: [`ValueElement`](exports_model.md#valueelement) & { `id`: [`Mei`](exports_model.md#mei) ; `tag`: \`${Tag}\`  }

A cluster property description.

#### Defined in

packages/matter.js/dist/cjs/model/elements/AttributeElement.d.ts:16

packages/matter.js/dist/cjs/model/elements/AttributeElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/AttributeElement.d.ts:17

___

### BaseElement

Ƭ **BaseElement**: `Object`

Per the Matter specification, an element is a data construct that supports
an instance of data.  So, a class.

Elements as defined by this package are a static data structure.  Each
element has a corresponding "Model" that is a proper class with runtime
functionality related to the element.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children?` | [`AnyElement`](exports_model.md#anyelement)[] | Child elements. |
| `description?` | `string` | A short summary of the element. |
| `details?` | `string` | A paragraph summary of the element. |
| `global?` | `boolean` | Is this a global element? Global elements are defined in Globals.ts and are available in-scope for every cluster. |
| `id?` | `number` | The ID of the element per Matter specification, either global or context-specific. A "machine appropriate" semantic differentiator. |
| `name` | `string` | The key used for storing this element. A "human appropriate" semantic differentiator. |
| `type?` | `string` | If an element derives from another element, the name of the parent element goes here. |
| `xref?` | [`CrossReference`](exports_model.Specification.md#crossreference) | Reference to Matter specification document. |

#### Defined in

packages/matter.js/dist/cjs/model/elements/BaseElement.d.ts:54

packages/matter.js/dist/cjs/model/elements/BaseElement.d.ts:16

packages/matter.js/dist/cjs/model/elements/BaseElement.d.ts:55

___

### ClusterElement

Ƭ **ClusterElement**: [`BaseElement`](exports_model.md#baseelement) & { `children?`: [`Child`](exports_model.ClusterElement.md#child)[] ; `classification?`: \`${Classification}\` ; `id?`: [`Mei`](exports_model.md#mei) ; `singleton?`: `boolean` ; `tag`: \`${Tag}\`  }

A cluster describes a set of related functionality.

#### Defined in

packages/matter.js/dist/cjs/model/elements/ClusterElement.d.ts:28

packages/matter.js/dist/cjs/model/elements/ClusterElement.d.ts:15

packages/matter.js/dist/cjs/model/elements/ClusterElement.d.ts:29

___

### ClusterVariance

Ƭ **ClusterVariance**: `Object`

Defines different variants of clusters.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `base` | [`InferredComponent`](export._internal_.md#inferredcomponent) | The base component. |
| `components` | [`NamedComponents`](export._internal_.md#namedcomponents) | Optional components. |
| `illegal` | [`IllegalFeatureCombinations`](export._internal_.md#illegalfeaturecombinations) | Illegal feature combinations as bit flags. |
| `requiresFeatures` | `boolean` | If this is false, the cluster cannot be used without features. |

#### Defined in

packages/matter.js/dist/cjs/model/logic/ClusterVariance.d.ts:35

packages/matter.js/dist/cjs/model/logic/ClusterVariance.d.ts:13

___

### CommandElement

Ƭ **CommandElement**: [`ValueElement`](exports_model.md#valueelement) & { `direction?`: \`${Direction}\` ; `id`: [`Mei`](exports_model.md#mei) ; `response?`: `string` ; `tag`: \`${Tag}\`  }

A command describes a remote procedure call.

#### Defined in

packages/matter.js/dist/cjs/model/elements/CommandElement.d.ts:18

packages/matter.js/dist/cjs/model/elements/CommandElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/CommandElement.d.ts:19

___

### DatatypeElement

Ƭ **DatatypeElement**: [`ValueElement`](exports_model.md#valueelement) & { `children?`: [`DatatypeElement`](exports_model.md#datatypeelement)[] ; `id?`: [`Mei`](exports_model.md#mei) ; `metatype?`: \`${Metatype}\` ; `tag`: \`${Tag}\`  }

A datatype element defines a standalone datatype.

#### Defined in

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:28

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:29

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

packages/matter.js/dist/cjs/model/definitions/DefinitionError.d.ts:9

___

### DeviceTypeElement

Ƭ **DeviceTypeElement**: [`BaseElement`](exports_model.md#baseelement) & { `category?`: `string` ; `children?`: ([`RequirementElement`](exports_model.md#requirementelement) \| [`DatatypeElement`](exports_model.md#datatypeelement))[] ; `classification`: \`${Classification}\` ; `id?`: [`Mei`](exports_model.md#mei) ; `tag`: \`${Tag}\`  }

Details on a specific device as defined in the Matter specification.

TODO - extract/merge DeviceTypes.ts?

#### Defined in

packages/matter.js/dist/cjs/model/elements/DeviceTypeElement.d.ts:22

packages/matter.js/dist/cjs/model/elements/DeviceTypeElement.d.ts:15

packages/matter.js/dist/cjs/model/elements/DeviceTypeElement.d.ts:23

___

### EndpointElement

Ƭ **EndpointElement**: [`BaseElement`](exports_model.md#baseelement) & { `children`: [`DeviceTypeElement`](exports_model.md#devicetypeelement)[] ; `id`: `number` ; `tag`: \`${Tag}\`  }

Runtime representation of an endpoint.

#### Defined in

packages/matter.js/dist/cjs/model/elements/EndpointElement.d.ts:17

packages/matter.js/dist/cjs/model/elements/EndpointElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/EndpointElement.d.ts:18

___

### EventElement

Ƭ **EventElement**: [`ValueElement`](exports_model.md#valueelement) & { `id`: [`Mei`](exports_model.md#mei) ; `priority?`: \`${Priority}\` ; `tag`: \`${Tag}\`  }

An event is triggered by endpoints.

#### Defined in

packages/matter.js/dist/cjs/model/elements/EventElement.d.ts:17

packages/matter.js/dist/cjs/model/elements/EventElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/EventElement.d.ts:18

___

### FabricElement

Ƭ **FabricElement**: [`BaseElement`](exports_model.md#baseelement) & { `children`: [`NodeElement`](exports_model.md#nodeelement)[] ; `id`: `number` ; `tag`: \`${Tag}\`  }

Runtime representation of a fabric.

#### Defined in

packages/matter.js/dist/cjs/model/elements/FabricElement.d.ts:17

packages/matter.js/dist/cjs/model/elements/FabricElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/FabricElement.d.ts:18

___

### FeatureBitmap

Ƭ **FeatureBitmap**: `Object`

#### Index signature

▪ [name: `string`]: `boolean`

#### Defined in

packages/matter.js/dist/cjs/model/logic/cluster-variance/FeatureBitmap.d.ts:14

packages/matter.js/dist/cjs/model/logic/cluster-variance/FeatureBitmap.d.ts:8

___

### FeatureFlags

Ƭ **FeatureFlags**: `string`[]

#### Defined in

packages/matter.js/dist/cjs/model/logic/cluster-variance/FeatureBitmap.d.ts:7

___

### FeatureNames

Ƭ **FeatureNames**: `Object`

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

packages/matter.js/dist/cjs/model/logic/cluster-variance/FeatureBitmap.d.ts:11

___

### FieldValue

Ƭ **FieldValue**: ``null`` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| [`Properties`](exports_model.FieldValue.md#properties) \| [`Reference`](exports_model.FieldValue.md#reference) \| [`Percent`](exports_model.FieldValue.md#percent) \| [`Celsius`](exports_model.FieldValue.md#celsius)

A FieldValue represents a concrete value for a datatype.  Most values are
primitives but some values we encode with specialized typed objects so we
can capture the original semantic meaning.

#### Defined in

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:11

packages/matter.js/dist/cjs/model/definitions/FieldValue.d.ts:12

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

packages/matter.js/dist/cjs/model/definitions/identifiers.d.ts:19

___

### MatterElement

Ƭ **MatterElement**: [`BaseElement`](exports_model.md#baseelement) & { `children`: [`Child`](exports_model.MatterElement.md#child)[] ; `tag`: \`${Matter}\` ; `version?`: `string`  }

The root model element.

#### Defined in

packages/matter.js/dist/cjs/model/elements/MatterElement.d.ts:22

packages/matter.js/dist/cjs/model/elements/MatterElement.d.ts:17

packages/matter.js/dist/cjs/model/elements/MatterElement.d.ts:23

___

### Mei

Ƭ **Mei**: [`ManufacturerExtensibleIdentifier`](exports_model.md#manufacturerextensibleidentifier)

#### Defined in

packages/matter.js/dist/cjs/model/definitions/identifiers.d.ts:20

___

### NodeElement

Ƭ **NodeElement**: [`BaseElement`](exports_model.md#baseelement) & { `children?`: [`EndpointElement`](exports_model.md#endpointelement)[] ; `id`: `number` ; `tag`: \`${Tag}\`  }

Runtime representation of a node.

#### Defined in

packages/matter.js/dist/cjs/model/elements/NodeElement.d.ts:17

packages/matter.js/dist/cjs/model/elements/NodeElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/NodeElement.d.ts:18

___

### RequirementElement

Ƭ **RequirementElement**: [`BaseElement`](exports_model.md#baseelement) & { `access?`: [`Definition`](exports_model.Access.md#definition) ; `children?`: ([`RequirementElement`](exports_model.md#requirementelement) \| [`DatatypeElement`](exports_model.md#datatypeelement))[] ; `conformance?`: [`Definition`](exports_model.Conformance.md#definition) ; `constraint?`: [`Definition`](exports_model.Constraint.md#definition) ; `element`: \`${ElementType}\` ; `quality?`: [`Definition`](exports_model.Quality.md#definition) ; `tag`: \`${Tag}\`  }

Describes a cluster or cluster element requirement for a device.

#### Defined in

packages/matter.js/dist/cjs/model/elements/RequirementElement.d.ts:24

packages/matter.js/dist/cjs/model/elements/RequirementElement.d.ts:12

packages/matter.js/dist/cjs/model/elements/RequirementElement.d.ts:25

___

### TraverseMap

Ƭ **TraverseMap**: `Object`

Input to traverse().

#### Index signature

▪ [sourceName: `string`]: [`Model`](../classes/exports_model.Model-1.md) \| [`AnyElement`](exports_model.md#anyelement)

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:20

___

### ValueElement

Ƭ **ValueElement**: [`BaseElement`](exports_model.md#baseelement) & { `access?`: [`Definition`](exports_model.Access.md#definition) ; `byteSize?`: [`Size`](exports_model.ValueElement.md#size) ; `children?`: [`AnyValueElement`](exports_model.md#anyvalueelement)[] ; `conformance?`: [`Definition`](exports_model.Conformance.md#definition) ; `constraint?`: [`Definition`](exports_model.Constraint.md#definition) ; `default?`: [`FieldValue`](exports_model.md#fieldvalue) ; `quality?`: [`Definition`](exports_model.Quality.md#definition) ; `type?`: `string`  }

A base element for all elements that represent data values.

#### Defined in

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:52

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:13

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:53

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

packages/matter.js/dist/cjs/model/logic/cluster-variance/VarianceCondition.d.ts:12

___

### VariantMap

Ƭ **VariantMap**: `Object`

This is a map of equivalent models keyed by "source name".  The source
name is a string that identifies the source of the variant, such as "chip",
"spec" or "local".

#### Index signature

▪ [sourceName: `string`]: [`Model`](../classes/exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/logic/ModelVariantTraversal.d.ts:14

## Variables

### Critical

• `Const` **Critical**: [`Critical`](../enums/exports_model.EventElement.Priority.md#critical) = `EventElement.Priority.Critical`

#### Defined in

packages/matter.js/dist/cjs/model/elements/EventElement.d.ts:41

___

### Debug

• `Const` **Debug**: [`Debug`](../enums/exports_model.EventElement.Priority.md#debug) = `EventElement.Priority.Debug`

#### Defined in

packages/matter.js/dist/cjs/model/elements/EventElement.d.ts:39

___

### ENUM8

• `Const` **ENUM8**: ``"enum8"``

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:10

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
| `AcceptedCommandListList` | [`AttributeElement`](exports_model.md#attributeelement) | - |
| `AttributeList` | [`AttributeElement`](exports_model.md#attributeelement) | - |
| `ClusterRevision` | [`AttributeElement`](exports_model.md#attributeelement) | - |
| `EventList` | [`AttributeElement`](exports_model.md#attributeelement) | - |
| `FabricIndex` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `FeatureMap` | [`AttributeElement`](exports_model.md#attributeelement) | - |
| `GeneratedCommandList` | [`AttributeElement`](exports_model.md#attributeelement) | - |
| `SubjectId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `actionId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `any` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `attributeId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `bool` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `clusterId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `commandId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `dataVer` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `date` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `deviceTypeId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `double` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `endpointNo` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `entryIdx` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `enum16` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `enum8` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `epochS` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `epochUs` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `eui64` | [`DatatypeElement`](exports_model.md#datatypeelement) | **`Deprecated`** by Matter specification |
| `eventId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `eventNo` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `fabricId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `fabricIdx` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `fieldId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `groupId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `hwadr` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int16` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int24` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int32` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int40` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int48` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int56` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int64` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `int8` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `ipadr` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `ipv4adr` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `ipv6adr` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `ipv6pre` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `list` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `map16` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `map32` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `map64` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `map8` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `nodeId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `octstr` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `percent` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `percent100ths` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `posixMs` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `priority` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `single` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `status` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `string` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `struct` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `systimeMs` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `systimeUs` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `tod` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `transactionId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint16` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint24` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint32` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint40` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint48` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint56` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint64` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `uint8` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |
| `utc` | [`DatatypeElement`](exports_model.md#datatypeelement) | **`Deprecated`** by Matter specification |
| `vendorId` | [`DatatypeElement`](exports_model.md#datatypeelement) | - |

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:24

___

### Info

• `Const` **Info**: [`Info`](../enums/exports_model.EventElement.Priority.md#info) = `EventElement.Priority.Info`

#### Defined in

packages/matter.js/dist/cjs/model/elements/EventElement.d.ts:40

___

### Matter

• `Const` **Matter**: [`MatterElement`](exports_model.md#matterelement)

Canonical instance of the Matter Object Model.

#### Defined in

packages/matter.js/dist/cjs/model/standard/Matter.d.ts:10

___

### OCTSTR

• `Const` **OCTSTR**: ``"octstr"``

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:8

___

### STRUCT

• `Const` **STRUCT**: ``"struct"``

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:9

___

### UINT16

• `Const` **UINT16**: ``"uint16"``

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:12

___

### UINT32

• `Const` **UINT32**: ``"uint32"``

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:13

___

### UINT64

• `Const` **UINT64**: ``"uint64"``

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:14

___

### UINT8

• `Const` **UINT8**: ``"uint8"``

#### Defined in

packages/matter.js/dist/cjs/model/elements/Globals.d.ts:11

## Functions

### AttributeElement

▸ **AttributeElement**(`definition`): [`AttributeElement`](exports_model.md#attributeelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.AttributeElement.md#properties) |

#### Returns

[`AttributeElement`](exports_model.md#attributeelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/AttributeElement.d.ts:16

___

### BaseElement

▸ **BaseElement**(`tag`, `definition`): [`BaseElement`](exports_model.md#baseelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [`ElementTag`](../enums/exports_model.ElementTag.md) |
| `definition` | [`BaseElement`](exports_model.md#baseelement) |

#### Returns

[`BaseElement`](exports_model.md#baseelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/BaseElement.d.ts:54

___

### ClusterElement

▸ **ClusterElement**(`definition`): [`ClusterElement`](exports_model.md#clusterelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.ClusterElement.md#properties) |

#### Returns

[`ClusterElement`](exports_model.md#clusterelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/ClusterElement.d.ts:28

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

packages/matter.js/dist/cjs/model/logic/ClusterVariance.d.ts:35

___

### CommandElement

▸ **CommandElement**(`definition`): [`CommandElement`](exports_model.md#commandelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.CommandElement.md#properties) |

#### Returns

[`CommandElement`](exports_model.md#commandelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/CommandElement.d.ts:18

___

### DatatypeElement

▸ **DatatypeElement**(`definition`): [`DatatypeElement`](exports_model.md#datatypeelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.DatatypeElement.md#properties) |

#### Returns

[`DatatypeElement`](exports_model.md#datatypeelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/DatatypeElement.d.ts:28

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

packages/matter.js/dist/cjs/model/logic/DefaultValue.d.ts:15

___

### DeviceTypeElement

▸ **DeviceTypeElement**(`definition`): [`DeviceTypeElement`](exports_model.md#devicetypeelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.DeviceTypeElement.md#properties) |

#### Returns

[`DeviceTypeElement`](exports_model.md#devicetypeelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/DeviceTypeElement.d.ts:22

___

### EndpointElement

▸ **EndpointElement**(`definition`): [`EndpointElement`](exports_model.md#endpointelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.EndpointElement.md#properties) |

#### Returns

[`EndpointElement`](exports_model.md#endpointelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/EndpointElement.d.ts:17

___

### EventElement

▸ **EventElement**(`definition`): [`EventElement`](exports_model.md#eventelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.EventElement.md#properties) |

#### Returns

[`EventElement`](exports_model.md#eventelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/EventElement.d.ts:17

___

### FabricElement

▸ **FabricElement**(`definition`): [`BaseElement`](exports_model.md#baseelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Properties`](exports_model.FabricElement.md#properties) |

#### Returns

[`BaseElement`](exports_model.md#baseelement)

#### Defined in

packages/matter.js/dist/cjs/model/elements/FabricElement.d.ts:17

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

packages/matter.js/dist/cjs/model/logic/cluster-variance/FeatureBitmap.d.ts:14

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

packages/matter.js/dist/cjs/model/elements/MatterElement.d.ts:22

___

### MergeModels

▸ **MergeModels**(`variants`, `priorities?`): [`Model`](../classes/exports_model.Model-1.md)

Merge multiple variants of an element into a single element.

#### Parameters

| Name | Type |
| :------ | :------ |
| `variants` | [`TraverseMap`](exports_model.md#traversemap) |
| `priorities?` | [`Priorities`](exports_model.MergeModels.md#priorities) |

#### Returns

[`Model`](../classes/exports_model.Model-1.md)

#### Defined in

packages/matter.js/dist/cjs/model/logic/MergeModels.d.ts:11

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

packages/matter.js/dist/cjs/model/elements/NodeElement.d.ts:17

___

### RecordValidator

▸ **RecordValidator**(`fields`, `featureMap`, `features`): [`RecordValidator`](../interfaces/export._internal_.RecordValidator.md)

Creates a utility object that can validate records based on a model.

TODO - doesn't currently recurse into children

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fields` | [`ValueModel`](../classes/exports_model.ValueModel.md)[] | defines the record to test |
| `featureMap` | [`ValueModel`](../classes/exports_model.ValueModel.md) | - |
| `features` | [`FeatureSet`](../classes/exports_model.FeatureSet-1.md) | active features |

#### Returns

[`RecordValidator`](../interfaces/export._internal_.RecordValidator.md)

a Validator

#### Defined in

packages/matter.js/dist/cjs/model/logic/RecordValidator.d.ts:19

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

packages/matter.js/dist/cjs/model/elements/RequirementElement.d.ts:24

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

packages/matter.js/dist/cjs/model/logic/ValidateModel.d.ts:21

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

packages/matter.js/dist/cjs/model/elements/ValueElement.d.ts:52

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

packages/matter.js/dist/cjs/model/logic/cluster-variance/VarianceCondition.d.ts:20

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

packages/matter.js/dist/cjs/model/logic/cluster-variance/FeatureBitmap.d.ts:23
