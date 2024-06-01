[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / WritableFabricScopedAttribute

# Interface: WritableFabricScopedAttribute\<T, F\>

## Extends

- [`WritableAttribute`](WritableAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`default`](WritableAttribute.md#default)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L49)

***

### fabricScoped

> **fabricScoped**: `true`

#### Overrides

[`WritableAttribute`](WritableAttribute.md).[`fabricScoped`](WritableAttribute.md#fabricscoped)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:81](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L81)

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`fixed`](WritableAttribute.md#fixed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L45)

***

### id

> **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`id`](WritableAttribute.md#id)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L37)

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`isConditional`](WritableAttribute.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L50)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`mandatoryIf`](WritableAttribute.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L52)

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`omitChanges`](WritableAttribute.md#omitchanges)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L47)

***

### optional

> **optional**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`optional`](WritableAttribute.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L39)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`optionalIf`](WritableAttribute.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L51)

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`persistent`](WritableAttribute.md#persistent)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L43)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`readAcl`](WritableAttribute.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L40)

***

### scene

> **scene**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`scene`](WritableAttribute.md#scene)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L42)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`schema`](WritableAttribute.md#schema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L38)

***

### timed

> **timed**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`timed`](WritableAttribute.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L44)

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`unknown`](WritableAttribute.md#unknown)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L53)

***

### writable

> **writable**: `true`

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`writable`](WritableAttribute.md#writable)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:65](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L65)

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`WritableAttribute`](WritableAttribute.md).[`writeAcl`](WritableAttribute.md#writeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L48)
