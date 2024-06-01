[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / Attribute

# Interface: Attribute\<T, F\>

## Extended by

- [`OptionalAttribute`](OptionalAttribute.md)
- [`WritableAttribute`](WritableAttribute.md)
- [`FabricScopedAttribute`](FabricScopedAttribute.md)
- [`FixedAttribute`](FixedAttribute.md)
- [`UnknownAttribute`](UnknownAttribute.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:49](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L49)

***

### fabricScoped

> **fabricScoped**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:46](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L46)

***

### fixed

> **fixed**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:45](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L45)

***

### id

> **id**: [`AttributeId`](../../../datatype/export/README.md#attributeid)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:37](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L37)

***

### isConditional

> **isConditional**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:50](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L50)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L52)

***

### omitChanges

> **omitChanges**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:47](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L47)

***

### optional

> **optional**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:39](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L39)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:51](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L51)

***

### persistent

> **persistent**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:43](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L43)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:40](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L40)

***

### scene

> **scene**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:42](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L42)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:38](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L38)

***

### timed

> **timed**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:44](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L44)

***

### unknown

> **unknown**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:53](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L53)

***

### writable

> **writable**: `boolean`

#### Source

[packages/matter.js/src/cluster/Cluster.ts:41](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L41)

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:48](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L48)
