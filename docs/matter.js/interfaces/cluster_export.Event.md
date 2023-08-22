[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / Event

# Interface: Event<T, F\>

[cluster/export](../modules/cluster_export.md).Event

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `F` | extends [`BitSchema`](../modules/schema_export.md#bitschema) |

## Table of contents

### Properties

- [id](cluster_export.Event.md#id)
- [isConditional](cluster_export.Event.md#isconditional)
- [mandatoryIf](cluster_export.Event.md#mandatoryif)
- [optional](cluster_export.Event.md#optional)
- [optionalIf](cluster_export.Event.md#optionalif)
- [priority](cluster_export.Event.md#priority)
- [schema](cluster_export.Event.md#schema)
- [unknown](cluster_export.Event.md#unknown)

## Properties

### id

• **id**: [`EventId`](../modules/datatype_export.md#eventid)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:659](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L659)

___

### isConditional

• **isConditional**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:663](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L663)

___

### mandatoryIf

• **mandatoryIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:665](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L665)

___

### optional

• **optional**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:662](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L662)

___

### optionalIf

• **optionalIf**: [`ConditionalFeatureList`](../modules/cluster_export.md#conditionalfeaturelist)<`F`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:664](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L664)

___

### priority

• **priority**: [`EventPriority`](../enums/cluster_export.EventPriority.md)

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:661](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L661)

___

### schema

• **schema**: [`TlvSchema`](../classes/tlv_export.TlvSchema.md)<`T`\>

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:660](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L660)

___

### unknown

• **unknown**: `boolean`

#### Defined in

[packages/matter.js/src/cluster/Cluster.ts:666](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/cluster/Cluster.ts#L666)
