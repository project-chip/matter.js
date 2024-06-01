[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ConditionalFixedAttribute

# Interface: ConditionalFixedAttribute\<T, F\>

## Extends

- [`OptionalFixedAttribute`](OptionalFixedAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`default`](OptionalFixedAttribute.md#default)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L49)

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`fabricScoped`](OptionalFixedAttribute.md#fabricscoped)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L46)

***

### fixed

> **fixed**: `true`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`fixed`](OptionalFixedAttribute.md#fixed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:102](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L102)

***

### id

> **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`id`](OptionalFixedAttribute.md#id)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L37)

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`isConditional`](OptionalFixedAttribute.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:106](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L106)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`mandatoryIf`](OptionalFixedAttribute.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L52)

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`omitChanges`](OptionalFixedAttribute.md#omitchanges)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L47)

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`optional`](OptionalFixedAttribute.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L57)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`optionalIf`](OptionalFixedAttribute.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L51)

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`persistent`](OptionalFixedAttribute.md#persistent)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L43)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`readAcl`](OptionalFixedAttribute.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L40)

***

### scene

> **scene**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`scene`](OptionalFixedAttribute.md#scene)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L42)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`schema`](OptionalFixedAttribute.md#schema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L38)

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`timed`](OptionalFixedAttribute.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L44)

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`unknown`](OptionalFixedAttribute.md#unknown)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L53)

***

### writable

> **writable**: `boolean`

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`writable`](OptionalFixedAttribute.md#writable)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L41)

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalFixedAttribute`](OptionalFixedAttribute.md).[`writeAcl`](OptionalFixedAttribute.md#writeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L48)
