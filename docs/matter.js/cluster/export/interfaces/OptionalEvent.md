[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [cluster/export](../README.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

## Extends

- [`Event`](Event.md)\<`T`, `F`\>

## Extended by

- [`ConditionalEvent`](ConditionalEvent.md)

## Type parameters

| Type parameter |
| :------ |
| `T` |
| `F` *extends* [`BitSchema`](../../../schema/export/README.md#bitschema) |

## Properties

### id

> **id**: [`EventId`](../../../datatype/export/README.md#eventid)

#### Inherited from

[`Event`](Event.md).[`id`](Event.md#id)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:717](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L717)

***

### isConditional

> **isConditional**: `boolean`

#### Inherited from

[`Event`](Event.md).[`isConditional`](Event.md#isconditional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:722](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L722)

***

### mandatoryIf

> **mandatoryIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Event`](Event.md).[`mandatoryIf`](Event.md#mandatoryif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:724](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L724)

***

### optional

> **optional**: `true`

#### Overrides

[`Event`](Event.md).[`optional`](Event.md#optional)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:742](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L742)

***

### optionalIf

> **optionalIf**: [`ConditionalFeatureList`](../README.md#conditionalfeaturelistf)\<`F`\>

#### Inherited from

[`Event`](Event.md).[`optionalIf`](Event.md#optionalif)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:723](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L723)

***

### priority

> **priority**: [`EventPriority`](../enumerations/EventPriority.md)

#### Inherited from

[`Event`](Event.md).[`priority`](Event.md#priority)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:719](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L719)

***

### readAcl

> **readAcl**: [`AccessLevel`](../enumerations/AccessLevel.md)

#### Inherited from

[`Event`](Event.md).[`readAcl`](Event.md#readacl)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:721](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L721)

***

### schema

> **schema**: [`TlvSchema`](../../../tlv/export/classes/TlvSchema.md)\<`T`\>

#### Inherited from

[`Event`](Event.md).[`schema`](Event.md#schema)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:718](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L718)

***

### unknown

> **unknown**: `boolean`

#### Inherited from

[`Event`](Event.md).[`unknown`](Event.md#unknown)

#### Source

[packages/matter.js/src/cluster/Cluster.ts:725](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/cluster/Cluster.ts#L725)
