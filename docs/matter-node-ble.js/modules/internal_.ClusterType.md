[@project-chip/matter-node-ble.js](../README.md) / [Exports](../modules.md) / [\<internal\>](internal_.md) / ClusterType

# Namespace: ClusterType

[\<internal\>](internal_.md).ClusterType

## Table of contents

### Interfaces

- [Elements](../interfaces/internal_.ClusterType.Elements.md)
- [Extension](../interfaces/internal_.ClusterType.Extension.md)
- [Features](../interfaces/internal_.ClusterType.Features.md)
- [Identity](../interfaces/internal_.ClusterType.Identity.md)
- [Of](../interfaces/internal_.ClusterType.Of.md)

### Type Aliases

- [Attribute](internal_.ClusterType.md#attribute)
- [AttributeValues](internal_.ClusterType.md#attributevalues)
- [AttributesOf](internal_.ClusterType.md#attributesof)
- [Command](internal_.ClusterType.md#command)
- [CommandsOf](internal_.ClusterType.md#commandsof)
- [ElementSet](internal_.ClusterType.md#elementset)
- [EmptyElementSet](internal_.ClusterType.md#emptyelementset)
- [Event](internal_.ClusterType.md#event)
- [EventsOf](internal_.ClusterType.md#eventsof)
- [InputAttributeValues](internal_.ClusterType.md#inputattributevalues)
- [Options](internal_.ClusterType.md#options)
- [PatchType](internal_.ClusterType.md#patchtype)
- [RelaxTypes](internal_.ClusterType.md#relaxtypes)
- [Unknown](internal_.ClusterType.md#unknown)
- [ValuesOfAttributes](internal_.ClusterType.md#valuesofattributes)

### Variables

- [Unknown](internal_.ClusterType.md#unknown-1)

## Type Aliases

### Attribute

Ƭ **Attribute**: [`Attribute`](../interfaces/internal_.Attribute.md)\<`any`, `any`\>

Definition of a cluster attribute.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:26

___

### AttributeValues

Ƭ **AttributeValues**\<`T`\>: [`ValuesOfAttributes`](internal_.ClusterType.md#valuesofattributes)\<[`AttributesOf`](internal_.ClusterType.md#attributesof)\<`T`\>\>

The collective object type of the cluster's attributes.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:158

___

### AttributesOf

Ƭ **AttributesOf**\<`C`\>: `C` extends \{ `attributes`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K extends keyof GlobalAttributes\<any\> ? never : K]: C["attributes"][K] } : [`EmptyElementSet`](internal_.ClusterType.md#emptyelementset)\<[`Attribute`](internal_.ClusterType.md#attribute)\>

Extract the type of a cluster's attributes (excluding global attributes).

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:123

___

### Command

Ƭ **Command**: [`Command`](../interfaces/internal_.Command.md)\<`any`, `any`, `any`\>

Definition of a cluster command.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:30

___

### CommandsOf

Ƭ **CommandsOf**\<`C`\>: `C` extends \{ `commands`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K]: E[K] } : [`EmptyElementSet`](internal_.ClusterType.md#emptyelementset)\<[`Command`](internal_.ClusterType.md#command)\>

Extract the type of a cluster's commands.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:133

___

### ElementSet

Ƭ **ElementSet**\<`T`\>: `Record`\<`string`, `T`\>

An "element set" defines the set of elements (commands, attributes or events) of a cluster.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:73

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

matter.js/dist/esm/cluster/ClusterType.d.ts:154

___

### Event

Ƭ **Event**: [`Event`](../interfaces/internal_.Event.md)\<`any`, `any`\>

Definition of a cluster event.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:34

___

### EventsOf

Ƭ **EventsOf**\<`C`\>: `C` extends \{ `events`: infer E  } ? \{ -readonly [K in keyof E as string extends K ? never : K]: E[K] } : [`EmptyElementSet`](internal_.ClusterType.md#emptyelementset)\<[`Event`](internal_.ClusterType.md#event)\>

Extract the type of a cluster's events.

#### Type parameters

| Name |
| :------ |
| `C` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:143

___

### InputAttributeValues

Ƭ **InputAttributeValues**\<`T`\>: [`RelaxTypes`](internal_.ClusterType.md#relaxtypes)\<[`AttributeValues`](internal_.ClusterType.md#attributevalues)\<`T`\>\>

A slightly relaxed version of AttributeValues for input.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`ClusterType`](../interfaces/internal_.ClusterType-1.md) |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:183

___

### Options

Ƭ **Options**\<`F`\>: \{ `id`: `number`  } & `Omit`\<[`Identity`](../interfaces/internal_.ClusterType.Identity.md), ``"id"``\> & `Partial`\<[`Features`](../interfaces/internal_.ClusterType.Features.md)\<`F`\>\> & \{ `attributes?`: [`ElementSet`](internal_.ClusterType.md#elementset)\<[`Attribute`](internal_.ClusterType.md#attribute)\> ; `commands?`: [`ElementSet`](internal_.ClusterType.md#elementset)\<[`Command`](internal_.ClusterType.md#command)\> ; `events?`: [`ElementSet`](internal_.ClusterType.md#elementset)\<[`Event`](internal_.ClusterType.md#event)\>  }

Input to [ClusterType](internal_.md#clustertype) function.  This is a relaxed extension of
[ClusterType](internal_.md#clustertype) with empty objects optional.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](internal_.md#bitschema) = {} |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:55

___

### PatchType

Ƭ **PatchType**\<`V`\>: `V` extends infer E[] ? `Record`\<\`$\{number}\`, [`PatchType`](internal_.ClusterType.md#patchtype)\<`E`\>\> \| [`PatchType`](internal_.ClusterType.md#patchtype)\<`E`\>[] : `V` extends `number` ? `number` : `V` extends `object` ? `V` extends (...`args`: `any`[]) => `any` ? `never` : \{ [K in keyof V]?: PatchType\<V[K]\> } : `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:177

___

### RelaxTypes

Ƭ **RelaxTypes**\<`V`\>: `V` extends `number` ? `number` : `V` extends `object` ? `V` extends (...`args`: `any`[]) => `any` ? `V` : \{ [K in keyof V]: RelaxTypes\<V[K]\> } : `V`

#### Type parameters

| Name |
| :------ |
| `V` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:174

___

### Unknown

Ƭ **Unknown**: typeof [`Unknown`](internal_.ClusterType.md#unknown-1)

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:217

matter.js/dist/esm/cluster/ClusterType.d.ts:225

___

### ValuesOfAttributes

Ƭ **ValuesOfAttributes**\<`AttrsT`\>: \{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? never : K]: AttrsT[K] extends Object ? T : never } & \{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? K : never]?: AttrsT[K] extends Object ? T : never }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AttrsT` | extends `Object` |

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:159

## Variables

### Unknown

• `Const` **Unknown**: [`Of`](../interfaces/internal_.ClusterType.Of.md)\<\{ `attributes`: {} ; `commands`: {} ; `events`: {} ; `id`: ``0`` ; `name`: ``"Unknown"`` ; `revision`: ``0``  }\>

A placeholder cluster.

#### Defined in

matter.js/dist/esm/cluster/ClusterType.d.ts:217

matter.js/dist/esm/cluster/ClusterType.d.ts:225
