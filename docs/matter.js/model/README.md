[**@project-chip/matter.js**](../README.md) • **Docs**

***

[@project-chip/matter.js](../modules.md) / model

# model

## Index

### Modules

- [\<internal\>](-internal-/README.md)

### Namespaces

- [Access](namespaces/Access/README.md)
- [AttributeElement](namespaces/AttributeElement/README.md)
- [BaseElement](namespaces/BaseElement/README.md)
- [ClusterElement](namespaces/ClusterElement/README.md)
- [ClusterModel](namespaces/ClusterModel/README.md)
- [CommandElement](namespaces/CommandElement/README.md)
- [Conformance](namespaces/Conformance/README.md)
- [Constraint](namespaces/Constraint/README.md)
- [DatatypeElement](namespaces/DatatypeElement/README.md)
- [DeviceTypeElement](namespaces/DeviceTypeElement/README.md)
- [EndpointElement](namespaces/EndpointElement/README.md)
- [EventElement](namespaces/EventElement/README.md)
- [FabricElement](namespaces/FabricElement/README.md)
- [FeatureSet](namespaces/FeatureSet/README.md)
- [FieldElement](namespaces/FieldElement/README.md)
- [FieldValue](namespaces/FieldValue/README.md)
- [MatterElement](namespaces/MatterElement/README.md)
- [MatterModel](namespaces/MatterModel/README.md)
- [MergedModel](namespaces/MergedModel/README.md)
- [Metatype](namespaces/Metatype/README.md)
- [Model](namespaces/Model/README.md)
- [NodeElement](namespaces/NodeElement/README.md)
- [Quality](namespaces/Quality/README.md)
- [RequirementElement](namespaces/RequirementElement/README.md)
- [Specification](namespaces/Specification/README.md)
- [ValidateModel](namespaces/ValidateModel/README.md)
- [ValueElement](namespaces/ValueElement/README.md)

### Enumerations

- [ElementTag](enumerations/ElementTag.md)
- [Metatype](enumerations/Metatype.md)
- [Specification](enumerations/Specification.md)
- [StatusCode](enumerations/StatusCode.md)

### Classes

- [Access](classes/Access.md)
- [Aspect](classes/Aspect.md)
- [AttributeModel](classes/AttributeModel.md)
- [ClusterModel](classes/ClusterModel.md)
- [CommandModel](classes/CommandModel.md)
- [Conformance](classes/Conformance.md)
- [Constraint](classes/Constraint.md)
- [DatatypeModel](classes/DatatypeModel.md)
- [DeviceTypeModel](classes/DeviceTypeModel.md)
- [EndpointModel](classes/EndpointModel.md)
- [EventModel](classes/EventModel.md)
- [FabricModel](classes/FabricModel.md)
- [FeatureSet](classes/FeatureSet.md)
- [FieldModel](classes/FieldModel.md)
- [MatterModel](classes/MatterModel.md)
- [Model](classes/Model.md)
- [ModelVariantTraversal](classes/ModelVariantTraversal.md)
- [NodeModel](classes/NodeModel.md)
- [PropertyModel](classes/PropertyModel.md)
- [Quality](classes/Quality.md)
- [RequirementModel](classes/RequirementModel.md)
- [ValueModel](classes/ValueModel.md)

### Interfaces

- [AttributeElement](interfaces/AttributeElement.md)
- [BaseElement](interfaces/BaseElement.md)
- [ClusterElement](interfaces/ClusterElement.md)
- [CommandElement](interfaces/CommandElement.md)
- [DatatypeElement](interfaces/DatatypeElement.md)
- [DeviceTypeElement](interfaces/DeviceTypeElement.md)
- [EndpointElement](interfaces/EndpointElement.md)
- [EventElement](interfaces/EventElement.md)
- [FabricElement](interfaces/FabricElement.md)
- [FieldElement](interfaces/FieldElement.md)
- [VariantDetail](interfaces/VariantDetail.md)

## Type Aliases

### AnyElement

