[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ClusterFactory

# Namespace: ClusterFactory

[exports/cluster](exports_cluster.md).ClusterFactory

The formal definitions of clusters in matter.js are generated
programmatically.  There is no single formal "cluster factory" but rather a
set of types and methods for each cluster.

Individual modules associated with each cluster use the utility types and
methods as building blocks.

Note:  There is overlap between the types here and those in Cluster.ts.
They may converge over time but are fully compatible.

## Table of contents

### Interfaces

- [Cluster](../interfaces/exports_cluster.ClusterFactory.Cluster.md)
- [ClusterElements](../interfaces/exports_cluster.ClusterFactory.ClusterElements.md)
- [Component](../interfaces/exports_cluster.ClusterFactory.Component.md)
- [Extensible](../interfaces/exports_cluster.ClusterFactory.Extensible.md)
- [Features](../interfaces/exports_cluster.ClusterFactory.Features.md)
- [Identity](../interfaces/exports_cluster.ClusterFactory.Identity.md)
- [TypedComponent](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)

### Type Aliases

- [Attribute](exports_cluster.ClusterFactory.md#attribute)
- [AttributesOf](exports_cluster.ClusterFactory.md#attributesof)
- [Command](exports_cluster.ClusterFactory.md#command)
- [CommandsOf](exports_cluster.ClusterFactory.md#commandsof)
- [Definition](exports_cluster.ClusterFactory.md#definition)
- [Element](exports_cluster.ClusterFactory.md#element)
- [ElementSet](exports_cluster.ClusterFactory.md#elementset)
- [Event](exports_cluster.ClusterFactory.md#event)
- [EventsOf](exports_cluster.ClusterFactory.md#eventsof)
- [Extender](exports_cluster.ClusterFactory.md#extender)
- [MutableDefinition](exports_cluster.ClusterFactory.md#mutabledefinition)
- [PartialDefinition](exports_cluster.ClusterFactory.md#partialdefinition)

### Functions

- [AsConditional](exports_cluster.ClusterFactory.md#asconditional)
- [Component](exports_cluster.ClusterFactory.md#component)
- [Definition](exports_cluster.ClusterFactory.md#definition-1)
- [Extensible](exports_cluster.ClusterFactory.md#extensible)
- [ExtensibleOnly](exports_cluster.ClusterFactory.md#extensibleonly)
- [extend](exports_cluster.ClusterFactory.md#extend)
- [prevent](exports_cluster.ClusterFactory.md#prevent)
- [validateFeatureSelection](exports_cluster.ClusterFactory.md#validatefeatureselection)

## Type Aliases

### Attribute

Ƭ **Attribute**: [`Attribute`](exports_cluster.md#attribute)<`any`, `any`\>

Definition of a cluster attribute.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:33

___

### AttributesOf

Ƭ **AttributesOf**<`C`\>: `C` extends { `attributes`: infer E  } ? { [K in Extract<keyof E, string\> as E[K] extends Attribute ? K : never]: E[K] } : `never`

Extract the type of a cluster's attributes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md) |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:199

___

### Command

Ƭ **Command**: [`Command`](exports_cluster.md#command)<`any`, `any`, `any`\>

Definition of a cluster command.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:37

___

### CommandsOf

Ƭ **CommandsOf**<`C`\>: `C` extends { `commands`: infer E  } ? { [K in Extract<keyof E, string\> as E[K] extends Command ? K : never]: E[K] } : `never`

Extract the type of a cluster's commands.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md) |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:209

___

### Definition

Ƭ **Definition**<`T`\>: { `attributes`: `T`[``"attributes"``] extends infer A ? [`Merge`](util_export.md#merge)<`A`, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`T`[``"features"``] extends {} ? `T`[``"features"``] : {}\>\> : {} ; `commands`: `T`[``"commands"``] extends {} ? `T`[``"commands"``] : {} ; `events`: `T`[``"events"``] extends {} ? `T`[``"events"``] : {} ; `features`: `T`[``"features"``] extends {} ? `T`[``"features"``] : {} ; `id`: [`Branded`](util_export.md#branded)<`T`[``"id"``], ``"ClusterId"``\> ; `name`: `T`[``"name"``] ; `revision`: `T`[``"revision"``] ; `supportedFeatures`: `T`[``"supportedFeatures"``] extends {} ? `T`[``"supportedFeatures"``] : {} ; `unknown`: `T`[``"unknown"``] extends `boolean` ? `T`[``"unknown"``] : ``false``  } & `Omit`<`T`, ``"attributes"``\>

A "definition" is the fully typed Cluster for a PartialDefinition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PartialDefinition`](exports_cluster.ClusterFactory.md#partialdefinition) |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:140

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:100

___

### Element

Ƭ **Element**: [`Attribute`](exports_cluster.ClusterFactory.md#attribute) \| [`Command`](exports_cluster.ClusterFactory.md#command) \| [`Event`](exports_cluster.ClusterFactory.md#event)

An "element" is a single attribute, command or event of a cluster.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:132

___

### ElementSet

Ƭ **ElementSet**<`T`\>: `Record`<`string`, `T` \| `undefined`\>

An "element set" defines the set of elements (commands, attributes or
events) of a cluster.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:29

___

### Event

Ƭ **Event**: [`Event`](exports_cluster.md#event)<`any`, `any`\>

Definition of a cluster event.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:41

___

### EventsOf

Ƭ **EventsOf**<`C`\>: `C` extends { `events`: infer E  } ? { [K in Extract<keyof E, string\> as E[K] extends Event ? K : never]: E[K] } : `never`

Extract the type of a cluster's events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md) |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:219

___

### Extender

Ƭ **Extender**: (...`features`: `any`) => [`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md)

#### Type declaration

▸ (`...features`): [`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md)

An "extender" is a function that creates a cluster with specific
features enabled.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...features` | `any` |

##### Returns

[`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:121

___

### MutableDefinition

Ƭ **MutableDefinition**: { -readonly [Key in keyof Cluster]: Cluster[Key] }

A "MutableDefinition" is a Cluster with fields that may be modified.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:114

___

### PartialDefinition

Ƭ **PartialDefinition**: { `id`: `number`  } & `Omit`<[`Identity`](../interfaces/exports_cluster.ClusterFactory.Identity.md), ``"id"``\> & `Partial`<[`Features`](../interfaces/exports_cluster.ClusterFactory.Features.md)\> & { `attributes?`: [`ElementSet`](exports_cluster.ClusterFactory.md#elementset)<[`Attribute`](exports_cluster.ClusterFactory.md#attribute)\> ; `commands?`: [`ElementSet`](exports_cluster.ClusterFactory.md#elementset)<[`Command`](exports_cluster.ClusterFactory.md#command)\> ; `events?`: [`ElementSet`](exports_cluster.ClusterFactory.md#elementset)<[`Event`](exports_cluster.ClusterFactory.md#event)\>  }

A "partial definition" is a cluster definition that does not require
empty elements to be present.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:90

## Functions

### AsConditional

▸ **AsConditional**<`ClusterT`, `E`, `OI`, `MI`\>(`element`, `«destructured»`): `E` & { `isConditional`: ``true`` ; `mandatoryIf`: `MI` \| readonly [] ; `optional`: ``true`` ; `optionalIf`: `OI` \| readonly []  }

Create a conditional version of an unconditional element definition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md) |
| `E` | extends [`Element`](exports_cluster.ClusterFactory.md#element) |
| `OI` | extends [`ConditionalFeatureList`](exports_cluster.md#conditionalfeaturelist)<`ClusterT`[``"features"``]\> |
| `MI` | extends [`ConditionalFeatureList`](exports_cluster.md#conditionalfeaturelist)<`ClusterT`[``"features"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `E` |
| `«destructured»` | `Object` |
| › `mandatoryIf?` | `MI` |
| › `optionalIf?` | `OI` |

#### Returns

`E` & { `isConditional`: ``true`` ; `mandatoryIf`: `MI` \| readonly [] ; `optional`: ``true`` ; `optionalIf`: `OI` \| readonly []  }

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:187

___

### Component

▸ **Component**<`T`\>(`component`): [`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<`T`\>

Define a cluster component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<[`Component`](exports_cluster.ClusterFactory.md#component)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `T` |

#### Returns

[`TypedComponent`](../interfaces/exports_cluster.ClusterFactory.TypedComponent.md)<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:136

___

### Definition

▸ **Definition**<`T`\>(`definition`): [`Definition`](exports_cluster.ClusterFactory.md#definition)<`T`\>

Define a cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PartialDefinition`](exports_cluster.ClusterFactory.md#partialdefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |

#### Returns

[`Definition`](exports_cluster.ClusterFactory.md#definition)<`T`\>

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:140

___

### Extensible

▸ **Extensible**<`DefinitionT`, `ExtenderT`\>(`definition`, `extender`): { `attributes`: `DefinitionT`[``"attributes"``] extends infer A ? [`Merge`](util_export.md#merge)<`A`, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`DefinitionT`[``"features"``] extends {} ? `DefinitionT`[``"features"``] : {}\>\> : {} ; `commands`: `DefinitionT`[``"commands"``] extends {} ? `DefinitionT`[``"commands"``] : {} ; `events`: `DefinitionT`[``"events"``] extends {} ? `DefinitionT`[``"events"``] : {} ; `features`: `DefinitionT`[``"features"``] extends {} ? `DefinitionT`[``"features"``] : {} ; `id`: [`Branded`](util_export.md#branded)<`DefinitionT`[``"id"``], ``"ClusterId"``\> ; `name`: `DefinitionT`[``"name"``] ; `revision`: `DefinitionT`[``"revision"``] ; `supportedFeatures`: `DefinitionT`[``"supportedFeatures"``] extends {} ? `DefinitionT`[``"supportedFeatures"``] : {} ; `unknown`: `DefinitionT`[``"unknown"``] extends `boolean` ? `DefinitionT`[``"unknown"``] : ``false``  } & `Omit`<`DefinitionT`, ``"attributes"``\> & { `with`: `ExtenderT`  }

Define an extensible cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionT` | extends [`Identity`](../interfaces/exports_cluster.ClusterFactory.Identity.md) & `Partial`<[`ClusterElements`](../interfaces/exports_cluster.ClusterFactory.ClusterElements.md)\> & `Partial`<[`Features`](../interfaces/exports_cluster.ClusterFactory.Features.md)<{}\>\> |
| `ExtenderT` | extends [`Extender`](exports_cluster.ClusterFactory.md#extender) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `DefinitionT` |
| `extender` | `ExtenderT` |

#### Returns

{ `attributes`: `DefinitionT`[``"attributes"``] extends infer A ? [`Merge`](util_export.md#merge)<`A`, [`GlobalAttributes`](exports_cluster.md#globalattributes-1)<`DefinitionT`[``"features"``] extends {} ? `DefinitionT`[``"features"``] : {}\>\> : {} ; `commands`: `DefinitionT`[``"commands"``] extends {} ? `DefinitionT`[``"commands"``] : {} ; `events`: `DefinitionT`[``"events"``] extends {} ? `DefinitionT`[``"events"``] : {} ; `features`: `DefinitionT`[``"features"``] extends {} ? `DefinitionT`[``"features"``] : {} ; `id`: [`Branded`](util_export.md#branded)<`DefinitionT`[``"id"``], ``"ClusterId"``\> ; `name`: `DefinitionT`[``"name"``] ; `revision`: `DefinitionT`[``"revision"``] ; `supportedFeatures`: `DefinitionT`[``"supportedFeatures"``] extends {} ? `DefinitionT`[``"supportedFeatures"``] : {} ; `unknown`: `DefinitionT`[``"unknown"``] extends `boolean` ? `DefinitionT`[``"unknown"``] : ``false``  } & `Omit`<`DefinitionT`, ``"attributes"``\> & { `with`: `ExtenderT`  }

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:144

___

### ExtensibleOnly

▸ **ExtensibleOnly**<`ExtenderT`\>(`extender`): `Object`

Define a cluster that can only be extended.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ExtenderT` | extends [`Extender`](exports_cluster.ClusterFactory.md#extender) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `extender` | `ExtenderT` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `with` | `ExtenderT` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:160

___

### extend

▸ **extend**(`definition`, `elements`, `...applicableFeatures`): `void`

Injects a set of functionality into a cluster if the cluster supports
the specified features.

This is used by extenders and does not convey type information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`MutableDefinition`](exports_cluster.ClusterFactory.md#mutabledefinition) |
| `elements` | [`ClusterElements`](../interfaces/exports_cluster.ClusterFactory.ClusterElements.md) |
| `...applicableFeatures` | [`TypeFromPartialBitSchema`](exports_schema.md#typefrompartialbitschema)<`any`\>[] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:169

___

### prevent

▸ **prevent**(`definition`, `...illegalFeatureCombinations`): `void`

Throws an error if a feature combination is illegal per the Matter
specification.

Used by extenders.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Cluster`](../interfaces/exports_cluster.ClusterFactory.Cluster.md) |
| `...illegalFeatureCombinations` | `Record`<`string`, `boolean`\>[] |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:183

___

### validateFeatureSelection

▸ **validateFeatureSelection**(`features`, `validFeatures`): `void`

Validates a set of feature flags against the features supported by a
cluster.

Used by extenders.

#### Parameters

| Name | Type |
| :------ | :------ |
| `features` | `string`[] |
| `validFeatures` | `Record`<`string`, `string`\> |

#### Returns

`void`

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterFactory.d.ts:176
