[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ConditionalWritableAttribute

# Interface: ConditionalWritableAttribute\<T, F\>

## Extends

- [`OptionalWritableAttribute`](OptionalWritableAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`default`](OptionalWritableAttribute.md#default)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L49)

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`fabricScoped`](OptionalWritableAttribute.md#fabricscoped)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L46)

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`fixed`](OptionalWritableAttribute.md#fixed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L45)

***

### id

> **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`id`](OptionalWritableAttribute.md#id)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L37)

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`isConditional`](OptionalWritableAttribute.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:73](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L73)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`mandatoryIf`](OptionalWritableAttribute.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L52)

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`omitChanges`](OptionalWritableAttribute.md#omitchanges)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L47)

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`optional`](OptionalWritableAttribute.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L57)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`optionalIf`](OptionalWritableAttribute.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L51)

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`persistent`](OptionalWritableAttribute.md#persistent)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L43)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`readAcl`](OptionalWritableAttribute.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L40)

***

### scene

> **scene**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`scene`](OptionalWritableAttribute.md#scene)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L42)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`schema`](OptionalWritableAttribute.md#schema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L38)

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`timed`](OptionalWritableAttribute.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L44)

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`unknown`](OptionalWritableAttribute.md#unknown)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L53)

***

### writable

> **writable**: `true`

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`writable`](OptionalWritableAttribute.md#writable)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L69)

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableAttribute`](OptionalWritableAttribute.md).[`writeAcl`](OptionalWritableAttribute.md#writeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L48)
