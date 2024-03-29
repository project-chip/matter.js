[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [exports/cluster](exports_cluster.md) / ClusterType

# Namespace: ClusterType

[exports/cluster](exports_cluster.md).ClusterType

## Table of contents

### Interfaces

- [Elements](../interfaces/exports_cluster.ClusterType.Elements.md)
- [Extension](../interfaces/exports_cluster.ClusterType.Extension.md)
- [Features](../interfaces/exports_cluster.ClusterType.Features.md)
- [Identity](../interfaces/exports_cluster.ClusterType.Identity.md)
- [Of](../interfaces/exports_cluster.ClusterType.Of.md)

### Type Aliases

- [Attribute](exports_cluster.ClusterType.md#attribute)
- [AttributeValues](exports_cluster.ClusterType.md#attributevalues)
- [AttributesOf](exports_cluster.ClusterType.md#attributesof)
- [Command](exports_cluster.ClusterType.md#command)
- [CommandsOf](exports_cluster.ClusterType.md#commandsof)
- [ElementSet](exports_cluster.ClusterType.md#elementset)
- [EmptyElementSet](exports_cluster.ClusterType.md#emptyelementset)
- [Event](exports_cluster.ClusterType.md#event)
- [EventsOf](exports_cluster.ClusterType.md#eventsof)
- [InputAttributeValues](exports_cluster.ClusterType.md#inputattributevalues)
- [Options](exports_cluster.ClusterType.md#options)
- [PatchType](exports_cluster.ClusterType.md#patchtype)
- [RelaxTypes](exports_cluster.ClusterType.md#relaxtypes)
- [Unknown](exports_cluster.ClusterType.md#unknown)
- [ValuesOfAttributes](exports_cluster.ClusterType.md#valuesofattributes)

### Variables

- [Unknown](exports_cluster.ClusterType.md#unknown-1)

## Type Aliases

### Attribute

Ƭ **Attribute**: [`Attribute`](../interfaces/exports_cluster.Attribute.md)\<`any`, `any`\>

Definition of a cluster attribute.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:26

___

### AttributeValues

Ƭ **AttributeValues**\<`T`\>: [`ValuesOfAttributes`](exports_cluster.ClusterType.md#valuesofattributes)\<[`AttributesOf`](exports_cluster.ClusterType.md#attributesof)\<`T`\>\>

The collective object type of the cluster's attributes.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:158

___

### AttributesOf

Ƭ **AttributesOf**\<`C`\>: `C` extends \{ `attributes`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K extends keyof GlobalAttributes\<any\> ? never : K]: C["attributes"][K] } : [`EmptyElementSet`](exports_cluster.ClusterType.md#emptyelementset)\<[`Attribute`](exports_cluster.ClusterType.md#attribute)\>

Extract the type of a cluster's attributes (excluding global attributes).

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:123

___

### Command

Ƭ **Command**: [`Command`](../interfaces/exports_cluster.Command.md)\<`any`, `any`, `any`\>

Definition of a cluster command.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:30

___

### CommandsOf

Ƭ **CommandsOf**\<`C`\>: `C` extends \{ `commands`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K]: E[K] } : [`EmptyElementSet`](exports_cluster.ClusterType.md#emptyelementset)\<[`Command`](exports_cluster.ClusterType.md#command)\>

Extract the type of a cluster's commands.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:133

___

### ElementSet

Ƭ **ElementSet**\<`T`\>: `Record`\<`string`, `T`\>

An "element set" defines the set of elements (commands, attributes or events) of a cluster.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:73

___

### EmptyElementSet

Ƭ **EmptyElementSet**\<`T`\>: `Record`\<`string`, `never`\> & `Record`\<`string`, `T`\>

This bit of hackery describes a set that has no elements but for which typescript thinks it knows the type if you
index generically by string.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:154

___

### Event

Ƭ **Event**: [`Event`](../interfaces/exports_cluster.Event.md)\<`any`, `any`\>

Definition of a cluster event.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:34

___

### EventsOf

Ƭ **EventsOf**\<`C`\>: `C` extends \{ `events`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K]: E[K] } : [`EmptyElementSet`](exports_cluster.ClusterType.md#emptyelementset)\<[`Event`](exports_cluster.ClusterType.md#event)\>

Extract the type of a cluster's events.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:143

___

### InputAttributeValues

Ƭ **InputAttributeValues**\<`T`\>: [`RelaxTypes`](exports_cluster.ClusterType.md#relaxtypes)\<[`AttributeValues`](exports_cluster.ClusterType.md#attributevalues)\<`T`\>\>

A slightly relaxed version of AttributeValues for input.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/exports_cluster.ClusterType-1.md) |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:183

___

### Options

Ƭ **Options**\<`F`\>: \{ `id`: `number`  } & `Omit`\<[`Identity`](../interfaces/exports_cluster.ClusterType.Identity.md), ``"id"``\> & `Partial`\<[`Features`](../interfaces/exports_cluster.ClusterType.Features.md)\<`F`\>\> & \{ `attributes?`: [`ElementSet`](exports_cluster.ClusterType.md#elementset)\<[`Attribute`](exports_cluster.ClusterType.md#attribute)\> ; `commands?`: [`ElementSet`](exports_cluster.ClusterType.md#elementset)\<[`Command`](exports_cluster.ClusterType.md#command)\> ; `events?`: [`ElementSet`](exports_cluster.ClusterType.md#elementset)\<[`Event`](exports_cluster.ClusterType.md#event)\>  }

Input to [ClusterType](exports_cluster.md#clustertype) function.  This is a relaxed extension of
[ClusterType](exports_cluster.md#clustertype) with empty objects optional.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](exports_schema.md#bitschema) = {} |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:55

___

### PatchType

Ƭ **PatchType**\<`V`\>: `V` extends infer E[] ? `Record`\<\`$\{number}\`, [`PatchType`](exports_cluster.ClusterType.md#patchtype)\<`E`\>\> \| [`PatchType`](exports_cluster.ClusterType.md#patchtype)\<`E`\>[] : `V` extends `number` ? `number` : `V` extends `object` ? `V` extends (...`args`: `any`[]) => `any` ? `never` : \{ [K in keyof V]?: PatchType\<V[K]\> } : `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:177

___

### RelaxTypes

Ƭ **RelaxTypes**\<`V`\>: `V` extends `number` ? `number` : `V` extends `object` ? `V` extends (...`args`: `any`[]) => `any` ? `V` : \{ [K in keyof V]: RelaxTypes\<V[K]\> } : `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:174

___

### Unknown

Ƭ **Unknown**: typeof [`Unknown`](exports_cluster.ClusterType.md#unknown-1)

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:217

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:225

___

### ValuesOfAttributes

Ƭ **ValuesOfAttributes**\<`AttrsT`\>: \{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? never : K]: AttrsT[K] extends Object ? T : never } & \{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? K : never]?: AttrsT[K] extends Object ? T : never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttrsT` | extends `Object` |

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:159

## Variables

### Unknown

• `Const` **Unknown**: [`Of`](../interfaces/exports_cluster.ClusterType.Of.md)\<\{ `attributes`: {} ; `commands`: {} ; `events`: {} ; `id`: ``0`` ; `name`: ``"Unknown"`` ; `revision`: ``0``  }\>

A placeholder cluster.

#### Defined in

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:217

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:225
