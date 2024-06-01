[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ConditionalWritableFabricScopedAttribute

# Interface: ConditionalWritableFabricScopedAttribute\<T, F\>

## Extends

- [`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`default`](OptionalWritableFabricScopedAttribute.md#default)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L49)

***

### fabricScoped

> **fabricScoped**: `true`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`fabricScoped`](OptionalWritableFabricScopedAttribute.md#fabricscoped)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:85](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L85)

***

### fixed

> **fixed**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`fixed`](OptionalWritableFabricScopedAttribute.md#fixed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L45)

***

### id

> **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`id`](OptionalWritableFabricScopedAttribute.md#id)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L37)

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`isConditional`](OptionalWritableFabricScopedAttribute.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:90](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L90)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`mandatoryIf`](OptionalWritableFabricScopedAttribute.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L52)

***

### omitChanges

> **omitChanges**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`omitChanges`](OptionalWritableFabricScopedAttribute.md#omitchanges)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L47)

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`optional`](OptionalWritableFabricScopedAttribute.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:57](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L57)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`optionalIf`](OptionalWritableFabricScopedAttribute.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L51)

***

### persistent

> **persistent**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`persistent`](OptionalWritableFabricScopedAttribute.md#persistent)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L43)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`readAcl`](OptionalWritableFabricScopedAttribute.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L40)

***

### scene

> **scene**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`scene`](OptionalWritableFabricScopedAttribute.md#scene)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L42)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`schema`](OptionalWritableFabricScopedAttribute.md#schema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L38)

***

### timed

> **timed**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`timed`](OptionalWritableFabricScopedAttribute.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L44)

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`unknown`](OptionalWritableFabricScopedAttribute.md#unknown)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L53)

***

### writable

> **writable**: `true`

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`writable`](OptionalWritableFabricScopedAttribute.md#writable)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:69](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L69)

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalWritableFabricScopedAttribute`](OptionalWritableFabricScopedAttribute.md).[`writeAcl`](OptionalWritableFabricScopedAttribute.md#writeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L48)
