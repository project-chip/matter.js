[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](cluster_export.md) / ClusterType

# Namespace: ClusterType

[cluster/export](cluster_export.md).ClusterType

## Table of contents

### Interfaces

- [Elements](../interfaces/cluster_export.ClusterType.Elements.md)
- [Extension](../interfaces/cluster_export.ClusterType.Extension.md)
- [Features](../interfaces/cluster_export.ClusterType.Features.md)
- [Identity](../interfaces/cluster_export.ClusterType.Identity.md)
- [Of](../interfaces/cluster_export.ClusterType.Of.md)

### Type Aliases

- [Attribute](cluster_export.ClusterType.md#attribute)
- [AttributeValues](cluster_export.ClusterType.md#attributevalues)
- [AttributesOf](cluster_export.ClusterType.md#attributesof)
- [Command](cluster_export.ClusterType.md#command)
- [CommandsOf](cluster_export.ClusterType.md#commandsof)
- [ElementSet](cluster_export.ClusterType.md#elementset)
- [EmptyElementSet](cluster_export.ClusterType.md#emptyelementset)
- [Event](cluster_export.ClusterType.md#event)
- [EventsOf](cluster_export.ClusterType.md#eventsof)
- [InputAttributeValues](cluster_export.ClusterType.md#inputattributevalues)
- [Options](cluster_export.ClusterType.md#options)
- [PatchType](cluster_export.ClusterType.md#patchtype)
- [RelaxTypes](cluster_export.ClusterType.md#relaxtypes)
- [Unknown](cluster_export.ClusterType.md#unknown)
- [ValuesOfAttributes](cluster_export.ClusterType.md#valuesofattributes)

### Variables

- [Unknown](cluster_export.ClusterType.md#unknown-1)

## Type Aliases

### Attribute

Ƭ **Attribute**: [`Attribute`](../interfaces/cluster_export.Attribute.md)\<`any`, `any`\>

Definition of a cluster attribute.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:65](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L65)

___

### AttributeValues

Ƭ **AttributeValues**\<`T`\>: [`ValuesOfAttributes`](cluster_export.ClusterType.md#valuesofattributes)\<[`AttributesOf`](cluster_export.ClusterType.md#attributesof)\<`T`\>\>

The collective object type of the cluster's attributes.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:215](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L215)

___

### AttributesOf

Ƭ **AttributesOf**\<`C`\>: `C` extends \{ `attributes`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K extends keyof GlobalAttributes\<any\> ? never : K]: C["attributes"][K] } : [`EmptyElementSet`](cluster_export.ClusterType.md#emptyelementset)\<[`Attribute`](cluster_export.ClusterType.md#attribute)\>

Extract the type of a cluster's attributes (excluding global attributes).

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:178](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L178)

___

### Command

Ƭ **Command**: [`Command`](../interfaces/cluster_export.Command.md)\<`any`, `any`, `any`\>

Definition of a cluster command.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:70](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L70)

___

### CommandsOf

Ƭ **CommandsOf**\<`C`\>: `C` extends \{ `commands`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K]: E[K] } : [`EmptyElementSet`](cluster_export.ClusterType.md#emptyelementset)\<[`Command`](cluster_export.ClusterType.md#command)\>

Extract the type of a cluster's commands.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:191](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L191)

___

### ElementSet

Ƭ **ElementSet**\<`T`\>: `Record`\<`string`, `T`\>

An "element set" defines the set of elements (commands, attributes or events) of a cluster.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:119](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L119)

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

[packages/matter.js/src/cluster/ClusterType.ts:210](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L210)

___

### Event

Ƭ **Event**: [`Event`](../interfaces/cluster_export.Event.md)\<`any`, `any`\>

Definition of a cluster event.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:75](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L75)

___

### EventsOf

Ƭ **EventsOf**\<`C`\>: `C` extends \{ `events`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K]: E[K] } : [`EmptyElementSet`](cluster_export.ClusterType.md#emptyelementset)\<[`Event`](cluster_export.ClusterType.md#event)\>

Extract the type of a cluster's events.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:200](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L200)

___

### InputAttributeValues

Ƭ **InputAttributeValues**\<`T`\>: [`RelaxTypes`](cluster_export.ClusterType.md#relaxtypes)\<[`AttributeValues`](cluster_export.ClusterType.md#attributevalues)\<`T`\>\>

A slightly relaxed version of AttributeValues for input.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/cluster_export.ClusterType-1.md) |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:256](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L256)

___

### Options

Ƭ **Options**\<`F`\>: \{ `id`: `number`  } & `Omit`\<[`Identity`](../interfaces/cluster_export.ClusterType.Identity.md), ``"id"``\> & `Partial`\<[`Features`](../interfaces/cluster_export.ClusterType.Features.md)\<`F`\>\> & \{ `attributes?`: [`ElementSet`](cluster_export.ClusterType.md#elementset)\<[`Attribute`](cluster_export.ClusterType.md#attribute)\> ; `commands?`: [`ElementSet`](cluster_export.ClusterType.md#elementset)\<[`Command`](cluster_export.ClusterType.md#command)\> ; `events?`: [`ElementSet`](cluster_export.ClusterType.md#elementset)\<[`Event`](cluster_export.ClusterType.md#event)\>  }

Input to [ClusterType](cluster_export.md#clustertype) function.  This is a relaxed extension of
[ClusterType](cluster_export.md#clustertype) with empty objects optional.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](schema_export.md#bitschema) = {} |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:100](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L100)

___

### PatchType

Ƭ **PatchType**\<`V`\>: `V` extends infer E[] ? `Record`\<\`$\{number}\`, [`PatchType`](cluster_export.ClusterType.md#patchtype)\<`E`\>\> \| [`PatchType`](cluster_export.ClusterType.md#patchtype)\<`E`\>[] : `V` extends `number` ? `number` : `V` extends `object` ? `V` extends (...`args`: `any`[]) => `any` ? `never` : \{ [K in keyof V]?: PatchType\<V[K]\> } : `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:241](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L241)

___

### RelaxTypes

Ƭ **RelaxTypes**\<`V`\>: `V` extends `number` ? `number` : `V` extends `object` ? `V` extends (...`args`: `any`[]) => `any` ? `V` : \{ [K in keyof V]: RelaxTypes\<V[K]\> } : `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:231](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L231)

___

### Unknown

Ƭ **Unknown**: typeof [`Unknown`](cluster_export.ClusterType.md#unknown-1)

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L293)

[packages/matter.js/src/cluster/ClusterType.ts:302](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L302)

___

### ValuesOfAttributes

Ƭ **ValuesOfAttributes**\<`AttrsT`\>: \{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? never : K]: AttrsT[K] extends Object ? T : never } & \{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? K : never]?: AttrsT[K] extends Object ? T : never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttrsT` | extends `Object` |

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:217](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L217)

## Variables

### Unknown

• `Const` **Unknown**: [`Of`](../interfaces/cluster_export.ClusterType.Of.md)\<\{ `attributes`: {} = \{}; `commands`: {} = \{}; `events`: {} = \{}; `id`: ``0`` = 0; `name`: ``"Unknown"`` = "Unknown"; `revision`: ``0`` = 0 }\>

A placeholder cluster.

#### Defined in

[packages/matter.js/src/cluster/ClusterType.ts:293](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L293)

[packages/matter.js/src/cluster/ClusterType.ts:302](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/ClusterType.ts#L302)
