[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / ConditionalEvent

# Interface: ConditionalEvent\<T, F\>

## Extends

- [`OptionalEvent`](OptionalEvent.md)\<`T`, `F`\>

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### id

> **id**: [`EventId`](../../../datatype/export/README.md#eventid)

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`id`](OptionalEvent.md#id)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:717](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L717)

***

### isConditional

> **isConditional**: `true`

#### Overrides

[`OptionalEvent`](OptionalEvent.md).[`isConditional`](OptionalEvent.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:746](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L746)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`mandatoryIf`](OptionalEvent.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:724](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L724)

***

### optional

> **optional**: `true`

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`optional`](OptionalEvent.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:742](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L742)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`optionalIf`](OptionalEvent.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:723](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L723)

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`priority`](OptionalEvent.md#priority)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:719](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L719)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`readAcl`](OptionalEvent.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:721](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L721)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`schema`](OptionalEvent.md#schema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:718](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L718)

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`OptionalEvent`](OptionalEvent.md).[`unknown`](OptionalEvent.md#unknown)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:725](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L725)
