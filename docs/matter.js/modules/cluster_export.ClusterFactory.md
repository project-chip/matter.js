[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ClusterFactory

# Namespace: ClusterFactory

[cluster/export](cluster_export.md).ClusterFactory

The formal definitions of clusters in matter.js are generated
programmatically.  There is no single formal "cluster factory" but rather a
set of types and methods for each cluster.

Individual modules associated with each cluster use the utility types and
methods as building blocks.

Note:  There is overlap between the types here and those in Cluster.ts.
They may converge over time but are fully compatible.

## Table of contents

### Interfaces

- [Cluster](../interfaces/cluster_export.ClusterFactory.Cluster.md)
- [ClusterElements](../interfaces/cluster_export.ClusterFactory.ClusterElements.md)
- [Component](../interfaces/cluster_export.ClusterFactory.Component.md)
- [Extensible](../interfaces/cluster_export.ClusterFactory.Extensible.md)
- [Features](../interfaces/cluster_export.ClusterFactory.Features.md)
- [Identity](../interfaces/cluster_export.ClusterFactory.Identity.md)
- [TypedComponent](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)

### Type Aliases

- [Attribute](cluster_export.ClusterFactory.md#attribute)
- [AttributesOf](cluster_export.ClusterFactory.md#attributesof)
- [Command](cluster_export.ClusterFactory.md#command)
- [CommandsOf](cluster_export.ClusterFactory.md#commandsof)
- [Definition](cluster_export.ClusterFactory.md#definition)
- [Element](cluster_export.ClusterFactory.md#element)
- [ElementSet](cluster_export.ClusterFactory.md#elementset)
- [Event](cluster_export.ClusterFactory.md#event)
- [EventsOf](cluster_export.ClusterFactory.md#eventsof)
- [Extender](cluster_export.ClusterFactory.md#extender)
- [MutableDefinition](cluster_export.ClusterFactory.md#mutabledefinition)
- [PartialDefinition](cluster_export.ClusterFactory.md#partialdefinition)

### Functions

- [AsConditional](cluster_export.ClusterFactory.md#asconditional)
- [Component](cluster_export.ClusterFactory.md#component)
- [Definition](cluster_export.ClusterFactory.md#definition-1)
- [Extensible](cluster_export.ClusterFactory.md#extensible)
- [ExtensibleOnly](cluster_export.ClusterFactory.md#extensibleonly)
- [extend](cluster_export.ClusterFactory.md#extend)
- [prevent](cluster_export.ClusterFactory.md#prevent)
- [validateFeatureSelection](cluster_export.ClusterFactory.md#validatefeatureselection)

## Type Aliases

### Attribute

Ƭ **Attribute**: [`Attribute`](cluster_export.md#attribute)<`any`, `any`\>

Definition of a cluster attribute.

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:43](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L43)

___

### AttributesOf

Ƭ **AttributesOf**<`C`\>: `C` extends { `attributes`: infer E  } ? { [K in Extract<keyof E, string\> as E[K] extends Attribute ? K : never]: E[K] } : `never`

Extract the type of a cluster's attributes.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md) |

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:316](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L316)

___

### Command

Ƭ **Command**: [`Command`](cluster_export.md#command)<`any`, `any`, `any`\>

Definition of a cluster command.

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:48](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L48)

___

### CommandsOf

Ƭ **CommandsOf**<`C`\>: `C` extends { `commands`: infer E  } ? { [K in Extract<keyof E, string\> as E[K] extends Command ? K : never]: E[K] } : `never`

Extract the type of a cluster's commands.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md) |

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:323](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L323)

___

### Definition

Ƭ **Definition**<`T`\>: { `attributes`: `T`[``"attributes"``] extends infer A ? [`Merge`](util_export.md#merge)<`A`, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<`T`[``"features"``] extends {} ? `T`[``"features"``] : {}\>\> : {} ; `commands`: `T`[``"commands"``] extends {} ? `T`[``"commands"``] : {} ; `events`: `T`[``"events"``] extends {} ? `T`[``"events"``] : {} ; `features`: `T`[``"features"``] extends {} ? `T`[``"features"``] : {} ; `id`: [`Branded`](util_export.md#branded)<`T`[``"id"``], ``"ClusterId"``\> ; `name`: `T`[``"name"``] ; `revision`: `T`[``"revision"``] ; `supportedFeatures`: `T`[``"supportedFeatures"``] extends {} ? `T`[``"supportedFeatures"``] : {} ; `unknown`: `T`[``"unknown"``] extends `boolean` ? `T`[``"unknown"``] : ``false``  } & `Omit`<`T`, ``"attributes"``\>

A "definition" is the fully typed Cluster for a PartialDefinition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PartialDefinition`](cluster_export.ClusterFactory.md#partialdefinition) |

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:172](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L172)

[packages/matter.js/src/cluster/ClusterFactory.ts:117](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L117)

___

### Element

Ƭ **Element**: [`Attribute`](cluster_export.ClusterFactory.md#attribute) \| [`Command`](cluster_export.ClusterFactory.md#command) \| [`Event`](cluster_export.ClusterFactory.md#event)

An "element" is a single attribute, command or event of a cluster.

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:155](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L155)

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

[packages/matter.js/src/cluster/ClusterFactory.ts:38](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L38)

___

### Event

Ƭ **Event**: [`Event`](cluster_export.md#event)<`any`, `any`\>

Definition of a cluster event.

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:53](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L53)

___

### EventsOf

Ƭ **EventsOf**<`C`\>: `C` extends { `events`: infer E  } ? { [K in Extract<keyof E, string\> as E[K] extends Event ? K : never]: E[K] } : `never`

Extract the type of a cluster's events.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends [`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md) |

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:330](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L330)

___

### Extender

Ƭ **Extender**: (...`features`: `any`) => [`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md)

#### Type declaration

▸ (`...features`): [`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md)

An "extender" is a function that creates a cluster with specific
features enabled.

##### Parameters

| Name | Type |
| :------ | :------ |
| `...features` | `any` |

##### Returns

[`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md)

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:142](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L142)

___

### MutableDefinition

Ƭ **MutableDefinition**: { -readonly [Key in keyof Cluster]: Cluster[Key] }

A "MutableDefinition" is a Cluster with fields that may be modified.

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:134](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L134)

___

### PartialDefinition

Ƭ **PartialDefinition**: { `id`: `number`  } & `Omit`<[`Identity`](../interfaces/cluster_export.ClusterFactory.Identity.md), ``"id"``\> & `Partial`<[`Features`](../interfaces/cluster_export.ClusterFactory.Features.md)\> & { `attributes?`: [`ElementSet`](cluster_export.ClusterFactory.md#elementset)<[`Attribute`](cluster_export.ClusterFactory.md#attribute)\> ; `commands?`: [`ElementSet`](cluster_export.ClusterFactory.md#elementset)<[`Command`](cluster_export.ClusterFactory.md#command)\> ; `events?`: [`ElementSet`](cluster_export.ClusterFactory.md#elementset)<[`Event`](cluster_export.ClusterFactory.md#event)\>  }

A "partial definition" is a cluster definition that does not require
empty elements to be present.

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:107](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L107)

## Functions

### AsConditional

▸ **AsConditional**<`ClusterT`, `E`, `OI`, `MI`\>(`element`, `«destructured»`): `E` & { `isConditional`: ``true`` = true; `mandatoryIf`: `MI` \| readonly [] ; `optional`: ``true`` = true; `optionalIf`: `OI` \| readonly []  }

Create a conditional version of an unconditional element definition.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ClusterT` | extends [`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md) |
| `E` | extends [`Element`](cluster_export.ClusterFactory.md#element) |
| `OI` | extends [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<`ClusterT`[``"features"``]\> |
| `MI` | extends [`ConditionalFeatureList`](cluster_export.md#conditionalfeaturelist)<`ClusterT`[``"features"``]\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | `E` |
| `«destructured»` | `Object` |
| › `mandatoryIf?` | `MI` |
| › `optionalIf?` | `OI` |

#### Returns

`E` & { `isConditional`: ``true`` = true; `mandatoryIf`: `MI` \| readonly [] ; `optional`: ``true`` = true; `optionalIf`: `OI` \| readonly []  }

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:298](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L298)

___

### Component

▸ **Component**<`T`\>(`component`): [`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<`T`\>

Define a cluster component.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `Partial`<[`Component`](cluster_export.ClusterFactory.md#component)\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `T` |

#### Returns

[`TypedComponent`](../interfaces/cluster_export.ClusterFactory.TypedComponent.md)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:160](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L160)

___

### Definition

▸ **Definition**<`T`\>(`definition`): [`Definition`](cluster_export.ClusterFactory.md#definition)<`T`\>

Define a cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`PartialDefinition`](cluster_export.ClusterFactory.md#partialdefinition) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `T` |

#### Returns

[`Definition`](cluster_export.ClusterFactory.md#definition)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:172](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L172)

___

### Extensible

▸ **Extensible**<`DefinitionT`, `ExtenderT`\>(`definition`, `extender`): { `attributes`: `DefinitionT`[``"attributes"``] extends `A` ? [`Merge`](util_export.md#merge)<`A`, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<`DefinitionT`[``"features"``] extends {} ? `any`[`any`] : {}\>\> : {} ; `commands`: `DefinitionT`[``"commands"``] extends {} ? `any`[`any`] : {} ; `events`: `DefinitionT`[``"events"``] extends {} ? `any`[`any`] : {} ; `features`: `DefinitionT`[``"features"``] extends {} ? `any`[`any`] : {} ; `id`: [`Branded`](util_export.md#branded)<`DefinitionT`[``"id"``], ``"ClusterId"``\> ; `name`: `DefinitionT`[``"name"``] ; `revision`: `DefinitionT`[``"revision"``] ; `supportedFeatures`: `DefinitionT`[``"supportedFeatures"``] extends {} ? `any`[`any`] : {} ; `unknown`: `DefinitionT`[``"unknown"``] extends `boolean` ? `any`[`any`] : ``false``  } & `Omit`<`DefinitionT`, ``"attributes"``\> & { `with`: `ExtenderT` = extender }

Define an extensible cluster.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `DefinitionT` | extends [`Identity`](../interfaces/cluster_export.ClusterFactory.Identity.md) & `Partial`<[`ClusterElements`](../interfaces/cluster_export.ClusterFactory.ClusterElements.md)\> & `Partial`<[`Features`](../interfaces/cluster_export.ClusterFactory.Features.md)<{}\>\> |
| `ExtenderT` | extends [`Extender`](cluster_export.ClusterFactory.md#extender) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | `DefinitionT` |
| `extender` | `ExtenderT` |

#### Returns

{ `attributes`: `DefinitionT`[``"attributes"``] extends `A` ? [`Merge`](util_export.md#merge)<`A`, [`GlobalAttributes`](cluster_export.md#globalattributes-1)<`DefinitionT`[``"features"``] extends {} ? `any`[`any`] : {}\>\> : {} ; `commands`: `DefinitionT`[``"commands"``] extends {} ? `any`[`any`] : {} ; `events`: `DefinitionT`[``"events"``] extends {} ? `any`[`any`] : {} ; `features`: `DefinitionT`[``"features"``] extends {} ? `any`[`any`] : {} ; `id`: [`Branded`](util_export.md#branded)<`DefinitionT`[``"id"``], ``"ClusterId"``\> ; `name`: `DefinitionT`[``"name"``] ; `revision`: `DefinitionT`[``"revision"``] ; `supportedFeatures`: `DefinitionT`[``"supportedFeatures"``] extends {} ? `any`[`any`] : {} ; `unknown`: `DefinitionT`[``"unknown"``] extends `boolean` ? `any`[`any`] : ``false``  } & `Omit`<`DefinitionT`, ``"attributes"``\> & { `with`: `ExtenderT` = extender }

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:192](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L192)

___

### ExtensibleOnly

▸ **ExtensibleOnly**<`ExtenderT`\>(`extender`): `Object`

Define a cluster that can only be extended.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `ExtenderT` | extends [`Extender`](cluster_export.ClusterFactory.md#extender) |

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

[packages/matter.js/src/cluster/ClusterFactory.ts:205](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L205)

___

### extend

▸ **extend**(`definition`, `elements`, `...applicableFeatures`): `void`

Injects a set of functionality into a cluster if the cluster supports
the specified features.

This is used by extenders and does not convey type information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`MutableDefinition`](cluster_export.ClusterFactory.md#mutabledefinition) |
| `elements` | [`ClusterElements`](../interfaces/cluster_export.ClusterFactory.ClusterElements.md) |
| `...applicableFeatures` | [`TypeFromPartialBitSchema`](schema_export.md#typefrompartialbitschema)<`any`\>[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:217](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L217)

___

### prevent

▸ **prevent**(`definition`, `...illegalFeatureCombinations`): `void`

Throws an error if a feature combination is illegal per the Matter
specification.

Used by extenders.

#### Parameters

| Name | Type |
| :------ | :------ |
| `definition` | [`Cluster`](../interfaces/cluster_export.ClusterFactory.Cluster.md) |
| `...illegalFeatureCombinations` | `Record`<`string`, `boolean`\>[] |

#### Returns

`void`

#### Defined in

[packages/matter.js/src/cluster/ClusterFactory.ts:282](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L282)

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

[packages/matter.js/src/cluster/ClusterFactory.ts:268](https://github.com/project-chip/matter.js/blob/b7330d72/packages/matter.js/src/cluster/ClusterFactory.ts#L268)
