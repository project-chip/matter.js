[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / WritableAttribute

# Interface: WritableAttribute\<T, F\>

## Extends

- [`Attribute`](Attribute.md)\<`T`, `F`\>

## Extended by

- [`WritableFabricScopedAttribute`](WritableFabricScopedAttribute.md)
- [`WritableFixedAttribute`](WritableFixedAttribute.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`Attribute`](Attribute.md).[`default`](Attribute.md#default)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L49)

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`fabricScoped`](Attribute.md#fabricscoped)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L46)

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`fixed`](Attribute.md#fixed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L45)

***

### id

> **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Inherited from

[`Attribute`](Attribute.md).[`id`](Attribute.md#id)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L37)

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`isConditional`](Attribute.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L50)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Attribute`](Attribute.md).[`mandatoryIf`](Attribute.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L52)

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`omitChanges`](Attribute.md#omitchanges)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L47)

***

### optional

> **optional**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`optional`](Attribute.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L39)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Attribute`](Attribute.md).[`optionalIf`](Attribute.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L51)

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`persistent`](Attribute.md#persistent)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L43)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Attribute`](Attribute.md).[`readAcl`](Attribute.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L40)

***

### scene

> **scene**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`scene`](Attribute.md#scene)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L42)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`Attribute`](Attribute.md).[`schema`](Attribute.md#schema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L38)

***

### timed

> **timed**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`timed`](Attribute.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L44)

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`Attribute`](Attribute.md).[`unknown`](Attribute.md#unknown)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L53)

***

### writable

> **writable**: `true`

#### Overrides

[`Attribute`](Attribute.md).[`writable`](Attribute.md#writable)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L65)

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Attribute`](Attribute.md).[`writeAcl`](Attribute.md#writeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L48)
