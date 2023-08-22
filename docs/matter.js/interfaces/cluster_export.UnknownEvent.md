[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / UnknownEvent

# Interface: UnknownEvent<F\>

[cluster/export](../modules/cluster_export.md).UnknownEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Hierarchy

- [`Event`](../modules/cluster_export.md#event)<`any`, `F`\>

  ↳ **`UnknownEvent`**

## Table of contents

### Properties

- [id](cluster_export.UnknownEvent.md#id)
- [isConditional](cluster_export.UnknownEvent.md#isconditional)
- [mandatoryIf](cluster_export.UnknownEvent.md#mandatoryif)
- [optional](cluster_export.UnknownEvent.md#optional)
- [optionalIf](cluster_export.UnknownEvent.md#optionalif)
- [priority](cluster_export.UnknownEvent.md#priority)
- [schema](cluster_export.UnknownEvent.md#schema)
- [unknown](cluster_export.UnknownEvent.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Inherited from

Event.id

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:659](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L659)

___

### isConditional

• **isConditional**: `boolean`

#### Inherited from

Event.isConditional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:663](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L663)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.mandatoryIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:665](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L665)

___

### optional

• **optional**: `boolean`

#### Inherited from

Event.optional

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:662](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L662)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Inherited from

Event.optionalIf

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:664](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L664)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Inherited from

Event.priority

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:661](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L661)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`any`\>

#### Inherited from

Event.schema

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:660](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L660)

___

### unknown

• **unknown**: ``true``

#### Overrides

Event.unknown

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:670](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L670)
