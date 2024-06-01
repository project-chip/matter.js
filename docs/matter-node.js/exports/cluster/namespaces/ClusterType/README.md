[**@project-chip/matter-node.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../../modules.md) / [exports/cluster](../../README.md) / ClusterType

# Namespace: ClusterType

## Index

### Interfaces

- [Elements](interfaces/Elements.md)
- [Extension](interfaces/Extension.md)
- [Features](interfaces/Features.md)
- [Identity](interfaces/Identity.md)
- [Of](interfaces/Of.md)

## Type Aliases

### Attribute

> **Attribute**: [`Attribute`](../../interfaces/Attribute.md)\<`any`, `any`\>

Definition of a cluster attribute.

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:26

***

### AttributeValues\<T\>

> **AttributeValues**\<`T`\>: [`ValuesOfAttributes`](README.md#valuesofattributesattrst)\<[`AttributesOf`](README.md#attributesofc)\<`T`\>\>

The collective object type of the cluster's attributes.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:158

***

### AttributesOf\<C\>

> **AttributesOf**\<`C`\>: `C` *extends* `object` ? `{ -readonly [K in keyof E as string extends K ? never : K extends keyof GlobalAttributes<any> ? never : K]: C["attributes"][K] }` : [`EmptyElementSet`](README.md#emptyelementsett)\<[`Attribute`](README.md#attribute)\>

Extract the type of a cluster's attributes (excluding global attributes).

#### Type parameters

| Type parameter |
| :------ |
| `C` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:123

***

### Command

> **Command**: [`Command`](../../interfaces/Command.md)\<`any`, `any`, `any`\>

Definition of a cluster command.

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:30

***

### CommandsOf\<C\>

> **CommandsOf**\<`C`\>: `C` *extends* `object` ? `{ -readonly [K in keyof E as string extends K ? never : K]: E[K] }` : [`EmptyElementSet`](README.md#emptyelementsett)\<[`Command`](README.md#command)\>

Extract the type of a cluster's commands.

#### Type parameters

| Type parameter |
| :------ |
| `C` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:133

***

### ElementSet\<T\>

> **ElementSet**\<`T`\>: `Record`\<`string`, `T`\>

An "element set" defines the set of elements (commands, attributes or events) of a cluster.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:73

***

### EmptyElementSet\<T\>

> **EmptyElementSet**\<`T`\>: `Record`\<`string`, `never`\> & `Record`\<`string`, `T`\>

This bit of hackery describes a set that has no elements but for which typescript thinks it knows the type if you
index generically by string.

#### Type parameters

| Type parameter |
| :------ |
| `T` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:154

***

### Event

> **Event**: [`Event`](../../interfaces/Event.md)\<`any`, `any`\>

Definition of a cluster event.

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:34

***

### EventsOf\<C\>

> **EventsOf**\<`C`\>: `C` *extends* `object` ? `{ -readonly [K in keyof E as string extends K ? never : K]: E[K] }` : [`EmptyElementSet`](README.md#emptyelementsett)\<[`Event`](README.md#event)\>

Extract the type of a cluster's events.

#### Type parameters

| Type parameter |
| :------ |
| `C` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:143

***

### InputAttributeValues\<T\>

> **InputAttributeValues**\<`T`\>: [`RelaxTypes`](README.md#relaxtypesv)\<[`AttributeValues`](README.md#attributevaluest)\<`T`\>\>

A slightly relaxed version of AttributeValues for input.

#### Type parameters

| Type parameter |
| :------ |
| `T` *extends* [`ClusterType`](../../interfaces/ClusterType.md) |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:183

***

### Options\<F\>

> **Options**\<`F`\>: `object` & `Omit`\<[`Identity`](interfaces/Identity.md), `"id"`\> & `Partial`\<[`Features`](interfaces/Features.md)\<`F`\>\> & `object`

Input to [ClusterType](../../README.md#clustertype) function.  This is a relaxed extension of
[ClusterType](../../README.md#clustertype) with empty objects optional.

#### Type declaration

##### id

> **id**: `number`

#### Type declaration

##### attributes?

> `optional` **attributes**: [`ElementSet`](README.md#elementsett)\<[`Attribute`](README.md#attribute)\>

##### commands?

> `optional` **commands**: [`ElementSet`](README.md#elementsett)\<[`Command`](README.md#command)\>

##### events?

> `optional` **events**: [`ElementSet`](README.md#elementsett)\<[`Event`](README.md#event)\>

#### Type parameters

| Type parameter | Value |
| :------ | :------ |
| `F` *extends* [`BitSchema`](../../../schema/README.md#bitschema) | `object` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:55

***

### PatchType\<V\>

> **PatchType**\<`V`\>: `V` *extends* infer E[] ? `Record`\<\`$\{number\}\`, [`PatchType`](README.md#patchtypev)\<`E`\>\> \| [`PatchType`](README.md#patchtypev)\<`E`\>[] : `V` *extends* `number` ? `number` : `V` *extends* `bigint` ? `bigint` : `V` *extends* `object` ? `V` *extends* (...`args`) => `any` ? `never` : `{ [K in keyof V]?: PatchType<V[K]> }` : `V`

#### Type parameters

| Type parameter |
| :------ |
| `V` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:177

***

### RelaxTypes\<V\>

> **RelaxTypes**\<`V`\>: `V` *extends* `number` ? `number` : `V` *extends* `bigint` ? `bigint` : `V` *extends* `object` ? `V` *extends* (...`args`) => `any` ? `V` : `{ [K in keyof V]: RelaxTypes<V[K]> }` : `V`

#### Type parameters

| Type parameter |
| :------ |
| `V` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:174

***

### Unknown

> **Unknown**: *typeof* [`Unknown`](README.md#unknown-1)

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:217

***

### ValuesOfAttributes\<AttrsT\>

> **ValuesOfAttributes**\<`AttrsT`\>: `{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? never : K]: AttrsT[K] extends Object ? T : never }` & `{ [K in keyof AttrsT as [AttrsT[K]] extends [Object] ? K : never]?: AttrsT[K] extends Object ? T : never }`

#### Type parameters

| Type parameter |
| :------ |
| `AttrsT` *extends* `object` |

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:159

## Variables

### Unknown

> `const` **Unknown**: [`Of`](interfaces/Of.md)\<`object`\>

A placeholder cluster.

#### Type declaration

##### attributes

> `readonly` **attributes**: `object`

##### commands

> `readonly` **commands**: `object`

##### events

> `readonly` **events**: `object`

##### id

> `readonly` **id**: `0`

##### name

> `readonly` **name**: `"Unknown"`

##### revision

> `readonly` **revision**: `0`

#### Source

packages/matter.js/dist/esm/cluster/ClusterType.d.ts:217
