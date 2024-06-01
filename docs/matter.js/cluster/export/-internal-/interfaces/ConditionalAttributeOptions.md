[**@project-chip/matter.js**](../../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../../modules.md) / [cluster/export](../../README.md) / [\<internal\>](../README.md) / ConditionalAttributeOptions

# Interface: ConditionalAttributeOptions\<T, F\>

## Extends

- [`AttributeOptions`](AttributeOptions.md)\<`T`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../../schema/export/README.md#bitschema) |

## Properties

### default?

> `optional` **default**: `T`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`default`](AttributeOptions.md#default)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:116](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L116)

***

### mandatoryIf?

> `optional` **mandatoryIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:123](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L123)

***

### omitChanges?

> `optional` **omitChanges**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`omitChanges`](AttributeOptions.md#omitchanges)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:114](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L114)

***

### optionalIf?

> `optional` **optionalIf**: [`ConditionalFeatureList`](../../README.md#conditionalfeaturelistf)\<`F`\>

#### Source

[packages/matter.js/src/cluster/Cluster.ts:122](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L122)

***

### persistent?

> `optional` **persistent**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`persistent`](AttributeOptions.md#persistent)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:113](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L113)

***

### readAcl?

> `optional` **readAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`readAcl`](AttributeOptions.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:117](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L117)

***

### scene?

> `optional` **scene**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`scene`](AttributeOptions.md#scene)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:112](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L112)

***

### timed?

> `optional` **timed**: `boolean`

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`timed`](AttributeOptions.md#timed)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:115](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L115)

***

### writeAcl?

> `optional` **writeAcl**: [`AccessLevel`](../../enumerations/AccessLevel.md)

#### Inherited from

[`AttributeOptions`](AttributeOptions.md).[`writeAcl`](AttributeOptions.md#writeacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:118](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L118)
