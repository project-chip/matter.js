[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

[cluster/export](../modules/cluster_export.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Event`](cluster_export.Event.md)\<`T`, `F`\>

  ↳ **`OptionalEvent`**

  ↳↳ [`ConditionalEvent`](cluster_export.ConditionalEvent.md)

## Table of contents

### Properties

- [id](cluster_export.OptionalEvent.md#id)
- [isConditional](cluster_export.OptionalEvent.md#isconditional)
- [mandatoryIf](cluster_export.OptionalEvent.md#mandatoryif)
- [optional](cluster_export.OptionalEvent.md#optional)
- [optionalIf](cluster_export.OptionalEvent.md#optionalif)
- [priority](cluster_export.OptionalEvent.md#priority)
- [readAcl](cluster_export.OptionalEvent.md#readacl)
- [schema](cluster_export.OptionalEvent.md#schema)
- [unknown](cluster_export.OptionalEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[Event](cluster_export.Event.md).[id](cluster_export.Event.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:717](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L717)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Event](cluster_export.Event.md).[isConditional](cluster_export.Event.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:722](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L722)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](cluster_export.Event.md).[mandatoryIf](cluster_export.Event.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:724](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L724)

___

### optional

• **optional**: ``true``

#### Overrides

[Event](cluster_export.Event.md).[optional](cluster_export.Event.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:742](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L742)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](cluster_export.Event.md).[optionalIf](cluster_export.Event.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:723](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L723)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[Event](cluster_export.Event.md).[priority](cluster_export.Event.md#priority)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:719](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L719)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[Event](cluster_export.Event.md).[readAcl](cluster_export.Event.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:721](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L721)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

[Event](cluster_export.Event.md).[schema](cluster_export.Event.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:718](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L718)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

[Event](cluster_export.Event.md).[unknown](cluster_export.Event.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:725](https://github.com/project-chip/matter.js/blob/2d9f2165d2672864fda3496a6d0d5f93597f82c6/packages/matter.js/src/cluster/Cluster.ts#L725)