> **AnyElement**: [`AnyValueElement`](README.md#anyvalueelement) \| [`ClusterElement`](interfaces/ClusterElement.md) \| [`DeviceTypeElement`](interfaces/DeviceTypeElement.md) \| [`RequirementElement`](README.md#requirementelement) \| [`EndpointElement`](interfaces/EndpointElement.md) \| [`FabricElement`](interfaces/FabricElement.md) \| [`NodeElement`](README.md#nodeelement) \| [`MatterElement`](README.md#matterelement)

Any Matter element.

#### Source

[packages/matter.js/src/model/elements/AnyElement.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/AnyElement.ts#L19)

***

### AnyValueElement

> **AnyValueElement**: [`AttributeElement`](interfaces/AttributeElement.md) \| [`CommandElement`](interfaces/CommandElement.md) \| [`EventElement`](interfaces/EventElement.md) \| [`FieldElement`](interfaces/FieldElement.md) \| [`DatatypeElement`](interfaces/DatatypeElement.md)

All Matter data elements.

#### Source

[packages/matter.js/src/model/elements/AnyValueElement.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/AnyValueElement.ts#L16)

***

### ClusterVariance

> **ClusterVariance**: `object`

Defines different variants of clusters.

#### Type declaration

##### base

> **base**: [`InferredComponent`](README.md#inferredcomponent)

The base component.

##### components

> **components**: [`NamedComponents`](README.md#namedcomponents)

Optional components.

##### illegal

> **illegal**: [`IllegalFeatureCombinations`](README.md#illegalfeaturecombinations)

Illegal feature combinations as bit flags.

##### requiresFeatures

> **requiresFeatures**: `boolean`

If this is false, the cluster cannot be used without features.

#### Source

[packages/matter.js/src/model/logic/ClusterVariance.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ClusterVariance.ts#L41)

***

### DefinitionError

> **DefinitionError**: `object`

Describes an error in model construction.

#### Type declaration

##### code

> **code**: `string`

##### message

> **message**: `string`

##### source

> **source**: `string`

##### xref?

> `optional` **xref**: `string`

#### Source

[packages/matter.js/src/model/definitions/DefinitionError.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/DefinitionError.ts#L10)

***

### FeatureBitmap

> **FeatureBitmap**: `object`

#### Index signature

 \[`name`: `string`\]: `boolean`

#### Source

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L14)

***

### FeatureFlags

> **FeatureFlags**: `string`[]

#### Source

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:10](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L10)

***

### FeatureNames

> **FeatureNames**: `object`

#### Index signature

 \[`key`: `string`\]: `string`

#### Source

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L12)

***

### FieldValue

> **FieldValue**: `null` \| `string` \| `number` \| `bigint` \| `boolean` \| `Date` \| [] \| [`Properties`](namespaces/FieldValue/README.md#properties) \| [`Reference`](namespaces/FieldValue/README.md#reference) \| [`Percent`](namespaces/FieldValue/README.md#percent) \| [`Celsius`](namespaces/FieldValue/README.md#celsius)

A FieldValue represents a concrete value for a datatype.  Most values are
primitives but some values we encode with specialized typed objects so we
can capture the original semantic meaning.

#### Source

[packages/matter.js/src/model/definitions/FieldValue.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/definitions/FieldValue.ts#L15)

***

### IllegalFeatureCombinations

> **IllegalFeatureCombinations**: [`FeatureBitmap`](README.md#featurebitmap)[]

#### Source

[packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts#L31)

***

### InferredComponent

> **InferredComponent**: `object`

Lists mandatory and optional elements for a specific context.

#### Type declaration

##### condition?

> `optional` **condition**: [`VarianceCondition`](README.md#variancecondition)

##### mandatory

> **mandatory**: [`ValueModel`](classes/ValueModel.md)[]

##### optional

> **optional**: [`ValueModel`](classes/ValueModel.md)[]

#### Source

[packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts:15](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts#L15)

***

### InferredComponents

> **InferredComponents**: [`InferredComponent`](README.md#inferredcomponent)[]

A list of component definitions.

#### Source

[packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts#L29)

***

### MatterElement

> **MatterElement**: [`BaseElement`](interfaces/BaseElement.md) & `object`

The root model element.

#### Type declaration

##### children

> **children**: [`Child`](namespaces/MatterElement/README.md#child)[]

##### tag

> **tag**: \`$\{Matter\}\`

##### version?

> `optional` **version**: `string`

#### Source

[packages/matter.js/src/model/elements/MatterElement.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/MatterElement.ts#L26)

***

### NamedComponent

> **NamedComponent**: [`InferredComponent`](README.md#inferredcomponent) & `object`

An inferred component with generated name and documentation.

#### Type declaration

##### documentation

> **documentation**: `string`

##### name

> **name**: `string`

#### Source

[packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts#L14)

***

### NamedComponents

> **NamedComponents**: [`NamedComponent`](README.md#namedcomponent)[]

A set of components keyed by generated names.

#### Source

[packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts#L27)

***

### NodeElement

> **NodeElement**: [`BaseElement`](interfaces/BaseElement.md) & `object`

Runtime representation of a node.

#### Type declaration

##### children?

> `optional` **children**: [`EndpointElement`](interfaces/EndpointElement.md)[]

##### id

> **id**: `number`

##### tag

> **tag**: \`$\{Tag\}\`

#### Source

[packages/matter.js/src/model/elements/NodeElement.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/NodeElement.ts#L20)

***

### RequirementElement

> **RequirementElement**: [`BaseElement`](interfaces/BaseElement.md) & `object`

Describes a cluster or cluster element requirement for a device.

#### Type declaration

##### access?

> `optional` **access**: [`Definition`](namespaces/Access/README.md#definition)

##### children?

> `optional` **children**: ([`RequirementElement`](README.md#requirementelement) \| [`FieldElement`](interfaces/FieldElement.md))[]

##### conformance?

> `optional` **conformance**: [`Definition`](namespaces/Conformance/README.md#definition)

##### constraint?

> `optional` **constraint**: [`Definition`](namespaces/Constraint/README.md#definition)

##### default?

> `optional` **default**: `any`

##### element

> **element**: \`$\{ElementType\}\`

Requirement element type.

##### quality?

> `optional` **quality**: [`Definition`](namespaces/Quality/README.md#definition)

##### tag

> **tag**: \`$\{Tag\}\`

#### Source

[packages/matter.js/src/model/elements/RequirementElement.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/RequirementElement.ts#L31)

***

### TraverseMap

> **TraverseMap**: `object`

Input to traverse().

#### Index signature

 \[`sourceName`: `string`\]: [`Model`](classes/Model.md) \| [`AnyElement`](README.md#anyelement)

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L25)

***

### ValueElement

> **ValueElement**: [`BaseElement`](interfaces/BaseElement.md) & `object`

A base element for all elements that represent data values.

#### Type declaration

##### access?

> `optional` **access**: [`Definition`](namespaces/Access/README.md#definition)

Authorization limits.

##### byteSize?

> `optional` **byteSize**: [`Size`](namespaces/ValueElement/README.md#size)

Applies to numeric types.

##### children?

> `optional` **children**: [`AnyValueElement`](README.md#anyvalueelement)[]

Nested structures that may have data elements include enums, structs and
lists.

##### conformance?

> `optional` **conformance**: [`Definition`](namespaces/Conformance/README.md#definition)

Optionality control.

##### constraint?

> `optional` **constraint**: [`Definition`](namespaces/Constraint/README.md#definition)

Limits on values.

##### default?

> `optional` **default**: [`FieldValue`](README.md#fieldvalue)

The default value for the element.

##### quality?

> `optional` **quality**: [`Definition`](namespaces/Quality/README.md#definition)

Other qualities not covered by conformance or access.

##### type?

> `optional` **type**: `string`

Derived datatypes as defined by the Matter Specification must specify the name of the base type.  This is every
type that is not global.

Elements may use the shortcut "list[EntryType]" to designate an element as type "list" with a single child that
is the entry type.

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L62)

***

### VarianceCondition

> **VarianceCondition**: `object`

The condition for supported patterns of complex variance on Cluster
Attributes, Commands and Events.

#### Type declaration

##### allOf?

> `optional` **allOf**: `string`[]

##### anyOf?

> `optional` **anyOf**: `string`[]

##### not?

> `optional` **not**: `string`

#### Source

[packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts#L14)

***

### VariantMap

> **VariantMap**: `object`

This is a map of equivalent models keyed by "source name".  The source name is a string that identifies the source of
the variant, such as "chip", "spec" or "local".

#### Index signature

 \[`sourceName`: `string`\]: [`Model`](classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/ModelVariantTraversal.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ModelVariantTraversal.ts#L20)

## Variables

### Critical

> `const` **Critical**: [`Critical`](namespaces/EventElement/enumerations/Priority.md#critical) = `EventElement.Priority.Critical`

#### Source

[packages/matter.js/src/model/elements/EventElement.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/EventElement.ts#L53)

***

### Debug

> `const` **Debug**: [`Debug`](namespaces/EventElement/enumerations/Priority.md#debug) = `EventElement.Priority.Debug`

#### Source

[packages/matter.js/src/model/elements/EventElement.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/EventElement.ts#L51)

***

### ENUM8

> `const` **ENUM8**: `"enum8"` = `"enum8"`

#### Source

[packages/matter.js/src/model/elements/Globals.ts:18](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L18)

***

### Globals

> `const` **Globals**: `object`

These are all of the global elements defined in the Matter Specification.
This includes types from the "data types" section and other elements from
the "global elements" section.

According to the specification, any type that is used by more than one
cluster should be defined here.  Various cluster-specific elements reference
these types or derive new types.

#### Type declaration

##### AcceptedCommandList

> **AcceptedCommandList**: [`AttributeElement`](interfaces/AttributeElement.md)

##### AttributeList

> **AttributeList**: [`AttributeElement`](interfaces/AttributeElement.md)

##### ClusterRevision

> **ClusterRevision**: [`AttributeElement`](interfaces/AttributeElement.md)

##### EventList

> **EventList**: [`AttributeElement`](interfaces/AttributeElement.md)

##### FabricIndex

> **FabricIndex**: [`FieldElement`](interfaces/FieldElement.md)

##### FeatureMap

> **FeatureMap**: [`AttributeElement`](interfaces/AttributeElement.md)

##### GeneratedCommandList

> **GeneratedCommandList**: [`AttributeElement`](interfaces/AttributeElement.md)

##### actionId

> **actionId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### any

> **any**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### attributeId

> **attributeId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### bool

> **bool**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### clusterId

> **clusterId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### commandId

> **commandId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### dataVer

> **dataVer**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### date

> **date**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### deviceTypeId

> **deviceTypeId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### double

> **double**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### elapsedS

> **elapsedS**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### endpointNo

> **endpointNo**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### entryIdx

> **entryIdx**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### enum16

> **enum16**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### enum8

> **enum8**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### epochS

> **epochS**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### epochUs

> **epochUs**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### ~~eui64~~

> **eui64**: [`DatatypeElement`](interfaces/DatatypeElement.md)

###### Deprecated

by Matter specification

##### eventId

> **eventId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### eventNo

> **eventNo**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### fabricId

> **fabricId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### fabricIdx

> **fabricIdx**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### fieldId

> **fieldId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### groupId

> **groupId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### hwadr

> **hwadr**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int16

> **int16**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int24

> **int24**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int32

> **int32**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int40

> **int40**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int48

> **int48**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int56

> **int56**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int64

> **int64**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### int8

> **int8**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### ipadr

> **ipadr**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### ipv4adr

> **ipv4adr**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### ipv6adr

> **ipv6adr**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### ipv6pre

> **ipv6pre**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### list

> **list**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### map16

> **map16**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### map32

> **map32**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### map64

> **map64**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### map8

> **map8**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### nodeId

> **nodeId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### octstr

> **octstr**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### percent

> **percent**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### percent100ths

> **percent100ths**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### posixMs

> **posixMs**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### priority

> **priority**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### single

> **single**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### status

> **status**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### string

> **string**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### struct

> **struct**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### subjectId

> **subjectId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### systimeMs

> **systimeMs**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### systimeUs

> **systimeUs**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### temperature

> **temperature**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### tod

> **tod**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### transactionId

> **transactionId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint16

> **uint16**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint24

> **uint24**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint32

> **uint32**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint40

> **uint40**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint48

> **uint48**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint56

> **uint56**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint64

> **uint64**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### uint8

> **uint8**: [`DatatypeElement`](interfaces/DatatypeElement.md)

##### ~~utc~~

> **utc**: [`DatatypeElement`](interfaces/DatatypeElement.md)

###### Deprecated

by Matter specification

##### vendorId

> **vendorId**: [`DatatypeElement`](interfaces/DatatypeElement.md)

#### Source

[packages/matter.js/src/model/elements/Globals.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L73)

***

### Info

> `const` **Info**: [`Info`](namespaces/EventElement/enumerations/Priority.md#info) = `EventElement.Priority.Info`

#### Source

[packages/matter.js/src/model/elements/EventElement.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/EventElement.ts#L52)

***

### Matter

> `const` **Matter**: [`MatterElement`](README.md#matterelement)

Canonical instance of the Matter Object Model.

#### Source

[packages/matter.js/src/model/standard/Matter.ts:12](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/standard/Matter.ts#L12)

***

### OCTSTR

> `const` **OCTSTR**: `"octstr"` = `"octstr"`

#### Source

[packages/matter.js/src/model/elements/Globals.ts:16](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L16)

***

### STRUCT

> `const` **STRUCT**: `"struct"` = `"struct"`

#### Source

[packages/matter.js/src/model/elements/Globals.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L17)

***

### UINT16

> `const` **UINT16**: `"uint16"` = `"uint16"`

#### Source

[packages/matter.js/src/model/elements/Globals.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L20)

***

### UINT32

> `const` **UINT32**: `"uint32"` = `"uint32"`

#### Source

[packages/matter.js/src/model/elements/Globals.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L21)

***

### UINT64

> `const` **UINT64**: `"uint64"` = `"uint64"`

#### Source

[packages/matter.js/src/model/elements/Globals.ts:22](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L22)

***

### UINT8

> `const` **UINT8**: `"uint8"` = `"uint8"`

#### Source

[packages/matter.js/src/model/elements/Globals.ts:19](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/Globals.ts#L19)

## Functions

### AttributeElement()

> **AttributeElement**(`definition`): [`AttributeElement`](interfaces/AttributeElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/AttributeElement/README.md#properties) |

#### Returns

[`AttributeElement`](interfaces/AttributeElement.md)

#### Source

[packages/matter.js/src/model/elements/AttributeElement.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/AttributeElement.ts#L20)

***

### BaseElement()

> **BaseElement**(`tag`, `definition`): [`BaseElement`](interfaces/BaseElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tag` | [`ElementTag`](enumerations/ElementTag.md) |
| `definition` | [`BaseElement`](interfaces/BaseElement.md) |

#### Returns

[`BaseElement`](interfaces/BaseElement.md)

#### Source

[packages/matter.js/src/model/elements/BaseElement.ts:64](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/BaseElement.ts#L64)

***

### ClusterElement()

> **ClusterElement**(`definition`): [`ClusterElement`](interfaces/ClusterElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/ClusterElement/README.md#properties) |

#### Returns

[`ClusterElement`](interfaces/ClusterElement.md)

#### Source

[packages/matter.js/src/model/elements/ClusterElement.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ClusterElement.ts#L43)

***

### ClusterVariance()

> **ClusterVariance**(`cluster`): [`ClusterVariance`](README.md#clustervariance)

Analyzes a cluster to determine components, component names and feature
flag -> component mapping.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](classes/ClusterModel.md) |

#### Returns

[`ClusterVariance`](README.md#clustervariance)

#### Source

[packages/matter.js/src/model/logic/ClusterVariance.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ClusterVariance.ts#L41)

***

### CommandElement()

> **CommandElement**(`definition`): [`CommandElement`](interfaces/CommandElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/CommandElement/README.md#properties) |

#### Returns

[`CommandElement`](interfaces/CommandElement.md)

#### Source

[packages/matter.js/src/model/elements/CommandElement.ts:25](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/CommandElement.ts#L25)

***

### DatatypeElement()

> **DatatypeElement**(`definition`): [`DatatypeElement`](interfaces/DatatypeElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/DatatypeElement/README.md#properties) |

#### Returns

[`DatatypeElement`](interfaces/DatatypeElement.md)

#### Source

[packages/matter.js/src/model/elements/DatatypeElement.ts:34](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DatatypeElement.ts#L34)

***

### DefaultValue()

> **DefaultValue**(`model`): `any`

Obtain a native JS default value for a ValueModel.

This code assumes defaults have been previously validated (e.g. by model
validator).  It throws errors for a few structural issues but generally
returns undefined if the model's default value cannot be converted to the
correct type.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`ValueModel`](classes/ValueModel.md) |

#### Returns

`any`

#### Source

[packages/matter.js/src/model/logic/DefaultValue.ts:21](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/DefaultValue.ts#L21)

***

### DeviceTypeElement()

> **DeviceTypeElement**(`definition`): [`DeviceTypeElement`](interfaces/DeviceTypeElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/DeviceTypeElement/README.md#properties) |

#### Returns

[`DeviceTypeElement`](interfaces/DeviceTypeElement.md)

#### Source

[packages/matter.js/src/model/elements/DeviceTypeElement.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/DeviceTypeElement.ts#L26)

***

### EndpointElement()

> **EndpointElement**(`definition`): [`EndpointElement`](interfaces/EndpointElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/EndpointElement/README.md#properties) |

#### Returns

[`EndpointElement`](interfaces/EndpointElement.md)

#### Source

[packages/matter.js/src/model/elements/EndpointElement.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/EndpointElement.ts#L20)

***

### EventElement()

> **EventElement**(`definition`): [`EventElement`](interfaces/EventElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/EventElement/README.md#properties) |

#### Returns

[`EventElement`](interfaces/EventElement.md)

#### Source

[packages/matter.js/src/model/elements/EventElement.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/EventElement.ts#L23)

***

### FabricElement()

> **FabricElement**(`definition`): [`BaseElement`](interfaces/BaseElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/FabricElement/README.md#properties) |

#### Returns

[`BaseElement`](interfaces/BaseElement.md)

#### Source

[packages/matter.js/src/model/elements/FabricElement.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/FabricElement.ts#L20)

***

### FeatureBitmap()

> **FeatureBitmap**(`bitmap`): [`FeatureBitmap`](README.md#featurebitmap)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitmap` | [`FeatureBitmap`](README.md#featurebitmap) \| [`FeatureFlags`](README.md#featureflags) |

#### Returns

[`FeatureBitmap`](README.md#featurebitmap)

#### Source

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:14](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L14)

***

### FieldElement()

> **FieldElement**(`definition`): [`FieldElement`](interfaces/FieldElement.md)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/FieldElement/README.md#properties) |

#### Returns

[`FieldElement`](interfaces/FieldElement.md)

#### Source

[packages/matter.js/src/model/elements/FieldElement.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/FieldElement.ts#L27)

***

### IllegalFeatureCombinations()

> **IllegalFeatureCombinations**(`cluster`): `object`

Analyzes feature conformance to ascertain feature combinations that are unsupported.  Uses rules to match the
conformance AST.

Rule matching is not exhaustive but supports a significant subset of the conformance dialect that is inclusive of all
feature conformances used by the 1.1 specifications.

Throws an error if conformance does not adhere to supported rules.  This indicates the ruleset needs augmentation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](classes/ClusterModel.md) |

#### Returns

`object`

##### illegal

> **illegal**: [`IllegalFeatureCombinations`](README.md#illegalfeaturecombinations)

##### requiresFeatures

> **requiresFeatures**: `boolean`

#### Source

[packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/IllegalFeatureCombinations.ts#L31)

***

### InferredComponents()

> **InferredComponents**(`cluster`): [`InferredComponents`](README.md#inferredcomponents)

Details components generated by analyzing variance of cluster elements.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](classes/ClusterModel.md) |

#### Returns

[`InferredComponents`](README.md#inferredcomponents)

#### Source

[packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/InferredComponents.ts#L29)

***

### MatterElement()

> **MatterElement**(`definition`): [`MatterElement`](README.md#matterelement)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/MatterElement/README.md#properties) |

#### Returns

[`MatterElement`](README.md#matterelement)

#### Source

[packages/matter.js/src/model/elements/MatterElement.ts:26](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/MatterElement.ts#L26)

***

### MergedModel()

> **MergedModel**(`variants`, `priorities`): [`Model`](classes/Model.md)

Merge multiple variants of an element into a single element.

#### Parameters

| Parameter | Type | Default value |
| :------ | :------ | :------ |
| `variants` | [`TraverseMap`](README.md#traversemap) | `undefined` |
| `priorities` | [`Priorities`](namespaces/MergedModel/README.md#priorities) | `MergedModel.DefaultPriorities` |

#### Returns

[`Model`](classes/Model.md)

#### Source

[packages/matter.js/src/model/logic/MergedModel.ts:17](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/MergedModel.ts#L17)

***

### NamedComponents()

> **NamedComponents**(`cluster`, `inferredComponents`): `object`

Compute name and documentation a set of inferred components.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `cluster` | [`ClusterModel`](classes/ClusterModel.md) |
| `inferredComponents` | [`InferredComponents`](README.md#inferredcomponents) |

#### Returns

`object`

##### base

> **base**: [`InferredComponent`](README.md#inferredcomponent)

##### components

> **components**: [`NamedComponents`](README.md#namedcomponents)

#### Source

[packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts:27](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/NamedComponents.ts#L27)

***

### NodeElement()

> **NodeElement**(`definition`): [`NodeElement`](README.md#nodeelement)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/NodeElement/README.md#properties) |

#### Returns

[`NodeElement`](README.md#nodeelement)

#### Source

[packages/matter.js/src/model/elements/NodeElement.ts:20](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/NodeElement.ts#L20)

***

### RequirementElement()

> **RequirementElement**(`definition`): [`RequirementElement`](README.md#requirementelement)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `definition` | [`Properties`](namespaces/RequirementElement/README.md#properties) |

#### Returns

[`RequirementElement`](README.md#requirementelement)

#### Source

[packages/matter.js/src/model/elements/RequirementElement.ts:31](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/RequirementElement.ts#L31)

***

### ValidateModel()

> **ValidateModel**(`model`): [`Result`](namespaces/ValidateModel/classes/Result.md)

Ensures that a model's definition is correct.  Places errors into the error
array of invalid models.

Makes a few minor modifications to the model as a side effect:

- Default values are cast to the correct type if possible
- Cross-references are deleted if they're redundant with the parent

Note that we run validation against model classes rather than element
datatypes.  The classes implement type resolution, error handling and other
logic we rely on for validation.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `model` | [`Model`](classes/Model.md) |

#### Returns

[`Result`](namespaces/ValidateModel/classes/Result.md)

#### Source

[packages/matter.js/src/model/logic/ValidateModel.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/ValidateModel.ts#L28)

***

### ValueElement()

> **ValueElement**(`tag`, `definition`): [`ValueElement`](README.md#valueelement)

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `tag` | [`ElementTag`](enumerations/ElementTag.md) |
| `definition` | [`ValueElement`](README.md#valueelement) |

#### Returns

[`ValueElement`](README.md#valueelement)

#### Source

[packages/matter.js/src/model/elements/ValueElement.ts:62](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/elements/ValueElement.ts#L62)

***

### conditionToBitmaps()

> **conditionToBitmaps**(`condition`, `cluster`): [`FeatureBitmap`](README.md#featurebitmap)[]

Convert a VarianceCondition to an array of FeatureBitmaps.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `condition` | [`VarianceCondition`](README.md#variancecondition) |
| `cluster` | [`ClusterModel`](classes/ClusterModel.md) |

#### Returns

[`FeatureBitmap`](README.md#featurebitmap)[]

#### Source

[packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts:23](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/VarianceCondition.ts#L23)

***

### translateBitmap()

> **translateBitmap**(`bitmap`, `cluster`): `object`

Map the names in a feature bitmap to different names.  Used to convert from
a feature code bitmap to a feature name bitmap.

E.g. { F: true } -> { foo: true }

If a name isn't present leaves the feature code intact.

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `bitmap` | [`FeatureBitmap`](README.md#featurebitmap) |
| `cluster` | [`ClusterModel`](classes/ClusterModel.md) |

#### Returns

`object`

#### Source

[packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts:29](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/model/logic/cluster-variance/FeatureBitmap.ts#L29)
