[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / UnknownEvent

# Interface: UnknownEvent\<F\>

[cluster/export](../modules/cluster_export.md).UnknownEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Event`](cluster_export.Event.md)\<`any`, `F`\>

  ↳ **`UnknownEvent`**

## Table of contents

### Properties

- [id](cluster_export.UnknownEvent.md#id)
- [isConditional](cluster_export.UnknownEvent.md#isconditional)
- [mandatoryIf](cluster_export.UnknownEvent.md#mandatoryif)
- [optional](cluster_export.UnknownEvent.md#optional)
- [optionalIf](cluster_export.UnknownEvent.md#optionalif)
- [priority](cluster_export.UnknownEvent.md#priority)
- [readAcl](cluster_export.UnknownEvent.md#readacl)
- [schema](cluster_export.UnknownEvent.md#schema)
- [unknown](cluster_export.UnknownEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

[Event](cluster_export.Event.md).[id](cluster_export.Event.md#id)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:715](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L715)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

[Event](cluster_export.Event.md).[isConditional](cluster_export.Event.md#isconditional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:720](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L720)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](cluster_export.Event.md).[mandatoryIf](cluster_export.Event.md#mandatoryif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:722](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L722)

___

### optional

• **optional**: `boolean`

#### Inherited from

[Event](cluster_export.Event.md).[optional](cluster_export.Event.md#optional)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:718](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L718)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)\<`F`\>

#### Inherited from

[Event](cluster_export.Event.md).[optionalIf](cluster_export.Event.md#optionalif)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:721](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L721)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

[Event](cluster_export.Event.md).[priority](cluster_export.Event.md#priority)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:717](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L717)

___

### readAcl

• **readAcl**: [`AccessLevel`](../enums/cluster_export.AccessLevel.md)

#### Inherited from

[Event](cluster_export.Event.md).[readAcl](cluster_export.Event.md#readacl)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:719](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L719)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)\<`any`\>

#### Inherited from

[Event](cluster_export.Event.md).[schema](cluster_export.Event.md#schema)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:716](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L716)

___

### unknown

• **unknown**: ``true``

#### Overrides

[Event](cluster_export.Event.md).[unknown](cluster_export.Event.md#unknown)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:727](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/Cluster.ts#L727)
