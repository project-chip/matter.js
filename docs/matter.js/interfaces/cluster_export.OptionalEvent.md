[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / OptionalEvent

# Interface: OptionalEvent\<T, F\>

[cluster/export](../modules/cluster_export.md).OptionalEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Event`](../modules/cluster_export.md#event)\<`T`, `F`\>

  ↳ **`OptionalEvent`**

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

Event.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:714](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L714)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Event.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:719](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L719)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

Event.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:721](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L721)

___

### optional

• **optional**: ``true``

#### Overrides

Event.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:739](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L739)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

Event.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:720](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L720)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:716](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L716)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

Event.readAcl

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:718](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L718)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`T`\>

#### Inherited from

Event.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:715](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L715)

___

### unknown

• **unknown**: `boolean`

#### Inherited from

Event.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:722](https://github.com/project-chip/matter.js/blob/dfd1dc35/packages/matter.js/src/cluster/Cluster.ts#L722)
